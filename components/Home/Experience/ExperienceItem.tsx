"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

import type { Experience } from "./experience-data"
import { ExperienceTechnology } from "./ExperienceTechnology"


type ExperienceItemProps = {
  experience: Experience
  defaultOpen?: boolean
}

export function ExperienceItem({
  experience,
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article className="group/card">
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Left side */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{experience.company}</h3>

            {experience.working && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-green-600 bg-green-500/10 px-2 py-1 text-xs font-medium text-foreground dark:text-foreground">
                <span className="size-1.5 rounded-full  bg-green-400 animate-pulse" />
                Working
              </span>
            )}

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label={
                open
                  ? `Collapse ${experience.company}`
                  : `Expand ${experience.company}`
              }
              className="relative flex size-5 items-center justify-center rounded-md bg-muted opacity-0 transition-colors group-hover/card:opacity-100 hover:bg-muted/80"
            >
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            {experience.role}
          </p>
        </div>

        {/* Right side */}
        <div className="text-right text-sm text-muted-foreground">
          <p>{experience.time}</p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Details */}
      {open && (
        <div className="mt-4 border-t pt-4">
          <div className="space-y-6">
            {/* Technologies */}
            <div>
              <h4 className="mb-3 font-semibold">Technologies & Tools</h4>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <ExperienceTechnology
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="mb-2 font-semibold">What I've done</h4>

              <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                {experience.achievements.map((achievement) => (
                  <li className="tracking-tight" key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
