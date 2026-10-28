"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Search } from "lucide-react"
import { Container } from "@/components/Common/container"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Resume",
    href: "/resume",
  },
]

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        router.push("/projects")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 py-3 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <nav className="flex items-center justify-between px-4">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/projects"
              aria-label="Search projects (Ctrl+K)"
              className="inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background px-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Search className="size-3.5" />
              <kbd className="pointer-events-none rounded border border-border/80 bg-muted/60 px-1 py-0.5 text-[10px] font-medium text-muted-foreground">
                Ctrl
              </kbd>
              <kbd className="pointer-events-none rounded border border-border/80 bg-muted/60 px-1 py-0.5 text-[10px] font-medium text-muted-foreground">
                K
              </kbd>
            </Link>

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
