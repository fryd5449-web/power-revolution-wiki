"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  Clock3,
  Compass,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Languages,
  Landmark,
  LayoutGrid,
  MapPin,
  Menu,
  Scale,
  Shield,
  TrendingUp,
  Users,
  Vote,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WikiSearch } from "@/components/wiki-search";
import { dictionaries, directionFor, isLocale, languages } from "@/i18n";
import { applyDocumentLocale, LOCALE_STORAGE_KEY, storeLocale } from "@/i18n/client";
import type { Locale } from "@/i18n/types";

const categoryCodes = ["EC", "PL", "MI", "DP", "TI", "BG", "AS", "CO"];
const categoryAnchors = ["economy", "politics", "military", "diplomacy", "trade", "beginners", "advanced", "countries"];
const featuredArticleSlugs = ["trade-balance", "inflation", "exchange-rate", "poverty", "sector-subsidies", "energy-strategy"];
const statValues = ["120+", "8", "5", "24+"];

const navIcons: LucideIcon[] = [Landmark, BookOpen, Landmark, Vote, Shield, Handshake, Users];
const categoryIcons: LucideIcon[] = [ChartNoAxesCombined, Vote, Shield, Handshake, Factory, GraduationCap, BrainCircuit, Globe2];
const guideIcons: LucideIcon[] = [Scale, TrendingUp, ArrowLeftRight, HeartHandshake, Factory, Zap];
const statIcons: LucideIcon[] = [BookOpen, LayoutGrid, Languages, Users];

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const dictionary = dictionaries[locale];
  const direction = directionFor(locale);

  useEffect(() => {
    let initialLocale: Locale = "en";

    try {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      initialLocale = isLocale(storedLocale) ? storedLocale : "en";
    } catch {
      initialLocale = "en";
    }

    setLocale(initialLocale);
    applyDocumentLocale(initialLocale);
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    storeLocale(nextLocale);
    applyDocumentLocale(nextLocale);
    setMenuOpen(false);
  };

  const navLinks = [
    [dictionary.nav.home, "#top"],
    [dictionary.nav.guides, "#guides"],
    [dictionary.nav.economy, `/${locale}/categories/economy`],
    [dictionary.nav.politics, `/${locale}/categories/politics`],
    [dictionary.nav.military, `/${locale}/categories/military`],
    [dictionary.nav.diplomacy, `/${locale}/categories/diplomacy`],
    [dictionary.nav.community, "#community"],
  ];

  return (
    <div className="site-shell" dir={direction}>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Power & Revolution Wiki">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-copy"><strong>Power &amp; Revolution</strong><small>Wiki</small></span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map(([label, href], index) => {
              const NavIcon = navIcons[index];
              return <a className={index === 0 ? "active" : ""} href={href} key={href}><NavIcon size={13} strokeWidth={1.8} />{label}</a>;
            })}
          </nav>

          <div className="header-actions">
            <WikiSearch locale={locale} />

            <label className="language-select">
              <Languages className="globe-lucide" size={16} strokeWidth={1.8} aria-hidden="true" />
              <span className="sr-only">{dictionary.accessibility.language}</span>
              <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
                {languages.map((language) => <option value={language.code} key={language.code}>{language.label}</option>)}
              </select>
              <span className="chevron" aria-hidden="true">⌄</span>
            </label>

            <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? dictionary.accessibility.closeMenu : dictionary.accessibility.openMenu} onClick={() => setMenuOpen((isOpen) => !isOpen)}>
              {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <div className="drawer-header">
          <span className="drawer-title">Power &amp; Revolution Wiki</span>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label={dictionary.accessibility.closeMenu}><X size={19} /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {navLinks.map(([label, href], index) => {
            const NavIcon = navIcons[index];
            return <a className={index === 0 ? "active" : ""} href={href} key={href} onClick={() => setMenuOpen(false)}><span><NavIcon size={16} />{label}</span><ArrowRight className="directional-icon" size={15} /></a>;
          })}
        </nav>
        <div className="mobile-languages" aria-label={dictionary.accessibility.language}>
          {languages.map((language) => <button className={locale === language.code ? "selected" : ""} type="button" key={language.code} onClick={() => changeLocale(language.code)}>{language.shortLabel}<span>{language.label}</span></button>)}
        </div>
      </aside>

      <main>
        <section className="hero" id="top">
          <div className="hero-image" aria-hidden="true">
            <Image src="/images/hero-geopolitical.webp" alt="" fill priority sizes="100vw" />
          </div>
          <div className="hero-image-overlay" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="content-wrap hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span />{dictionary.hero.eyebrow}</div>
              <h1>{dictionary.hero.title}</h1>
              <p>{dictionary.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#guides"><BookOpen size={17} />{dictionary.hero.explore}<ArrowRight className="directional-icon" size={16} /></a>
                <a className="button button-secondary" href="#categories"><LayoutGrid size={17} />{dictionary.hero.browse}</a>
              </div>
              <div className="hero-signal"><span className="signal-dot" /><span>120+ verified strategic references</span><span className="signal-separator" /><span>Community maintained</span></div>
            </div>

            <div className="command-visual" aria-hidden="true">
              <div className="visual-topbar"><div><span className="live-dot" />{dictionary.hero.liveData}</div><span>PRW / 01</span></div>
              <div className="map-panel">
                <div className="map-orbit orbit-one" /><div className="map-orbit orbit-two" />
                <div className="map-land land-one" /><div className="map-land land-two" /><div className="map-land land-three" />
                <span className="map-marker marker-one" /><span className="map-marker marker-two" /><span className="map-marker marker-three" />
                <div className="map-label label-one">EUR</div><div className="map-label label-two">MENA</div><div className="map-label label-three">APAC</div>
                <div className="index-card"><small>{dictionary.hero.globalIndex}</small><strong>78.4</strong><span>+2.7%</span></div>
              </div>
              <div className="metric-row">
                <div><span>{dictionary.hero.stability}</span><strong>84</strong><i><b style={{ width: "84%" }} /></i></div>
                <div><span>{dictionary.hero.growth}</span><strong>67</strong><i><b style={{ width: "67%" }} /></i></div>
                <div><span>{dictionary.hero.relations}</span><strong>91</strong><i><b style={{ width: "91%" }} /></i></div>
              </div>
              <div className="briefing-strip"><span>{dictionary.hero.activeBriefings}</span><div className="briefing-bars"><i /><i /><i /><i /><i /><i /><i /></div><strong>06</strong></div>
            </div>
          </div>
        </section>

        <section className="section section-categories" id="categories">
          <div className="content-wrap">
            <div className="section-heading"><div><div className="eyebrow"><span />{dictionary.categories.eyebrow}</div><h2>{dictionary.categories.title}</h2></div><p>{dictionary.categories.description}</p></div>
            <div className="category-grid">
              {dictionary.categories.items.map((item, index) => {
                const CategoryIcon = categoryIcons[index];
                return (
                  <a className={`category-card category-tone-${index + 1}`} href={`/${locale}/categories/${categoryAnchors[index]}`} id={categoryAnchors[index]} key={item.title}>
                    <div className="category-top"><span className="category-icon"><CategoryIcon size={31} strokeWidth={1.55} /><small>{categoryCodes[index]}</small></span><ArrowUpRight className="card-arrow" size={18} /></div>
                    <h3>{item.title}</h3><p>{item.description}</p>
                    <span className="category-link">{dictionary.categories.explore}<ArrowRight className="directional-icon" size={13} /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-featured" id="guides">
          <div className="content-wrap">
            <div className="featured-heading"><div><div className="eyebrow"><span />{dictionary.featured.eyebrow}</div><h2>{dictionary.featured.title}</h2><p>{dictionary.featured.description}</p></div><a href="#guides" className="text-link">{dictionary.featured.viewAll}<ArrowRight className="directional-icon" size={15} /></a></div>
            <div className="guide-grid">
              {dictionary.featured.items.map((item, index) => {
                const GuideIcon = guideIcons[index];
                const [category, duration] = item.meta.split("·").map((part) => part.trim());
                return (
                  <a className="guide-card" href={`/${locale}/guides/${featuredArticleSlugs[index]}`} key={item.title}>
                    <div className={`guide-visual guide-visual-${index + 1}`} aria-hidden="true">
                      <GuideIcon size={35} strokeWidth={1.35} />
                      <span className="visual-line line-a" /><span className="visual-line line-b" /><span className="visual-orbit" />
                    </div>
                    <div className="guide-number">0{index + 1}</div>
                    <div className="guide-content">
                      <div className="guide-meta-row"><span className="guide-badge">{category}</span><span className="guide-duration"><Clock3 size={11} />{duration}</span></div>
                      <h3>{item.title}</h3><p>{item.description}</p>
                    </div>
                    <span className="guide-card-link">{dictionary.featured.readGuide}<ArrowRight className="directional-icon" size={14} /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-latest">
          <div className="content-wrap latest-layout">
            <div className="latest-intro"><div className="eyebrow"><span />{dictionary.latest.eyebrow}</div><h2>{dictionary.latest.title}</h2><p>{dictionary.latest.description}</p><div className="dispatch-graphic" aria-hidden="true"><span>PRW</span><div /><strong>INTEL / 2026</strong></div></div>
            <div className="article-list">
              {dictionary.latest.items.map((item, index) => (
                <article className="article-row" key={item.title}><div className="article-index">0{index + 1}</div><div className="article-copy"><div><span>{item.category}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.excerpt}</p></div><a href="#guides" aria-label={`${dictionary.latest.readArticle}: ${item.title}`}><ArrowUpRight size={16} /></a></article>
              ))}
            </div>
          </div>
        </section>

        <section className="world-section">
          <div className="content-wrap world-heading">
            <div><div className="eyebrow"><span />{dictionary.world.eyebrow}</div><h2>{dictionary.world.title}</h2></div>
            <p>{dictionary.world.description}</p>
          </div>
          <div className="content-wrap world-stage">
            <div className="world-map-visual">
              <Image src="/images/hero-geopolitical.webp" alt="" fill sizes="(max-width: 900px) 100vw, 65vw" />
              <div className="world-map-overlay" />
              <div className="world-map-label"><Globe2 size={16} /><span>{dictionary.world.mapLabel}</span><strong>03</strong></div>
              <span className="world-ping world-ping-a" /><span className="world-ping world-ping-b" /><span className="world-ping world-ping-c" />
            </div>
            <div className="country-preview-grid">
              {dictionary.world.countries.map((country, index) => (
                <article className="country-preview" key={country.name}>
                  <div><MapPin size={17} /><span>0{index + 1}</span></div>
                  <h3>{country.name}</h3><p>{country.region}</p>
                  <span>{dictionary.world.profilePreview}<ArrowUpRight size={13} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section" id="community">
          <div className="content-wrap stats-layout">
            <div className="stats-copy"><div className="eyebrow light"><span />Power &amp; Revolution Wiki</div><h2>{dictionary.stats.title}</h2><p>{dictionary.stats.description}</p></div>
            <div className="stats-grid">
              {statValues.map((value, index) => {
                const StatIcon = statIcons[index];
                return <div key={dictionary.stats.labels[index]}><StatIcon className="stat-icon" size={19} strokeWidth={1.6} /><strong>{value}</strong><span>{dictionary.stats.labels[index]}</span></div>;
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wrap footer-grid">
          <div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-copy"><strong>Power &amp; Revolution</strong><small>Wiki</small></span></a><p>{dictionary.footer.description}</p><span className="independent-badge"><i />Independent project</span></div>
          <div className="footer-column"><h3><Compass size={14} />{dictionary.footer.explore}</h3>{navLinks.slice(1, 6).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
          <div className="footer-column"><h3><BookOpen size={14} />{dictionary.footer.resources}</h3><a href="#community">{dictionary.footer.about}</a><a href="#community">{dictionary.footer.contribute}</a><a href="#community">{dictionary.footer.guidelines}</a><a href="#community">{dictionary.footer.changelog}</a></div>
          <div className="footer-column"><h3><Languages size={14} />{dictionary.footer.languages}</h3>{languages.map((language) => <button type="button" key={language.code} onClick={() => changeLocale(language.code)} className={locale === language.code ? "active" : ""}>{language.label}</button>)}</div>
        </div>
        <div className="content-wrap footer-bottom"><span>© 2026 {dictionary.footer.rights}</span><span>{dictionary.footer.disclaimer}</span></div>
      </footer>
    </div>
  );
}
