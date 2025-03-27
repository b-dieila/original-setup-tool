
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      featuresRef.current.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  const features: Feature[] = [
    {
      title: "Design Minimaliste",
      description: "Des interfaces épurées qui mettent l'accent sur le contenu essentiel, éliminant toute distraction visuelle.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 15 3 9l3-3 6 6 6-6 3 3-9 9z" />
        </svg>
      </div>
    },
    {
      title: "Typographie Soignée",
      description: "Une hiérarchie typographique précise qui guide le regard et rend le contenu facile à lire et à comprendre.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7V4h16v3" />
          <path d="M9 20h6" />
          <path d="M12 4v16" />
        </svg>
      </div>
    },
    {
      title: "Animations Subtiles",
      description: "Des transitions douces et élégantes qui ajoutent une dimension de raffinement sans compromettre la performance.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    },
    {
      title: "Espacement Équilibré",
      description: "Un système d'espacement cohérent qui crée une harmonie visuelle et améliore la lisibilité de l'interface.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      </div>
    },
    {
      title: "Couleurs Harmonieuses",
      description: "Une palette de couleurs soigneusement sélectionnée qui renforce l'identité visuelle et guide l'attention de l'utilisateur.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>
    },
    {
      title: "Responsive par Design",
      description: "Une expérience fluide sur tous les appareils, garantissant que chaque élément conserve son équilibre et sa fonction.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      </div>
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className={cn(
            "inline-block py-1 px-3 mb-4 rounded-full glass text-xs font-medium tracking-wide",
            "animate-fade-down animate-delay-100"
          )}>
            Caractéristiques
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-balance mb-6",
            "animate-fade-down animate-delay-200"
          )}>
            Prêtez attention aux détails qui comptent
          </h2>
          
          <p className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto",
            "animate-fade-down animate-delay-300"
          )}>
            Notre approche du design met l'accent sur la fonctionnalité et l'élégance, créant des expériences qui sont à la fois attrayantes et intuitives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="bg-background border rounded-xl p-6 md:p-8 opacity-0 transition-all duration-500"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 p-6 md:p-10 rounded-xl glass-darker max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            Tout ce dont vous avez besoin, sans excès
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Design adaptatif",
              "Animations sur mesure",
              "Typographie premium",
              "Accessibilité",
              "Performance optimisée",
              "Support multilingue",
              "Intégration simplifiée",
              "Documentation complète"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="text-primary min-w-5" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
