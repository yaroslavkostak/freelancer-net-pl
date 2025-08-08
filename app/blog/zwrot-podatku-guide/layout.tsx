import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Як отримати zwrot podatku в Польщі 2025: повна інструкція українською",
  description: "Детальна інструкція як отримати повернення податку (zwrot podatku) в Польщі для українців. Умови, документи, терміни та покрокова процедура з поясненням польських термінів.",
  keywords: "zwrot podatku польща, повернення податку польща, переплата податків, pit-37 декларація, українці польща податки, rozliczenie pit",
  openGraph: {
    title: "Як отримати zwrot podatku в Польщі 2025: повна інструкція українською",
    description: "Детальна інструкція як отримати повернення податку (zwrot podatku) в Польщі для українців. Умови, документи, терміни та покрокова процедура з поясненням польських термінів.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/zwrot-podatku-guide",
    images: [
      {
        url: "https://freelancer.org.pl/images/zwrot-podatku-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Як отримати zwrot podatku в Польщі 2025",
      },
    ],
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Податки",
    tags: ["zwrot podatku", "повернення податку", "PIT декларація", "Польща", "українці", "rozliczenie"],
    authors: ["inFakt"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Як отримати zwrot podatku в Польщі 2025: повна інструкція українською",
    description: "Детальна інструкція як отримати повернення податку (zwrot podatku) в Польщі для українців. Умови, документи, терміни та покрокова процедура.",
    images: ["https://freelancer.org.pl/images/zwrot-podatku-guide-og.jpg"],
    creator: "@freelancer_org_pl",
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/zwrot-podatku-guide",
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

export default function ZwrotPodatkuGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
