import Image from "next/image"
import { Copy } from "lucide-react"

import { Container } from "@/components/Common/container"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "./SocialLinks"

export function Profile() {
  return (
    <Container>
      <section className="flex flex-col gap-4">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="relative size-20 shrink-0 overflow-hidden  rounded-full">
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
            <h1 className="text-xl font-bold whitespace-nowrap text-foreground">
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
          </div>
        </div>

        {/* Short Bio */}
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          I build modern web applications with React, Next.js, TypeScript, and
          Node.js.
        </p>

        {/* Now Playing */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Last played</span>

          <span className="font-medium">Song Name</span>

          <span className="text-muted-foreground">· Artist Name</span>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </section>
    </Container>
  )
}
