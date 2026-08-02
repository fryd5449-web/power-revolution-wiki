import type { PageDictionary } from "./types";

export const enPages = {
  header: { categories: "Categories", search: "Search the wiki", menu: "Open navigation", close: "Close navigation", language: "Change language" },
  category: {
    eyebrow: "Knowledge domain", guidesAvailable: "guides available", updated: "Updated", readGuide: "Read guide",
    emptyTitle: "The briefing desk is preparing this section", emptyDescription: "Structured guides for this category are coming next. Explore another knowledge domain in the meantime.",
    noResultsTitle: "No guides match this briefing", noResultsDescription: "Adjust the difficulty filter or sorting option to reveal more intelligence.", allCategories: "All categories",
    filterByDifficulty: "Filter by difficulty", allDifficulties: "All levels", sortBy: "Sort by", newest: "Newest", mostRead: "Most read", clearFilters: "Clear filters",
  },
  article: {
    backToCategory: "Back to category", contents: "On this page", lastUpdated: "Last updated", difficulty: "Difficulty", readTime: "Reading time", minuteRead: "min read",
    related: "Related articles", fallbackNotice: "This article is currently shown in English while the translation is prepared.", tags: "Topics", share: "Share guide", copied: "Link copied", previous: "Previous guide", next: "Next guide",
    tip: "Field tip", warning: "Warning", takeaway: "Key takeaway", difficultyLevels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
  },
  notFound: { code: "404", eyebrow: "Signal lost", title: "This page is outside the known map", description: "The requested briefing may have moved, changed coordinates, or does not exist yet.", home: "Return home", browse: "Browse categories" },
} satisfies PageDictionary;
