import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Блог про бухгалтерію в Польщі - Корисні статті для українців",
  description: "Корисні статті про ведення бізнесу, податки та бухгалтерський облік для українців у Польщі. Актуальна інформація про податкові зміни та ведення бізнесу.",
  keywords: "блог бухгалтерія польща, статті податки польща, бухгалтерський облік українців, податкові зміни 2025",
  openGraph: {
    title: "Блог про бухгалтерію в Польщі - Корисні статті для українців",
    description: "Корисні статті про ведення бізнесу, податки та бухгалтерський облік для українців у Польщі.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog",
    images: [
      {
        url: "/images/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Блог про бухгалтерію в Польщі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог про бухгалтерію в Польщі - Корисні статті для українців",
    description: "Корисні статті про ведення бізнесу, податки та бухгалтерський облік для українців у Польщі.",
    images: ["/images/blog-hero.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
