import "./globals.css"
import "lenis/dist/lenis.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Common/navbar"
import { Container } from "@/components/Common/container"
import { TooltipProvider } from "@/components/ui/tooltip"
import OnekoCat from "@/components/OnekoCat"
import { Footer } from "@/components/Common/footer"
import { Quote } from "@/components/Home/Personal/Quote"
import { SmoothScroll } from "@/components/Common/smooth-scroll"

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
            <SmoothScroll>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Container className="px-4 py-8">
                  <Quote />
                </Container>
                <Footer />
              </div>
              <OnekoCat />
              <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-10 border-t border-border/20 bg-background/25 [mask-image:linear-gradient(to_bottom,transparent,black_35%)] backdrop-blur-xl"
              />
            </SmoothScroll>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
