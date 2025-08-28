import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Система оподаткування для фрілансерів у Польщі 2025",
  description: "Повний гід по системах оподаткування для фрілансерів у Польщі у 2025 році. Ryczałt, лінійний PIT, загальна шкала - що вигідніше?",
  keywords: "система оподаткування польща, фрілансер польща, ryczałt 2025, лінійний PIT, податки фрілансер",
  openGraph: {
    title: "Система оподаткування для фрілансерів у Польщі 2025",
    description: "Повний гід по системах оподаткування для фрілансерів у Польщі у 2025 році. Ryczałt, лінійний PIT, загальна шкала - що вигідніше?",
    type: "article",
    locale: "uk_UA",
    images: [
      {
        url: "/images/tax-system-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Система оподаткування для фрілансерів у Польщі - калькулятор та документи",
      },
    ],
  },
};

export default function TaxSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
