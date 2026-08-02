import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, Clock3, Lightbulb, Tag } from "lucide-react";
import { ShareButton } from "@/components/share-button";
import type { Article, ContentBoxKind } from "@/content/articles";
import { getArticle, getArticlesByCategory, getArticleTranslation } from "@/content/articles";
import { getCategory } from "@/content/categories";
import { dictionaries } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";

const boxIcons = { tip: Lightbulb, warning: AlertTriangle, takeaway: CheckCircle2 };

export function ArticleTemplate({ article, locale }: { article: Article; locale: Locale }) {
  const home = dictionaries[locale];
  const pages = pageDictionaries[locale];
  const translation = getArticleTranslation(article, locale);
  const category = getCategory(article.category);
  const localizedCategory = category ? home.categories.items[category.homeIndex] : home.categories.items[0];
  const usesFallback = locale !== "en" && article.translations[locale] === undefined;
  const relatedArticles = article.relatedArticles.map(getArticle).filter((item): item is Article => item !== undefined);
  const categoryArticles = getArticlesByCategory(article.category);
  const articleIndex = categoryArticles.findIndex((item) => item.slug === article.slug);
  const previousArticle = articleIndex > 0 ? categoryArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex >= 0 && articleIndex < categoryArticles.length - 1 ? categoryArticles[articleIndex + 1] : null;
  const formattedDate = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${article.updatedAt}T00:00:00Z`));
  const boxLabel = (kind: ContentBoxKind) => pages.article[kind];

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
          <Link className="back-link" href={`/${locale}/categories/${article.category}`}><ArrowLeft className="directional-icon" size={15} />{pages.article.backToCategory}</Link>
          <div className="article-kicker"><span>{localizedCategory.title}</span><i />PRW GUIDE / {article.slug.toUpperCase()}</div>
          <h1>{translation.title}</h1>
          <p>{translation.description}</p>
          <div className="article-meta-grid">
            <div><span>{pages.article.lastUpdated}</span><strong>{formattedDate}</strong></div>
            <div><span>{pages.article.difficulty}</span><strong>{pages.article.difficultyLevels[article.difficulty]}</strong></div>
            <div><span>{pages.article.readTime}</span><strong><Clock3 size={14} />{article.readingTime} {pages.article.minuteRead}</strong></div>
          </div>
          <div className="article-hero-actions">
            <div className="article-tags" aria-label={pages.article.tags}><Tag size={14} />{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <ShareButton title={translation.title} label={pages.article.share} copiedLabel={pages.article.copied} />
          </div>
        </div>
      </header>

      <div className="content-wrap article-featured-image">
        <Image src={article.featuredImage} alt="" fill priority sizes="(max-width: 1240px) calc(100vw - 40px), 1180px" />
        <div aria-hidden="true" />
        <span><strong>PRW</strong> / {localizedCategory.title}</span>
      </div>

      <div className="content-wrap article-layout">
        <aside className="article-toc">
          <span className="toc-label">{pages.article.contents}</span>
          <nav aria-label={pages.article.contents}>
            {translation.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}
          </nav>
        </aside>

        <article className="article-body">
          {usesFallback ? <div className="translation-notice"><span>EN</span><p>{pages.article.fallbackNotice}</p></div> : null}
          {translation.sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <div className="section-number">{String(index + 1).padStart(2, "0")}</div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              {section.box ? (() => {
                const BoxIcon = boxIcons[section.box.kind];
                return (
                  <aside className={`article-callout callout-${section.box.kind}`}>
                    <BoxIcon size={21} />
                    <div><span>{boxLabel(section.box.kind)}</span><h3>{section.box.title}</h3><p>{section.box.content}</p></div>
                  </aside>
                );
              })() : null}
            </section>
          ))}

          <div className="article-return">
            <Link href={`/${locale}/categories/${article.category}`}><ArrowLeft className="directional-icon" size={15} />{pages.article.backToCategory}: {localizedCategory.title}</Link>
          </div>

          <nav className="article-pagination" aria-label={`${pages.article.previous} / ${pages.article.next}`}>
            {previousArticle ? <ArticleStep article={previousArticle} locale={locale} label={pages.article.previous} direction="previous" /> : <span />}
            {nextArticle ? <ArticleStep article={nextArticle} locale={locale} label={pages.article.next} direction="next" /> : <span />}
          </nav>
        </article>
      </div>

      {relatedArticles.length > 0 ? (
        <section className="related-section">
          <div className="content-wrap">
            <div className="eyebrow"><span />{pages.article.related}</div>
            <div className="related-grid">
              {relatedArticles.map((related) => {
                const relatedTranslation = getArticleTranslation(related, locale);
                return <Link href={`/${locale}/guides/${related.slug}`} key={related.slug}><span>{home.categories.items[getCategory(related.category)?.homeIndex ?? 0].title}</span><h2>{relatedTranslation.title}</h2><p>{relatedTranslation.description}</p><strong>{pages.category.readGuide}<ArrowRight className="directional-icon" size={14} /></strong></Link>;
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function ArticleStep({ article, locale, label, direction }: { article: Article; locale: Locale; label: string; direction: "previous" | "next" }) {
  const translation = getArticleTranslation(article, locale);
  return (
    <Link className={direction} href={`/${locale}/guides/${article.slug}`}>
      {direction === "previous" ? <ArrowLeft className="directional-icon" size={17} /> : null}
      <span><small>{label}</small><strong>{translation.title}</strong></span>
      {direction === "next" ? <ArrowRight className="directional-icon" size={17} /> : null}
    </Link>
  );
}
