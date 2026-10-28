import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-10">
        {/* Header Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-4 w-80 max-w-full" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-10 w-full rounded-xl" />
          <div className="flex flex-wrap gap-1.5 pt-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-16 rounded-md" />
            ))}
          </div>
        </div>

        {/* Counter Skeleton */}
        <Skeleton className="h-4 w-36" />

        {/* Blog Post List Skeleton */}
        <div className="space-y-4 divide-y divide-border/30">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2.5 pt-4 first:pt-0">
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-4 w-16 rounded-md" />
              </div>
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
