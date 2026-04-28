"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Contato & Localização
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Vamos conversar <br /> sobre sua entrega?
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Estamos prontos para atender sua solicitação a qualquer hora. 
              Entre em contato por telefone, e-mail ou visite nossa base em Moema.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Telefones</p>
                  <p className="text-xl font-bold text-slate-900">(11) 5052-3563</p>
                  <p className="text-xl font-bold text-slate-900">(11) 5051-4442</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-xl font-bold text-slate-900">coopstar_express@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-xl font-bold text-slate-900">Av. Jurucê, 898 - Moema</p>
                  <p className="text-slate-500 font-medium text-lg">São Paulo - SP, 04083-001</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-white border-transparent focus:border-primary focus:ring-0 rounded-2xl p-4 text-slate-900 shadow-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 99999-9999"
                    className="w-full bg-white border-transparent focus:border-primary focus:ring-0 rounded-2xl p-4 text-slate-900 shadow-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                <input 
                  type="email" 
                  placeholder="exemplo@email.com"
                  className="w-full bg-white border-transparent focus:border-primary focus:ring-0 rounded-2xl p-4 text-slate-900 shadow-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Serviço de Interesse</label>
                <select className="w-full bg-white border-transparent focus:border-primary focus:ring-0 rounded-2xl p-4 text-slate-900 shadow-sm transition-all appearance-none">
                  <option>Moto Frete Avulso</option>
                  <option>Contrato Mensal</option>
                  <option>Entrega Corporativa</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Sua Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-white border-transparent focus:border-primary focus:ring-0 rounded-2xl p-4 text-slate-900 shadow-sm transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
