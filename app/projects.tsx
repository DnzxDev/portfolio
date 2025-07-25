"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./projects-card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Landing Page + Dashboard",
    description:
      "Projeto completo com landing page tema escuro, sistema de login Discord, dashboard com troca de temas, sistema de compras com gemas, inventário e integração com API FiveM para benefícios automáticos.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Nhost",
      "TypeScript",
      "GraphQL",
    ],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/dnzdevox.png",
    isPrivate: true,
    category: "Full Stack",
  },
  {
    title: "Painel Admin",
    description:
      "Dashboard administrativo completo para gerenciamento de produtos, supervisão de servidor, controle de jogadores e sistema de banimentos. Interface intuitiva e responsiva.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
      "MySQL",
    ],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/im23age.png",
    isPrivate: true,
    category: "Full Stack",
  },
  {
    title: "Sistema de Armazenamento",
    description:
      "Plataforma de armazenamento para imagens e arquivos com interface clean e funcional. Suporte para arquivos da pasta pública com possibilidade de expansão futura.",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/im1age.png",
    isPrivate: true,
    category: "Full Stack",
  },
  {
    title: "API - Sistema de Licenças",
    description:
      "API robusta para criação e verificação de licenças usando Supabase. Sistema completo de autenticação e gerenciamento de licenças para aplicações.",
    technologies: ["JavaScript", "Supabase", "Node.js"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "api-supabase",
    },
    category: "Backend",
  },
  {
    title: "Sistema de Conexão Website",
    description:
      "Sistema básico de conexão entre servidor FiveM e website, permitindo comunicação bidirecional através de eventos Lua executados via JavaScript por métodos POST/GET.",
    technologies: ["Lua", "JavaScript", "Node.js"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "connection",
      path: "backend",
    },
    category: "Backend",
  },
  {
    title: "Tablet de Gerenciamento - FiveM",
    description:
      "Interface de tablet desenvolvida para New Valley (FiveM) com HTML, CSS e JavaScript no frontend e Lua no backend. Sistema completo de gerenciamento in-game.",
    technologies: ["JavaScript", "HTML", "CSS", "Lua"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "dnzx-panel",
    },
    category: "Front End",
  },
  {
    title: "Sistema de Autenticação - NestJS",
    description:
      "Autenticação segura com suporte a múltiplos papéis, renovação de sessão e recuperação de senha por e-mail.",
    technologies: ["Typescript", "TypeORM", "NestJs"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "auth-system",
      path: "backend",
    },
    category: "Backend",
  },
    {
    title: "Sistema de loja in-game - FiveM",
    description: "Sistema de loja dentro do jogo. com pagamento em coins, é possivel criar produtos dentro do jogo, sendo administrador, e com isso, os players podem comprar Mansões, Carros E Itens com Coins. O Sistema foi feito para Central Group.",
    technologies: ["Lua", "Javascript", "React", "Oxmysql"],
    imageUrl: "https://r2.fivemanage.com/YhWQSazQTiP1am36BQdDC/imagem_2025-07-11_161758270.png",
    isPrivate: true,
    category: "Full Stack",
  },
];

const categories = ["Todos", "Full Stack", "Front End", "Backend"];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const contacts = [
    {
      name: "WhatsApp",
      description: "Resposta rápida e direta",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/5532991048844",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      name: "LinkedIn",
      description: "Networking profissional",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/dnzxdevop",
      color: "from-[#637DDB] to-[#637DDB]/80",
      hoverColor: "hover:from-[#637DDB]/80 hover:to-[#637DDB]/60",
    },
    {
      name: "Email",
      description: "Contato formal",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:contato.dnzxdev@gmail.com",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#121211]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#1C1C1B]/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full border border-[#3C3C3C] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#637DDB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#B4B4B4] hover:text-[#F0F0F0] transition-colors z-10 p-2 hover:bg-[#3C3C3C] rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#637DDB]/20 to-purple-500/20 rounded-2xl mb-4">
              <Sparkles className="w-8 h-8 text-[#637DDB]" />
            </div>
            <h3 className="text-3xl font-bold text-[#F0F0F0] mb-2">
              Vamos Conversar!
            </h3>
            <p className="text-[#B4B4B4] text-lg">
              Escolha a melhor forma de entrar em contato
            </p>
          </div>
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`flex items-center gap-4 p-6 bg-gradient-to-r ${contact.color} ${contact.hoverColor} rounded-2xl transition-all duration-300 transform hover:shadow-xl group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[#F0F0F0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="flex-shrink-0">{contact.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-[#F0F0F0] font-semibold text-lg">
                      {contact.name}
                    </h4>
                    <p className="text-[#F0F0F0]/80 text-sm">
                      {contact.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#F0F0F0]/60 group-hover:text-[#F0F0F0] transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-[#3C3C3C]">
            <p className="text-[#B4B4B4] text-sm">
              Respondo em até 24 horas! 🚀
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#F0F0F0]">Meus</span>{" "}
              <span className="bg-gradient-to-r from-[#637DDB] to-purple-400 bg-clip-text text-transparent">
                Projetos
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#637DDB] to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-[#B4B4B4] text-xl max-w-3xl mx-auto leading-relaxed">
              Explore meu trabalho mais recente e descubra as tecnologias pelas
              quais sou apaixonado
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-gradient-to-r from-[#637DDB] to-purple-500 text-[#F0F0F0] shadow-lg shadow-[#637DDB]/25"
                    : "bg-[#1C1C1B]/50 text-[#B4B4B4] hover:bg-[#3C3C3C]/50 hover:text-[#F0F0F0] border border-[#3C3C3C] hover:border-[#637DDB]"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <div className="relative p-12 rounded-3xl bg-[#1C1C1B]/80 backdrop-blur-sm border border-[#3C3C3C] overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#637DDB]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#F0F0F0] mb-4">
                  Gostou do que viu?
                </h3>
                <p className="text-[#B4B4B4] mb-8 max-w-2xl mx-auto text-lg">
                  Estes são apenas alguns dos meus projetos. Quer ver mais do
                  meu trabalho ou discutir uma colaboração?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="group bg-[#1C1C1B] hover:bg-[#3C3C3C] border border-[#3C3C3C] hover:border-[#637DDB] px-8 py-6 text-lg transition-all duration-300 text-[#F0F0F0] hover:text-[#637DDB]"
                    asChild
                  >
                    <a
                      href="https://github.com/DnzxDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Ver Todos os Projetos
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    onClick={handleContactClick}
                    className="group bg-gradient-to-r from-[#637DDB] to-purple-500 hover:from-[#637DDB]/80 hover:to-purple-600 text-[#F0F0F0] px-8 py-6 text-lg font-semibold shadow-xl shadow-[#637DDB]/25 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Entre em Contato
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
