import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/DnzxDev", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/dnzxdevop",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:conato.dnzxdev@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
  ];

  return (
    <footer className="relative bg-[#121211] text-[#F0F0F0] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#637DDB]/5 via-transparent to-[#637DDB]/3 pointer-events-none" />
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-[#637DDB] to-transparent animate-pulse" />
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-[#637DDB]/50 to-transparent animate-ping" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#637DDB] to-[#637DDB]/70 bg-clip-text text-transparent">
                Daniel
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#B4B4B4] hover:text-[#637DDB] transition-colors duration-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Minas Gerais, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-[#B4B4B4] hover:text-[#637DDB] transition-colors duration-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+55 (32) 991048844</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#F0F0F0]">Navegação</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-[#B4B4B4] hover:text-[#637DDB] hover:translate-x-1 transition-all duration-300 text-sm group"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#F0F0F0]">Conecte-se</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#B4B4B4] hover:text-[#637DDB] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#1C1C1B] rounded-lg flex items-center justify-center group-hover:bg-[#637DDB]/10 group-hover:scale-110 transition-all duration-300 border border-[#3C3C3C] group-hover:border-[#637DDB]/30">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[#3C3C3C] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-[#1C1C1B] hover:bg-[#637DDB] text-[#B4B4B4] hover:text-white px-4 py-2 rounded-lg transition-all duration-300 border border-[#3C3C3C] hover:border-[#637DDB] hover:scale-105"
            >
              <span className="text-sm font-medium">Voltar ao topo</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C1C1B]/50 to-transparent pointer-events-none" />
      <div className="absolute top-8 right-8 w-2 h-2 bg-[#637DDB] rounded-full animate-pulse" />
      <div className="absolute top-16 right-16 w-1 h-1 bg-[#637DDB]/60 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#637DDB]/40 rounded-full animate-pulse delay-500" />
    </footer>
  );
};

export default Footer;
