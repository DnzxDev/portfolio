"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
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
    { label: "Tecnologias", value: "12+", icon: Code, color: "text-blue-400" },
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
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Next.js", level: 90, color: "bg-slate-700" },
        { name: "React", level: 85, color: "bg-blue-500" },
        { name: "TypeScript", level: 95, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 95, color: "bg-green-500" },
        { name: "Nest.js", level: 85, color: "bg-red-500" },
        { name: "Express", level: 90, color: "bg-gray-600" },
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
      className="min-h-screen bg-slate-950 overflow-x-hidden"
      ref={containerRef}
    >
      <Nav />
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </div>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white">Olá, eu sou o</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent relative">
                  Daniel
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10"
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
                className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              >
                Desenvolvedor{" "}
                <span className="text-cyan-400 font-semibold">Full Stack</span>{" "}
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
                className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-purple-500/30 animate-spin"
                style={{
                  animationDuration: "6s",
                  animationDirection: "reverse",
                }}
              />
              <div
                className="absolute inset-4 rounded-full border border-cyan-500/30 animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-slate-800">
                <Image
                  src="profile.png"
                  alt="Daniel - Desenvolvedor Full Stack"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-4 h-4 bg-blue-400 rounded-full"
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
              <motion.div
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-purple-400 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 transition-all duration-300 border-0"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10 flex items-center">
                  Ver Meus Serviços
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg border-slate-700 hover:border-blue-500 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/10"
                onClick={() =>
                  window.open("https://github.com/DnzxDev", "_blank")
                }
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-lg border-slate-700 hover:border-purple-500 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contato
              </Button>
            </motion.div>

            {/* Tech Stack aprimorado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-12"
            >
              <p className="text-slate-400 mb-6 font-medium text-lg">
                Tecnologias que domino:
              </p>
              <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {[
                  {
                    name: "Next.js",
                    color: "bg-slate-700 text-slate-200 hover:bg-slate-600",
                    icon: "⚡",
                  },
                  {
                    name: "React",
                    color: "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30",
                    icon: "⚛️",
                  },
                  {
                    name: "Node.js",
                    color:
                      "bg-green-500/20 text-green-300 hover:bg-green-500/30",
                    icon: "🟢",
                  },
                  {
                    name: "Nest.js",
                    color: "bg-red-500/20 text-red-300 hover:bg-red-500/30",
                    icon: "🏠",
                  },
                  {
                    name: "TypeScript",
                    color: "bg-blue-600/20 text-blue-200 hover:bg-blue-600/30",
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
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} border border-white/10 cursor-pointer transition-all duration-300 flex items-center gap-2`}
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

      {/* Stats Section aprimorado */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Números que Impressionam
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="text-center p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  <motion.div
                    className="text-4xl font-bold text-white mb-2 relative z-10"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-slate-400 font-medium relative z-10">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Sobre</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Conheça a pessoa por trás do código
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p className="text-xl">
                  Sou <span className="text-white font-bold">Daniel</span>, um
                  desenvolvedor apaixonado por criar soluções digitais que fazem
                  a diferença. Com mais de 5 anos de experiência, especializo-me
                  em desenvolvimento{" "}
                  <span className="text-cyan-400 font-semibold">FiveM</span> e
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
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-blue-400 mb-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Localização</span>
                  </div>
                  <p className="text-slate-300">Minas Gerais, Brasil</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-purple-400 mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Experiência</span>
                  </div>
                  <p className="text-slate-300">5+ anos</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-green-400 mb-3">
                    <Coffee className="w-5 h-5" />
                    <span className="font-semibold">Combustível</span>
                  </div>
                  <p className="text-slate-300">Café & Código</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-orange-400 mb-3">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Paixão</span>
                  </div>
                  <p className="text-slate-300">Resolver Problemas</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-spin"
                        style={{ animationDuration: "8s" }}
                      />
                      <div className="absolute inset-1 bg-slate-900 rounded-full" />
                      <Image
                        src="https://avatars.githubusercontent.com/u/102752827?v=4"
                        alt="Profile"
                        width={152}
                        height={152}
                        className="absolute inset-1 w-full h-full object-cover rounded-full p-1"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Daniel
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">
                        Disponível
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 mb-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                      onClick={() =>
                        window.open("https://github.com/DnzxDev", "_blank")
                      }
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/dnzxdevop/",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-slate-400 text-sm mb-4">
                      "É mais fácil ser o primeiro do que continuar a ser o
                      primeiro."
                    </p>
                    <div className="text-slate-500 text-xs">- Bill Gates</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" id="skills">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Minhas</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Tecnologias e ferramentas que uso para criar soluções excepcionais
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500 relative overflow-hidden h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div
                        className={`p-4 bg-gradient-to-br ${category.gradient} bg-opacity-20 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{category.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-slate-400 text-sm font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                              <motion.div
                                className={`${skill.color} h-3 rounded-full relative`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1.5,
                                  delay: skillIndex * 0.1,
                                  ease: "easeOut",
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                            </div>
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
      <section
        id="services"
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Meus</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Serviços
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Soluções personalizadas para transformar suas ideias em realidade
              digital
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 group overflow-hidden ${
                  service.popular
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 shadow-2xl shadow-blue-500/10"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Efeito de brilho */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-8">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-start gap-3 group/feature"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform" />
                        <span className="text-slate-300 group-hover/feature:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="mb-6"
                >
                  <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                </motion.div>

                <h3 className="text-4xl font-bold text-white mb-6">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
                  Vamos conversar sobre suas necessidades e criar uma solução
                  personalizada que supere suas expectativas.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 text-xl font-semibold shadow-2xl shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="flex items-center">
                    Vamos Conversar
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
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
              <span className="text-white">Vamos</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conversar
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-xl">
              Tem um projeto em mente? Vamos transformá-lo em realidade!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "WhatsApp",
                description: "Resposta rápida",
                icon: <Phone className="w-6 h-6" />,
                url: "https://wa.me/5532991048844",
                color: "from-green-500 to-green-600",
                hoverColor: "hover:from-green-600 hover:to-green-700",
              },
              {
                name: "LinkedIn",
                description: "Networking profissional",
                icon: <Linkedin className="w-6 h-6" />,
                url: "https://linkedin.com/in/dnzxdevop",
                color: "from-blue-600 to-blue-700",
                hoverColor: "hover:from-blue-700 hover:to-blue-800",
              },
              {
                name: "GitHub",
                description: "Veja meu código",
                icon: <Github className="w-6 h-6" />,
                url: "https://github.com/DnzxDev",
                color: "from-gray-600 to-gray-700",
                hoverColor: "hover:from-gray-700 hover:to-gray-800",
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-white/80">{contact.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2024 Daniel Angelo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
