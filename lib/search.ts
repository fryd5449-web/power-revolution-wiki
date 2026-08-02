import { articles, getArticleTranslation, type Difficulty } from "@/content/articles";
import { getCategory, type CategorySlug } from "@/content/categories";
import { dictionaries } from "@/i18n";
import type { Locale } from "@/i18n/types";

export type SearchDocument = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  categoryName: string;
  categorySearchText: string;
  difficulty: Difficulty;
  readingTime: number;
  updatedAt: string;
  featuredImage: string;
  tags: string[];
  content: string;
  isFallback: boolean;
  popularity: number;
};

export type SearchHit = SearchDocument & { score: number };

const arabicDiacritics = /[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g;
const punctuation = /[^\p{L}\p{N}\s-]/gu;

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(arabicDiacritics, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "")
    .replace(punctuation, " ")
    .toLocaleLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function stemArabicToken(value: string) {
  let token = normalizeSearchText(value);
  if (token.startsWith("ال") && token.length > 4) token = token.slice(2);
  for (const ending of ["يات", "ات", "ية", "ها", "هم", "ون", "ين", "ي", "ة"]) {
    if (token.endsWith(ending) && token.length - ending.length >= 3) {
      token = token.slice(0, -ending.length);
      break;
    }
  }
  return token;
}

function fieldMatches(field: string, queryToken: string) {
  const normalizedField = normalizeSearchText(field);
  const normalizedToken = normalizeSearchText(queryToken);
  if (!normalizedToken) return false;
  if (normalizedField.includes(normalizedToken)) return true;

  const stemmedQuery = stemArabicToken(normalizedToken);
  if (!/[\u0600-\u06ff]/.test(stemmedQuery) || stemmedQuery.length < 3) return false;
  return normalizedField.split(" ").some((word) => {
    const stemmedWord = stemArabicToken(word);
    return stemmedWord.includes(stemmedQuery) || stemmedQuery.includes(stemmedWord);
  });
}

export function buildSearchDocuments(locale: Locale): SearchDocument[] {
  return articles.map((article) => {
    const translation = getArticleTranslation(article, locale);
    const category = getCategory(article.category);
    const categoryIndex = category?.homeIndex ?? 0;
    const localizedCategory = dictionaries[locale].categories.items[categoryIndex].title;
    const englishCategory = dictionaries.en.categories.items[categoryIndex].title;
    const content = translation.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.box ? [section.box.title, section.box.content] : []),
    ]).join(" ");

    return {
      slug: article.slug,
      title: translation.title,
      description: translation.description,
      category: article.category,
      categoryName: localizedCategory,
      categorySearchText: `${localizedCategory} ${englishCategory}`,
      difficulty: article.difficulty,
      readingTime: article.readingTime,
      updatedAt: article.updatedAt,
      featuredImage: article.featuredImage,
      tags: article.tags,
      content,
      isFallback: locale !== "en" && article.translations[locale] === undefined,
      popularity: article.popularity,
    };
  });
}

export function searchDocuments(documents: SearchDocument[], query: string): SearchHit[] {
  const tokens = normalizeSearchText(query).split(" ").filter((token) => token.length > 1);
  if (tokens.length === 0) {
    return documents.map((document) => ({ ...document, score: 0 })).sort((a, b) => b.popularity - a.popularity);
  }

  return documents.flatMap((document) => {
    let score = 0;
    let matchedTokens = 0;

    for (const token of tokens) {
      let tokenMatched = false;
      if (fieldMatches(document.title, token)) { score += 18; tokenMatched = true; }
      if (fieldMatches(document.tags.join(" "), token)) { score += 11; tokenMatched = true; }
      if (fieldMatches(document.categorySearchText, token)) { score += 8; tokenMatched = true; }
      if (fieldMatches(document.description, token)) { score += 6; tokenMatched = true; }
      if (fieldMatches(document.content, token)) { score += 2; tokenMatched = true; }
      if (tokenMatched) matchedTokens += 1;
    }

    if (matchedTokens !== tokens.length) return [];
    if (normalizeSearchText(document.title).startsWith(normalizeSearchText(query))) score += 8;
    if (!document.isFallback) score += 1;
    return [{ ...document, score }];
  }).sort((a, b) => b.score - a.score || b.popularity - a.popularity);
}

export function getHighlightTerms(query: string) {
  const terms = query.trim().split(/\s+/).filter((term) => term.length > 1);
  const stemmed = terms.map(stemArabicToken).filter((term) => term.length >= 3);
  return [...new Set([...terms, ...stemmed])].sort((a, b) => b.length - a.length);
}

export function getSearchSnippet(document: SearchDocument, query: string, maximumLength = 190) {
  const fullText = `${document.description} ${document.content}`;
  const normalizedQuery = normalizeSearchText(query);
  const normalizedText = normalizeSearchText(fullText);
  const directIndex = normalizedText.indexOf(normalizedQuery);
  const start = directIndex > -1 ? Math.max(0, directIndex - 55) : 0;
  const snippet = fullText.slice(start, start + maximumLength).trim();
  return `${start > 0 ? "…" : ""}${snippet}${start + maximumLength < fullText.length ? "…" : ""}`;
}
