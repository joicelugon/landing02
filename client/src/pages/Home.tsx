import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Music, Briefcase, Shield, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#areas" className="text-foreground hover:text-primary transition">Áreas</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contato</a>
            <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold">
              Agendar Consulta
            </Button>
          </nav>
          <Button className="md:hidden bg-primary text-primary-foreground hover:bg-primary/90">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card -z-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo and Title Section */}
            <div className="flex flex-col items-start gap-6">
              {/* Logo and Photo Container */}
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="w-32 h-auto flex-shrink-0">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663359530297/lEeWLDCkWdDhlEon.png" 
                    alt="Joice Lugon - Advogada e Consultora" 
                    className="w-full object-contain"
                  />
                </div>
                
                {/* Circular Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg flex-shrink-0">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663359530297/SnJAJdjzDYCQdLEP.png" 
                    alt="Dra. Joice Lugon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Justiça <span className="text-primary">Acessível</span> para Todos
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md">
              Dra. Joice Lugon oferece consultoria especializada em direito trabalhista, previdenciário e consumidor com foco em resultados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold">
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card text-foreground">
                Saiba Mais
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-sm text-muted-foreground">
                Centenas de clientes satisfeitos com resultados comprovados
              </p>
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
      <section id="areas" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Áreas de Atuação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise consolidada em três pilares do direito que protegem seus direitos
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Previdenciário */}
            <div className="group p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveArea('previdenciario')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Previdenciário</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Consultoria especializada em benefícios previdenciários, aposentadorias e questões relacionadas ao INSS.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Aposentadorias
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Benefícios INSS
                </li>
              </ul>
            </div>

            {/* Trabalhista */}
            <div className="group p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveArea('trabalhista')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Trabalhista</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Defesa da legislação trabalhista, rescisão contratual, reclamações e ações judiciais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Direitos Trabalhistas
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Auditoria e Consultoria Empresarial
                </li>
              </ul>
            </div>

            {/* Consumidor */}
            <div className="group p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveArea('consumidor')}
              onMouseLeave={() => setActiveArea(null)}>
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Consumidor</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Proteção ao consumidor, defesa contra práticas abusivas e ações para reparação de danos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Defesa do Consumidor
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Reparação de Danos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Proteger Seus Direitos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta com a Dra. Joice Lugon e descubra como podemos ajudar você a alcançar a justiça que merece.
          </p>
          <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold">
            Agendar Consulta Agora
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Entre em Contato</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
              <a href="mailto:joicelugon.adv@gmail.com" className="text-primary hover:text-primary/80 transition">
                joicelugon.adv@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <a href="https://wa.me/5527995743351" className="text-primary hover:text-primary/80 transition">
                (27) 99574-3351
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Redes Sociais</h3>
              <div className="flex items-center justify-center gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition">
                  Instagram
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-primary hover:text-primary/80 transition">
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
