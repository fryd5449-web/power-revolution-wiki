import type { Locale } from "./types";
import { directionFor } from ".";

export const LOCALE_STORAGE_KEY = "power-revolution-wiki:locale:v1";

export const applyDocumentLocale = (locale: Locale) => {
  document.documentElement.lang = locale;
  document.documentElement.dir = directionFor(locale);
};

export const storeLocale = (locale: Locale) => {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Navigation and language selection still work when storage is unavailable.
  }
};
