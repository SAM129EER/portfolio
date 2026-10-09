"use client"

import { useEffect, useState } from "react"

const quotes = [
  {
    text: "If the pain doesn't kill me, it will only make me stronger.",
    author: "Sung Jin-Woo",
    source: "Solo Leveling",
  },
  {
    text: "It's not who I am underneath, but what I do that defines me.",
    author: "Bruce Wayne",
    source: "Batman Begins",
  },
  {
    text: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    author: "Rocky Balboa",
    source: "Rocky Balboa",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
]

export function Quote() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuoteIndex(randomIndex)
  }, [])

  const quote = quotes[quoteIndex]

  return (
    <figure className="relative overflow-hidden rounded-xl border p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -left-1 font-serif text-[160px] leading-none text-foreground/50 select-none"
      >
        “
      </span>

      <blockquote className="relative space-y-2 pt-2 font-mono text-sm text-muted-foreground italic sm:text-base">
        <p>{quote.text}</p>

        <figcaption className="text-right">
          — {quote.author}
          {quote.source && `, ${quote.source}`}
        </figcaption>
      </blockquote>
    </figure>
  )
}
