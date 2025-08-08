import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців",
  description: "Повний гід з składka zdrowotna (внесок на охорону здоров'я) в Польщі для українських підприємців. Розрахунки, ставки, терміни оплати та льготи для JDG.",
  keywords: "składka zdrowotna, внесок здоров'я польща, JDG податки, NFZ, українці польща, розрахунок składka, ставки 2025, ryczałt, podatek liniowy",
  openGraph: {
    title: "Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців",
    description: "Повний гід з składka zdrowotna (внесок на охорону здоров'я) в Польщі для українських підприємців. Розрахунки, ставки, терміни оплати та льготи для JDG.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/skladka-zdrowotna-guide/",
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Податки та внески",
    tags: ["składka zdrowotna", "NFZ", "JDG", "українці", "польща", "податки"],
    images: [
      {
        url: "https://freelancer.org.pl/images/skladka-zdrowotna-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Składka zdrowotna в Польщі 2025: розрахунок та оплата",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Składka zdrowotna в Польщі 2025: розрахунок та оплата для українців",
    description: "Повний гід з składka zdrowotna (внесок на охорону здоров'я) в Польщі для українських підприємців. Розрахунки, ставки, терміни оплати та льготи для JDG.",
    images: ["https://freelancer.org.pl/images/skladka-zdrowotna-guide-og.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/skladka-zdrowotna-guide/",
  },
}

export default function SkladkaZdrowotnaGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
