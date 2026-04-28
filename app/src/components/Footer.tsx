"use client";

import React from "react";
import { Truck, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">COOPSTAR</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-primary">Express</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Início</a>
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} Coopstar Express. Todos os direitos reservados.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>CNPJ: 00.000.000/0000-00 | Inscrição Estadual: Isento</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-primary fill-primary" />
            <span>para um design de alta performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
