import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/article-template";
import { articles, getArticle, getArticleTranslation } from "@/content/articles";
import { isLocale, languages } from "@/i18n";

type ArticlePageProps = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap(({ code }) => articles.map(({ slug }) => ({ locale: code, slug })));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);

  if (!article || !isLocale(locale)) {
    return {};
  }

  const translation = getArticleTranslation(article, locale);
  return { title: `${translation.title} | Power & Revolution Wiki`, description: translation.summary };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  const article = getArticle(slug);

  if (!article || !isLocale(locale)) {
    notFound();
  }

  return <ArticleTemplate article={article} locale={locale} />;
}
