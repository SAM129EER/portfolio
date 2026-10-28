import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/button"
import { blogData } from "./blog-data"
import { BlogCard } from "@/components/Blog/BlogCard"

export default function Blog() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">Blog</h2>

      <div className="space-y-2 divide-y divide-border/30">
        {blogData.slice(0, 3).map((blog) => (
          <div key={blog.id} className="pt-2 first:pt-0">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-2">
        <Link
          href="/blog"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Show all blogs
        </Link>
      </div>
    </section>
  )
}
