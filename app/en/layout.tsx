import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Work Legally as a Freelancer in Poland 2026?",
  description:
    "How to work legally as a freelancer in Poland in 2026? JDG, unregistered activity, ZUS, taxes, B2B contracts. Step-by-step practical guide.",
  keywords:
    "freelancer Poland 2026, how to work legally as freelancer, JDG registration, unregistered activity Poland, ZUS freelancer, freelance taxes Poland, B2B contract, legal work Poland",
  openGraph: {
    title: "How to Work Legally as a Freelancer in Poland 2026?",
    description:
      "How to work legally as a freelancer in Poland in 2026? JDG, ZUS, taxes, B2B contracts. Step-by-step practical guide.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-accountants.png",
        width: 1200,
        height: 630,
        alt: "Freelancer in Poland 2026 - guide",
      },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/en/",
    languages: { "pl": "https://freelancer.org.pl/", "uk": "https://freelancer.org.pl/ukr/", "en": "https://freelancer.org.pl/en/" },
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
