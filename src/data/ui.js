// UI strings — each key is an object { fr, es, en }
// Used via useT() → t(ui.key)

const ui = {
  // Header
  headerEyebrow: { fr: "Le carnet de",              es: "El cuaderno de",              en: "The notebook of" },
  headerTitle:   { fr: "Avions en Papier",          es: "Aviones de Papel",            en: "Paper Airplanes" },
  headerTagline: { fr: "Deviens un as du pliage",   es: "Conviértete en un maestro del plegado", en: "Become a master folder" },

  // Filters
  filtersTitle:       { fr: "Filtres",      es: "Filtros",      en: "Filters" },
  filterDifficulty:   { fr: "Difficulté",   es: "Dificultad",   en: "Difficulty" },
  filterSpecialty:    { fr: "Spécialité",   es: "Especialidad", en: "Specialty" },
  filterSortBy:       { fr: "Trier par",    es: "Ordenar por",  en: "Sort by" },
  filterOptions:      { fr: "Options",      es: "Opciones",     en: "Options" },
  filterIllustrated:  { fr: "Illustrés",    es: "Ilustrados",   en: "Illustrated" },
  filterClearAll:     { fr: "Tout effacer", es: "Borrar todo",  en: "Clear all" },

  // Result count (singular / plural)
  planeCountOne:   { fr: "{n} avion",     es: "{n} avión",   en: "{n} plane" },
  planeCountMany:  { fr: "{n} avions",    es: "{n} aviones", en: "{n} planes" },

  // Difficulties
  diffEasy:     { fr: "Facile",         es: "Fácil",        en: "Easy" },
  diffMedium:   { fr: "Moyen",          es: "Medio",        en: "Medium" },
  diffHard:     { fr: "Difficile",      es: "Difícil",      en: "Hard" },
  diffVeryhard: { fr: "Très difficile", es: "Muy difícil",  en: "Very hard" },
  diffVeryhardShort: { fr: "Très dur",  es: "Muy difícil",  en: "Very hard" },

  // Plurals for recommendation messages
  diffEasyPlural:     { fr: "faciles",         es: "fáciles",        en: "easy" },
  diffMediumPlural:   { fr: "moyens",          es: "medios",         en: "medium" },
  diffHardPlural:     { fr: "difficiles",      es: "difíciles",      en: "hard" },
  diffVeryhardPlural: { fr: "très difficiles", es: "muy difíciles",  en: "very hard" },

  // Categories
  catSpeed:      { fr: "Vitesse",    es: "Velocidad",  en: "Speed" },
  catDistance:   { fr: "Distance",   es: "Distancia",  en: "Distance" },
  catAcrobatics: { fr: "Acrobaties", es: "Acrobacias", en: "Acrobatics" },
  catGliding:    { fr: "Planeur",    es: "Planeador",  en: "Glider" },
  catAllround:   { fr: "Polyvalent", es: "Versátil",   en: "All-round" },

  catSpeedDesc:      { fr: "Les plus rapides",         es: "Los más rápidos",            en: "The fastest" },
  catDistanceDesc:   { fr: "Volent le plus loin",      es: "Vuelan más lejos",           en: "Fly the farthest" },
  catAcrobaticsDesc: { fr: "Figures et vrilles",       es: "Figuras y giros",            en: "Tricks and spins" },
  catGlidingDesc:    { fr: "Restent en l'air longtemps", es: "Se quedan mucho en el aire", en: "Stay in the air longest" },
  catAllroundDesc:   { fr: "Bons en tout",             es: "Buenos en todo",             en: "Good at everything" },

  // Rating labels (used for sort + card stats)
  rateDistance:   { fr: "Distance",   es: "Distancia",   en: "Distance" },
  rateSpeed:      { fr: "Vitesse",    es: "Velocidad",   en: "Speed" },
  rateAcrobatics: { fr: "Acrobaties", es: "Acrobacias",  en: "Acrobatics" },
  rateTurning:    { fr: "Virages",    es: "Giros",       en: "Turning" },
  rateGliding:    { fr: "Plané",      es: "Planeo",      en: "Gliding" },

  // Card / Detail
  foldsCount:   { fr: "{n} plis",     es: "{n} pliegues", en: "{n} folds" },
  badgeIllustrated: { fr: "Illustré", es: "Ilustrado",    en: "Illustrated" },

  // Detail modal
  detailDidYouKnow:      { fr: "Le savais-tu ?",    es: "¿Sabías qué?",         en: "Did you know?" },
  detailCharacteristics: { fr: "Caractéristiques",  es: "Características",      en: "Characteristics" },
  detailProTip:          { fr: "Conseil de pro",    es: "Consejo pro",          en: "Pro tip" },
  detailStartFolding:    { fr: "Commencer le pliage", es: "Empezar a plegar",   en: "Start folding" },
  detailStartFoldingIllustrated: { fr: "Commencer le pliage (illustré)", es: "Empezar a plegar (ilustrado)", en: "Start folding (illustrated)" },
  detailSourceLink:      { fr: "Voir le tutoriel original →", es: "Ver el tutorial original →", en: "See original tutorial →" },
  detailClose:           { fr: "Fermer",            es: "Cerrar",               en: "Close" },

  // Tips (per dominant stat)
  tipSpeed:      { fr: "Lance-le fort et droit devant toi pour qu'il aille le plus vite possible !",
                   es: "¡Lánzalo fuerte y recto hacia delante para que vaya lo más rápido posible!",
                   en: "Throw it hard and straight ahead so it goes as fast as possible!" },
  tipGliding:    { fr: "Lance-le doucement et en hauteur pour qu'il plane le plus longtemps possible !",
                   es: "¡Lánzalo suavemente y desde lo alto para que planee lo máximo posible!",
                   en: "Throw it gently from a high spot so it glides as long as possible!" },
  tipAcrobatics: { fr: "Plie les volets des ailes pour lui faire faire des figures incroyables !",
                   es: "¡Dobla las aletas de las alas para hacerle realizar figuras increíbles!",
                   en: "Fold the wing flaps to make it do amazing tricks!" },
  tipDistance:   { fr: "Lance-le fort vers le haut à 45° pour qu'il aille le plus loin possible !",
                   es: "¡Lánzalo fuerte hacia arriba a 45° para que llegue lo más lejos posible!",
                   en: "Throw it hard upward at 45° so it goes as far as possible!" },
  tipDefault:    { fr: "Essaie de le lancer à différentes vitesses pour voir ce qu'il fait de mieux !",
                   es: "¡Prueba a lanzarlo a diferentes velocidades para ver qué hace mejor!",
                   en: "Try throwing it at different speeds to see what it does best!" },

  // Folding steps navigation
  stepsBack:    { fr: "← Retour",    es: "← Volver",    en: "← Back" },
  stepsOf:      { fr: "Étape {n} / {total}", es: "Paso {n} / {total}", en: "Step {n} / {total}" },
  stepsTipHeader:{ fr: "Astuce :",   es: "Consejo:",    en: "Tip:" },
  stepsPrev:    { fr: "Précédent",   es: "Anterior",    en: "Previous" },
  stepsNext:    { fr: "Suivant",     es: "Siguiente",   en: "Next" },
  stepsDone:    { fr: "Terminé !",   es: "¡Terminado!", en: "Done!" },

  // Completion feedback
  completionBravo:      { fr: "Bravo !",            es: "¡Bravo!",          en: "Awesome!" },
  completionYouBuilt:   { fr: "Tu as construit",    es: "Has construido",   en: "You built" },
  completionHowWas:     { fr: "Comment c'était ?",  es: "¿Qué tal fue?",    en: "How was it?" },
  completionWasEasy:    { fr: "C'était facile 😊",  es: "Fue fácil 😊",     en: "It was easy 😊" },
  completionWasMedium:  { fr: "C'était moyen 🤔",   es: "Fue medio 🤔",     en: "It was medium 🤔" },
  completionWasHard:    { fr: "C'était difficile 💪", es: "Fue difícil 💪", en: "It was hard 💪" },
  completionSkip:       { fr: "Passer",             es: "Saltar",           en: "Skip" },

  // Empty state
  emptyTitle:   { fr: "Aucun avion trouvé",         es: "No se encontraron aviones", en: "No airplanes found" },
  emptySubtitle:{ fr: "Essaie de changer tes filtres.", es: "Prueba cambiar tus filtros.", en: "Try changing your filters." },
  emptyReset:   { fr: "Voir tous les avions",       es: "Ver todos los aviones",     en: "See all airplanes" },

  // Recommendation banner
  recoEasier: { fr: "Tu as l'air à l'aise ! Essaie un avion {level} pour te challenger.",
                es: "¡Pareces cómodo! Prueba un avión {level} para desafiarte.",
                en: "You look comfortable! Try a {level} plane to challenge yourself." },
  recoHarder: { fr: "Continue comme ça ! Plus tu t'entraînes, plus les plis deviennent faciles.",
                es: "¡Sigue así! Cuanto más practiques, más fácil será plegar.",
                en: "Keep it up! The more you practice, the easier folding gets." },
  recoDefault: { fr: "Tu as déjà construit {n} avions — continue l'aventure !",
                 es: "¡Ya has construido {n} aviones — continúa la aventura!",
                 en: "You've already built {n} airplanes — keep the adventure going!" },

  // Footer
  footerMade: { fr: "Fait avec soin par Mateo & Papa",
                es: "Hecho con cariño por Mateo y Papá",
                en: "Made with love by Mateo & Dad" },
};

// Small helper for placeholder substitution: t(ui.foldsCount, { n: 5 })
export function interpolate(str, vars = {}) {
  if (typeof str !== "string") return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));
}

export default ui;
