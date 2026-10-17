import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Blog } from "@/components/Home/Blog/blog-data"

type BlogCardProps = {
  blog: Blog
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group relative -mx-4 rounded-xl border border-transparent p-4 transition-colors hover:border-border/40 hover:bg-muted/40">
      {/* Top Metadata */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <div className="font-jetbrains flex items-center gap-2">
          <time dateTime={blog.date}>{blog.date}</time>
          {blog.readingTime && (
            <>
              <span className="text-muted-foreground/40">•</span>
              <span>{blog.readingTime}</span>
            </>
          )}
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/50 bg-background/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Title & External/Internal Arrow */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {blog.title}
        </h2>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>

      {/* Description */}
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {blog.description}
      </p>

      {/* Clickable full overlay link */}
      <Link
        href={`/blog/${blog.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Read article: ${blog.title}`}
      >
        <span className="sr-only">Read {blog.title}</span>
      </Link>
    </article>
  )
}
