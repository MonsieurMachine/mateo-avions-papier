// Shared helpers for per-plane folding diagram scripts.
// Each gen-{id}.js imports from this and composes per-step SVGs.
//
// Canvas: 320 × 400. Paper is centered at x=[80,240] (portrait)
// or x=[30,290] y=[110,290] (landscape).

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

export const DEFS = `<defs>
  <filter id="ps" x="-10%" y="-10%" width="120%" height="120%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
    <feOffset dx="0" dy="3"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1"/>
  </marker>
  <marker id="arrT" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#14b8a6"/>
  </marker>
  <linearGradient id="foldTri" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fff7ed"/>
    <stop offset="1" stop-color="#fed7aa" stop-opacity="0.7"/>
  </linearGradient>
</defs>`;

export function planeGradients(hue, sat = 55) {
  return `<linearGradient id="pWingL" x1="0.5" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="hsl(${hue}, ${Math.round(sat * 0.9)}%, 58%)"/>
    <stop offset="0.55" stop-color="hsl(${hue}, ${sat}%, 43%)"/>
    <stop offset="1" stop-color="hsl(${hue}, ${Math.round(sat * 1.05)}%, 28%)"/>
  </linearGradient>
  <linearGradient id="pWingR" x1="0.5" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="hsl(${hue}, ${sat}%, 43%)"/>
    <stop offset="0.5" stop-color="hsl(${hue}, ${Math.round(sat * 1.05)}%, 32%)"/>
    <stop offset="1" stop-color="hsl(${hue}, ${Math.round(sat * 1.1)}%, 20%)"/>
  </linearGradient>`;
}

export function svg(body, extraDefs = "") {
  const defs = extraDefs
    ? DEFS.replace("</defs>", extraDefs + "</defs>")
    : DEFS;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" fill="none" font-family="system-ui,-apple-system,sans-serif">
${defs}
${body}
</svg>
`;
}

// ---------- PAPER ----------

export const paperPortrait = () => `<rect x="80" y="30" width="160" height="340" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<path d="M84 40 L84 34 L90 34" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 34 L236 34 L236 40" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M84 360 L84 366 L90 366" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 366 L236 366 L236 360" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>`;

export const paperLandscape = () => `<rect x="30" y="110" width="260" height="180" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<path d="M34 120 L34 114 L40 114" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M280 114 L286 114 L286 120" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M34 280 L34 286 L40 286" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M280 286 L286 286 L286 280" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>`;

export const centerCreaseV = (x1 = 160, y1 = 30, y2 = 370) =>
  `<line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>`;

export const centerCreaseH = (y1 = 200, x1 = 30, x2 = 290) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y1}" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>`;

// ---------- FOLD LINES ----------

export const valleyFold = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#3b82f6" stroke-width="1.7" stroke-dasharray="5 3" stroke-linecap="round"/>`;

export const mountainFold = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 3 2 3" stroke-linecap="round"/>`;

export const existingCrease = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#c4a07c" stroke-width="1" stroke-linecap="round"/>`;

export const fadedCrease = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#c4a07c" stroke-width="1" stroke-dasharray="2 2" stroke-linecap="round" opacity="0.7"/>`;

// ---------- ARROWS ----------

export const arrowArc = (x1, y1, cx, cy, x2, y2, opts = {}) => {
  const teal = opts.teal ? "stroke=\"#14b8a6\"" : "stroke=\"#6366f1\"";
  const marker = opts.teal ? "url(#arrT)" : "url(#arr)";
  const opacity = opts.faded ? "opacity=\"0.6\"" : "";
  return `<path d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" ${teal} stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="${marker}" ${opacity}/>`;
};

export const flipIndicator = (text = "RETOURNE") => `<g>
  <path d="M 80 55 Q 160 25 240 55" stroke="#14b8a6" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrT)"/>
  <text x="160" y="80" text-anchor="middle" font-size="11" font-weight="500" fill="#0f766e" letter-spacing="0.8">${text}</text>
</g>`;

// ---------- SHAPES ----------

export const foldedTri = (points) =>
  `<polygon points="${points}" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>`;

export const foldedTriMuted = (points) =>
  `<polygon points="${points}" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.9"/>`;

// After step 4 (TL + TR folded): "house" shape
// Peak at (160, 30), shoulders at (80, 110) and (240, 110), body to (_, 370)
export const houseShape = () => `<polygon points="160,30 240,110 240,370 80,370 80,110" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>`;

// After step N (point folded down): flat-top rect
export const flatTopPaper = (topY = 90) =>
  `<polygon points="80,${topY} 240,${topY} 240,370 80,370" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>`;

// Narrow pointed shape (after double diagonal folds). Nose at (160, 30),
// shoulders at (120, 150), body to (_, 370).
export const narrowPointShape = () =>
  `<polygon points="160,30 200,150 200,370 120,370 120,150" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>`;

// Super narrow (triple diagonal folds) — like a sonic jet
export const veryNarrowShape = () =>
  `<polygon points="160,30 182,180 182,370 138,370 138,180" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>`;

// Plane side profile after fold-in-half (nose left, spine bottom)
export const planeProfile = () => `<polygon points="40,215 100,135 290,135 290,295 40,295" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="295" x2="290" y2="295" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.85"/>
<text x="165" y="312" text-anchor="middle" font-size="9" fill="#a8a29e" letter-spacing="1">PLIURE CENTRALE</text>
<line x1="40" y1="215" x2="100" y2="135" stroke="#c4a07c" stroke-width="1" stroke-dasharray="2 2" opacity="0.7"/>`;

// Final V front view — parameterized by plane hue+sat
export function finalV(hue, sat = 55) {
  return `<ellipse cx="160" cy="345" rx="100" ry="7" fill="#1e293b" opacity="0.13"/>
<polygon points="160,50 40,280 155,280" fill="url(#pWingL)"/>
<polygon points="160,50 165,280 280,280" fill="url(#pWingR)"/>
<line x1="160" y1="50" x2="160" y2="280" stroke="hsl(${hue}, ${Math.round(sat * 0.5)}%, 82%)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
<circle cx="160" cy="50" r="2.5" fill="#fff5f5" opacity="0.9"/>
<path d="M 55 275 Q 160 300 265 275" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="4 3" fill="none" stroke-linecap="round" opacity="0.7"/>
<text x="160" y="315" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500" letter-spacing="1">LÉGER V</text>
<text x="160" y="375" text-anchor="middle" font-size="15" font-weight="700" fill="#0f766e" letter-spacing="0.5">Prêt à voler !</text>`;
}

// ---------- LABELS ----------

export const label = (text) =>
  `<text x="160" y="390" text-anchor="middle" font-size="12" fill="#78716c">${text}</text>`;

export const capsLabel = (text, x = 160, y = 298) =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="9" fill="#a8a29e" letter-spacing="1">${text}</text>`;

// ---------- COMMON COMPOSITIONS ----------

// Step 1: A4 portrait
export const stepPaperPortrait = () => svg(`
${paperPortrait()}
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="#a8a29e" letter-spacing="1.5">FEUILLE A4</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#c7b79a" letter-spacing="0.5">Mode portrait</text>`);

export const stepPaperLandscape = () => svg(`
${paperLandscape()}
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="#a8a29e" letter-spacing="1.5">FEUILLE A4</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#c7b79a" letter-spacing="0.5">Mode paysage</text>`);

// Step 2: fold half V + unfold (crease visible)
export const stepFoldHalfUnfoldV = () => svg(`
${paperPortrait()}
<line x1="160" y1="30" x2="160" y2="370" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 100 195 Q 160 75 220 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${label("Plie en 2, puis déplie — ligne marquée")}`);

// Step 2 landscape variant
export const stepFoldHalfUnfoldH = () => svg(`
${paperLandscape()}
<line x1="30" y1="200" x2="290" y2="200" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 160 275 Q 100 200 160 125" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${label("Plie en 2 (dans la largeur), puis déplie")}`);

// Step 3: fold TL corner on rectangle w/ center crease
export const stepCornerTL = () => svg(`
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
${valleyFold(80, 30, 160, 110)}
${arrowArc(95, 50, 130, 40, 150, 95)}
${label("Coin haut-gauche → ligne centrale")}`);

// Step 4: fold TR corner (house shape)
export const stepCornerTR = () => svg(`
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
${existingCrease(80, 30, 160, 110)}
${foldedTri("240,30 160,30 160,110")}
${valleyFold(240, 30, 160, 110)}
${arrowArc(225, 50, 190, 40, 170, 95)}
<circle cx="160" cy="110" r="2.5" fill="#6366f1" opacity="0.7"/>
${label("Coin haut-droit → toit de maison ✓")}`);

// ---------- COMMON SIDE-VIEW COMPOSITIONS ----------

// Plane profile with wing-fold action (form top wing)
export const stepFormWing = () => svg(`
${planeProfile()}
${valleyFold(40, 215, 290, 215)}
<polygon points="40,215 100,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
${arrowArc(220, 150, 245, 200, 235, 275)}
${label("Rabats l'aile du dessus vers le bas")}`);

// Plane profile after flip + wing-fold action (other wing)
export const stepFormOtherWing = () => svg(`
${flipIndicator("RETOURNE L'AVION")}
<polygon points="40,235 100,155 290,155 290,315 40,315" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="315" x2="290" y2="315" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.85"/>
<line x1="60" y1="315" x2="285" y2="315" stroke="#c4a07c" stroke-width="2" opacity="0.6"/>
<line x1="40" y1="235" x2="100" y2="155" stroke="#c4a07c" stroke-width="1" stroke-dasharray="2 2" opacity="0.7"/>
${valleyFold(40, 235, 290, 235)}
<polygon points="40,235 100,155 290,235" fill="#dbeafe" opacity="0.35"/>
${arrowArc(220, 170, 245, 220, 235, 295)}
${label("Plie la deuxième aile pareil")}`);

// ---------- WRITER ----------

export function writePlane(planeId, steps) {
  const outDir = resolve(process.cwd(), "public/instructions", planeId);
  mkdirSync(outDir, { recursive: true });
  for (const [num, content] of Object.entries(steps)) {
    writeFileSync(resolve(outDir, `step-${num}.svg`), content);
  }
  console.log(`✓ Wrote ${Object.keys(steps).length} steps for ${planeId}`);
}
