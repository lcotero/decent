
import React from 'react';
import { BRAND } from '../constants';
import { Star, MapPin, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#606C38] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">La calidad que nuestros clientes avalan.</h2>
            <p className="text-xl text-[#E9EDC9] leading-relaxed mb-8">
              {BRAND.rating} estrellas y más de {BRAND.reviewsCount} opiniones reales nos convierten en una parada obligatoria en Consell de Cent.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                 <MapPin className="text-[#DDA15E]" size={20} />
                 <span className="text-sm">Eixample, Barcelona</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                 <Star className="text-yellow-400" size={20} fill="currentColor" />
                 <span className="text-sm">4.8 / 5 Rating</span>
               </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="bg-[#FEFAE0] p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <Quote className="text-[#BC6C25] mb-4" size={40} />
               <p className="text-[#283618] text-lg italic mb-6">
                 "El mejor brunch que he probado en Barcelona. El café es de otro mundo y el personal es súper amable. ¡Se nota el cariño en cada detalle!"
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-[#DDA15E]"></div>
                 <div>
                   <p className="text-[#283618] font-bold">Cliente Satisfecho</p>
                   <div className="flex text-yellow-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                   </div>
                 </div>
               </div>
            </div>
            {/* Background decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#DDA15E] rounded-full -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
