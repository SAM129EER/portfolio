import { Container } from "@/components/Common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function WorkLoading() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 px-4 pt-8 pb-12">
        <div className="space-y-2">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-4 w-72" />
        </div>

        <div className="space-y-6 pt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3 rounded-xl border border-border/40 p-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-4 w-32" />
              <div className="space-y-2 pt-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
