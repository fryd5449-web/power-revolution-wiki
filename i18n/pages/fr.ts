import type { PageDictionary } from "./types";

export const frPages = {
  header: { categories: "Catégories", search: "Rechercher dans le wiki", menu: "Ouvrir la navigation", close: "Fermer la navigation", language: "Changer de langue" },
  search: {
    openSearch: "Ouvrir la recherche", closeSearch: "Fermer la recherche", dialogTitle: "Rechercher dans la base de connaissances", placeholder: "Rechercher un guide, un sujet ou une stratégie…", shortcutHint: "Ctrl + K",
    startTyping: "Commencez à écrire", quickDescription: "Recherchez dans les titres, catégories, mots-clés et le contenu complet.", minimumCharacters: "Saisissez au moins 2 caractères", popularSearches: "Recherches populaires", quickResultCount: "{count} résultats", noQuickResults: "Aucun résultat trouvé", noQuickResultsDescription: "Essayez un autre mot-clé ou choisissez une catégorie suggérée.", viewAllResults: "Voir tous les résultats", resultsTitle: "Résultats de recherche", resultsFor: "Résultats pour", resultCount: "{count} résultats",
    categoryFilter: "Catégorie", allCategories: "Toutes les catégories", difficultyFilter: "Difficulté", allDifficulties: "Tous les niveaux", sortBy: "Trier par", relevance: "Pertinence", newest: "Plus récents",
    noResultsTitle: "Aucun renseignement correspondant", noResultsDescription: "Essayez un terme plus large, vérifiez l’orthographe ou explorez une catégorie suggérée.", suggestions: "Essayez de rechercher", suggestedCategories: "Explorer des catégories proches",
    fallbackBadge: "Anglais", fallbackNotice: "Ce résultat utilise le contenu anglais pendant la préparation de sa traduction.", clearSearch: "Effacer la recherche", navigateHint: "Naviguer", openHint: "Ouvrir",
  },
  category: {
    eyebrow: "Domaine de connaissance", guidesAvailable: "guides disponibles", updated: "Mis à jour", readGuide: "Lire le guide",
    emptyTitle: "Cette section est en préparation", emptyDescription: "Des guides structurés seront bientôt disponibles. Explorez un autre domaine en attendant.",
    noResultsTitle: "Aucun guide ne correspond", noResultsDescription: "Modifiez le niveau de difficulté ou le tri pour afficher plus de guides.", allCategories: "Toutes les catégories",
    filterByDifficulty: "Filtrer par difficulté", allDifficulties: "Tous les niveaux", sortBy: "Trier par", newest: "Plus récents", mostRead: "Plus consultés", clearFilters: "Effacer les filtres",
  },
  article: {
    backToCategory: "Retour à la catégorie", contents: "Sur cette page", lastUpdated: "Dernière mise à jour", difficulty: "Difficulté", readTime: "Temps de lecture", minuteRead: "min de lecture",
    related: "Articles associés", fallbackNotice: "Cet article est affiché en anglais pendant la préparation de sa traduction.", tags: "Sujets", share: "Partager le guide", copied: "Lien copié", previous: "Guide précédent", next: "Guide suivant",
    tip: "Conseil", warning: "Attention", takeaway: "À retenir", difficultyLevels: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" },
  },
  notFound: { code: "404", eyebrow: "Signal perdu", title: "Cette page est hors de la carte connue", description: "Le briefing demandé a peut-être changé d’adresse ou n’existe pas encore.", home: "Retour à l’accueil", browse: "Voir les catégories" },
} satisfies PageDictionary;
