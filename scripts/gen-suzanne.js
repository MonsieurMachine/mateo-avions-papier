// La Suzanne (10 steps, very hard, royal blue, world record precision dart)
import * as L from "./lib-folding.js";

const HUE = 225, SAT = 70;

const steps = {
  // 1: paper + emphasis on flatness
  1: L.svg(`
${L.paperPortrait()}
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="#a8a29e" letter-spacing="1.5">FEUILLE A4 PARFAITEMENT PLATE</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#dc2626" letter-spacing="0.5">Précision maximale — record du monde !</text>`),

  // 2: fold in half + emphasize center
  2: L.svg(`
${L.paperPortrait()}
<line x1="160" y1="30" x2="160" y2="370" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" stroke-linecap="round"/>
<path d="M 100 195 Q 160 75 220 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="218" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">VÉRIFIE: PARFAITEMENT AU MILIEU</text>
${L.label("Plie en 2 + déplie — précision au millimètre")}`),

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
${L.label("Bord gauche → centre (précis)")}`),

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
<text x="160" y="215" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">SYMÉTRIQUE</text>
${L.label("Bord droit → centre (mirror exact)")}`),

  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 — plis à l'intérieur")}`),

  // 8: wings parallel to bottom
  8: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<!-- precision indicators -->
<text x="160" y="340" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">AILES PARFAITEMENT PARALLÈLES AU FUSELAGE</text>
${L.label("Ailes précises — même angle des 2 côtés")}`),

  // 9: almost flat, 165° (very slight V)
  9: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Presque plates, très léger V (~165°)</text>`, L.planeGradients(HUE, SAT)),

  // 10: final with symmetry check
  10: L.svg(L.finalV(HUE, SAT) + `
<line x1="160" y1="38" x2="160" y2="290" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 2" opacity="0.6"/>
<text x="160" y="315" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">SYMÉTRIE PARFAITE</text>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">🏆 Record du monde : 69 mètres !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("suzanne", steps);
