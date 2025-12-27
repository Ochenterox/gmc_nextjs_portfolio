export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  year: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Innuora",
    slug: "innuora",
    description:
      "Privacy-first, AI-powered conversational platform with structured multi-model workflows, encrypted local-first storage, and adaptive UX.",
    image: "/images/innuora.webp",
    link: "https://www.mohammediabdenasser.com",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "IndexedDB",
      "OpenAI API",
    ],
    year: "2025",
    category: "AI Systems",
  },
  {
    title: "Rentals",
    slug: "rentals",
    description:
      "Property listings and booking platform: search, visits, rent durations, and owner management with secure auth and media handling.",
    image: "/images/rentals.webp",
    link: "https://youtu.be/XBhUkEwwCrY",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
    ],
    year: "2024",
    category: "Full-Stack",
  },
  {
    title: "CoffeeCups",
    slug: "coffeecups",
    description:
      "E-commerce experience for specialty coffee with rich product detail, motion, and a robust backend API for inventory and orders.",
    image: "/images/coffeecups.webp",
    link: "https://www.mohammediabdenasser.com",
    tech: [
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
    ],
    year: "2023",
    category: "Commerce",
  },
  {
    title: "WeShop",
    slug: "weshop",
    description:
      "Modular storefront template with product discovery, cart, and checkout flows designed for small merchants.",
    image: "/images/weshop.webp",
    link: "https://www.mohammediabdenasser.com",
    tech: ["Next.js", "TailwindCSS", "Stripe", "Supabase"],
    year: "2023",
    category: "Frontend",
  },
  {
    title: "BugTracker",
    slug: "bugtracker",
    description:
      "Issue tracking dashboard with role-based permissions, project boards, and analytics for engineering teams.",
    image: "/images/bugtracker.webp",
    link: "https://www.mohammediabdenasser.com",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
    year: "2022",
    category: "Productivity",
  },
];
