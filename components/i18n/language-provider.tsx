"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { defaultLocale, getDictionary, locales, type Dictionary, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "abel-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Resolve the preferred locale on the client after hydration so the initial
  // render matches the statically prerendered (default) markup.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      return;
    }

    const fromBrowser = window.navigator.languages
      .map((lang) => lang.slice(0, 2))
      .find((lang): lang is Locale => locales.includes(lang as Locale));

    if (fromBrowser) {
      setLocaleState(fromBrowser);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, dict: getDictionary(locale) }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useDict() {
  return useLanguage().dict;
}
