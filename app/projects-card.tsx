"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Github, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  isPrivate: boolean;
  github?: {
    owner: string;
    repo: string;
    path?: string;
  };
  liveUrl?: string;
  category?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  isPrivate,
  github,
  liveUrl,
  category,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const getCategoryColor = (cat?: string) => {
    switch (cat) {
      case "Full Stack":
        return "from-[#637DDB]/20 to-cyan-500/20 text-[#637DDB]";
      case "Dashboard":
        return "from-green-500/20 to-emerald-500/20 text-green-300";
      case "Backend":
        return "from-purple-500/20 to-pink-500/20 text-purple-300";
      case "FiveM":
        return "from-orange-500/20 to-yellow-500/20 text-orange-300";
      case "Utility":
        return "from-gray-500/20 to-slate-500/20 text-[#B4B4B4]";
      case "Integration":
        return "from-red-500/20 to-rose-500/20 text-red-300";
      default:
        return "from-[#637DDB]/20 to-purple-500/20 text-[#637DDB]";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl bg-[#121211] backdrop-blur-sm border border-[#3C3C3C] hover:border-[#637DDB]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#637DDB]/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#637DDB]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {imageUrl && (
        <div className="relative overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={600}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121211]/80 via-[#121211]/20 to-transparent" />
            {category && (
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(
                    category
                  )} backdrop-blur-sm border border-[#F0F0F0]/10 text-[#F0F0F0]`}
                >
                  {category}
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              {isPrivate ? (
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1C1C1B]/80 backdrop-blur-sm rounded-full border border-[#3C3C3C]">
                  <Lock className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs font-medium text-yellow-400">
                    Privado
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1C1C1B]/80 backdrop-blur-sm rounded-full border border-[#3C3C3C]">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-400">
                    Público
                  </span>
                </div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center gap-3"
            >
              {!isPrivate && github && (
                <Button
                  size="sm"
                  className="bg-[#1C1C1B]/90 backdrop-blur-sm border border-[#3C3C3C] hover:border-[#637DDB] hover:bg-[#637DDB]/20 transition-all duration-300 text-[#F0F0F0] hover:text-[#637DDB]"
                  asChild
                >
                  <a
                    href={`https://github.com/${github.owner}/${github.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button
                  size="sm"
                  className="bg-[#637DDB]/90 backdrop-blur-sm hover:bg-[#637DDB] transition-all duration-300 text-[#F0F0F0]"
                  asChild
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}

      <div className="p-8 space-y-6 relative z-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#F0F0F0] group-hover:text-[#637DDB] transition-colors duration-300 leading-tight">
            {title}
          </h3>

          <p className="text-[#B4B4B4] leading-relaxed text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#1C1C1B]/50 text-[#B4B4B4] border border-[#3C3C3C]/50 hover:border-[#637DDB]/50 hover:bg-[#637DDB]/10 hover:text-[#637DDB] transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {!isPrivate && github && (
          <div className="flex items-center justify-between pt-4 border-t border-[#3C3C3C]">
            <div className="flex items-center gap-4 text-[#B4B4B4] text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>Open Source</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-[#B4B4B4] hover:text-[#F0F0F0] hover:bg-[#1C1C1B] transition-all duration-300"
                asChild
              >
                <a
                  href={`https://github.com/${github.owner}/${github.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              {liveUrl && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-[#B4B4B4] hover:text-[#F0F0F0] hover:bg-[#1C1C1B] transition-all duration-300"
                  asChild
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#637DDB]/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-cyan-500/10 to-[#637DDB]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}