import type { Dictionary } from "../types";

export const fr = {
  nav: { home: "Accueil", guides: "Guides", economy: "Économie", politics: "Politique", military: "Militaire", diplomacy: "Diplomatie", community: "Communauté" },
  accessibility: { openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", language: "Changer de langue", search: "Rechercher dans le wiki" },
  header: { searchPlaceholder: "Rechercher dans la base…" },
  hero: {
    eyebrow: "Encyclopédie stratégique indépendante", title: "La base de connaissances ultime de Power & Revolution",
    description: "Maîtrisez chaque système, façonnez chaque nation et prenez de meilleures décisions grâce à des guides conçus pour tous les stratèges.",
    explore: "Explorer les guides", browse: "Voir les catégories", liveData: "Aperçu stratégique",
    globalIndex: "Indice mondial", stability: "Stabilité", growth: "Croissance", relations: "Relations", activeBriefings: "Briefings actifs",
  },
  categories: {
    eyebrow: "Domaines de connaissance", title: "Maîtrisez chaque système",
    description: "Passez de vos premières décisions à l’art avancé de gouverner grâce à des parcours spécialisés.", explore: "Explorer le sujet",
    items: [
      { title: "Économie", description: "Budgets, inflation, fiscalité, dette et politique monétaire." },
      { title: "Politique", description: "Élections, réformes, popularité, lois et stabilité intérieure." },
      { title: "Militaire", description: "Planification des forces, doctrine, achats et opérations." },
      { title: "Diplomatie", description: "Alliances, traités, influence et relations internationales." },
      { title: "Commerce et industrie", description: "Production, importations, exportations et secteurs stratégiques." },
      { title: "Guides débutants", description: "Des bases claires pour une première administration réussie." },
      { title: "Stratégies avancées", description: "Systèmes complexes, optimisation et planification à long terme." },
      { title: "Pays", description: "Profils, conditions initiales et défis propres à chaque pays." },
    ],
  },
  featured: {
    eyebrow: "Sélection de la rédaction", title: "Guides à la une", description: "Les systèmes décisifs pour la réussite ou l’échec d’un gouvernement.",
    viewAll: "Voir tous les guides", readGuide: "Lire le guide",
    items: [
      { title: "Balance commerciale", description: "Transformez la pression des importations en force exportatrice.", meta: "Économie · 9 min" },
      { title: "Inflation", description: "Comprenez les prix et les leviers permettant de les contenir.", meta: "Économie · 12 min" },
      { title: "Taux de change", description: "Protégez la monnaie sans sacrifier la croissance nationale.", meta: "Finance · 8 min" },
      { title: "Pauvreté", description: "Coordonnez salaires, aides et croissance pour améliorer la vie.", meta: "Société · 10 min" },
      { title: "Subventions sectorielles", description: "Soutenez les industries stratégiques sans briser le budget.", meta: "Industrie · 7 min" },
      { title: "Stratégie énergétique", description: "Équilibrez sécurité, coût, capacité et transition.", meta: "Infrastructure · 11 min" },
    ],
  },
  latest: {
    eyebrow: "Bureau du renseignement", title: "Derniers articles", description: "Nouvelles analyses, mécaniques actualisées et conseils pratiques.", readArticle: "Lire l’article",
    items: [
      { category: "Politique", title: "Construire un soutien populaire durable", excerpt: "Des réformes capables de traverser les cycles de popularité.", date: "Mis à jour récemment" },
      { category: "Diplomatie", title: "Influence régionale sans escalade", excerpt: "Commerce, aide et alliances au service d’une influence maîtrisée.", date: "Mis à jour récemment" },
      { category: "Militaire", title: "Concevoir une force durable", excerpt: "Adaptez préparation, achats et doctrine à votre budget réel.", date: "Mis à jour récemment" },
    ],
  },
  world: {
    eyebrow: "Bureau des pays", title: "Explorez le monde",
    description: "Découvrez comment les conditions initiales façonnent les politiques, les ressources et la stratégie à long terme.",
    mapLabel: "Index mondial des pays", profilePreview: "Aperçu du profil",
    countries: [
      { name: "République de Norland", region: "Coalition du Nord" },
      { name: "Fédération de Valmere", region: "Zone commerciale occidentale" },
      { name: "Asteria", region: "Bloc maritime du Sud" },
    ],
  },
  stats: { title: "Une référence stratégique en pleine croissance", description: "Des connaissances structurées pour une communauté mondiale.", labels: ["Guides", "Catégories", "Langues", "Contributeurs"] },
  footer: {
    description: "Une base de connaissances indépendante créée par la communauté mondiale de Power & Revolution.",
    explore: "Explorer", resources: "Ressources", languages: "Langues", about: "À propos", contribute: "Contribuer",
    guidelines: "Règles éditoriales", changelog: "Historique", rights: "Power & Revolution Wiki. Un savoir communautaire indépendant.",
    disclaimer: "Ce site n’est ni affilié ni approuvé par l’éditeur ou le développeur du jeu.",
  },
} satisfies Dictionary;
