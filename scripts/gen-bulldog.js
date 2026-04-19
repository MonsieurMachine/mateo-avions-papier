#!/usr/bin/env node
// Custom hand-crafted folding diagrams for Le Bouledogue (10 steps).
// Each step tracks paper state correctly.
// Run from app/: node scripts/gen-bulldog.js

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/instructions/bulldog");
mkdirSync(OUT, { recursive: true });

// Shared defs block (embedded in every file)
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
  <linearGradient id="bWingL" x1="0.5" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="hsl(32, 50%, 58%)"/>
    <stop offset="0.55" stop-color="hsl(32, 55%, 43%)"/>
    <stop offset="1" stop-color="hsl(32, 60%, 28%)"/>
  </linearGradient>
  <linearGradient id="bWingR" x1="0.5" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="hsl(32, 55%, 43%)"/>
    <stop offset="0.5" stop-color="hsl(32, 60%, 32%)"/>
    <stop offset="1" stop-color="hsl(32, 65%, 20%)"/>
  </linearGradient>
</defs>`;

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" fill="none" font-family="system-ui,-apple-system,sans-serif">
${DEFS}
${body}
</svg>
`;
}

const LABEL = (text) => `<text x="160" y="390" text-anchor="middle" font-size="12" fill="#78716c">${text}</text>`;

// --- STEP 1: A4 portrait ---
const step1 = svg(`
<rect x="80" y="30" width="160" height="340" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<path d="M84 40 L84 34 L90 34" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 34 L236 34 L236 40" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M84 360 L84 366 L90 366" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<path d="M230 366 L236 366 L236 360" stroke="#d6c9ae" stroke-width="1.2" stroke-linecap="round"/>
<text x="160" y="195" text-anchor="middle" font-size="15" font-weight="500" fill="#a8a29e" letter-spacing="1.5">FEUILLE A4</text>
<text x="160" y="218" text-anchor="middle" font-size="12" fill="#c7b79a" letter-spacing="0.5">Mode portrait</text>`);

// --- STEP 2: fold in half, then unfold (crease visible) ---
const step2 = svg(`
<rect x="80" y="30" width="160" height="340" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="160" y1="30" x2="160" y2="370" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="4 3" stroke-linecap="round" opacity="0.85"/>
<path d="M 100 195 Q 160 75 220 195" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${LABEL("Plie en 2, puis déplie — ligne centrale marquée")}`);

// --- STEP 3: fold TL corner to center ---
const step3 = svg(`
<rect x="80" y="30" width="160" height="340" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="160" y1="30" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<polygon points="80,30 160,30 160,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
<line x1="80" y1="30" x2="160" y2="110" stroke="#3b82f6" stroke-width="1.6" stroke-dasharray="5 3" stroke-linecap="round"/>
<path d="M 95 50 Q 130 40 150 95" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${LABEL("Coin haut-gauche → ligne centrale")}`);

// --- STEP 4: fold TR corner to center (now a "house" shape) ---
const step4 = svg(`
<rect x="80" y="30" width="160" height="340" rx="3" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="160" y1="30" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<!-- TL already folded -->
<polygon points="80,30 160,30 160,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
<line x1="80" y1="30" x2="160" y2="110" stroke="#c4a07c" stroke-width="1"/>
<!-- TR being folded now -->
<polygon points="240,30 160,30 160,110" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
<line x1="240" y1="30" x2="160" y2="110" stroke="#3b82f6" stroke-width="1.6" stroke-dasharray="5 3" stroke-linecap="round"/>
<path d="M 225 50 Q 190 40 170 95" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<circle cx="160" cy="110" r="2.5" fill="#6366f1" opacity="0.7"/>
${LABEL("Coin haut-droit → toit de maison ✓")}`);

// --- STEP 5: fold point down (~5-6cm from top) ---
// House silhouette: (160,30) (240,110) (240,370) (80,370) (80,110)
const step5 = svg(`
<!-- House-shape paper outline (peak at top) -->
<polygon points="160,30 240,110 240,370 80,370 80,110" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="160" y1="30" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<!-- Previous nose fold traces (faded) -->
<line x1="80" y1="110" x2="160" y2="30" stroke="#c4a07c" stroke-width="1" opacity="0.6"/>
<line x1="240" y1="110" x2="160" y2="30" stroke="#c4a07c" stroke-width="1" opacity="0.6"/>
<!-- Horizontal valley fold line at y=90 (~6cm from top) -->
<line x1="112" y1="90" x2="208" y2="90" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="5 3" stroke-linecap="round"/>
<!-- Arrow showing peak going down -->
<path d="M 160 40 Q 180 110 160 175" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<!-- Ghost of folded-down triangle (shows where the point lands) -->
<polygon points="112,90 208,90 160,180" fill="#fed7aa" stroke="#c4a07c" stroke-width="1" stroke-dasharray="3 2" opacity="0.5"/>
${LABEL("Rabats la pointe vers le bas (~5-6 cm du haut)")}`);

// --- STEP 6: fold NEW TL corner to center (on flat-top state) ---
// Paper is now flat-top (pointer folded under), with the folded point's tip visible at (160, 180)
const step6 = svg(`
<!-- Flat-top paper outline -->
<polygon points="80,90 240,90 240,370 80,370" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<!-- Folded-down point visible underneath (subtle) -->
<polygon points="112,90 208,90 160,180" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.6"/>
<line x1="160" y1="90" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<!-- NEW TL fold (the new corner at (80,90) folds to center) -->
<polygon points="80,90 160,90 160,170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
<line x1="80" y1="90" x2="160" y2="170" stroke="#3b82f6" stroke-width="1.6" stroke-dasharray="5 3" stroke-linecap="round"/>
<path d="M 95 110 Q 130 105 150 155" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
${LABEL("Nouveau coin haut-gauche → centre")}`);

// --- STEP 7: fold new TR corner (small tip protrudes below) ---
const step7 = svg(`
<polygon points="80,90 240,90 240,370 80,370" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<polygon points="112,90 208,90 160,180" fill="#fef3c7" stroke="#d6c9ae" stroke-width="1" opacity="0.45"/>
<line x1="160" y1="90" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<!-- TL already folded -->
<polygon points="80,90 160,90 160,170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1"/>
<line x1="80" y1="90" x2="160" y2="170" stroke="#c4a07c" stroke-width="1"/>
<!-- TR folding now -->
<polygon points="240,90 160,90 160,170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1.2"/>
<line x1="240" y1="90" x2="160" y2="170" stroke="#3b82f6" stroke-width="1.6" stroke-dasharray="5 3" stroke-linecap="round"/>
<path d="M 225 110 Q 190 105 170 155" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<!-- Small protruding triangle at bottom of meeting point (the folded point's tip) -->
<polygon points="148,170 172,170 160,188" fill="#fef3c7" stroke="#c4a07c" stroke-width="1"/>
<circle cx="160" cy="188" r="3.5" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2 2"/>
<text x="210" y="195" font-size="10" fill="#dc2626" font-weight="500">verrou ↓</text>
${LABEL("Coin haut-droit → un petit triangle dépasse")}`);

// --- STEP 8: lock — flip up the protruding triangle ---
const step8 = svg(`
<polygon points="80,90 240,90 240,370 80,370" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<line x1="160" y1="90" x2="160" y2="370" stroke="#a8a29e" stroke-width="1" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.7"/>
<!-- Both TL and TR folded, muted -->
<polygon points="80,90 160,90 160,170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.9"/>
<polygon points="240,90 160,90 160,170" fill="url(#foldTri)" stroke="#c4a07c" stroke-width="1" opacity="0.9"/>
<line x1="80" y1="90" x2="160" y2="170" stroke="#c4a07c" stroke-width="1"/>
<line x1="240" y1="90" x2="160" y2="170" stroke="#c4a07c" stroke-width="1"/>
<!-- Protruding triangle (to be locked) -->
<polygon points="148,170 172,170 160,195" fill="#fef3c7" stroke="#c4a07c" stroke-width="1.2"/>
<!-- Mountain fold line at base of triangle (will fold up) -->
<line x1="148" y1="170" x2="172" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 3 2 3" stroke-linecap="round"/>
<!-- Upward arrow -->
<path d="M 160 195 Q 180 180 160 145" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
<text x="160" y="230" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">🔒 VERROU</text>
${LABEL("Replie le triangle vers le haut — verrouillé !")}`);

// --- STEP 9: flip + fold in half (now shown as plane profile) ---
const step9 = svg(`
<!-- Flip indicator at top -->
<path d="M 80 55 Q 160 25 240 55" stroke="#14b8a6" stroke-width="2.2" stroke-linecap="round" fill="none" marker-end="url(#arrT)"/>
<text x="160" y="80" text-anchor="middle" font-size="11" font-weight="500" fill="#0f766e" letter-spacing="1">1. RETOURNE</text>

<!-- Plane profile after half-fold. Nose left, spine bottom -->
<polygon points="40,215 105,135 290,135 290,295 40,295" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.5" filter="url(#ps)"/>
<!-- Center spine (now bottom edge — this is the fold from center line) -->
<line x1="40" y1="295" x2="290" y2="295" stroke="#a8a29e" stroke-width="1.3" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.85"/>
<text x="165" y="312" text-anchor="middle" font-size="9" fill="#a8a29e" letter-spacing="1">PLIURE CENTRALE</text>
<!-- Nose diagonal (trace) -->
<line x1="40" y1="215" x2="105" y2="135" stroke="#c4a07c" stroke-width="1" stroke-dasharray="2 2" opacity="0.7"/>
<!-- Fold-in-half indicator (mountain) -->
<line x1="60" y1="295" x2="290" y2="295" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 3 2 3" stroke-linecap="round" opacity="0.6"/>

<text x="160" y="360" text-anchor="middle" font-size="11" fill="#0f766e" font-weight="500">2. PLIE EN 2 LE LONG DU CENTRE</text>
${LABEL("Retourne + plie en 2")}`);

// --- STEP 10: form wings + final V (bulldog in tan) ---
const step10 = svg(`
<!-- Top half: plane profile with wing fold action -->
<g transform="translate(0, -40) scale(0.78)">
  <polygon points="40,215 105,135 290,135 290,295 40,295" fill="#fefaf4" stroke="#d6c9ae" stroke-width="1.3" filter="url(#ps)"/>
  <line x1="40" y1="295" x2="290" y2="295" stroke="#a8a29e" stroke-width="1.2" stroke-dasharray="3 3" stroke-linecap="round" opacity="0.8"/>
  <line x1="40" y1="215" x2="105" y2="135" stroke="#c4a07c" stroke-width="1" stroke-dasharray="2 2" opacity="0.7"/>
  <!-- Wing fold line (valley) -->
  <line x1="40" y1="215" x2="290" y2="215" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="5 3" stroke-linecap="round"/>
  <polygon points="40,215 105,135 290,135 290,215" fill="#dbeafe" opacity="0.35"/>
  <!-- Arrow folding wing down -->
  <path d="M 220 150 Q 245 200 235 275" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#arr)"/>
</g>
<text x="160" y="238" text-anchor="middle" font-size="11" fill="#5b5040" font-weight="500">Plie chaque aile vers le bas</text>

<!-- Bottom half: final front view V -->
<g transform="translate(70, 245) scale(0.55)">
  <ellipse cx="160" cy="275" rx="100" ry="6" fill="#1e293b" opacity="0.13"/>
  <polygon points="160,10 40,250 155,250" fill="url(#bWingL)"/>
  <polygon points="160,10 165,250 280,250" fill="url(#bWingR)"/>
  <line x1="160" y1="10" x2="160" y2="250" stroke="hsl(32,40%,80%)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
  <circle cx="160" cy="10" r="3" fill="#fff5f5" opacity="0.9"/>
</g>
<text x="160" y="390" text-anchor="middle" font-size="13" fill="#0f766e" font-weight="700">Prêt à voler !</text>`);

// ---- Write all ----
const all = { 1: step1, 2: step2, 3: step3, 4: step4, 5: step5, 6: step6, 7: step7, 8: step8, 9: step9, 10: step10 };
for (const [step, content] of Object.entries(all)) {
  writeFileSync(resolve(OUT, `step-${step}.svg`), content);
}
console.log(`✓ Wrote ${Object.keys(all).length} Bouledogue folding diagrams`);
