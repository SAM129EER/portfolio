export type Blog = {
  id: string
  title: string
  description: string
  date: string
  slug: string
  readingTime?: string
  tags?: string[]
}

export const blogData: Blog[] = [
  {
    id: "fuck-around-find-out",
    title: "How to Fuck Around and Find Out",
    description:
      "A guide to the unconventional way of learning by experimenting, breaking things, and building intuition.",
    date: "August 22, 2026",
    slug: "how-to-fuck-around-and-find-out",
    readingTime: "5 min read",
    tags: ["Learning", "Philosophy"],
  },
  {
    id: "cursor-code-indexing",
    title: "A deep dive into Cursor’s Code Indexing",
    description:
      "How cursor's code indexing actually works under the hood — embeddings, AST chunking, and semantic vector retrieval.",
    date: "July 28, 2026",
    slug: "cursor-code-indexing",
    readingTime: "8 min read",
    tags: ["AI", "Tools", "Engineering"],
  },
  {
    id: "ai-paralysis",
    title: "The AI Paralysis",
    description:
      "Why having access to infinite AI tools isn't making developers proportionally more productive, and how to stay focused.",
    date: "June 18, 2026",
    slug: "the-ai-paralysis",
    readingTime: "6 min read",
    tags: ["AI", "Productivity"],
  },
  {
    id: "architecting-nextjs-apps",
    title: "Architecting Next.js Apps for Real-World Scale",
    description:
      "Key architectural patterns for modern Next.js: Server Components vs Client Components, caching strategies, and data boundaries.",
    date: "May 14, 2026",
    slug: "architecting-nextjs-apps",
    readingTime: "7 min read",
    tags: ["Next.js", "React", "Engineering"],
  },
  {
    id: "crafting-micro-interactions",
    title: "The Art of Micro-Interactions in Web Apps",
    description:
      "Why the subtle details matter: tactile feedback, spring physics, and building memorable web experiences.",
    date: "April 02, 2026",
    slug: "crafting-micro-interactions",
    readingTime: "4 min read",
    tags: ["UI/UX", "Design"],
  },
  {
    id: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics and Conditional Types",
    description:
      "Level up your TypeScript skills with practical patterns: conditional types, infer keywords, and building type-safe SDKs.",
    date: "March 20, 2026",
    slug: "mastering-typescript-generics",
    readingTime: "9 min read",
    tags: ["TypeScript", "Engineering"],
  },
]
