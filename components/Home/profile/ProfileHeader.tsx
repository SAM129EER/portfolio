import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, MapPin } from "lucide-react"

export function ProfileHeader() {
  return (
    <>
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/profileLight.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Information */}
        <div className="flex flex-col gap-0.5">
          <h1 className="text-2xl font-bold whitespace-nowrap text-foreground">
            Sameer Jangid
          </h1>
          <p className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground">
            <span className="">Engineer | Developer</span>
            <span className="">.</span>

            <span className="">jangidsameer77@gmail.com</span>

            <Button variant="ghost" size="icon-xs" aria-label="Copy email">
              <Copy />
            </Button>
          </p>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} />
              India
            </p>
            <p className="flex items-center text-sm text-muted-foreground">
              Time
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
