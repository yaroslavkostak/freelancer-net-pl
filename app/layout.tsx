import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./analytics"
import CookieConsent from "@/components/cookie-consent"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Бухгалтер в Польщі для українців 2025 | Бухгалтер Варшава, Краків, Вроцлав, Познань",
  description:
    "Професійний бухгалтер в Польщі для українців. Бухгалтер Варшава, бухгалтер Краків, бухгалтер Вроцлав, бухгалтер Познань. Русскоязычный бухгалтер в Польше. Бухгалтер для ФОП. Реєстрація ФОП (JDG) та ТОВ, ведення бухгалтерського обліку, податкові консультації українською мовою. Ціни від 189 zł/міс.",
  keywords:
    "бухгалтер в польщі, бухгалтер польща, бухгалтер варшава, бухгалтер краків, бухгалтер краков, бухгалтер вроцлав, бухгалтер познань, русскоязычный бухгалтер в польше, бухгалтер в польщі для українців, бухгалтер для фоп, бухгалтер польща українців, бухгалтерія польща, фоп польща, бухгалтер українською, infakt, ведення обліку польща, реєстрація бізнесу польща",
      openGraph: {
      title: "Бухгалтер в Польщі для українців 2025 | Бухгалтер Варшава, Краків, Вроцлав, Познань",
      description:
        "Професійний бухгалтер в Польщі для українців. Бухгалтер Варшава, бухгалтер Краків, бухгалтер Вроцлав, бухгалтер Познань. Русскоязычный бухгалтер в Польше. Бухгалтер для ФОП. Реєстрація ФОП (JDG) та ТОВ, ведення бухгалтерського обліку, податкові консультації українською мовою. Ціни від 189 zł/міс.",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/images/hero-accountants.png",
        width: 1200,
        height: 630,
        alt: "Онлайн-бухгалтерія для українців у Польщі",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://freelancer.org.pl/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Freelancer.org.pl" />
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Poland" />
        <meta name="google-site-verification" content="QWKDWq93I0NI6T_OE8oyuLlFz7kMAQIatHxti9IfXX4" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <CookieConsent />
        <StructuredData />
      </body>
    </html>
  )
}
