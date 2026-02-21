import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Music, Briefcase, Shield, Users } from "lucide-react";

import { useState } from "react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.48a5.64 5.64 0 0 0-.98-.08 5.64 5.64 0 0 0 0 11.28 5.64 5.64 0 0 0 5.64-5.64V9.97a7.44 7.44 0 0 0 4.58 1.55v-3.83a4.83 4.83 0 0 1-.81-.07z"/>
  </svg>
);

export default function Home() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" style={{backgroundColor: '#350035'}}>
          <nav className="flex items-center gap-4 md:gap-8">
            <a href="#areas" className="text-foreground hover:text-primary transition text-sm md:text-base">Áreas</a>
            <a href="#contact" className="text-foreground hover:text-primary transition text-sm md:text-base">Contato</a>
            <a href="https://wa.me/+5527995743351" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:inline-flex bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold">
                Agendar Consulta
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{backgroundColor: '#1a0a1f'}}>
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10" style={{backgroundColor: '#1a0a1f'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo and Title Section */}
            <div className="flex flex-col items-start gap-6">
              {/* Logo and Photo Container */}
              <div className="flex items-center gap-6 md:flex-col md:items-center">
                {/* Logo */}
                <div className="w-40 h-auto flex-shrink-0 md:w-80">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663359530297/HvARWolzaFqAbWbW.png" 
                    alt="Joice Lugon - Advogada e Consultora" 
                    className="w-full object-contain"
                  />
                </div>
                
                {/* Circular Photo - Mobile Only */}
                <div className="md:hidden w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg flex-shrink-0">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663359530297/SnJAJdjzDYCQdLEP.png" 
                    alt="Dra. Joice Lugon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Main Title */}
              <h1 className="text-lg md:text-xl font-semibold leading-relaxed" style={{fontFamily: '"Lato", sans-serif', textAlign: 'left'}}>
                Advogada dedicada à defesa dos direitos, com atuação focada na orientação estratégica e <span className="text-primary">humanizada</span> de clientes e empresas.
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl" style={{fontSize: '15px', textAlign: 'left'}}>
              Meu trabalho é guiado pela técnica jurídica aliada à escuta atenta, buscando soluções eficientes, seguras e personalizadas para cada situação. Acredito na advocacia como instrumento de justiça, prevenção de conflitos e transformação de realidades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+5527995743351" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold">
                  Agendar Consulta
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-border hover:bg-card text-foreground">
                Saiba Mais
              </Button>
            </div>


          </div>


          {/* Right Content - Dra. Joice Photo */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96 flex items-center justify-center">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-3xl blur-3xl"></div>
              {/* Photo container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663359530297/SnJAJdjzDYCQdLEP.png" 
                  alt="Dra. Joice Lugon" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16" style={{backgroundColor: '#1a001a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#240024'}}>
          {/* Section Header */}
          <div className="text-center mb-12 pt-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#f0e44f'}}>Áreas de Atuação</h2>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Previdenciário */}
            <div className="group relative p-6 bg-transparent border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('previdenciario')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">Previdenciário</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Aposentadorias</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Benefícios INSS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabalhista */}
            <div className="group relative p-6 bg-transparent border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('trabalhista')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">Trabalhista</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Direitos Trabalhistas</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Auditoria e Consultoria Empresarial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Consumidor */}
            <div className="group relative p-6 bg-transparent border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('consumidor')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">Consumidor</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Defesa do Consumidor</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">Reparação de Danos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: '#1a0a1f'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: '#d4af37'}}>Entre em Contato</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <a href="mailto:joicelugon.adv@gmail.com" className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg hover:bg-primary/30 transition">
                  <Mail className="w-6 h-6 text-primary" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
              <a href="mailto:joicelugon.adv@gmail.com" className="text-primary hover:text-primary/80 transition">
                joicelugon.adv@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <a href="https://wa.me/+5527995743351" className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg hover:bg-primary/30 transition">
                  <Phone className="w-6 h-6 text-primary" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <a href="https://wa.me/+5527995743351" className="text-primary hover:text-primary/80 transition">
                (27) 99574-3351
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <a href="https://www.instagram.com/joicelugon.adv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg hover:bg-primary/30 transition">
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
                <a href="http://www.tiktok.com/@joicelugon.adv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg hover:bg-primary/30 transition">
                  <TikTokIcon />
                </a>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Redes Sociais</h3>
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/joicelugon.adv" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition">
                  Instagram
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="http://www.tiktok.com/@joicelugon.adv" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Dra. Joice Lugon - Advogada Trabalhista e Previdenciária
            </p>
            <p className="text-sm text-muted-foreground">
              Todos os direitos reservados
            </p>
            <p className="text-sm text-muted-foreground">
              Made with Manus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
