"use client"

import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "./image-placeholder"
import Link from "next/link"
import { ArrowRight, Star, Users } from "lucide-react"

export function VisualCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-blue-100">5.0 (200+ відгуків)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Приєднуйтесь до 1000+ задоволених клієнтів</h2>
            <p className="text-xl mb-8 text-blue-100">
              Довірте свій бухгалтерський облік професіоналам. Отримайте безкоштовну консультацію вже сьогодні!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="https://www.infakt.pl/polecam/yaroslav-kostak" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center">
                  Замовити бухгалтера онлайн
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2 text-blue-100">
                <Users className="h-5 w-5" />
                <span>Понад 50 кваліфікованих бухгалтерів</span>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[500px] mx-auto overflow-hidden">
            <ImagePlaceholder
              width={500}
              height={400}
              alt="Успішні клієнти БухОнлайн"
              type="feature"
              icon="users"
              className="rounded-lg shadow-2xl w-full h-auto max-w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm">Задоволених клієнтів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
