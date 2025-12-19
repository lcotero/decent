
import React from 'react';
import { BRAND, SCHEDULE } from '../constants';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#BC6C25] font-bold tracking-widest uppercase text-sm mb-4 block">Ven a vernos</span>
            <h2 className="text-4xl md:text-6xl font-black mb-12">Visítanos o haz tu pedido.</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FEFAE0] text-[#BC6C25] rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-[#BC6C25] mb-2">Dirección</h4>
                  <p className="text-lg text-[#283618]">{BRAND.location}</p>
                  <a href={BRAND.googleMapsUrl} target="_blank" className="text-sm font-bold text-[#BC6C25] hover:underline mt-2 inline-block flex items-center gap-2">
                    <Navigation size={14} /> Cómo llegar en Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FEFAE0] text-[#BC6C25] rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-[#BC6C25] mb-2">Teléfono</h4>
                  <p className="text-lg text-[#283618]">{BRAND.phone}</p>
                  <a href={BRAND.phoneUrl} className="text-sm font-bold text-[#BC6C25] hover:underline mt-2 inline-block">Llamar ahora</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FEFAE0] text-[#BC6C25] rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-[#BC6C25] mb-4">Horarios</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {SCHEDULE.map((s, idx) => (
                      <div key={idx} className="flex justify-between border-b border-[#E9EDC9] py-1">
                        <span className="text-sm font-medium">{s.day}</span>
                        <span className="text-sm text-[#606C38]">{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.473551573038!2d2.1524311771141773!3d41.38550187130005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a28996b9933b%3A0xb1e0f666f3630d74!2sCarrer+del+Consell+de+Cent%2C+167%2C+08015+Barcelona!5e0!3m2!1ses!2ses!4v1715600000000!5m2!1ses!2ses" 
              className="w-full h-full border-0 grayscale contrast-125"
              loading="lazy" 
              title="Ubicación de DeCent Cafe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
