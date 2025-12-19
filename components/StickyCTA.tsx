
import React from 'react';
import { BRAND } from '../constants';
import { MapPin, Phone, Utensils } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60] flex items-center justify-between gap-4">
      <a 
        href={BRAND.phoneUrl} 
        className="flex-1 bg-white text-[#283618] border border-[#BC6C25] h-14 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold uppercase text-xs"
      >
        <Phone size={18} className="text-[#BC6C25]" />
        Llamar
      </a>
      <a 
        href={BRAND.menuUrl} 
        target="_blank"
        className="flex-[1.5] bg-[#BC6C25] text-white h-14 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold uppercase text-xs animate-pulse"
      >
        <Utensils size={18} />
        Ver Menú
      </a>
      <a 
        href={BRAND.googleMapsUrl} 
        target="_blank"
        className="flex-1 bg-white text-[#283618] border border-[#BC6C25] h-14 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold uppercase text-xs"
      >
        <MapPin size={18} className="text-[#BC6C25]" />
        Ir
      </a>
    </div>
  );
};
