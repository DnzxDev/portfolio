"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Code, Server, DatabaseZap, Github, Linkedin, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiFivem } from "react-icons/si";
import { ProjectsSection } from "./projects"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-3xl"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
            <Image
              src="https://avatars.githubusercontent.com/u/102752827?v=4"
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full border-2 border-primary"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Dnzx
          </h1>
          <p className="text-xl text-muted-foreground">
            Hello, my name is Daniel,  I'm a full stack developer focused on fivem resources and web development! 
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://github.com/Dn099z1', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            {[
              { icon: Code, text: "Next.js" },
              { icon: Server, text: "Nest.js" },
              { icon: DatabaseZap, text: "API's" },
              { icon: SiFivem, text: "FiveM" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/10 border border-white/10"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Brain className="w-8 h-8" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Next.js", level: "Intermediate" },
              { name: "React", level: "Intermediate" },
              { name: "TypeScript", level: "Intermediate" },
              { name: "Node.js", level: "Intermediate" },
              { name: "Nest.js", level: "Intermediate" },
              { name: "FiveM Development", level: "Advanced" },
              { name: "Lua", level: "Advanced" },
              { name: "MySQL", level: "Advanced" },
              { name: "GraphQL", level: "Intermediate" },
              { name: "Tailwind CSS", level: "Intermediate" },
              { name: "API Development", level: "Advanced" },
              { name: "Git", level: "Intermediate" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-black/20 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{
                      width: skill.level === "Advanced" ? "90%" : "75%"
                    }}
                  />
                </div>
                <span className="text-sm text-muted-foreground mt-1 block">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
    
      
     
    
    </main>
  )
}
