import { Hero } from "@/components/site/hero";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  ResearchSection,
  SkillsSection
} from "@/components/site/profile-sections";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { SkipLink } from "@/components/site/skip-link";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/lib/profile";

export const dynamic = "error";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: siteConfig.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogota",
    addressCountry: "CO"
  },
  sameAs: siteConfig.social
    .filter((item) => item.label !== "Email")
    .map((item) => item.href)
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SkipLink />
      <div className="site-canvas" id="top">
        <SiteHeader />
        <main id="main">
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
