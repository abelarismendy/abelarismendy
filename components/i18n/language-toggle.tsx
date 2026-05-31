"use client";

import { locales } from "@/lib/i18n";
import { useLanguage } from "@/components/i18n/language-provider";

export function LanguageToggle() {
  const { locale, setLocale, dict } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={dict.actions.language}>
      {locales.map((code) => {
        const active = code === locale;

        return (
          <button
            key={code}
            type="button"
            className="lang-toggle__option"
            aria-pressed={active}
            onClick={() => setLocale(code)}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
