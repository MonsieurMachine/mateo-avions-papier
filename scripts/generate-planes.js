#!/usr/bin/env node
// Generate SVG illustrations for all 27 airplanes.
// Run: node scripts/generate-planes.js (from app/)

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/planes");
mkdirSync(OUT_DIR, { recursive: true });

// 5-stop palettes: [lightest, mid-light, mid, dark, darkest]
const P = {
  red:         ["#fca5a5", "#ef4444", "#b91c1c", "#7f1d1d", "#450a0a"],
  tan:         ["#fde68a", "#d97706", "#92400e", "#451a03", "#1c0701"],
  blue:        ["#bfdbfe", "#3b82f6", "#1d4ed8", "#1e3a8a", "#172554"],
  purple:      ["#ddd6fe", "#a855f7", "#7e22ce", "#581c87", "#3b0764"],
  olive:       ["#d9f99d", "#65a30d", "#4d7c0f", "#3f6212", "#1a2e05"],
  teal:        ["#99f6e4", "#14b8a6", "#0f766e", "#115e59", "#042f2e"],
  bronze:      ["#fcd34d", "#b45309", "#78350f", "#451a03", "#1a0a00"],
  slate:       ["#cbd5e1", "#64748b", "#475569", "#334155", "#0f172a"],
  yellow:      ["#fef08a", "#eab308", "#a16207", "#713f12", "#422006"],
  goldenbrown: ["#fcd34d", "#92400e", "#78350f", "#451a03", "#1c0a00"],
  magenta:     ["#fbcfe8", "#db2777", "#9f1239", "#500724", "#2a0411"],
  steel:       ["#e5e7eb", "#9ca3af", "#6b7280", "#374151", "#111827"],
  cream:       ["#fef3c7", "#fde68a", "#fbbf24", "#d97706", "#78350f"],
  silver:      ["#f1f5f9", "#cbd5e1", "#94a3b8", "#64748b", "#334155"],
  duckyellow:  ["#fef08a", "#facc15", "#eab308", "#a16207", "#78350f"],
  royalblue:   ["#bfdbfe", "#2563eb", "#1d4ed8", "#1e3a8a", "#1e1b4b"],
  orange:      ["#fed7aa", "#f97316", "#c2410c", "#7c2d12", "#431407"],
  coral:       ["#fecaca", "#fb7185", "#e11d48", "#9f1239", "#4c0519"],
  mint:        ["#bbf7d0", "#34d399", "#059669", "#047857", "#064e3b"],
  midnight:    ["#c7d2fe", "#4338ca", "#3730a3", "#1e1b4b", "#0a0824"],
  chrome:      ["#f8fafc", "#e2e8f0", "#cbd5e1", "#94a3b8", "#475569"],
  brown:       ["#fde68a", "#a16207", "#713f12", "#451a03", "#1c0701"],
  slateblue:   ["#bae6fd", "#0284c7", "#075985", "#0c4a6e", "#082f49"],
  lavender:    ["#e9d5ff", "#c084fc", "#a855f7", "#6b21a8", "#3b0764"],
  black:       ["#9ca3af", "#4b5563", "#1f2937", "#111827", "#030712"],
  emerald:     ["#a7f3d0", "#10b981", "#047857", "#064e3b", "#022c22"],
  darkbrown:   ["#d6d3d1", "#78716c", "#57534e", "#3f3f46", "#18181b"],
};

// Shape geometry — each returns the 6 key points for a plane silhouette
// flying up-right. nose / tailLeft / tailRidge / tailRight define the 2 visible
// wing triangles. noseCreaseStart/Mid/End = visible fold lines near the nose.
const SHAPES = {
  dart: {
    nose: [340, 70], tailLeft: [49, 193], tailRidge: [90, 250], tailRight: [131, 307],
    crease: [[220, 114], [240, 145], [260, 180]],
  },
  glider: {
    nose: [320, 95], tailLeft: [28, 175], tailRidge: [105, 260], tailRight: [190, 335],
    crease: [[228, 130], [215, 165], [195, 205]],
  },
  stunt: {
    nose: [325, 115], tailLeft: [70, 190], tailRidge: [125, 235], tailRight: [185, 290],
    crease: [[235, 145], [220, 170], [200, 195]],
  },
  heavy: {
    nose: [335, 85], tailLeft: [55, 200], tailRidge: [100, 250], tailRight: [145, 305],
    crease: [[230, 125], [250, 150], [265, 185]],
  },
  delta: {
    nose: [360, 60], tailLeft: [40, 215], tailRidge: [100, 260], tailRight: [165, 305],
    crease: [[245, 110], [265, 140], [280, 175]],
  },
};

// Accents are optional extra geometry drawn after the main body.
function accentDorsalFin([c1, c2, c3, c4, c5]) {
  return `<polygon points="165,235 175,215 185,245" fill="${c4}" opacity="0.7"/>`;
}
function accentFlatNose(shape, [c1, c2, c3, c4, c5]) {
  const [nx, ny] = shape.nose;
  return `<polygon points="${nx},${ny} ${nx-22},${ny+14} ${nx-6},${ny+18}" fill="${c5}" opacity="0.55"/>`;
}
function accentScales(shape, [c1, c2, c3, c4, c5]) {
  const [nx, ny] = shape.nose;
  const [rx, ry] = shape.tailRidge;
  // short zigzag lines along the ridge
  let out = "";
  for (let i = 0; i < 5; i++) {
    const t = 0.25 + i * 0.13;
    const mx = nx + (rx - nx) * t;
    const my = ny + (ry - ny) * t;
    out += `<line x1="${mx}" y1="${my}" x2="${mx - 10}" y2="${my + 8}" stroke="${c1}" stroke-width="1.2" opacity="0.55" stroke-linecap="round"/>`;
  }
  return out;
}
function accentCanardWings(shape, [c1, c2, c3, c4, c5]) {
  const [nx, ny] = shape.nose;
  return `<polygon points="${nx - 60},${ny + 15} ${nx - 90},${ny + 5} ${nx - 70},${ny + 30}" fill="${c3}" opacity="0.85"/>
          <polygon points="${nx - 60},${ny + 15} ${nx - 80},${ny + 40} ${nx - 55},${ny + 35}" fill="${c4}" opacity="0.8"/>`;
}
function accentStarPoints([c1, c2, c3, c4, c5]) {
  // 2 extra small star-like points
  return `<polygon points="280,155 295,145 285,170" fill="${c2}" opacity="0.65"/>
          <polygon points="80,250 65,265 95,270" fill="${c3}" opacity="0.55"/>`;
}
function accentBoomerangCurve(shape, [c1, c2, c3, c4, c5]) {
  const [nx, ny] = shape.nose;
  const [rx, ry] = shape.tailRidge;
  return `<path d="M ${nx},${ny} Q ${(nx+rx)/2 + 30},${(ny+ry)/2 - 30} ${rx},${ry}" stroke="${c1}" stroke-width="1.5" fill="none" opacity="0.6" stroke-linecap="round"/>`;
}

function renderPlane({ id, shape: shapeName, palette: paletteName, accent }) {
  const shape = SHAPES[shapeName];
  const colors = P[paletteName];
  const [c1, c2, c3, c4, c5] = colors;
  const [nx, ny] = shape.nose;
  const [lx, ly] = shape.tailLeft;
  const [rx, ry] = shape.tailRidge;
  const [brx, bry] = shape.tailRight;
  const [cs1, cs2, cs3] = shape.crease;

  const extras = {
    dorsal: () => accentDorsalFin(colors),
    flatNose: () => accentFlatNose(shape, colors),
    scales: () => accentScales(shape, colors),
    canard: () => accentCanardWings(shape, colors),
    star: () => accentStarPoints(colors),
    boomerang: () => accentBoomerangCurve(shape, colors),
  };
  const accentSvg = accent ? (extras[accent] ? extras[accent]() : "") : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" fill="none">
  <defs>
    <linearGradient id="${id}-lw" x1="0.5" y1="0" x2="0.2" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.55" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <linearGradient id="${id}-rw" x1="0.5" y1="0" x2="0.8" y2="1">
      <stop offset="0" stop-color="${c2}"/>
      <stop offset="0.5" stop-color="${c3}"/>
      <stop offset="1" stop-color="${c4}"/>
    </linearGradient>
    <filter id="${id}-sh" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="3" dy="5"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.35"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <ellipse cx="200" cy="295" rx="115" ry="9" fill="#1e293b" opacity="0.14"/>

  <g filter="url(#${id}-sh)">
    <polygon points="${nx},${ny} ${lx},${ly} ${rx},${ry}" fill="url(#${id}-lw)"/>
    <polygon points="${nx},${ny} ${rx},${ry} ${brx},${bry}" fill="url(#${id}-rw)"/>

    <line x1="${nx}" y1="${ny}" x2="${rx}" y2="${ry}" stroke="${c1}" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
    <line x1="${nx + 3}" y1="${ny + 2}" x2="${rx + 3}" y2="${ry + 2}" stroke="${c4}" stroke-width="0.8" stroke-linecap="round" opacity="0.55"/>

    <line x1="${cs1[0]}" y1="${cs1[1]}" x2="${cs2[0]}" y2="${cs2[1]}" stroke="${c4}" stroke-width="1" stroke-linecap="round" opacity="0.55"/>
    <line x1="${cs2[0]}" y1="${cs2[1]}" x2="${cs3[0]}" y2="${cs3[1]}" stroke="${c5}" stroke-width="1" stroke-linecap="round" opacity="0.5"/>

    <line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="${c4}" stroke-width="1.2" stroke-linecap="round" opacity="0.45"/>
    <line x1="${rx}" y1="${ry}" x2="${brx}" y2="${bry}" stroke="${c5}" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>

    <circle cx="${nx}" cy="${ny}" r="2.2" fill="#ffffff" opacity="0.9"/>

    ${accentSvg}
  </g>
</svg>
`;
}

// 27 airplanes (shape + palette + optional accent for personality)
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
