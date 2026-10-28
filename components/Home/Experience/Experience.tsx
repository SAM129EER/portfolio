import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { experienceData } from "./experience-data"
import { ExperienceItem } from "./ExperienceItem"

export default function Experience() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">Experience</h2>

      <div className="space-y-6">
        {experienceData.slice(0, 3).map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-2">
        <Link
          href="/work"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Show all work experiences
        </Link>
      </div>
    </section>
  )
}
