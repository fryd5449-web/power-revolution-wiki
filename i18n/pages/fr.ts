import type { PageDictionary } from "./types";
export const frPages = {
  header: { categories: "Catégories", search: "Rechercher dans le wiki", menu: "Ouvrir la navigation", close: "Fermer la navigation", language: "Changer de langue" },
  category: { eyebrow: "Domaine de connaissance", guidesAvailable: "guides disponibles", updated: "Mis à jour", readGuide: "Lire le guide", emptyTitle: "Cette section est en préparation", emptyDescription: "Des guides structurés seront bientôt disponibles. Explorez un autre domaine en attendant.", allCategories: "Toutes les catégories" },
  article: { backToCategory: "Retour à la catégorie", contents: "Sur cette page", lastUpdated: "Dernière mise à jour", difficulty: "Difficulté", readTime: "Temps de lecture", minuteRead: "min de lecture", related: "Articles associés", fallbackNotice: "Cet article est affiché en anglais pendant la préparation de sa traduction.", difficultyLevels: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" } },
  notFound: { code: "404", eyebrow: "Signal perdu", title: "Cette page est hors de la carte connue", description: "Le briefing demandé a peut-être changé d’adresse ou n’existe pas encore.", home: "Retour à l’accueil", browse: "Voir les catégories" },
} satisfies PageDictionary;
