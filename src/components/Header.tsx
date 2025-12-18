import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X, Phone } from 'lucide-react'

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
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
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
        <div className="flex items-center justify-between border-t border-gray-200 py-2 md:py-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-lawn-600 transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="tel:+15132593912"
              className="flex items-center gap-2 text-lawn-700 hover:text-lawn-600 font-medium text-sm lg:text-base"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">(513) 259-3912</span>
              <span className="lg:hidden">Call</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-lawn-600 hover:bg-lawn-700 text-sm lg:text-base px-3 lg:px-4"
            >
              Get Free Estimate
            </Button>
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
              <div className="pt-2 border-t border-gray-200 mt-2 space-y-2">
                <a
                  href="tel:+15132593912"
                  className="flex items-center gap-2 text-lawn-700 font-medium py-2 px-2 text-base"
                >
                  <Phone className="w-5 h-5" />
                  <span>(513) 259-3912</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-lawn-600 hover:bg-lawn-700 w-full mx-2"
                >
                  Get Free Estimate
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

