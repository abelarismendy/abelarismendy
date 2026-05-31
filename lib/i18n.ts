import type { LucideIcon } from "lucide-react";
import { Boxes, BrainCircuit, Code2, Database, Palette, Sparkles, TerminalSquare } from "lucide-react";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español"
};

export type Dictionary = {
  nav: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    research: string;
    skills: string;
    contact: string;
  };
  actions: {
    downloadCv: string;
    emailMe: string;
    emailAbel: string;
    getInTouch: string;
    viewWork: string;
    openLinkedin: string;
    openProject: string;
    visit: string;
    toTop: string;
    skip: string;
    language: string;
  };
  hero: {
    role: string;
    copy: string;
    profile: { role: string; focus: string; base: string; status: string };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    photoAlt: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { period: string; title: string; company: string; summary: string }[];
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { period?: string; title: string; place: string; detail: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; href: string; description: string; tags: string[] }[];
  };
  research: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; href: string; focus: string; summary: string; icon: LucideIcon }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { title: string; icon: LucideIcon; items: string[] }[];
  };
  contact: { label: string; title: string; titleAction: string; copy: string };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      research: "Research",
      skills: "Skills",
      contact: "Contact"
    },
    actions: {
      downloadCv: "Download CV",
      emailMe: "Email Me",
      emailAbel: "Email Abel",
      getInTouch: "Get In Touch",
      viewWork: "View Work",
      openLinkedin: "Open LinkedIn",
      openProject: "Open Project",
      visit: "Visit",
      toTop: "Go To Top",
      skip: "Skip To Main Content",
      language: "Language"
    },
    hero: {
      role: "Fullstack Developer & Product Engineer",
      copy: "I build products end to end — frontend, backend, mobile, and XR — and obsess over the details that make them feel effortless.",
      profile: {
        role: "Fullstack & Product",
        focus: "Product · Design · XR",
        base: "Bogota, Colombia",
        status: "Building at Creditop"
      }
    },
    about: {
      eyebrow: "Profile",
      title: "About Abel",
      paragraphs: [
        "I'm a fullstack engineer in Bogotá. I build from the database to the pixels, and treat design as part of engineering — not something bolted on at the end.",
        "I came into engineering from graphic and motion design, and that mix still shapes how I work — on startup products, internal tools, and research demos that have to be clear, not just functional."
      ],
      photoAlt: "Portrait of Abel Arismendy"
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've Worked",
      intro: "A few years across startups and a university research lab — product engineering, fullstack, and XR.",
      items: [
        {
          period: "May 2025 - Present",
          title: "Software Developer",
          company: "Creditop",
          summary:
            "Rebuilt Creditop's web frontend from scratch on a more scalable stack, and added observability and product analytics so the team ships with confidence. I also work across the backend, taking features from idea to production."
        },
        {
          period: "Aug 2024 - Mar 2025",
          title: "Product Engineer",
          company: "Samsam",
          summary:
            "Shipped features across several apps, rebuilt an internal product-creation tool with NestJS and Retool, and set up data ingestion with AI-powered categorization for outlet merchants."
        },
        {
          period: "Jan 2023 - Jul 2024",
          title: "Research Assistant — Grupo IMAGINE",
          company: "Universidad de los Andes",
          summary:
            "Redesigned and built the IMAGINE research group site and the Vivero Virtual platform, and coached 112+ people across four XR bootcamps."
        },
        {
          period: "Feb 2023 - Jul 2024",
          title: "Co-founder & Lead",
          company: "Oasis",
          summary:
            "Co-founded a mixed-reality learning initiative, shaped its brand, and taught up to 50 students in our XR workshops."
        }
      ]
    },
    education: {
      eyebrow: "Education",
      title: "How I Trained",
      intro: "An engineering degree, with design and frontend craft picked up along the way.",
      items: [
        {
          period: "2020 - 2025",
          title: "Computer & Systems Engineering",
          place: "Universidad de los Andes",
          detail: "Foundations in algorithms, data structures, and software design (Java, Python, SQL)."
        },
        {
          title: "Design & Web Development",
          place: "Platzi",
          detail: "Frontend, CSS Grid, motion design, and Illustrator."
        },
        {
          title: "Web Design",
          place: "SENA",
          detail: "Certified in web page design."
        }
      ]
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Projects",
      intro: "A selection of products and research work — from a personal finance app to mixed-reality digital twins.",
      items: [
        {
          name: "Chamo",
          href: "https://www.chamo.co",
          description:
            "A personal-finance app that organizes spending on its own — it reads bank emails or screenshots, categorizes them, and lets you approve each one in a tap and plan with envelope-style budgets.",
          tags: ["Product Engineering", "Finance", "Next.js"],
        },
        {
          name: "Digital Twin Networking Lab",
          href: "https://imagine.uniandes.edu.co/research/mixed-reality/88",
          description:
            "A multi-interface digital twin of the ML340 Networks Lab, bringing IoT, AR, VR, WebXR, and web dashboards together for real-time monitoring.",
          tags: ["Mixed Reality", "IoT", "WebXR"],
        },
        {
          name: "Colivri Digital Twin",
          href: "https://imagine.uniandes.edu.co/research/mixed-reality/48",
          description:
            "An open, extensible platform for experimenting with digital twins at COLIVRI — real-time monitoring, audiovisual simulations, AR equipment context, and historical lab data.",
          tags: ["Mixed Reality", "Digital Twin", "Research"],
        },
        {
          name: "IMAGINE Website Redesign",
          href: "https://imagine.uniandes.edu.co/people/abelarismendy",
          description:
            "A full redesign and rebuild of the IMAGINE research group's website, during my time as a research assistant at Universidad de los Andes.",
          tags: ["React", "Research", "Design System"],
        },
        {
          name: "Vivero Virtual",
          href: "https://viverovirtual.uniandes.edu.co/",
          description:
            "The site for Universidad de los Andes' XR learning and bootcamp initiative, built and shipped end to end.",
          tags: ["Web", "XR", "Education"],
        }
      ]
    },
    research: {
      eyebrow: "Communities",
      title: "Research Groups",
      intro: "The communities that shaped how I work in mixed reality, computer vision, AI, and social robotics.",
      items: [
        {
          name: "Oasis",
          href: "https://instagram.com/oasis.uniandes",
          focus: "Mixed Reality Learning",
          summary: "Co-founder and former lead of a student initiative built around immersive learning.",
          icon: Boxes
        },
        {
          name: "SinfonIA",
          href: "https://sinfoniauniandes.github.io/SinfonIA-web/home",
          focus: "AI & Social Robotics",
          summary:
            "Led the perception area for a Pepper-type social robot, and competed at RoboCup 2023 in Bordeaux — second place in our category.",
          icon: BrainCircuit
        },
        {
          name: "IMAGINE",
          href: "https://imagine.uniandes.edu.co/",
          focus: "Computer Vision & Mixed Reality",
          summary:
            "A research community working on image processing, visualization, and mixed reality at Universidad de los Andes.",
          icon: Sparkles
        }
      ]
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Skills & Tools",
      intro: "The stack I reach for to ship web products, data-backed tools, and immersive prototypes.",
      groups: [
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
      ]
    },
    contact: {
      label: "Open To New Projects",
      title: "Have Something in Mind?",
      titleAction: "Let's Build It.",
      copy: "Fullstack product work, frontend systems, internal tools, or XR prototypes — if you're building something thoughtful, I'd love to hear about it."
    }
  },
  es: {
    nav: {
      about: "Perfil",
      experience: "Experiencia",
      education: "Formación",
      projects: "Proyectos",
      research: "Investigación",
      skills: "Habilidades",
      contact: "Contacto"
    },
    actions: {
      downloadCv: "Descargar CV",
      emailMe: "Escríbeme",
      emailAbel: "Escribir a Abel",
      getInTouch: "Hablemos",
      viewWork: "Ver proyectos",
      openLinkedin: "Ver LinkedIn",
      openProject: "Ver proyecto",
      visit: "Visitar",
      toTop: "Ir al inicio",
      skip: "Saltar al contenido principal",
      language: "Idioma"
    },
    hero: {
      role: "Desarrollador Fullstack e Ingeniero de Producto",
      copy: "Construyo productos de punta a punta — frontend, backend, móvil y XR — y me obsesiono con los detalles que los hacen intuitivos y memorables.",
      profile: {
        role: "Fullstack y Producto",
        focus: "Producto · Diseño · XR",
        base: "Bogotá, Colombia",
        status: "Trabajando en Creditop"
      }
    },
    about: {
      eyebrow: "Perfil",
      title: "Sobre Abel",
      paragraphs: [
        "Soy ingeniero fullstack en Bogotá. Construyo de la base de datos a los píxeles, y trato el diseño como parte de la ingeniería — no como algo que se pega al final.",
        "Llegué a la ingeniería desde el diseño gráfico y de movimiento, y esa mezcla todavía marca cómo trabajo: productos de startup, herramientas internas y demos de investigación que tienen que ser claros, no solo funcionales."
      ],
      photoAlt: "Retrato de Abel Arismendy"
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Dónde He Trabajado",
      intro: "Unos años entre startups y un laboratorio de investigación universitario — ingeniería de producto, fullstack y XR.",
      items: [
        {
          period: "May 2025 - Actualidad",
          title: "Desarrollador de Software",
          company: "Creditop",
          summary:
            "Reconstruí el frontend web de Creditop desde cero con un stack más escalable, y sumé observabilidad y analítica de producto para que el equipo entregue con confianza. También trabajo en el backend, llevando funcionalidades de la idea a producción."
        },
        {
          period: "Ago 2024 - Mar 2025",
          title: "Ingeniero de Producto",
          company: "Samsam",
          summary:
            "Entregué funcionalidades en varias apps, reconstruí una herramienta interna de creación de productos con NestJS y Retool, y monté ingesta de datos con categorización por IA para comercios outlet."
        },
        {
          period: "Ene 2023 - Jul 2024",
          title: "Asistente de Investigación — Grupo IMAGINE",
          company: "Universidad de los Andes",
          summary:
            "Rediseñé y construí el sitio del grupo IMAGINE y la plataforma Vivero Virtual, y formé a más de 112 personas en cuatro bootcamps de XR."
        },
        {
          period: "Feb 2023 - Jul 2024",
          title: "Cofundador y Líder",
          company: "Oasis",
          summary:
            "Cofundé una iniciativa de aprendizaje en realidad mixta, definí su marca y di clases a grupos de hasta 50 estudiantes en nuestros talleres de XR."
        }
      ]
    },
    education: {
      eyebrow: "Formación",
      title: "Cómo Me Formé",
      intro: "Un título de ingeniería, más diseño y desarrollo frontend que fui sumando en el camino.",
      items: [
        {
          period: "2020 - 2025",
          title: "Ingeniería de Sistemas y Computación",
          place: "Universidad de los Andes",
          detail: "Bases en algoritmos, estructuras de datos y diseño de software (Java, Python, SQL)."
        },
        {
          title: "Diseño y Desarrollo Web",
          place: "Platzi",
          detail: "Frontend, CSS Grid, motion design e Illustrator."
        },
        {
          title: "Diseño Web",
          place: "SENA",
          detail: "Certificación en diseño de páginas web."
        }
      ]
    },
    projects: {
      eyebrow: "Trabajo Seleccionado",
      title: "Proyectos",
      intro: "Una selección de productos e investigación — desde una app de finanzas personales hasta gemelos digitales en realidad mixta.",
      items: [
        {
          name: "Chamo",
          href: "https://www.chamo.co",
          description:
            "App de finanzas personales que organiza tus gastos automáticamente: lee los correos del banco o capturas, los categoriza y te deja aprobar cada uno con un toque y planear con presupuestos por sobres.",
          tags: ["Ingeniería de Producto", "Finanzas", "Next.js"],
        },
        {
          name: "Digital Twin Networking Lab",
          href: "https://imagine.uniandes.edu.co/research/mixed-reality/88",
          description:
            "Gemelo digital multi-interfaz del Laboratorio de Redes ML340, que une IoT, AR, VR, WebXR y tableros web para el monitoreo en tiempo real.",
          tags: ["Realidad Mixta", "IoT", "WebXR"],
        },
        {
          name: "Colivri Digital Twin",
          href: "https://imagine.uniandes.edu.co/research/mixed-reality/48",
          description:
            "Plataforma abierta y extensible para experimentar con gemelos digitales en COLIVRI — monitoreo en tiempo real, simulaciones audiovisuales, contexto AR de equipos y datos históricos.",
          tags: ["Realidad Mixta", "Gemelo Digital", "Investigación"],
        },
        {
          name: "IMAGINE Website Redesign",
          href: "https://imagine.uniandes.edu.co/people/abelarismendy",
          description:
            "Rediseño y reconstrucción completa del sitio del grupo de investigación IMAGINE, mientras fui asistente de investigación en la Universidad de los Andes.",
          tags: ["React", "Investigación", "Design System"],
        },
        {
          name: "Vivero Virtual",
          href: "https://viverovirtual.uniandes.edu.co/",
          description:
            "El sitio de la iniciativa de aprendizaje y bootcamps de XR de la Universidad de los Andes, construido y entregado de punta a punta.",
          tags: ["Web", "XR", "Educación"],
        }
      ]
    },
    research: {
      eyebrow: "Comunidades",
      title: "Grupos de Investigación",
      intro: "Las comunidades que moldearon mi forma de trabajar en realidad mixta, visión por computador, IA y robótica social.",
      items: [
        {
          name: "Oasis",
          href: "https://instagram.com/oasis.uniandes",
          focus: "Aprendizaje en Realidad Mixta",
          summary: "Cofundador y ex líder de una iniciativa estudiantil enfocada en el aprendizaje inmersivo.",
          icon: Boxes
        },
        {
          name: "SinfonIA",
          href: "https://sinfoniauniandes.github.io/SinfonIA-web/home",
          focus: "IA y Robótica Social",
          summary:
            "Lideré el área de percepción de un robot social tipo Pepper, y competimos en la RoboCup 2023 en Burdeos — segundo lugar en nuestra categoría.",
          icon: BrainCircuit
        },
        {
          name: "IMAGINE",
          href: "https://imagine.uniandes.edu.co/",
          focus: "Visión por Computador y Realidad Mixta",
          summary:
            "Comunidad de investigación en procesamiento de imágenes, visualización y realidad mixta de la Universidad de los Andes.",
          icon: Sparkles
        }
      ]
    },
    skills: {
      eyebrow: "Capacidades",
      title: "Habilidades y Herramientas",
      intro: "El stack al que recurro para lanzar productos web, herramientas con datos y prototipos inmersivos.",
      groups: [
        {
          title: "Frontend",
          icon: Code2,
          items: ["React", "Next.js", "React Router", "Vue.js", "TypeScript", "Tailwind CSS"]
        },
        {
          title: "Backend y Datos",
          icon: Database,
          items: ["NestJS", "Python", "SQL", "Retool", "Ingesta de datos", "Categorización con IA"]
        },
        {
          title: "Móvil y Producto",
          icon: Palette,
          items: ["React Native", "Flutter", "Estrategia de producto", "Herramientas internas", "Figma"]
        },
        {
          title: "XR y Diseño",
          icon: TerminalSquare,
          items: ["Unity", "C#", "Realidad Mixta", "Visualización por computador", "Adobe Suite"]
        }
      ]
    },
    contact: {
      label: "Abierto a Nuevos Proyectos",
      title: "¿Tienes Algo en Mente?",
      titleAction: "Construyámoslo.",
      copy: "Trabajo fullstack de producto, sistemas frontend, herramientas internas o prototipos XR. Si estás creando algo con intención, cuéntame."
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
