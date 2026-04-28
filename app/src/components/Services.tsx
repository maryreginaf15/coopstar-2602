"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bike, Package, Map, ChevronRight, Store, Banknote } from "lucide-react";

const services = [
  {
    title: "Moto Frete Express",
    description: "Entregas rápidas de documentos e pequenos volumes. Ideal para bancos, cartórios e retiradas em aeroportos.",
    icon: Bike,
    color: "bg-red-50 text-primary",
  },
  {
    title: "Delivery Corporativo",
    description: "Serviço dedicado para farmácias, pizzarias e restaurantes com o melhor custo-benefício do mercado.",
    icon: Store,
    color: "bg-blue-50 text-secondary",
  },
  {
    title: "Serviços Bancários",
    description: "Coleta e entrega de malotes, pagamentos e serviços administrativos com total segurança e sigilo.",
    icon: Banknote,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Grande São Paulo",
    description: "Atendimento estendido para cidades vizinhas e litoral. Consulte nossa tabela diferenciada.",
    icon: Map,
    color: "bg-orange-50 text-orange-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Soluções completas em <br className="hidden md:block" /> logística urbana.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Seja para uma entrega pontual ou um contrato mensal de delivery, temos a equipe certa para a sua necessidade.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Saber mais <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pricing CTA Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-125" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Precisa de uma tabela personalizada?</h3>
              <p className="text-slate-400 text-lg">
                Oferecemos condições especiais para empresas com alto volume de entregas e contratos mensais.
              </p>
            </div>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all whitespace-nowrap">
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
