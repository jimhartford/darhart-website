import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Account for taller header with site name on top
      const headerOffset = window.innerWidth >= 768 ? 120 : 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact Us', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Site Name/Logo - Centered */}
        <div className="flex items-center justify-center py-3 md:py-4">
          <button
            onClick={scrollToTop}
            className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
            aria-label="Go to home"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Darla Hartford Landscaping"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain"
            />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="relative flex items-center justify-between border-t border-gray-200 py-2 md:py-3">
          {/* Instagram Icon - Far Left */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.instagram.com/darlahartfordllc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Visit our Instagram"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#FCAF45" />
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-lawn-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Icons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-auto">
            <a
              href="tel:+15132593912"
              className="text-lawn-700 hover:text-lawn-600 transition-colors"
              aria-label="Call (513) 259-3912"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@darlahartford.com"
              className="text-lawn-700 hover:text-lawn-600 transition-colors"
              aria-label="Email info@darlahartford.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-lawn-600 transition-colors font-medium py-2 px-2 text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-200 mt-2 flex items-center gap-4 px-2">
                <a
                  href="https://www.instagram.com/darlahartfordllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Visit our Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#833AB4" />
                        <stop offset="50%" stopColor="#E1306C" />
                        <stop offset="100%" stopColor="#FCAF45" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-gradient-mobile)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="tel:+15132593912"
                  className="text-lawn-700 hover:text-lawn-600 transition-colors"
                  aria-label="Call (513) 259-3912"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@darlahartford.com"
                  className="text-lawn-700 hover:text-lawn-600 transition-colors"
                  aria-label="Email info@darlahartford.com"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

