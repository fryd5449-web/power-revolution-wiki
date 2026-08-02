import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchResultsPage } from "@/components/search-results-page";
import { isLocale } from "@/i18n";
import { pageDictionaries } from "@/i18n/pages";

type SearchPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

export async function generateMetadata({ params }: SearchPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `${pageDictionaries[locale].search.resultsTitle} | Power & Revolution Wiki` };
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const [{ locale }, query] = await Promise.all([params, searchParams]);
  if (!isLocale(locale)) notFound();
  const rawQuery = Array.isArray(query.q) ? query.q[0] : query.q;
  return <SearchResultsPage locale={locale} initialQuery={rawQuery ?? ""} />;
}
