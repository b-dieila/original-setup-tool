
import React from "react";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Produits",
      links: [
        { name: "Série Essence", href: "#" },
        { name: "Collection Harmonie", href: "#" },
        { name: "Ligne Épure", href: "#" },
        { name: "Nouveautés", href: "#" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Presse", href: "#" },
        { name: "Partenaires", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Livraison", href: "#" },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "Conditions d'utilisation", href: "#" },
        { name: "Confidentialité", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Mentions légales", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t py-16 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display font-bold text-xl mb-6 inline-block">
              minima
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Des expériences de design minimalistes qui célèbrent l'essence de chaque concept.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {["Twitter", "Instagram", "LinkedIn", "Pinterest"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d={
                        social === "Twitter" 
                          ? "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" 
                          : social === "Instagram" 
                          ? "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm-4 14.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z"
                          : social === "LinkedIn"
                          ? "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"
                          : "M12 2a10 10 0 00-3.16 19.5c-.07-.7-.13-1.76.03-2.5.14-.72.9-4.57.9-4.57s-.23-.46-.23-1.15c0-1.08.63-1.88 1.4-1.88.66 0 .98.5.98 1.1 0 .66-.42 1.66-.64 2.58-.19.77.39 1.4 1.16 1.4 1.38 0 2.32-1.77 2.32-3.87 0-1.6-1.08-2.8-3.03-2.8-2.22 0-3.6 1.66-3.6 3.5 0 .64.18 1.08.48 1.43.13.16.15.3.1.47-.03.12-.12.4-.15.52-.05.2-.2.27-.38.2-1.07-.43-1.56-1.6-1.56-2.9 0-2.17 1.82-4.77 5.46-4.77 2.92 0 4.83 2.1 4.83 4.37 0 3-1.67 5.23-4.13 5.23-.83 0-1.6-.45-1.87-.97 0 0-.45 1.78-.54 2.12-.16.61-.5 1.2-.8 1.67A10 10 0 0012 2z"
                      }
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            &copy; {currentYear} Minima Design. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Conditions d'utilisation
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
