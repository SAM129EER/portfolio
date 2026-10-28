import Link from "next/link"
import { ArrowLeft, Film } from "lucide-react"
import { Container } from "@/components/Common/container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Movies & Shows",
  description: "Films and shows that have inspired and entertained me.",
}

const media = [
  {
    title: "Interstellar",
    genre: "Sci-Fi / Space",
    year: "2014",
    note: "Exploration, relativity, endurance, and human perseverance set to Hans Zimmer's iconic score.",
  },
  {
    title: "The Dark Knight",
    genre: "Action / Thriller",
    year: "2008",
    note: "Masterpiece in psychological depth, chaos theory, and timeless cinematic tension.",
  },
  {
    title: "Mr. Robot",
    genre: "Cyberpunk / Drama",
    year: "2015-2019",
    note: "One of the most technically authentic representations of cybersecurity, paranoia, and identity.",
  },
  {
    title: "Silicon Valley",
    genre: "Tech Comedy",
    year: "2014-2019",
    note: "Hilarious, razor-sharp parody of startup culture, engineering tradeoffs, and venture capital.",
  },
]

export default function MoviesPage() {
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
            <h1 className="text-2xl font-bold tracking-tight">Movies & Shows</h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Films, sci-fi epics, and series that inspire my creativity and imagination.
            </p>
          </header>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/50 bg-card p-4 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground font-jetbrains mb-1">
                <span className="flex items-center gap-1.5">
                  <Film className="size-3.5" />
                  {item.genre}
                </span>
                <span>{item.year}</span>
              </div>
              <h2 className="text-base font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
