import { Container } from "@/components/Common/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
import { blogData } from "./blog-data"
import { BlogCard } from "@/components/Blog/BlogCard"

export default function Blog() {
  return (
    <Container>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Blog</h2>

        <div className="divide-y divide-border/30 space-y-2">
          {blogData.slice(0, 3).map((blog) => (
            <div key={blog.id} className="pt-2 first:pt-0">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pt-2">
          <Button variant="outline" className="p-2">
            <Link href="/blog">Show all blogs</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}
