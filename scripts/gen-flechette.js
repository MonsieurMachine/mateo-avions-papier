// La Fléchette (6 steps, easy - simplest dart, coral)
import * as L from "./lib-folding.js";

const HUE = 10, SAT = 80;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: fold in half from house shape
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(200, 240, 240, 200, 200, 160)}
${L.label("Plie en 2 — triangles à l'intérieur")}`),

  // 6: spread wings + final
  6: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Déplie les ailes en V — prêt à lancer !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("flechette", steps);
