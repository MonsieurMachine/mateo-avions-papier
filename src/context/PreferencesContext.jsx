import { createContext, useContext, useState } from "react";
import {
  getPreferences,
  saveCompletion as savePref,
} from "../utils/preferences";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [prefs, setPrefs] = useState(() => getPreferences());

  const saveCompletion = (planeId, rating) => {
    savePref(planeId, rating);
    setPrefs(getPreferences());
  };

  return (
    <PreferencesContext.Provider value={{ prefs, saveCompletion }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  return useContext(PreferencesContext);
}
