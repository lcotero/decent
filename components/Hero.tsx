
import React from 'react';
import { BRAND } from '../constants';
import { ChevronDown, UtensilsCrossed, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/decent/1920/1080?grayscale" 
          alt="Atmósfera acogedora de DeCent Cafe Barcelona" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FEFAE0]/50 to-[#FEFAE0]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#E9EDC9] mb-8 animate-bounce shadow-sm">
           <div className="flex text-yellow-500">
             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
           </div>
           <span className="text-xs font-semibold tracking-tight uppercase">{BRAND.rating}/5 Estrellas en Google</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight max-w-5xl mx-auto tracking-tight">
          Tu rincón de café y brunch en el corazón de <span className="text-[#BC6C25]">Barcelona.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#606C38] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Disfruta de una experiencia gastronómica auténtica en DeCent. Producto de calidad, ambiente acogedor y el mejor café de Barcelona.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={BRAND.menuUrl} 
            target="_blank" 
            className="w-full sm:w-auto px-10 py-5 bg-[#BC6C25] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#A35D20] transform hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-3"
          >
            <UtensilsCrossed size={20} />
            Ver Menú Completo
          </a>
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-[#BC6C25] text-[#BC6C25] rounded-full font-bold uppercase tracking-widest hover:bg-[#FEFAE0] transition-all flex items-center justify-center"
          >
            Cómo llegar
          </a>
        </div>

        <a href="#experiencia" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#606C38] animate-bounce hidden md:block">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};
