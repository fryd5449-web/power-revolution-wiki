import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/content/categories";
import { getArticleTranslation, getArticlesByCategory } from "@/content/articles";
import { dictionaries, isLocale, languages } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";

type CategoryPageProps = { params: Promise<{ locale: string; category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap(({ code }) => categories.map(({ slug }) => ({ locale: code, category: slug })));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category || !isLocale(locale)) {
    return {};
  }

  const localizedCategory = dictionaries[locale].categories.items[category.homeIndex];
  return {
    title: `${localizedCategory.title} | Power & Revolution Wiki`,
    description: localizedCategory.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category || !isLocale(locale)) {
    notFound();
  }

  const home = dictionaries[locale];
  const pages = pageDictionaries[locale];
  const localizedCategory = home.categories.items[category.homeIndex];
  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <main className="inner-main">
      <section className="category-hero">
        <div className="inner-map-grid" aria-hidden="true" />
        <div className="content-wrap category-hero-content">
          <div className="inner-breadcrumb"><Link href="/">{home.nav.home}</Link><span>/</span><Link href="/#categories">{pages.category.allCategories}</Link><span>/</span><strong>{localizedCategory.title}</strong></div>
          <div className="category-heading-grid">
            <div>
              <div className="eyebrow"><span />{pages.category.eyebrow} · {category.code}</div>
              <h1>{localizedCategory.title}</h1>
              <p>{localizedCategory.description}</p>
            </div>
            <div className="category-count"><strong>{String(categoryArticles.length).padStart(2, "0")}</strong><span>{pages.category.guidesAvailable}</span></div>
          </div>
        </div>
      </section>

      <section className="category-content-section">
        <div className="content-wrap">
          {categoryArticles.length > 0 ? (
            <div className="category-article-grid">
              {categoryArticles.map((article, index) => {
                const translation = getArticleTranslation(article, locale);
                return (
                  <Link className="category-article-card" href={`/${locale}/guides/${article.slug}`} key={article.slug}>
                    <div className="article-card-top"><span>0{index + 1}</span><i>{pages.article.difficultyLevels[article.difficulty]}</i></div>
                    <h2>{translation.title}</h2>
                    <p>{translation.summary}</p>
                    <div className="article-card-footer"><span>{article.readMinutes} {pages.article.minuteRead}</span><strong>{pages.category.readGuide} →</strong></div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="empty-category">
              <span className="empty-radar" aria-hidden="true"><i /></span>
              <div><span>{category.code} / 00</span><h2>{pages.category.emptyTitle}</h2><p>{pages.category.emptyDescription}</p></div>
              <Link className="button button-secondary" href="/#categories">{pages.category.allCategories}<span>→</span></Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
