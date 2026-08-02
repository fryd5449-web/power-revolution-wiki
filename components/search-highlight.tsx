import { Fragment } from "react";
import { getHighlightTerms } from "@/lib/search";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function SearchHighlight({ text, query }: { text: string; query: string }) {
  const terms = getHighlightTerms(query).map(escapeRegExp).filter(Boolean);
  if (terms.length === 0) return text;

  const expression = new RegExp(`(${terms.join("|")})`, "giu");
  const exact = new RegExp(`^(?:${terms.join("|")})$`, "iu");
  return text.split(expression).map((part, index) => (
    <Fragment key={`${part}-${index}`}>{exact.test(part) ? <mark>{part}</mark> : part}</Fragment>
  ));
}
