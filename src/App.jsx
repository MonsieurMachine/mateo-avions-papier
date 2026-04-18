import { useState } from "react";
import airplanes from "./data/airplanes";
import Header from "./components/Header";
import Filters from "./components/Filters";
import AirplaneCard from "./components/AirplaneCard";
import AirplaneDetail from "./components/AirplaneDetail";
import CompletionFeedback from "./components/CompletionFeedback";
import RecommendationBanner from "./components/RecommendationBanner";
import { usePreferences } from "./context/PreferencesContext";
import { useT } from "./context/LanguageContext";
import ui from "./data/ui";
import "./App.css";

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [onlyIllustrated, setOnlyIllustrated] = useState(false);
  const [completingPlane, setCompletingPlane] = useState(null);
  const { prefs, saveCompletion } = usePreferences();
  const { t } = useT();

  const filteredPlanes = airplanes.filter((plane) => {
    if (selectedDifficulty && plane.difficulty !== selectedDifficulty) return false;
    if (selectedCategory && plane.category !== selectedCategory) return false;
    if (onlyIllustrated && !plane.hasIllustrations) return false;
    return true;
  });

  const sortedPlanes = [...filteredPlanes].sort((a, b) => {
    if (!sortBy) return 0;
    return b.ratings[sortBy] - a.ratings[sortBy];
  });

  const resetFilters = () => {
    setSelectedDifficulty(null);
    setSelectedCategory(null);
    setSortBy(null);
    setOnlyIllustrated(false);
  };

  const handleComplete = (plane) => {
    setSelectedPlane(null);
    setCompletingPlane(plane);
  };

  const handleFeedback = (rating) => {
    saveCompletion(completingPlane.id, rating);
    setCompletingPlane(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 lg:px-16 py-8 lg:py-12 flex-1">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="md:w-72 lg:w-80 shrink-0">
            <div className="md:sticky md:top-6">
              <Filters
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onlyIllustrated={onlyIllustrated}
                setOnlyIllustrated={setOnlyIllustrated}
                resetFilters={resetFilters}
                resultCount={sortedPlanes.length}
              />
            </div>
          </div>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <RecommendationBanner completedPlanes={prefs.completedPlanes} />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
              {sortedPlanes.map((plane, i) => (
                <div
                  key={plane.id}
                  className="animate-in"
                  style={{ animationDelay: `${0.08 + i * 0.03}s` }}
                >
                  <AirplaneCard
                    plane={plane}
                    onClick={() => setSelectedPlane(plane)}
                    completed={prefs.completedPlanes[plane.id]}
                  />
                </div>
              ))}
            </div>

            {sortedPlanes.length === 0 && (
              <div className="text-center py-20 bg-white/50 rounded-2xl border border-ink-muted/10">
                <p className="font-display font-700 text-2xl text-ink">
                  {t(ui.emptyTitle)}
                </p>
                <p className="text-ink-muted mt-3">
                  {t(ui.emptySubtitle)}
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 px-6 py-3 bg-accent text-white rounded-lg font-display font-600 hover:bg-accent-light transition-colors cursor-pointer"
                >
                  {t(ui.emptyReset)}
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="border-t border-ink-muted/10 py-8 text-center mt-10">
        <p className="font-hand text-xl text-ink-muted">
          {t(ui.footerMade)}
        </p>
      </footer>

      {selectedPlane && (
        <AirplaneDetail
          plane={selectedPlane}
          onClose={() => setSelectedPlane(null)}
          onComplete={handleComplete}
        />
      )}

      {completingPlane && (
        <CompletionFeedback
          plane={completingPlane}
          onFeedback={handleFeedback}
          onClose={() => setCompletingPlane(null)}
        />
      )}
    </div>
  );
}

export default App;
