import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакти | Freelancer.org.pl",
  description: "Контактна інформація inFakt для українців у Польщі. Зверніться до нас з питань бухгалтерії, реєстрації JDG, ведення обліку та податкових консультацій українською мовою.",
  keywords: "контакти infakt, бухгалтер українською польща, консультації бухгалтерія, зв'язок infakt, підтримка українською, краków infakt",
  openGraph: {
    title: "Контакти - Freelancer.org.pl | Зв'язок з inFakt",
    description: "Контактна інформація inFakt для українців у Польщі. Бухгалтерські послуги та консультації українською мовою.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/contact",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Контакти inFakt для українців у Польщі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти - Freelancer.org.pl | Зв'язок з inFakt",
    description: "Контактна інформація inFakt для українців у Польщі. Бухгалтерські послуги українською мовою.",
    images: ["/images/contact-hero.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
