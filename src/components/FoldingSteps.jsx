import { useState, useEffect, useCallback } from "react";
import { useT } from "../context/LanguageContext";
import ui from "../data/ui";

export default function FoldingSteps({ plane, steps, onBack, onComplete }) {
  const { t } = useT();
  const [currentStep, setCurrentStep] = useState(0);
  const [imageStatus, setImageStatus] = useState("loading");
  const total = steps.length;
  const step = steps[currentStep];
  const isLast = currentStep === total - 1;
  const basePath = `/instructions/${plane.id}/step-${step.step}`;

  const [imageUrl, setImageUrl] = useState(`${basePath}.jpg`);
  useEffect(() => {
    setImageStatus("loading");
    setImageUrl(`${basePath}.jpg`);
  }, [basePath]);

  const goNext = useCallback(() => {
    if (isLast) {
      onComplete();
    } else {
      setCurrentStep((s) => Math.min(s + 1, total - 1));
    }
  }, [isLast, onComplete, total]);

  const goPrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "Escape") {
        onBack();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onBack]);

  return (
    <div className="flex flex-col min-h-[520px]">
      <div className="px-8 pt-6 pb-5 border-b border-ink-muted/10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="text-sm text-ink-muted hover:text-ink cursor-pointer font-body"
          >
            {t(ui.stepsBack)}
          </button>
          <span className="label-caps">
            {t(ui.stepsOf, { n: currentStep + 1, total })}
          </span>
        </div>
        <div className="w-full bg-ink-muted/10 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 px-8 py-7 flex flex-col items-center justify-center text-center overflow-y-auto">
        {imageStatus !== "error" ? (
          <img
            src={imageUrl}
            alt={`${t(ui.stepsOf, { n: currentStep + 1, total })} — ${t(plane.name)}`}
            onError={() => {
              if (imageUrl.endsWith(".jpg")) {
                setImageUrl(`${basePath}.svg`);
              } else {
                setImageStatus("error");
              }
            }}
            onLoad={() => setImageStatus("loaded")}
            className={`w-64 max-w-full aspect-[4/5] rounded-xl mb-5 bg-white border border-ink-muted/10 object-cover ${
              imageStatus === "loading" ? "opacity-0" : ""
            }`}
          />
        ) : (
          <div className="w-64 aspect-[4/5] rounded-xl mb-5 bg-white border border-ink-muted/10 flex items-center justify-center">
            <span className="text-7xl">{step.icon}</span>
          </div>
        )}

        <p className="text-ink text-[15px] leading-relaxed max-w-md font-body">
          {t(step.text)}
        </p>

        {step.tip && (
          <div className="mt-5 bg-accent/5 border-l-4 border-accent/40 rounded-r-xl px-5 py-4 max-w-md text-left">
            <p className="text-ink-light text-sm leading-relaxed">
              <span className="font-hand text-accent text-base mr-1">{t(ui.stepsTipHeader)}</span>
              {t(step.tip)}
            </p>
          </div>
        )}
      </div>

      <div className="px-8 py-5 border-t border-ink-muted/10 flex gap-3">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className={`flex-1 py-3.5 rounded-xl font-display font-600 text-sm cursor-pointer transition-all ${
            currentStep === 0
              ? "bg-ink-muted/5 text-ink-muted/30 cursor-not-allowed"
              : "bg-ink-muted/10 text-ink hover:bg-ink-muted/15"
          }`}
        >
          {t(ui.stepsPrev)}
        </button>
        <button
          onClick={goNext}
          className={`flex-1 py-3.5 rounded-xl font-display font-600 text-sm cursor-pointer transition-all text-white ${
            isLast ? "bg-easy hover:brightness-110" : "bg-accent hover:bg-accent-light"
          }`}
        >
          {isLast ? t(ui.stepsDone) : t(ui.stepsNext)}
        </button>
      </div>
    </div>
  );
}
