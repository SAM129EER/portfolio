import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type TechIconProps = {
  name: string
  className?: string
}

// Map normalized technology names to their PNG icon in /public/tech-icon-png/
const TECH_PNG_MAP: Record<string, string> = {
  // Cloud & DevOps
  aws: "/tech-icon-png/icons8-aws-48.png",
  amazon: "/tech-icon-png/icons8-aws-48.png",
  amazonwebservices: "/tech-icon-png/icons8-aws-48.png",
  docker: "/tech-icon-png/icons8-docker-24.png",
  dockerhub: "/tech-icon-png/icons8-docker-24.png",
  git: "/tech-icon-png/icons8-git-48.png",
  github: "/tech-icon-png/icons8-git-48.png",
  linux: "/tech-icon-png/icons8-linux-48.png",
  ubuntu: "/tech-icon-png/icons8-linux-48.png",
  postman: "/tech-icon-png/icons8-postman-inc-24.png",
  postmaninc: "/tech-icon-png/icons8-postman-inc-24.png",
  vercel: "/tech-icon-png/icons8-vercel-50.png",

  // Core Languages
  typescript: "/tech-icon-png/icons8-typescript-24.png",
  ts: "/tech-icon-png/icons8-typescript-24.png",
  javascript: "/tech-icon-png/icons8-javascript-48.png",
  js: "/tech-icon-png/icons8-javascript-48.png",
  python: "/tech-icon-png/icons8-python-48.png",
  py: "/tech-icon-png/icons8-python-48.png",
  java: "/tech-icon-png/icons8-java-48.png",
  html: "/tech-icon-png/icons8-html5-24.png",
  html5: "/tech-icon-png/icons8-html5-24.png",
  css: "/tech-icon-png/icons8-css-24.png",
  css3: "/tech-icon-png/icons8-css-24.png",

  // Frontend Frameworks & Styling
  react: "/tech-icon-png/icons8-react-24.png",
  reactjs: "/tech-icon-png/icons8-react-24.png",
  next: "/tech-icon-png/icons8-next.js-48.png",
  nextjs: "/tech-icon-png/icons8-next.js-48.png",
  tailwind: "/tech-icon-png/icons8-tailwindcss-48.png",
  tailwindcss: "/tech-icon-png/icons8-tailwindcss-48.png",
  figma: "/tech-icon-png/icons8-figma-48.png",

  // Backend & APIs
  node: "/tech-icon-png/icons8-nodejs-48.png",
  nodejs: "/tech-icon-png/icons8-nodejs-48.png",
  express: "/tech-icon-png/icons8-express-js-50.png",
  expressjs: "/tech-icon-png/icons8-express-js-50.png",

  // Databases & ORMs
  postgresql: "/tech-icon-png/icons8-postgresql-24.png",
  postgres: "/tech-icon-png/icons8-postgresql-24.png",
  sql: "/tech-icon-png/icons8-mysql-24.png",
  mysql: "/tech-icon-png/icons8-mysql-24.png",
  prisma: "/tech-icon-png/icons8-prisma-orm-50.png",
  prismaorm: "/tech-icon-png/icons8-prisma-orm-50.png",
  mongodb: "/tech-icon-png/icons8-mongo-db-48.png",
  mongo: "/tech-icon-png/icons8-mongo-db-48.png",
  mongoose: "/tech-icon-png/icons8-mongoose-48.png",
  redis: "/tech-icon-png/icons8-redis-48.png",
  supabase: "/tech-icon-png/icons8-supabase-48.png",
}

// Dark icons that should invert in dark mode to remain visible
const INVERT_IN_DARK = new Set([
  "express",
  "expressjs",
  "prisma",
  "prismaorm",
  "vercel",
])

export function TechIcon({ name, className = "size-4" }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s\.\-_/]/g, "")

  // Check if a dedicated PNG exists in /public/tech-icon-png/
  const pngSrc = TECH_PNG_MAP[normalized]
  if (pngSrc) {
    const shouldInvert = INVERT_IN_DARK.has(normalized)
    return (
      <Image
        src={pngSrc}
        alt={`${name} icon`}
        width={24}
        height={24}
        className={cn(
          "inline-block object-contain shrink-0",
          shouldInvert && "dark:invert",
          className
        )}
        unoptimized
      />
    )
  }

  // Fallback SVGs for items without dedicated PNGs (e.g. shadcn, motion, zod)
  switch (normalized) {
    case "shadcnui":
    case "shadcn":
      return (
        <svg
          viewBox="0 0 256 256"
          className={cn("inline-block shrink-0", className)}
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case "zod":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cn("inline-block shrink-0", className)}
          fill="#3E67B1"
          aria-hidden="true"
        >
          <path d="M21.2 3.8H2.8A1 1 0 0 0 2 5v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-.8-1.2zM17 16.5H7v-2l6-5.5H7v-2h10v2l-6 5.5h6v2z" />
        </svg>
      )

    case "reacthookform":
    case "hookform":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cn("inline-block shrink-0", className)}
          fill="none"
          stroke="#EC5990"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#EC5990" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )

    case "motion":
    case "framermotion":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cn("inline-block shrink-0", className)}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      )

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={cn("inline-block shrink-0", className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}
