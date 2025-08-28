import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Калькулятор податків 2025 | JDG та Spółka z o.o.",
  description: "Розрахуйте податки для JDG та Spółka z o.o. в Польщі з урахуванням нових змін 2025 року. Вільна сума 30,000 PLN, нові ставки 12% та 32%. Безкоштовний калькулятор від inFakt.",
  keywords: [
    "калькулятор податків польща 2025",
    "розрахунок податків jdg",
    "податковий калькулятор spółka z o.o.",
    "вільна сума 30000 pln калькулятор",
    "податкові ставки 2025 калькулятор",
    "розрахунок податків польща",
    "калькулятор податкових змін",
    "infakt калькулятор",
    "податкове планування калькулятор",
    "розрахунок соціальних внесків польща"
  ],
  openGraph: {
    title: "Калькулятор податків 2025 | JDG та Spółka z o.o.",
    description: "Розрахуйте податки для JDG та Spółka z o.o. в Польщі з урахуванням нових змін 2025 року. Вільна сума 30,000 PLN, нові ставки.",
    type: "website",
    locale: "uk_UA",
    url: "https://freelancer.org.pl/tax-calculator",
    siteName: "Freelancer.org.pl",
    images: [
      {
        url: "https://freelancer.org.pl/images/tax-calculator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Калькулятор податкових змін 2025 року в Польщі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор податкових змін 2025 року в Польщі",
    description: "Розрахуйте податки для JDG та Spółka z o.o. в Польщі з урахуванням нових змін 2025 року.",
    images: ["https://freelancer.org.pl/images/tax-calculator-twitter.jpg"],
  },
  alternates: {
    canonical: "https://freelancer.org.pl/tax-calculator",
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
  other: {
    "application-name": "Калькулятор податків inFakt",
    "apple-mobile-web-app-title": "Калькулятор податків",
    "format-detection": "telephone=no",
  },
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 