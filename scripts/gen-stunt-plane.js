// L'Avion Acrobatique (11 steps, hard, magenta, tricks plane)
import * as L from "./lib-folding.js";

const HUE = 330, SAT = 65;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: point-down BIG (far away for instability)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
${L.valleyFold(95, 135, 225, 135)}
<path d="M 160 40 Q 195 180 160 310" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<polygon points="95,135 225,135 160,315" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.55"/>
<text x="260" y="300" font-size="10" fill="#dc2626" font-weight="600">INSTABLE</text>
${L.label("Pointe bien bas — plus c'est loin, plus ça vrille")}`),

  // 6: two new corners
  6: L.svg(`
${L.flatTopPaper(135)}
<polygon points="95,135 225,135 160,305" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.5"/>
${L.centerCreaseV(160, 135, 370)}
${L.foldedTri("80,135 160,135 160,215")}
${L.foldedTri("240,135 160,135 160,215")}
${L.valleyFold(80, 135, 160, 215)}
${L.valleyFold(240, 135, 160, 215)}
${L.arrowArc(95, 155, 130, 150, 150, 200)}
${L.arrowArc(225, 155, 190, 150, 170, 200)}
<polygon points="148,215 172,215 160,235" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
${L.label("Deux coins → centre par-dessus le triangle")}`),

  // 7: lock small tip
  7: L.svg(`
${L.flatTopPaper(135)}
${L.centerCreaseV(160, 135, 370)}
${L.foldedTriMuted("80,135 160,135 160,215")}
${L.foldedTriMuted("240,135 160,135 160,215")}
<polygon points="148,215 172,215 160,240" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
${L.mountainFold(148, 215, 172, 215)}
<path d="M 160 240 Q 180 220 160 190" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="275" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${L.label("Verrou — petit triangle vers le haut")}`),

  8: L.svg(`
${L.flipIndicator("RETOURNE + PLIE EN 2")}
${L.planeProfile()}
${L.label("Retourne + plie en 2")}`),

  // 9: short wings (2cm fuselage)
  9: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 240, 290, 240)}
<polygon points="40,215 100,135 290,135 290,240" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">AILES COURTES — LAISSE 2 CM</text>
${L.label("Ailes courtes")}`),

  // 10: wingtips up at 45°
  10: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 20 245" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 300 245" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
<text x="160" y="332" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Bouts des ailes relevés à 45° — contrôle figures</text>`, L.planeGradients(HUE, SAT)),

  // 11: tail flaps for stunts
  11: L.svg(L.finalV(HUE, SAT) + `
<path d="M 40 280 L 20 245" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 280 280 L 300 245" stroke="hsl(${HUE}, ${SAT}%, 25%)" stroke-width="2.5" stroke-linecap="round"/>
<rect x="55" y="262" width="20" height="14" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="#dc2626" stroke-width="1.5"/>
<rect x="245" y="262" width="20" height="14" fill="hsl(${HUE}, ${SAT}%, 55%)" stroke="#dc2626" stroke-width="1.5"/>
<text x="160" y="332" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="700">Volets en directions différentes = figures</text>
<text x="160" y="348" text-anchor="middle" font-size="9" fill="#0f766e">2 hauts = boucle · 1 haut 1 bas = vrille</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("stunt-plane", steps);
