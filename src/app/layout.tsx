import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Created by Sameer Jangid",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-neutral-100 dark:bg-neutral-800">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
