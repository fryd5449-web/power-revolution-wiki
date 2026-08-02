"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { directionFor, isLocale } from "@/i18n";
import { applyDocumentLocale } from "@/i18n/client";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";

export function NotFoundPage() {
  const pathname = usePathname();
  const pathLocale = pathname.split("/").filter(Boolean)[0] ?? null;
  const locale: Locale = isLocale(pathLocale) ? pathLocale : "en";
  const pages = pageDictionaries[locale];

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  return (
    <main className="not-found-page" lang={locale} dir={directionFor(locale)}>
      <div className="not-found-grid" aria-hidden="true" />
      <div className="not-found-radar" aria-hidden="true"><i /><span /></div>
      <div className="not-found-content">
        <div className="eyebrow"><span />{pages.notFound.eyebrow}</div>
        <strong>{pages.notFound.code}</strong>
        <h1>{pages.notFound.title}</h1>
        <p>{pages.notFound.description}</p>
        <div><Link className="button button-primary" href="/">{pages.notFound.home}<span>→</span></Link><Link className="button button-secondary" href="/#categories">{pages.notFound.browse}</Link></div>
      </div>
    </main>
  );
}
