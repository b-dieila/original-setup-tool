
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPos * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20"
    >
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div 
          ref={heroRef}
          className="w-full h-full bg-[url('/hero-bg.webp')] bg-cover bg-center will-change-transform"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "inline-block py-1 px-3 mb-6 rounded-full glass text-xs font-medium tracking-wide",
            "animate-fade-down animate-delay-100"
          )}>
            Expérience de design minimaliste
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight tracking-tight text-balance mb-6",
            "animate-fade-down animate-delay-200"
          )}>
            La beauté dans la <br className="hidden md:inline" />
            <span className="relative">
              <span className="relative z-10">simplicité</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary -z-0"></span>
            </span>
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance",
            "animate-fade-down animate-delay-300"
          )}>
            Créez des expériences parfaitement équilibrées où chaque élément a un but précis. Épuré, intuitif et intemporel.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
            "animate-fade-up animate-delay-400"
          )}>
            <ButtonCustom 
              variant="primary" 
              className="rounded-full px-8 py-6 text-base"
            >
              Explorer nos produits
            </ButtonCustom>
            <ButtonCustom 
              variant="secondary"
              className="rounded-full px-8 py-6 text-base"
            >
              En savoir plus
            </ButtonCustom>
          </div>
          
          <a 
            href="#features" 
            className={cn(
              "inline-flex items-center justify-center animate-bounce",
              "animate-fade-up animate-delay-700"
            )}
          >
            <ArrowDown className="w-10 h-10 text-primary opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
