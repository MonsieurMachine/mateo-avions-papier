// Le Chasseur Furtif (16 steps, hard, black, F-117-inspired angular)
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
${L.valleyFold(112, 80, 208, 80)}
<path d="M 160 40 Q 180 95 160 160" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,80 208,80 160,165" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le bas (~4 cm du haut)")}`),

  6: L.svg(`
${L.flatTopPaper(80)}
<polygon points="112,80 208,80 160,165" fill="#fef3c7" opacity="0.5"/>
${L.centerCreaseV(160, 80, 370)}
${L.foldedTri("80,80 160,80 160,160")}
${L.foldedTri("240,80 160,80 160,160")}
${L.valleyFold(80, 80, 160, 160)}
${L.valleyFold(240, 80, 160, 160)}
${L.arrowArc(95, 100, 130, 95, 150, 145)}
${L.arrowArc(225, 100, 190, 95, 170, 145)}
<polygon points="148,160 172,160 160,180" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre")}`),

  7: L.svg(`
${L.flatTopPaper(80)}
${L.centerCreaseV(160, 80, 370)}
${L.foldedTriMuted("80,80 160,80 160,160")}
${L.foldedTriMuted("240,80 160,80 160,160")}
<polygon points="148,160 172,160 160,185" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 160, 172, 160)}
<path d="M 160 185 Q 180 165 160 135" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="220" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — petite pointe vers le haut")}`),

  // 8: more diagonal folds (thicker nose)
  8: L.svg(`
${L.flatTopPaper(80)}
${L.centerCreaseV(160, 80, 370)}
${L.foldedTriMuted("80,80 160,80 160,160")}
${L.foldedTriMuted("240,80 160,80 160,160")}
<polygon points="90,80 160,80 160,140" fill="url(#foldTri)" opacity="0.85"/>
<polygon points="230,80 160,80 160,140" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(90, 80, 160, 140)}
${L.valleyFold(230, 80, 160, 140)}
${L.arrowArc(105, 95, 130, 95, 150, 130)}
${L.arrowArc(215, 95, 190, 95, 170, 130)}
<text x="160" y="210" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">NEZ ÉPAIS, BEAUCOUP DE COUCHES</text>
${L.label("Encore bords inclinés → centre")}`),

  9: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  // 10: angular wings with zigzag trailing edge
  10: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
<!-- zigzag trailing edge preview -->
<path d="M 290 215 L 275 225 L 260 215 L 245 225 L 230 215" stroke="#dc2626" stroke-width="1.5" fill="none"/>
${L.arrowArc(220, 150, 245, 200, 235, 270)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">TRÈS ANGULAIRES — ZIGZAG ARRIÈRE</text>
${L.label("Ailes angulaires F-117")}`),

  // 11: V-tail (not vertical)
  11: L.svg(L.finalV(HUE, SAT) + `
<!-- V-tail fins at top -->
<polygon points="150,48 140,30 155,42" fill="hsl(${HUE}, ${SAT}%, 30%)" stroke="#dc2626" stroke-width="1.2"/>
<polygon points="170,48 180,30 165,42" fill="hsl(${HUE}, ${SAT}%, 30%)" stroke="#dc2626" stroke-width="1.2"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Aileron en V (pas vertical) — anti-radar</text>`, L.planeGradients(HUE, SAT)),

  // 12: angular winglets DOWN (not up)
  12: L.svg(L.finalV(HUE, SAT) + `
<polygon points="150,48 140,30 155,42" fill="hsl(${HUE}, ${SAT}%, 30%)" opacity="0.85"/>
<polygon points="170,48 180,30 165,42" fill="hsl(${HUE}, ${SAT}%, 30%)" opacity="0.85"/>
<path d="M 40 280 L 30 295" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 290 295" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Winglets vers le BAS (pas vers le haut)</text>`, L.planeGradients(HUE, SAT)),

  // 13: zigzag trailing edge
  13: L.svg(L.finalV(HUE, SAT) + `
<polygon points="150,48 140,30 155,42" fill="hsl(${HUE}, ${SAT}%, 30%)" opacity="0.85"/>
<polygon points="170,48 180,30 165,42" fill="hsl(${HUE}, ${SAT}%, 30%)" opacity="0.85"/>
<path d="M 40 280 L 65 270 L 90 280 L 115 270 L 140 280" stroke="#dc2626" stroke-width="2" fill="none"/>
<path d="M 180 280 L 205 270 L 230 280 L 255 270 L 280 280" stroke="#dc2626" stroke-width="2" fill="none"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bord arrière en zigzag — look furtif F-117</text>`, L.planeGradients(HUE, SAT)),

  14: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie fort sur les plis du nez</text>`),

  15: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Déplie en V assez prononcé</text>`, L.planeGradients(HUE, SAT)),

  16: L.svg(L.finalV(HUE, SAT) + `
<polygon points="150,48 140,30 155,42" fill="hsl(${HUE}, ${SAT}%, 20%)"/>
<polygon points="170,48 180,30 165,42" fill="hsl(${HUE}, ${SAT}%, 20%)"/>
<path d="M 40 280 L 30 295" stroke="hsl(${HUE}, ${SAT}%, 15%)" stroke-width="3" stroke-linecap="round"/>
<path d="M 280 280 L 290 295" stroke="hsl(${HUE}, ${SAT}%, 15%)" stroke-width="3" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Chasseur Furtif — prêt à frapper</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("stealth-fighter", steps);
