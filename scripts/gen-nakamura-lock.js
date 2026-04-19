// Le Verrou de Nakamura (12 steps, medium, bronze)
import * as L from "./lib-folding.js";

const HUE = 28, SAT = 70;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: point-down to bottom of triangles (y≈110)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(80, 70, 240, 70)}
<path d="M 160 40 Q 185 90 160 110" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,70 208,70 160,115" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe au bas des triangles pliés")}`),

  // 6: new TL corner → center
  6: L.svg(`
${L.flatTopPaper(70)}
<polygon points="112,70 208,70 160,115" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.55"/>
${L.centerCreaseV(160, 70, 370)}
${L.foldedTri("80,70 160,70 160,150")}
${L.valleyFold(80, 70, 160, 150)}
${L.arrowArc(95, 90, 130, 85, 150, 135)}
${L.label("Nouveau coin haut-gauche → centre")}`),

  // 7: new TR corner (tip protrudes)
  7: L.svg(`
${L.flatTopPaper(70)}
<polygon points="112,70 208,70 160,115" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.4"/>
${L.centerCreaseV(160, 70, 370)}
${L.foldedTriMuted("80,70 160,70 160,150")}
${L.existingCrease(80, 70, 160, 150)}
${L.foldedTri("240,70 160,70 160,150")}
${L.valleyFold(240, 70, 160, 150)}
${L.arrowArc(225, 90, 190, 85, 170, 135)}
<!-- protruding tip (will be the Nakamura lock) -->
<polygon points="148,150 172,150 160,175" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Coin haut-droit → pointe dépasse un peu")}`),

  // 8: NAKAMURA LOCK — fold protruding tip UP over both flaps
  8: L.svg(`
${L.flatTopPaper(70)}
${L.centerCreaseV(160, 70, 370)}
${L.foldedTriMuted("80,70 160,70 160,150")}
${L.foldedTriMuted("240,70 160,70 160,150")}
${L.existingCrease(80, 70, 160, 150)}
${L.existingCrease(240, 70, 160, 150)}
<polygon points="148,150 172,150 160,180" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 150, 172, 150)}
<path d="M 160 180 Q 190 160 160 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="220" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="700">🔒 VERROU NAKAMURA</text>
<text x="160" y="238" text-anchor="middle" font-size="10" fill="#5b5040">par-dessus les deux rabats</text>
${L.label("Verrou célèbre — bloque tout")}`),

  // 9: flip + fold in half
  9: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2 le long du centre")}`),

  // 10: form top wing
  10: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
${L.label("Rabats l'aile du dessus")}`),

  // 11: flip + fold other wing
  11: L.svg(L.stepFormOtherWing()),

  // 12: final V
  12: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Verrouillé — vole droit comme une flèche</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("nakamura-lock", steps);
