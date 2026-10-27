"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { GitHubIcon, TechIcon } from "@/components/icons"
import type { Project } from "./projects-data"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && project.videoUrl) {
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Play was interrupted or auto-play prevented
        })
      }
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="group relative flex flex-col rounded-2xl p-2.5 sm:p-3 -m-2.5 sm:-m-3 transition-all duration-500 ease-out cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background that emerges from behind and fills smoothly on hover */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-2xl -z-10 transition-all duration-500 ease-out pointer-events-none",
          isHovered
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        )}
        style={{
          backgroundColor: project.accentBg,
        }}
      />

      {/* 1. Image / Video on hover (16:9 Thumbnail) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/80 shadow-xs">
        {/* Normal Picture */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
          priority={false}
        />

        {/* Video preview on hover */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          />
        )}

        {/* Top-Left Category Tag
        {project.categoryTag && (
          <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 rounded-md bg-black/75 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white backdrop-blur-md border border-white/10 shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{project.categoryTag}</span>
          </div>
        )} */}

        {/* Bottom-Right Duration Badge (YouTube Style)
        <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1 rounded bg-black/85 px-1.5 py-0.5 font-jetbrains text-[10px] sm:text-[11px] font-medium text-white backdrop-blur-xs">
          {isHovered && project.videoUrl ? (
            <span className="flex items-center gap-1 text-emerald-400">
              <Play className="size-2.5 fill-current" />
              <span>Playing</span>
            </span>
          ) : (
            <span>{project.durationBadge || "Demo"}</span>
          )}
        </div> */}
      </div>

      {/* 2. Middle Row: Title of project on Left, Logos of tech used on Right */}
      <div className="flex flex-1 flex-col justify-between pt-3 space-y-2.5">
        <div>
          <div className="flex items-start justify-between gap-2.5">
            {/* Title */}
            <h3 className="line-clamp-1 text-sm sm:text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
              {project.title}
            </h3>

            {/* Logos of tech used */}
            {/* <div className="flex items-center gap-1 shrink-0 pt-0.5">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  title={tech}
                  className="flex size-6 items-center justify-center rounded-md bg-foreground/5 dark:bg-white/5 text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                >
                  <TechIcon name={tech} className="size-3.5" />
                </div>
              ))}
            </div> */}
          </div>

          {/* Description */}
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 3. Bottom Row: GitHub & Live Buttons */}
        <div
          className="grid grid-cols-2 gap-2 pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 py-2 text-xs font-medium text-foreground transition-all active:scale-95 shadow-xs"
            >
              <GitHubIcon className="size-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-foreground text-background hover:opacity-90 py-2 text-xs font-medium transition-all active:scale-95 shadow-xs"
            >
              <ExternalLink className="size-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
