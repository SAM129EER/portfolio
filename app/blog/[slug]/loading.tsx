import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-16">
        <Skeleton className="h-4 w-32" />

        <div className="space-y-4 border-b border-border/40 pb-6">
          <Skeleton className="h-8 w-4/5 sm:h-10" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-2 pt-1">
            <Skeleton className="h-5 w-16 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </div>
    </Container>
  )
}
