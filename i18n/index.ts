import { ar } from "./locales/ar";
import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import type { Dictionary, Locale } from "./types";

export const languages: Array<{ code: Locale; label: string; shortLabel: string; dir: "ltr" | "rtl" }> = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" },
  { code: "fr", label: "Français", shortLabel: "FR", dir: "ltr" },
  { code: "de", label: "Deutsch", shortLabel: "DE", dir: "ltr" },
  { code: "es", label: "Español", shortLabel: "ES", dir: "ltr" },
];

export const dictionaries: Record<Locale, Dictionary> = { en, ar, fr, de, es };

export const isLocale = (value: string | null): value is Locale =>
  languages.some(({ code }) => code === value);

export const directionFor = (locale: Locale) => locale === "ar" ? "rtl" : "ltr";
