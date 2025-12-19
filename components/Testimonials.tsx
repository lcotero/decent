
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-[#E9EDC9]/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#BC6C25] font-bold tracking-widest uppercase text-sm mb-4 block">La Voz de Nuestros Clientes</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Testimonios que nos inspiran.</h2>
          <p className="text-[#606C38] text-lg">
            Nuestra mayor satisfacción es ver a nuestros clientes disfrutar. Aquí algunas palabras de quienes nos visitan en el Eixample.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-[#E9EDC9]/50 relative group hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-8 text-[#E9EDC9] group-hover:text-[#BC6C25]/20 transition-colors" size={48} />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl font-medium text-[#283618] leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#BC6C25]/10 rounded-full flex items-center justify-center font-bold text-[#BC6C25]">
                  {t.name.charAt(0)}
                </div>
                <span className="font-bold text-[#283618] uppercase tracking-widest text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#E9EDC9] shadow-sm">
             <span className="text-sm font-bold text-[#606C38]">4.8 Estrellas en Google Maps</span>
             <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
