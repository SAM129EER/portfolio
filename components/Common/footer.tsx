import Link from "next/link"

import {
  XIcon,
  LinkedInIcon,
  GitHubIcon,
  MediumIcon,
  GmailIcon,
} from "@/components/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Container } from "./container"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Movies", href: "/movies" },
  { label: "Resume", href: "/resume" },
]

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/jangidsameer77",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sameerjangid-5501753a0/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/SAM129EER",
    icon: GitHubIcon,
  },
  {
    name: "Medium",
    href: "https://medium.com/@jangidsameer77",
    icon: MediumIcon,
  },
  {
    name: "Email",
    href: "mailto:jangidsameer77@gmail.com",
    icon: GmailIcon,
  },
]

export function Footer() {
  return (
    <footer className="mt-16 pb-6 border-t bg-card">
      <Container>
        <div className="space-y-6  pt-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold">Navigation</h3> 

              <nav
                aria-label="Footer navigation"
                className="grid grid-cols-2 gap-x-6 gap-y-2.5"
              >
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold">Contact</h3>

              <Link
                href="mailto:jangidsameer77@gmail.com"
                className="text-sm break-words text-muted-foreground transition-colors hover:text-foreground"
              >
                jangidsameer77@gmail.com
              </Link>

              <p className="text-sm text-muted-foreground">
                Find me around the web
              </p>

              <nav
                aria-label="Social links"
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Tooltip key={name}>
                    <TooltipTrigger>
                      <Link
                        href={href}
                        aria-label={name}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Icon className="size-4" />
                      </Link>
                    </TooltipTrigger>

                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-4 mb-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sameer Jangid. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
