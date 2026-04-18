export default function CompletionFeedback({ plane, onFeedback, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-3xl max-w-sm w-full shadow-2xl border border-ink-muted/10 p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-6xl block mb-5">{plane.emoji}</span>
        <h2 className="font-display font-700 text-2xl text-ink mb-2">
          Bravo !
        </h2>
        <p className="text-ink-muted text-base mb-8">
          Tu as construit <strong className="text-ink">{plane.name}</strong> !
          <br />
          <span className="font-hand text-lg">Comment c'était ?</span>
        </p>

        <div className="space-y-3">
          <button
            onClick={() => onFeedback("easy")}
            className="w-full py-3.5 rounded-xl font-display font-600 text-white cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#48bb78" }}
          >
            C'était facile 😊
          </button>
          <button
            onClick={() => onFeedback("medium")}
            className="w-full py-3.5 rounded-xl font-display font-600 text-white cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#ecc94b" }}
          >
            C'était moyen 🤔
          </button>
          <button
            onClick={() => onFeedback("hard")}
            className="w-full py-3.5 rounded-xl font-display font-600 text-white cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#f56565" }}
          >
            C'était difficile 💪
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-5 text-sm text-ink-muted hover:text-ink cursor-pointer underline underline-offset-2 decoration-ink-muted/30"
        >
          Passer
        </button>
      </div>
    </div>
  );
}
