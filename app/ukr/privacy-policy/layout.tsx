import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description: "Політика конфіденційності Freelancer.org.pl. Як ми збираємо, використовуємо та захищаємо ваші дані.",
  keywords: "політика конфіденційності, RODO, захист даних, фрілансер Польща",
  openGraph: {
    title: "Політика конфіденційності",
    description: "Політика конфіденційності Freelancer.org.pl. Захист даних та RODO.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/ukr/privacy-policy/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/ukr/privacy-policy/",
  },
}

export default function UkrPrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
