import { TechIcon } from "@/components/icons"

const featuredTech = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Shadcn/ui",
  "Python",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Prisma",
  "Git",
]

export function ProfileBio() {
  return (
    <div className="space-y-3">
      {/* Short Bio */}
      <p className="max-w-xl text-sm leading-6 text-muted-foreground">
        I build modern web applications with React, Next.js, TypeScript, and
        Node.js.
      </p>

      {/* Core Tech Stack Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
        {featuredTech.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card px-2 py-1 text-xs font-medium text-foreground/85 font-jetbrains shadow-2xs transition-all hover:bg-muted hover:border-foreground/25 hover:text-foreground dark:border-border/50 dark:bg-muted/30 dark:hover:bg-muted/70"
          >
            <TechIcon name={tech} className="size-4.5 shrink-0" />
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
