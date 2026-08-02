export type Locale = "en" | "ar" | "fr" | "de" | "es";

export type Dictionary = {
  nav: {
    home: string;
    guides: string;
    economy: string;
    politics: string;
    military: string;
    diplomacy: string;
    community: string;
  };
  accessibility: {
    openMenu: string;
    closeMenu: string;
    language: string;
    search: string;
  };
  header: {
    searchPlaceholder: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    explore: string;
    browse: string;
    liveData: string;
    globalIndex: string;
    stability: string;
    growth: string;
    relations: string;
    activeBriefings: string;
  };
  categories: {
    eyebrow: string;
    title: string;
    description: string;
    explore: string;
    items: Array<{ title: string; description: string }>;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    readGuide: string;
    items: Array<{ title: string; description: string; meta: string }>;
  };
  latest: {
    eyebrow: string;
    title: string;
    description: string;
    readArticle: string;
    items: Array<{ category: string; title: string; excerpt: string; date: string }>;
  };
  world: {
    eyebrow: string;
    title: string;
    description: string;
    mapLabel: string;
    profilePreview: string;
    countries: Array<{ name: string; region: string }>;
  };
  stats: {
    title: string;
    description: string;
    labels: [string, string, string, string];
  };
  footer: {
    description: string;
    explore: string;
    resources: string;
    languages: string;
    about: string;
    contribute: string;
    guidelines: string;
    changelog: string;
    rights: string;
    disclaimer: string;
  };
};
