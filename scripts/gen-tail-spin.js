// Custom folding diagrams for La Vrille (11 steps, purple, tail-flap tricks)
import * as L from "./lib-folding.js";

const HUE = 270, SAT = 60;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5-6: narrow nose (same pattern as stable)
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
${L.label("Bord droit → centre — nez pointu")}`),

  // 7: fold in half
  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 le long du centre")}`),

  // 8: form wings
  8: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
${L.label("Forme les ailes — chaque côté vers le bas")}`),

  // 9: spread wings + show small tail flaps
  9: L.svg(`
${L.finalV(HUE, SAT)}
<!-- Small flap rectangles at back of each wing -->
<rect x="55" y="258" width="25" height="14" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
<rect x="240" y="258" width="25" height="14" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Plie un petit volet (~1 cm) à l'arrière de chaque aile</text>`, L.planeGradients(HUE, SAT)),

  // 10: the "secret" — one flap up, one flap down
  10: L.svg(`
${L.finalV(HUE, SAT)}
<!-- Left flap folded UP (arrow up) -->
<rect x="55" y="258" width="25" height="14" fill="hsl(${HUE}, ${SAT}%, 65%)" stroke="#dc2626" stroke-width="1.5"/>
<path d="M 68 258 L 68 242" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
<text x="68" y="232" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">HAUT ↑</text>
<!-- Right flap folded DOWN (arrow down) -->
<rect x="240" y="258" width="25" height="14" fill="hsl(${HUE}, ${SAT}%, 35%)" stroke="#dc2626" stroke-width="1.5"/>
<path d="M 252 272 L 252 290" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
<text x="252" y="303" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="700">BAS ↓</text>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="700">LE SECRET : directions opposées</text>`, L.planeGradients(HUE, SAT)),

  // 11: throw + spin
  11: L.svg(`
${L.finalV(HUE, SAT)}
<!-- spiral rotation indicator -->
<path d="M 200 120 Q 220 140 200 160 Q 180 180 200 200 Q 220 220 200 240" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
<text x="220" y="145" font-size="22">🌀</text>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Lance droit — la vrille se fait toute seule !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("tail-spin", steps);
