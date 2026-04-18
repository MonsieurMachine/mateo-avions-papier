import { useT } from "../context/LanguageContext";
import ui from "../data/ui";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useT();
  return (
    <header className="border-b border-ink-muted/10 bg-paper/70 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="currentColor">
              <path d="M21 3L3 10.5l7 2.5 2.5 7L21 3z"/>
            </svg>
          </div>
          <div>
            <p className="label-caps leading-none mb-1">{t(ui.headerEyebrow)}</p>
            <h1 className="font-display font-800 text-2xl lg:text-3xl text-ink leading-none tracking-tight">
              {t(ui.headerTitle)}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="hidden lg:block font-hand text-xl text-ink-muted">
            {t(ui.headerTagline)}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
