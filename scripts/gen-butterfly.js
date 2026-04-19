// Le Papillon (14 steps, hard, lavender, LANDSCAPE, curved wings)
import * as L from "./lib-folding.js";

const HUE = 280, SAT = 55;

const steps = {
  1: L.stepPaperLandscape(),
  2: L.stepFoldHalfUnfoldH(),

  // 3: TL corner → horizontal center
  3: L.svg(`
${L.paperLandscape()}
${L.centerCreaseH()}
<polygon points="30,110 110,110 110,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(30, 110, 110, 200)}
${L.arrowArc(50, 130, 70, 160, 100, 195)}
${L.label("Coin haut-gauche → centre")}`),

  // 4: BL corner → center (point formed on left)
  4: L.svg(`
${L.paperLandscape()}
${L.centerCreaseH()}
${L.foldedTriMuted("30,110 110,110 110,200")}
${L.existingCrease(30, 110, 110, 200)}
<polygon points="30,290 110,290 110,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(30, 290, 110, 200)}
${L.arrowArc(50, 270, 70, 240, 100, 205)}
<circle cx="110" cy="200" r="2.5" fill="#6366f1" opacity="0.7"/>
${L.label("Coin bas-gauche → pointe à gauche")}`),

  // 5-6: narrower nose (second diagonal folds)
  5: L.svg(`
<polygon points="30,200 110,110 290,110 290,290 110,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH()}
${L.fadedCrease(30, 200, 110, 110)}
${L.fadedCrease(30, 200, 110, 290)}
<polygon points="30,200 110,110 70,145" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(30, 200, 70, 145)}
${L.arrowArc(60, 140, 55, 175, 90, 200)}
${L.label("Bord incliné du haut → centre")}`),

  6: L.svg(`
<polygon points="30,200 110,110 290,110 290,290 110,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH()}
${L.fadedCrease(30, 200, 110, 110)}
${L.fadedCrease(30, 200, 110, 290)}
<polygon points="30,200 110,110 70,145" fill="url(#foldTri)" opacity="0.6"/>
${L.existingCrease(30, 200, 70, 145)}
<polygon points="30,200 110,290 70,255" fill="url(#foldTri)" opacity="0.85"/>
${L.valleyFold(30, 200, 70, 255)}
${L.arrowArc(60, 260, 55, 225, 90, 200)}
${L.label("Bord incliné du bas → centre")}`),

  // 7: fold point to the right, at center of paper
  7: L.svg(`
<polygon points="30,200 110,110 290,110 290,290 110,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH()}
${L.valleyFold(160, 110, 160, 290)}
<!-- point folds to the right -->
<path d="M 40 200 Q 100 170 155 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${L.label("Plie la pointe vers la droite (centre)")}`),

  8: L.svg(`
${L.flipIndicator("RETOURNE")}
${L.paperLandscape()}
${L.centerCreaseH()}
${L.label("Retourne la feuille")}`),

  // 9: fold in half along horizontal center
  9: L.svg(`
${L.paperLandscape()}
${L.mountainFold(30, 200, 290, 200)}
${L.arrowArc(240, 270, 270, 200, 240, 130)}
${L.label("Plie en 2 le long du centre horizontal")}`),

  // 10: form wings (fold at 2cm from nose)
  10: L.svg(`
<!-- Butterfly profile: nose left, folded state -->
<polygon points="35,195 110,125 290,125 290,275 35,275" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="35" y1="275" x2="290" y2="275" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" opacity="0.85"/>
${L.valleyFold(55, 125, 290, 125)}
<polygon points="35,195 110,125 290,125 290,200" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 270)}
${L.label("Forme les ailes — 2 cm du nez")}`),

  // 11: spread wings flat
  11: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Déplie les ailes bien plates</text>`, L.planeGradients(HUE, SAT)),

  // 12: curve wings upward with fingers
  12: L.svg(L.finalV(HUE, SAT) + `
<!-- curved arrows showing wing curl -->
<path d="M 80 270 Q 40 230 60 200" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3" fill="none" stroke-linecap="round"/>
<path d="M 240 270 Q 280 230 260 200" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3" fill="none" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Courbe doucement vers le haut (ne plie pas!)</text>`, L.planeGradients(HUE, SAT)),

  // 13: fold wingtips up (rounded butterfly tips)
  13: L.svg(L.finalV(HUE, SAT) + `
<!-- rounded wingtip indicators -->
<path d="M 45 280 Q 30 240 55 230" stroke="hsl(${HUE}, ${SAT}%, 35%)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M 275 280 Q 290 240 265 230" stroke="hsl(${HUE}, ${SAT}%, 35%)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bouts arrondis — ailes de papillon</text>`, L.planeGradients(HUE, SAT)),

  // 14: final
  14: L.svg(L.finalV(HUE, SAT) + `
<path d="M 45 280 Q 30 240 55 230" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M 275 280 Q 290 240 265 230" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="3" fill="none" stroke-linecap="round"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Papillon prêt à virevolter 🦋</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("butterfly", steps);
