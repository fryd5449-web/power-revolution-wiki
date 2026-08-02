"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowRight, ArrowUp, BookOpen, CornerDownLeft, Search, X } from "lucide-react";
import { SearchHighlight } from "@/components/search-highlight";
import { buildSearchDocuments, searchDocuments, type SearchHit } from "@/lib/search";
import { pageDictionaries } from "@/i18n/pages";
import type { Locale } from "@/i18n/types";

export function WikiSearch({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const text = pageDictionaries[locale].search;
  const documents = useMemo(() => buildSearchDocuments(locale), [locale]);
  const trimmedQuery = query.trim();
  const canSearch = Array.from(trimmedQuery).length >= 2;
  const allQuickResults = useMemo(() => canSearch ? searchDocuments(documents, query) : [], [canSearch, documents, query]);
  const quickResults = allQuickResults.slice(0, 6);
  const suggestedTopics = documents.slice(0, 4);
  const suggestedCategories = [...new Set(documents.map((document) => document.categoryName))].slice(0, 3);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onShortcut = (event: globalThis.KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        setQuery("");
        setActiveIndex(-1);
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  const openDialog = () => {
    setQuery("");
    setActiveIndex(-1);
    setOpen(true);
  };
  const openResult = (result: SearchHit) => {
    close();
    router.push(`/${locale}/guides/${result.slug}`);
  };
  const openResultsPage = () => {
    const value = query.trim();
    close();
    router.push(`/${locale}/search${value ? `?q=${encodeURIComponent(value)}` : ""}`);
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (activeIndex >= 0 && quickResults[activeIndex]) openResult(quickResults[activeIndex]);
    else if (canSearch) openResultsPage();
  };
  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && quickResults.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, quickResults.length - 1));
    } else if (event.key === "ArrowUp" && quickResults.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => index <= 0 ? 0 : index - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex >= 0 && quickResults[activeIndex]) openResult(quickResults[activeIndex]);
      else if (canSearch) openResultsPage();
    }
  };

  return (
    <>
      <button className="search-box search-launcher" type="button" ref={triggerRef} onClick={openDialog} aria-label={text.openSearch}>
        <Search className="search-lucide" size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>{text.placeholder}</span><kbd>{text.shortcutHint}</kbd>
      </button>
      <button className="search-mobile-launcher" type="button" onClick={openDialog} aria-label={text.openSearch}><Search size={17} /></button>

      {mounted && open ? createPortal((
        <div className="search-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <section className="search-command" role="dialog" aria-modal="true" aria-label={text.dialogTitle}>
            <div className="search-command-header">
              <div><Search size={18} /><span>{text.dialogTitle}</span></div>
              <button type="button" onClick={close} aria-label={text.closeSearch}><X size={18} /></button>
            </div>
            <form className="search-command-input" onSubmit={submit}>
              <Search size={20} aria-hidden="true" />
              <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(-1); }} onKeyDown={onInputKeyDown} placeholder={text.placeholder} aria-label={text.dialogTitle} autoComplete="off" />
              {query ? <button type="button" onClick={() => { setQuery(""); setActiveIndex(-1); inputRef.current?.focus(); }} aria-label={text.clearSearch}><X size={15} /></button> : <kbd>ESC</kbd>}
            </form>

            <div className="search-command-body">
              {!trimmedQuery ? (
                <>
                  <div className="search-command-intro"><BookOpen size={20} /><div><strong>{text.startTyping}</strong><p>{text.quickDescription}</p><kbd>{text.shortcutHint}</kbd></div></div>
                  <div className="search-command-suggestions"><span>{text.popularSearches}</span><div>{suggestedTopics.map((topic) => <button type="button" key={topic.slug} onClick={() => { setQuery(topic.title); setActiveIndex(-1); inputRef.current?.focus(); }}>{topic.title}</button>)}</div></div>
                </>
              ) : !canSearch ? (
                <div className="search-command-minimum"><Search size={21} /><strong>{text.minimumCharacters}</strong></div>
              ) : allQuickResults.length === 0 ? (
                <div className="search-command-empty"><Search size={24} /><strong>{text.noQuickResults}</strong><p>{text.noQuickResultsDescription}</p><div className="search-empty-suggestions">{suggestedCategories.map((category) => <button type="button" key={category} onClick={() => { setQuery(category); setActiveIndex(-1); inputRef.current?.focus(); }}>{category}</button>)}</div></div>
              ) : (
                <>
                  <div className="search-quick-count">{text.quickResultCount.replace("{count}", String(allQuickResults.length))}</div>
                  <div className="search-quick-list" role="listbox" aria-label={text.resultsTitle}>
                    {quickResults.map((result, index) => (
                      <button className={activeIndex === index ? "active" : ""} type="button" role="option" aria-selected={activeIndex === index} key={result.slug} onMouseEnter={() => setActiveIndex(index)} onClick={() => openResult(result)}>
                        <span className="search-result-code">{String(index + 1).padStart(2, "0")}</span>
                        <span className="search-result-copy">
                          <span><i>{result.categoryName}</i>{result.isFallback ? <em>{text.fallbackBadge}</em> : null}</span>
                          <strong><SearchHighlight text={result.title} query={query} /></strong>
                          <small><SearchHighlight text={result.description} query={query} /></small>
                        </span>
                        <ArrowRight className="directional-icon" size={16} />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="search-command-footer">
              <div><span><ArrowUp size={11} /><ArrowDown size={11} />{text.navigateHint}</span><span><CornerDownLeft size={12} />{text.openHint}</span></div>
              <button type="button" onClick={openResultsPage}>{text.viewAllResults}<ArrowRight className="directional-icon" size={14} /></button>
            </div>
          </section>
        </div>
      ), document.body) : null}
    </>
  );
}
