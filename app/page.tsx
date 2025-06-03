"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiFivem } from "react-icons/si";
import { ProjectsSection } from "./projects";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";


export default function Home() {
  const services = [
    {
      title: "Desenvolvimento FiveM",
      description:
        "Scripts personalizados, sistemas complexos e otimização de performance",
      price: "R$ 550 - R$ 1.200",
      duration: "3-15 dias",
      features: [
        "Scripts personalizados em Lua",
        "Integração com bases & frameworks existentes",
        "Otimização de performance",
        "1 Mês de Suporte pós-entrega",
      ],
      popular: true,
    },
    {
      title: "Desenvolvimento Backend",
      description: "APIs robustas e escaláveis com Node.js e Nest.js",
      price: "R$ 1.200 - R$ 3.200",
      duration: "5-20 dias",
      features: [
        "API Express integrado ao frontend",
        "Autenticação e autorização",
        "Integração com bancos de dados",
        "Documentação completa",
        "Testes automatizados",
      ],
    },
    {
      title: "Desenvolvimento Frontend",
      description: "Interfaces modernas e responsivas com React/Next.js",
      price: "R$ 1.000 - R$ 3.000",
      duration: "4-18 dias",
      features: [
        "Design responsivo",
        "Componentes reutilizáveis",
        "Performance otimizada",
        "Integração com APIs",
      ],
    },
    {
      title: "Consultoria Técnica",
      description:
        "Análise de código, arquitetura e mentoria em desenvolvimento",
      price: "R$ 80/hora",
      duration: "Flexível",
      features: [
        "Code review detalhado",
        "Consultoria em arquitetura",
        "Mentoria personalizada",
        "Análise de performance",
        "Recomendações de melhorias",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Nav />
      
      {/* Background global fixo para todas as seções */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-gray-950 to-blue-800/5" />
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-spin"
              style={{ animationDuration: "4s" }}
            />
            <div className="absolute inset-1 rounded-full bg-gray-950" />
            <Image
              src="https://avatars.githubusercontent.com/u/102752827?v=4"
              alt="Profile"
              width={154}
              height={144}
              className="rounded-full border-2 border-gray-800 absolute inset-1 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Dnzx
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Desenvolvedor Full Stack especializado em{" "}
              <span className="text-cyan-400 font-semibold">FiveM</span> e{" "}
              <span className="text-blue-400 font-semibold">
                desenvolvimento web
              </span>
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-xl shadow-blue-500/25 w-full sm:w-auto max-w-xs mx-auto sm:max-w-none sm:mx-0"
              onClick={() =>
                window.open("https://github.com/DnzxDev", "_blank")
              }
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              GitHub
            </Button>
            <Button
              size="lg"
              className="gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto max-w-xs mx-auto sm:max-w-none sm:mx-0"
              onClick={() =>
                window.open("https://www.linkedin.com/in/dnzxdevop/", "_blank")
              }
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6 pt-6 sm:pt-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              {
                icon: Code,
                text: "Next.js",
                color: "from-slate-400 to-slate-600",
              },
              {
                icon: Server,
                text: "Nest.js",
                color: "from-red-400 to-red-600",
              },
              {
                icon: DatabaseZap,
                text: "API's",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: SiFivem,
                text: "FiveM",
                color: "from-orange-400 to-yellow-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + 0.1 * index }}
                className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 min-w-0"
              >
                <div
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color}`}
                >
                  <item.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <div className="hidden sm:block relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl transform rotate-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl transform -rotate-2" />
                <Image
                  src="profile.jpeg"
                  alt="Daniel - Desenvolvedor Full Stack"
                  width={400}
                  height={400}
                  className="rounded-2xl sm:rounded-3xl border-2 border-gray-800 relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="space-y-4 text-gray-300">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Olá! Sou o{" "}
                  <span className="text-blue-400 font-semibold">Daniel</span>,
                  desenvolvedor full stack apaixonado por criar soluções
                  inovadoras e eficientes. Com foco especial em desenvolvimento
                  para{" "}
                  <span className="text-cyan-400 font-semibold">FiveM</span> e
                  aplicações web modernas.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Tenho experiência sólida em tecnologias como React, Next.js,
                  Node.js, Nest.js e Lua, sempre buscando entregar código limpo,
                  escalável e com alta performance. Minha paixão está em
                  transformar ideias complexas em soluções digitais elegantes.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Quando não estou programando, gosto de explorar novas
                  tecnologias, contribuir para projetos open source e
                  compartilhar conhecimento com a comunidade de desenvolvedores.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Localização</span>
                  </div>
                  <p className="text-gray-300">Minas Gerais, Brasil</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Experiência</span>
                  </div>
                  <p className="text-gray-300">5+ anos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Skills &
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Tecnologias
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Transformando ideias em código com paixão e precisão técnica
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "Frontend",
                icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
                skills: [
                  { name: "Next.js", level: 75, color: "from-slate-400 via-slate-500 to-slate-600", glow: "shadow-slate-500/30" },
                  { name: "React", level: 75, color: "from-blue-400 via-blue-500 to-blue-600", glow: "shadow-blue-500/30" },
                  { name: "TypeScript", level: 100, color: "from-blue-500 via-blue-600 to-blue-700", glow: "shadow-blue-600/30" },
                  { name: "Tailwind CSS", level: 75, color: "from-cyan-400 via-teal-500 to-teal-600", glow: "shadow-teal-500/30" }
                ]
              },
              {
                title: "Backend",
                icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
                skills: [
                  { name: "Node.js", level: 100, color: "from-green-400 via-green-500 to-green-600", glow: "shadow-green-500/30" },
                  { name: "Nest.js", level: 85, color: "from-red-400 via-red-500 to-red-600", glow: "shadow-red-500/30" },
                  { name: "Express", level: 90, color: "from-emerald-400 via-emerald-500 to-green-600", glow: "shadow-emerald-500/30" },
                  { name: "GraphQL", level: 75, color: "from-pink-400 via-pink-500 to-rose-600", glow: "shadow-pink-500/30" }
                ]
              },
              {
                title: "Especialidades",
                icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
                skills: [
                  { name: "FiveM Development", level: 90, color: "from-orange-400 via-yellow-500 to-yellow-600", glow: "shadow-yellow-500/30" },
                  { name: "Lua", level: 90, color: "from-indigo-400 via-indigo-500 to-indigo-600", glow: "shadow-indigo-500/30" },
                  { name: "MySQL", level: 90, color: "from-amber-400 via-amber-500 to-orange-600", glow: "shadow-amber-500/30" },
                  { name: "Git", level: 90, color: "from-orange-500 via-red-500 to-red-600", glow: "shadow-orange-500/30" }
                ]
              }
            ].map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="text-white font-semibold text-base sm:text-lg group-hover/skill:text-cyan-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {skill.level >= 90 && <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />}
                          <span className={`text-xs sm:text-sm font-medium ${skill.level >= 90 ? 'text-green-400' : 'text-cyan-400'}`}>
                            {skill.level >= 90 ? 'Expert' : 'Intermediate'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out relative ${skill.glow} shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="absolute -top-0.5 right-0 w-1 sm:w-2 h-3 sm:h-5 bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800">
            {[
              { label: "Tecnologias", value: "12+", icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: "Especialidades", value: "4", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: "Nível Expert", value: "4", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: "Categorias", value: "3", icon: <DatabaseZap className="w-5 h-5 sm:w-6 sm:h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl sm:rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Serviços & Preços
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl mx-auto px-2">
              Soluções personalizadas para suas necessidades de desenvolvimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 min-w-0 ${
                  service.popular
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/50 shadow-2xl shadow-blue-500/25"
                    : "bg-gray-900/50 border-gray-800 hover:border-blue-500/50"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full mt-6 sm:mt-8 py-4 sm:py-6 text-base sm:text-lg font-semibold ${
                    service.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25"
                      : "bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500"
                  } transition-all duration-300`}
                >
                  Solicitar Orçamento
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 to-cyan-950/30 backdrop-blur-sm border border-blue-800/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Cada projeto é único. Entre em contato para discutirmos suas
              necessidades específicas e criaremos uma solução sob medida.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg shadow-blue-500/25 w-full sm:w-auto"
            >
              Vamos Conversar
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="relative z-10">
        <ProjectsSection />
      </div>
    </main>
  );
}
