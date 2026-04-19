// Le Planeur Furtif (12 steps, medium, slate, LANDSCAPE orientation)
import * as L from "./lib-folding.js";

const HUE = 215, SAT = 20;

const steps = {
  1: L.stepPaperLandscape(),

  // 2: fold in half widthwise + unfold (horizontal crease)
  2: L.stepFoldHalfUnfoldH(),

  // 3: TL corner → horizontal center (left side)
  3: L.svg(`
${L.paperLandscape()}
${L.centerCreaseH()}
<polygon points="30,110 110,110 110,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(30, 110, 110, 200)}
${L.arrowArc(50, 130, 70, 160, 100, 195)}
${L.label("Coin haut-gauche → ligne centrale")}`),

  // 4: BL corner → center (now a LEFT-pointing triangle)
  4: L.svg(`
${L.paperLandscape()}
${L.centerCreaseH()}
${L.foldedTriMuted("30,110 110,110 110,200")}
${L.existingCrease(30, 110, 110, 200)}
<polygon points="30,290 110,290 110,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(30, 290, 110, 200)}
${L.arrowArc(50, 270, 70, 240, 100, 205)}
<circle cx="110" cy="200" r="2.5" fill="#6366f1" opacity="0.7"/>
${L.label("Coin bas-gauche → pointe à gauche ✓")}`),

  // 5: fold the LEFT POINT to the right (1/3 of length)
  5: L.svg(`
<!-- left-pointing triangle + rectangle body -->
<polygon points="30,200 110,110 290,110 290,290 110,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH()}
${L.fadedCrease(30, 200, 110, 110)}
${L.fadedCrease(30, 200, 110, 290)}
<!-- valley fold vertical at x=115 (about 1/3 of the left) -->
${L.valleyFold(115, 110, 115, 290)}
<path d="M 40 200 Q 85 170 110 200" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${L.label("Plie la pointe vers la droite (~1/3)")}`),

  // 6-7: new corners to center (after flat-left-edge from step 5)
  6: L.svg(`
<polygon points="115,110 290,110 290,290 115,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH(200, 115, 290)}
<polygon points="115,110 195,110 195,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(115, 110, 195, 200)}
${L.arrowArc(140, 130, 155, 165, 185, 195)}
${L.label("Nouveau coin haut-gauche → centre")}`),

  7: L.svg(`
<polygon points="115,110 290,110 290,290 115,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH(200, 115, 290)}
${L.foldedTriMuted("115,110 195,110 195,200")}
${L.existingCrease(115, 110, 195, 200)}
<polygon points="115,290 195,290 195,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(115, 290, 195, 200)}
${L.arrowArc(140, 270, 155, 235, 185, 205)}
${L.label("Nouveau coin bas-gauche → centre")}`),

  // 8: flip + fold in half (mountain on horizontal center)
  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
<!-- Paper profile, nose left -->
<polygon points="40,215 110,155 290,155 290,295 40,295" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="295" x2="290" y2="295" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.85"/>
${L.fadedCrease(40, 215, 110, 155)}
${L.label("Retourne + plie en 2 le long du centre")}`),

  // 9: form very wide wings
  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 290, 290, 290)}
<polygon points="40,215 100,135 290,135 290,290" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 260, 220, 240, 288)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">PRESQUE PLAT — MINIMUM DE FUSELAGE</text>
${L.label("Ailes TRÈS larges")}`),

  // 10: wings almost flat, tiny V
  10: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Ailes presque horizontales — V très léger</text>`, L.planeGradients(HUE, SAT)),

  // 11: fold winglets up (~2cm)
  11: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 28 255" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 292 255" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="28" y="245" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">↑</text>
<text x="292" y="245" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">↑</text>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Winglets ~2 cm relevés</text>`, L.planeGradients(HUE, SAT)),

  // 12: ready
  12: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 28 255" stroke="hsl(${HUE}, ${SAT}%, 35%)" stroke-width="3" stroke-linecap="round"/>
<path d="M 280 280 L 292 255" stroke="hsl(${HUE}, ${SAT}%, 35%)" stroke-width="3" stroke-linecap="round"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Lance doucement — il flottera silencieux</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("stealth-glider", steps);
