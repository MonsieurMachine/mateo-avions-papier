// Le Dragon (20 steps, very hard, emerald, with scales, horns, tail cuts)
import * as L from "./lib-folding.js";

const HUE = 160, SAT = 70;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),

  // 3: cross crease
  3: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 95 275 Q 80 200 95 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${L.label("Plie en 2 largeur — croix de plis")}`),

  4: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.foldedTri("80,30 160,30 160,110")}
${L.valleyFold(80, 30, 160, 110)}
${L.arrowArc(95, 50, 130, 40, 150, 95)}
${L.label("Coin haut-gauche → centre")}`),

  5: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.foldedTriMuted("80,30 160,30 160,110")}
${L.foldedTri("240,30 160,30 160,110")}
${L.valleyFold(240, 30, 160, 110)}
${L.arrowArc(225, 50, 190, 40, 170, 95)}
${L.label("Coin haut-droit → centre")}`),

  // 6: point down to horizontal center
  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.valleyFold(80, 200, 240, 200)}
<path d="M 160 40 Q 185 120 160 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${L.label("Pointe vers le bas jusqu'à centre horizontal")}`),

  // 7: new corners
  7: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTri("80,110 160,110 160,190")}
${L.foldedTri("240,110 160,110 160,190")}
${L.valleyFold(80, 110, 160, 190)}
${L.valleyFold(240, 110, 160, 190)}
${L.arrowArc(95, 130, 130, 125, 150, 175)}
${L.arrowArc(225, 130, 190, 125, 170, 175)}
<polygon points="148,190 172,190 160,215" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre")}`),

  // 8: lock
  8: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTriMuted("80,110 160,110 160,190")}
${L.foldedTriMuted("240,110 160,110 160,190")}
<polygon points="148,190 172,190 160,220" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 190, 172, 190)}
<path d="M 160 220 Q 180 200 160 170" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="260" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Replie la pointe vers le haut")}`),

  // 9-10: extra diagonal folds (narrower)
  9: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTriMuted("80,110 160,110 160,190")}
${L.foldedTriMuted("240,110 160,110 160,190")}
<polygon points="95,110 160,110 160,165" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(95, 110, 160, 165)}
${L.arrowArc(105, 125, 125, 125, 150, 160)}
${L.label("Bord incliné gauche → centre")}`),

  10: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTriMuted("80,110 160,110 160,190")}
${L.foldedTriMuted("240,110 160,110 160,190")}
<polygon points="95,110 160,110 160,165" fill="url(#foldTri)" opacity="0.7"/>
${L.existingCrease(95, 110, 160, 165)}
<polygon points="225,110 160,110 160,165" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(225, 110, 160, 165)}
${L.arrowArc(215, 125, 195, 125, 170, 160)}
${L.label("Bord incliné droit → centre")}`),

  11: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  // 12: irregular wings (pointy front, wide back)
  12: L.svg(`
${L.planeProfile()}
<!-- irregular wing shape -->
<path d="M 40 215 Q 100 150 200 135 Q 260 150 290 215" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
${L.valleyFold(40, 215, 290, 215)}
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<text x="160" y="358" text-anchor="middle" font-size="9" fill="#a8a29e" letter-spacing="1">POINTU DEVANT, LARGE ARRIÈRE</text>
${L.label("Ailes irrégulières — dragon")}`),

  // 13: cut + fold up horns (back of each wing)
  13: L.svg(`
${L.planeProfile()}
<!-- horn cuts at back -->
<path d="M 45 200 L 50 180 L 55 200" stroke="#dc2626" stroke-width="2" fill="none"/>
<text x="30" y="175" font-size="18">✂️</text>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">ENTAILLE 3 CM + PLIE VERS LE HAUT = CORNES</text>
${L.label("Cornes de dragon")}`),

  // 14: zigzag scales cuts
  14: L.svg(`
${L.planeProfile()}
<path d="M 290 215 L 285 205 L 280 215 L 275 205 L 270 215 L 265 205 L 260 215 L 255 205 L 250 215" stroke="#dc2626" stroke-width="1.8" fill="none"/>
<text x="230" y="200" font-size="16">✂️</text>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">ZIGZAG BORD ARRIÈRE — ÉCAILLES</text>
${L.label("Écailles en zigzag")}`),

  // 15: fold nose tip down (jaw)
  15: L.svg(`
${L.planeProfile()}
<polygon points="40,215 50,225 60,220" fill="hsl(${HUE}, ${SAT}%, 25%)" opacity="0.8"/>
<path d="M 40 215 L 50 228" stroke="#6366f1" stroke-width="2" marker-end="url(#arr)"/>
<text x="100" y="240" font-size="10" fill="#dc2626" font-weight="600">mâchoire</text>
${L.label("Plie le nez vers le bas — mâchoire")}`),

  // 16: cut dragon tail at back of fuselage
  16: L.svg(`
${L.planeProfile()}
<polygon points="40,280 60,310 20,300" fill="hsl(${HUE}, ${SAT}%, 35%)" stroke="#dc2626" stroke-width="1.5"/>
<text x="10" y="340" font-size="18">✂️</text>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">DÉCOUPE QUEUE + PLIE</text>
${L.label("Queue de dragon")}`),

  // 17: small flaps at back of wings
  17: L.svg(L.finalV(HUE, SAT) + `
<rect x="55" y="265" width="18" height="10" fill="hsl(${HUE}, ${SAT}%, 25%)" stroke="#dc2626" stroke-width="1.2"/>
<rect x="247" y="265" width="18" height="10" fill="hsl(${HUE}, ${SAT}%, 25%)" stroke="#dc2626" stroke-width="1.2"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petits volets à l'arrière — pour figures</text>`, L.planeGradients(HUE, SAT)),

  18: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie fort sur tous les plis</text>`),

  19: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Déplie en V prononcé</text>`, L.planeGradients(HUE, SAT)),

  20: L.svg(L.finalV(HUE, SAT) + `
<!-- jaw -->
<polygon points="156,48 164,48 160,58" fill="hsl(${HUE}, ${SAT}%, 20%)"/>
<!-- scales zigzag on wings -->
<path d="M 44 277 L 48 270 L 54 277 L 60 270 L 66 277" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="1.5" fill="none"/>
<path d="M 254 277 L 260 270 L 266 277 L 272 270 L 276 277" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="1.5" fill="none"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Dragon prêt à cracher du feu 🐉</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("dragon", steps);
