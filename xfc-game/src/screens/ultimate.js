import { el, avatar } from "../ui/dom.js";
import { flagSvg } from "../ui/flags.js";
import { saveProfile } from "../state.js";
import { cheer, applause } from "../audio.js";
import { TEAMS } from "../data/teams.js";
import * as UT from "../data/ultimate.js";

const NAV = [
  ["home", "Início"],
  ["club", "Meu Clube"],
  ["squad", "Elenco"],
  ["market", "Mercado de Transferências"],
  ["evolution", "Evoluções"],
  ["objectives", "Objetivos"],
  ["dme", "DME"],
  ["battles", "Squad Battles"],
  ["rivals", "Division Rivals"],
  ["champions", "FUT Champions"],
  ["store", "Loja"],
  ["events", "Eventos especiais"],
  ["season", "Temporada"],
];
const num = (n) => Number(n || 0).toLocaleString("pt-BR");
const button = (text, action, cls = "") =>
  el("button", {
    type: "button",
    class: `ut-button ${cls}`,
    text,
    onClick: action,
  });
const text = (tag, value, cls = "") => el(tag, { text: value, class: cls });
const input = (placeholder, value = "") =>
  el("input", { placeholder, value, "aria-label": placeholder });
const select = (label, items, value, change) =>
  el(
    "select",
    { "aria-label": label, onChange: (e) => change(e.target.value) },
    items.map(([id, name]) =>
      el("option", { value: id, selected: String(id) === String(value) }, name),
    ),
  );
export function utCard(c, { small = false, action = null } = {}) {
  const node = el(
    action ? "button" : "article",
    {
      class: `ut-card ut-card--${c.rarity}${small ? " ut-card--small" : ""}`,
      type: action ? "button" : null,
      "aria-label": `${c.name}, ${c.rating}, ${c.position}, ${UT.RARITIES[c.rarity]}`,
      dataset: { card: c.id },
      onClick: action || (() => {}),
    },
    el(
      "div",
      { class: "ut-card__rating" },
      text("b", c.rating),
      text("span", c.position),
    ),
    avatar(c),
    text("b", c.name, "ut-card__name"),
    el(
      "div",
      { class: "ut-card__marks" },
      c.country
        ? el("span", { title: c.country.name }, flagSvg(c.country.flag))
        : text("span", "País n/d"),
      el("img", { src: c.crest, alt: c.team }),
    ),
    el(
      "div",
      { class: "ut-card__stats" },
      [
        ["pace", "RIT"],
        ["shooting", "FIN"],
        ["passing", "PAS"],
        ["dribbling", "CON"],
        ["defending", "DEF"],
        ["physical", "FIS"],
      ].map(([key, label]) =>
        el("span", {}, text("b", c.stats[key]), text("small", label)),
      ),
    ),
    text(
      "small",
      UT.RARITIES[c.rarity] + (c.level ? ` +${c.level}` : ""),
      "ut-card__rarity",
    ),
  );
  node.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
  });
  return node;
}
export function ultimateTeamScreen(ctx, params = {}) {
  const profile = ctx.state.profile,
    u = UT.ensureUltimate(profile);
  let section = params.section || "home",
    selected = null,
    slot = 9,
    page = 0,
    revealStep = 0,
    timer = null,
    disposed = false;
  const filters = { name: "", position: "", club: "", min: "", rarity: "" };
  const dme = new Set();
  const root = el("div", { class: "screen screen--ultimate ut" }),
    header = el("header", { class: "ut-header" }),
    nav = el("nav", { class: "ut-nav", "aria-label": "Ultimate Team" }),
    main = el("main", { class: "ut-main" }),
    notice = el("div", {
      class: "ut-toast",
      role: "status",
      "aria-live": "polite",
    }),
    modal = el("div", { class: "ut-modal", hidden: true });
  root.append(
    header,
    nav,
    main,
    text(
      "footer",
      "XFC 27 • Experiência local · partidas contra IA · moedas virtuais · salvo neste dispositivo",
      "ut-footer",
    ),
    notice,
    modal,
  );
  function persist() {
    const ok = saveProfile(ctx.state);
    if (!ok)
      notice.textContent =
        "Não foi possível salvar neste navegador. Não feche o jogo até liberar armazenamento.";
    return ok;
  }
  function act(result) {
    const saved = persist();
    if (saved) notice.textContent = result.message;
    paint();
    return result.ok;
  }
  function go(id) {
    section = id;
    page = 0;
    selected = null;
    main.scrollTop = 0;
    paint();
  }
  function heading(title, description) {
    const artwork={market:'market',store:'store',events:'events'}[section];
    if(artwork)main.append(el('div',{class:`ut-reference-banner ut-reference-banner--${artwork}`},
      el('img',{src:`assets/ultimate/reference/${artwork}-art.jpg`,alt:'Arte promocional da referência fornecida'}),
      text('small','Arte promocional • cartas ilustrativas, não são recompensa garantida','ut-art-caption')));
    main.append(
      text("p", "XFC / ULTIMATE TEAM", "ut-eyebrow"),
      text("h1", title),
      text("p", description, "ut-description"),
    );
  }
  function panel(title, description, ...children) {
    return el(
      "section",
      { class: "ut-panel" },
      text("h2", title),
      text("p", description),
      ...children,
    );
  }
  function confirm(title, message, action) {
    modal.hidden = false;
    modal.replaceChildren(
      el(
        "div",
        {
          class: "ut-dialog",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": title,
        },
        text("h2", title),
        text("p", message),
        button("Confirmar", () => {
          modal.hidden = true;
          action();
        }),
        button("Cancelar", () => {
          modal.hidden = true;
        }),
      ),
    );
    modal.querySelector("button")?.focus();
  }
  function paint() {
    if (disposed) return;
    UT.ensureUltimate(profile);
    root.dataset.section=section;
    header.replaceChildren(
      button("XFC 27", () => ctx.go(params.returnTo || "menu"), "ut-brand"),
      el("img",{src:"assets/ultimate/reference/brand.jpg",alt:"XFC 27 Ultimate Team",class:"ut-reference-brand"}),
      text("span", "LOCAL / IA", "ut-offline"),
      text("span", `${num(profile.coins)} ◉`, "ultimate__coin-value"),
      text("span", `${num(u.season.xp)} XP`),
      button("Voltar", () => ctx.go(params.returnTo || "menu")),
    );
    nav.replaceChildren(
      ...NAV.map(([id, label]) =>
        button(label, () => go(id), `${section === id ? "is-active" : ""}`),
      ),
    );
    main.replaceChildren();
    (
      ({
        home: home,
        club: club,
        squad: squad,
        market: market,
        evolution: evolution,
        objectives: objectives,
        dme: dmeScreen,
        store: store,
        events: events,
        season: season,
        battles: () => mode("battles"),
        rivals: () => mode("rivals"),
        champions: () => mode("champions"),
      })[section] || home
    )();
    if (u.reveal && modal.hidden) reveal();
  }
  function home() {
    heading(
      "Monte seu time. Conquiste o campo.",
      "Seu clube, suas cartas e sua história. Todos os confrontos são contra a IA do XFC.",
    );
    const links=[['battles','Jogar UT'],['club','Meu Clube'],['squad','Meu Elenco'],['market','Mercado de Transferências'],['dme','Desafios de Montagem de Elenco'],['season','Temporadas'],['objectives','Objetivos'],['store','Loja']];
    main.append(el('section',{class:'ut-reference-home'},
      el('div',{class:'ut-reference-menu'},links.map(([id,label])=>button(label+'  ›',()=>go(id))))),
      el('div',{class:'ut-tiles'},[['squad','Gerenciar elenco'],['events','Festival do Futebol'],['evolution','Evoluções']].map(([id,label])=>button(label,()=>go(id),'ut-tile'))));
    if (u.pending)
      main.append(
        panel(
          "Confronto pendente",
          "Reabra o confronto desde o início ou abandone por derrota, sem recompensa.",
          button("Retomar confronto", launchPending),
          button("Abandonar confronto", () =>
            confirm(
              "Abandonar?",
              "Conta como derrota na série. Não concede moedas nem progresso.",
              () =>
                act(
                  UT.settleUtMatch(profile, u.pending.id, [0, 3], {
                    abandoned: true,
                  }),
                ),
            ),
          ),
        ),
      );
  }
  function detail(c) {
    selected = c.uid;
    modal.hidden = false;
    modal.replaceChildren(
      el(
        "div",
        {
          class: "ut-dialog ut-player-detail",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": c.name,
        },
        utCard(c),
        el(
          "div",
          {},
          text("h2", c.fullName),
          text(
            "p",
            `${c.team} • ${c.country?.name || "Nacionalidade não cadastrada"} • ${c.edition}`,
          ),
          text(
            "p",
            c.fictional
              ? "Atleta fictício do elenco XFC."
              : "Retrato do acervo XFC quando disponível. Fontes e licenças em assets/players/CREDITS.md.",
          ),
          text(
            "p",
            `Valor de compra: ${num(c.price)} moedas. ${c.tradeable ? "Venda imediata ao mercado local por 85% do valor." : "Carta inegociável."}`,
          ),
          button("Escalar / substituir", () => {
            modal.hidden = true;
            section = "squad";
            paint();
          }),
          button("Iniciar evolução · 500 ◉", () => {
            modal.hidden = true;
            act(UT.startEvolution(profile, c.uid));
          }),
          button(`Vender · ${num(Math.floor(c.price * 0.85))} ◉`, () =>
            confirm(
              "Vender carta?",
              `${c.name} será removido do clube. Cartas escaladas precisam ser retiradas antes.`,
              () => act(UT.sellUtPlayer(profile, c.uid)),
            ),
          ),
          button("Fechar", () => {
            modal.hidden = true;
          }),
        ),
      ),
    );
  }
  function club() {
    heading(
      "Meu Clube",
      `${u.inventory.length} cartas • ${u.lifetime.played} partidas UT • ${u.lifetime.wins} vitórias • ${u.lifetime.goals} gols`,
    );
    const name = input("Nome do clube", u.clubName);
    main.append(
      el(
        "div",
        { class: "ut-toolbar" },
        name,
        button("Salvar nome", () => {
          u.clubName = name.value.trim().slice(0, 30) || "Meu Clube XFC";
          persist();
          paint();
        }),
        button("Meu elenco", () => go("squad")),
      ),
    );
    cardCollection(
      u.inventory.map((x) => UT.unitCard(u, x.uid)),
      (c) => detail(c),
    );
  }
  function cardCollection(cards, action) {
    const size = 12,
      max = Math.max(1, Math.ceil(cards.length / size));
    page = Math.min(page, max - 1);
    main.append(
      el(
        "div",
        { class: "ut-card-grid" },
        cards
          .slice(page * size, (page + 1) * size)
          .map((c) => utCard(c, { action: () => action(c) })),
      ),
    );
    if (!cards.length) main.append(text("p", "Nenhuma carta encontrada."));
    main.append(
      el(
        "div",
        { class: "ut-toolbar" },
        button("← Anterior", () => {
          page = Math.max(0, page - 1);
          paint();
        }),
        text("span", `Página ${page + 1} de ${max}`),
        button("Próxima →", () => {
          page = Math.min(max - 1, page + 1);
          paint();
        }),
      ),
    );
  }
  function squad() {
    const s = UT.activeSquad(u);
    heading(
      "Meu Elenco",
      `Entrosamento ${UT.chemistry(u)}/100 • toque numa vaga e escolha uma carta. Arraste titulares para posicionar livremente. Entrosamento concede até +2 nos atributos em campo.`,
    );
    const name = input("Nome do novo elenco", "");
    main.append(
      el(
        "div",
        { class: "ut-toolbar" },
        select(
          "Elenco salvo",
          u.squads.map((s) => [s.id, s.name]),
          u.active,
          (id) => {
            if (u.pending) {
              notice.textContent =
                "Conclua o confronto antes de trocar de elenco.";
              return;
            }
            u.active = id;
            persist();
            paint();
          },
        ),
        select(
          "Formação",
          Object.keys(UT.FORMATIONS).map((k) => [k, k]),
          s.formation,
          (id) => act(UT.setUtFormation(profile, id)),
        ),
        name,
        button("Salvar como novo", () =>
          act(UT.saveUtSquad(profile, name.value)),
        ),
        button("Excluir elenco", () =>
          confirm("Excluir elenco?", "As cartas permanecem no clube.", () => {
            if (u.squads.length < 2 || u.pending) {
              notice.textContent =
                "Mantenha pelo menos um elenco; termine o confronto pendente.";
              return;
            }
            u.squads = u.squads.filter((x) => x.id !== s.id);
            u.active = u.squads[0].id;
            persist();
            paint();
          }),
        ),
      ),
    );
    const pitch = el("div", {
        class: "ut-pitch",
        "aria-label": "Campo tático",
      }),
      points = UT.formationPoints(s.formation),
      wrap = el("div", { class: "ut-squad-layout" }, pitch);
    s.slots.forEach((uid, i) => {
      const c = UT.unitCard(u, uid),
        p = s.positions[uid] || points[i];
      const node = c
        ? utCard(c, { small: true })
        : button(`+ ${UT.FORMATIONS[s.formation][i]}`, () => {
            slot = i;
            paint();
          });
      node.classList.add("ut-slot");
      node.dataset.slot = i;
      if(uid===s.captain)node.append(text('span','C','ut-captain'));
      node.classList.toggle("is-selected", slot === i);
      node.style.left = p.x + "%";
      node.style.top = p.y + "%";
      node.tabIndex = 0;
      let start = null,
        moved = false;
      node.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        start = { x: e.clientX, y: e.clientY };
        moved = false;
        node.setPointerCapture(e.pointerId);
      });
      node.addEventListener("pointermove", (e) => {
        if (!start || !uid || u.pending) return;
        if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > 5)
          moved = true;
        if (!moved) return;
        const r = pitch.getBoundingClientRect();
        const p = {
          x: Math.max(7, Math.min(93, ((e.clientX - r.left) / r.width) * 100)),
          y: Math.max(10, Math.min(92, ((e.clientY - r.top) / r.height) * 100)),
        };
        s.positions[uid] = p;
        node.style.left = p.x + "%";
        node.style.top = p.y + "%";
      });
      node.addEventListener("pointerup", () => {
        if (!start) return;
        start = null;
        slot = i;
        persist();
        paint();
      });
      node.addEventListener("pointercancel", () => {
        start = null;
        persist();
      });
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          slot = i;
          paint();
        }
      });
      pitch.append(node);
    });
    const current = UT.unitCard(u, s.slots[slot] || s.bench[slot - 11]);
    const side = panel(
      "Vaga selecionada",
      slot < 11
        ? `Titular ${slot + 1} · ${UT.FORMATIONS[s.formation][slot]}`
        : `Reserva ${slot - 10}`,
      text("p", current?.name || "Vaga livre"),
    );
    if (current)
      side.append(
        button("Retirar da escalação", () =>
          act(UT.removeUtPlayer(profile, current.uid)),
        ),
        button(
          s.captain === current.uid ? "Capitão atual" : "Definir capitão",
          () => {
            if (u.pending) {notice.textContent='Conclua o confronto antes de mudar o capitão.';return;}
            if(!s.slots.includes(current.uid)){notice.textContent='O capitão precisa ser titular.';return;}
            s.captain = current.uid;
            persist();
            paint();
          },
        ),
      );
    const choose = select(
      "Carta para esta vaga",
      [
        ["", "Selecione uma carta"],
        ...u.inventory.map((x) => {
          const c = UT.unitCard(u, x.uid);
          return [x.uid, `${c.rating} ${c.position} · ${c.name} (${x.uid})`];
        }),
      ],
      selected || "",
      (id) => {
        selected = id;
      },
    );
    side.append(
      choose,
      button("Confirmar substituição", () =>
        act(UT.assignUtPlayer(profile, selected, slot)),
      ),
      button("Jogar com este elenco", () => go("battles")),
    );
    wrap.append(side);
    main.append(wrap);
    main.append(
      text("h3", "Banco de reservas"),
      el(
        "div",
        { class: "ut-bench" },
        Array.from({ length: 7 }, (_, i) => {
          const c = UT.unitCard(u, s.bench[i]);
          return button(
            c ? `${c.rating} ${c.name}` : `+ Reserva ${i + 1}`,
            () => {
              slot = i + 11;
              paint();
            },
            slot === i + 11 ? "is-active" : "",
          );
        }),
      ),
    );
  }
  function market() {
    heading(
      "Mercado de Transferências",
      "Mercado LOCAL de preços fixos. Compra e venda imediatas com moedas do jogo; sem leilões ou outros usuários.",
    );
    const search = input("Nome do jogador", filters.name),
      min = input("Overall mínimo", filters.min);
    min.type = "number";
    min.min = 1;
    min.max = 99;
    main.append(
      el(
        "div",
        { class: "ut-toolbar" },
        search,
        min,
        select(
          "Posição",
          [
            ["", "Todas as posições"],
            ...Object.keys(UT.FORMATIONS)
              .flatMap((k) => UT.FORMATIONS[k])
              .filter((v, i, a) => a.indexOf(v) === i)
              .map((k) => [k, k]),
          ],
          filters.position,
          (id) => {
            filters.position = id;
          },
        ),
        select(
          "Clube",
          [["", "Todos os clubes"], ...TEAMS.map((t) => [t.id, t.name])],
          filters.club,
          (id) => {
            filters.club = id;
          },
        ),
        select(
          "Raridade",
          [["", "Todas as raridades"], ...Object.entries(UT.RARITIES)],
          filters.rarity,
          (id) => {
            filters.rarity = id;
          },
        ),
        button("Pesquisar jogadores", () => {
          filters.name = search.value;
          filters.min = min.value;
          page = 0;
          paint();
        }),
      ),
    );
    const cards = UT.UT_CATALOG.filter(
      (c) =>
        (!filters.name ||
          c.fullName
            .toLocaleLowerCase()
            .includes(filters.name.toLocaleLowerCase())) &&
        (!filters.club || c.teamId === filters.club) &&
        (!filters.position || c.position === filters.position) &&
        (!filters.min || c.rating >= Number(filters.min)) &&
        (!filters.rarity || c.rarity === filters.rarity),
    );
    const max = Math.max(1, Math.ceil(cards.length / 12));
    page = Math.min(page, max - 1);
    main.append(
      text("p", `${cards.length} resultados · preço em moedas virtuais`),
      el(
        "div",
        { class: "ut-card-grid" },
        cards.slice(page * 12, page * 12 + 12).map((c) =>
          el(
            "div",
            { class: "ut-listing" },
            utCard(c),
            text("p", `${num(c.price)} ◉`),
            button(
              "Comprar",
              () =>
                confirm(
                  "Contratar jogador",
                  `${c.name} · ${num(c.price)} moedas.`,
                  () => act(UT.buyUtPlayer(profile, c.id)),
                ),
              "ultimate-card__buy",
            ),
          ),
        ),
      ),
      el(
        "div",
        { class: "ut-toolbar" },
        button("← Anterior", () => {
          page = Math.max(0, page - 1);
          paint();
        }),
        text("span", `${page + 1} / ${max}`),
        button("Próxima →", () => {
          page = Math.min(max - 1, page + 1);
          paint();
        }),
      ),
    );
    main.append(
      panel(
        "Histórico local",
        "Últimas compras e vendas",
        ...u.history
          .slice(0, 8)
          .map((h) =>
            text(
              "p",
              `${h.type} · ${h.name} · ${h.coins > 0 ? "+" : ""}${num(h.coins)} ◉`,
            ),
          ),
      ),
    );
  }
  function store() {
    heading(
      "Loja",
      "Pacotes de cartas comprados exclusivamente com moedas virtuais. Duplicatas viram instâncias separadas no clube.",
    );
    main.append(
      el(
        "div",
        { class: "ut-pack-grid" },
        Object.entries(UT.PACKS).map(([id, p]) =>
          el(
            "section",
            { class: `ut-panel ut-pack ut-pack--${id}` },
            el(
              "div",
              { class: "ut-pack-art" },
              text("b", "UT"),
              text("small", "XFC 27"),
            ),
            text("h2", p.name),
            text("p", `${p.count} cartas • ${num(p.cost)} ◉`),
            text(
              "p",
              p.odds
                .map(([k, n]) => `${UT.RARITIES[k]} ${Math.round(n * 100)}%`)
                .join(" / "),
            ),
            button("Comprar e abrir", () =>
              confirm(
                "Abrir pacote?",
                `${p.name} custa ${num(p.cost)} moedas. As probabilidades são por carta, sem garantia de estrela.`,
                () => {
                  if (act(UT.openUtPack(profile, id))) reveal();
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
  function reveal() {
    if (!u.reveal) return;
    clearTimeout(timer);
    revealStep = 0;
    modal.hidden = false;
    const cards = u.reveal.uids
        .map((id) => UT.unitCard(u, id))
        .filter(Boolean)
        .sort((a, b) => b.rating - a.rating),
      star = cards[0];
    function draw() {
      if (disposed || !u.reveal) return;
      modal.replaceChildren(
        el(
          "div",
          {
            class: `ut-reveal ut-reveal--${revealStep} ${["special", "totw", "hero", "icon"].includes(star.rarity) ? "is-rare" : ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Revelação do pacote",
          },
          text("p", "XFC 27 · NOVAS CONTRATAÇÕES", "ut-eyebrow"),
          el("div", { class: "ut-reveal-lights" }),
          text(
            "h1",
            revealStep === 0
              ? "AS LUZES SE ACENDEM"
              : revealStep === 1
                ? star.country?.name || "PAÍS NÃO CADASTRADO"
                : revealStep === 2
                  ? star.position
                  : star.name,
          ),
          revealStep === 1 && star.country
            ? el("div", { class: "ut-reveal-flag" }, flagSvg(star.country.flag))
            : null,
          revealStep >= 3
            ? el(
                "div",
                { class: "ut-reveal-cards" },
                cards.map((c) => utCard(c)),
              )
            : el("div", { class: "ut-reveal-smoke" }),
          button(
            revealStep < 3 ? "Pular revelação" : "Continuar para o clube",
            () => {
              clearTimeout(timer);
              if (revealStep < 3) {
                revealStep = 3;
                draw();
              } else {
                u.reveal = null;
                modal.hidden = true;
                persist();
                go("club");
              }
            },
          ),
        ),
      );
      if (revealStep < 3)
        timer = setTimeout(() => {
          revealStep++;
          if (revealStep === 3) {
            cheer({ duration: 1.5, peak: 0.3 });
            applause();
          }
          draw();
        }, 1250);
    }
    draw();
  }
  function objectives() {
    heading(
      "Objetivos",
      "Resgate as recompensas de partidas UT concluídas. Renovações diárias e semanais em UTC.",
    );
    main.append(
      el(
        "div",
        { class: "ut-tiles" },
        UT.objectiveList(profile).map((o) =>
          panel(
            o.title,
            o.detail,
            text("strong", `${Math.min(o.current, o.target)} / ${o.target}`),
            el("progress", {
              value: Math.min(o.current, o.target),
              max: o.target,
            }),
            text("p", `${num(o.coins)} ◉ + ${o.xp} XP`),
            button(o.claimed ? "Resgatado" : "Resgatar recompensa", () =>
              act(UT.claimObjective(profile, o.id)),
            ),
          ),
        ),
      ),
    );
  }
  function season() {
    main.append(el('div',{class:'ut-season-medal'},text('b',String(Math.min(20,Math.floor(u.season.xp/500))))));
    heading(
      "Temporada XFC",
      `${num(u.season.xp)} XP • temporadas locais de 28 dias • nível ${Math.min(20, Math.floor(u.season.xp / 500))}`,
    );
    main.append(
      el(
        "div",
        { class: "ut-tiles" },
        Array.from({ length: 20 }, (_, i) =>
          panel(
            `Nível ${i + 1}`,
            `${(i + 1) * 500} XP necessários`,
            text("strong", `${(i + 1) % 5 === 0 ? "2.500" : "350"} ◉`),
            button(
              u.season.claimed.includes(i + 1) ? "Resgatado" : "Resgatar",
              () => act(UT.claimSeason(profile, i + 1)),
            ),
          ),
        ),
      ),
    );
  }
  function evolution() {
    heading(
      "Evoluções",
      "Escolha um atleta, jogue duas partidas com ele titular e receba +2 de overall e atributos. Máximo +6 por carta.",
    );
    if (u.evolution) {
      const c = UT.unitCard(u, u.evolution.uid);
      main.append(
        panel(
          "Evolução ativa",
          `${c.name} • ${u.evolution.played}/2 partidas`,
          utCard(c),
          button("Concluir evolução", () => act(UT.claimEvolution(profile))),
        ),
      );
    } else {
      let id = u.inventory[0]?.uid;
      main.append(
        panel(
          "Nova jornada",
          "Custo: 500 moedas. A carta não pode ser vendida durante a evolução.",
          select(
            "Atleta para evoluir",
            u.inventory.map((x) => [
              x.uid,
              `${UT.unitCard(u, x.uid).name} · +${x.level}`,
            ]),
            id,
            (v) => {
              id = v;
            },
          ),
          button("Iniciar evolução", () => act(UT.startEvolution(profile, id))),
        ),
      );
    }
  }
  function dmeScreen() {
    heading(
      "Desafios de Montagem de Elenco",
      "Troca semanal: envie 3 cartas com média mínima 65, de pelo menos 2 clubes. Receba 1 Pacote Ouro.",
    );
    main.append(
      text(
        "p",
        "ATENÇÃO: as três cartas serão consumidas permanentemente. Retire-as dos elencos antes de enviar.",
      ),
      text("strong", `${dme.size}/3 selecionadas`),
      button("Enviar cartas", () =>
        confirm(
          "Consumir as três cartas?",
          "As cartas selecionadas sairão definitivamente do clube. A operação não pode ser desfeita.",
          () => {
            if (act(UT.submitDme(profile, [...dme]))) {
              dme.clear();
              reveal();
            }
          },
        ),
      ),
    );
    main.append(
      el(
        "div",
        { class: "ut-card-grid" },
        u.inventory.map((x) => {
          const c = UT.unitCard(u, x.uid);
          const node = utCard(c, {
            action: () => {
              if (dme.has(c.uid)) dme.delete(c.uid);
              else if (dme.size < 3) dme.add(c.uid);
              paint();
            },
          });
          node.classList.toggle("is-selected", dme.has(c.uid));
          return node;
        }),
      ),
    );
  }
  function events() {
    heading(
      "Festival do Futebol",
      "Evento local semanal. Complete cinco confrontos contra IA e resgate a premiação da série.",
    );
    main.append(
      el(
        "div",
        { class: "ut-event-actions" },
        el(
          "div",
          {},
          text("h2", "FESTIVAL\nDO FUTEBOL"),
          text("p", "Desafios, cartas e novas histórias no seu clube."),
          button("Jogar evento", () => start("event")),
          button("Objetivos do evento", () => go("objectives")),
        ),
        utCard(UT.UT_CATALOG.find((c) => c.rarity === "special")),
      ),
    );
    main.append(
      panel(
        "Progresso",
        `${u.modes.event.played}/5 partidas • ${u.modes.event.wins} vitórias`,
        button("Resgatar prêmio do evento", () =>
          act(UT.claimModeReward(profile, "event")),
        ),
      ),
    );
  }
  function mode(id) {
    if(id==='battles')main.append(el('img',{src:'assets/ultimate/reference/battles-badge.jpg',class:'ut-battles-badge',alt:'Emblema Squad Battles'}));
    const m = UT.UT_MODES[id],
      r = u.modes[id];
    heading(
      m.name,
      "Competição LOCAL contra IA. Não existe pareamento online nem ranking de outros jogadores.",
    );
    main.append(
      el(
        "div",
        { class: "ut-mode-grid" },
        panel(
          id === "rivals"
            ? "Sua divisão local"
            : id === "champions"
              ? "Sua campanha"
              : "Sua classificação",
          id === "rivals"
            ? `Divisão ${Math.max(1, 10 - Math.floor(r.points / 250))}`
            : id === "champions"
              ? `${r.wins} vitórias`
              : `${r.points} pontos`,
          el(
            "div",
            { class: "ut-rank" },
            text(
              "b",
              id === "rivals"
                ? Math.max(1, 10 - Math.floor(r.points / 250))
                : r.wins,
            ),
            text("span", id === "rivals" ? "DIVISÃO" : "VITÓRIAS"),
          ),
          text(
            "p",
            `${r.played}/${m.limit} partidas nesta semana · dificuldade ${m.difficulty === "hard" ? "difícil" : "normal"}`,
          ),
          button(u.pending ? "Retomar confronto" : "Jogar agora →", () =>
            start(id),
          ),
        ),
        panel(
          "Recompensas da série",
          "500 moedas + 250 por vitória ao concluir todas as partidas.",
          el("div", { class: "ut-pack-art" }, text("b", "UT")),
          button(
            r.claimed ? "Recompensa resgatada" : "Resgatar recompensa",
            () => act(UT.claimModeReward(profile, id)),
          ),
        ),
      ),
    );
  }
  function start(id) {
    const r = UT.beginUtMatch(profile, id);
    persist();
    if (!r.ok) {
      notice.textContent = r.message;
      return;
    }
    launchPending();
  }
  function launchPending() {
    const p = u.pending;
    if (!p) return;
    ctx.go("play", {
      home: "xfc-ut",
      away: p.opponent,
      ultimateMatchId: p.id,
      minutes: 4,
      difficulty: UT.UT_MODES[p.mode].difficulty,
      returnTo: "ultimate",
      competition: {
        id: "ultimate",
        title: `${UT.UT_MODES[p.mode].name} · LOCAL / IA`,
      },
    });
  }
  persist();
  paint();
  return {
    node: root,
    onKey(e) {
      if (e.key === "Backspace" && e.target?.matches("input,textarea,select"))
        return false;
      if (e.key === "Escape" || e.key === "Backspace") {
        if (!modal.hidden) {
          if (u.reveal) {
            clearTimeout(timer);
            u.reveal = null;
            persist();
          }
          modal.hidden = true;
        } else if (section !== "home") go("home");
        else ctx.go(params.returnTo || "menu");
        return true;
      }
      return false;
    },
    unmount() {
      disposed = true;
      clearTimeout(timer);
    },
  };
}
