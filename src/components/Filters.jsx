import { difficulties, categories, ratingLabels } from "../data/airplanes";
import ui from "../data/ui";
import { useT } from "../context/LanguageContext";

function FilterGroup({ title, children }) {
  return (
    <div className="py-5 first:pt-0 last:pb-0 border-b border-ink-muted/10 last:border-b-0">
      <h3 className="label-caps mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, activeStyle, children, dimColor }) {
  return (
    <button
      onClick={onClick}
      className={`chip px-3.5 py-2 rounded-lg font-body font-500 text-sm cursor-pointer border ${
        active
          ? "chip-active text-white"
          : "bg-white text-ink border-ink-muted/15 hover:border-ink-muted/30"
      }`}
      style={active ? activeStyle : dimColor ? { borderColor: dimColor + "40" } : undefined}
    >
      {children}
    </button>
  );
}

const ratingColors = {
  distance: "#10b981",
  speed: "#f59e0b",
  acrobatics: "#a855f7",
  turning: "#3b82f6",
  gliding: "#14b8a6",
};

export default function Filters({
  selectedDifficulty,
  setSelectedDifficulty,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  onlyIllustrated,
  setOnlyIllustrated,
  resetFilters,
  resultCount,
}) {
  const { t } = useT();
  const hasFilters = selectedDifficulty || selectedCategory || sortBy || onlyIllustrated;
  const countKey = resultCount === 1 ? ui.planeCountOne : ui.planeCountMany;

  return (
    <aside className="bg-white rounded-2xl border border-ink-muted/15 shadow-sm p-6 lg:p-7">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-display font-700 text-lg text-ink">{t(ui.filtersTitle)}</h2>
        <span className="font-display font-600 text-sm text-ink-muted">
          {t(countKey, { n: resultCount })}
        </span>
      </div>

      <FilterGroup title={t(ui.filterDifficulty)}>
        {difficulties.map((diff) => {
          const active = selectedDifficulty === diff.id;
          return (
            <Chip
              key={diff.id}
              active={active}
              activeStyle={{ backgroundColor: diff.color, borderColor: diff.color }}
              dimColor={diff.color}
              onClick={() => setSelectedDifficulty(active ? null : diff.id)}
            >
              <span className="mr-1">{diff.emoji}</span>
              {t(ui[diff.uiKey])}
            </Chip>
          );
        })}
      </FilterGroup>

      <FilterGroup title={t(ui.filterSpecialty)}>
        {categories.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <Chip
              key={cat.id}
              active={active}
              activeStyle={{ backgroundColor: "#1f1b15", borderColor: "#1f1b15" }}
              onClick={() => setSelectedCategory(active ? null : cat.id)}
            >
              <span className="mr-1">{cat.emoji}</span>
              {t(ui[cat.uiKey])}
            </Chip>
          );
        })}
      </FilterGroup>

      <FilterGroup title={t(ui.filterSortBy)}>
        {Object.entries(ratingLabels).map(([key, meta]) => {
          const active = sortBy === key;
          const color = ratingColors[key];
          return (
            <Chip
              key={key}
              active={active}
              activeStyle={{ backgroundColor: color, borderColor: color }}
              dimColor={color}
              onClick={() => setSortBy(active ? null : key)}
            >
              <span className="mr-1">{meta.emoji}</span>
              {t(ui[meta.uiKey])}
            </Chip>
          );
        })}
      </FilterGroup>

      <FilterGroup title={t(ui.filterOptions)}>
        <Chip
          active={onlyIllustrated}
          activeStyle={{ backgroundColor: "#10b981", borderColor: "#10b981" }}
          dimColor="#10b981"
          onClick={() => setOnlyIllustrated(!onlyIllustrated)}
        >
          <span className="mr-1">🖼️</span>
          {t(ui.filterIllustrated)}
        </Chip>
      </FilterGroup>

      {hasFilters && (
        <button
          onClick={resetFilters}
          className="mt-5 w-full py-2.5 text-sm font-body font-500 text-ink-muted hover:text-ink transition-colors cursor-pointer border border-ink-muted/20 rounded-lg hover:bg-ink-muted/5"
        >
          {t(ui.filterClearAll)}
        </button>
      )}
    </aside>
  );
}
