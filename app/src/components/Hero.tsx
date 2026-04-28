"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível 24h em São Paulo
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900">
              Sua entrega <br />
              <span className="text-primary">na velocidade</span> <br />
              que você precisa.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Mais de 9 anos de excelência em entregas rápidas, coletas e logística urbana. 
              Segurança e agilidade para documentos e pequenos volumes em toda SP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1 group">
                Solicitar Moto Frete
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Ver Tabela de Preços
              </button>
            </div>

            {/* Features Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col gap-1">
                <Clock className="text-primary w-6 h-6 mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Rápido</span>
                <span className="font-semibold text-sm">Entrega Express</span>
              </div>
              <div className="flex flex-col gap-1">
                <ShieldCheck className="text-primary w-6 h-6 mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Seguro</span>
                <span className="font-semibold text-sm">Garantia Total</span>
              </div>
              <div className="flex flex-col gap-1">
                <MapPin className="text-primary w-6 h-6 mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Fácil</span>
                <span className="font-semibold text-sm">Toda Grande SP</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=1471&auto=format&fit=crop" 
                alt="Delivery service" 
                className="w-full aspect-square object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-green-100 p-3 rounded-2xl">
                <Clock className="text-green-600 w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Tempo Médio</p>
                <p className="text-2xl font-black text-primary">35 min</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
