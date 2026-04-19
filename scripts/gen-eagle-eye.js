// L'Œil d'Aigle (12 steps, medium, goldenbrown, with feather cuts + beak)
import * as L from "./lib-folding.js";

const HUE = 36, SAT = 60;

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
${L.valleyFold(112, 60, 208, 60)}
<path d="M 160 40 Q 180 80 160 100" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,60 208,60 160,105" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le bas (~3 cm du haut)")}`),

  6: L.svg(`
${L.flatTopPaper(60)}
<polygon points="112,60 208,60 160,105" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.5"/>
${L.centerCreaseV(160, 60, 370)}
${L.foldedTri("80,60 160,60 160,140")}
${L.foldedTri("240,60 160,60 160,140")}
${L.valleyFold(80, 60, 160, 140)}
${L.valleyFold(240, 60, 160, 140)}
${L.arrowArc(95, 80, 130, 75, 150, 125)}
${L.arrowArc(225, 80, 190, 75, 170, 125)}
<polygon points="148,140 172,140 160,165" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre")}`),

  7: L.svg(`
${L.flatTopPaper(60)}
${L.centerCreaseV(160, 60, 370)}
${L.foldedTriMuted("80,60 160,60 160,140")}
${L.foldedTriMuted("240,60 160,60 160,140")}
<polygon points="148,140 172,140 160,170" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 140, 172, 140)}
<path d="M 160 170 Q 180 150 160 120" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="215" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — petite pointe vers le haut")}`),

  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 280, 290, 280)}
<polygon points="40,215 100,135 290,135 290,280" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 260, 220, 240, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">LARGES AILES</text>
${L.label("Ailes très larges — 1 cm fuselage")}`),

  // 10: scissor cuts (feather zigzag)
  10: L.svg(L.finalV(HUE, SAT) + `
<!-- zigzag cuts at back of each wing -->
<path d="M 48 275 L 55 268 L 62 275 L 69 268 L 76 275" stroke="#dc2626" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M 244 275 L 251 268 L 258 275 L 265 268 L 272 275" stroke="#dc2626" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<text x="90" y="255" font-size="16">✂️</text>
<text x="252" y="255" font-size="16">✂️</text>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Découpe en zigzag — plumes d'aigle</text>`, L.planeGradients(HUE, SAT)),

  // 11: fold nose tip down (beak)
  11: L.svg(L.finalV(HUE, SAT) + `
<!-- beak indicator at nose -->
<polygon points="156,48 164,48 160,58" fill="hsl(${HUE}, ${SAT}%, 25%)"/>
<path d="M 160 56 L 160 65" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
<text x="220" y="58" font-size="10" fill="#dc2626" font-weight="600">← bec</text>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Plie le bout du nez vers le bas — bec d'aigle</text>`, L.planeGradients(HUE, SAT)),

  // 12: final
  12: L.svg(L.finalV(HUE, SAT) + `
<polygon points="156,48 164,48 160,58" fill="hsl(${HUE}, ${SAT}%, 25%)"/>
<path d="M 48 275 L 55 268 L 62 275 L 69 268 L 76 275" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M 244 275 L 251 268 L 258 275 L 265 268 L 272 275" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Ton Aigle est prêt à planer !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("eagle-eye", steps);
