"use client";

import Image from "next/image";
import { navItems } from "@/lib/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { useDict } from "@/components/i18n/language-provider";

export function SiteHeader() {
  const dict = useDict();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label={dict.actions.toTop}>
          <Image src="/img/isologo.png" alt="Abel Arismendy" width={263} height={50} priority />
        </a>

        <nav className="site-header__nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="site-header__tools">
          <LanguageToggle />
          <ButtonLink className="site-header__cta" href="#contact">
            {dict.actions.getInTouch}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
