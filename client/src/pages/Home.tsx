import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Music, Briefcase, Shield, Users } from "lucide-react";

import { useState } from "react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="#d4af37" width="24" height="24">
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
              <Button className="hidden md:inline-flex font-semibold" style={{backgroundColor: '#9B4C57', color: '#ffffff'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B3D47'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9B4C57'}>
                Fale com a Advogada
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center pt-16 overflow-hidden" style={{minHeight: '120vh'}}>
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663359530297/TfaWc8Lhn6YbnJ4da3LruK/ChatGPTImage21defev.de2026,19_20_01_500261da.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        {/* Background overlay */}
        <div className="absolute inset-0 z-0" style={{backgroundColor: 'rgba(26, 10, 31, 0.7)'}}></div>
        
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
              <h1 className="text-lg md:text-xl font-semibold leading-relaxed" style={{fontFamily: '"Lato", sans-serif', textAlign: 'justify', fontSize: '14px'}}>
                Advogada dedicada à defesa dos direitos, com atuação focada na orientação estratégica e <span className="text-primary">humanizada</span> de clientes e empresas.
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl" style={{fontSize: '12px', textAlign: 'justify'}}>
              Pós-graduada em Direito e Processo do Trabalho, minha atuação é guiada, há 14 anos, pela técnica jurídica aliada à escuta atenta, buscando soluções eficientes e personalizadas para cada situação.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+5527995743351" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-semibold" style={{backgroundColor: '#9B4C57', color: '#ffffff'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B3D47'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9B4C57'}>
                  Fale com a Advogada
                </Button>
              </a>
              <a href="https://go.hotmart.com/Q104799668L" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 font-semibold">
                  Adquira o CHECKLIST Trabalhista
                </Button>
              </a>
            </div>


          </div>


          {/* Right Content - Dra. Joice Photo */}
          <div className="hidden md:flex flex-col items-center justify-center">
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
            <p className="text-xs text-muted-foreground mt-3">OAB: 20.778/ES</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16" style={{backgroundColor: '#f8f8f8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#d5d5d5'}}>
          {/* Section Header */}
          <div className="text-center mb-12 pt-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#3a3a3a', fontFamily: '"Droid Serif", serif'}}>Áreas de Atuação</h2>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Previdenciário */}
            <div className="group relative p-6 bg-gray-200 border border-gray-400 rounded-lg hover:border-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('previdenciario')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-400/20 to-gray-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-7 h-7" style={{color: '#8B6914'}} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-700 transition-colors duration-300" style={{color: '#8B6914'}}>Previdenciário</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Aposentadorias</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Benefícios INSS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trabalhista */}
            <div className="group relative p-6 bg-gray-200 border border-gray-400 rounded-lg hover:border-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('trabalhista')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-400/20 to-gray-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7" style={{color: '#8B6914'}} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-700 transition-colors duration-300" style={{color: '#8B6914'}}>Trabalhista</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Direitos Trabalhistas</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Auditoria e Consultoria Empresarial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Consumidor */}
            <div className="group relative p-6 bg-gray-200 border border-gray-400 rounded-lg hover:border-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveArea('consumidor')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-400/20 to-gray-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7" style={{color: '#8B6914'}} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-700 transition-colors duration-300" style={{color: '#8B6914'}}>Consumidor</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Defesa do Consumidor</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: '#555555'}}></span>
                    <span className="font-medium">Reparação de Danos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663359530297/TfaWc8Lhn6YbnJ4da3LruK/ChatGPTImage21defev.de2026,19_14_29_301e89fd.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.50,
          zIndex: 0
        }}></div>
        {/* Background overlay */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(26, 10, 31, 0.50)', zIndex: 0}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: '#ffffff', fontFamily: '"Droid Serif", serif'}}>Entre em Contato</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <a href="mailto:joicelugon.adv@gmail.com" className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg hover:bg-primary/30 transition">
                  <Mail className="w-6 h-6 text-primary" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
              <a href="mailto:joicelugon.adv@gmail.com" className="text-white hover:text-gray-300 transition">
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
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <a href="https://wa.me/+5527995743351" className="text-white hover:text-gray-300 transition">
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
              <h3 className="text-xl font-bold text-white mb-2">Redes Sociais</h3>
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/joicelugon.adv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
                  Instagram
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="http://www.tiktok.com/@joicelugon.adv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
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
