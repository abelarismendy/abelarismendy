import { AtSign, GitBranch, Link, Palette, Play } from "lucide-react";

export const siteConfig = {
  name: "Abel Arismendy",
  role: "Fullstack Developer & Product Engineer",
  url: "https://abel.arismendy.co",
  email: "abel@arismendy.co",
  location: "Bogota, Colombia",
  cvPath: "/files/abel-arismendy-CV.pdf",
  description:
    "Fullstack developer and product engineer from Bogota, Colombia, focused on React, Next.js, TypeScript, NestJS, React Native, XR, and design-forward digital products.",
  analyticsId: "G-4MHXGWPL5S",
  linkedin: "https://www.linkedin.com/in/abelarismendy/",
  social: [
    {
      label: "GitHub",
      href: "https://github.com/abelarismendy/",
      icon: GitBranch
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abelarismendy/",
      icon: Link
    },
    {
      label: "Vimeo",
      href: "https://vimeo.com/abelarismendy",
      icon: Play
    },
    {
      label: "Behance",
      href: "https://www.behance.net/abelarismendy",
      icon: Palette
    },
    {
      label: "Email",
      href: "mailto:abel@arismendy.co",
      icon: AtSign
    }
  ]
} as const;

export const navItems = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "projects", href: "#projects" },
  { key: "research", href: "#research" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" }
] as const;
