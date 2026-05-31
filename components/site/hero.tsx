import { ArrowDownToLine, ArrowRight, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { highlights, metrics, siteConfig, toolchain } from "@/lib/profile";

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__location">
          <MapPin aria-hidden="true" />
          <span>{siteConfig.location}</span>
        </div>
        <h1 id="hero-title">{siteConfig.name}</h1>
        <p className="hero__role">{siteConfig.role}</p>
        <p className="hero__copy">
          I build polished product experiences across frontend, backend, mobile, and XR, with a
          visual design background that keeps interfaces clear and intentional.
        </p>
        <div className="hero__actions">
          <ButtonLink href={siteConfig.cvPath} download icon={<ArrowDownToLine aria-hidden="true" />}>
            Download CV
          </ButtonLink>
          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            variant="secondary"
            icon={<Mail aria-hidden="true" />}
          >
            Email Me
          </ButtonLink>
        </div>
        <ul className="hero__highlights" aria-label="Profile Highlights">
          {highlights.map((item) => (
            <li key={item}>
              <ArrowRight aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__visual" aria-label="Technical Profile">
        <div className="portrait-frame">
          <div className="profile-console" aria-hidden="true">
            <div className="profile-console__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="profile-console__body">
              <p>
                <span>role</span> Fullstack Developer
              </p>
              <p>
                <span>stack</span> React, Next.js, TS, NestJS
              </p>
              <p>
                <span>focus</span> Product Engineering, XR, UI
              </p>
            </div>
          </div>
          <div className="profile-radar" aria-hidden="true">
            <span>Frontend</span>
            <span>Backend</span>
            <span>XR</span>
            <span>Design</span>
          </div>
          <div className="portrait-frame__code" aria-hidden="true">
            <span>const craft = ["code", "data", "design"];</span>
            <span>export default buildExperience;</span>
          </div>
        </div>
        <div className="toolchain" aria-label="Core Toolchain">
          {toolchain.map((tool) => {
            const Icon = tool.icon;

            return (
              <Badge key={tool.label} tone="muted">
                <Icon aria-hidden="true" />
                {tool.label}
              </Badge>
            );
          })}
        </div>
      </div>

      <dl className="hero__metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.value}</dt>
            <dd>
              <strong>{metric.label}</strong>
              <span>{metric.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
