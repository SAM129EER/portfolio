import Link from "next/link"
import { Search } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Resume",
    href: "/resume",
  },
]

export function Navbar() {
  return (
    <header className="py-4">
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
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-full px-2"
            >
              <Search className="size-3" />

              <kbd className="pointer-events-none rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                Ctrl
              </kbd>

              <kbd className="pointer-events-none rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                K
              </kbd>
            </Button>

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
