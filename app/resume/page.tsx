import React from 'react'
import { Container } from '@/components/Common/container'

export default function ResumePage() {
  return (
    <Container>
      <div className="flex flex-col space-y-4 pt-8 px-4">
        <h1 className="text-2xl font-bold tracking-tight">Resume</h1>
        <p className="text-sm text-muted-foreground">Welcome to the Resume page!</p>
      </div>
    </Container>
  )
}
