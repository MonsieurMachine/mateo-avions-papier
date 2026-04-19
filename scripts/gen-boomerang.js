// Le Boomerang (20 steps, very hard, orange, most complex — comes back!)
import * as L from "./lib-folding.js";

const HUE = 22, SAT = 85;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),

  // 3: add horizontal crease (cross pattern)
  3: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 95 275 Q 80 200 95 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<circle cx="160" cy="200" r="3" fill="#dc2626" opacity="0.7"/>
${L.label("Plie en 2 dans la largeur aussi — croix de plis")}`),

  4: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.foldedTri("80,30 160,30 160,110")}
${L.valleyFold(80, 30, 160, 110)}
${L.arrowArc(95, 50, 130, 40, 150, 95)}
${L.label("Coin haut-gauche → centre vertical")}`),

  5: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.foldedTriMuted("80,30 160,30 160,110")}
${L.foldedTri("240,30 160,30 160,110")}
${L.valleyFold(240, 30, 160, 110)}
${L.arrowArc(225, 50, 190, 40, 170, 95)}
${L.label("Coin haut-droit → centre vertical")}`),

  // 6: point down to horizontal center line
  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(80, 200, 240, 200)}
<path d="M 160 40 Q 185 120 160 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${L.label("Pointe vers le bas jusqu'à ligne horizontale")}`),

  // 7-8: corners to center (new)
  7: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTri("80,110 160,110 160,190")}
${L.valleyFold(80, 110, 160, 190)}
${L.arrowArc(95, 130, 130, 125, 150, 175)}
${L.label("Coin haut-gauche → centre")}`),

  8: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTriMuted("80,110 160,110 160,190")}
${L.foldedTri("240,110 160,110 160,190")}
${L.valleyFold(240, 110, 160, 190)}
${L.arrowArc(225, 130, 190, 125, 170, 175)}
<polygon points="148,190 172,190 160,215" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Coin haut-droit → centre")}`),

  // 9: lock (fold point up)
  9: L.svg(`
${L.flatTopPaper(110)}
${L.centerCreaseV(160, 110, 370)}
${L.foldedTriMuted("80,110 160,110 160,190")}
${L.foldedTriMuted("240,110 160,110 160,190")}
<polygon points="148,190 172,190 160,220" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 190, 172, 190)}
<path d="M 160 220 Q 180 200 160 170" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="260" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Replie la pointe vers le haut")}`),

  // 10: flip
  10: L.svg(`
${L.flipIndicator("RETOURNE")}
${L.paperPortrait()}
${L.centerCreaseV()}
${L.label("Retourne la feuille")}`),

  // 11: fold in half along vertical center
  11: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 — gauche sur droite")}`),

  // 12: rotate (point left)
  12: L.svg(`
${L.flipIndicator("PIVOTE — POINTE À GAUCHE")}
<polygon points="40,200 160,160 300,160 300,240 160,240" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<text x="160" y="330" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">CÔTÉ OUVERT EN HAUT</text>
${L.label("Pivote — pointe à gauche, ouvert en haut")}`),

  // 13: diagonal fold from top-back to bottom-front (boomerang shape!)
  13: L.svg(`
<polygon points="40,200 160,160 300,160 300,240 160,240" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<!-- diagonal valley fold: rear-top to front-bottom -->
${L.valleyFold(300, 160, 160, 240)}
${L.arrowArc(290, 170, 230, 165, 175, 235)}
<text x="160" y="330" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="700">PLI CLÉ — FORME DE BOOMERANG</text>
${L.label("Aile du dessus : pli diagonal arrière→avant-bas")}`),

  // 14: flip + same on other side
  14: L.svg(`
${L.flipIndicator("RETOURNE + MÊME PLI DIAGONAL")}
<polygon points="40,200 160,170 300,170 300,250 160,250" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.valleyFold(300, 170, 160, 250)}
${L.arrowArc(290, 180, 230, 175, 175, 245)}
${L.label("Même pli diagonal de l'autre côté — symétrique")}`),

  // 15: spread wings to open V (100-120°)
  15: L.svg(`
<!-- V-shape boomerang from top view -->
<g transform="translate(160, 200)">
  <polygon points="-110,30 -20,-30 0,0 20,-30 110,30" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.5"/>
</g>
<text x="160" y="290" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">V OUVERT ~100-120°</text>
${L.label("Déplie — V bien ouvert")}`),

  // 16: winglets up at wingtips
  16: L.svg(`
<g transform="translate(160, 200)">
  <polygon points="-110,30 -20,-30 0,0 20,-30 110,30" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.5"/>
  <path d="M -110 30 L -125 10" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 110 30 L 125 10" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
</g>
${L.label("Winglets vers le haut (~2 cm)")}`),

  // 17: wingtips slightly curved back
  17: L.svg(`
<g transform="translate(160, 200)">
  <polygon points="-110,30 -20,-30 0,0 20,-30 110,30" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.5"/>
  <path d="M -110 30 Q -120 20 -125 10" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M 110 30 Q 120 20 125 10" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round"/>
</g>
${L.label("Bouts légèrement vers l'arrière — courbure")}`),

  // 18: check V symmetry
  18: L.svg(`
<g transform="translate(160, 200)">
  <polygon points="-110,30 0,-30 110,30" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.5"/>
  <line x1="0" y1="-30" x2="0" y2="50" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 2"/>
</g>
<text x="160" y="300" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">V OUVERT + SYMÉTRIQUE</text>
${L.label("Vue de face — vérifie la symétrie")}`),

  // 19: press folds
  19: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie bien sur tous les plis</text>`),

  // 20: throw + return
  20: L.svg(`
<g transform="translate(160, 180)">
  <polygon points="-100,20 -15,-25 0,0 15,-25 100,20" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="1.5"/>
</g>
<!-- return path -->
<path d="M 260 190 Q 290 270 200 310 Q 130 290 90 270" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 3"/>
<text x="260" y="178" font-size="12">🪃</text>
<text x="160" y="355" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Lance en tournant — il revient !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("boomerang", steps);
