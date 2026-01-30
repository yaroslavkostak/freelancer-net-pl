import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./analytics"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Przewodnik po freelancingu w Polsce | Pomysły i poradniki",
  description:
            "Odkryj najlepsze pomysły na freelancing w Polsce. Przewodnik po kategoriach freelancingu, wymaganiach prawnych i rozwiązaniach księgowych. Recenzje i poradniki dla freelancerów.",
  keywords:
        "freelancing w Polsce, pomysły na freelancing, freelancer Polska, działalność gospodarcza, JDG, księgowość dla freelancerów, infakt, jak zacząć freelancing",
      openGraph: {
      title: "Przewodnik po freelancingu w Polsce | Pomysły i poradniki",
      description:
        "Odkryj najlepsze pomysły na freelancing w Polsce. Przewodnik po kategoriach freelancingu, wymaganiach prawnych i rozwiązaniach księgowych.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/hero-accountants.png",
        width: 1200,
        height: 630,
        alt: "Przewodnik po freelancingu w Polsce",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon-if.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon-fr.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
        <StructuredData />
      </body>
    </html>
  )
}
