"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, Clock3, RotateCcw, SlidersHorizontal } from "lucide-react";
import type { Difficulty } from "@/content/articles";
import type { PageDictionary } from "@/i18n/pages/types";

type CategoryCard = {
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  updatedAt: string;
  updatedLabel: string;
  readingTime: number;
  featuredImage: string;
  tags: string[];
  popularity: number;
};

type CategoryBrowserProps = {
  articles: CategoryCard[];
  locale: string;
  categoryText: PageDictionary["category"];
  articleText: PageDictionary["article"];
};

export function CategoryBrowser({ articles, locale, categoryText, articleText }: CategoryBrowserProps) {
  const [difficulty, setDifficulty] = useState<"all" | Difficulty>("all");
  const [sort, setSort] = useState<"newest" | "popular">("newest");

  const visibleArticles = useMemo(() => {
    const filtered = difficulty === "all" ? articles : articles.filter((item) => item.difficulty === difficulty);
    return [...filtered].sort((a, b) => sort === "popular"
      ? b.popularity - a.popularity
      : b.updatedAt.localeCompare(a.updatedAt));
  }, [articles, difficulty, sort]);

  const difficulties: Array<"all" | Difficulty> = ["all", "beginner", "intermediate", "advanced"];
  const difficultyLabel = (level: "all" | Difficulty) => level === "all"
    ? categoryText.allDifficulties
    : articleText.difficultyLevels[level];

  if (articles.length === 0) {
    return (
      <div className="empty-category">
        <span className="empty-radar" aria-hidden="true"><i /></span>
        <div><span>PRW / 00</span><h2>{categoryText.emptyTitle}</h2><p>{categoryText.emptyDescription}</p></div>
        <Link className="button button-secondary" href="/#categories">{categoryText.allCategories}<ArrowRight className="directional-icon" size={15} /></Link>
      </div>
    );
  }

  return (
    <>
      <div className="category-toolbar">
        <div className="difficulty-filter" aria-label={categoryText.filterByDifficulty}>
          <span className="filter-label"><SlidersHorizontal size={14} />{categoryText.filterByDifficulty}</span>
          <div>
            {difficulties.map((level) => (
              <button className={difficulty === level ? "active" : ""} type="button" key={level} onClick={() => setDifficulty(level)}>{difficultyLabel(level)}</button>
            ))}
          </div>
        </div>
        <label className="category-sort">
          <span>{categoryText.sortBy}</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as "newest" | "popular")}>
            <option value="newest">{categoryText.newest}</option>
            <option value="popular">{categoryText.mostRead}</option>
          </select>
        </label>
      </div>

      {visibleArticles.length > 0 ? (
        <div className="category-article-grid">
          {visibleArticles.map((item, index) => (
            <Link className="category-article-card" href={`/${locale}/guides/${item.slug}`} key={item.slug}>
              <div className="category-card-image">
                <Image src={item.featuredImage} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 33vw" />
                <span>0{index + 1}</span>
                <i>{articleText.difficultyLevels[item.difficulty]}</i>
              </div>
              <div className="category-card-body">
                <div className="category-card-tags">{item.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="article-card-meta">
                  <span><CalendarDays size={13} />{categoryText.updated} {item.updatedLabel}</span>
                  <span><Clock3 size={13} />{item.readingTime} {articleText.minuteRead}</span>
                </div>
                <div className="article-card-footer"><span><BookOpen size={14} />{categoryText.readGuide}</span><ArrowRight className="directional-icon" size={16} /></div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-category filtered-empty">
          <span className="empty-radar" aria-hidden="true"><i /></span>
          <div><span>FILTER / 00</span><h2>{categoryText.noResultsTitle}</h2><p>{categoryText.noResultsDescription}</p></div>
          <button className="button button-secondary" type="button" onClick={() => setDifficulty("all")}><RotateCcw size={15} />{categoryText.clearFilters}</button>
        </div>
      )}
    </>
  );
}
