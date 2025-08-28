import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stawki ryczałtu 2025 в Польщі | Нові ставки для українців",
  description: "Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. Повна таблиця ставок, умови застосування та практичні приклади розрахунків.",
  keywords: "stawki ryczałtu 2025, ryczałt ewidencjonowany, JDG ryczałt, українці польща, податки 2025, paušalny podatok, tabela stawek",
  openGraph: {
    title: "Stawki ryczałtu 2025 в Польщі | Нові ставки для українців",
    description: "Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. Повна таблиця ставок, умови застосування та практичні приклади розрахунків.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/stawki-ryczalt-2025/",
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Податки",
    tags: ["stawki ryczałtu", "ryczałt ewidencjonowany", "JDG", "українці", "польща", "податки"],
    images: [
      {
        url: "https://freelancer.org.pl/images/stawki-ryczalt-2025-og.jpg",
        width: 1200,
        height: 630,
        alt: "Stawki ryczałtu 2025 в Польщі: нові ставки та розрахунки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stawki ryczałtu 2025 в Польщі | Нові ставки для українців",
    description: "Актуальні stawki ryczałtu ewidencjonowanego на 2025 рік в Польщі для українських підприємців. Повна таблиця ставок, умови застосування та практичні приклади розрахунків.",
    images: ["https://freelancer.org.pl/images/stawki-ryczalt-2025-og.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/stawki-ryczalt-2025/",
  },
}

export default function StawkiRyczaltGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
