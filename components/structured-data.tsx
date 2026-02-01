export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Freelancer.org.pl",
    "url": "https://freelancer.org.pl",
    "logo": "https://freelancer.org.pl/placeholder-logo.svg",
    "description": "Przewodnik po legalnej pracy jako freelancer w Polsce: JDG, działalność nierejestrowana, ZUS, podatki, umowy B2B. Praktyczny przewodnik krok po kroku.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressRegion": "Poland"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@freelancer.org.pl",
      "url": "https://freelancer.org.pl/contact/"
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
      "name": "Przewodnik freelancera w Polsce",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rejestracja JDG w Polsce",
            "description": "Informacje i przewodnik po rejestracji jednoosobowej działalności gospodarczej"
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
