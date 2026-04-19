// L'Étoile Ninja (13 steps, medium, midnight, acrobatics — cross-crease pattern)
import * as L from "./lib-folding.js";

const HUE = 240, SAT = 45;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),

  // 3: add horizontal crease (cross of creases)
  3: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 95 275 Q 80 200 95 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<circle cx="160" cy="200" r="3" fill="#dc2626" opacity="0.7"/>
${L.label("Plie en largeur aussi — croix de plis")}`),

  // 4: TL corner → center of cross
  4: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
${L.foldedTri("80,30 160,30 160,110 80,110")}
<!-- actually simpler: corner → center point -->
${L.valleyFold(80, 110, 160, 30)}
${L.arrowArc(100, 60, 130, 100, 155, 195)}
<circle cx="160" cy="200" r="3" fill="#dc2626"/>
${L.label("Coin haut-gauche → centre")}`),

  // 5: TR corner
  5: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
${L.foldedTriMuted("80,30 160,30 160,110 80,110")}
${L.foldedTri("240,30 160,30 160,110 240,110")}
${L.arrowArc(220, 60, 190, 100, 165, 195)}
<circle cx="160" cy="200" r="3" fill="#dc2626"/>
${L.label("Coin haut-droit → centre")}`),

  // 6: BL corner
  6: L.svg(`
${L.paperPortrait()}
${L.foldedTriMuted("80,30 160,30 160,110 80,110")}
${L.foldedTriMuted("240,30 160,30 160,110 240,110")}
${L.foldedTri("80,370 160,370 160,290 80,290")}
${L.arrowArc(100, 340, 130, 300, 155, 205)}
<circle cx="160" cy="200" r="3" fill="#dc2626"/>
${L.label("Coin bas-gauche → centre")}`),

  // 7: BR corner — now all 4 corners in, diamond formed
  7: L.svg(`
${L.paperPortrait()}
${L.foldedTriMuted("80,30 160,30 160,110 80,110")}
${L.foldedTriMuted("240,30 160,30 160,110 240,110")}
${L.foldedTriMuted("80,370 160,370 160,290 80,290")}
${L.foldedTri("240,370 160,370 160,290 240,290")}
${L.arrowArc(220, 340, 190, 300, 165, 205)}
<!-- diamond indicator -->
<polygon points="160,35 235,200 160,365 85,200" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.7"/>
${L.label("Carré avec forme de losange ✓")}`),

  // 8: flip + top edge → horizontal center
  8: L.svg(`
${L.flipIndicator("RETOURNE")}
${L.paperPortrait()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
<!-- top band folding down -->
<rect x="80" y="30" width="160" height="170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2" opacity="0.85"/>
${L.valleyFold(80, 200, 240, 200)}
${L.arrowArc(160, 60, 180, 130, 160, 195)}
${L.label("Bord supérieur → centre horizontal")}`),

  // 9: bottom edge → horizontal center
  9: L.svg(`
${L.paperPortrait()}
<line x1="80" y1="200" x2="240" y2="200" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
<rect x="80" y="30" width="160" height="170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.7"/>
<rect x="80" y="200" width="160" height="170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2" opacity="0.85"/>
${L.valleyFold(80, 200, 240, 200)}
${L.arrowArc(160, 340, 180, 260, 160, 205)}
${L.label("Bord inférieur → centre horizontal")}`),

  // 10: fold in half along horizontal center
  10: L.svg(`
<rect x="80" y="30" width="160" height="340" rx="3" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.mountainFold(80, 200, 240, 200)}
${L.arrowArc(240, 340, 270, 200, 240, 60)}
${L.label("Plie en 2 le long du centre horizontal")}`),

  // 11: form wings diagonally (star shape)
  11: L.svg(`
<!-- flat band shape -->
<rect x="80" y="180" width="160" height="40" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.valleyFold(110, 180, 80, 160)}
${L.valleyFold(210, 180, 240, 160)}
${L.valleyFold(110, 220, 80, 240)}
${L.valleyFold(210, 220, 240, 240)}
<!-- 4 diagonal wing projections -->
<polygon points="80,160 110,180 80,200" fill="url(#foldTri)" stroke="#c4a07c" opacity="0.75"/>
<polygon points="240,160 210,180 240,200" fill="url(#foldTri)" stroke="#c4a07c" opacity="0.75"/>
<polygon points="80,240 110,220 80,200" fill="url(#foldTri)" stroke="#c4a07c" opacity="0.75"/>
<polygon points="240,240 210,220 240,200" fill="url(#foldTri)" stroke="#c4a07c" opacity="0.75"/>
${L.label("Rabats les ailes en diagonale — étoile")}`),

  // 12: raise wingtips to 90° (star points)
  12: L.svg(`
<!-- Simplified star shape -->
<g transform="translate(160, 200)">
  <polygon points="0,-80 25,-25 80,0 25,25 0,80 -25,25 -80,0 -25,-25"
           fill="hsl(${HUE}, ${SAT}%, 35%)" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="2"/>
  <circle cx="0" cy="0" r="8" fill="hsl(${HUE}, ${SAT}%, 65%)"/>
</g>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Relève les bouts à 90° — pointes d'étoile</text>
${L.label("Forme d'étoile ninja complète")}`),

  // 13: final — ready to throw spinning
  13: L.svg(`
<g transform="translate(160, 180)">
  <polygon points="0,-80 25,-25 80,0 25,25 0,80 -25,25 -80,0 -25,-25"
           fill="hsl(${HUE}, ${SAT}%, 35%)" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="2"/>
  <circle cx="0" cy="0" r="8" fill="hsl(${HUE}, ${SAT}%, 65%)"/>
</g>
<!-- spin motion lines -->
<path d="M 85 90 Q 90 110 110 115" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M 235 90 Q 230 110 210 115" stroke="#dc2626" stroke-width="2" fill="none" stroke-linecap="round"/>
<text x="160" y="340" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e">Prêt à tournoyer 🌀</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("ninja-star", steps);
