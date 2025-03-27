
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Fonctionnalités", href: "#features" },
    { name: "Produits", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 glass shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl md:text-2xl">
            minima
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary/80 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ButtonCustom
              variant="secondary"
              size="sm"
              className="rounded-full px-5 py-2 text-sm"
            >
              Se connecter
            </ButtonCustom>
            <ButtonCustom
              variant="primary"
              size="sm"
              className="rounded-full px-5 py-2 text-sm"
            >
              Commencer
            </ButtonCustom>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden backdrop-blur-lg bg-background/90",
          isOpen ? "flex flex-col" : "hidden"
        )}
        style={{ top: "60px" }}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-primary/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-4 mt-4">
            <ButtonCustom
              variant="secondary"
              size="sm"
              className="rounded-full px-5 py-2 w-32 text-sm"
            >
              Se connecter
            </ButtonCustom>
            <ButtonCustom
              variant="primary"
              size="sm"
              className="rounded-full px-5 py-2 w-32 text-sm"
            >
              Commencer
            </ButtonCustom>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
