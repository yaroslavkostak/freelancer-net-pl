import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Analytics from "./analytics"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

function LayoutFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600" style={{ padding: "2rem" }}>
      <p>Ładowanie…</p>
    </div>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL("https://freelancer.org.pl"),
  title: "Jak legalnie pracować jako freelancer w Polsce 2026? | Przewodnik",
  description:
    "Jak legalnie pracować jako freelancer w Polsce w 2026? JDG, działalność nierejestrowana, ZUS, podatki, umowy B2B. Praktyczny przewodnik krok po kroku.",
  keywords:
    "freelancer Polska 2026, jak legalnie pracować freelancer, JDG rejestracja, działalność nierejestrowana, ZUS freelancer, podatki freelancing Polska, umowa B2B, legalna praca Polska",
  openGraph: {
    title: "Jak legalnie pracować jako freelancer w Polsce 2026? | Przewodnik",
    description:
      "Jak legalnie pracować jako freelancer w Polsce w 2026? JDG, ZUS, podatki, umowy B2B. Praktyczny przewodnik krok po kroku.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/hero-accountants.png",
        width: 1200,
        height: 630,
        alt: "Freelancer w Polsce 2026 - przewodnik",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://freelancer.org.pl/",
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
    <html lang="pl" suppressHydrationWarning>
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
      <body className={`${inter.className} bg-white antialiased`} suppressHydrationWarning>
        <noscript>
          <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-gray-700 text-center">
            <p>Włącz JavaScript, aby zobaczyć stronę. Freelancer.org.pl — przewodnik po freelancingu w Polsce.</p>
          </div>
        </noscript>
        <Suspense fallback={<LayoutFallback />}>
          {children}
        </Suspense>
        <Analytics />
        <StructuredData />
      </body>
    </html>
  )
}
