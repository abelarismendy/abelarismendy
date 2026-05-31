"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/profile";
import { useDict } from "@/components/i18n/language-provider";

export function Hero() {
  const dict = useDict();

  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__content" data-reveal>
        <div className="hero__location">
          <MapPin aria-hidden="true" />
          <span>{dict.hero.profile.base}</span>
        </div>
        <h1 id="hero-title">{siteConfig.name}</h1>
        <p className="hero__role">{dict.hero.role}</p>
        <p className="hero__copy">{dict.hero.copy}</p>
        <div className="hero__actions">
          <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail aria-hidden="true" />}>
            {dict.actions.emailMe}
          </ButtonLink>
          <ButtonLink
            href="#projects"
            variant="secondary"
            icon={<ArrowRight aria-hidden="true" />}
            iconPosition="end"
          >
            {dict.actions.viewWork}
          </ButtonLink>
        </div>
      </div>

      <div className="hero__visual" aria-label="Profile Summary">
        <div className="profile-card" data-reveal>
          <div className="profile-card__bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>abel.ts</em>
          </div>
          <div className="profile-card__body" aria-hidden="true">
            <p>
              <span>role</span> {dict.hero.profile.role}
            </p>
            <p>
              <span>focus</span> {dict.hero.profile.focus}
            </p>
            <p>
              <span>base</span> {dict.hero.profile.base}
            </p>
          </div>
          <div className="profile-card__status">
            <span className="status-dot" aria-hidden="true" />
            <span>{dict.hero.profile.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
