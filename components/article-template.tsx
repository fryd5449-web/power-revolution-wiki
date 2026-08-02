import Link from "next/link";
import type { Article } from "@/content/articles";
import { getArticle, getArticleTranslation } from "@/content/articles";
import { getCategory } from "@/content/categories";
import { dictionaries } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";

export function ArticleTemplate({ article, locale }: { article: Article; locale: Locale }) {
  const home = dictionaries[locale];
  const pages = pageDictionaries[locale];
  const translation = getArticleTranslation(article, locale);
  const category = getCategory(article.category);
  const localizedCategory = category ? home.categories.items[category.homeIndex] : home.categories.items[0];
  const usesFallback = locale !== "en" && article.translations[locale] === undefined;
  const relatedArticles = article.relatedSlugs.map(getArticle).filter((related): related is Article => related !== undefined);
  const formattedDate = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${article.updatedAt}T00:00:00Z`));

  return (
    <main className="article-main">
      <header className="article-hero">
        <div className="inner-map-grid" aria-hidden="true" />
        <div className="content-wrap article-hero-inner">
          <div className="inner-breadcrumb">
            <Link href="/">{home.nav.home}</Link><span>/</span>
            <Link href={`/${locale}/categories/${article.category}`}>{localizedCategory.title}</Link><span>/</span>
            <strong>{translation.title}</strong>
          </div>
          <Link className="back-link" href={`/${locale}/categories/${article.category}`}><span>←</span>{pages.article.backToCategory}</Link>
          <div className="article-kicker"><span>{localizedCategory.title}</span><i />PRW GUIDE / {article.slug.toUpperCase()}</div>
          <h1>{translation.title}</h1>
          <p>{translation.summary}</p>
          <div className="article-meta-grid">
            <div><span>{pages.article.lastUpdated}</span><strong>{formattedDate}</strong></div>
            <div><span>{pages.article.difficulty}</span><strong>{pages.article.difficultyLevels[article.difficulty]}</strong></div>
            <div><span>{pages.article.readTime}</span><strong>{article.readMinutes} {pages.article.minuteRead}</strong></div>
          </div>
        </div>
      </header>

      <div className="content-wrap article-layout">
        <aside className="article-toc">
          <span className="toc-label">{pages.article.contents}</span>
          <nav aria-label={pages.article.contents}>
            {translation.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>0{index + 1}</span>{section.title}</a>)}
          </nav>
        </aside>

        <article className="article-body">
          {usesFallback ? <div className="translation-notice"><span>EN</span><p>{pages.article.fallbackNotice}</p></div> : null}
          {translation.sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <div className="section-number">0{index + 1}</div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}

          <div className="article-return">
            <Link href={`/${locale}/categories/${article.category}`}><span>←</span>{pages.article.backToCategory}: {localizedCategory.title}</Link>
          </div>
        </article>
      </div>

      <section className="related-section">
        <div className="content-wrap">
          <div className="eyebrow"><span />{pages.article.related}</div>
          <div className="related-grid">
            {relatedArticles.map((related) => {
              const relatedTranslation = getArticleTranslation(related, locale);
              return <Link href={`/${locale}/guides/${related.slug}`} key={related.slug}><span>{home.categories.items[getCategory(related.category)?.homeIndex ?? 0].title}</span><h2>{relatedTranslation.title}</h2><p>{relatedTranslation.summary}</p><strong>{pages.category.readGuide} →</strong></Link>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
