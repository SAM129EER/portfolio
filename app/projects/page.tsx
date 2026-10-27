import { Container } from "@/components/Common/container"
import { projectsData } from "@/components/Projects/projects-data"
import { ProjectList } from "@/components/Projects/ProjectList"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of full-stack web applications, interactive interfaces, developer tools, and open-source projects.",
}

export default function ProjectsPage() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 pt-8 px-4 pb-10">
        {/* Page Header */}
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A showcase of web applications, developer tooling, and interactive systems.
          </p>
        </header>

        {/* Projects Feed */}
        <section>
          <ProjectList projects={projectsData} />
        </section>
      </div>
    </Container>
  )
}