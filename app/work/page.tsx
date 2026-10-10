import { Container } from "@/components/Common/container"
import { experienceData } from "@/components/Home/Experience/experience-data"
import { ExperienceItem } from "@/components/Home/Experience/ExperienceItem"

export default function WorkPage() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 pt-8 px-4 pb-12">
        <section className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Work Experience</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              A detailed timeline of companies, roles, technologies, and accomplishments.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {experienceData.map((experience) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                defaultOpen={true}
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
