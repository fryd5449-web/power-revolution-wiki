export type PageDictionary = {
  header: { categories: string; search: string; menu: string; close: string; language: string };
  category: { eyebrow: string; guidesAvailable: string; updated: string; readGuide: string; emptyTitle: string; emptyDescription: string; allCategories: string };
  article: { backToCategory: string; contents: string; lastUpdated: string; difficulty: string; readTime: string; minuteRead: string; related: string; fallbackNotice: string; difficultyLevels: { beginner: string; intermediate: string; advanced: string } };
  notFound: { code: string; eyebrow: string; title: string; description: string; home: string; browse: string };
};
