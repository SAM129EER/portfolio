import React from "react"
import { Container } from "@/components/Common/container"

export default function BlogPage() {
  return (
    <Container>
      <div className="flex flex-col space-y-4 pt-8 px-4">
        <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
        <p className="text-sm text-muted-foreground">Welcome to the Blog page!</p>
      </div>
    </Container>
  )
}
