
import React from 'react';
import { HIGHLIGHTS, BRAND } from '../constants';
import { ExternalLink, Star } from 'lucide-react';

export const MenuPreview: React.FC = () => {
  return (
    <section id="carta" className="py-24 bg-[#FEFAE0]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#BC6C25] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestras Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-black mb-4">Nuestra propuesta gastronómica.</h2>
            <p className="text-[#606C38] text-lg">
              Desde clásicos del brunch hasta nuestras creaciones más recientes. Consulta nuestra carta actualizada y elige tus favoritos.
            </p>
          </div>
          <a 
            href={BRAND.menuUrl} 
            target="_blank" 
            className="inline-flex items-center gap-2 text-[#BC6C25] font-bold uppercase tracking-widest border-b-2 border-[#BC6C25] pb-2 hover:text-[#A35D20] hover:border-[#A35D20] transition-all"
          >
            Consultar Carta Digital
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#BC6C25] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#606C38] text-sm leading-relaxed mb-6 h-12 overflow-hidden text-ellipsis">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#BC6C25]">{item.category}</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Services block inside menu context */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-dashed border-[#BC6C25]">
              <span className="text-3xl mb-4">🏠</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Consumo en Local</h4>
              <p className="text-xs text-[#606C38]">Disfruta de nuestro espacio acogedor.</p>
           </div>
           <div className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-dashed border-[#BC6C25]">
              <span className="text-3xl mb-4">🛍️</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Para Llevar</h4>
              <p className="text-xs text-[#606C38]">Haz tu pedido y retira en la puerta.</p>
           </div>
           <div className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-dashed border-[#BC6C25]">
              <span className="text-3xl mb-4">🚚</span>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Delivery</h4>
              <p className="text-xs text-[#606C38]">Entrega sin contacto donde estés.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
