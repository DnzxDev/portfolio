import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Lock, Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  fetchGitHubRepo,
  fetchFileContent,
  getLanguageFromFilename,
  type GitHubFile,
} from "@/lib/github";

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
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  isPrivate,
  github,
  liveUrl,
}: ProjectCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [files, setFiles] = useState<GitHubFile[]>([]);
  const [loading, setLoading] = useState(false);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {imageUrl && (
        <div className="relative overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src={imageUrl}
              alt={title}
              width={428}
              height={240}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center gap-3 md:flex"
            >
              {!isPrivate && github && (
                <Button
                  size="sm"
                  className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:bg-blue-600/20"
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
                  className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700"
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

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            {isPrivate && (
              <div className="flex items-center gap-2 text-gray-400">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium">Projeto Privado</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
