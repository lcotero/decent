
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#BC6C25] font-bold tracking-widest uppercase text-sm mb-4 block">Momentos DeCent</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Nuestra Galería Visual.</h2>
          <p className="text-[#606C38] text-lg">
            Un vistazo a nuestro espacio, nuestros platos y el café que preparamos con tanto cariño cada mañana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   <Maximize2 size={24} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-[#BC6C25] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
