"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { GitHubIcon, TechIcon } from "@/components/icons"
import type { Project } from "./projects-data"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
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
      className="group relative -m-2.5 flex cursor-pointer flex-col rounded-2xl p-2.5 transition-all duration-500 ease-out sm:-m-3 sm:p-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background that emerges smoothly on hover */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 rounded-2xl transition-all duration-500 ease-out",
          isHovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        style={{
          backgroundColor: project.accentBg,
        }}
      />

      {/* 1. Image / Video on hover (16:9 Thumbnail) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/80 shadow-xs">
        {/* Loading skeleton placeholder */}
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 size-full rounded-xl" />
        )}

        {/* Normal Picture */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "object-cover transition-all duration-700 ease-out",
            imageLoaded ? "opacity-100" : "opacity-0",
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
              isHovered ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          />
        )}
      </div>

      {/* 2. Title & Description */}
      <div className="flex flex-1 flex-col justify-between space-y-2.5 pt-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-base leading-snug">
              {project.title}
            </h3>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex items-center gap-1 shrink-0 pt-0.5">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    title={tech}
                    className="flex size-5 items-center justify-center rounded-md bg-foreground/5 p-0.5 transition-transform hover:scale-110 dark:bg-white/5"
                  >
                    <TechIcon name={tech} className="size-3.5" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 3. GitHub & Live Buttons */}
        <div
          className="grid grid-cols-2 gap-2 pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-foreground/5 py-2 text-xs font-medium text-foreground shadow-xs transition-all hover:bg-foreground/10 active:scale-95 dark:bg-white/5 dark:hover:bg-white/10"
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
              className="flex items-center justify-center gap-1.5 rounded-md bg-foreground py-2 text-xs font-medium text-background shadow-xs transition-all hover:opacity-90 active:scale-95"
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
