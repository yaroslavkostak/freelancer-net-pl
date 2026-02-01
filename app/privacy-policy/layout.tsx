import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności Freelancer.org.pl. Jak zbieramy, wykorzystujemy i chronimy Twoje dane.",
  keywords: "polityka prywatności, RODO, ochrona danych, freelancer Polska",
  openGraph: {
    title: "Polityka prywatności",
    description: "Polityka prywatności Freelancer.org.pl. Ochrona danych i RODO.",
    type: "website",
    locale: "pl_PL",
    url: "https://freelancer.org.pl/privacy-policy/",
    images: [
      { url: "/images/dashboard-screenshot.jpg", width: 1200, height: 630, alt: "Freelancer.org.pl" },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/privacy-policy/",
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
