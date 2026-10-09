import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import type { Blog } from "./blog-data"

type BlogListItemProps = {
  blog: Blog
}

export function BlogListItem({ blog }: BlogListItemProps) {
  return (
    <article className="flex items-center justify-between gap-6">
      <Link href={`/blog/${blog.slug}`} className="group">
        <div className="min-w-0">
          <h3 className="font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
            {blog.title}
          </h3>

          <p className="text-sm text-muted-foreground">{blog.description}</p>

          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-3" />
            <time>{blog.date}</time>
          </div>
        </div>
      </Link>

      <Link
        href={`/blog/${blog.slug}`}
        className="my-auto flex shrink-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Read more
        <ArrowRight className="size-4" />
      </Link>
    </article>
  )
}
