import Link from "next/link"
import { ArrowRight } from "lucide-react"

type PersonalLinksProps = {
  title: string
  description: string
  href: string
}

export function PersonalLinks({
  title,
  description,
  href,
}: PersonalLinksProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs transition-all hover:bg-muted/60 hover:border-foreground/25 hover:shadow-xs dark:border-border/60 dark:hover:bg-muted/40"
    >
      <div className="min-w-0 space-y-1">
        <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  )
}
