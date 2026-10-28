import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ResumeLoading() {
  return (
    <Container>
      <div className="flex flex-col space-y-10 px-4 pt-8 pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/40 pb-6">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48 sm:h-9" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-3.5 w-44" />
          </div>
          <Skeleton className="h-9 w-32 rounded-xl" />
        </div>

        {/* Summary */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <Skeleton className="h-4 w-32" />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-28" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
