const STORAGE_KEY = "avionsPapier_userPrefs";

export function getPreferences() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completedPlanes: {} };
  } catch {
    return { completedPlanes: {} };
  }
}

export function saveCompletion(planeId, rating) {
  const prefs = getPreferences();
  prefs.completedPlanes[planeId] = {
    rating,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function getCompletedPlanes() {
  return getPreferences().completedPlanes;
}
