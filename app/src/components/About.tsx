"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Building2, Timer } from "lucide-react";

const stats = [
  { icon: Timer, label: "Anos de Experiência", value: "9+" },
  { icon: Users, label: "Clientes Atendidos", value: "5k+" },
  { icon: Trophy, label: "Entregas Realizadas", value: "50k+" },
  { icon: Building2, label: "Base em Moema", value: "SP" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1620455805861-796a444d7005?q=80&w=1374&auto=format&fit=crop" 
                  alt="Moto courier" 
                  className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover"
                />
                <div className="bg-primary p-8 rounded-3xl text-white">
                  <p className="text-4xl font-black mb-2">24h</p>
                  <p className="font-bold text-sm uppercase tracking-widest opacity-80">Atendimento Ininterrupto</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-secondary p-8 rounded-3xl text-white">
                  <p className="text-4xl font-black mb-2">SP</p>
                  <p className="font-bold text-sm uppercase tracking-widest opacity-80">Especialista em Capital</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1512412086111-943033d59646?q=80&w=1374&auto=format&fit=crop" 
                  alt="City logistics" 
                  className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Sobre a Coopstar Express
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Agilidade que impulsiona o seu negócio.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A Coopstar Express é uma empresa especializada no serviço de entregas e coletas que atua há mais de nove anos no mercado paulistano. 
                Nossa missão é agilizar os processos logísticos dos nossos clientes, tornando-nos parceiros estratégicos no dia a dia.
              </p>
              <p>
                Com base estratégica em Moema, atendemos toda a Capital e Grande São Paulo com uma equipe especializada e treinada para garantir que sua encomenda chegue ao destino com segurança e no prazo combinado.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 border-t pt-12 border-slate-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
