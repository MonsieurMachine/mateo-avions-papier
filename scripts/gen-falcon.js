// Le Faucon (11 steps, medium, brown, swept-back wings + winglet)
import * as L from "./lib-folding.js";

const HUE = 22, SAT = 55;

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
${L.valleyFold(112, 85, 208, 85)}
<path d="M 160 40 Q 180 100 160 165" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,85 208,85 160,170" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le bas (~5 cm du haut)")}`),

  6: L.svg(`
${L.flatTopPaper(85)}
<polygon points="112,85 208,85 160,170" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.5"/>
${L.centerCreaseV(160, 85, 370)}
${L.foldedTri("80,85 160,85 160,165")}
${L.foldedTri("240,85 160,85 160,165")}
${L.valleyFold(80, 85, 160, 165)}
${L.valleyFold(240, 85, 160, 165)}
${L.arrowArc(95, 105, 130, 100, 150, 150)}
${L.arrowArc(225, 105, 190, 100, 170, 150)}
<polygon points="148,165 172,165 160,185" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre")}`),

  7: L.svg(`
${L.flatTopPaper(85)}
${L.centerCreaseV(160, 85, 370)}
${L.foldedTriMuted("80,85 160,85 160,165")}
${L.foldedTriMuted("240,85 160,85 160,165")}
<polygon points="148,165 172,165 160,190" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 165, 172, 165)}
<path d="M 160 190 Q 180 170 160 140" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — triangle vers le haut")}`),

  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  // 9: form wings with slight sweep-back
  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">AILES EN FLÈCHE VERS L'ARRIÈRE</text>
${L.label("Ailes moyennes, en flèche — comme un faucon")}`),

  // 10: winglets up
  10: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 32 268" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 288 268" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petits winglets relevés au bout des ailes</text>`, L.planeGradients(HUE, SAT)),

  // 11: final
  11: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 32 268" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 288 268" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Faucon prêt — piqué long et droit</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("falcon", steps);
