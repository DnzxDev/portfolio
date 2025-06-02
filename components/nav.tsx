"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Home, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/", icon: Home, sectionId: "home" },
  { name: "Sobre Mim", href: "#about", icon: User, sectionId: "about" },
  { name: "Skills", href: "#skills", icon: User, sectionId: "skills" },
  { name: "Serviços", href: "#services", icon: User, sectionId: "services" },
  { name: "Projetos", href: "#projects", icon: Code2, sectionId: "projects" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Fecha o menu quando redimensiona para desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Verifica o tamanho inicial
    handleResize();

    // Adiciona listener para mudanças de tamanho
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, sectionId: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // Fecha o menu mobile após clicar
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navegação Desktop
  if (!isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <motion.div
          className="relative flex items-center gap-6 px-8 py-4 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none" />

          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href, link.sectionId);
                  }
                }}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative z-10
                    ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-300" />

                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-400 group-hover:text-cyan-400"
                    }`}
                  />
                  <span className="relative z-10">{link.name}</span>
                </motion.div>
              </Link>
            );
          })}

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        </motion.div>
      </nav>
    );
  }

  // Navegação Mobile
  return (
    <>
      {/* Menu Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end p-4">
        <motion.button
          onClick={toggleMobileMenu}
          className="relative p-3 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Menu */}
            <motion.div
              className="fixed top-20 right-4 left-4 z-50 bg-gray-900/95 border border-gray-800 rounded-2xl backdrop-blur-xl shadow-2xl shadow-blue-500/10 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none" />
              
              <div className="relative p-4 space-y-2">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.sectionId;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            handleNavClick(link.href, link.sectionId);
                          }
                        }}
                        className="relative group block"
                      >
                        <motion.div
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative
                            ${
                              isActive
                                ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                                : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                            }`}
                          whileHover={{ x: 8 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}

                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-300" />

                          <Icon
                            className={`w-5 h-5 transition-colors duration-300 ${
                              isActive
                                ? "text-blue-400"
                                : "text-gray-400 group-hover:text-cyan-400"
                            }`}
                          />
                          <span className="relative z-10">{link.name}</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}