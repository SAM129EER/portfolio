"use client"

import { motion } from "motion/react"
import { TechIcon } from "@/components/icons"
import type { Technology } from "./experience-data"

type ExperienceTechnologyProps = {
  technology: Technology
}

const textVariants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  hover: {
    opacity: 1,
    width: "auto",
  },
}

export function ExperienceTechnology({
  technology,
}: ExperienceTechnologyProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative z-0 flex h-9 w-9 items-center gap-2 overflow-hidden rounded-md border border-dashed px-2 text-foreground transition-colors hover:z-10 hover:w-auto hover:bg-muted"
    >
      {/* Icon */}
      <TechIcon name={technology.name} className="size-4 shrink-0" />

      <motion.span
        variants={textVariants}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="shrink-0 overflow-hidden text-xs font-medium whitespace-nowrap"
      >
        {technology.name}
      </motion.span>
    </motion.div>
  )
}
