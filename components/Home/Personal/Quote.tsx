"use client"

import { useState, useSyncExternalStore } from "react"

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

const emptySubscribe = () => () => {}

export function Quote() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length))

  const quote = quotes[isClient ? quoteIndex : 0]

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-xs dark:border-border/50">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -left-1 select-none font-serif text-[150px] leading-none text-foreground/8 dark:text-foreground/10"
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
