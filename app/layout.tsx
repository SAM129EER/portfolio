import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Common/navbar"
import { TooltipProvider } from "@/components/ui/tooltip"
import OnekoCat from "@/components/OnekoCat"
import { Footer } from "@/components/Common/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <main className={""}>
              {children}
              <OnekoCat />
            </main>
            <Footer />
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-10 border-t border-border/20 bg-background/25 [mask-image:linear-gradient(to_bottom,transparent,black_35%)] backdrop-blur-xl"
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
