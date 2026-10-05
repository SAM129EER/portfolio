import Link from "next/link";

import {
  XIcon,
  LinkedInIcon,
  GitHubIcon,
  MediumIcon,
  GmailIcon,
} from "@/components/icons";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/yourusername",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: GitHubIcon,
  },
  {
    name: "Medium",
    href: "https://medium.com/@yourusername",
    icon: MediumIcon,
  },
  {
    name: "Email",
    href: "mailto:you@example.com",
    icon: GmailIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Tooltip key={social.name}>
            <TooltipTrigger >
              <Link
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                className="relative flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={social.name}
              >
                <Icon className="size-5" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              {social.name}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}