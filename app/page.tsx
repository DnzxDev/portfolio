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
      price: "R$ 120/hora",
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
      <StarsBackground />
      <ShootingStars />
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-gray-950 to-blue-800/10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 sm:space-y-8 max-w-4xl w-full relative z-10"
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
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-950/20" />
        <div className="max-w-6xl mx-auto relative z-10">
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
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Localização</span>
                  </div>
                  <p className="text-gray-300">Minas Gerais, Brasil</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
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
      <section
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Tecnologias
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Next.js",
                level: "Intermediate",
                color: "from-slate-400 to-slate-600",
              },
              {
                name: "React",
                level: "Intermediate",
                color: "from-blue-400 to-blue-600",
              },
              {
                name: "TypeScript",
                level: "Intermediate",
                color: "from-blue-500 to-blue-700",
              },
              {
                name: "Node.js",
                level: "Intermediate",
                color: "from-green-400 to-green-600",
              },
              {
                name: "Nest.js",
                level: "Intermediate",
                color: "from-red-400 to-red-600",
              },
              {
                name: "FiveM Development",
                level: "Advanced",
                color: "from-orange-400 to-yellow-600",
              },
              {
                name: "Lua",
                level: "Advanced",
                color: "from-indigo-400 to-indigo-600",
              },
              {
                name: "MySQL",
                level: "Advanced",
                color: "from-amber-400 to-orange-600",
              },
              {
                name: "GraphQL",
                level: "Intermediate",
                color: "from-pink-400 to-rose-600",
              },
              {
                name: "Tailwind CSS",
                level: "Intermediate",
                color: "from-cyan-400 to-teal-600",
              },
              {
                name: "API Development",
                level: "Advanced",
                color: "from-emerald-400 to-green-600",
              },
              {
                name: "Git",
                level: "Intermediate",
                color: "from-orange-500 to-red-500",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 min-w-0"
              >
                <h3 className="font-semibold mb-3 text-white text-sm sm:text-base break-words">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 mb-2">
                  <motion.div
                    className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{
                      width: skill.level === "Advanced" ? "90%" : "75%",
                    }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  />
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    skill.level === "Advanced"
                      ? "text-green-400"
                      : "text-cyan-400"
                  }`}
                >
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="services"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-gray-950/50" />
        <div className="max-w-7xl mx-auto relative z-10">
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
            className="text-center mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 to-cyan-950/30 border border-blue-800/30"
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

      <ProjectsSection />
    </main>
  );
}
