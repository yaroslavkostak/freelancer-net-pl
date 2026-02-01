import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin serwisu Freelancer.org.pl. Warunki korzystania z przewodnika o freelancingu w Polsce.",
  keywords: "regulamin, warunki korzystania, freelancer Polska, przewodnik",
  openGraph: {
    title: "Regulamin",
    description: "Regulamin Freelancer.org.pl. Warunki korzystania z serwisu.",
    type: "website",
    locale: "pl_PL",
    url: "https://freelancer.org.pl/terms/",
    images: [
      { url: "/images/dashboard-screenshot.jpg", width: 1200, height: 630, alt: "Freelancer.org.pl" },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/terms/",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
