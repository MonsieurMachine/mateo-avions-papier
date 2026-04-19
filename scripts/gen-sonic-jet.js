// Le Jet Supersonique (14 steps, hard, silver, triple-narrow nose)
import * as L from "./lib-folding.js";

const HUE = 220, SAT = 10;

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
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(160, 30, 125, 110)}
${L.arrowArc(100, 90, 130, 80, 145, 105)}
${L.label("Bord gauche → centre")}`),

  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" opacity="0.7"/>
${L.existingCrease(160, 30, 125, 110)}
<polygon points="160,30 240,110 195,110" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(160, 30, 195, 110)}
${L.arrowArc(220, 90, 190, 80, 175, 105)}
${L.label("Bord droit → centre")}`),

  // 7-8: third pass (very narrow)
  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
<!-- inner narrow overlay (3rd pass) -->
<polygon points="160,30 120,150 145,150" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(160, 30, 145, 150)}
${L.arrowArc(130, 120, 140, 110, 148, 145)}
${L.label("Bord gauche ENCORE → centre")}`),

  8: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
<polygon points="160,30 120,150 145,150" fill="url(#foldTri)" opacity="0.7"/>
${L.existingCrease(160, 30, 145, 150)}
<polygon points="160,30 200,150 175,150" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(160, 30, 175, 150)}
${L.arrowArc(190, 120, 180, 110, 172, 145)}
${L.label("Bord droit ENCORE — nez ULTRA fin")}`),

  9: L.svg(`
${L.veryNarrowShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(170, 200, 195, 180, 170, 140)}
${L.label("Retourne + plie en 2 le long du centre")}`),

  // 10: form short triangular wings
  10: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 235, 290, 235)}
<polygon points="40,215 100,135 290,135 290,235" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 210, 235, 270)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">TRIANGLE ÉTROIT</text>
${L.label("Ailes courtes et étroites")}`),

  // 11: vertical fin at rear of each wing (1cm)
  11: L.svg(L.finalV(HUE, SAT) + `
<rect x="53" y="253" width="5" height="20" fill="#dc2626" opacity="0.8"/>
<rect x="262" y="253" width="5" height="20" fill="#dc2626" opacity="0.8"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petit aileron vertical (1 cm) à l'arrière de chaque aile</text>`, L.planeGradients(HUE, SAT)),

  // 12: wingtips slightly down (ailerons)
  12: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 30 288" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
<path d="M 280 280 L 290 288" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bouts des ailes légèrement vers le bas</text>`, L.planeGradients(HUE, SAT)),

  13: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie très fort sur le nez</text>
<text x="160" y="250" text-anchor="middle" font-size="10" fill="#a8a29e">bien compact = plus rapide</text>`),

  14: L.svg(L.finalV(HUE, SAT) + `
<rect x="53" y="253" width="5" height="20" fill="hsl(${HUE}, ${SAT}%, 35%)"/>
<rect x="262" y="253" width="5" height="20" fill="hsl(${HUE}, ${SAT}%, 35%)"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Jet Supersonique — le plus rapide !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("sonic-jet", steps);
