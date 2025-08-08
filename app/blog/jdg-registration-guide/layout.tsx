import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Як відкрити JDG в Польщі: покрокова інструкція 2025 - Гід для українців",
  description: "Детальна інструкція з реєстрації JDG (індивідуального підприємництва) в Польщі для українців. PKD коди, документи, податки, банківські рахунки - все що потрібно знати.",
  keywords: "jdg польща, реєстрація jdg, індивідуальне підприємництво польща, фоп польща, pkd коди, pesel, документи jdg, бізнес польща українці",
  openGraph: {
    title: "Як відкрити JDG в Польщі: покрокова інструкція 2025 - Гід для українців",
    description: "Детальна інструкція з реєстрації JDG (індивідуального підприємництва) в Польщі для українців. PKD коди, документи, податки, банківські рахунки.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/jdg-registration-guide",
    images: [
      {
        url: "/images/jdg-registration-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Як відкрити JDG в Польщі - покрокова інструкція",
      },
    ],
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    authors: ["inFakt"],
    section: "Бізнес",
  },
  twitter: {
    card: "summary_large_image",
    title: "Як відкрити JDG в Польщі: покрокова інструкція 2025",
    description: "Детальна інструкція з реєстрації JDG в Польщі для українців. PKD коди, документи, податки.",
    images: ["/images/jdg-registration-guide.jpg"],
    creator: "@infakt",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/jdg-registration-guide",
  },
  other: {
    "article:published_time": "2025-01-27T00:00:00.000Z",
    "article:modified_time": "2025-01-27T00:00:00.000Z",
    "article:section": "Бізнес",
    "article:tag": "jdg, польща, підприємництво, українці, реєстрація, бізнес",
  },
}

export default function JDGRegistrationGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
