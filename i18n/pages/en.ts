import type { PageDictionary } from "./types";

export const enPages = {
  header: { categories: "Categories", search: "Search the wiki", menu: "Open navigation", close: "Close navigation", language: "Change language" },
  search: {
    openSearch: "Open search", closeSearch: "Close search", dialogTitle: "Search the knowledge base", placeholder: "Search guides, topics, or strategies…", shortcutHint: "Ctrl + K",
    startTyping: "Start typing to search", quickDescription: "Search titles, topics, categories, tags, and full guide content.", minimumCharacters: "Type at least 2 characters to search", popularSearches: "Popular searches", quickResultCount: "{count} results", noQuickResults: "No results found", noQuickResultsDescription: "Try a different keyword or choose one of the suggested categories.", viewAllResults: "View all results", resultsTitle: "Search intelligence", resultsFor: "Results for", resultCount: "{count} results",
    categoryFilter: "Category", allCategories: "All categories", difficultyFilter: "Difficulty", allDifficulties: "All levels", sortBy: "Sort by", relevance: "Relevance", newest: "Newest",
    noResultsTitle: "No matching intelligence found", noResultsDescription: "Try a broader term, check the spelling, or explore one of the suggested categories.", suggestions: "Try searching for", suggestedCategories: "Explore nearby categories",
    fallbackBadge: "English", fallbackNotice: "This result uses English content while its translation is prepared.", clearSearch: "Clear search", navigateHint: "Navigate", openHint: "Open",
  },
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
