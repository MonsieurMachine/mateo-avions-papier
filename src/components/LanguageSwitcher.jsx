import { useLang, SUPPORTED_LANGS } from "../context/LanguageContext";

const labels = { fr: "FR", es: "ES", en: "EN" };

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-0.5 p-1 rounded-xl bg-ink-muted/10 border border-ink-muted/15">
      {SUPPORTED_LANGS.map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-2.5 py-1.5 rounded-lg font-display font-600 text-xs tracking-wider cursor-pointer transition-all ${
              active
                ? "bg-white text-ink shadow-sm"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-label={`Language: ${labels[l]}`}
            aria-pressed={active}
          >
            {labels[l]}
          </button>
        );
      })}
    </div>
  );
}
