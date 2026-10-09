"use client";

import { motion } from "motion/react";

import type { Technology } from "./experience-data";

type ExperienceTechnologyProps = {
  technology: Technology;
};

const textVariants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  hover: {
    opacity: 1,
    width: "auto",
  },
};

export function ExperienceTechnology({
  technology,
}: ExperienceTechnologyProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="
        relative z-0
        flex h-9
        w-9
        items-center
        gap-2
        overflow-hidden
        rounded-md
        border border-dashed
        px-2
        text-foreground
        transition-colors
        hover:z-10
        hover:w-auto
        hover:bg-muted
      "
    >
      {/* Icon */}
      <div className="size-4 shrink-0" />

      <motion.span
        variants={textVariants}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          shrink-0
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