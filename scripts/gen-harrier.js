// Le Harrier (9 steps, medium, olive green)
import * as L from "./lib-folding.js";

const HUE = 80, SAT = 55;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: point-down (~2cm above middle)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(112, 90, 208, 90)}
<path d="M 160 40 Q 180 105 160 175" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,90 208,90 160,180" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le bas — ~2 cm au-dessus milieu")}`),

  // 6: two new corners to center (one small triangle protrudes)
  6: L.svg(`
${L.flatTopPaper(90)}
<polygon points="112,90 208,90 160,180" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.45"/>
${L.centerCreaseV(160, 90, 370)}
${L.foldedTri("80,90 160,90 160,170")}
${L.valleyFold(80, 90, 160, 170)}
${L.foldedTri("240,90 160,90 160,170")}
${L.valleyFold(240, 90, 160, 170)}
${L.arrowArc(95, 110, 130, 105, 150, 155)}
${L.arrowArc(225, 110, 190, 105, 170, 155)}
<polygon points="148,170 172,170 160,188" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre — petit triangle dépasse")}`),

  // 7: lock
  7: L.svg(`
${L.flatTopPaper(90)}
${L.centerCreaseV(160, 90, 370)}
${L.foldedTriMuted("80,90 160,90 160,170")}
${L.foldedTriMuted("240,90 160,90 160,170")}
${L.existingCrease(80, 90, 160, 170)}
${L.existingCrease(240, 90, 160, 170)}
<polygon points="148,170 172,170 160,195" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 170, 172, 170)}
<path d="M 160 195 Q 180 180 160 145" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — replie le triangle vers le haut")}`),

  // 8: flip + fold in half
  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2 le long du centre")}`),

  // 9: form wings + final V
  9: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Forme les ailes en V — prêt à lancer</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("harrier", steps);
