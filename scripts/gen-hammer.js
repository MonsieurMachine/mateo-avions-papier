// Le Marteau (15 steps, hard, steel gray, heavy nose)
import * as L from "./lib-folding.js";

const HUE = 215, SAT = 12;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: point down to shoulder line (y=110)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(80, 70, 240, 70)}
<path d="M 160 40 Q 180 90 160 110" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,70 208,70 160,115" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe au bas des triangles pliés")}`),

  // 6: new TL → center (narrow nose starts)
  6: L.svg(`
${L.flatTopPaper(70)}
<polygon points="112,70 208,70 160,115" fill="#fef3c7" opacity="0.5"/>
${L.centerCreaseV(160, 70, 370)}
${L.foldedTri("80,70 160,70 160,150")}
${L.valleyFold(80, 70, 160, 150)}
${L.arrowArc(95, 90, 130, 85, 150, 135)}
${L.label("Nouveau coin haut-gauche → centre")}`),

  // 7: new TR
  7: L.svg(`
${L.flatTopPaper(70)}
<polygon points="112,70 208,70 160,115" fill="#fef3c7" opacity="0.4"/>
${L.centerCreaseV(160, 70, 370)}
${L.foldedTriMuted("80,70 160,70 160,150")}
${L.existingCrease(80, 70, 160, 150)}
${L.foldedTri("240,70 160,70 160,150")}
${L.valleyFold(240, 70, 160, 150)}
${L.arrowArc(225, 90, 190, 85, 170, 135)}
${L.label("Nouveau coin haut-droit → centre")}`),

  // 8: SECOND point down (~3cm)
  8: L.svg(`
${L.flatTopPaper(70)}
${L.centerCreaseV(160, 70, 370)}
${L.foldedTriMuted("80,70 160,70 160,150")}
${L.foldedTriMuted("240,70 160,70 160,150")}
${L.valleyFold(110, 100, 210, 100)}
<path d="M 160 70 Q 180 95 160 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="260" y="115" font-size="10" fill="#dc2626" font-weight="600">2e pli</text>
${L.label("Pointe vers le bas ENCORE (~3 cm)")}`),

  // 9: bords inclines again
  9: L.svg(`
${L.flatTopPaper(100)}
${L.centerCreaseV(160, 100, 370)}
<!-- narrower triangular overlay (3rd pass narrow) -->
<polygon points="80,100 160,100 160,150" fill="url(#foldTri)" opacity="0.7"/>
<polygon points="240,100 160,100 160,150" fill="url(#foldTri)" opacity="0.7"/>
${L.valleyFold(80, 100, 160, 170)}
${L.valleyFold(240, 100, 160, 170)}
${L.arrowArc(95, 120, 130, 115, 150, 155)}
${L.arrowArc(225, 120, 190, 115, 170, 155)}
${L.label("Bords inclinés → centre — nez plus étroit")}`),

  // 10: third point-down (~2cm)
  10: L.svg(`
${L.flatTopPaper(100)}
${L.centerCreaseV(160, 100, 370)}
<polygon points="80,100 160,100 160,170" fill="url(#foldTri)" opacity="0.5"/>
<polygon points="240,100 160,100 160,170" fill="url(#foldTri)" opacity="0.5"/>
${L.valleyFold(130, 125, 190, 125)}
<path d="M 160 100 Q 180 125 160 150" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="220" y="140" font-size="10" fill="#dc2626" font-weight="600">3e pli</text>
${L.label("Dernier pli du nez (~2 cm)")}`),

  // 11: flip + fold in half, heavy nose emphasized
  11: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
<rect x="250" y="160" width="40" height="100" fill="hsl(${HUE}, ${SAT}%, 55%)" opacity="0.4"/>
<text x="270" y="200" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600" transform="rotate(-90 270 200)">NEZ LOURD</text>
${L.label("Appuie fort — beaucoup d'épaisseurs au nez")}`),

  // 12: form wings
  12: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
${L.label("Forme les ailes")}`),

  13: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie fort sur tous les plis</text>
<text x="160" y="250" text-anchor="middle" font-size="10" fill="#a8a29e">surtout au niveau du nez</text>`),

  14: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Déplie les ailes en léger V</text>`, L.planeGradients(HUE, SAT)),

  15: L.svg(L.finalV(HUE, SAT) + `
<!-- Heavy nose highlight -->
<circle cx="160" cy="55" r="8" fill="hsl(${HUE}, ${SAT}%, 15%)" opacity="0.6"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Champion de la distance !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("hammer", steps);
