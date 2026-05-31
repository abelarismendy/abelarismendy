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
import { ButtonLink } from "@/components/ui/button-link";
import {
  education,
  experience,
  featuredProjects,
  researchGroups,
  siteConfig,
  skills
} from "@/lib/profile";
import { SectionHeading } from "@/components/site/section-heading";

export function AboutSection() {
  return (
    <section className="section-shell section-block" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" title="About Abel">
        Fullstack developer and product engineer from Bogota, Colombia. I graduated in Computer &
        Systems Engineering from Universidad de los Andes and work across React, Next.js,
        TypeScript, NestJS, React Native, XR, and design-forward product systems.
      </SectionHeading>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            My work sits between engineering, product, and visual craft: I care about clean
            interfaces, readable systems, strong interaction details, and the small design
            decisions that make technical products feel clear.
          </p>
          <p>
            Before focusing deeply on software, I worked in graphic and motion design. That mix
            still shapes how I approach startup products, internal tools, research demos, and
            communication.
          </p>
        </div>

        <div className="education-list" aria-label="Education">
          {education.map((item) => (
            <Card key={item.title} as="article">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.place}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkSection() {
  return (
    <section className="section-shell section-block" id="work" aria-labelledby="work-title">
      <SectionHeading id="work-title" title="Work & Projects">
        Recent experience from Creditop, Samsam, Oasis, and Universidad de los Andes, plus selected
        products and research projects pulled from the updated CV and public project pages.
      </SectionHeading>

      <div className="work-grid">
        <div className="timeline" aria-label="Experience Timeline">
          {experience.map((item) => (
            <article key={`${item.title}-${item.company}`} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div>
                <p className="timeline__period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="timeline__company">{item.company}</p>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-list">
          {featuredProjects.map((project) => (
            <Card key={project.name} as="article" className="project-card">
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
                <p className="project-card__source">{project.source}</p>
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
                  Open Project
                </ButtonLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className="section-shell section-block" id="research" aria-labelledby="research-title">
      <SectionHeading id="research-title" title="Research Groups">
        Research communities that shaped my work in mixed reality, computer visualization, AI, and
        social robotics.
      </SectionHeading>

      <div className="research-grid">
        {researchGroups.map((group) => {
          const Icon = group.icon;

          return (
            <Card key={group.name} as="article" className="research-card">
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
                  Visit {group.name}
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
  return (
    <section className="section-shell section-block" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" title="Skills & Tools">
        A practical stack for shipping web products, data-backed tools, visual systems, and
        immersive prototypes.
      </SectionHeading>

      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = group.icon;

          return (
            <Card key={group.title} as="article" className="skill-card">
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
  return (
    <section className="contact-band section-shell" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="contact-band__label">Available For Focused Collaborations</p>
        <h2 id="contact-title">Let's Build Something Clear, Useful, and Well Crafted.</h2>
        <p>
          Reach out for fullstack product work, frontend systems, internal tools, XR prototypes, or
          design-forward technical projects.
        </p>
      </div>
      <div className="contact-band__actions">
        <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail aria-hidden="true" />}>
          Email Abel
        </ButtonLink>
        <ButtonLink
          href="https://www.linkedin.com/in/abelarismendy/"
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          icon={<ExternalLink aria-hidden="true" />}
          iconPosition="end"
        >
          Open LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
