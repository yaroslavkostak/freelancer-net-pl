import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "БухОнлайн - Професійні бухгалтерські послуги онлайн | Замовити бухгалтера",
  description:
    "Професійні бухгалтерські послуги онлайн в Україні. Кваліфіковані бухгалтери з досвідом. Ведення обліку, податкова звітність, консультації. Замовити бухгалтера онлайн.",
  keywords:
    "бухгалтер онлайн, бухгалтерські послуги, ведення обліку, податкова звітність, бухгалтер україна, замовити бухгалтера",
  openGraph: {
    title: "БухОнлайн - Професійні бухгалтерські послуги онлайн",
    description:
      "Кваліфіковані бухгалтери з досвідом для вашого бізнесу. Ведення обліку, податкова звітність, консультації.",
    type: "website",
    locale: "uk_UA",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="geo.region" content="UA" />
        <meta name="geo.placename" content="Ukraine" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
