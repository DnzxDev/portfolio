"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Nav } from "@/components/nav";
import Footer from "./footer";
import {
  Code,
  Server,
  DatabaseZap,
  Github,
  Linkedin,
  Brain,
  User,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Zap,
  ArrowRight,
  Sparkles,
  Trophy,
  Target,
  Rocket,
  Globe,
  Coffee,
  Heart,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiFivem } from "react-icons/si";
import { ProjectsSection } from "./projects";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const services = [
    {
      title: "Desenvolvimento FiveM",
      description:
        "Scripts personalizados, sistemas complexos e otimização de performance para servidores FiveM",
      price: "R$ 550 - R$ 1.200",
      duration: "3-15 dias",
      features: [
        "Scripts personalizados em Lua",
        "Integração com bases & frameworks existentes",
        "Otimização de performance",
        "1 Mês de Suporte pós-entrega",
      ],
      popular: true,
      icon: <SiFivem className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-500/10 to-yellow-500/10",
    },
    {
      title: "Desenvolvimento Backend",
      description:
        "APIs robustas e escaláveis com Node.js e Nest.js para aplicações modernas",
      price: "R$ 2.900 - R$ 5.200",
      duration: "5-20 dias",
      features: [
        "API Express integrado ao frontend",
        "Autenticação e autorização",
        "Integração com bancos de dados",
        "Documentação completa",
        "Testes automatizados",
      ],
      icon: <Server className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "Desenvolvimento Frontend",
      description:
        "Interfaces modernas e responsivas com React/Next.js de alta performance",
      price: "R$ 3.000 - R$ 6.000",
      duration: "4-18 dias",
      features: [
        "Design responsivo",
        "Componentes reutilizáveis",
        "Performance otimizada",
        "Integração com APIs",
      ],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-[#637DDB] to-[#637DDB]/80",
      bgGradient: "from-[#637DDB]/10 to-[#637DDB]/5",
    },
    {
      title: "Consultoria Técnica",
      description:
        "Análise de código, arquitetura e mentoria para acelerar seu desenvolvimento",
      price: "R$ 120/hora",
      duration: "Flexível",
      features: [
        "Code review detalhado",
        "Consultoria em arquitetura",
        "Mentoria personalizada",
        "Análise de performance",
        "Recomendações de melhorias",
      ],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  const stats = [
    {
      label: "Anos de Experiência",
      value: "5+",
      icon: Trophy,
      color: "text-yellow-400",
    },
    {
      label: "Projetos Concluídos",
      value: "50+",
      icon: Target,
      color: "text-green-400",
    },
    { label: "Tecnologias", value: "12+", icon: Code, color: "text-[#637DDB]" },
    {
      label: "Clientes Satisfeitos",
      value: "25+",
      icon: Star,
      color: "text-purple-400",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-[#637DDB] to-[#637DDB]/80",
      skills: [
        { name: "Next.js", level: 90, color: "bg-[#1C1C1B]" },
        { name: "React", level: 85, color: "bg-[#637DDB]" },
        { name: "TypeScript", level: 95, color: "bg-[#637DDB]/80" },
        { name: "Tailwind CSS", level: 80, color: "bg-[#637DDB]/60" },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 95, color: "bg-green-500" },
        { name: "Nest.js", level: 85, color: "bg-red-500" },
        { name: "Express", level: 90, color: "bg-[#1C1C1B]" },
        { name: "GraphQL", level: 75, color: "bg-pink-500" },
      ],
    },
    {
      category: "Especialidades",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-500",
      skills: [
        { name: "FiveM Development", level: 95, color: "bg-orange-500" },
        { name: "Lua", level: 90, color: "bg-blue-400" },
        { name: "MySQL", level: 85, color: "bg-orange-600" },
        { name: "Git", level: 90, color: "bg-red-600" },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen bg-[#121211] overflow-x-hidden"
      ref={containerRef}
    >
      <Nav />
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
        <div className="absolute inset-0 bg-gradient-to-br from-[#637DDB]/10 via-[#121211] to-[#637DDB]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#637DDB]/10 via-transparent to-transparent" />
      </div>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-[#F0F0F0]">Olá, eu sou o</span>
                <span className="block bg-gradient-to-r from-[#637DDB] via-[#637DDB]/80 to-[#637DDB] bg-clip-text text-transparent relative">
                  Daniel
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#637DDB]/20 to-[#637DDB]/10 blur-2xl -z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-[#B4B4B4] max-w-4xl mx-auto leading-relaxed"
              >
                Desenvolvedor{" "}
                <span className="text-[#637DDB] font-semibold">Full Stack</span>{" "}
                especialista em{" "}
                <span className="text-orange-400 font-semibold">FiveM</span> e
                tecnologias web modernas.
                <br />
                Transformo ideias em soluções digitais excepcionais.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto my-12"
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-[#3C3C3C] animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-[#3C3C3C] animate-spin"
                style={{
                  animationDuration: "6s",
                  animationDirection: "reverse",
                }}
              />
              <div
                className="absolute inset-4 rounded-full border border-[#3C3C3C] animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-[#1C1C1B]">
                <Image
                  src="profile.png"
                  alt="Daniel"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-4 h-4 bg-[#637DDB] rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#637DDB]/80 rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg font-medium text-[#F0F0F0] border-[#3C3C3C] hover:border-[#637DDB] bg-[#1C1C1B]/80 backdrop-blur-xl transition-all duration-300 hover:bg-[#637DDB]/20"
                onClick={() =>
                  window.open("https://github.com/DnzxDev", "_blank")
                }
              >
                <Github className="w-5 h-5 mr-2 text-[#F0F0F0] group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg font-medium text-[#F0F0F0] border-[#3C3C3C] hover:border-[#637DDB] bg-[#1C1C1B]/30 backdrop-blur-sm transition-all duration-300 hover:bg-[#637DDB]/20"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-5 h-5 mr-2 text-[#F0F0F0] group-hover:scale-110 transition-transform" />
                Contato
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-12"
            >
              <p className="text-[#B4B4B4] mb-6 font-medium text-lg">
                Tecnologias que domino:
              </p>
              <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {[
                  {
                    name: "Next.js",
                    color: "bg-[#1C1C1B] text-[#F0F0F0] hover:bg-[#1C1C1B]/80",
                    icon: "⚡",
                  },
                  {
                    name: "React",
                    color:
                      "bg-[#637DDB]/20 text-[#F0F0F0] hover:bg-[#637DDB]/30",
                    icon: "⚛️",
                  },
                  {
                    name: "Node.js",
                    color:
                      "bg-green-500/20 text-[#F0F0F0] hover:bg-green-500/30",
                    icon: "🟢",
                  },
                  {
                    name: "Nest.js",
                    color: "bg-red-500/20 text-red-300 hover:bg-red-500/30",
                    icon: "🏠",
                  },
                  {
                    name: "TypeScript",
                    color:
                      "bg-[#637DDB]/20 text-[#F0F0F0] hover:bg-[#637DDB]/30",
                    icon: "📘",
                  },
                  {
                    name: "FiveM/Lua",
                    color:
                      "bg-orange-500/20 text-orange-300 hover:bg-orange-500/30",
                    icon: "🎮",
                  },
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} border border-[#3C3C3C] cursor-pointer transition-all duration-300 flex items-center gap-2`}
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

    
      
      <section id="about" className="py-24 px-6 sm:px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#F0F0F0]">Sobre</span>{" "}
              <span className="bg-gradient-to-r from-[#637DDB] to-[#637DDB]/80 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#637DDB] to-[#637DDB]/80 mx-auto rounded-full mb-6" />
            <p className="text-[#B4B4B4] text-xl max-w-3xl mx-auto">
              Conheça a pessoa por trás do código
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-[#B4B4B4] text-lg leading-relaxed">
                <p className="text-xl">
                  Sou <span className="text-[#F0F0F0] font-bold">Daniel</span>,
                  um desenvolvedor apaixonado por criar soluções digitais que
                  fazem a diferença. Com mais de 5 anos de experiência,
                  especializo-me em desenvolvimento{" "}
                  <span className="text-[#637DDB] font-semibold">FiveM</span> e
                  aplicações web modernas.
                </p>
                <p>
                  Minha jornada começou com curiosidade sobre como as coisas
                  funcionam "por baixo dos panos". Hoje, trabalho com
                  tecnologias de ponta como React, Next.js, Node.js e Lua,
                  sempre focando em código limpo, escalável e de alta
                  performance.
                </p>
                <p>
                  Quando não estou programando, você me encontrará explorando
                  novas tecnologias, contribuindo para projetos open source, ou
                  tomando um café enquanto planejo o próximo projeto incrível.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#637DDB]/10 to-[#637DDB]/5 border border-[#3C3C3C] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-[#637DDB] mb-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Localização</span>
                  </div>
                  <p className="text-[#B4B4B4]">Minas Gerais, Brasil</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#637DDB]/10 to-[#637DDB]/5 border border-[#3C3C3C] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-[#637DDB] mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Experiência</span>
                  </div>
                  <p className="text-[#B4B4B4]">5+ anos</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#637DDB]/10 to-[#637DDB]/5 border border-[#3C3C3C] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-[#637DDB] mb-3">
                    <Coffee className="w-5 h-5" />
                    <span className="font-semibold">Combustível</span>
                  </div>
                  <p className="text-[#B4B4B4]">Café & Código</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#637DDB]/10 to-[#637DDB]/5 border border-[#3C3C3C] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-[#637DDB] mb-3">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Paixão</span>
                  </div>
                  <p className="text-[#B4B4B4]">Resolver Problemas</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="py-32 px-20 lg:px-20 sm:px-10 px-6 relative z-10 overflow-hidden"
        id="skills"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#637DDB]/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#637DDB]/50 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1000ms" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#637DDB]/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2000ms" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="relative inline-block">
              <h2 className="text-7xl font-black tracking-tight relative z-10">
                <span className="text-[#F0F0F0] drop-shadow-2xl">Minhas</span>{" "}
                <span className="bg-gradient-to-r from-[#637DDB] via-[#637DDB]/80 to-[#637DDB] bg-clip-text text-transparent animate-pulse">
                  Habilidades
                </span>
              </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#637DDB]/10 via-[#637DDB]/5 to-[#637DDB]/10 blur-2xl rounded-full -z-10" />
            </div>

            <div className="flex items-center justify-center mt-8 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#637DDB] rounded-full" />
              <div
                className="w-8 h-8 mx-4 bg-gradient-to-r from-[#637DDB] via-[#637DDB]/80 to-[#637DDB] rounded-full animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <div className="w-16 h-1 bg-gradient-to-r from-[#637DDB] to-transparent rounded-full" />
            </div>

            <p className="text-[#B4B4B4] text-xl max-w-3xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que utilizo para criar experiências
              digitais
              <span className="text-transparent bg-gradient-to-r from-[#637DDB]/80 to-[#637DDB] bg-clip-text font-semibold">
                {" "}
                impactantes
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group perspective-1000"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#637DDB]/50 via-[#637DDB]/30 to-[#637DDB]/40 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="relative bg-[#1C1C1B]/60 backdrop-blur-xl border border-[#3C3C3C]/50 rounded-3xl shadow-2xl p-8 hover:shadow-[#637DDB]/10 transition-all duration-700 hover:border-[#3C3C3C]/70 transform-gpu">
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-tl-3xl border-t-2 border-l-2 border-[#637DDB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 rounded-br-3xl border-b-2 border-r-2 border-[#637DDB]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-40 blur-2xl z-0 pointer-events-none animate-bounce"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${category.gradient})`,
                      animationDuration: "3s",
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div className="relative">
                        <div
                          className={`p-5 bg-gradient-to-br ${category.gradient} rounded-2xl mr-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white text-4xl filter drop-shadow-md">
                            {category.icon}
                          </div>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#637DDB] group-hover:to-[#637DDB]/80 group-hover:bg-clip-text transition-all duration-300">
                          {category.category}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#637DDB] to-[#637DDB]/80 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[#F0F0F0] font-semibold text-lg group-hover/skill:text-[#637DDB] group-hover/skill:scale-105 transition-all duration-300 origin-left">
                              {skill.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                              <span className="text-[#B4B4B4] text-base font-mono bg-[#1C1C1B]/50 px-2 py-1 rounded-md">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <div className="relative w-full h-4 bg-[#3C3C3C]/70 rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div
                              className={`h-4 rounded-full relative overflow-hidden ${skill.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.8,
                                delay: skillIndex * 0.15,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent animate-pulse rounded-full" />
                              <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-ping"
                                style={{ animationDuration: "2s" }}
                              />
                            </motion.div>
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#F0F0F0] rounded-full opacity-0 group-hover/skill:opacity-100 animate-ping transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10" id="projects">
        <ProjectsSection />
      </div>
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#F0F0F0]">Vamos</span>{" "}
              <span className="bg-gradient-to-r from-[#637DDB] to-[#637DDB]/80 bg-clip-text text-transparent">
                Conversar
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#637DDB] to-[#637DDB]/80 mx-auto rounded-full mb-6" />
            <p className="text-[#B4B4B4] text-xl">
              Tem um projeto em mente? Vamos transformá-lo em realidade!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "WhatsApp",
                description: "Resposta rápida",
                icon: <Phone className="w-6 h-6 text-[#F0F0F0]" />,
                url: "https://wa.me/5532991048844",
                color: "from-green-500 to-green-600",
                hoverColor: "hover:from-green-600 hover:to-green-700",
              },
              {
                name: "LinkedIn",
                description: "Networking profissional",
                icon: <Linkedin className="w-6 h-6 text-[#F0F0F0]" />,
                url: "https://linkedin.com/in/dnzxdevop",
                color: "from-[#637DDB] to-[#637DDB]/80",
                hoverColor: "hover:from-[#4B7DDB] hover:to-[#637DDB]/60",
              },
              {
                name: "GitHub",
                description: "Veja meu código",
                icon: <Github className="w-6 h-6 text-[#F0F0F0]" />,
                url: "https://github.com/DnzxDev",
                color: "from-[#1C1C1B] to-[#121211]",
                hoverColor: "hover:from-[#1C1C1B]/80 hover:to-[#121211]/80",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`block p-8 bg-gradient-to-br ${contact.color} ${contact.hoverColor} rounded-3xl transition-all duration-300 transform hover:shadow-2xl group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#F0F0F0] mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-[#B4B4B4]">{contact.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
