"use client"

import { motion } from "framer-motion"
import { Code2, Home, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code2 },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 backdrop-blur-sm">
      <motion.div 
        className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/10 border border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 text-sm transition-colors hover:text-primary
                ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`}
            >
              <Icon className="w-4 h-4" />
              <span>{link.name}</span>
            </Link>
          )
        })}
      </motion.div>
    </nav>
  )
}