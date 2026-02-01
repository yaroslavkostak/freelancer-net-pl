import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Зв'яжіться з нами",
  description: "Контакт Freelancer.org.pl. Питання про фріланс у Польщі, JDG, бухгалтерію, ZUS. Зв'яжіться з нами.",
  keywords: "контакт фрілансер Польща, JDG бухгалтерія, infakt контакт, підтримка фрілансер",
  openGraph: {
    title: "Зв'яжіться з нами",
    description: "Контакт Freelancer.org.pl. Питання про фріланс у Польщі, JDG, бухгалтерію.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/ukr/contact/",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/ukr/contact/",
  },
}

export default function UkrContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
