import type { Locale } from "../types";
import { arPages } from "./ar";
import { dePages } from "./de";
import { enPages } from "./en";
import { esPages } from "./es";
import { frPages } from "./fr";
import type { PageDictionary } from "./types";

export const pageDictionaries: Record<Locale, PageDictionary> = {
  en: enPages,
  ar: arPages,
  fr: frPages,
  de: dePages,
  es: esPages,
};
