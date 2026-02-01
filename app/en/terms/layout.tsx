import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use of Freelancer.org.pl. Rules for using the freelancing in Poland guide.",
  keywords: "terms of use, site rules, freelancer Poland, guide",
  openGraph: {
    title: "Terms of use",
    description: "Terms of use of Freelancer.org.pl. Rules for using the service.",
    type: "website",
    locale: "en_US",
    url: "https://freelancer.org.pl/en/terms/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/en/terms/",
  },
}

export default function EnTermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
