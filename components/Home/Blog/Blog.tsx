import { Container } from "@/components/Common/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
import { blogData } from "./blog-data"
import { BlogListItem } from "./BlogListItem"

const Blog = () => {
  return (
    <Container>
      <section className="">
        <h1 className="text-xl font-semibold tracking-tight pb-4">Blog</h1>

        <div className="space-y-6 pb-4">
          {blogData.slice(0, 3).map((blog) => (
            <BlogListItem key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex items-center justify-center pb-4">
          <Button variant="outline" className={"p-2"}>
            <Link href="/work">Show all blogs</Link>
          </Button>
        </div>
      </section>
    </Container>
  )
}

export default Blog
