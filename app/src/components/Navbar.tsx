"use client";

import React, { useState, useEffect } from "react";
import { Truck, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre Nós", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg transition-transform group-hover:scale-110">
            <Truck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-white md:text-foreground lg:text-foreground"
            )}>
              COOPSTAR
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              Express
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground" : "text-foreground/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Peça Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-bold"
              >
                Peça Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
