// L'Oiseau (15 steps, hard, cream, cut wings + beak + tail)
import * as L from "./lib-folding.js";

const HUE = 40, SAT = 55;

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
${L.valleyFold(112, 100, 208, 100)}
<path d="M 160 40 Q 180 120 160 200" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,100 208,100 160,205" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le bas (~6 cm du haut)")}`),

  6: L.svg(`
${L.flatTopPaper(100)}
<polygon points="112,100 208,100 160,200" fill="#fef3c7" opacity="0.5"/>
${L.centerCreaseV(160, 100, 370)}
${L.foldedTri("80,100 160,100 160,180")}
${L.foldedTri("240,100 160,100 160,180")}
${L.valleyFold(80, 100, 160, 180)}
${L.valleyFold(240, 100, 160, 180)}
${L.arrowArc(95, 120, 130, 115, 150, 165)}
${L.arrowArc(225, 120, 190, 115, 170, 165)}
<polygon points="148,180 172,180 160,200" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre")}`),

  7: L.svg(`
${L.flatTopPaper(100)}
${L.centerCreaseV(160, 100, 370)}
${L.foldedTriMuted("80,100 160,100 160,180")}
${L.foldedTriMuted("240,100 160,100 160,180")}
<polygon points="148,180 172,180 160,205" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 180, 172, 180)}
<path d="M 160 205 Q 180 185 160 155" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="245" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — pointe vers le haut")}`),

  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  // 9: draw wing shape (pencil line on side view)
  9: L.svg(`
${L.planeProfile()}
<!-- rounded wing line in pencil -->
<path d="M 40 215 Q 130 150 250 180 Q 280 195 290 215" stroke="#c4a07c" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">DESSINE LA FORME DE L'AILE</text>
${L.label("Bord arrondi qui remonte au bout")}`),

  // 10: cut along the line
  10: L.svg(`
${L.planeProfile()}
<!-- cut wing shape -->
<path d="M 40 215 Q 130 150 250 180 Q 280 195 290 215" stroke="#dc2626" stroke-width="2" fill="none"/>
<text x="60" y="140" font-size="22">✂️</text>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">DÉCOUPE LES DEUX AILES EN MÊME TEMPS</text>
${L.label("Découpe le long de la ligne")}`),

  // 11: fold wings (with rounded shape, 2cm fuselage)
  11: L.svg(`
<!-- Plane profile with now-rounded wings -->
<path d="M 40,215 Q 130,150 250,180 Q 280,195 290,215 L 290,275 L 40,275 Z" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="275" x2="290" y2="275" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" opacity="0.85"/>
${L.valleyFold(40, 245, 290, 245)}
${L.arrowArc(220, 170, 245, 215, 235, 270)}
${L.label("Rabats chaque aile — 2 cm fuselage")}`),

  // 12: cut V in tail
  12: L.svg(`
${L.planeProfile()}
<!-- V cut at tail -->
<polygon points="40,245 60,215 60,275" fill="#fefaf4" stroke="#dc2626" stroke-width="1.5"/>
<text x="10" y="230" font-size="20">✂️</text>
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">DÉCOUPE UN V — QUEUE FOURCHUE</text>
${L.label("V à l'arrière → queue fourchue")}`),

  // 13: fold nose tip down (beak)
  13: L.svg(`
${L.planeProfile()}
<!-- beak fold at nose -->
<polygon points="40,215 45,225 55,220" fill="hsl(${HUE}, ${SAT}%, 25%)" opacity="0.8"/>
<path d="M 40 215 L 50 228" stroke="#6366f1" stroke-width="2" marker-end="url(#arr)"/>
<text x="100" y="240" font-size="10" fill="#dc2626" font-weight="600">bec</text>
${L.label("Plie le bout du nez vers le bas")}`),

  // 14: fold wingtips up (raised feathers)
  14: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 30 262" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 290 262" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bouts des ailes relevés — plumes</text>`, L.planeGradients(HUE, SAT)),

  // 15: final
  15: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 30 262" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 290 262" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<polygon points="156,48 164,48 160,58" fill="hsl(${HUE}, ${SAT}%, 20%)"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">L'Oiseau prend son envol !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("bird", steps);
