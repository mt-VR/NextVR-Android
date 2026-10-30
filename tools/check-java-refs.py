"""Cross-reference check for the NextVR Android sources.

There is no JDK in this sandbox, so this script stands in for the compiler for the classes of
error that are invisible to a syntax check: a method called on a receiver of a *known* type that the
type does not declare (wrong name or wrong arity); a type of this project used without its import;
and a generated `R`/`BuildConfig` used from another package without `import <namespace>.R`. It also
checks that every AIDL interface method is implemented by the class that extends its Stub.

Usage: python3 tools/check-java-refs.py [root]
       python3 tools/check-java-refs.py --self-test
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

ROOT = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith('--') else 'app/src'

# Known false positives of the receiver inference, all confirmed by hand. Each one is a call whose
# receiver name was declared with two different types in two different scopes, so the last
# declaration won: WebSurface#dispatchHandEvent/#evaluate reached through a variable that shares its
# name with a SpatialRenderer field, and IDisplayService#capabilities reached through a local that
# shares its name with ShizukuManager.Listener. Keep this list short and explained: anything else
# that shows up is a real mismatch.
ALLOWED_MESSAGES = set()


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
        self.top_types = {}    # short name of a top-level type -> set of packages declaring it
        self.file_package = {} # path -> package declared by that file

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
        symbols.file_package[path] = package
        for node in tree.types:
            if isinstance(node, (javalang.tree.ClassDeclaration, javalang.tree.InterfaceDeclaration)):
                symbols.top_types.setdefault(node.name, set()).add(package)
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


def statements_of(node):
    """Statements of a block. javalang exposes blocks either as a BlockStatement with `statements`
    or, in several productions (try/catch/finally and lambda bodies), as a plain list."""
    if node is None:
        return []
    if isinstance(node, (list, tuple)):
        return [item for item in node if isinstance(item, javalang.ast.Node)]
    inner = getattr(node, 'statements', None)
    if inner is not None:
        return list(inner)
    return [node] if isinstance(node, javalang.ast.Node) else []


def check_checked_exceptions(symbols):
    """Calls on the shell service declare RemoteException: they must be inside a try (or caught).

    javac enforces this; javalang does not. The rule is applied to receivers whose declared type is
    an AIDL interface of this project, which is how the shell calls are written.
    """
    problems = []
    for path, source in symbols.files.items():
        tree = javalang.parse.parse(source)
        variables = declared_variables(tree)
        throws = {name for name in symbols.aidl}

        def walk_block(node, in_try, method_throws, holders):
            for statement in statements_of(node):
                visit(statement, in_try, method_throws, holders)

        def visit(node, in_try, method_throws, holders):
            if not isinstance(node, javalang.ast.Node):
                return walk_block(node, in_try, method_throws, holders)
            line = node.position[0] if getattr(node, 'position', None) else 0
            if isinstance(node, javalang.tree.TryStatement):
                # Statements inside `try`, `catch` and `finally` are covered by the catches; the
                # resource section is too (it may declare AutoCloseable values).
                walk_block(getattr(node, 'block', None), True, method_throws, holders)
                # A `finally` block is NOT covered by the catches of its own try: an exception there
                # propagates, so it keeps whatever coverage the try itself had.
                walk_block(getattr(node, 'finally_block', None), in_try, method_throws, holders)
                for catch in getattr(node, 'catches', None) or []:
                    walk_block(getattr(catch, 'block', None), True, method_throws, holders)
                walk_block(getattr(node, 'resources', None), True, method_throws, holders)
                return
            if isinstance(node, (javalang.tree.MethodDeclaration, javalang.tree.ConstructorDeclaration)):
                declared = set(getattr(node, 'throws', None) or [])
                holders = {}
                for parameter in getattr(node, 'parameters', []) or []:
                    register_holder(parameter.type, parameter.name, holders, symbols)
                walk_block(getattr(node, 'body', None), False, declared, holders)
                return
            if isinstance(node, javalang.tree.LocalVariableDeclaration) and isinstance(node.type, javalang.tree.ReferenceType):
                for declarator in node.declarators:
                    if declarator.initializer is not None:
                        visit(declarator.initializer, in_try, method_throws, holders)
                    register_holder(node.type, declarator.name, holders, symbols)
                return
            if isinstance(node, javalang.tree.LambdaExpression):
                # A lambda body is analysed on its own: an enclosing try does not cover it, and the
                # functional interface (Runnable here) declares nothing it could throw. Locals of the
                # enclosing method stay visible (captured, and final or effectively final).
                walk_block(getattr(node, 'body', None), False, set(), dict(holders))
                return
            if isinstance(node, javalang.tree.MethodInvocation):
                receiver = node.qualifier if not node.qualifier or '.' not in node.qualifier else None
                receiver_type = holders.get(receiver) if receiver else None
                if receiver_type in throws and 'RemoteException' not in method_throws and not in_try:
                    problems.append(f'{path}:{line}: {receiver}.{node.member}() throws RemoteException '
                                    f'and is not inside a try')
            for child in getattr(node, 'children', []):
                if isinstance(child, (list, tuple)):
                    for item in child:
                        if isinstance(item, javalang.ast.Node):
                            visit(item, in_try, method_throws, holders)
                elif isinstance(child, javalang.ast.Node):
                    visit(child, in_try, method_throws, holders)
            return

        for node in walk(tree):
            if isinstance(node, (javalang.tree.MethodDeclaration, javalang.tree.ConstructorDeclaration)):
                visit(node, False, set(), {})
        problems = sorted(set(problems))
    return problems


def register_holder(type_node, name, holders, symbols):
    """Remembers that `name` holds a value of an AIDL interface type, whatever the declared syntax."""
    declared = declared_type(type_node)
    if declared.split('<')[0] in symbols.aidl or declared in symbols.aidl:
        holders[name] = declared.split('<')[0]
    elif declared.endswith('IDisplayService'):
        holders[name] = 'IDisplayService'


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
            if isinstance(node, javalang.tree.LambdaExpression):
                # A lambda body is analysed on its own: an enclosing try does not cover it, and the
                # functional interface (Runnable here) declares nothing it could throw.
                body = getattr(node, 'body', None)
                statements = getattr(body, 'statements', None) if body is not None else None
                for statement in statements if statements is not None else (body or []):
                    if isinstance(statement, javalang.ast.Node):
                        visit(statement, False, set(), dict(holders))
                return
            if isinstance(node, javalang.tree.MethodInvocation):
                continue
            if not symbols.field_exists(receiver, node.member):
                line = node.position[0] if node.position else 0
                problems.append(f'{path}:{line}: {receiver}.{node.member} (field) not found')
    return problems


# The three import cases. The bug they pin down is the one this rule was written for: a class moved
# into `com.nextvr.app.apps/` that still uses the app's generated R and the activity of the parent
# package without importing them compiles only on a machine with a JDK — which this sandbox is not.
R_WITHOUT_IMPORT = """
package com.nextvr.app.apps;
class Mirror {
    String title(Context context) { return context.getString(R.string.mirror_notification_title); }
    int id() { return R.drawable.nextvr_ic_launcher; }
}
"""
R_WITH_IMPORT = """
package com.metamr.potatovr.sub;
import com.metamr.potatovr.R;
class Mirror {
    String title(Context context) { return context.getString(R.string.app_name); }
}
"""
TYPE_WITHOUT_IMPORT = """
package com.nextvr.app.apps;
class Mirror {
    Class<?> screen() { return NextVrActivity.class; }
}
"""
SHADOWED_IN_NESTED_BLOCK = """
package com.nextvr.app.apps;
class Shadowed {
    void load(String owner) {
        for (ResolveInfo info : list()) {
            if (info != null) {
                PackageInfo info = manage(info);
                use(info);
            }
        }
    }
}
"""
SHADOWED_IN_SIBLING_BLOCKS = """
package com.nextvr.app.apps;
class Siblings {
    void load(String owner) {
        { IDisplayService service = a(); use(service); }
        { IDisplayService service = b(); use(service); }
    }
}
"""
AIDL_CALL_IN_LAMBDA_WITHOUT_TRY = """
package com.nextvr.app.apps;
class Worker {
    void build(Session session) {
        try {
            work.execute(() -> {
                IDisplayService service = shizukuService();
                String error = service.launch("component", 3);
                settle(session, error == null, error);
            });
        } catch (RejectedExecutionException stopped) { }
    }
}
"""
AIDL_CALL_IN_TRY = """
package com.nextvr.app.apps;
class Guarded {
    void build() {
        IDisplayService service = shizukuService();
        String error;
        try {
            error = service.launch("component", 3);
        } catch (Throwable launchError) {
            error = "failed";
        }
        settle(error);
    }
}
"""
AIDL_CALL_IN_METHOD_THAT_DECLARES_THROWS = """
package com.nextvr.app.apps;
class Declared {
    void release() throws RemoteException {
        IDisplayService service = shizukuService();
        service.releaseDisplay(3);
    }
}
"""
AIDL_CALL_IN_FINALLY = """
package com.nextvr.app.apps;
class Released {
    void release() {
        IDisplayService service = shizukuService();
        try { work(); } catch (Throwable ignored) { } finally { service.releaseDisplay(3); }
    }
}
"""


# A generated class of the app: it lives in the namespace of the module, not in a package of its
# own, so every file outside that namespace has to import it. The namespace is read from the module
# that declares it, so the rule stays honest if the app is ever renamed.
def app_namespace():
    try:
        with open('app/build.gradle', encoding='utf-8') as handle:
            match = re.search(r"namespace\s*=?\s*['\"]([\w.]+)['\"]", handle.read())
        return match.group(1) if match else None
    except OSError:
        return None


def strip_comments_and_strings(source):
    """Turns comments and literals into blanks so a mention inside one is not a use."""
    def blank(match):
        return re.sub(r'[^\n]', ' ', match.group(0))
    source = re.sub(r'/\*.*?\*/', blank, source, flags=re.S)
    source = re.sub(r'//[^\n]*', blank, source)
    source = re.sub(r'"(?:\\.|[^"\\])*"', blank, source)
    return source


def check_imports(symbols):
    """A type of this project, or the generated R/BuildConfig, used without its import.

    javac fails on this and nothing else in this script sees it: the call check resolves receivers by
    short name against the whole project, so `R.string.x` reached from another package and a
    `NextVrActivity` whose import was forgotten both look fine here — and both are a broken build. It
    is the cheapest error to make when a class moves to another package and the most expensive to
    find without a compiler, so it is checked.
    """
    problems = []
    namespace = app_namespace()
    for path, source in symbols.files.items():
        package = symbols.file_package.get(path, '')
        code = strip_comments_and_strings(source)
        imports = set(re.findall(r'^\s*import\s+(?:static\s+)?([\w.$*]+)\s*;', source, re.M))

        for generated in ('R', 'BuildConfig') if namespace else ():
            if package == namespace:
                continue
            if not re.search(r'(?<![\w.$])' + generated + r'\.', code):
                continue
            if f'{namespace}.{generated}' in imports or f'{namespace}.*' in imports:
                continue
            problems.append(f'{path}: uses {generated} without `import {namespace}.{generated};`'
                            f' (the file declares package {package or "<default>"})')

        for name, packages in symbols.top_types.items():
            if package in packages or name in imports:
                continue
            if any(f'{declared}.{name}' in imports or f'{declared}.*' in imports for declared in packages):
                continue
            if not re.search(r'(?<![\w.$])' + re.escape(name) + r'\s*\.', code):
                continue
            # A fully qualified use (a.b.Name.method) needs no import.
            if any(re.search(r'(?<![\w.])' + re.escape(declared) + r'\.' + re.escape(name) + r'\s*\.', code)
                   for declared in packages):
                continue
            declared = '/'.join(sorted(packages)) or '<unknown>'
            problems.append(f'{path}: uses {name} (declared in {declared}) without an import')
    return problems


def self_test():
    """Synthetic cases for the rules javac enforces and a syntax check cannot see.

    Both of these cost a CI round each (a local shadowing another local; a call on a shell service
    that declares RemoteException outside a try), so the behaviour of this stand-in for javac is
    pinned down here: `python3 tools/check-java-refs.py --self-test` fails if a rule stops working.
    """
    cases = [
        ('R from another package without its import', R_WITHOUT_IMPORT, check_imports, 1),
        ('R imported from the namespace', R_WITH_IMPORT, check_imports, 0),
        ('a project type of another package without its import',
         TYPE_WITHOUT_IMPORT, check_imports, 1),
        ('local shadows an enclosing local', SHADOWED_IN_NESTED_BLOCK, check_shadowed_locals, 1),
        ('sibling blocks may reuse a name', SHADOWED_IN_SIBLING_BLOCKS, check_shadowed_locals, 0),
        ('RemoteException call outside a try, inside a lambda',
         AIDL_CALL_IN_LAMBDA_WITHOUT_TRY, check_checked_exceptions, 1),
        ('RemoteException call inside a try', AIDL_CALL_IN_TRY, check_checked_exceptions, 0),
        ('RemoteException call in a method that declares it',
         AIDL_CALL_IN_METHOD_THAT_DECLARES_THROWS, check_checked_exceptions, 0),
        ('RemoteException call in a finally without its own catch',
         AIDL_CALL_IN_FINALLY, check_checked_exceptions, 1),
    ]
    failures = []
    for name, source, check, expected in cases:
        symbols = Symbols()
        symbols.aidl['IDisplayService'] = {'launch': 2, 'releaseDisplay': 1}
        symbols.files[f'<{name}>'] = source
        symbols.file_package[f'<{name}>'] = 'com.nextvr.app.apps'
        symbols.top_types['NextVrActivity'] = {'com.nextvr.app'}
        try:
            found = check(symbols)
        except Exception as error:            # a crashed rule is a broken rule
            failures.append(f'{name}: raised {error!r}')
            continue
        if len(found) != expected:
            failures.append(f'{name}: expected {expected} problem(s), got {len(found)}: {found}')
    for failure in failures:
        print('self-test FAILED: ' + failure)
    if failures:
        return 1
    print(f'self-test ok ({len(cases)} cases)')
    return 0


def main():
    symbols = Symbols()
    collect(symbols)
    found = (check_aidl(symbols) + check_calls(symbols) + check_fields(symbols)
             + check_shadowed_locals(symbols) + check_checked_exceptions(symbols)
             + check_imports(symbols))
    problems = sorted({p for p in found if not any(a in p for a in ALLOWED_MESSAGES)})
    for problem in problems:
        print(problem)
    print(f'{len(problems)} reference problem(s) over {len(symbols.files)} file(s)')
    return 1 if problems else 0


if __name__ == '__main__':
    if '--self-test' in sys.argv[1:]:
        sys.exit(self_test())
    sys.exit(0 if main() == 0 else 1)
