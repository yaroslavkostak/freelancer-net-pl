import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wie Sie legal als Freelancer in Polen 2026 arbeiten?",
  description:
    "Wie Sie legal als Freelancer in Polen 2026 arbeiten? JDG, nicht angemeldete Tätigkeit, ZUS, Steuern, B2B-Verträge. Praktischer Leitfaden Schritt für Schritt für Deutsche, Österreicher und andere.",
  keywords:
    "Freelancer Polen 2026, legal als Freelancer arbeiten, JDG Anmeldung, nicht angemeldete Tätigkeit, ZUS Freelancer, Steuern Freelancing Polen, B2B Vertrag, legale Arbeit Polen",
  openGraph: {
    title: "Wie Sie legal als Freelancer in Polen 2026 arbeiten?",
    description:
      "Wie Sie legal als Freelancer in Polen 2026 arbeiten? JDG, ZUS, Steuern, B2B-Verträge. Praktischer Leitfaden für Deutsche, Österreicher und andere.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/dashboard-screenshot.jpg",
        width: 1200,
        height: 630,
        alt: "Freelancer in Polen 2026 – Leitfaden",
      },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/de/",
    languages: { "pl": "https://freelancer.org.pl/", "uk": "https://freelancer.org.pl/ukr/", "en": "https://freelancer.org.pl/en/", "de": "https://freelancer.org.pl/de/" },
  },
}

export default function DeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
