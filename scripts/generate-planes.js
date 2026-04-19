#!/usr/bin/env node
// Generate SVG illustrations for all 27 airplanes.
// Run: node scripts/generate-planes.js (from app/)
//
// Visual style (v2, inspired by paperairplanes.co.uk):
// - 3 overlapping paper layers per plane (back wing, fuselage strip, front wing)
// - Subtle shading between layers creates the "folded paper thickness" effect
// - Each plane has a base color but layers are rendered as tinted greys
//   with a soft color wash — reads as "paper plane" first, color second.

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/planes");
mkdirSync(OUT_DIR, { recursive: true });

// For each plane we define a BASE HUE (hsl hue) and a "strength" (saturation).
// Layers are rendered as paper-tinted greys of varying lightness, sharing the
// base hue. This mimics the monochrome-with-wash look of real paper plane renders.
const HUES = {
  red:         { h: 0,   s: 70 },  // La Flèche
  tan:         { h: 32,  s: 55 },  // Bulldog
  blue:        { h: 220, s: 65 },  // Stable
  purple:      { h: 270, s: 60 },  // Tail-spin
  olive:       { h: 80,  s: 55 },  // Harrier
  teal:        { h: 175, s: 55 },  // Sea-glider
  bronze:      { h: 28,  s: 70 },  // Nakamura
  slate:       { h: 215, s: 20 },  // Stealth-glider
  yellow:      { h: 48,  s: 75 },  // Sprinter
  goldenbrown: { h: 36,  s: 60 },  // Eagle-eye
  magenta:     { h: 330, s: 65 },  // Stunt-plane
  steel:       { h: 215, s: 12 },  // Hammer
  cream:       { h: 40,  s: 55 },  // Bird
  silver:      { h: 220, s: 10 },  // Sonic-jet
  duckyellow:  { h: 46,  s: 80 },  // Canard
  royalblue:   { h: 225, s: 70 },  // Suzanne
  orange:      { h: 22,  s: 85 },  // Boomerang
  coral:       { h: 10,  s: 80 },  // Flechette
  mint:        { h: 155, s: 55 },  // Simple-glider
  midnight:    { h: 240, s: 45 },  // Ninja-star
  chrome:      { h: 210, s: 8  },  // Concorde
  brown:       { h: 22,  s: 55 },  // Falcon
  slateblue:   { h: 205, s: 60 },  // Shark
  lavender:    { h: 280, s: 55 },  // Butterfly
  black:       { h: 220, s: 10 },  // Stealth-fighter
  emerald:     { h: 160, s: 70 },  // Dragon
  darkbrown:   { h: 28,  s: 25 },  // Condor
};

// Convert a hue+saturation palette into paper-like layer colors.
// Returns { back, backMid, fuselage, frontMid, front, ridge, shadow }
function papertones(hue) {
  const { h, s } = hue;
  // Layers read as colored paper: back is darker, front is lighter.
  const back     = `hsl(${h}, ${Math.round(s * 0.9)}%, 38%)`;
  const backMid  = `hsl(${h}, ${Math.round(s * 0.8)}%, 48%)`;
  const fuselage = `hsl(${h}, ${Math.round(s * 0.95)}%, 30%)`;
  const frontMid = `hsl(${h}, ${Math.round(s * 0.6)}%, 68%)`;
  const front    = `hsl(${h}, ${Math.round(s * 0.4)}%, 82%)`;
  const ridge    = `hsl(${h}, ${Math.round(s * 0.3)}%, 92%)`;
  const shadowCol = `hsl(${h}, 25%, 18%)`;
  return { back, backMid, fuselage, frontMid, front, ridge, shadowCol };
}

// Shape geometry — 3-layer dart render (paperairplanes.co.uk style).
// Key idea: the plane silhouette is defined by 3 outer vertices (nose,
// backTail, frontTail). Internal layers are drawn as inset polygons so the
// silhouette stays a clean triangle.
//  - back wing   : nose → backTail → fuselageInner   (upper portion, darkest)
//  - fuselage    : nose → fuselageInner → frontInner (thin dark strip)
//  - front wing  : nose → frontInner → frontTail     (lower portion, lightest)
const SHAPES = {
  // Classic dart — long, pointed
  dart: {
    nose:          [340, 85],
    backTail:      [50, 165],
    frontTail:     [90, 275],
    fuselageInner: [95, 210],
    frontInner:    [105, 230],
  },
  // Glider — wider wings
  glider: {
    nose:          [320, 100],
    backTail:      [35, 150],
    frontTail:     [80, 290],
    fuselageInner: [85, 210],
    frontInner:    [100, 235],
  },
  // Stunt — compact
  stunt: {
    nose:          [320, 115],
    backTail:      [80, 175],
    frontTail:     [120, 275],
    fuselageInner: [115, 215],
    frontInner:    [125, 235],
  },
  // Heavy nose
  heavy: {
    nose:          [335, 90],
    backTail:      [55, 180],
    frontTail:     [95, 290],
    fuselageInner: [100, 225],
    frontInner:    [110, 245],
  },
  // Delta — wider rear
  delta: {
    nose:          [355, 70],
    backTail:      [45, 190],
    frontTail:     [100, 300],
    fuselageInner: [95, 240],
    frontInner:    [110, 260],
  },
};

function renderPlane({ id, shape: shapeName, palette: paletteName, accent }) {
  const shape = SHAPES[shapeName];
  const tones = papertones(HUES[paletteName]);
  const { back, backMid, fuselage, frontMid, front, ridge, shadowCol } = tones;

  const [nx, ny] = shape.nose;
  const [btx, bty] = shape.backTail;
  const [frbx, frbby] = shape.frontTail;
  const [fix, fiy] = shape.fuselageInner;
  const [frix, friy] = shape.frontInner;

  // Accents — small extras that express personality
  let accents = "";
  if (accent === "dorsal") {
    // Shark dorsal fin — a triangle sticking up from the front wing
    const mx = Math.round((nx + frbx) / 2) - 30;
    const my = Math.round((ny + frbby) / 2) + 10;
    accents += `<polygon points="${mx},${my} ${mx - 12},${my - 30} ${mx + 10},${my - 8}" fill="${fuselage}" opacity="0.85"/>`;
  }
  if (accent === "flatNose") {
    // Blunt nose — small darker wedge at the nose tip
    accents += `<polygon points="${nx},${ny} ${nx - 18},${ny + 8} ${nx - 10},${ny + 20}" fill="${back}" opacity="0.75"/>`;
  }
  if (accent === "scales") {
    // Small zigzag lines on the front wing suggesting scales/texture
    let zigzag = "";
    for (let i = 0; i < 4; i++) {
      const t = 0.35 + i * 0.14;
      const x = nx + (frbx - nx) * t;
      const y = ny + (frbby - ny) * t;
      zigzag += `<line x1="${x}" y1="${y}" x2="${x - 12}" y2="${y + 6}" stroke="${ridge}" stroke-width="1.2" opacity="0.55" stroke-linecap="round"/>`;
    }
    accents += zigzag;
  }
  if (accent === "canard") {
    // Small front-wings for the canard plane
    accents += `<polygon points="${nx - 55},${ny + 15} ${nx - 90},${ny + 5} ${nx - 70},${ny + 30}" fill="${backMid}" opacity="0.9"/>`;
    accents += `<polygon points="${nx - 55},${ny + 15} ${nx - 80},${ny + 40} ${nx - 50},${ny + 35}" fill="${frontMid}" opacity="0.85"/>`;
  }
  if (accent === "star") {
    // Extra star-like triangular points
    accents += `<polygon points="275,165 295,150 290,180" fill="${frontMid}" opacity="0.7"/>`;
    accents += `<polygon points="140,280 125,300 155,295" fill="${backMid}" opacity="0.65"/>`;
  }
  if (accent === "boomerang") {
    // Curved ridge line suggesting spin trajectory
    const mx = Math.round((nx + fix) / 2);
    const my = Math.round((ny + fiy) / 2);
    accents += `<path d="M ${nx},${ny} Q ${mx + 30},${my - 35} ${fix},${fiy}" stroke="${ridge}" stroke-width="1.5" fill="none" opacity="0.65" stroke-linecap="round"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" fill="none">
  <defs>
    <linearGradient id="${id}-back" x1="0.3" y1="0.2" x2="0.1" y2="0.9">
      <stop offset="0" stop-color="${backMid}"/>
      <stop offset="1" stop-color="${back}"/>
    </linearGradient>
    <linearGradient id="${id}-fuselage" x1="0.4" y1="0" x2="0.1" y2="1">
      <stop offset="0" stop-color="${back}"/>
      <stop offset="1" stop-color="${fuselage}"/>
    </linearGradient>
    <linearGradient id="${id}-front" x1="0.6" y1="0" x2="0.3" y2="1">
      <stop offset="0" stop-color="${ridge}"/>
      <stop offset="0.45" stop-color="${front}"/>
      <stop offset="1" stop-color="${frontMid}"/>
    </linearGradient>
    <filter id="${id}-sh" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3.5"/>
      <feOffset dx="2" dy="5"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <ellipse cx="200" cy="300" rx="115" ry="8" fill="${shadowCol}" opacity="0.18"/>

  <g filter="url(#${id}-sh)">
    <!-- Back wing: nose → backTail → fuselageInner (upper portion, darker) -->
    <polygon points="${nx},${ny} ${btx},${bty} ${fix},${fiy}" fill="url(#${id}-back)"/>

    <!-- Fuselage strip: nose → fuselageInner → frontInner (thin dark edge) -->
    <polygon points="${nx},${ny} ${fix},${fiy} ${frix},${friy}" fill="url(#${id}-fuselage)"/>

    <!-- Front wing: nose → frontInner → frontTail (lower portion, lightest) -->
    <polygon points="${nx},${ny} ${frix},${friy} ${frbx},${frbby}" fill="url(#${id}-front)"/>

    <!-- Leading edge highlight (nose to backTail) — catches light -->
    <line x1="${nx}" y1="${ny}" x2="${btx}" y2="${bty}" stroke="${ridge}" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>

    <!-- Ridge line between back wing and fuselage (paper fold cue) -->
    <line x1="${nx}" y1="${ny}" x2="${fix}" y2="${fiy}" stroke="${fuselage}" stroke-width="1" stroke-linecap="round" opacity="0.75"/>

    <!-- Ridge line between fuselage and front wing -->
    <line x1="${nx}" y1="${ny}" x2="${frix}" y2="${friy}" stroke="${back}" stroke-width="0.8" stroke-linecap="round" opacity="0.6"/>

    <!-- Trailing edge of front wing (tail) -->
    <line x1="${frix}" y1="${friy}" x2="${frbx}" y2="${frbby}" stroke="${fuselage}" stroke-width="1.2" stroke-linecap="round" opacity="0.45"/>

    <!-- Nose tip highlight -->
    <circle cx="${nx}" cy="${ny}" r="2.5" fill="${ridge}" opacity="0.9"/>

    ${accents}
  </g>
</svg>
`;
}

// 27 airplanes — shape + palette + optional accent for personality
const PLANES = [
  { id: "dart",            shape: "dart",   palette: "red" },
  { id: "bulldog",         shape: "heavy",  palette: "tan",         accent: "flatNose" },
  { id: "stable",          shape: "glider", palette: "blue" },
  { id: "tail-spin",       shape: "stunt",  palette: "purple",      accent: "scales" },
  { id: "harrier",         shape: "dart",   palette: "olive" },
  { id: "sea-glider",      shape: "glider", palette: "teal" },
  { id: "nakamura-lock",   shape: "heavy",  palette: "bronze",      accent: "flatNose" },
  { id: "stealth-glider",  shape: "delta",  palette: "slate" },
  { id: "sprinter",        shape: "dart",   palette: "yellow" },
  { id: "eagle-eye",       shape: "glider", palette: "goldenbrown" },
  { id: "stunt-plane",     shape: "stunt",  palette: "magenta",     accent: "scales" },
  { id: "hammer",          shape: "heavy",  palette: "steel",       accent: "flatNose" },
  { id: "bird",            shape: "glider", palette: "cream" },
  { id: "sonic-jet",       shape: "delta",  palette: "silver" },
  { id: "canard",          shape: "dart",   palette: "duckyellow",  accent: "canard" },
  { id: "suzanne",         shape: "dart",   palette: "royalblue" },
  { id: "boomerang",       shape: "stunt",  palette: "orange",      accent: "boomerang" },
  { id: "flechette",       shape: "dart",   palette: "coral" },
  { id: "simple-glider",   shape: "glider", palette: "mint" },
  { id: "ninja-star",      shape: "stunt",  palette: "midnight",    accent: "star" },
  { id: "concorde",        shape: "delta",  palette: "chrome" },
  { id: "falcon",          shape: "dart",   palette: "brown" },
  { id: "shark",           shape: "dart",   palette: "slateblue",   accent: "dorsal" },
  { id: "butterfly",       shape: "glider", palette: "lavender" },
  { id: "stealth-fighter", shape: "delta",  palette: "black" },
  { id: "dragon",          shape: "stunt",  palette: "emerald",     accent: "scales" },
  { id: "condor",          shape: "glider", palette: "darkbrown" },
];

let written = 0;
for (const plane of PLANES) {
  const svg = renderPlane(plane);
  const filepath = resolve(OUT_DIR, `${plane.id}.svg`);
  writeFileSync(filepath, svg);
  written++;
}

console.log(`✓ Generated ${written} airplane SVGs in ${OUT_DIR}`);
