// Le Planeur des Mers (10 steps, medium, teal)
import * as L from "./lib-folding.js";

const HUE = 175, SAT = 55;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: point-down to middle
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(112, 80, 208, 80)}
<path d="M 160 40 Q 190 150 160 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="112,80 208,80 160,200" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
${L.label("Pointe vers le milieu de la feuille")}`),

  // 6: two new corners + GAP (gull-wing style)
  6: L.svg(`
${L.flatTopPaper(80)}
<polygon points="112,80 208,80 160,200" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.45"/>
${L.centerCreaseV(160, 80, 370)}
<!-- folded corners DON'T reach center — leave 1cm gap -->
${L.foldedTri("80,80 150,80 150,170")}
${L.foldedTri("240,80 170,80 170,170")}
${L.valleyFold(80, 80, 150, 170)}
${L.valleyFold(240, 80, 170, 170)}
${L.arrowArc(95, 100, 130, 95, 145, 155)}
${L.arrowArc(225, 100, 190, 95, 175, 155)}
<!-- gap indicator -->
<line x1="150" y1="170" x2="170" y2="170" stroke="#dc2626" stroke-width="1.5"/>
<text x="160" y="195" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">↕ ~1 cm (ailes de mouette)</text>
${L.label("Coins → centre, laisse 1 cm entre les bords")}`),

  // 7: lock the protruding point
  7: L.svg(`
${L.flatTopPaper(80)}
${L.centerCreaseV(160, 80, 370)}
${L.foldedTriMuted("80,80 150,80 150,170")}
${L.foldedTriMuted("240,80 170,80 170,170")}
${L.existingCrease(80, 80, 150, 170)}
${L.existingCrease(240, 80, 170, 170)}
<polygon points="148,170 172,170 160,205" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 170, 172, 170)}
<path d="M 160 205 Q 185 180 160 155" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="240" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Replie la pointe qui dépasse — verrouillé")}`),

  // 8: flip + fold
  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne puis plie en 2 le long du centre")}`),

  // 9: form wings (very wide - seagull-like)
  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 280, 290, 280)}
<polygon points="40,215 100,135 290,135 290,280" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 260, 220, 240, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">LARGES AILES</text>
${L.label("Ailes très larges — chaque côté")}`),

  // 10: final V with upturned winglets
  10: L.svg(L.finalV(HUE, SAT) + `
<!-- Small upturned winglets at tips -->
<path d="M 38 280 L 30 260" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
<path d="M 282 280 L 290 260" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Winglets vers le haut comme une mouette</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("sea-glider", steps);
