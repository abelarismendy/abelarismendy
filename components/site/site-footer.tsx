"use client";

import type { ComponentType, SVGProps } from "react";
import { AtSign, ArrowDownToLine } from "lucide-react";
import { siteConfig } from "@/lib/profile";
import { BehanceIcon, GitHubIcon, LinkedInIcon, VimeoIcon } from "@/components/site/brand-icons";
import { useDict } from "@/components/i18n/language-provider";

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Vimeo: VimeoIcon,
  Behance: BehanceIcon,
  Email: AtSign
};

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
            <ArrowDownToLine aria-hidden="true" />
            {dict.actions.downloadCv}
          </a>
          {siteConfig.social.map((item) => {
            const Icon = socialIcons[item.label];

            return (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {Icon ? <Icon aria-hidden="true" /> : null}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
