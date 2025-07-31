"use client"

import { useEffect } from "react"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Freelancer.org.pl",
    "url": "https://freelancer.org.pl",
    "logo": "https://freelancer.org.pl/images/logo.png",
    "description": "Онлайн-бухгалтерія для українців у Польщі: реєстрація ФОП, ведення обліку, звіти та підтримка українською.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressRegion": "Poland"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-XXX-XXX-XXX",
      "contactType": "customer service",
      "email": "info@buh-online.pl"
    },
    "sameAs": [
      "https://freelancer.net.pl"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Poland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Бухгалтерські послуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Реєстрація ФОП у Польщі",
            "description": "Допомога з реєстрацією індивідуальної підприємницької діяльності"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ведення бухгалтерського обліку",
            "description": "Професійне ведення обліку для підприємців"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
