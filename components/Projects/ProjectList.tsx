"use client"

import { useMemo, useState } from "react"
import { Search, X, FolderGit2 } from "lucide-react"
import { ProjectCard } from "./ProjectCard"
import type { Project } from "./projects-data"
import { Button } from "@/components/ui/button"

type ProjectListProps = {
  projects: Project[]
}

const CATEGORIES = ["All", "Full Stack", "Frontend", "AI & Tools", "Open Source"] as const

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory

      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        project.categoryTag?.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [projects, selectedCategory, searchQuery])

  const handleReset = () => {
    setSelectedCategory("All")
    setSearchQuery("")
  }

  return (
    <div className="space-y-6">
      {/* Search & Category Filter Header (YouTube Chips Bar Style) */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, tech stack, or topic..."
            className="h-10 w-full rounded-xl border border-input bg-background/50 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-foreground text-background shadow-xs"
                    : "border border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Counter & Status Line */}
      <div className="flex items-center justify-between border-b border-border/40 pb-2 text-xs text-muted-foreground font-jetbrains">
        <span>
          {filteredProjects.length === projects.length
            ? `All Projects (${projects.length})`
            : `Showing ${filteredProjects.length} of ${projects.length} projects`}
        </span>
        {(searchQuery || selectedCategory !== "All") && (
          <button
            type="button"
            onClick={handleReset}
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Projects Grid (YouTube-style tight spacing) */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 pt-1">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 p-12 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
            <FolderGit2 className="size-6" />
          </div>
          <h3 className="text-base font-semibold text-foreground">
            No projects found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            No projects match &ldquo;{searchQuery}&rdquo;
            {selectedCategory !== "All" && ` in ${selectedCategory}`}.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
