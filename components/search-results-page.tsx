"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock3, Filter, Search, Sparkles, X } from "lucide-react";
import { SearchHighlight } from "@/components/search-highlight";
import type { Difficulty } from "@/content/articles";
import { categories, type CategorySlug } from "@/content/categories";
import { dictionaries } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";
import { buildSearchDocuments, getSearchSnippet, searchDocuments } from "@/lib/search";

export function SearchResultsPage({ locale, initialQuery }: { locale: Locale; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<"all" | CategorySlug>("all");
  const [difficulty, setDifficulty] = useState<"all" | Difficulty>("all");
  const [sort, setSort] = useState<"relevance" | "newest">("relevance");
  const deferredQuery = useDeferredValue(query);
  const router = useRouter();
  const text = pageDictionaries[locale];
  const home = dictionaries[locale];
  const documents = useMemo(() => buildSearchDocuments(locale), [locale]);
  const results = useMemo(() => {
    const filtered = searchDocuments(documents, deferredQuery)
      .filter((item) => category === "all" || item.category === category)
      .filter((item) => difficulty === "all" || item.difficulty === difficulty);
    return sort === "newest" ? [...filtered].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)) : filtered;
  }, [category, deferredQuery, difficulty, documents, sort]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    router.replace(`/${locale}/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
  };
  const resultCount = text.search.resultCount.replace("{count}", String(results.length));
  const queryLabel = deferredQuery.trim() || text.search.startTyping;
  const suggestedDocuments = documents.slice(0, 3);
  const suggestedCategories = categories.slice(0, 4);

  return (
    <main className="search-page">
      <section className="search-page-hero">
        <div className="inner-map-grid" aria-hidden="true" />
        <div className="content-wrap search-page-hero-inner">
          <div className="eyebrow"><span />Power &amp; Revolution Wiki</div>
          <h1>{text.search.resultsTitle}</h1>
          <p>{text.search.quickDescription}</p>
          <form className="search-page-form" onSubmit={submit}>
            <Search size={20} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={text.search.placeholder} aria-label={text.search.dialogTitle} autoFocus />
            {query ? <button type="button" onClick={() => setQuery("")} aria-label={text.search.clearSearch}><X size={16} /></button> : null}
            <button type="submit"><Search size={16} />{text.search.openSearch}</button>
          </form>
        </div>
      </section>

      <section className="search-results-section">
        <div className="content-wrap">
          <div className="search-results-heading">
            <div><span>{text.search.resultsFor}</span><h2>“<SearchHighlight text={queryLabel} query={deferredQuery} />”</h2></div>
            <strong>{resultCount}</strong>
          </div>

          <div className="search-filter-bar">
            <span className="search-filter-title"><Filter size={14} />{text.category.filterByDifficulty}</span>
            <label><span>{text.search.categoryFilter}</span><select value={category} onChange={(event) => setCategory(event.target.value as "all" | CategorySlug)}><option value="all">{text.search.allCategories}</option>{categories.map((item) => <option value={item.slug} key={item.slug}>{home.categories.items[item.homeIndex].title}</option>)}</select></label>
            <label><span>{text.search.difficultyFilter}</span><select value={difficulty} onChange={(event) => setDifficulty(event.target.value as "all" | Difficulty)}><option value="all">{text.search.allDifficulties}</option><option value="beginner">{text.article.difficultyLevels.beginner}</option><option value="intermediate">{text.article.difficultyLevels.intermediate}</option><option value="advanced">{text.article.difficultyLevels.advanced}</option></select></label>
            <label><span>{text.search.sortBy}</span><select value={sort} onChange={(event) => setSort(event.target.value as "relevance" | "newest")}><option value="relevance">{text.search.relevance}</option><option value="newest">{text.search.newest}</option></select></label>
          </div>

          {results.length > 0 ? (
            <div className="search-result-list">
              {results.map((result, index) => (
                <Link className="search-result-card" href={`/${locale}/guides/${result.slug}`} key={result.slug}>
                  <div className="search-result-image"><Image src={result.featuredImage} alt="" fill sizes="(max-width: 700px) 100vw, 260px" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="search-result-main">
                    <div className="search-result-meta"><span><SearchHighlight text={result.categoryName} query={deferredQuery} /></span><i>{text.article.difficultyLevels[result.difficulty]}</i><i><Clock3 size={12} />{result.readingTime} {text.article.minuteRead}</i></div>
                    <h2><SearchHighlight text={result.title} query={deferredQuery} /></h2>
                    <p><SearchHighlight text={getSearchSnippet(result, deferredQuery)} query={deferredQuery} /></p>
                    <div className="search-result-tags">{result.tags.slice(0, 4).map((tag) => <span key={tag}><SearchHighlight text={tag} query={deferredQuery} /></span>)}</div>
                    {result.isFallback ? <div className="search-fallback-notice"><strong>{text.search.fallbackBadge}</strong><span>{text.search.fallbackNotice}</span></div> : null}
                  </div>
                  <ArrowRight className="directional-icon search-result-arrow" size={19} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-empty-state">
              <div className="search-empty-radar" aria-hidden="true"><Search size={27} /></div>
              <span>QUERY / 00</span><h2>{text.search.noResultsTitle}</h2><p>{text.search.noResultsDescription}</p>
              <div className="search-suggestions"><strong><Sparkles size={14} />{text.search.suggestions}</strong><div>{suggestedDocuments.map((item) => <button type="button" key={item.slug} onClick={() => { setQuery(item.title); setCategory("all"); setDifficulty("all"); }}>{item.title}</button>)}</div></div>
              <div className="search-category-suggestions"><strong>{text.search.suggestedCategories}</strong><div>{suggestedCategories.map((item) => <Link href={`/${locale}/categories/${item.slug}`} key={item.slug}>{home.categories.items[item.homeIndex].title}<ArrowRight className="directional-icon" size={13} /></Link>)}</div></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
