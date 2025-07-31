import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./analytics"
import CookieConsent from "@/components/cookie-consent"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Онлайн-бухгалтерія для українців у Польщі – inFakt",
  description:
    "Зручна онлайн-бухгалтерія для українців у Польщі: реєстрація ФОП, ведення обліку, звіти та підтримка українською.",
  keywords:
    "бухгалтерія польща, фоп польща, бухгалтер українською, infakt, ведення обліку польща, реєстрація бізнесу польща",
  openGraph: {
    title: "Онлайн-бухгалтерія для українців у Польщі – inFakt",
    description:
      "Зручна онлайн-бухгалтерія для українців у Польщі: реєстрація ФОП, ведення обліку, звіти та підтримка українською.",
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
        <link rel="canonical" href="https://freelancer.org.pl" />
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
