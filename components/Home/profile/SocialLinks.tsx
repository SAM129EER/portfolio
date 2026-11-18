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

export function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <Tooltip key={social.name}>
            <TooltipTrigger>
              <Link
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email" ? undefined : "noopener noreferrer"
                }
                className="relative flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground shadow-2xs transition-all hover:bg-muted hover:border-foreground/25 hover:text-foreground active:scale-95 dark:border-border/50 dark:bg-muted/20 dark:hover:bg-muted"
                aria-label={social.name}
              >
                <Icon className="size-5" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>{social.name}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
