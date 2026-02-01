import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact Freelancer.org.pl. Questions about freelancing in Poland, JDG, accounting, ZUS. Get in touch.",
  keywords: "contact freelancer Poland, JDG accounting, infakt contact, freelancer support",
  openGraph: {
    title: "Contact us",
    description: "Contact Freelancer.org.pl. Questions about freelancing in Poland, JDG, accounting.",
    type: "website",
    locale: "en_US",
    url: "https://freelancer.org.pl/en/contact/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/en/contact/",
  },
}

export default function EnContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
