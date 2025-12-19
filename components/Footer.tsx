
import React from 'react';
import { BRAND } from '../constants';
import { Instagram, MapPin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#283618] text-[#FEFAE0] pt-20 pb-28 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#inicio" className="flex flex-col mb-6">
              <span className="text-3xl font-bold tracking-tight uppercase">{BRAND.name}</span>
              <span className="text-xs tracking-[0.3em] font-light -mt-1 text-[#DDA15E]">{BRAND.tagline}</span>
            </a>
            <p className="text-[#E9EDC9] max-w-sm mb-6 leading-relaxed">
              Calidad avalada por nuestra comunidad en el Eixample. Café de especialidad y brunch artesano en un ambiente auténtico.
            </p>
            <div className="flex items-center gap-2 bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/10">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              <span className="text-sm font-bold tracking-wider uppercase">{BRAND.rating} en Google Maps</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-sm text-[#DDA15E] mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="hover:text-[#DDA15E] transition-colors">Inicio</a></li>
              <li><a href="#experiencia" className="hover:text-[#DDA15E] transition-colors">Nuestra Experiencia</a></li>
              <li><a href="#carta" className="hover:text-[#DDA15E] transition-colors">Menú Digital</a></li>
              <li><a href="#contacto" className="hover:text-[#DDA15E] transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-sm text-[#DDA15E] mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href={BRAND.instagram} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BC6C25] transition-all">
                <Instagram size={20} />
              </a>
              <a href={BRAND.googleMapsUrl} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#BC6C25] transition-all">
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {BRAND.name} Cafe & Brunch Barcelona. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
