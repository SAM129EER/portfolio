import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Common/navbar"
import { TooltipProvider } from "@/components/ui/tooltip"
import OnekoCat from "@/components/OnekoCat"

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
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
