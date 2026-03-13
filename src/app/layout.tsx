import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "IP-6 Research, Inc. | IP6 + Inositol: Nature's Medicine for the New Millennium",
  description:
    "IP-6 Research, Inc. is dedicated to advancing scientific knowledge of IP6 + Inositol (Inositol Hexaphosphate), a naturally occurring compound with powerful immune support, antioxidant, and cellular health benefits backed by decades of peer-reviewed research.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bone text-ink antialiased">
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
