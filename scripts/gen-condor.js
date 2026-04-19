// Le Condor (17 steps, very hard, dark brown, LANDSCAPE + reverse fold)
import * as L from "./lib-folding.js";

const HUE = 28, SAT = 25;

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
${L.label("Coin haut-gauche → centre horizontal")}`),

  // 4: BL corner → center (point formed)
  4: L.svg(`
${L.paperLandscape()}
${L.centerCreaseH()}
${L.foldedTriMuted("30,110 110,110 110,200")}
${L.existingCrease(30, 110, 110, 200)}
<polygon points="30,290 110,290 110,200" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
${L.valleyFold(30, 290, 110, 200)}
${L.arrowArc(50, 270, 70, 240, 100, 205)}
${L.label("Coin bas-gauche → pointe à gauche")}`),

  // 5-6: narrower
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
${L.label("Bord incliné du bas → centre — pointe fine")}`),

  // 7: pre-crease for reverse fold (fold point right ~4cm then unfold)
  7: L.svg(`
<polygon points="30,200 110,110 290,110 290,290 110,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH()}
<line x1="80" y1="170" x2="80" y2="230" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.85"/>
<path d="M 40 200 Q 60 180 78 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<path d="M 78 205 Q 60 220 40 200" stroke="#6366f1" stroke-width="2" stroke-dasharray="3 2" fill="none" opacity="0.6"/>
${L.label("Plie la pointe vers la droite puis déplie")}`),

  // 8: reverse fold (open layers, tuck inside)
  8: L.svg(`
<polygon points="80,200 110,110 290,110 290,290 110,290 80,200" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
${L.centerCreaseH(200, 80, 290)}
<!-- reverse fold indicator: point tucked inside -->
<polygon points="80,200 95,180 95,220" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="50" y="170" font-size="9" fill="#dc2626" font-weight="600">pli inversé</text>
<text x="50" y="182" font-size="9" fill="#dc2626">intérieur</text>
${L.label("Pli inversé — renforce le nez")}`),

  9: L.svg(`
${L.flipIndicator("RETOURNE")}
${L.paperLandscape()}
${L.centerCreaseH()}
${L.label("Retourne la feuille")}`),

  // 10: fold in half
  10: L.svg(`
${L.paperLandscape()}
${L.mountainFold(30, 200, 290, 200)}
${L.arrowArc(240, 270, 270, 200, 240, 130)}
${L.label("Plie en 2 le long du centre horizontal")}`),

  // 11: form very wide wings (5mm fuselage)
  11: L.svg(`
<polygon points="40,215 110,145 290,145 290,290 40,290" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="290" x2="290" y2="290" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" opacity="0.85"/>
${L.valleyFold(40, 280, 290, 280)}
<polygon points="40,215 110,145 290,145 290,280" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 160, 260, 230, 240, 285)}
<text x="160" y="358" text-anchor="middle" font-size="9" fill="#a8a29e" letter-spacing="1">TRÈS LARGES — 5 MM FUSELAGE</text>
${L.label("Ailes ÉNORMES — envergure max")}`),

  // 12: big 3cm winglets
  12: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 25 255" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
<path d="M 280 280 L 295 255" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
<text x="25" y="245" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">3 cm</text>
<text x="295" y="245" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">3 cm</text>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Grands winglets (3 cm)</text>`, L.planeGradients(HUE, SAT)),

  // 13: small trailing flaps (5mm)
  13: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 25 255" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 295 255" stroke="hsl(${HUE}, ${SAT}%, 30%)" stroke-width="2.5" stroke-linecap="round"/>
<line x1="45" y1="280" x2="150" y2="280" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
<line x1="170" y1="280" x2="275" y2="280" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Petits volets arrière (5 mm) — stabilisent</text>`, L.planeGradients(HUE, SAT)),

  // 14: feather cuts at wingtips
  14: L.svg(L.finalV(HUE, SAT) + `
<path d="M 60 280 L 55 270 L 50 280 L 45 270 L 40 280" stroke="#dc2626" stroke-width="1.8" fill="none"/>
<path d="M 260 280 L 265 270 L 270 280 L 275 270 L 280 280" stroke="#dc2626" stroke-width="1.8" fill="none"/>
<text x="20" y="255" font-size="14">✂️</text>
<text x="290" y="255" font-size="14">✂️</text>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">Entailles en forme de plumes au bout</text>`, L.planeGradients(HUE, SAT)),

  15: L.svg(`
${L.paperPortrait()}
${L.centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#5b5040" font-weight="500">Appuie bien — surtout le nez renforcé</text>`),

  16: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Ailes presque horizontales, V très léger</text>`, L.planeGradients(HUE, SAT)),

  17: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 25 255" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 295 255" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 60 280 L 55 270 L 50 280 L 45 270 L 40 280" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="1.8" fill="none"/>
<path d="M 260 280 L 265 270 L 270 280 L 275 270 L 280 280" stroke="hsl(${HUE}, ${SAT}%, 20%)" stroke-width="1.8" fill="none"/>
<text x="160" y="338" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="700">Condor prêt — lance d'en haut !</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("condor", steps);
