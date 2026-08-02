import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LocalizedHeader } from "@/components/localized-header";
import { directionFor, isLocale, languages } from "@/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map(({ code }) => ({ locale: code }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="inner-site-shell" lang={locale} dir={directionFor(locale)}>
      <LocalizedHeader locale={locale} />
      {children}
    </div>
  );
}
