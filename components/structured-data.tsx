"use client"

import { useEffect } from "react"

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "БухОнлайн",
      description: "Професійні бухгалтерські послуги онлайн в Україні",
      url: "https://your-domain.com",
      logo: "https://your-domain.com/images/logo-bukhonline.png",
      image: [
        "https://your-domain.com/images/hero-accountants.png",
        "https://your-domain.com/images/dashboard-interface.png",
        "https://your-domain.com/images/mobile-app-preview.png",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+380-44-123-45-67",
        contactType: "customer service",
        availableLanguage: "Ukrainian",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Київ",
        addressCountry: "UA",
      },
      sameAs: ["https://www.infakt.pl/ref=123"],
      service: {
        "@type": "Service",
        name: "Бухгалтерські послуги онлайн",
        description: "Ведення обліку, податкова звітність, консультації",
        provider: {
          "@type": "Organization",
          name: "БухОнлайн",
        },
      },
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
