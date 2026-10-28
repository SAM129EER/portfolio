import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-10">
        {/* Header Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-72 max-w-full" />
        </div>

        {/* Search & Filter Toolbar Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-10 w-full rounded-xl" />
          <div className="flex flex-wrap gap-1.5 pt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-20 rounded-md" />
            ))}
          </div>
        </div>

        {/* Counter Skeleton */}
        <Skeleton className="h-4 w-40" />

        {/* 2-Column Projects Grid Skeleton */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-7 pt-1 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="aspect-video w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-5/6" />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Skeleton className="h-8 rounded-md" />
                <Skeleton className="h-8 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
