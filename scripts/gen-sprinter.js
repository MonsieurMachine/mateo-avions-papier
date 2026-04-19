// Le Sprinter (10 steps, medium, yellow, rear fin)
import * as L from "./lib-folding.js";

const HUE = 48, SAT = 75;

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
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
${L.valleyFold(160, 30, 125, 110)}
${L.arrowArc(100, 90, 130, 80, 145, 105)}
${L.label("Bord gauche → centre")}`),

  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.7"/>
${L.existingCrease(160, 30, 125, 110)}
<polygon points="160,30 240,110 195,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
${L.valleyFold(160, 30, 195, 110)}
${L.arrowArc(220, 90, 190, 80, 175, 105)}
${L.label("Bord droit → centre — nez fin")}`),

  7: L.svg(`
${L.narrowPointShape()}
${L.centerCreaseV()}
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
${L.label("Plie en 2 le long du centre")}`),

  8: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
${L.label("Forme les ailes — chaque côté")}`),

  // 9: cut rear fin
  9: L.svg(`
${L.planeProfile()}
<!-- Rear fin (vertical) at tail - depicted as a rectangle above the tail -->
<rect x="270" y="90" width="12" height="45" fill="hsl(${HUE}, ${SAT}%, 60%)" stroke="#dc2626" stroke-width="1.5"/>
<text x="276" y="78" text-anchor="middle" font-size="18">✂️</text>
<text x="200" y="100" font-size="9" fill="#dc2626" font-weight="600">~2 cm</text>
<path d="M 278 135 L 278 95" stroke="#6366f1" stroke-width="2" fill="none" marker-end="url(#arr)"/>
${L.label("Découpe + plie un aileron vertical à l'arrière")}`),

  // 10: final V
  10: L.svg(L.finalV(HUE, SAT) + `
<!-- rear fin shown at top of fuselage -->
<rect x="154" y="38" width="12" height="22" fill="hsl(${HUE}, ${SAT}%, 40%)"/>
<text x="160" y="340" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">Lance fort — rapide et polyvalent</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("sprinter", steps);
