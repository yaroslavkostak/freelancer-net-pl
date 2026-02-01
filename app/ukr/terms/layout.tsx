import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Умови використання",
  description: "Умови використання сервісу Freelancer.org.pl. Правила користування гідом з фрілансу в Польщі.",
  keywords: "умови використання, правила сайту, фрілансер Польща, гід",
  openGraph: {
    title: "Умови використання",
    description: "Умови використання Freelancer.org.pl. Правила користування сервісом.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/ukr/terms/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/ukr/terms/",
  },
}

export default function UkrTermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
