import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Container } from "@/components/Common/container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Books",
  description: "Books that have influenced my thinking, software craftsmanship, and growth.",
}

const books = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "System Design",
    note: "The definitive guide to distributed data systems, storage engines, and reliability.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    category: "Software Craftsmanship",
    note: "Timeless advice on mindset, automation, refactoring, and career ownership.",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    category: "Software Architecture",
    note: "Core architectural boundaries, dependency inversion, and component design.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Productivity & Growth",
    note: "Systems-first approach to continuous incremental improvement.",
  },
]

export default function BooksPage() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-16">
        <div>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <header className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Books</h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Books that have shaped how I think about systems, engineering, and personal growth.
            </p>
          </header>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-jetbrains mb-1">
                <BookOpen className="size-3.5" />
                <span>{book.category}</span>
              </div>
              <h2 className="text-base font-semibold text-foreground">
                {book.title}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                by {book.author}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                {book.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
