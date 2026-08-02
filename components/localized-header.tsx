"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionaries, languages } from "@/i18n";
import { applyDocumentLocale, storeLocale } from "@/i18n/client";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";

export function LocalizedHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const home = dictionaries[locale];
  const pages = pageDictionaries[locale];

  useEffect(() => {
    applyDocumentLocale(locale);
    storeLocale(locale);
  }, [locale]);

  const switchLocale = (nextLocale: Locale) => {
    const parts = pathname.split("/").filter(Boolean);
    parts[0] = nextLocale;
    storeLocale(nextLocale);
    applyDocumentLocale(nextLocale);
    setMenuOpen(false);
    router.push(`/${parts.join("/")}`);
  };

  const links = [
    [home.nav.home, "/"],
    [home.nav.economy, `/${locale}/categories/economy`],
    [home.nav.politics, `/${locale}/categories/politics`],
    [home.nav.military, `/${locale}/categories/military`],
    [home.nav.diplomacy, `/${locale}/categories/diplomacy`],
  ];

  return (
    <>
      <header className="site-header inner-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Power & Revolution Wiki">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-copy"><strong>Power &amp; Revolution</strong><small>Wiki</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href="/#categories">{pages.header.categories}</a>
          </nav>
          <div className="header-actions">
            <label className="search-box">
              <span className="search-icon" aria-hidden="true" />
              <span className="sr-only">{pages.header.search}</span>
              <input type="search" placeholder={home.header.searchPlaceholder} />
            </label>
            <label className="language-select">
              <span className="globe-icon" aria-hidden="true">◎</span>
              <span className="sr-only">{pages.header.language}</span>
              <select value={locale} onChange={(event) => switchLocale(event.target.value as Locale)}>
                {languages.map((language) => <option value={language.code} key={language.code}>{language.label}</option>)}
              </select>
              <span className="chevron" aria-hidden="true">⌄</span>
            </label>
            <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="inner-mobile-navigation" aria-label={menuOpen ? pages.header.close : pages.header.menu} onClick={() => setMenuOpen((open) => !open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-overlay ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`} id="inner-mobile-navigation" aria-hidden={!menuOpen}>
        <div className="drawer-header"><span className="drawer-title">Power &amp; Revolution Wiki</span><button type="button" onClick={() => setMenuOpen(false)} aria-label={pages.header.close}>×</button></div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<span>→</span></a>)}
          <a href="/#categories" onClick={() => setMenuOpen(false)}>{pages.header.categories}<span>→</span></a>
        </nav>
        <div className="mobile-languages" aria-label={pages.header.language}>
          {languages.map((language) => <button className={locale === language.code ? "selected" : ""} type="button" key={language.code} onClick={() => switchLocale(language.code)}>{language.shortLabel}<span>{language.label}</span></button>)}
        </div>
      </aside>
    </>
  );
}
