'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Використання cookies</h3>
              <p className="text-sm text-gray-600">
                Ми використовуємо cookies для покращення вашого досвіду на нашому сайті. 
                Продовжуючи використовувати сайт, ви погоджуєтеся з нашим використанням cookies.
                <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
                  Дізнатися більше
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={declineCookies}
                className="text-sm"
              >
                Відхилити
              </Button>
              <Button 
                onClick={acceptCookies}
                className="text-sm"
              >
                Прийняти
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 