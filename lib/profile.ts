import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Clapperboard,
  Code2,
  Database,
  AtSign,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Palette,
  PenTool,
  Play,
  Sparkles,
  TerminalSquare
} from "lucide-react";

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
      label: "Email",
      href: "mailto:abel@arismendy.co",
      icon: AtSign
    }
  ]
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
] as const;

export const highlights = [
  "Computer & Systems Engineering graduate from Universidad de los Andes.",
  "+2 years building startup products across frontend, backend, and mobile.",
  "Product engineering practice backed by XR research and graphic design experience."
] as const;

export const metrics = [
  { value: "2+", label: "Startup Years", detail: "Product, frontend, backend, mobile" },
  { value: "112+", label: "XR Students", detail: "Coached in Vivero Virtual bootcamps" },
  { value: "50", label: "Workshop Students", detail: "Educated through Oasis XR sessions" }
] as const;

export const experience = [
  {
    title: "Software Developer",
    company: "Creditop",
    period: "May 2025 - Present",
    summary:
      "Building production software across the Creditop ecosystem with a fullstack product engineering focus."
  },
  {
    title: "Product Engineer",
    company: "Samsam",
    period: "Aug 2024 - Mar 2025",
    summary:
      "Developed product features across multiple apps, revamped an internal product creation tool with NestJS and Retool, and implemented data ingestion plus AI-powered categorization for outlet merchants."
  },
  {
    title: "Research Assistant - Grupo IMAGINE",
    company: "Universidad de los Andes",
    period: "Jan 2023 - Jul 2024",
    summary:
      "Redesigned and developed the IMAGINE research group website, implemented the Vivero Virtual website redesign, and coached 112+ people across 4 XR bootcamps."
  },
  {
    title: "Co-founder & Leader",
    company: "Oasis",
    period: "Feb 2023 - Jul 2024",
    summary:
      "Co-founded the mixed reality learning initiative, designed the brand identity, and taught up to 50 students in Oasis XR workshops."
  }
] as const;

export const education = [
  {
    title: "Computer & Systems Engineering",
    place: "Universidad de los Andes",
    detail:
      "Engineering degree completed from 2020 to 2025, with a foundation in object-oriented programming, data structures, algorithms, Java, Python, and SQL."
  },
  {
    title: "Web Design",
    place: "SENA",
    detail: "Web page design certification."
  },
  {
    title: "Design & Web Development",
    place: "Platzi",
    detail:
      "Frontend development, HTML, CSS, CSS Grid, After Effects, Illustrator, and advanced Illustrator coursework."
  }
] as const;

export const researchGroups = [
  {
    name: "Oasis",
    href: "https://instagram.com/oasis.uniandes",
    focus: "Mixed Reality Learning",
    summary:
      "Co-founder and former leader of a student initiative focused on immersive learning experiences.",
    icon: Boxes
  },
  {
    name: "SinfonIA",
    href: "https://sinfoniauniandes.github.io/SinfonIA-web/home",
    focus: "AI & Social Robotics",
    summary:
      "Research group experience around artificial intelligence and socially aware robotic systems.",
    icon: BrainCircuit
  },
  {
    name: "IMAGINE",
    href: "https://imagine.uniandes.edu.co/",
    focus: "Computer Vision & Mixed Reality",
    summary:
      "Image processing, visualization, and mixed reality research community at Universidad de los Andes.",
    icon: Sparkles
  }
] as const;

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "React Router", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: ["NestJS", "Python", "SQL", "Retool", "Data Ingestion", "AI Categorization"]
  },
  {
    title: "Mobile & Product",
    icon: Palette,
    items: ["React Native", "Flutter", "Product Strategy", "Internal Tools", "Figma"]
  },
  {
    title: "XR & Design",
    icon: TerminalSquare,
    items: ["Unity", "C#", "Mixed Reality", "Computer Visualization", "Adobe Suite"]
  }
] satisfies Array<{
  title: string;
  icon: LucideIcon;
  items: string[];
}>;

export const featuredProjects = [
  {
    name: "Chamo",
    href: "https://www.chamo.co",
    description:
      "Personal finance product for automatic expense organization: bank emails or screenshots are categorized, approved with one tap, and planned through envelope-style budgets.",
    tags: ["Product Engineering", "Finance", "Next.js"],
    source: "chamo.co"
  },
  {
    name: "Digital Twin Networking Lab",
    href: "https://imagine.uniandes.edu.co/research/mixed-reality/88",
    description:
      "Multi-interface digital twin for the ML340 Networks and Communications Laboratory, combining IoT, AR, VR, WebXR, and web dashboards for real-time academic space monitoring.",
    tags: ["Mixed Reality", "IoT", "WebXR"],
    source: "IMAGINE project 88"
  },
  {
    name: "Colivri Digital Twin",
    href: "https://imagine.uniandes.edu.co/research/mixed-reality/48",
    description:
      "Open and extensible digital twin experimentation platform for COLIVRI, with real-time monitoring, audiovisual simulations, AR equipment context, and historical lab data.",
    tags: ["Mixed Reality", "Digital Twin", "Research"],
    source: "IMAGINE project 48"
  },
  {
    name: "IMAGINE Website Redesign",
    href: "https://imagine.uniandes.edu.co/people/abelarismendy",
    description:
      "Redesigned and developed the IMAGINE research group website while working as a research assistant at Universidad de los Andes.",
    tags: ["React", "Research", "Design System"],
    source: "IMAGINE profile"
  },
  {
    name: "UMA",
    href: "https://uma.creditop.com/",
    description: "A web project kept from the previous personal site as a featured external link.",
    tags: ["Web", "Product", "Interactive"],
    source: "Previous portfolio"
  }
] as const;

export const toolchain = [
  { label: "React", icon: Code2 },
  { label: "Next.js", icon: TerminalSquare },
  { label: "NestJS", icon: Database },
  { label: "React Native", icon: PenTool },
  { label: "XR", icon: GraduationCap },
  { label: "Product", icon: Clapperboard },
  { label: "Bogota", icon: MapPin }
] as const;
