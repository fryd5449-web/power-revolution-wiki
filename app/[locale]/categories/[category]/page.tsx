import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrainCircuit, ChartNoAxesCombined, Factory, Globe2, GraduationCap, Handshake, Shield, Vote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CategoryBrowser } from "@/components/category-browser";
import { getArticleTranslation, getArticlesByCategory } from "@/content/articles";
import { categories, getCategory, type CategorySlug } from "@/content/categories";
import { dictionaries, isLocale, languages } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";

type CategoryPageProps = { params: Promise<{ locale: string; category: string }> };

const categoryIcons: Record<CategorySlug, LucideIcon> = {
  economy: ChartNoAxesCombined,
  politics: Vote,
  military: Shield,
  diplomacy: Handshake,
  trade: Factory,
  beginners: GraduationCap,
  advanced: BrainCircuit,
  countries: Globe2,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap(({ code }) => categories.map(({ slug }) => ({ locale: code, category: slug })));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category || !isLocale(locale)) return {};

  const localizedCategory = dictionaries[locale].categories.items[category.homeIndex];
  return { title: `${localizedCategory.title} | Power & Revolution Wiki`, description: localizedCategory.description };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category || !isLocale(locale)) notFound();

  const home = dictionaries[locale];
  const pages = pageDictionaries[locale];
  const localizedCategory = home.categories.items[category.homeIndex];
  const categoryArticles = getArticlesByCategory(category.slug);
  const CategoryIcon = categoryIcons[category.slug];
  const localizedArticles = categoryArticles.map((item) => {
    const translation = getArticleTranslation(item, locale);
    return {
      slug: item.slug,
      title: translation.title,
      description: translation.description,
      difficulty: item.difficulty,
      updatedAt: item.updatedAt,
      updatedLabel: new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${item.updatedAt}T00:00:00Z`)),
      readingTime: item.readingTime,
      featuredImage: item.featuredImage,
      tags: item.tags,
      popularity: item.popularity,
    };
  });

  return (
    <main className={`inner-main category-theme-${category.slug}`}>
      <section className="category-hero">
        <div className="inner-map-grid" aria-hidden="true" />
        <div className="category-hero-image" aria-hidden="true">
          <Image src="/images/hero-geopolitical.webp" alt="" fill priority sizes="(max-width: 960px) 100vw, 52vw" />
        </div>
        <div className="category-hero-shade" aria-hidden="true" />
        <div className="content-wrap category-hero-content">
          <div className="inner-breadcrumb"><Link href="/">{home.nav.home}</Link><span>/</span><Link href="/#categories">{pages.category.allCategories}</Link><span>/</span><strong>{localizedCategory.title}</strong></div>
          <div className="category-heading-grid">
            <div className="category-heading-copy">
              <span className="category-hero-icon"><CategoryIcon size={34} strokeWidth={1.5} /></span>
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
          <CategoryBrowser articles={localizedArticles} locale={locale} categoryText={pages.category} articleText={pages.article} />
        </div>
      </section>
    </main>
  );
}
