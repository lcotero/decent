
import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { MenuPreview } from './components/MenuPreview';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navigation />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Social Proof / Google Rating */}
        <SocialProof />
        
        {/* Section 3: Experience / Features */}
        <Features />
        
        {/* Section 4: Menu & Food */}
        <MenuPreview />

        {/* Section 5: Gallery */}
        <Gallery />

        {/* Section 6: Testimonials */}
        <Testimonials />
        
        {/* Section 7: Location & Contact / Map */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile-only Sticky Bar */}
      <StickyCTA />
    </div>
  );
}

export default App;
