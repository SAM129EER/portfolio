export type Technology = {
  name: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  working: boolean;
  time: string;
  location: string;
  technologies: Technology[];
  achievements: string[];
};

export const experienceData: Experience[] = [
  {
    id: "techflow",
    company: "TechFlow",
    role: "Full Stack Developer",
    working: true,
    time: "March 2025 – August 2025",
    location: "Bangalore, India (Hybrid)",

    technologies: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "TypeScript",
      },
      {
        name: "React",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Prisma",
      },
      {
        name: "Docker",
      },
      {
        name: "Postman",
      },
      {
        name: "Figma",
      },
      {
        name: "Vercel",
      },
    ],

    achievements: [
      "Built and maintained scalable web applications using React, TypeScript, and Node.js.",
      "Designed REST APIs and integrated PostgreSQL databases for core application features.",
      "Improved application performance by optimizing API requests and frontend rendering.",
    ],
  },

  {
    id: "nexora",
    company: "Nexora Technologies",
    role: "Frontend Engineer",
    working: false,
    time: "January 2024 – February 2025",
    location: "Pune, India (Remote)",

    technologies: [
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React Hook Form",
      },
      {
        name: "Zod",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "Figma",
      },
      {
        name: "Vercel",
      },
    ],

    achievements: [
      "Developed responsive and accessible interfaces using React and TypeScript.",
      "Created reusable UI components and established consistent design patterns across the application.",
      "Collaborated with designers and backend engineers to deliver new product features.",
      "Reduced unnecessary client-side requests by implementing efficient data-fetching and caching strategies.",
    ],
  },

  {
    id: "vertex",
    company: "Vertex Labs",
    role: "Software Engineer Intern",
    working: false,
    time: "June 2023 – December 2023",
    location: "Delhi, India (On-Site)",

    technologies: [
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
      {
        name: "JavaScript",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Postman",
      },
      {
        name: "Docker",
      },
    ],

    achievements: [
      "Developed internal dashboards and tools used by multiple teams.",
      "Implemented backend endpoints and database operations for internal applications.",
      "Fixed bugs and contributed to code reviews, testing, and documentation.",
    ],
  },
];