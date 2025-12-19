
import React from 'react';
import { Coffee, Heart, Smile, MapPin } from 'lucide-react';

const FEATURE_LIST = [
  {
    icon: <Coffee size={32} />,
    title: 'Café de especialidad',
    desc: 'Seleccionado minuciosamente para ofrecerte el mejor aroma y sabor en cada taza.'
  },
  {
    icon: <Smile size={32} />,
    title: 'Brunch variado',
    desc: 'Opciones dulces y saladas elaboradas con productos frescos y de proximidad.'
  },
  {
    icon: <Heart size={32} />,
    title: 'Espacio Inclusivo',
    desc: 'Un ambiente acogedor y amigable con la comunidad LGBTQ+, donde todos son bienvenidos.'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Ubicación privilegiada',
    desc: 'En el corazón de Barcelona, el lugar perfecto para un descanso durante el día.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#BC6C25] font-bold tracking-widest uppercase text-sm mb-4 block">Descubre DeCent</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8">Mucho más que una cafetería.</h2>
          <p className="text-lg text-[#606C38] leading-relaxed">
            En DeCent hemos creado un espacio donde la calidad del producto y la calidez del servicio se encuentran para ofrecerte un momento único en el día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURE_LIST.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-[#FEFAE0]/50 border border-[#E9EDC9] hover:bg-[#FEFAE0] hover:shadow-xl transition-all duration-300">
              <div className="text-[#BC6C25] mb-6 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#606C38] text-sm leading-relaxed leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
