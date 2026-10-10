"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Clock, Copy, MapPin } from "lucide-react"

export function ProfileHeader() {
  const [time, setTime] = useState<string>("")
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      setTime(`${timeString} IST`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jangidsameer77@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="flex items-center gap-4">
      {/* Profile Image */}
      <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-border/40 shadow-sm">
        <Image
          src="/profileLight.jpg"
          alt="Sameer Jangid profile picture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Information */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap text-foreground">
          Sameer Jangid
        </h1>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>Engineer | Developer</span>
          <span className="text-muted-foreground/40">•</span>
          <span className="inline-flex items-center gap-1">
            <span>jangidsameer77@gmail.com</span>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={handleCopyEmail}
              aria-label="Copy email"
              className="size-5 hover:bg-muted"
            >
              {copied ? (
                <Check className="size-3 text-green-500 transition-transform scale-110" />
              ) : (
                <Copy className="size-3" />
              )}
            </Button>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-jetbrains">
          <div className="flex items-center gap-1">
            <MapPin className="size-3.5 text-muted-foreground shrink-0" />
            <span>India</span>
          </div>

          <span className="text-muted-foreground/40">•</span>

          <div className="flex items-center gap-1">
            <Clock className="size-3.5 text-muted-foreground animate-pulse shrink-0" />
            <span>{time || "Loading..."}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
