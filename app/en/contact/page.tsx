"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language } from "@/lib/translations"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function ContactPage() {
  const language: Language = 'en';
  const t = translations[language];

  const navLinks = [
    { href: '/en/#jdg', label: 'Register JDG' },
    { href: '/en/#taxation-systems', label: 'Tax systems' },
    { href: '/en/#zus-insurance', label: 'ZUS insurance' },
    { href: '/en/#how-to-start', label: 'How to start' },
  ];

  const content = {
    title: 'Contact us',
    subtitle: 'Questions about accounting services in Poland? We are happy to help!',
    formTitle: 'Send us a message',
    formDescription: 'Fill in the form below and we will get back to you as soon as possible',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email *',
    messageLabel: 'Message *',
    messagePlaceholder: 'Describe your question or request...',
    submitButton: 'Send message',
    successMessage: 'Thank you for your message! We will contact you soon.',
    quickLinks: 'Quick links',
    contact: 'Contact',
    copyright: 'Freelancer.org.pl. All rights reserved.',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(content.successMessage)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 md:h-8 md:w-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18l-7.5-4.5v-6.75L15.75 6v9.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v9.75l-7.5-4.5v-6.75L15.75 6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6V6Z" />
            </svg>
            <Link
              href="/en/"
              className="text-base md:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Freelancer.org.pl
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLanguage={language} />
          </nav>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLanguage={language} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">{content.title}</h1>
              <p className="text-base md:text-xl text-gray-600 px-4">
                {content.subtitle}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardHeader className="px-4 md:px-6">
                  <CardTitle className="text-lg md:text-xl">{content.formTitle}</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {content.formDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 md:px-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {content.nameLabel}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={content.namePlaceholder}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {content.emailLabel}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {content.messageLabel}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={content.messagePlaceholder}
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base py-2 md:py-3">
                      {content.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <rect x="7" y="7" width="10" height="3"/>
                  <rect x="7" y="14" width="3" height="3"/>
                  <rect x="14" y="14" width="3" height="3"/>
                </svg>
                <Link href="/en/" className="text-lg font-semibold hover:text-blue-400 transition-colors">Freelancer.org.pl</Link>
              </div>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href="/en/contact/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="/en/privacy-policy/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Privacy policy</Link></li>
                <li><Link href="/en/terms/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Terms of use</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="text-sm md:text-base">Email: info@freelancer.org.pl</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
