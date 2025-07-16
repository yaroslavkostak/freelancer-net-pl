"use client"

import { OptimizedImage } from "./image-optimization"
import { Card, CardContent } from "@/components/ui/card"

const imageGallery = [
  {
    src: "/images/hero-accountants.png",
    alt: "Команда професійних бухгалтерів онлайн",
    title: "Наша команда",
    description: "Досвідчені бухгалтери готові допомогти вашому бізнесу",
  },
  {
    src: "/images/dashboard-interface.png",
    alt: "Інтерфейс системи бухгалтерського обліку",
    title: "Сучасні технології",
    description: "Зручний інтерфейс для управління фінансами",
  },
  {
    src: "/images/mobile-app-preview.png",
    alt: "Мобільний додаток для бухгалтерського обліку",
    title: "Мобільний доступ",
    description: "Керуйте обліком з будь-якого пристрою",
  },
  {
    src: "/images/consultation-meeting.png",
    alt: "Консультація з бухгалтером онлайн",
    title: "Персональні консультації",
    description: "Індивідуальний підхід до кожного клієнта",
  },
]

export function SEOImageGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Чому обирають БухОнлайн</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Сучасні рішення для ефективного ведення бухгалтерського обліку
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {imageGallery.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
