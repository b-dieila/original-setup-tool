
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Product from '@/components/Product';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && document.querySelector(link.hash)) {
        e.preventDefault();
        
        const section = document.querySelector(link.hash);
        if (section) {
          const headerHeight = 80; // Approximate height of the fixed header
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
