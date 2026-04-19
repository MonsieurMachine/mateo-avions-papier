// Le Canard Volant (14 steps, hard, duck yellow, with front canard wings)
import * as L from "./lib-folding.js";

const HUE = 46, SAT = 80;

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

  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 le long du centre")}`),

  // 8: form main wings BUT leave 4cm front unfolded (for canard wings)
  8: L.svg(`
${L.planeProfile()}
<!-- fold line only along most of wing, leaving 60px at front (~4cm) -->
${L.valleyFold(100, 215, 290, 215)}
<polygon points="100,215 150,160 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
<!-- highlight unfolded front -->
<rect x="260" y="135" width="30" height="80" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="275" y="115" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">4 cm avant</text>
<text x="275" y="125" text-anchor="middle" font-size="9" fill="#dc2626">NE PAS PLIER</text>
${L.label("Ailes principales — laisse 4 cm à l'avant")}`),

  // 9: canard wings — fold top layer outward at front
  9: L.svg(L.finalV(HUE, SAT) + `
<!-- canard mini-wings at the front of fuselage -->
<polygon points="160,70 130,100 155,95" fill="hsl(${HUE}, ${SAT}%, 50%)" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="1.2"/>
<polygon points="160,70 190,100 165,95" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.2"/>
<text x="85" y="95" font-size="10" fill="#dc2626" font-weight="600">ailes canard →</text>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Rabats la couche sup à l'avant — ailes canard</text>`, L.planeGradients(HUE, SAT)),

  // 10: nose tip slightly down
  10: L.svg(L.finalV(HUE, SAT) + `
<polygon points="160,70 130,100 155,95" fill="hsl(${HUE}, ${SAT}%, 50%)" opacity="0.8"/>
<polygon points="160,70 190,100 165,95" fill="hsl(${HUE}, ${SAT}%, 55%)" opacity="0.8"/>
<polygon points="158,48 162,48 160,55" fill="hsl(${HUE}, ${SAT}%, 20%)"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Nez légèrement vers le bas (~5 mm)</text>`, L.planeGradients(HUE, SAT)),

  // 11: adjust canard angle (point up)
  11: L.svg(L.finalV(HUE, SAT) + `
<polygon points="160,70 128,98 154,93" fill="hsl(${HUE}, ${SAT}%, 50%)" opacity="0.8"/>
<polygon points="160,70 192,98 166,93" fill="hsl(${HUE}, ${SAT}%, 55%)" opacity="0.8"/>
<path d="M 135 98 L 125 85" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
<path d="M 185 98 L 195 85" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Ailes canard légèrement inclinées vers le haut</text>`, L.planeGradients(HUE, SAT)),

  // 12: winglets at main wingtips
  12: L.svg(L.finalV(HUE, SAT) + `
<polygon points="160,70 128,98 154,93" fill="hsl(${HUE}, ${SAT}%, 50%)" opacity="0.8"/>
<polygon points="160,70 192,98 166,93" fill="hsl(${HUE}, ${SAT}%, 55%)" opacity="0.8"/>
<path d="M 40 280 L 32 270" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 288 270" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petits winglets au bout des ailes principales</text>`, L.planeGradients(HUE, SAT)),

  13: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie bien sur tous les plis</text>`),

  14: L.svg(L.finalV(HUE, SAT) + `
<polygon points="160,70 128,98 154,93" fill="hsl(${HUE}, ${SAT}%, 40%)"/>
<polygon points="160,70 192,98 166,93" fill="hsl(${HUE}, ${SAT}%, 45%)"/>
<path d="M 40 280 L 32 270" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 288 270" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Canard prêt — stable et précis !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("canard", steps);
