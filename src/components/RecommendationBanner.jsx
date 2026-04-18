import { useState } from "react";
import airplanes from "../data/airplanes";

const difficultyOrder = ["easy", "medium", "hard", "veryhard"];
const difficultyLabels = {
  easy: "faciles",
  medium: "moyens",
  hard: "difficiles",
  veryhard: "très difficiles",
};

export default function RecommendationBanner({ completedPlanes }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const entries = Object.entries(completedPlanes || {});
  if (entries.length < 3) return null;

  const recent = entries.slice(-5);
  let easierCount = 0;
  let harderCount = 0;

  recent.forEach(([planeId, { rating }]) => {
    const plane = airplanes.find((p) => p.id === planeId);
    if (!plane) return;
    const planeDiffIdx = difficultyOrder.indexOf(plane.difficulty);
    const userRatingIdx = difficultyOrder.indexOf(
      rating === "easy" ? "easy" : rating === "medium" ? "medium" : "hard"
    );
    if (userRatingIdx < planeDiffIdx) easierCount++;
    if (userRatingIdx > planeDiffIdx) harderCount++;
  });

  let message = null;
  if (easierCount >= 2) {
    const currentMax = recent.reduce((max, [planeId]) => {
      const plane = airplanes.find((p) => p.id === planeId);
      if (!plane) return max;
      const idx = difficultyOrder.indexOf(plane.difficulty);
      return idx > max ? idx : max;
    }, 0);
    const nextDiff = difficultyOrder[Math.min(currentMax + 1, 3)];
    message = `Tu as l'air à l'aise ! Essaie un avion ${difficultyLabels[nextDiff]} pour te challenger.`;
  } else if (harderCount >= 2) {
    message =
      "Continue comme ça ! Plus tu t'entraînes, plus les plis deviennent faciles.";
  }

  if (!message) {
    message = `Tu as déjà construit ${entries.length} avions — continue l'aventure !`;
  }

  return (
    <div className="mb-6 bg-accent/5 border-l-4 border-accent/40 rounded-r-xl px-6 py-4 flex items-center justify-between">
      <p className="text-sm text-ink-light font-body">{message}</p>
      <button
        onClick={() => setDismissed(true)}
        className="text-ink-muted hover:text-ink cursor-pointer ml-4 text-sm shrink-0"
      >
        ✕
      </button>
    </div>
  );
}
