
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Visit Us', href: '/visit' },
      { name: 'Reviews', href: '/reviews' },
    ],
    fr: [
      { name: 'Accueil', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'Galerie', href: '/gallery' },
      { name: 'Nous Visiter', href: '/visit' },
      { name: 'Avis', href: '/reviews' },
    ]
  };

  const bookTableText = {
    en: 'Book a Table',
    fr: 'Réserver une Table'
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-playfair font-bold text-terracotta-600">
            Le Menelik
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive ? 'text-terracotta-600' : isScrolled ? 'nav-link-scrolled' : 'text-white hover:text-terracotta-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-gray-700 hover:text-terracotta-600' : 'text-white hover:text-terracotta-200'}`}
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            <Button 
              className="btn-primary px-6"
              onClick={() => window.open('https://wa.me/221701234567', '_blank')}
            >
              {bookTableText[language]}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-gray-700 hover:text-terracotta-600' : 'text-white hover:text-terracotta-200'}`}
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700 hover:text-terracotta-600' : 'text-white hover:text-terracotta-200'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems[language].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 ${
                      isActive ? 'text-terracotta-600' : 'text-gray-700 hover:text-terracotta-600'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                className="btn-primary self-start"
                onClick={() => {
                  window.open('https://wa.me/221701234567', '_blank');
                  setIsOpen(false);
                }}
              >
                {bookTableText[language]}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
