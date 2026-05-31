import { siteConfig } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <p>
          Copyright {new Date().getFullYear()} {siteConfig.name}. Built as a static Next.js site.
        </p>
        <div className="site-footer__links" aria-label="Social Links">
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
