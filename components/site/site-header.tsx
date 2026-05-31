import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import { navItems, siteConfig } from "@/lib/profile";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Go To Top">
          <Image
            src="/img/isologo.png"
            alt="Abel Arismendy"
            width={263}
            height={50}
            priority
          />
        </a>

        <nav className="site-header__nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink className="site-header__cta" href={siteConfig.cvPath} download>
          <ArrowDownToLine aria-hidden="true" />
          Download CV
        </ButtonLink>
      </div>
    </header>
  );
}
