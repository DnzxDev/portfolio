import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Lock, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import { fetchGitHubRepo, fetchFileContent, getLanguageFromFilename, type GitHubFile } from "@/lib/github"; // Ensure this import is correct

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
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  isPrivate,
  github,
}: ProjectCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [files, setFiles] = useState<GitHubFile[]>([]);
  const [loading, setLoading] = useState(false);

 
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group relative overflow-hidden rounded-lg bg-black/20 border border-white/10 p-6 hover:border-primary/50 transition-colors"
        style={{ pointerEvents: "auto" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={428}
            height={200}
            className="border-2 rounded-2xl align-bottom border-primary mb-4"
          />
        )}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {isPrivate ? (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Private</span>
            </div>
          ) : github && (
            <div className="flex gap-2 relative z-10">
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a
                  href={`https://github.com/${github.owner}/${github.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              </Button>
            </div>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {files.length > 0 && (
        <CodePreview
          isOpen={showCode}
          onClose={() => {
            setShowCode(false);
            setFiles([]);
          }}
          files={files}
          projectTitle={title}
        />
      )}
    </>
  );
}
