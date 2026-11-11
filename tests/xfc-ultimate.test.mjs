import test from "node:test";
import assert from "node:assert/strict";
import * as U from "../xfc-game/src/data/ultimate.js";
import {
  runningArmPose,
  runningLegPose,
  runningFlight,
} from "../xfc-game/src/match3d/football-actions.js";
import { launchOrSkip } from "./support/chromium.mjs";
import { STADIUMS } from "../xfc-game/src/match3d/stadiums.js";
import { startXfcServer } from "../xfc-game/serve.mjs";
const profile = () => ({ coins: 100000, ultimatePlayers: ["madrid-vinicius"] });

test("UT migra coleção sem perder saldo, entrega XI válido e persiste por JSON", () => {
  const p = profile(),
    u = U.ensureUltimate(p);
  assert.equal(p.coins, 100000);
  assert.equal(u.inventory.length, 19);
  assert.ok(U.squadReady(u));
  assert.ok(
    u.inventory.some((x) => x.cardId === "madrid-vinicius" && x.tradeable),
  );
  assert.equal(U.chemistry(u), 100);
  const saved = JSON.parse(JSON.stringify(p));
  U.ensureUltimate(saved);
  assert.deepEqual(saved.ut.inventory, u.inventory);
  assert.equal(
    new Set(U.UT_CATALOG.map((c) => c.id)).size,
    U.UT_CATALOG.length,
  );
  for (const rarity of Object.keys(U.RARITIES))
    assert.ok(U.UT_CATALOG.some((c) => c.rarity === rarity));
});
test("UT compra/venda transacional; saldo insuficiente e cartas escaladas não geram moedas", () => {
  const p = profile(),
    u = U.ensureUltimate(p),
    card = U.UT_CATALOG[0];
  const b = U.buyUtPlayer(p, card.id);
  assert.ok(b.ok);
  assert.equal(p.coins, 100000 - card.price);
  assert.ok(U.sellUtPlayer(p, b.uid).ok);
  assert.equal(p.coins, 100000 - card.price + Math.floor(card.price * 0.85));
  assert.equal(U.sellUtPlayer(p, b.uid).ok, false);
  assert.equal(U.sellUtPlayer(p, u.inventory[0].uid).ok, false);
  p.coins = 0;
  const count = u.inventory.length;
  assert.equal(U.buyUtPlayer(p, card.id).ok, false);
  assert.equal(u.inventory.length, count);
});
test("UT pacotes: chances exatas, instâncias únicas, débito único e revelação sobrevive reload", () => {
  for (const pack of Object.values(U.PACKS))
    assert.ok(Math.abs(pack.odds.reduce((s, x) => s + x[1], 0) - 1) < 1e-9);
  const p = profile();
  const r = U.openUtPack(p, "premium", { random: () => 0.99999 });
  assert.ok(r.ok);
  assert.equal(r.uids.length, 3);
  assert.equal(new Set(r.uids).size, 3);
  assert.equal(U.unitCard(p.ut, r.uids[0]).rarity, "icon");
  assert.equal(p.coins, 95500);
  assert.equal(U.openUtPack(p, "premium").ok, false);
  assert.equal(p.coins, 95500);
  const restored = JSON.parse(JSON.stringify(p));
  assert.deepEqual(U.ensureUltimate(restored).reveal.uids, r.uids);
});
test("UT DME valida média, clubes, bloqueios e consumo atômico", () => {
  const p = profile(),
    u = U.ensureUltimate(p);
  assert.equal(
    U.submitDme(
      p,
      u.inventory.slice(0, 3).map((x) => x.uid),
    ).ok,
    false,
  );
  const ids = ["barca-pedri", "madrid-vinicius", "madrid-modric"].map(
      (id) => U.buyUtPlayer(p, id).uid,
    ),
    before = u.inventory.length;
  assert.equal(U.submitDme(p, [ids[0], ids[0], ids[2]]).ok, false);
  assert.equal(u.inventory.length, before);
  assert.ok(U.submitDme(p, ids, { random: () => 0.1 }).ok);
  assert.ok(ids.every((id) => !u.inventory.some((x) => x.uid === id)));
  assert.equal(u.inventory.length, before);
  u.reveal = null;
  assert.equal(U.submitDme(p, ids).ok, false);
});
test("UT elencos: troca, duplicata por atleta, capitão, formação, reservas e limites", () => {
  const p = profile(),
    u = U.ensureUltimate(p),
    s = U.activeSquad(u);
  const bought = U.buyUtPlayer(p, "madrid-vinicius").uid;
  assert.ok(U.assignUtPlayer(p, bought, 8).ok); // Duas instâncias do mesmo atleta não entram juntas no XI.
  const copy = U.buyUtPlayer(p, "madrid-vinicius").uid;
  assert.equal(U.assignUtPlayer(p, copy, 9).ok, false);
  assert.ok(U.setUtFormation(p, "3-5-2").ok);
  assert.equal(s.formation, "3-5-2");
  s.positions[bought] = { x: 20, y: 25 };
  s.captain = bought;
  assert.ok(U.saveUtSquad(p, "Copa").ok);
  assert.notEqual(U.activeSquad(u), s);
  assert.deepEqual(U.activeSquad(u).positions, s.positions);
  for (let i = 0; i < 3; i++) assert.ok(U.saveUtSquad(p, "Mais um").ok);
  assert.equal(U.saveUtSquad(p, "Sexto").ok, false);
  assert.equal(U.sellUtPlayer(p, bought).ok, false);
  assert.ok(U.removeUtPlayer(p, bought).ok);
  assert.equal(U.squadReady(u), false);
});
test("UT partida real: snapshot, equipe customizada, evolução/objetivos e resultado idempotente", () => {
  const p = profile(),
    u = U.ensureUltimate(p),
    s = U.activeSquad(u);
  const uid = s.slots[8];
  assert.ok(U.startEvolution(p, uid).ok);
  s.positions[uid] = { x: 30, y: 22 };
  for (let i = 0; i < 2; i++) {
    const r = U.beginUtMatch(p, "battles");
    assert.ok(r.ok);
    const team = U.ultimateMatchTeam(p, r.match.id);
    assert.equal(team.players.length, 11);
    assert.equal(team.players[8].id, uid);
    assert.deepEqual(team.plan[uid], { x: 28, z: 12.8 });
    assert.ok(team.players.some((p) => p.captain));
    assert.equal(U.removeUtPlayer(p, uid).ok, false);
    const result = U.settleUtMatch(p, r.match.id, [3, 1]);
    assert.ok(result.ok);
    assert.equal(result.coins, 250);
    assert.equal(U.settleUtMatch(p, r.match.id, [3, 1]).ok, false);
  }
  assert.equal(u.evolution.played, 2);
  assert.ok(U.claimEvolution(p).ok);
  assert.equal(U.unitCard(u, uid).level, 2);
  assert.ok(U.claimObjective(p, "daily-play").ok);
  assert.equal(U.claimObjective(p, "daily-play").ok, false);
  assert.ok(U.claimObjective(p, "daily-goals").ok);
  assert.ok(U.claimSeason(p, 1).ok);
  assert.equal(U.claimSeason(p, 1).ok, false);
});
test("UT séries, abandono e renovação diária/semanal sem recompensas duplicadas", () => {
  const p = profile(),
    now = Date.UTC(2026, 10, 9, 12),
    u = U.ensureUltimate(p, now);
  for (let i = 0; i < 5; i++) {
    const r = U.beginUtMatch(p, "event", now);
    assert.ok(
      U.settleUtMatch(p, r.match.id, [0, 3], { now, abandoned: true }).ok,
    );
  }
  assert.equal(u.lifetime.played, 0);
  assert.equal(U.beginUtMatch(p, "event", now).ok, false);
  assert.ok(U.claimModeReward(p, "event", now).ok);
  assert.equal(U.claimModeReward(p, "event", now).ok, false);
  U.ensureUltimate(p, now + 8 * 86400000);
  assert.equal(u.modes.event.played, 0);
  assert.equal(u.daily.played, 0);
  assert.ok(U.beginUtMatch(p, "event", now + 8 * 86400000).ok);
});
test("corrida tem voo, recuperação do joelho e braços opostos; caminhada não tem voo", () => {
  let flying = 0;
  for (let i = 0; i < 240; i++) {
    const phase = i / 240,
      a = runningArmPose(phase),
      b = runningArmPose(phase + 0.5);
    assert.ok(Math.abs(a.shoulder + b.shoulder) < 1e-10);
    assert.ok(a.elbow < -0.37 && a.elbow > -0.99);
    if (runningFlight(phase)) flying++;
    assert.equal(runningFlight(phase, 0), false);
  }
  assert.ok(flying > 40);
  assert.ok(runningLegPose(0.7).lift > 0.2);
  assert.ok(runningArmPose(0).shoulder > 0.7);
  assert.ok(runningArmPose(0.5).shoulder < -0.7);
});

test(
  "UT navegador: navegação, compra, pacote, persistência, escalação e resultado 3D",
  { timeout: 180000 },
  async (t) => {
    const { server, url } = await startXfcServer();
    const b = await launchOrSkip(t);
    if (!b) {
      server.close();
      return;
    }
    try {
      const p = await b.newPage({ viewport: { width: 1280, height: 720 } }),
        errors = [];
      p.on("pageerror", (e) => errors.push(e.message));
      await p.goto(url);
      await p.evaluate(async () => {
        const m = await import("/src/main.js");
        m.state.profile.coins = 10000;
        m.go("ultimate");
      });
      await p.waitForSelector(".ut-main");
      for (const name of [
        "Meu Clube",
        "Elenco",
        "Mercado de Transferências",
        "Evoluções",
        "Objetivos",
        "DME",
        "Squad Battles",
        "Division Rivals",
        "FUT Champions",
        "Loja",
        "Eventos especiais",
        "Temporada",
      ]) {
        await p.getByRole("button", { name, exact: true }).click();
        assert.ok(await p.locator(".ut-main h1").isVisible());
      }
      await p
        .getByRole("button", { name: "Mercado de Transferências", exact: true })
        .click();
      await p.locator(".ultimate-card__buy").first().click();
      await p.getByRole("button", { name: "Confirmar", exact: true }).click();
      assert.equal(
        await p.evaluate(
          () =>
            JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.inventory
              .length,
        ),
        19,
      );
      await p.getByRole("button", { name: "Loja", exact: true }).click();
      await p
        .getByRole("button", { name: "Comprar e abrir", exact: true })
        .first()
        .click();
      await p.getByRole("button", { name: "Confirmar", exact: true }).click();
      // Sob carga, os 3,75s da revelação podem terminar antes do próximo click.
      // Aceita o mesmo fluxo humano: pular se ainda animando, ou continuar se já terminou.
      await p.getByRole("button", { name: /^(Pular revelação|Continuar para o clube)$/ }).click();
      if(await p.locator('.ut-modal').isVisible())
        await p.getByRole("button", { name: "Continuar para o clube" }).click();
      await p.waitForSelector('.ut-modal',{state:'hidden'});
      assert.equal(
        await p.evaluate(
          () =>
            JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.inventory
              .length,
        ),
        22,
      );
      await p.reload();
      await p.evaluate(async () => {
        (await import("/src/main.js")).go("ultimate", { section: "squad" });
      });
      assert.equal(await p.locator(".ut-slot").count(), 11);
      const slot = p.locator(".ut-slot").nth(8),
        box = await slot.boundingBox();
      await p.mouse.move(box.x + 30, box.y + 25);
      await p.mouse.down();
      await p.mouse.move(box.x + 65, box.y + 10, { steps: 5 });
      await p.mouse.up();
      assert.ok(
        await p.evaluate(
          () =>
            Object.keys(
              JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.squads[0]
                .positions,
            ).length,
        ),
      );
      await p
        .getByRole("button", { name: "Squad Battles", exact: true })
        .click();
      await p
        .getByRole("button", { name: "Jogar agora →", exact: true })
        .click();
      await p.waitForSelector(".showcase__enter");
      await p.click(".showcase__enter");
      await p.waitForSelector(".hud.is-visible");
      const actual = await p.evaluate(() =>
        __xfcMatch.teams.home.players.map((x) => x.rosterId),
      );
      const wanted = await p.evaluate(
        () =>
          JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.pending.uids,
      );
      assert.deepEqual([...actual].sort(), [...wanted].sort());
      await p.evaluate(() => {
        const m = __xfcMatch;
        m.world.setPaused(false);
        m.world.entrancePlayed = true;
        m.phase.name = "play";
        m.phase.restart = null;
        m.clock.half = 2;
        m.clock.minutes = 95;
        m.clock.added = 0;
        m.teams.home.score = 3;
        m.teams.away.score = 1;
        m.world.tick(1 / 60);
      });
      await p.waitForFunction(
        () =>
          JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.lifetime
            .played === 1,
      );
      await p
        .getByRole("button", { name: "VOLTAR AO CLUBE", exact: true })
        .click();
      assert.equal(
        await p.evaluate(
          () => JSON.parse(localStorage.getItem("xfc.profile.v1")).ut.pending,
        ),
        null,
      );
      assert.deepEqual(errors, []);
    } finally {
      await b.close();
      server.close();
    }
  },
);

test(
  "referências domésticas: menus abrem sistemas reais e volta preserva origem",
  { timeout: 90000 },
  async (t) => {
    const { server, url } = await startXfcServer();
    const b = await launchOrSkip(t);
    if (!b) {
      server.close();
      return;
    }
    try {
      const p = await b.newPage({ viewport: { width: 960, height: 540 } });
      await p.goto(url);
      for (const competitionId of ["brasileirao", "copa-do-brasil"]) {
        const open = () =>
          p.evaluate(
            async (competitionId) =>
              (await import("/src/main.js")).go("competition", {
                competitionId,
                returnTo: "modes",
              }),
            competitionId,
          );
        await open();
        assert.match(
          await p
            .locator(".comp__art")
            .evaluate((n) => getComputedStyle(n).backgroundImage),
          new RegExp(competitionId),
        );
        await p
          .locator(".comp__domestic-reference")
          .getByRole("button", { name: "Jogar Partida", exact: true })
          .click();
        assert.ok(await p.locator(".comp__stage .comp__panel").isVisible());
        await p.keyboard.press("Escape");
        await p
          .locator(".comp__domestic-reference")
          .getByRole("button", { name: "Galeria", exact: true })
          .click();
        assert.equal(
          await p.locator(".comp__gallery img").count(),
          STADIUMS.length,
        );
        await p.keyboard.press("Escape");
        await p
          .locator(".comp__domestic-reference")
          .getByRole("button", { name: "Configurações", exact: true })
          .click();
        await p.waitForSelector(".screen--customise");
        await p.keyboard.press("Escape");
        assert.equal(
          await p
            .locator(".screen--competition")
            .getAttribute("data-competition"),
          competitionId,
        );
        await p
          .locator(".comp__domestic-reference")
          .getByRole("button", { name: "Sair", exact: true })
          .click();
        await p.waitForSelector(".screen--modes");
      }
    } finally {
      await b.close();
      server.close();
    }
  },
);

test("UT migração mantém compra anterior negociável mesmo quando o atleta também vem no inicial", () => {
  const p = { coins: 400, ultimatePlayers: ["barca-pedri", "barca-pedri"] };
  const u = U.ensureUltimate(p);
  const copies = u.inventory.filter((x) => x.cardId === "barca-pedri");
  assert.equal(copies.length, 2);
  assert.equal(copies.filter((x) => x.tradeable).length, 1);
  assert.equal(p.coins, 400);
});

test(
  "Micah importado: mãos cruzam frente/trás alternadamente na corrida real",
  { timeout: 60000 },
  async (t) => {
    const { server, url } = await startXfcServer();
    const b = await launchOrSkip(t);
    if (!b) {
      server.close();
      return;
    }
    try {
      const p = await b.newPage();
      await p.goto(url);
      const r = await p.evaluate(async () => {
        const T = await import("/vendor/three.module.min.js");
        const { preloadFootballerPack, createGltfPlayer } = await import(
          "/src/match3d/models.js"
        );
        await preloadFootballerPack();
        const m = createGltfPlayer({});
        const v = new T.Vector3();
        let front = -Infinity,
          back = Infinity,
          opposed = 0;
        for (let i = 0; i < 180; i++) {
          m.update(1 / 60, { speed: 6 });
          m.root.updateMatrixWorld(true);
          if (i < 60) continue;
          const left = m.bones.leftHand.getWorldPosition(v).z,
            right = m.bones.rightHand.getWorldPosition(v).z;
          front = Math.max(front, left, right);
          back = Math.min(back, left, right);
          if (left * right < 0) opposed++;
        }
        m.dispose();
        return { front, back, opposed };
      });
      assert.ok(r.front > 0.25, JSON.stringify(r));
      assert.ok(r.back < -0.15, JSON.stringify(r));
      assert.ok(r.opposed > 40, JSON.stringify(r));
    } finally {
      await b.close();
      server.close();
    }
  },
);
