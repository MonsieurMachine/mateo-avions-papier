import { ratingLabels } from "../data/airplanes";
import PlaneIllustration from "./PlaneIllustration";

const difficultyConfig = {
  easy:     { color: "#10b981", label: "Facile" },
  medium:   { color: "#f59e0b", label: "Moyen" },
  hard:     { color: "#ef4444", label: "Difficile" },
  veryhard: { color: "#a855f7", label: "Très dur" },
};

export default function AirplaneCard({ plane, onClick, completed }) {
  const diff = difficultyConfig[plane.difficulty];

  return (
    <div
      onClick={onClick}
      className="airplane-card bg-white rounded-2xl cursor-pointer border border-ink-muted/10 overflow-hidden relative"
    >
      {/* Illustration */}
      <div className="px-5 pt-5">
        <PlaneIllustration plane={plane} size="md" />
      </div>

      <div className="px-6 pt-5 pb-6">
        {/* Top row: difficulty + folds */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-white text-[10.5px] font-display font-600 px-2.5 py-1 rounded-md uppercase tracking-wider"
            style={{ backgroundColor: diff.color }}
          >
            {diff.label}
          </span>
          <div className="flex items-center gap-2">
            {completed && (
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: diff.color }}
                title="Déjà construit"
              >
                ✓
              </span>
            )}
            <span className="label-caps">{plane.folds} plis</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-display font-700 text-xl text-ink leading-tight mb-2">
          {plane.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-ink-light leading-relaxed line-clamp-2 mb-5 min-h-[2.5rem]">
          {plane.description}
        </p>

        {/* All 5 ratings with colored bars */}
        <div className="space-y-2">
          {Object.entries(plane.ratings).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3">
              <span className="text-xs w-20 text-ink-muted shrink-0 font-body">
                {ratingLabels[key].label}
              </span>
              <div className="flex-1 rating-track h-1.5">
                <div
                  className={`rating-fill rating-fill-${key}`}
                  style={{ width: `${(value / 5) * 100}%` }}
                />
              </div>
              <span className="font-display font-700 text-xs text-ink w-3 text-right tabular-nums">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
