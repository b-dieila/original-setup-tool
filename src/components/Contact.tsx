
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message envoyé avec succès!", {
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@minima.design",
      link: "mailto:contact@minima.design",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresse",
      value: "35 rue des Designers, Paris",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.03)_0,rgba(0,0,0,0)_60%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block py-1 px-3 mb-4 rounded-full glass text-xs font-medium tracking-wide">
            Contact
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-balance mb-6">
            Parlons de votre projet
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à transformer votre vision en réalité ? Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-up">
              <h3 className="text-xl font-semibold mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {item.title}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-up animate-delay-200 p-6 border rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Heures d'ouverture</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h - 18h</span>
                </p>
                <p className="flex justify-between">
                  <span>Samedi:</span>
                  <span>10h - 15h</span>
                </p>
                <p className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-up animate-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              
              <ButtonCustom
                type="submit"
                variant="primary"
                className="rounded-full w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </ButtonCustom>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
