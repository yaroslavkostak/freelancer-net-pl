import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Калькулятор податків для українців у Польщі 2025: повний гід",
  description: "Детальний гід з розрахунку податків в Польщі для українців. Калькулятори PIT, VAT, ZUS та інших податків з актуальними ставками 2025 року.",
  keywords: "калькулятор податків польща, pit калькулятор, vat калькулятор, zus калькулятор, податки україна польща, розрахунок податків польща",
  openGraph: {
    title: "Калькулятор податків для українців у Польщі 2025: повний гід",
    description: "Детальний гід з розрахунку податків в Польщі для українців. Калькулятори PIT, VAT, ZUS та інших податків з актуальними ставками 2025 року.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/tax-calculator-guide",
    images: [
      {
        url: "https://freelancer.org.pl/images/tax-calculator-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор податків для українців у Польщі 2025",
      },
    ],
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Податки",
    tags: ["калькулятор податків", "PIT", "VAT", "ZUS", "Польща", "українці"],
    authors: ["inFakt"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор податків для українців у Польщі 2025: повний гід",
    description: "Детальний гід з розрахунку податків в Польщі для українців. Калькулятори PIT, VAT, ZUS та інших податків з актуальними ставками 2025 року.",
    images: ["https://freelancer.org.pl/images/tax-calculator-guide-og.jpg"],
    creator: "@freelancer_org_pl",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/tax-calculator-guide",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": 200,
    "max-video-preview": 30,
  },
  category: "Податки",
}

export default function TaxCalculatorGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
