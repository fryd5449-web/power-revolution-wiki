"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({ title, label, copiedLabel }: { title: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const shareData = { title, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // A cancelled native share action should leave the page unchanged.
    }
  };

  return (
    <button className="article-share-button" type="button" onClick={share} aria-live="polite">
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? copiedLabel : label}
    </button>
  );
}
