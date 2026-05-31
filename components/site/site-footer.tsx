"use client";

import { siteConfig } from "@/lib/profile";
import { useDict } from "@/components/i18n/language-provider";

export function SiteFooter() {
  const dict = useDict();

  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="site-footer__links" aria-label="Social Links">
          <a href={siteConfig.cvPath} download>
            {dict.actions.downloadCv}
          </a>
          {siteConfig.social.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
