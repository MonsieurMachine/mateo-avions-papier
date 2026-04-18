import { useState, useEffect } from "react";
import { ratingLabels, difficulties } from "../data/airplanes";
import instructions from "../data/instructions";
import ui from "../data/ui";
import { useT } from "../context/LanguageContext";
import FoldingSteps from "./FoldingSteps";
import PlaneIllustration from "./PlaneIllustration";

function getTipKey(plane) {
  if (plane.ratings.speed >= 4) return "tipSpeed";
  if (plane.ratings.gliding >= 4) return "tipGliding";
  if (plane.ratings.acrobatics >= 4) return "tipAcrobatics";
  if (plane.ratings.distance >= 4) return "tipDistance";
  return "tipDefault";
}

export default function AirplaneDetail({ plane, onClose, onComplete }) {
  const { t } = useT();
  const [showInstructions, setShowInstructions] = useState(false);
  const diff = difficulties.find((d) => d.id === plane.difficulty);
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
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-ink-muted hover:bg-white hover:text-ink transition-colors cursor-pointer text-base z-10 shadow-sm"
            aria-label={t(ui.detailClose)}
          >
            ✕
          </button>
          <PlaneIllustration plane={plane} size="lg" />
        </div>

        <div className="px-8 pb-5">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className="text-white text-[11px] font-display font-600 px-2.5 py-1 rounded-md uppercase tracking-wider"
              style={{ backgroundColor: diff.color }}
            >
              {t(ui[diff.uiKey])}
            </span>
            <span className="label-caps">{t(ui.foldsCount, { n: plane.folds })}</span>
            {plane.hasIllustrations && (
              <span className="label-caps text-easy">{t(ui.badgeIllustrated)}</span>
            )}
          </div>
          <h2 className="font-display font-700 text-3xl text-ink leading-tight">
            {t(plane.name)}
          </h2>
        </div>

        <div className="px-8 pb-8">
          <p className="text-ink-light text-base leading-relaxed mb-6">
            {t(plane.description)}
          </p>

          <div className="bg-accent/5 border-l-4 border-accent/40 rounded-r-xl px-5 py-4 mb-6">
            <p className="font-hand text-lg text-accent mb-1">{t(ui.detailDidYouKnow)}</p>
            <p className="text-ink-light text-sm leading-relaxed">{t(plane.funFact)}</p>
          </div>

          <h3 className="label-caps mb-3">{t(ui.detailCharacteristics)}</h3>
          <div className="space-y-2.5 mb-7">
            {Object.entries(plane.ratings).map(([key, value]) => (
              <div key={key} className="flex items-center gap-3">
                <span className="text-sm w-24 text-ink-muted shrink-0">
                  {t(ui[ratingLabels[key].uiKey])}
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

          <div className="bg-ink-muted/5 rounded-xl px-5 py-4 mb-6">
            <p className="font-hand text-lg text-ink mb-1">{t(ui.detailProTip)}</p>
            <p className="text-ink-light text-sm leading-relaxed">
              {t(ui[getTipKey(plane)])}
            </p>
          </div>

          {planeInstructions && (
            <button
              onClick={() => setShowInstructions(true)}
              className="w-full py-4 bg-accent text-white rounded-xl font-display font-600 text-lg hover:bg-accent-light transition-colors cursor-pointer"
            >
              {plane.hasIllustrations
                ? t(ui.detailStartFoldingIllustrated)
                : t(ui.detailStartFolding)}
            </button>
          )}

          {plane.sourceUrl && (
            <a
              href={plane.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center text-sm text-ink-muted hover:text-accent transition-colors underline underline-offset-2 decoration-ink-muted/30"
            >
              {t(ui.detailSourceLink)}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
