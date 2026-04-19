// Le Concorde (11 steps, medium, chrome silver, delta wings)
import * as L from "./lib-folding.js";

const HUE = 210, SAT = 8;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
${L.valleyFold(160, 30, 125, 110)}
${L.arrowArc(100, 90, 130, 80, 145, 105)}
${L.label("Bord gauche → centre")}`),

  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.7"/>
${L.existingCrease(160, 30, 125, 110)}
<polygon points="160,30 240,110 195,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
${L.valleyFold(160, 30, 195, 110)}
${L.arrowArc(220, 90, 190, 80, 175, 105)}
${L.label("Bord droit → centre — nez long comme le vrai")}`),

  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 le long du centre")}`),

  // 8: form delta wings (long triangular)
  8: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">AILES DELTA — TRIANGLE ALLONGÉ</text>
${L.label("Ailes delta — signature du Concorde")}`),

  // 9: bend trailing edge of wings down (élevons)
  9: L.svg(L.finalV(HUE, SAT) + `
<!-- trailing edge segments -->
<line x1="40" y1="280" x2="155" y2="280" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
<line x1="165" y1="280" x2="280" y2="280" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
<path d="M 95 280 L 95 290" stroke="#6366f1" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
<path d="M 225 280 L 225 290" stroke="#6366f1" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
<text x="160" y="332" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bord arrière ↓ (~5 mm) — élevons</text>`, L.planeGradients(HUE, SAT)),

  // 10: almost flat, very slight V
  10: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Ailes presque plates, très léger V</text>`, L.planeGradients(HUE, SAT)),

  // 11: ready
  11: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Concorde prêt — fait pour la vitesse !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("concorde", steps);
