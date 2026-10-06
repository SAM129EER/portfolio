export function Music() {
  return (
    <>
      {/* Now Playing */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Last played</span>

        <span className="font-medium">Song Name</span>

        <span className="text-muted-foreground">· Artist Name</span>
      </div>
    </>
  )
}
