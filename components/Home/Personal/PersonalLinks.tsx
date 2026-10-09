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
      className="group flex items-center justify-between gap-4 rounded-xl border bg-card p-3 transition-colors hover:bg-muted/50"
    >
      <div className="min-w-0 space-y-1">
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100" />
    </Link>
  )
}
