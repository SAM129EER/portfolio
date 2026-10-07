"use client";

import { motion } from "motion/react";

import type { Technology } from "./experience-data";

type ExperienceTechnologyProps = {
  technology: Technology;
};

export function ExperienceTechnology({
  technology,
}: ExperienceTechnologyProps) {
  return (
    <motion.div
      initial={{ width: 36 }}
      whileHover={{ width: "auto" }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative z-0
        flex h-9
        items-center
        gap-2
        overflow-hidden
        rounded-md
        border border-dashed
        px-2
        text-muted-foreground
        transition-colors
        hover:z-10
        hover:bg-muted
        hover:text-foreground
      "
    >
      {/* Icon will go here */}
      <div className="size-4 shrink-0" />

      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{
          duration: 0.15,
          delay: 0.02,
        }}
        className="
          max-w-32
          overflow-hidden
          whitespace-nowrap
          text-xs
          font-medium
        "
      >
        {technology.name}
      </motion.span>
    </motion.div>
  );
}