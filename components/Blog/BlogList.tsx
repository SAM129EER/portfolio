"use client"

import { useMemo, useState } from "react"
import { Search, X, BookOpen } from "lucide-react"
import { type Blog } from "@/components/Home/Blog/blog-data"
import { BlogCard } from "./BlogCard"
import { Button } from "@/components/ui/button"

type BlogListProps = {
  blogs: Blog[]
}

export function BlogList({ blogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showMore, setShowMore] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string>("All")

  // Extract unique tags from blogs
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    blogs.forEach((blog) => {
      blog.tags?.forEach((tag) => tagsSet.add(tag))
    })
    return ["All", ...Array.from(tagsSet)]
  }, [blogs])

  const visibleTags = showMore ? allTags : allTags.slice(0, 8)

  // Filtered blogs based on search query and selected tag
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.tags?.some((t) => t.toLowerCase().includes(query))

      const matchesTag =
        selectedTag === "All" || (blog.tags && blog.tags.includes(selectedTag))

      return matchesSearch && matchesTag
    })
  }, [blogs, searchQuery, selectedTag])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedTag("All")
  }

  return (
    <div className="space-y-6">
      {/* Search & Filter Toolbar */}
      <div className="space-y-3">
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, description, or topic..."
            className="h-10 w-full rounded-xl border border-input bg-background/50 pr-9 pl-9 text-sm text-foreground transition-all outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Tag Filters */}
        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {visibleTags.map((tag) => {
            const isActive = selectedTag === tag

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border/60 bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            )
          })}

          {allTags.length > 8 && (
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              className="rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {showMore ? "Less" : "More"}
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="font-jetbrains flex items-center justify-between border-b pb-2 text-xs text-muted-foreground">
        <span>
          {filteredBlogs.length === blogs.length
            ? `All Articles (${blogs.length})`
            : `Showing ${filteredBlogs.length} of ${blogs.length} articles`}
        </span>
        {(searchQuery || selectedTag !== "All") && (
          <button
            type="button"
            onClick={handleClearFilters}
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Blogs List */}
      {filteredBlogs.length > 0 ? (
        <div className="space-y-2 divide-y divide-border/30">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="pt-2 first:pt-0">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 p-12 text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <BookOpen className="size-6" />
          </div>
          <h3 className="text-base font-semibold text-foreground">
            No articles found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            No posts matched your current search &ldquo;{searchQuery}&rdquo;
            {selectedTag !== "All" && ` in ${selectedTag}`}. Try adjusting your
            keywords or clearing the filter.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearFilters}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
