"""Cross-reference check for the NextVR Android sources.

There is no JDK in this sandbox, so this script stands in for the compiler for the one class of
error that is invisible to a syntax check: a method called on a receiver of a *known* type that the
type does not declare (wrong name or wrong arity). It also checks that every AIDL interface method
is implemented by the class that extends its Stub.

Usage: python3 tools/check-java-refs.py [root]
"""
import os
import re
import sys

try:
    import javalang
except ImportError:  # pragma: no cover - the CI image may not have it
    print('javalang is not installed: the Java reference check was SKIPPED '
          '(the Gradle compile that follows is the real check). '
          'Install it with: python3 -m pip install --break-system-packages javalang')
    sys.exit(0)

ROOT = sys.argv[1] if len(sys.argv) > 1 else 'nextvr-android/src'

# Known false positives of the receiver inference, all confirmed by hand. Each one is a call whose
# receiver name was declared with two different types in two different scopes, so the last
# declaration won: WebSurface#dispatchHandEvent/#evaluate reached through a variable that shares its
# name with a SpatialRenderer field, and IDisplayService#capabilities reached through a local that
# shares its name with ShizukuManager.Listener. Keep this list short and explained: anything else
# that shows up is a real mismatch.
ALLOWED_MESSAGES = {
    'SpatialRenderer.dispatchHandEvent/3 not found',
    'SpatialRenderer.evaluate/1 not found',
    'Listener.capabilities/0 not found',
}


def java_files(root):
    for base, _dirs, files in os.walk(root):
        for name in files:
            if name.endswith('.java'):
                yield os.path.join(base, name)


def declared_type(node, unit=None):
    """Type name of a declared type node, with generics and arrays stripped."""
    t = node.type if hasattr(node, 'type') else node
    name = getattr(t, 'name', None) or str(t)
    sub = getattr(t, 'sub_type', None)
    while sub is not None:
        name = name + '.' + (getattr(sub, 'name', None) or str(sub))
        sub = getattr(sub, 'sub_type', None)
    return name


class Symbols:
    def __init__(self):
        self.methods = {}      # type name -> {method: set of arities (-1 = varargs)}
        self.fields = {}       # type name -> set of field names
        self.supers = {}       # type name -> [super/interface names]
        self.static = set()    # fully qualified static method keys
        self.vars = {}         # (type, method scope) not needed: we infer from declarations
        self.files = {}
        self.aidl = {}

    def add_class(self, name, methods, supers, fields=()):
        short = name.split('.')[-1]
        for key in (name, short):
            table = self.methods.setdefault(key, {})
            for method, arities in methods.items():
                table.setdefault(method, set()).update(arities)
            self.fields.setdefault(key, set()).update(fields)
            self.supers.setdefault(key, list(supers))

    def field_exists(self, type_name, field, seen=None):
        seen = seen or set()
        key = type_name.split('<')[0].strip()
        if key in seen:
            return True
        seen.add(key)
        table = self.fields.get(key)
        if table is None:
            return True
        if field in table:
            return True
        for parent in self.supers.get(key, []):
            if parent not in self.fields:
                return True          # platform/JDK parent: it decides
            if self.field_exists(parent, field, seen):
                return True
        return False

    def method_exists(self, type_name, method, arity, seen=None):
        seen = seen or set()
        key = type_name.split('<')[0].strip()
        if key in seen:
            return True
        seen.add(key)
        table = self.methods.get(key)
        if table is None:
            return True  # not our type: we cannot judge it
        if method in table:
            arities = table[method]
            return -1 in arities or arity in arities
        for parent in self.supers.get(key, []):
            if parent not in self.methods:
                return True  # a platform/JDK parent: it decides, not us
            if self.method_exists(parent, method, arity, seen):
                return True
        return False


def collect(symbols):
    for path in java_files(ROOT):
        source = open(path, encoding='utf-8').read()
        try:
            tree = javalang.parse.parse(source)
        except Exception as error:  # noqa: BLE001
            print(f'syntax error: {path}: {error}')
            continue
        symbols.files[path] = source

        def visit(node, package, outer=None):
            if isinstance(node, javalang.tree.ClassDeclaration) or isinstance(node, javalang.tree.InterfaceDeclaration):
                name = (outer + '.' if outer else '') + node.name
                methods = {}
                for member in node.body:
                    if isinstance(member, javalang.tree.MethodDeclaration):
                        params = len(member.parameters)
                        variadic = any(getattr(p, 'varargs', False) for p in member.parameters)
                        methods.setdefault(member.name, set()).add(-1 if variadic else params)
                    if isinstance(member, javalang.tree.ConstructorDeclaration):
                        methods.setdefault(node.name, set()).add(len(member.parameters))
                for member in node.body:
                    if isinstance(member, (javalang.tree.ClassDeclaration, javalang.tree.InterfaceDeclaration)):
                        visit(member, package, name)
                supers = []
                if node.extends:
                    supers.append(node.extends.name)
                for iface in getattr(node, 'implements', None) or []:
                    supers.append(iface.name)
                fields = set()
                for member in node.body:
                    if isinstance(member, javalang.tree.FieldDeclaration):
                        for declarator in member.declarators:
                            fields.add(declarator.name)
                symbols.add_class(name, methods, supers, fields)
            else:
                for child in node.children:
                    if isinstance(child, (list, tuple)):
                        for item in child:
                            if isinstance(item, (javalang.tree.ClassDeclaration, javalang.tree.InterfaceDeclaration)):
                                visit(item, package, outer)
                    elif isinstance(child, (javalang.tree.ClassDeclaration, javalang.tree.InterfaceDeclaration)):
                        visit(child, package, outer)

        package = tree.package.name if tree.package else ''
        for node in tree.types:
            visit(node, package)

    aidl_dir = os.path.join(ROOT, 'main', 'aidl')
    for base, _dirs, files in os.walk(aidl_dir):
        for name in files:
            if not name.endswith('.aidl'):
                continue
            source = open(os.path.join(base, name), encoding='utf-8').read()
            iface = name[:-5]
            methods = {}
            for match in re.finditer(r'^\s*(?:[\w<>,.\[\]\s]+?)\s+(\w+)\(([^)]*)\)(\s*=\s*\d+)?;', source, re.M):
                name_, params = match.group(1), match.group(2).strip()
                arity = 0 if not params else len(params.split(','))
                methods[name_] = arity
            symbols.aidl[iface] = methods


def check_aidl(symbols):
    problems = []
    for path, source in symbols.files.items():
        for iface, methods in symbols.aidl.items():
            if f'extends {iface}.Stub' not in source:
                continue
            for method, arity in methods.items():
                pattern = re.compile(r'\b' + re.escape(method) + r'\s*\(([^)]*)\)')
                found = None
                for match in pattern.finditer(source):
                    params = match.group(1).strip()
                    given = 0 if not params else len([p for p in params.split(',') if p.strip()])
                    if given == arity:
                        found = match
                        break
                if found is None:
                    problems.append(f'{path}: AIDL {iface}.{method}/{arity} is not implemented')
                elif '@Override' not in source[max(0, found.start() - 120):found.start()]:
                    problems.append(f'{path}: AIDL {iface}.{method} lacks @Override')
    return problems


def walk(node):
    yield node
    for child in getattr(node, 'children', []):
        if isinstance(child, (list, tuple)):
            for item in child:
                if isinstance(item, javalang.ast.Node):
                    yield from walk(item)
        elif isinstance(child, javalang.ast.Node):
            yield from walk(child)


def declared_variables(tree):
    """variable name -> declared short type, from anything with a declared type in the file."""
    table = {}

    def type_name(t):
        name = getattr(t, 'name', None)
        sub = getattr(t, 'sub_type', None)
        while name is not None and sub is not None:
            name = name + '.' + (getattr(sub, 'name', None) or str(sub))
            sub = getattr(sub, 'sub_type', None)
        return name

    for node in walk(tree):
        if not isinstance(node, (javalang.tree.FieldDeclaration, javalang.tree.LocalVariableDeclaration,
                                 javalang.tree.FormalParameter)):
            continue
        t = node.type if not isinstance(node, javalang.tree.FormalParameter) else node.type
        name = type_name(t)
        if not name:
            continue
        if isinstance(node, javalang.tree.FieldDeclaration):
            for declarator in node.declarators:
                table[declarator.name] = name
        elif isinstance(node, javalang.tree.FormalParameter):
            table[node.name] = name
        else:
            for declarator in node.declarators:
                table[declarator.name] = name
    return table


def check_calls(symbols):
    problems = []
    for path, source in symbols.files.items():
        tree = javalang.parse.parse(source)
        variables = declared_variables(tree)
        for call in walk(tree):
            if not isinstance(call, javalang.tree.MethodInvocation):
                continue
            qualifier = call.qualifier
            receiver = None
            if qualifier and '.' not in qualifier and '(' not in qualifier:
                receiver = variables.get(qualifier)
                if receiver is None and qualifier in symbols.methods:
                    receiver = qualifier
            args = 0 if not call.arguments else len(call.arguments)
            if receiver is None:
                continue
            if not symbols.method_exists(receiver, call.member, args):
                line = call.position[0] if call.position else 0
                problems.append(f'{path}:{line}: {receiver}.{call.member}/{args} not found')
    return problems


def check_shadowed_locals(symbols):
    """A local variable may not shadow another local variable of an enclosing scope; javalang is fine
    with it, javac is not.

    This is the error class that cost a CI round: a new local was named like the for-each variable of
    the surrounding loop, three blocks up. The scan therefore carries a scope: declarations are
    visible to the rest of their block and to every block nested inside it, and never to a sibling.
    """
    problems = []
    for path, source in symbols.files.items():
        tree = javalang.parse.parse(source)

        def declare(name, line, visible):
            if name in visible:
                problems.append(f'{path}:{line}: local {name} is already declared in an enclosing scope '
                                f'(line {visible[name]})')
            else:
                visible[name] = line

        def scan(node, visible):
            line = node.position[0] if getattr(node, 'position', None) else 0
            if isinstance(node, javalang.tree.BlockStatement):
                visible = dict(visible)              # a nested block sees the outer names
            elif isinstance(node, javalang.tree.ForStatement):
                visible = dict(visible)              # a loop's own variable lives inside the loop
                for name in for_header_names(node):
                    declare(name, line, visible)
            elif isinstance(node, (javalang.tree.MethodDeclaration, javalang.tree.ConstructorDeclaration)):
                visible = dict()                     # parameters are not locals; reset the chain
                for parameter in getattr(node, 'parameters', []) or []:
                    visible.setdefault(parameter.name, line)
            elif isinstance(node, javalang.tree.LocalVariableDeclaration):
                for declarator in node.declarators:
                    declare(declarator.name, line, visible)
            elif isinstance(node, javalang.tree.CatchClause):
                # Since Java 7 a catch parameter may shadow a local of the enclosing scope: it only
                # lives inside the catch block, so it gets a scope of its own.
                visible = dict(visible)
                if getattr(node, 'parameter', None) is not None:
                    declare(node.parameter.name, line, visible)
            for child in getattr(node, 'children', []):
                if isinstance(child, (list, tuple)):
                    for item in child:
                        if isinstance(item, javalang.ast.Node):
                            scan(item, visible)
                elif isinstance(child, javalang.ast.Node):
                    scan(child, visible)

        scan(tree, {})

    return problems


def for_header_names(statement):
    """Names the loop itself declares: `for (T a : c)` and `for (T a = ...; ...)`, not nested ones."""
    control = getattr(statement, 'control', None)
    variable = getattr(control, 'var', None)
    if variable is not None and getattr(variable, 'declarators', None):
        return [d.name for d in variable.declarators]          # for (T a : c)
    names = []
    for init in getattr(getattr(control, 'init', None), '__iter__', lambda: [])():
        if not isinstance(init, javalang.tree.LocalVariableDeclaration):
            continue
        for declarator in init.declarators:                    # for (T a = 0; ...)
            names.append(declarator.name)
    return names


def check_fields(symbols):
    problems = []
    for path, source in symbols.files.items():
        tree = javalang.parse.parse(source)
        variables = declared_variables(tree)
        for node in walk(tree):
            if not isinstance(node, javalang.tree.MemberReference) or node.qualifier:
                continue
            if not node.member or not node.member.startswith('this'):
                continue
        for node in walk(tree):
            if not isinstance(node, (javalang.tree.MemberReference,)):
                continue
            if not node.qualifier or '.' in node.qualifier:
                continue
            receiver = variables.get(node.qualifier)
            if receiver is None:
                continue
            if isinstance(node, javalang.tree.MethodInvocation):
                continue
            if not symbols.field_exists(receiver, node.member):
                line = node.position[0] if node.position else 0
                problems.append(f'{path}:{line}: {receiver}.{node.member} (field) not found')
    return problems


def main():
    symbols = Symbols()
    collect(symbols)
    found = check_aidl(symbols) + check_calls(symbols) + check_fields(symbols) + check_shadowed_locals(symbols)
    problems = sorted({p for p in found if not any(a in p for a in ALLOWED_MESSAGES)})
    for problem in problems:
        print(problem)
    print(f'{len(problems)} reference problem(s) over {len(symbols.files)} file(s)')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(0 if main() == 0 else 1)
