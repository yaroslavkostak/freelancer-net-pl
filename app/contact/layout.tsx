import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skontaktuj się z nami",
  description: "Kontakt Freelancer.org.pl. Pytania o freelancing w Polsce, JDG, księgowość, ZUS. Skontaktuj się z nami.",
  keywords: "kontakt freelancer Polska, JDG księgowość, infakt kontakt, wsparcie freelancer",
  openGraph: {
    title: "Skontaktuj się z nami",
    description: "Kontakt Freelancer.org.pl. Pytania o freelancing w Polsce, JDG, księgowość.",
    type: "website",
    locale: "pl_PL",
    url: "https://freelancer.org.pl/contact/",
    images: [
      {
        url: "/images/dashboard-screenshot.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt Freelancer.org.pl",
      },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/contact/",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
