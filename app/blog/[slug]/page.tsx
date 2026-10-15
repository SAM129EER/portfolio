import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import { Container } from "@/components/Common/container"
import { blogData } from "@/components/Home/Blog/blog-data"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = blogData.find((b) => b.slug === slug)

  if (!blog) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Sameer Jangid"],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogData.find((b) => b.slug === slug)

  if (!blog) {
    notFound()
  }

  return (
    <Container>
      <article className="flex flex-col space-y-8 pt-8 px-4 pb-16">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to all blogs
          </Link>

          <header className="space-y-4 border-b border-border/40 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-jetbrains">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5" />
                <time dateTime={blog.date}>{blog.date}</time>
              </div>

              {blog.readingTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  <span>{blog.readingTime}</span>
                </div>
              )}
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/50 bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
        </div>

        <div className="space-y-6 leading-relaxed text-muted-foreground">
          <p className="text-base text-foreground font-medium">
            {blog.description}
          </p>

          <div className="rounded-xl border border-dashed border-border/60 p-8 text-center text-sm text-muted-foreground">
            Full article content is in draft and will be published soon.
          </div>
        </div>
      </article>
    </Container>
  )
}
