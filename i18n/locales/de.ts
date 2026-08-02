import type { Dictionary } from "../types";

export const de = {
  nav: { home: "Start", guides: "Leitfäden", economy: "Wirtschaft", politics: "Politik", military: "Militär", diplomacy: "Diplomatie", community: "Community" },
  accessibility: { openMenu: "Navigationsmenü öffnen", closeMenu: "Navigationsmenü schließen", language: "Sprache ändern", search: "Wiki durchsuchen" },
  header: { searchPlaceholder: "Wissensdatenbank durchsuchen…" },
  hero: {
    eyebrow: "Unabhängige Strategie-Enzyklopädie", title: "Die ultimative Power & Revolution Wissensdatenbank",
    description: "Beherrsche jedes System, gestalte jede Nation und triff bessere Entscheidungen mit fundierten Leitfäden für neue und erfahrene Strategen.",
    explore: "Leitfäden entdecken", browse: "Kategorien ansehen", liveData: "Strategische Übersicht", globalIndex: "Globaler Index",
    stability: "Stabilität", growth: "Wachstum", relations: "Beziehungen", activeBriefings: "Aktive Briefings",
  },
  categories: {
    eyebrow: "Wissensbereiche", title: "Beherrsche jedes System", description: "Von den ersten Entscheidungen bis zur fortgeschrittenen Staatskunst – mit klaren Wissenspfaden.", explore: "Thema entdecken",
    items: [
      { title: "Wirtschaft", description: "Haushalt, Inflation, Steuern, Schulden und Geldpolitik." },
      { title: "Politik", description: "Wahlen, Reformen, Beliebtheit, Gesetze und Stabilität." },
      { title: "Militär", description: "Streitkräfteplanung, Doktrin, Beschaffung und Operationen." },
      { title: "Diplomatie", description: "Allianzen, Verträge, Einfluss und internationale Beziehungen." },
      { title: "Handel & Industrie", description: "Produktion, Importe, Exporte und strategische Sektoren." },
      { title: "Einsteigerleitfäden", description: "Klare Grundlagen für deine erste erfolgreiche Regierung." },
      { title: "Fortgeschrittene Strategien", description: "Tiefe Systeme, Optimierung und langfristige Planung." },
      { title: "Länder", description: "Länderprofile, Startbedingungen und besondere Herausforderungen." },
    ],
  },
  featured: {
    eyebrow: "Auswahl der Redaktion", title: "Empfohlene Leitfäden", description: "Entscheidende Systeme für Erfolg oder Scheitern einer Regierung.", viewAll: "Alle Leitfäden", readGuide: "Leitfaden lesen",
    items: [
      { title: "Handelsbilanz", description: "Verwandle Importdruck in nachhaltige Exportstärke.", meta: "Wirtschaft · 9 Min." },
      { title: "Inflation", description: "Verstehe Preisdruck und die richtigen politischen Hebel.", meta: "Wirtschaft · 12 Min." },
      { title: "Wechselkurs", description: "Schütze die Währung, ohne Wachstum zu opfern.", meta: "Finanzen · 8 Min." },
      { title: "Armut", description: "Verbinde Löhne, Sozialleistungen und Wachstum wirksam.", meta: "Gesellschaft · 10 Min." },
      { title: "Sektorsubventionen", description: "Fördere Schlüsselindustrien ohne Haushaltsbruch.", meta: "Industrie · 7 Min." },
      { title: "Energiestrategie", description: "Balance zwischen Sicherheit, Kosten, Kapazität und Wandel.", meta: "Infrastruktur · 11 Min." },
    ],
  },
  latest: {
    eyebrow: "Informationsdienst", title: "Neueste Artikel", description: "Aktuelle Analysen, Mechaniken und praktische Strategien.", readArticle: "Artikel lesen",
    items: [
      { category: "Politik", title: "Dauerhaften Rückhalt aufbauen", excerpt: "Ein Reformrahmen, der Popularitätszyklen übersteht.", date: "Kürzlich aktualisiert" },
      { category: "Diplomatie", title: "Regionaler Einfluss ohne Eskalation", excerpt: "Handel, Hilfe und Allianzen für kontrollierten Einfluss.", date: "Kürzlich aktualisiert" },
      { category: "Militär", title: "Nachhaltige Streitkräfte planen", excerpt: "Bereitschaft, Beschaffung und Doktrin passend zum Budget.", date: "Kürzlich aktualisiert" },
    ],
  },
  world: {
    eyebrow: "Länderbüro", title: "Entdecke die Welt",
    description: "Erfahre, wie unterschiedliche Startbedingungen Politik, Ressourcen und langfristige Strategien prägen.",
    mapLabel: "Globaler Länderindex", profilePreview: "Profilvorschau",
    countries: [
      { name: "Republik Norland", region: "Nördliche Koalition" },
      { name: "Föderation Valmere", region: "Westliche Handelszone" },
      { name: "Asteria", region: "Südlicher Seebund" },
    ],
  },
  stats: { title: "Eine wachsende strategische Referenz", description: "Strukturiertes Wissen für eine globale Spielergemeinschaft.", labels: ["Leitfäden", "Kategorien", "Sprachen", "Mitwirkende"] },
  footer: {
    description: "Eine unabhängige, von der Community aufgebaute Wissensdatenbank für Power & Revolution.", explore: "Entdecken", resources: "Ressourcen", languages: "Sprachen", about: "Über das Projekt", contribute: "Mitwirken", guidelines: "Redaktionsregeln", changelog: "Änderungen", rights: "Power & Revolution Wiki. Unabhängig gepflegtes Community-Wissen.", disclaimer: "Nicht mit dem Publisher oder Entwickler des Spiels verbunden oder von ihnen unterstützt.",
  },
} satisfies Dictionary;
