import { Container } from "@/components/Common/container"
import { blogData } from "@/components/Home/Blog/blog-data"
import { BlogList } from "@/components/Blog/BlogList"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, technical deep dives, and practical insights into engineering, architecture, and developer tools.",
}

export default function BlogPage() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-10">
        {/* Page Header */}
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Thoughts, technical deep dives, and practical insights into
            engineering, architecture, and developer tools.
          </p>
        </header>

        {/* Blog Interactive List */}
        <section>
          <BlogList blogs={blogData} />
        </section>
      </div>
    </Container>
  )
}
