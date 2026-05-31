"use client";

import { ExternalLink, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { ComponentType, SVGProps } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { BehanceIcon, GitHubIcon, VimeoIcon } from "@/components/site/brand-icons";
import { useDict } from "@/components/i18n/language-provider";

const brandIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  GitHub: GitHubIcon,
  Vimeo: VimeoIcon,
  Behance: BehanceIcon
};

export function AboutSection() {
  const dict = useDict();

  return (
    <section className="section-shell section-block" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow={dict.about.eyebrow} title={dict.about.title} />

      <div className="about-grid">
        <div className="about-photo" role="img" aria-label={dict.about.photoAlt} data-reveal>
          <span className="about-photo__fallback" aria-hidden="true">
            AA
          </span>
        </div>

        <div className="about-copy" data-reveal>
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  const dict = useDict();

  return (
    <section
      className="section-shell section-block split-grid"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionHeading
        id="education-title"
        eyebrow={dict.education.eyebrow}
        title={dict.education.title}
      >
        {dict.education.intro}
      </SectionHeading>

      <ol className="timeline" aria-label={dict.education.title}>
        {dict.education.items.map((item, index) => (
          <li key={index} className="timeline__item" data-reveal>
            <span className="timeline__node" aria-hidden="true" />
            {item.period ? <p className="timeline__period">{item.period}</p> : null}
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__company">{item.place}</p>
            <p className="timeline__summary">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ExperienceSection() {
  const dict = useDict();

  return (
    <section
      className="section-shell section-block split-grid"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        id="experience-title"
        eyebrow={dict.experience.eyebrow}
        title={dict.experience.title}
      >
        {dict.experience.intro}
      </SectionHeading>

      <ol className="timeline" aria-label={dict.experience.title}>
        {dict.experience.items.map((item, index) => (
          <li key={index} className="timeline__item" data-reveal>
            <span className="timeline__node" aria-hidden="true" />
            <p className="timeline__period">{item.period}</p>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__company">{item.company}</p>
            <p className="timeline__summary">{item.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectsSection() {
  const dict = useDict();

  return (
    <section className="section-shell section-block" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow={dict.projects.eyebrow}
        title={dict.projects.title}
      >
        {dict.projects.intro}
      </SectionHeading>

      <div className="projects-grid">
        {dict.projects.items.map((project) => (
          <Card key={project.name} as="article" className="project-card" data-reveal>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="badge-row">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <ButtonLink
                href={project.href}
                target="_blank"
                rel="noreferrer"
                variant="quiet"
                icon={<ExternalLink aria-hidden="true" />}
                iconPosition="end"
              >
                {dict.actions.openProject}
              </ButtonLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ResearchSection() {
  const dict = useDict();

  return (
    <section className="section-shell section-block" id="research" aria-labelledby="research-title">
      <SectionHeading
        id="research-title"
        eyebrow={dict.research.eyebrow}
        title={dict.research.title}
      >
        {dict.research.intro}
      </SectionHeading>

      <div className="research-grid">
        {dict.research.items.map((group) => {
          const Icon = group.icon;

          return (
            <Card key={group.name} as="article" className="research-card" data-reveal>
              <CardHeader>
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <CardTitle>{group.name}</CardTitle>
                <CardDescription>{group.focus}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{group.summary}</p>
              </CardContent>
              <CardFooter>
                <a href={group.href} target="_blank" rel="noreferrer">
                  {dict.actions.visit} {group.name}
                  <ExternalLink aria-hidden="true" />
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function SkillsSection() {
  const dict = useDict();

  return (
    <section className="section-shell section-block" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" eyebrow={dict.skills.eyebrow} title={dict.skills.title}>
        {dict.skills.intro}
      </SectionHeading>

      <div className="skills-grid">
        {dict.skills.groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Card key={index} as="article" className="skill-card" data-reveal>
              <CardHeader>
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function ContactSection() {
  const dict = useDict();

  return (
    <section
      className="contact-band section-shell"
      id="contact"
      aria-labelledby="contact-title"
      data-reveal
    >
      <div>
        <p className="contact-band__label">{dict.contact.label}</p>
        <h2 id="contact-title">
          {dict.contact.title}
          <span className="contact-band__title-action">{dict.contact.titleAction}</span>
        </h2>
        <p>{dict.contact.copy}</p>
        <div className="contact-band__social">
          {siteConfig.social
            .filter((item) => item.label !== "LinkedIn" && item.label !== "Email")
            .map((item) => {
              const Icon = brandIcons[item.label];

              return (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {Icon ? <Icon aria-hidden="true" /> : null}
                  {item.label}
                </a>
              );
            })}
        </div>
      </div>
      <div className="contact-band__actions">
        <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail aria-hidden="true" />}>
          {dict.actions.emailAbel}
        </ButtonLink>
        <ButtonLink
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          icon={<ExternalLink aria-hidden="true" />}
          iconPosition="end"
        >
          {dict.actions.openLinkedin}
        </ButtonLink>
      </div>
    </section>
  );
}
