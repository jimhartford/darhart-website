import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = window.innerWidth >= 768 ? 120 : 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company Name */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-lawn-700 uppercase tracking-wide">
            Darhart Lawn Care
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Left Section - Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <p className="text-lawn-600 font-semibold mb-1">Darhart Lawn Care</p>
            <p className="text-lawn-600 text-sm">
              123 Main Street<br />
              Your City, ST 12345
            </p>
          </div>

          {/* Middle Section - Phone & Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <a
              href="tel:+1234567890"
              className="text-lawn-600 font-semibold mb-4 hover:text-lawn-700 transition-colors"
            >
              (123) 456-7890
            </a>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/darlahartfordllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Section - Email & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-lawn-700 hover:bg-lawn-800 text-white font-semibold px-6 py-3 rounded-lg text-sm md:text-base"
            >
              GET A FREE ESTIMATE!
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Darhart Lawn Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
