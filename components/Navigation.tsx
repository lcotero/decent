
import React, { useState, useEffect } from 'react';
import { BRAND } from '../constants';
import { Menu, X, Instagram } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Historia', href: '#experiencia' },
    { name: 'Carta', href: '#carta' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FEFAE0]/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex flex-col items-center">
          <span className={`text-2xl font-bold tracking-tight text-[#283618] uppercase`}>{BRAND.name}</span>
          <span className="text-[10px] tracking-[0.3em] font-light -mt-1 text-[#606C38]">{BRAND.tagline}</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-bold hover:text-[#BC6C25] transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#BC6C25] text-white rounded-full hover:bg-[#A35D20] transition-colors">
            <Instagram size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#283618]">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FEFAE0] border-t border-[#E9EDC9] py-8 flex flex-col items-center space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium tracking-wider uppercase">
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4">
            <a href={BRAND.instagram} className="p-3 bg-[#BC6C25] text-white rounded-full">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
