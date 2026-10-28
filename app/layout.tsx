import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Common/navbar"
import { Container } from "@/components/Common/container"
import { TooltipProvider } from "@/components/ui/tooltip"
import OnekoCat from "@/components/OnekoCat"
import { Footer } from "@/components/Common/footer"
import { Quote } from "@/components/Home/Personal/Quote"
import { SmoothScroll } from "@/components/Common/smooth-scroll"

export const metadata: Metadata = {
  metadataBase: new URL("https://sameerjangid.dev"),
  title: {
    default: "Sameer Jangid | Full Stack Developer & Engineer",
    template: "%s | Sameer Jangid",
  },
  description:
    "Portfolio of Sameer Jangid, a Full Stack Developer and Software Engineer building high-performance web applications, interactive interfaces, and developer tooling.",
  keywords: [
    "Sameer Jangid",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Sameer Jangid", url: "https://github.com/SAM129EER" }],
  creator: "Sameer Jangid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerjangid.dev",
    title: "Sameer Jangid | Full Stack Developer & Engineer",
    description:
      "Full Stack Developer building scalable, beautiful web applications with Next.js, React, and TypeScript.",
    siteName: "Sameer Jangid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Jangid | Full Stack Developer & Engineer",
    description:
      "Full Stack Developer building scalable, beautiful web applications with Next.js, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

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
