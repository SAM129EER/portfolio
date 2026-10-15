export type Project = {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl?: string
  accentBg: string // Deep ambient shade like #151929 for behind-fill hover effect
  techStack: string[]
  durationBadge?: string
  categoryTag?: string
  category: "Full Stack" | "Frontend" | "AI & Tools" | "Open Source"
  liveUrl?: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    id: "cinematic-portfolio",
    title: "Cinematic 3D Developer Portfolio with Smooth Parallax",
    description: "An immersive developer portfolio experience built with Three.js, React Three Fiber, and Lenis smooth scrolling.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    accentBg: "#151929", // Deep subtle midnight blue as specified by user
    techStack: ["Next.js", "React", "Tailwind CSS"],
    durationBadge: "9:52",
    categoryTag: "React.js",
    category: "Frontend",
    liveUrl: "https://github.com/SAM129EER/portfolio",
    githubUrl: "https://github.com/SAM129EER/portfolio",
  },
  {
    id: "ai-code-companion",
    title: "AI Codebase Indexer & Semantic Context Engine",
    description: "High-performance vector retrieval and AST chunking system enabling instant natural language codebase intelligence.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    accentBg: "#141e20", // Deep teal-slate
    techStack: ["TypeScript", "Node.js", "Docker"],
    durationBadge: "3:32",
    categoryTag: "AI & ML",
    category: "AI & Tools",
    liveUrl: "https://github.com/SAM129EER",
    githubUrl: "https://github.com/SAM129EER",
  },
  {
    id: "dev-analytics-dashboard",
    title: "Real-Time Cloud Telemetry & Microservices Monitor",
    description: "Scalable telemetry dashboard visualizing distributed traces, server health metrics, and automated alerts.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    accentBg: "#161b2b", // Deep navy-slate
    techStack: ["Next.js", "PostgreSQL", "Prisma"],
    durationBadge: "4:15",
    categoryTag: "Full Stack",
    category: "Full Stack",
    liveUrl: "https://github.com/SAM129EER",
    githubUrl: "https://github.com/SAM129EER",
  },
  {
    id: "minimal-cms-framework",
    title: "Headless Markdown Documentation Engine",
    description: "Lightweight, blazingly fast documentation CMS supporting MDX, KaTeX math, syntax highlighting, and offline sync.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    accentBg: "#1e1a16", // Deep amber-slate
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    durationBadge: "2:24",
    categoryTag: "Open Source",
    category: "Open Source",
    liveUrl: "https://github.com/SAM129EER",
    githubUrl: "https://github.com/SAM129EER",
  },
  {
    id: "fintech-payment-portal",
    title: "Enterprise Multi-Currency Checkout Gateway",
    description: "Secure, idempotent checkout orchestration handling webhooks, PCI compliance, and multi-tenant billing tiers.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    accentBg: "#1a1626", // Deep purple-slate
    techStack: ["Node.js", "Express", "PostgreSQL"],
    durationBadge: "5:40",
    categoryTag: "Backend",
    category: "Full Stack",
    liveUrl: "https://github.com/SAM129EER",
    githubUrl: "https://github.com/SAM129EER",
  },
  {
    id: "tactile-ui-library",
    title: "Tactile UI: Physics-Based Component Kit",
    description: "Accessible, keyboard-first React component primitives crafted with fluid spring animations and haptic-feel feedback.",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    accentBg: "#20161d", // Deep rose-slate
    techStack: ["React", "shadcn/ui", "Figma"],
    durationBadge: "1:50",
    categoryTag: "UI System",
    category: "Frontend",
    liveUrl: "https://github.com/SAM129EER",
    githubUrl: "https://github.com/SAM129EER",
  },
]
