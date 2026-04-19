#!/usr/bin/env node
// Generate folding instruction diagrams for all planes.
// Run from app/: node scripts/generate-folding-diagrams.js
//
// Approach: read src/data/instructions.js → for each step, infer a template
// type from the FR text → render the matching SVG template. Writes
// public/instructions/{planeId}/step-{N}.svg
//
// Templates are designed for viewBox 320x400 with paper centered at
// x=[80,240] (portrait) or x=[30,290] (landscape).

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import instructions from "../src/data/instructions.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = resolve(__dirname, "../public/instructions");

// ---------- SHARED DEFS ----------

const DEFS = `<defs>
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

const FONT = `font-family="system-ui, -apple-system, sans-serif"`;
const COLOR_LABEL = "#78716c";
const COLOR_CAPS = "#a8a29e";
const COLOR_VALLEY = "#3b82f6";
const COLOR_MOUNTAIN = "#dc2626";
const COLOR_CREASE = "#a8a29e";
const COLOR_ARROW = "#6366f1";
const COLOR_PAPER = "#fefaf4";
const COLOR_PAPER_STROKE = "#d6c9ae";
const COLOR_FOLD_STROKE = "#c4a07c";

// ---------- PRIMITIVES ----------

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" fill="none" ${FONT}>
${DEFS}
${body}
</svg>
`;
}

function paperPortrait() {
  return `<rect x="80" y="30" width="160" height="340" rx="3" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>`;
}

function paperLandscape() {
  return `<rect x="30" y="110" width="260" height="180" rx="3" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>`;
}

function cornerTicks() {
  return `<path d="M84 40 L84 34 L90 34" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 34 L236 34 L236 40" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.2" stroke-linecap="round"/>
<path d="M84 360 L84 366 L90 366" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 366 L236 366 L236 360" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.2" stroke-linecap="round"/>`;
}

function centerCreaseV(x = 160, y1 = 30, y2 = 370) {
  return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${COLOR_CREASE}" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>`;
}

function centerCreaseH(y = 200, x1 = 30, x2 = 290) {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${COLOR_CREASE}" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>`;
}

function valleyFold(x1, y1, x2, y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${COLOR_VALLEY}" stroke-width="1.7" stroke-dasharray="5 3" stroke-linecap="round"/>`;
}

function mountainFold(x1, y1, x2, y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${COLOR_MOUNTAIN}" stroke-width="1.8" stroke-dasharray="8 3 2 3" stroke-linecap="round"/>`;
}

function arrowArc(x1, y1, cx, cy, x2, y2, { faded = false, teal = false } = {}) {
  const opacity = faded ? 'opacity="0.55"' : "";
  const stroke = teal ? "#14b8a6" : COLOR_ARROW;
  const marker = teal ? "url(#arrT)" : "url(#arr)";
  return `<path d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" stroke="${stroke}" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="${marker}" ${opacity}/>`;
}

function label(text) {
  const safe = String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<text x="160" y="390" text-anchor="middle" font-size="12" fill="${COLOR_LABEL}" letter-spacing="0.3">${safe}</text>`;
}

function capsLabel(text, x = 160, y = 298) {
  return `<text x="${x}" y="${y}" text-anchor="middle" font-size="9" fill="${COLOR_CAPS}" letter-spacing="1">${text}</text>`;
}

function foldedTri(points) {
  return `<polygon points="${points}" fill="url(#foldTri)" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>`;
}

function dot(x, y, r = 2.5) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${COLOR_ARROW}" opacity="0.7"/>`;
}

// ---------- TEMPLATES ----------
// Each template returns SVG <body> (no <svg> wrapper, no <defs>).

const T = {
  "paper-portrait": () => `
${paperPortrait()}
${cornerTicks()}
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="${COLOR_CAPS}" letter-spacing="1.5">FEUILLE A4</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#c7b79a" letter-spacing="0.5">Mode portrait</text>`,

  "paper-landscape": () => `
${paperLandscape()}
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="${COLOR_CAPS}" letter-spacing="1.5">FEUILLE A4</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#c7b79a" letter-spacing="0.5">Mode paysage</text>`,

  "fold-half-v": () => `
${paperPortrait()}
${valleyFold(160, 30, 160, 370)}
${arrowArc(100, 195, 160, 75, 220, 195)}
${label("Plie en 2 dans la longueur")}`,

  "fold-half-v-unfold": () => `
${paperPortrait()}
${centerCreaseV()}
${label("Déplie — la ligne centrale est marquée")}`,

  "fold-half-h": () => `
${paperLandscape()}
${valleyFold(30, 200, 290, 200)}
${arrowArc(160, 275, 100, 200, 160, 125)}
${label("Plie en 2 dans la largeur")}`,

  "cross-crease": () => `
${paperPortrait()}
${centerCreaseV()}
${centerCreaseH()}
${label("Les deux lignes centrales sont marquées")}`,

  "corner-tl": () => `
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
${valleyFold(80, 30, 160, 110)}
${arrowArc(95, 50, 130, 35, 150, 95)}
${label("Coin haut-gauche → ligne centrale")}`,

  "corner-tr": () => `
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
<line x1="80" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
${foldedTri("240,30 160,30 160,110")}
${valleyFold(240, 30, 160, 110)}
${arrowArc(225, 50, 190, 35, 170, 95)}
<circle cx="160" cy="110" r="2.5" fill="${COLOR_ARROW}" opacity="0.7"/>
${label("Coin haut-droit → ligne centrale")}`,

  "corner-bl-landscape": () => `
${paperLandscape()}
${centerCreaseH()}
${foldedTri("30,110 30,200 110,200")}
${valleyFold(30, 110, 110, 200)}
${arrowArc(50, 130, 40, 170, 100, 195)}
${label("Coin haut-gauche → ligne centrale")}`,

  "point-down": () => `
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
<line x1="80" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
${foldedTri("240,30 160,30 160,110")}
<line x1="240" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
${valleyFold(80, 160, 240, 160)}
${arrowArc(160, 85, 180, 130, 160, 175)}
${label("Rabats la pointe vers le bas")}`,

  "corner-again-l": () => `
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
${foldedTri("240,30 160,30 160,110")}
<line x1="80" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
<line x1="240" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
${valleyFold(100, 130, 160, 200)}
${arrowArc(120, 135, 140, 130, 158, 180)}
${label("Bord incliné gauche → centre")}`,

  "corner-again-r": () => `
${paperPortrait()}
${centerCreaseV()}
${foldedTri("80,30 160,30 160,110")}
${foldedTri("240,30 160,30 160,110")}
<line x1="80" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
<line x1="240" y1="30" x2="160" y2="110" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
<!-- left already folded (shown darker) -->
<polygon points="80,30 160,110 160,200 100,130" fill="#fed7aa" stroke="${COLOR_FOLD_STROKE}" stroke-width="1" opacity="0.75"/>
${valleyFold(220, 130, 160, 200)}
${arrowArc(200, 135, 180, 130, 162, 180)}
${label("Bord incliné droit → centre")}`,

  "lock-up": () => `
${paperPortrait()}
${centerCreaseV()}
<!-- House shape with nose folds already done, small triangle protrudes bottom -->
<polygon points="80,30 160,110 240,30 240,260 80,260" fill="#fff7ed" stroke="${COLOR_FOLD_STROKE}" stroke-width="1.2"/>
<polygon points="145,260 160,300 175,260" fill="#fed7aa" stroke="${COLOR_FOLD_STROKE}" stroke-width="1"/>
${valleyFold(145, 260, 175, 260)}
${arrowArc(160, 295, 160, 275, 160, 245)}
<text x="160" y="230" text-anchor="middle" font-size="11" fill="${COLOR_MOUNTAIN}" font-weight="500">VERROU 🔒</text>
${label("Replie la pointe vers le haut")}`,

  flip: () => `
${paperPortrait()}
${centerCreaseV()}
<g>
  <path d="M 90 55 Q 160 25 230 55" stroke="#14b8a6" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrT)"/>
  <text x="160" y="80" text-anchor="middle" font-size="11" font-weight="500" fill="#0f766e" letter-spacing="0.8">RETOURNE</text>
</g>
<text x="160" y="200" text-anchor="middle" font-size="14" fill="${COLOR_CAPS}" letter-spacing="1">↺</text>
${label("Retourne la feuille")}`,

  "fold-half-final": () => `
<!-- House-shape paper before final half-fold -->
<polygon points="160,40 240,120 240,360 80,360 80,120" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>
${centerCreaseV()}
<!-- Mountain fold = fold-back with triangles inside -->
<line x1="160" y1="40" x2="160" y2="360" stroke="${COLOR_MOUNTAIN}" stroke-width="2" stroke-dasharray="8 3 2 3" stroke-linecap="round"/>
<path d="M 220 240 Q 250 200 220 160" stroke="${COLOR_ARROW}" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${label("Plie en 2 — triangles à l'intérieur")}`,

  "form-wing": () => `
<!-- Side profile of folded plane, nose left, spine bottom -->
<polygon points="40,200 100,120 290,120 290,280 40,280" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="280" x2="290" y2="280" stroke="${COLOR_CREASE}" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.8"/>
${capsLabel("PLIURE DU VENTRE")}
<line x1="40" y1="200" x2="100" y2="120" stroke="${COLOR_FOLD_STROKE}" stroke-width="1" stroke-dasharray="2 2" stroke-linecap="round" opacity="0.7"/>
${valleyFold(40, 200, 290, 200)}
<polygon points="40,200 100,120 290,120 290,200" fill="#dbeafe" opacity="0.4"/>
${arrowArc(220, 135, 245, 180, 235, 260)}
${label("Rabats l'aile du dessus vers le bas")}`,

  "form-wing-other": () => `
<g>
  <path d="M 90 55 Q 160 25 230 55" stroke="#14b8a6" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrT)"/>
  <text x="160" y="80" text-anchor="middle" font-size="11" font-weight="500" fill="#0f766e" letter-spacing="0.8">RETOURNE L'AVION</text>
</g>
<polygon points="40,225 100,145 290,145 290,305 40,305" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="305" x2="290" y2="305" stroke="${COLOR_CREASE}" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.8"/>
<line x1="60" y1="305" x2="285" y2="305" stroke="${COLOR_FOLD_STROKE}" stroke-width="2" opacity="0.6"/>
<line x1="40" y1="225" x2="100" y2="145" stroke="${COLOR_FOLD_STROKE}" stroke-width="1" stroke-dasharray="2 2" stroke-linecap="round" opacity="0.7"/>
${valleyFold(40, 225, 290, 225)}
<polygon points="40,225 100,145 290,145 290,225" fill="#dbeafe" opacity="0.4"/>
${arrowArc(220, 160, 245, 200, 235, 285)}
${label("Plie la deuxième aile pareil")}`,

  "final-v": () => `
<defs>
  <linearGradient id="wL" x1="0.5" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#fca5a5"/>
    <stop offset="0.55" stop-color="#ef4444"/>
    <stop offset="1" stop-color="#b91c1c"/>
  </linearGradient>
  <linearGradient id="wR" x1="0.5" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#ef4444"/>
    <stop offset="0.5" stop-color="#c53030"/>
    <stop offset="1" stop-color="#7f1d1d"/>
  </linearGradient>
</defs>
<ellipse cx="160" cy="345" rx="100" ry="7" fill="#1e293b" opacity="0.13"/>
<polygon points="160,50 40,280 155,280" fill="url(#wL)"/>
<polygon points="160,50 165,280 280,280" fill="url(#wR)"/>
<line x1="160" y1="50" x2="160" y2="280" stroke="#fecaca" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
<circle cx="160" cy="50" r="2.5" fill="#fff5f5" opacity="0.9"/>
<path d="M 55 275 Q 160 300 265 275" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="4 3" fill="none" stroke-linecap="round" opacity="0.7"/>
<text x="160" y="315" text-anchor="middle" font-size="10" fill="#0f766e" font-weight="500" letter-spacing="1">LÉGER V</text>
<text x="160" y="375" text-anchor="middle" font-size="15" font-weight="700" fill="#0f766e" letter-spacing="0.5">Prêt à voler !</text>`,

  cut: () => `
${paperPortrait()}
${centerCreaseV()}
<line x1="120" y1="310" x2="140" y2="340" stroke="${COLOR_MOUNTAIN}" stroke-width="2" stroke-dasharray="3 2" stroke-linecap="round"/>
<line x1="180" y1="310" x2="200" y2="340" stroke="${COLOR_MOUNTAIN}" stroke-width="2" stroke-dasharray="3 2" stroke-linecap="round"/>
<text x="100" y="290" font-size="22">✂️</text>
${label("Fais des petites entailles aux ciseaux")}`,

  "fold-flap": () => `
<polygon points="40,200 100,120 290,120 290,280 40,280" fill="${COLOR_PAPER}" stroke="${COLOR_PAPER_STROKE}" stroke-width="1.5" filter="url(#ps)"/>
<line x1="40" y1="280" x2="290" y2="280" stroke="${COLOR_CREASE}" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.8"/>
${valleyFold(60, 135, 60, 115)}
${valleyFold(270, 135, 270, 115)}
${arrowArc(60, 135, 55, 115, 60, 108, { teal: true })}
${arrowArc(270, 135, 275, 115, 270, 108, { teal: true })}
${label("Plie de petits winglets vers le haut")}`,

  "press-folds": () => `
${paperPortrait()}
${centerCreaseV()}
<text x="160" y="150" text-anchor="middle" font-size="60">✋</text>
<text x="160" y="230" text-anchor="middle" font-size="13" fill="${COLOR_LABEL}">Appuie fort sur tous les plis</text>`,

  generic: (step) => {
    const t = step?.text?.fr || "";
    // Fit a simple paper + icon + first words
    return `
${paperPortrait()}
${centerCreaseV()}
<text x="160" y="180" text-anchor="middle" font-size="48">${step?.icon || "📄"}</text>
<text x="160" y="230" text-anchor="middle" font-size="11" fill="${COLOR_LABEL}">${t.length > 52 ? t.slice(0, 52) + "…" : t}</text>`;
  },
};

// ---------- TYPE INFERENCE ----------
// Match step text (FR) + icon to pick a template.

function inferType(step) {
  const t = (step.text?.fr || "").toLowerCase();
  const icon = step.icon || "";

  // Paper setup
  if (t.includes("a4") && t.includes("paysage")) return "paper-landscape";
  if (t.includes("a4") && (t.includes("portrait") || !t.includes("paysage"))) return "paper-portrait";

  // Cross crease (rare: both orthogonal creases already done)
  if (t.includes("croix de plis")) return "cross-crease";

  // Half folds
  if (t.includes("en deux") && t.includes("largeur")) return "fold-half-h";
  if (t.includes("en deux") && (t.includes("longueur") || t.includes("centrale"))) {
    return "fold-half-v";
  }

  // Corner folds (first pass, rectangle paper)
  if (t.includes("coin") && t.includes("supérieur gauche")) return "corner-tl";
  if (t.includes("coin") && t.includes("supérieur droit")) return "corner-tr";
  if (t.includes("coin") && t.includes("inférieur gauche")) return "corner-bl-landscape";
  if (t.includes("coin") && t.includes("inférieur droit")) return "corner-bl-landscape";

  // Second pass corner folds (narrower, on already-folded shape)
  if (t.includes("bord incliné gauche") || (t.includes("bord") && t.includes("gauche") && t.includes("incliné"))) {
    return "corner-again-l";
  }
  if (t.includes("bord incliné droit") || (t.includes("bord") && t.includes("droit") && t.includes("incliné"))) {
    return "corner-again-r";
  }
  if (t.includes("bord incliné du haut") || t.includes("bord incliné du bas")) {
    return "corner-again-l";
  }

  // Point-down fold
  if ((t.includes("pointe") || t.includes("point")) && (t.includes("vers le bas") || t.includes("vers la droite"))) {
    return "point-down";
  }

  // Lock
  if (t.includes("verrouille") || t.includes("verrou") || icon === "🔒") return "lock-up";

  // Flip
  if (t.includes("retourne") && !t.includes("aile")) return "flip";

  // Fold in half (final, plane profile)
  if (t.includes("plie l'avion en deux") || t.includes("replie l'avion en deux") || (t.includes("plie") && t.includes("en deux") && t.includes("avion"))) {
    return "fold-half-final";
  }

  // Wings
  if ((t.includes("forme les ailes") || t.includes("rabats l'aile") || t.includes("aile du dessus"))) {
    return "form-wing";
  }
  if (t.includes("deuxième aile") || (t.includes("autre aile") && t.includes("retourne"))) {
    return "form-wing-other";
  }

  // Final V / ready to fly
  if (t.includes("prêt") || t.includes("déplie les ailes")) return "final-v";

  // Cut
  if (icon === "✂️" || t.includes("ciseaux") || t.includes("découpe") || t.includes("entaille")) return "cut";

  // Flaps/winglets
  if (t.includes("winglet") || (t.includes("volet") && t.includes("aile"))) return "fold-flap";

  // Press folds
  if (icon === "✋" || t.includes("appuie")) return "press-folds";

  return "generic";
}

// ---------- MAIN ----------

let total = 0;
for (const [planeId, steps] of Object.entries(instructions)) {
  const dir = resolve(OUT_ROOT, planeId);
  mkdirSync(dir, { recursive: true });
  for (const step of steps) {
    const type = inferType(step);
    const renderer = T[type] || T.generic;
    const body = renderer(step);
    const content = svg(body);
    const filepath = resolve(dir, `step-${step.step}.svg`);
    writeFileSync(filepath, content);
    total++;
  }
}

console.log(`✓ Generated ${total} folding diagrams across ${Object.keys(instructions).length} planes`);
