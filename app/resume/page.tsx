import { Container } from "@/components/Common/container"
import { experienceData } from "@/components/Home/Experience/experience-data"
import { TechIcon, GitHubIcon } from "@/components/icons"
import { Download, Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Sameer Jangid — Full Stack Developer & Software Engineer. Skills, experience, education, and technical expertise.",
}

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & UI",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Motion"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Docker", "Git", "Postman", "Vercel", "Figma"],
  },
]

export default function ResumePage() {
  return (
    <Container>
      <div className="flex flex-col space-y-10 pt-8 px-4 pb-16">
        {/* Header with Title & Action */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-6">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Sameer Jangid
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              Full Stack Developer & Software Engineer
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground font-jetbrains">
              <span className="flex items-center gap-1">
                <MapPin className="size-3 text-rose-500" />
                India
              </span>
              <span>•</span>
              <a
                href="mailto:jangidsameer77@gmail.com"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Mail className="size-3 text-sky-500" />
                jangidsameer77@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://github.com/SAM129EER"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <GitHubIcon className="size-3" />
                GitHub
              </a>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download="Sameer_Jangid_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/80 px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95 shadow-xs w-fit"
          >
            <Download className="size-3.5" />
            <span>Download CV</span>
          </a>
        </header>

        {/* Professional Summary */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-jetbrains">
            Summary
          </h2>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Full Stack Software Engineer with deep experience building resilient web applications, modern interfaces, and developer-centric systems. Passionate about performant frontend engineering (Next.js, React, TypeScript), clean REST architectures, robust databases, and fluid user experiences.
          </p>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-jetbrains">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experienceData.map((job) => (
              <div key={job.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-foreground text-base">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-xs font-jetbrains text-muted-foreground shrink-0">
                    {job.time}
                  </span>
                </div>

                <ul className="list-disc space-y-1.5 pl-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {job.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1 rounded-md border border-border/40 bg-muted/30 px-2 py-0.5 text-[11px] font-medium text-muted-foreground font-jetbrains"
                    >
                      <TechIcon name={tech.name} className="size-3" />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-jetbrains">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-border/40 bg-muted/20 p-4 space-y-2"
              >
                <h3 className="text-xs font-semibold text-foreground font-jetbrains">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-background/70 px-2 py-0.5 text-[11px] text-muted-foreground font-medium"
                    >
                      <TechIcon name={skill} className="size-3" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-3 border-t border-border/40 pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-jetbrains">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                Bachelor of Technology in Computer Science & Engineering
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Graduated with First Class Distinction
              </p>
            </div>
            <span className="text-xs font-jetbrains text-muted-foreground shrink-0">
              2021 – 2025
            </span>
          </div>
        </section>
      </div>
    </Container>
  )
}
