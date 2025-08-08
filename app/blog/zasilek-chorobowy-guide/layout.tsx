import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі",
  description: "Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. Калькулятор, умови, ставки та практичні приклади.",
  keywords: "zasiłek chorobowy, лікарняні польща, JDG хворобливий, калькулятор zasiłek, українці польща, ZUS, niezdolność do pracy",
  openGraph: {
    title: "Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі",
    description: "Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. Калькулятор, умови, ставки та практичні приклади.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/zasilek-chorobowy-guide/",
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Соціальні виплати",
    tags: ["zasiłek chorobowy", "лікарняні", "JDG", "українці", "польща", "ZUS"],
    images: [
      {
        url: "https://freelancer.org.pl/images/zasilek-chorobowy-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор zasiłku chorobowego для JDG 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор zasiłku chorobowego для JDG 2025: розрахунок лікарняних в Польщі",
    description: "Повний гід з розрахунку zasiłek chorobowy (лікарняних) для українських підприємців JDG в Польщі. Калькулятор, умови, ставки та практичні приклади.",
    images: ["https://freelancer.org.pl/images/zasilek-chorobowy-guide-og.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/zasilek-chorobowy-guide/",
  },
}

export default function ZasilekChorobowyGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
