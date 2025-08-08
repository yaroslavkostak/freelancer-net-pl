import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Податкові зміни 2025 року в Польщі: JDG та Spółka z o.o. - inFakt",
  description: "Детальний аналіз податкових змін 2025 року в Польщі для JDG та Spółka z o.o. Нові ставки, вільна сума 30,000 PLN, калькулятор податків. Консультації українською мовою.",
  keywords: [
    "податкові зміни 2025 польща",
    "jdg податки 2025",
    "spółka z o.o. податки 2025",
    "вільна сума 30000 pln",
    "податкові ставки польща 2025",
    "бухгалтерія польща українці",
    "податковий калькулятор польща",
    "infakt податки",
    "податкове планування польща",
    "соціальні внески польща 2025"
  ],
  openGraph: {
    title: "Податкові зміни 2025 року в Польщі: JDG та Spółka z o.o. - inFakt",
    description: "Детальний аналіз податкових змін 2025 року в Польщі для JDG та Spółka z o.o. Нові ставки, вільна сума 30,000 PLN, калькулятор податків.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/tax-changes-2025",
    siteName: "Freelancer.org.pl",
    images: [
      {
        url: "https://freelancer.org.pl/images/tax-changes-2025-og.jpg",
        width: 1200,
        height: 630,
        alt: "Податкові зміни 2025 року в Польщі - JDG та Spółka z o.o.",
      },
    ],
            publishedTime: "2025-01-27T00:00:00.000Z",
        modifiedTime: "2025-01-27T00:00:00.000Z",
    authors: ["inFakt"],
    section: "Податки",
    tags: ["податки", "польща", "2025", "jdg", "spółka z o.o.", "бухгалтерія"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Податкові зміни 2025 року в Польщі: JDG та Spółka z o.o.",
    description: "Детальний аналіз податкових змін 2025 року в Польщі для JDG та Spółka z o.o. Нові ставки, вільна сума 30,000 PLN.",
    images: ["https://freelancer.org.pl/images/tax-changes-2025-twitter.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/tax-changes-2025",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "inFakt",
      url: "https://www.infakt.pl",
    },
  ],
  category: "Податки",
  other: {
            "article:published_time": "2025-01-27T00:00:00.000Z",
        "article:modified_time": "2025-01-27T00:00:00.000Z",
    "article:section": "Податки",
    "article:tag": "податки, польща, 2025, jdg, spółka z o.o., бухгалтерія",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 