import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy of Freelancer.org.pl. How we collect, use and protect your data.",
  keywords: "privacy policy, GDPR, data protection, freelancer Poland",
  openGraph: {
    title: "Privacy policy",
    description: "Privacy policy of Freelancer.org.pl. Data protection and GDPR.",
    type: "website",
    locale: "en_US",
    url: "https://freelancer.org.pl/en/privacy-policy/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/en/privacy-policy/",
  },
}

export default function EnPrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
