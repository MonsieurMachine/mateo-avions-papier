// Custom folding diagrams for Le Planeur Stable (9 steps, blue, dart-family with narrower nose)
import * as L from "./lib-folding.js";

const HUE = 220, SAT = 65;

const steps = {
  1: L.stepPaperPortrait(),
  2: L.stepFoldHalfUnfoldV(),
  3: L.stepCornerTL(),
  4: L.stepCornerTR(),

  // Step 5: fold left slanted edge to center (narrows nose)
  5: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<!-- darker overlay showing the narrow strip being folded (left) -->
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
<!-- new valley fold line -->
${L.valleyFold(160, 30, 125, 110)}
${L.arrowArc(100, 90, 130, 80, 145, 105)}
${L.label("Bord gauche → centre — nez plus étroit")}`),

  // Step 6: same on right
  6: L.svg(`
${L.houseShape()}
${L.centerCreaseV()}
${L.fadedCrease(80, 110, 160, 30)}
${L.fadedCrease(240, 110, 160, 30)}
<!-- left already folded (muted) -->
<polygon points="160,30 80,110 125,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.7"/>
${L.existingCrease(160, 30, 125, 110)}
<!-- right now folding -->
<polygon points="160,30 240,110 195,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.85"/>
${L.valleyFold(160, 30, 195, 110)}
${L.arrowArc(220, 90, 190, 80, 175, 105)}
${L.label("Bord droit → centre — le nez s'allonge")}`),

  // Step 7: fold plane in half along center (mountain fold, triangles inside)
  7: L.svg(`
<!-- Narrow-point shape (after double diagonal folds) -->
${L.narrowPointShape()}
${L.centerCreaseV()}
<!-- Mountain fold on center -->
${L.mountainFold(160, 30, 160, 370)}
${L.arrowArc(190, 240, 220, 200, 190, 160)}
<path d="M 130 260 Q 100 220 130 180" stroke="#6366f1" stroke-width="2" stroke-dasharray="2 3" stroke-linecap="round" fill="none" opacity="0.55"/>
${L.label("Plie en 2 — plis à l'intérieur")}`),

  // Step 8: form wings (side view, fold each side down)
  8: L.svg(`
${L.planeProfile()}
${L.valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${L.arrowArc(220, 150, 245, 200, 235, 275)}
<text x="160" y="355" text-anchor="middle" font-size="10" fill="#a8a29e" letter-spacing="1">CHAQUE CÔTÉ</text>
${L.label("Forme les ailes — rabats chaque côté")}`),

  // Step 9: final V with cut-flap annotation
  9: L.svg(`
${L.finalV(HUE, SAT)}
<!-- scissors mark at back of one wing -->
<text x="90" y="260" font-size="20">✂️</text>
<text x="252" y="260" font-size="20">✂️</text>
<text x="160" y="338" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500">+ 2 petites entailles pour des volets</text>`, L.planeGradients(HUE, SAT)),
};

L.writePlane("stable", steps);
