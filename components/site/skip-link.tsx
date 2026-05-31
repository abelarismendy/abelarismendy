"use client";

import { useDict } from "@/components/i18n/language-provider";

export function SkipLink() {
  const dict = useDict();

  return (
    <a className="skip-link" href="#main">
      {dict.actions.skip}
    </a>
  );
}
