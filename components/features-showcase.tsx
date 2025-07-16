"use client"

import { CheckCircle } from "lucide-react"
import { ImagePlaceholder } from "./image-placeholder"

export function FeaturesShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Додаток + Бухгалтери</h2>
          <p className="text-gray-600">Поєднання сучасних технологій та професійного досвіду</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Додаток</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Автоматичне створення документів</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Інтеграція з банківськими системами</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Мобільний доступ до документів</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Безпечне зберігання даних</span>
              </li>
            </ul>
            <div className="mt-8">
              <ImagePlaceholder
                width={300}
                height={200}
                alt="Мобільний додаток для бухгалтерського обліку"
                type="feature"
                icon="chart"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Бухгалтери</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Персональний підхід до кожного клієнта</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Досвід роботи з різними галузями</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Постійне навчання та підвищення кваліфікації</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Відповідальність за якість послуг</span>
              </li>
            </ul>
            <div className="mt-8">
              <ImagePlaceholder
                width={300}
                height={200}
                alt="Команда професійних бухгалтерів"
                type="feature"
                icon="users"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
