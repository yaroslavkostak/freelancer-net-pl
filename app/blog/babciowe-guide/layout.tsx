import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям",
  description: "Повна інструкція про babciowe (активне батьківство) в Польщі для українців. Умови, суми виплат, необхідні документи та як правильно подати wniosek o babciowe.",
  keywords: "babciowe польща, aktywne rodzicielstwo, wniosek o babciowe, українці польща, соціальна допомога, świadczenie, żłobek, opieka nad dziećmi",
  openGraph: {
    title: "Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям",
    description: "Повна інструкція про babciowe (активне батьківство) в Польщі для українців. Умови, суми виплат, необхідні документи та як правильно подати wniosek o babciowe.",
    type: "article",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/blog/babciowe-guide/",
    publishedTime: "2025-01-27T00:00:00.000Z",
    modifiedTime: "2025-01-27T00:00:00.000Z",
    section: "Соціальна допомога",
    tags: ["babciowe", "aktywne rodzicielstwo", "українці", "польща", "соціальна допомога"],
    images: [
      {
        url: "https://freelancer.org.pl/images/babciowe-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Babciowe в Польщі 2025: як подати wniosek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babciowe в Польщі 2025: як подати wniosek та отримати допомогу українцям",
    description: "Повна інструкція про babciowe (активне батьківство) в Польщі для українців. Умови, суми виплат, необхідні документи та як правильно подати wniosek o babciowe.",
    images: ["https://freelancer.org.pl/images/babciowe-guide-og.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/blog/babciowe-guide/",
  },
}

export default function BabcioweGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
