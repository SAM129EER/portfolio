import Link from "next/link"

import { Container } from "@/components/Common/container"
import { Button } from "@/components/ui/button"

import { experienceData } from "./experience-data"
import { ExperienceItem } from "./ExperienceItem"

export default function Experience() {
  return (
    <Container>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>

        <div className="space-y-6">
          {experienceData.slice(0, 3).map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Button variant="outline" className={"p-2"}>
            <Link href="/work" >Show all work experiences</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
