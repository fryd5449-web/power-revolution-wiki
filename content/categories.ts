export const categorySlugs = [
  "economy",
  "politics",
  "military",
  "diplomacy",
  "trade",
  "beginners",
  "advanced",
  "countries",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type Category = {
  slug: CategorySlug;
  code: string;
  homeIndex: number;
};

export const categories: Category[] = [
  { slug: "economy", code: "EC", homeIndex: 0 },
  { slug: "politics", code: "PL", homeIndex: 1 },
  { slug: "military", code: "MI", homeIndex: 2 },
  { slug: "diplomacy", code: "DP", homeIndex: 3 },
  { slug: "trade", code: "TI", homeIndex: 4 },
  { slug: "beginners", code: "BG", homeIndex: 5 },
  { slug: "advanced", code: "AS", homeIndex: 6 },
  { slug: "countries", code: "CO", homeIndex: 7 },
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);
