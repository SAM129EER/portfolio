import { TechIcon } from "@/components/icons"

const featuredTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
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
            className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-muted/30 px-2 py-0.5 text-xs font-medium text-muted-foreground font-jetbrains transition-colors hover:bg-muted hover:text-foreground"
          >
            <TechIcon name={tech} className="size-3.5" />
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
