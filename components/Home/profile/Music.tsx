import { Headphones } from "lucide-react"

export function Music() {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground font-jetbrains">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 shadow-2xs transition-all hover:border-foreground/20 dark:border-border/50 dark:bg-muted/30">
        <Headphones className="size-3 text-emerald-500 animate-pulse" />
        <span className="text-muted-foreground/80">Listening to</span>
        <span className="font-medium text-foreground">Starboy</span>
        <span>·</span>
        <span className="text-muted-foreground">The Weeknd</span>
      </div>
    </div>
  )
}
