import { createContext, useContext, useEffect, useState } from "react";

export const SUPPORTED_LANGS = ["fr", "es", "en"];
const DEFAULT_LANG = "fr";
const STORAGE_KEY = "mateo-avion-lang";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch {}
    return DEFAULT_LANG;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const setLang = (next) => {
    if (SUPPORTED_LANGS.includes(next)) setLangState(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLang();
  // t(obj, vars?) accepts { fr, es, en }, picks current lang (fallback FR),
  // then interpolates {placeholders} from optional vars object.
  const t = (obj, vars) => {
    if (obj == null) return obj;
    const str = typeof obj === "string" ? obj : (obj[lang] ?? obj.fr ?? "");
    if (!vars || typeof str !== "string") return str;
    return str.replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));
  };
  return { t, lang };
}
