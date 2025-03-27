
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const productsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    
    // Animate content change
    if (contentRefs.current[activeTab] && contentRefs.current[index]) {
      contentRefs.current[activeTab]?.classList.add('animate-fade-out');
      
      setTimeout(() => {
        contentRefs.current[activeTab]?.classList.remove('animate-fade-in', 'animate-fade-out');
        contentRefs.current[index]?.classList.add('animate-fade-in');
      }, 200);
    }
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Série Essence",
      description: "Une collection qui incarne la pureté du design minimaliste, où chaque pièce est réduite à sa forme la plus essentielle.",
      image: "/product-1.webp",
      features: [
        "Design ultra-minimaliste",
        "Matériaux durables",
        "Fabrication artisanale",
        "Garantie à vie"
      ]
    },
    {
      id: 2,
      name: "Collection Harmonie",
      description: "Un équilibre parfait entre forme et fonction, où l'esthétique et l'utilité coexistent dans une harmonie parfaite.",
      image: "/product-2.webp",
      features: [
        "Équilibre visuel parfait",
        "Éléments interchangeables",
        "Palette de couleurs naturelles",
        "Design inspiré de la nature"
      ]
    },
    {
      id: 3,
      name: "Ligne Épure",
      description: "La simplicité élevée au rang d'art, où chaque détail a été soigneusement pensé pour créer une expérience visuelle pure.",
      image: "/product-3.webp",
      features: [
        "Lignes épurées",
        "Détails architecturaux",
        "Finitions premium",
        "Fabrication européenne"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block py-1 px-3 mb-4 rounded-full glass text-xs font-medium tracking-wide">
            Nos produits
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-balance mb-6">
            L'élégance dans la simplicité
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des collections qui célèbrent l'essentiel, conçues pour s'intégrer harmonieusement dans votre quotidien.
          </p>
        </div>
        
        <div 
          ref={productsRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          {/* Product Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {products.map((product, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === index 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                onClick={() => handleTabChange(index)}
              >
                {product.name}
              </button>
            ))}
          </div>
          
          {/* Product Content */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl border">
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => (contentRefs.current[index] = el)}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  activeTab === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Product Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent md:hidden"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-medium mb-3">Caractéristiques principales:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <ButtonCustom 
                      variant="primary" 
                      className="rounded-full self-start mt-auto group"
                    >
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </ButtonCustom>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
