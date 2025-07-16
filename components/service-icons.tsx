"use client"

import { Calculator, FileText, Shield, Clock } from "lucide-react"

export function ServiceIcons() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ведення обліку</h3>
            <p className="text-gray-600 text-sm">Повне ведення бухгалтерського обліку вашого підприємства</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Розрахунок податків</h3>
            <p className="text-gray-600 text-sm">Точний розрахунок та своєчасна подача податкової звітності</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Консультації</h3>
            <p className="text-gray-600 text-sm">Професійні консультації з питань оподаткування та обліку</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Цілодобова підтримка</h3>
            <p className="text-gray-600 text-sm">Підтримка та відповіді на питання в будь-який час</p>
          </div>
        </div>
      </div>
    </section>
  )
}
