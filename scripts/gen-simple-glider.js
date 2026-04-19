// Le Planeur Simple (8 steps, easy, mint green)
import * as L from "./lib-folding.js";

const HUE = 155, SAT = 55;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // 5: Point-down toward bottom (creates weighted nose for glider)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<!-- horizontal valley fold near top of body (below shoulders) -->
${L.valleyFold(95, 135, 225, 135)}
<!-- arrow showing peak going way down -->
<path d="M 160 40 Q 200 200 160 340" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<!-- ghost of folded point (lands near bottom) -->
<polygon points="95,135 225,135 160,340" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.4"/>
${L.label("Pointe vers le bas — nez lesté")}`),

  // 6: flip + fold in half
  6: L.svg(`
${L.flipIndicator("RETOURNE")}
<polygon points="80,135 240,135 240,370 80,370" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<!-- ghost of folded peak -->
<polygon points="95,135 225,135 160,335" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.45"/>
${L.centerCreaseV(160, 135, 370)}
${L.mountainFold(160, 135, 160, 370)}
${L.arrowArc(200, 250, 230, 220, 200, 180)}
${L.label("Plie en 2 le long du centre")}`),

  // 7: form wings (wide — only 1cm fuselage)
  7: L.svg(`
${L.planeProfile()}
<!-- valley fold close to spine = wide wings -->
${L.valleyFold(40, 280, 290, 280)}
<polygon points="40,215 100,135 290,135 290,280" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 260, 220, 240, 275)}
<text x="160" y="358" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">LAISSE 1 CM DE FUSELAGE</text>
${L.label("Ailes TRÈS larges — chaque côté")}`),

  // 8: final V
  8: L.svg(L.finalV(HUE, SAT) + `
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Lance doucement — il planera longtemps</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("simple-glider", steps);
