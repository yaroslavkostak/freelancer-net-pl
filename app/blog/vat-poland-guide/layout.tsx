import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VAT в Польщі 2025: основні правила, ставки та обов'язки для підприємців",
  description: "Повний гід з VAT (податок на додану вартість) в Польщі. Ставки VAT, ліміти реєстрації, обов'язки платника, декларації VAT-7, внутрішньоєвропейські операції та практичні поради.",
  keywords: "vat польща, податок на додану вартість, vat ставки польща, реєстрація vat, декларація vat-7, nip польща, вхідний vat, внутрішньоєвропейські операції",
  openGraph: {
    title: "VAT в Польщі 2025: основні правила, ставки та обов'язки для підприємців",
    description: "Повний гід з VAT в Польщі. Ставки VAT, ліміти реєстрації, обов'язки платника, декларації VAT-7, внутрішньоєвропейські операції.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/vat-poland-guide",
    images: [
      {
        url: "/images/vat-poland-guide.jpg",
        width: 1200,
        height: 630,
        alt: "VAT в Польщі - основні правила для підприємців",
      },
    ],
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    authors: ["inFakt"],
    section: "Податки",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT в Польщі 2025: основні правила для підприємців",
    description: "Повний гід з VAT в Польщі. Ставки, ліміти, обов'язки платника, декларації та практичні поради.",
    images: ["/images/vat-poland-guide.jpg"],
    creator: "@infakt",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/vat-poland-guide",
  },
  other: {
    "article:published_time": "2025-01-27T00:00:00.000Z",
    "article:modified_time": "2025-01-27T00:00:00.000Z",
    "article:section": "Податки",
    "article:tag": "vat, податки, польща, декларації, підприємці, nip",
  },
}

export default function VATPolandGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
