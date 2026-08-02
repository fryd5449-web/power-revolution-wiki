import type { PageDictionary } from "./types";
export const dePages = {
  header: { categories: "Kategorien", search: "Wiki durchsuchen", menu: "Navigation öffnen", close: "Navigation schließen", language: "Sprache ändern" },
  category: { eyebrow: "Wissensbereich", guidesAvailable: "Leitfäden verfügbar", updated: "Aktualisiert", readGuide: "Leitfaden lesen", emptyTitle: "Dieser Bereich wird vorbereitet", emptyDescription: "Strukturierte Leitfäden folgen in Kürze. Entdecke solange einen anderen Wissensbereich.", allCategories: "Alle Kategorien" },
  article: { backToCategory: "Zurück zur Kategorie", contents: "Auf dieser Seite", lastUpdated: "Zuletzt aktualisiert", difficulty: "Schwierigkeit", readTime: "Lesezeit", minuteRead: "Min. Lesezeit", related: "Verwandte Artikel", fallbackNotice: "Dieser Artikel wird auf Englisch angezeigt, bis die Übersetzung fertig ist.", difficultyLevels: { beginner: "Einsteiger", intermediate: "Mittel", advanced: "Fortgeschritten" } },
  notFound: { code: "404", eyebrow: "Signal verloren", title: "Diese Seite liegt außerhalb der bekannten Karte", description: "Das gesuchte Briefing wurde möglicherweise verschoben oder existiert noch nicht.", home: "Zur Startseite", browse: "Kategorien ansehen" },
} satisfies PageDictionary;
