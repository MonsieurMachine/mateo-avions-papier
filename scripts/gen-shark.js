// Le Requin (13 steps, hard, slate blue, dorsal fin + double-accordion nose)
import * as L from "./lib-folding.js";

const HUE = 205, SAT = 60;

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

  // 7: DOUBLE ACCORDION at nose (agressive snout)
  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
<!-- accordion fold lines -->
${L.valleyFold(135, 60, 185, 60)}
${L.mountainFold(145, 80, 175, 80)}
<path d="M 160 35 Q 175 60 160 85 Q 175 105 160 125" stroke="#6366f1" stroke-width="2" fill="none" stroke-linecap="round" marker-end="url(#arr)"/>
<text x="240" y="75" font-size="9" fill="#dc2626" font-weight="600">accordéon</text>
${L.label("Pointe bas 3 cm + haut — nez de requin")}`),

  // 8: fold in half
  8: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 le long du centre")}`),

  // 9: form short angular wings
  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 240, 290, 240)}
<polygon points="40,215 100,135 290,135 290,240" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 210, 235, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">AILES COURTES ET ANGULAIRES</text>
${L.label("Forme les ailes — courtes, angulaires")}`),

  // 10: cut + fold UP big dorsal fin
  10: L.svg(`
${L.planeProfile()}
<polygon points="165,100 195,135 175,135" fill="hsl(${HUE}, ${SAT}%, 30%)" stroke="#dc2626" stroke-width="1.5"/>
<text x="208" y="115" font-size="22">✂️</text>
<text x="210" y="105" font-size="10" fill="#dc2626" font-weight="600">3 cm</text>
<path d="M 175 135 L 175 110" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
${L.label("Découpe + plie vers le haut — nageoire dorsale")}`),

  // 11: small flaps (pectoral fins) on wings
  11: L.svg(L.finalV(HUE, SAT) + `
<rect x="50" y="270" width="20" height="10" fill="hsl(${HUE}, ${SAT}%, 30%)" stroke="#dc2626" stroke-width="1.2"/>
<rect x="250" y="270" width="20" height="10" fill="hsl(${HUE}, ${SAT}%, 30%)" stroke="#dc2626" stroke-width="1.2"/>
<path d="M 60 280 L 60 290" stroke="#6366f1" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
<path d="M 260 280 L 260 290" stroke="#6366f1" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petits volets vers le bas — nageoires pectorales</text>`, L.planeGradients(HUE, SAT)),

  12: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie bien sur tous les plis</text>`),

  // 13: final with dorsal fin visible
  13: L.svg(L.finalV(HUE, SAT) + `
<!-- dorsal fin on fuselage -->
<polygon points="160,40 170,65 150,65" fill="hsl(${HUE}, ${SAT}%, 25%)"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Requin prêt à attaquer 🦈</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("shark", steps);
