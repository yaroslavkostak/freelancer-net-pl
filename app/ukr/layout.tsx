import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Як легально працювати фрілансером у Польщі 2026? | Гід",
  description:
    "Як легально працювати фрілансером у Польщі в 2026? JDG, нереєстрована діяльність, ZUS, податки, договори B2B. Практичний гід крок за кроком.",
  keywords:
    "фріланс Польща 2026, як легально працювати фрілансером, реєстрація JDG, нереєстрована діяльність, ZUS фрілансер, податки фріланс Польща, договір B2B, легальна робота Польща",
  openGraph: {
    title: "Як легально працювати фрілансером у Польщі 2026? | Гід",
    description:
      "Як легально працювати фрілансером у Польщі в 2026? JDG, ZUS, податки, договори B2B. Практичний гід крок за кроком.",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/images/hero-accountants.png",
        width: 1200,
        height: 630,
        alt: "Фрілансер у Польщі 2026 - гід",
      },
    ],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/ukr/",
  },
}

export default function UkrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
