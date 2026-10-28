import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-12">
        {/* Profile Section Skeleton */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Skeleton className="size-24 shrink-0 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-3.5 w-36" />
            </div>
          </div>
          <Skeleton className="h-4 w-full max-w-lg" />
          <Skeleton className="h-4 w-52" />
          <div className="flex items-center gap-2 pt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="size-8 rounded-md" />
            ))}
          </div>
        </section>

        {/* Experience Section Skeleton */}
        <section className="space-y-4 pt-2">
          <Skeleton className="h-6 w-32" />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section Skeleton */}
        <section className="space-y-4 pt-2">
          <Skeleton className="h-6 w-20" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2 rounded-xl p-3">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
