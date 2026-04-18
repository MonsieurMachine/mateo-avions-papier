import { useState, useEffect } from "react";
import { ratingLabels } from "../data/airplanes";
import instructions from "../data/instructions";
import FoldingSteps from "./FoldingSteps";
import PlaneIllustration from "./PlaneIllustration";

const difficultyConfig = {
  easy:     { color: "#10b981", label: "Facile" },
  medium:   { color: "#f59e0b", label: "Moyen" },
  hard:     { color: "#ef4444", label: "Difficile" },
  veryhard: { color: "#a855f7", label: "Très difficile" },
};

export default function AirplaneDetail({ plane, onClose, onComplete }) {
  const [showInstructions, setShowInstructions] = useState(false);
  const diff = difficultyConfig[plane.difficulty];
  const planeInstructions = instructions[plane.id];

  useEffect(() => {
    setShowInstructions(false);
  }, [plane.id]);

  if (showInstructions && planeInstructions) {
    return (
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-paper rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-ink-muted/10"
          onClick={(e) => e.stopPropagation()}
        >
          <FoldingSteps
            plane={plane}
            steps={planeInstructions}
            onBack={() => setShowInstructions(false)}
            onComplete={() => {
              if (onComplete) onComplete(plane);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-ink-muted/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero illustration */}
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-ink-muted hover:bg-white hover:text-ink transition-colors cursor-pointer text-base z-10 shadow-sm"
            aria-label="Fermer"
          >
            ✕
          </button>
          <PlaneIllustration plane={plane} size="lg" />
        </div>

        {/* Title block */}
        <div className="px-8 pb-5">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-white text-[11px] font-display font-600 px-2.5 py-1 rounded-md uppercase tracking-wider"
              style={{ backgroundColor: diff.color }}
            >
              {diff.label}
            </span>
            <span className="label-caps">{plane.folds} plis</span>
            {plane.hasIllustrations && (
              <span className="label-caps text-easy">Illustré</span>
            )}
          </div>
          <h2 className="font-display font-700 text-3xl text-ink leading-tight">
            {plane.name}
          </h2>
        </div>

        <div className="px-8 pb-8">
          <p className="text-ink-light text-base leading-relaxed mb-6">
            {plane.description}
          </p>

          {/* Fun fact */}
          <div className="bg-accent/5 border-l-4 border-accent/40 rounded-r-xl px-5 py-4 mb-6">
            <p className="font-hand text-lg text-accent mb-1">Le savais-tu ?</p>
            <p className="text-ink-light text-sm leading-relaxed">{plane.funFact}</p>
          </div>

          {/* Ratings */}
          <h3 className="label-caps mb-3">Caractéristiques</h3>
          <div className="space-y-2.5 mb-7">
            {Object.entries(plane.ratings).map(([key, value]) => (
              <div key={key} className="flex items-center gap-3">
                <span className="text-sm w-24 text-ink-muted shrink-0">
                  {ratingLabels[key].label}
                </span>
                <div className="flex-1 rating-track h-2">
                  <div
                    className={`rating-fill rating-fill-${key}`}
                    style={{ width: `${(value / 5) * 100}%` }}
                  />
                </div>
                <span className="font-display font-700 text-sm text-ink w-8 text-right tabular-nums">
                  {value}/5
                </span>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="bg-ink-muted/5 rounded-xl px-5 py-4 mb-6">
            <p className="font-hand text-lg text-ink mb-1">Conseil de pro</p>
            <p className="text-ink-light text-sm leading-relaxed">
              {plane.ratings.speed >= 4
                ? "Lance-le fort et droit devant toi pour qu'il aille le plus vite possible !"
                : plane.ratings.gliding >= 4
                ? "Lance-le doucement et en hauteur pour qu'il plane le plus longtemps possible !"
                : plane.ratings.acrobatics >= 4
                ? "Plie les volets des ailes pour lui faire faire des figures incroyables !"
                : plane.ratings.distance >= 4
                ? "Lance-le fort vers le haut à 45° pour qu'il aille le plus loin possible !"
                : "Essaie de le lancer à différentes vitesses pour voir ce qu'il fait de mieux !"}
            </p>
          </div>

          {planeInstructions && (
            <button
              onClick={() => setShowInstructions(true)}
              className="w-full py-4 bg-accent text-white rounded-xl font-display font-600 text-lg hover:bg-accent-light transition-colors cursor-pointer"
            >
              {plane.hasIllustrations
                ? "Commencer le pliage (illustré)"
                : "Commencer le pliage"}
            </button>
          )}

          {plane.sourceUrl && (
            <a
              href={plane.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center text-sm text-ink-muted hover:text-accent transition-colors underline underline-offset-2 decoration-ink-muted/30"
            >
              Voir le tutoriel original →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
