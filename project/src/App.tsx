/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-lg py-3 md:py-4 shadow-xl' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-yellow flex items-center justify-center">
            <Dumbbell className="text-brand-dark w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase whitespace-nowrap">
            Lya Rejane <span className="text-brand-yellow">Academia</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5586995159038" 
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-yellow text-brand-dark px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
          >
            Matricule-se
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 -mr-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-widest hover:text-brand-yellow py-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5586995159038" 
                className="bg-brand-yellow text-brand-dark px-6 py-5 text-center font-bold uppercase tracking-widest text-sm"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent lg:via-brand-dark/80"></div>
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            A melhor estrutura de Teresina
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1] md:leading-[0.9]">
            Transforme seu <span className="text-brand-yellow">corpo</span> na melhor versão
          </h1>
          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Treine com energia, estrutura premium e resultados reais. A Lya Rejane Academia oferece o ambiente perfeito para sua evolução física e mental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              Começar agora <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://wa.me/5586995159038" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-4 border-2 border-brand-yellow/30 translate-x-4 translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
            alt="Athlete training" 
            className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-6 z-20 shadow-2xl">
            <div className="text-brand-dark font-display font-black text-4xl leading-none">2</div>
            <div className="text-brand-dark text-xs font-bold uppercase tracking-widest">Unidades</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-brand-gray relative overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-5xl mb-6 md:mb-8">
            Compromisso com sua <span className="text-brand-yellow">performance</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Na Lya Rejane Academia, acreditamos que a atividade física é o pilar fundamental para uma vida extraordinária. Nossa missão é proporcionar um ambiente motivador, seguro e altamente profissional para que você alcance seus objetivos.
            </p>
            <p>
              Com duas unidades estrategicamente localizadas em Teresina, oferecemos uma estrutura moderna com equipamentos de ponta e uma equipe de profissionais qualificados prontos para guiar sua jornada de transformação.
            </p>
            <p>
              Seja você um iniciante ou um atleta experiente, aqui você encontra o suporte necessário para superar seus limites e conquistar a saúde e o corpo que sempre desejou.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-yellow mb-1 md:mb-2">500+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Alunos Ativos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-yellow mb-1 md:mb-2">10+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Anos de Experiência</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1571902251103-d71b46b5fce3?q=80&w=1974&auto=format&fit=crop" 
            alt="Gym interior" 
            className="w-full h-48 md:h-64 object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
            alt="Gym equipment" 
            className="w-full h-48 md:h-64 object-cover mt-6 md:mt-8"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    { icon: <Zap className="w-8 h-8" />, title: "Equipamentos Premium", desc: "Maquinário de última geração para máxima eficiência." },
    { icon: <Users className="w-8 h-8" />, title: "Time de Especialistas", desc: "Profissionais altamente qualificados e atenciosos." },
    { icon: <Award className="w-8 h-8" />, title: "Ambiente Exclusivo", desc: "Espaço limpo, organizado e focado em performance." },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: "Preço Justo", desc: "Planos acessíveis que cabem no seu bolso." },
    { icon: <MapPin className="w-8 h-8" />, title: "Duas Unidades", desc: "Mais conveniência para o seu dia a dia." },
    { icon: <Phone className="w-8 h-8" />, title: "Suporte Total", desc: "Atendimento humanizado e focado no aluno." },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Por que escolher a <span className="text-brand-yellow">Lya Rejane</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Oferecemos tudo o que você precisa para um treino de alto nível com o melhor custo-benefício da região.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-brand-gray border border-white/5 hover:border-brand-yellow/30 transition-all group"
            >
              <div className="text-brand-yellow mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Units = () => {
  const units = [
    {
      name: "Unidade 1 — Matriz",
      address: "Av. Pref. Hugo Bastos, 4236 - Vale Quem Tem, Teresina - PI",
      phone: "(86) 99515-9038",
      hours: "Abre às 05:30",
      rating: 4.6,
      reviews: 51,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Pref.+Hugo+Bastos,+4236+-+Vale+Quem+Tem,+Teresina+-+PI",
      waLink: "https://wa.me/5586995159038"
    },
    {
      name: "Unidade 2 — Filial",
      address: "Av. São Gonçalo, 4510 - Verde Lar, Teresina - PI",
      phone: "(86) 99932-6141",
      hours: "Abre às 06:00",
      rating: 4.0,
      reviews: 3,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+São+Gonçalo,+4510+-+Verde+Lar,+Teresina+-+PI",
      waLink: "https://wa.me/5586999326141"
    }
  ];

  return (
    <section id="unidades" className="section-padding bg-brand-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl mb-4">Nossas <span className="text-brand-yellow">Unidades</span></h2>
            <p className="text-gray-400 text-sm md:text-base">Escolha a unidade mais próxima de você e comece hoje.</p>
          </div>
          <div className="flex items-center gap-2 bg-brand-dark px-4 py-2 md:px-6 md:py-3 border border-white/10">
            <Star className="text-brand-yellow fill-brand-yellow w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-lg md:text-xl">4.6</span>
            <span className="text-gray-500 text-[10px] md:text-sm">Nota Geral</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-dark border border-white/5 overflow-hidden group flex flex-col"
            >
              <div className="h-40 md:h-48 overflow-hidden relative">
                <img 
                  src={idx === 0 ? "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" : "https://images.unsplash.com/photo-1590239926044-4131f5d0654d?q=80&w=2070&auto=format&fit=crop"} 
                  alt={unit.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark px-3 py-1 text-[10px] font-black uppercase">
                  {unit.rating} <Star className="inline w-3 h-3 fill-brand-dark" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl mb-4 md:mb-6">{unit.name}</h3>
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">{unit.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow shrink-0" />
                    <span className="text-xs md:text-sm">{unit.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow shrink-0" />
                    <span className="text-xs md:text-sm">{unit.phone}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <a 
                    href={unit.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="py-3.5 border border-white/20 text-center text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all"
                  >
                    Ver Localização
                  </a>
                  <a 
                    href={unit.waLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="py-3.5 bg-brand-yellow text-brand-dark text-center text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Carlos Silva", text: "Academia ampla, com ótimos profissionais e bons aparelhos. O clima é excelente para treinar pesado.", rating: 5 },
    { name: "Mariana Costa", text: "Ambiente limpo, atendimento excelente e ótima experiência. Me sinto muito motivada aqui.", rating: 5 },
    { name: "João Pedro", text: "Estrutura com grande potencial e foco em melhoria contínua. Os professores são muito atenciosos.", rating: 4 },
    { name: "Ana Beatriz", text: "Preço acessível e boa variedade de equipamentos. Melhor custo-benefício de Teresina.", rating: 5 },
  ];

  return (
    <section className="section-padding bg-brand-dark overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-12 md:mb-16">O que nossos <span className="text-brand-yellow">alunos</span> dizem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-brand-gray border border-white/5 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < rev.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-700'}`} />
                ))}
              </div>
              <p className="text-gray-400 text-xs md:text-sm italic mb-6 flex-grow">"{rev.text}"</p>
              <div className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-yellow">{rev.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902251103-d71b46b5fce3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590239926044-4131f5d0654d?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <section className="section-padding bg-brand-gray">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-12 md:mb-16">Nossa <span className="text-brand-yellow">Estrutura</span></h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    { name: "Básico", price: "89,90", features: ["Acesso a 1 unidade", "Musculação", "Horário livre", "Sem taxa de adesão"], popular: false },
    { name: "Plus", price: "109,90", features: ["Acesso às 2 unidades", "Musculação + Cardio", "Avaliação física mensal", "Horário livre"], popular: true },
    { name: "Premium", price: "149,90", features: ["Acesso total VIP", "Todas as modalidades", "Acompanhamento exclusivo", "Brinde de boas-vindas"], popular: false },
    { name: "Anual", price: "79,90", features: ["Pagamento recorrente", "Acesso às 2 unidades", "Melhor custo-benefício", "Congelamento de 30 dias"], popular: false },
  ];

  return (
    <section id="planos" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Escolha seu <span className="text-brand-yellow">Plano</span></h2>
          <p className="text-gray-400 text-sm md:text-base">Temos o plano ideal para o seu objetivo e bolso.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 flex flex-col border ${plan.popular ? 'border-brand-yellow bg-brand-yellow/5' : 'border-white/10 bg-brand-gray'} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-dark px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  Mais Vantajoso
                </div>
              )}
              <h3 className="text-lg md:text-xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                <span className="text-xs md:text-sm text-gray-400">R$</span>
                <span className="text-3xl md:text-4xl font-display font-black text-brand-yellow">{plan.price}</span>
                <span className="text-xs md:text-sm text-gray-400">/mês</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand-yellow text-brand-dark hover:bg-white' : 'border border-white/20 hover:bg-white hover:text-brand-dark'}`}>
                Assinar Agora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym motivation" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-yellow/10"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl mb-6 md:mb-8">Seu próximo nível <span className="text-brand-yellow">começa agora</span></h2>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">Não deixe para amanhã a transformação que você pode iniciar hoje. Junte-se à nossa comunidade.</p>
          <a 
            href="https://wa.me/5586995159038" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-brand-yellow text-brand-dark px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-brand-yellow/20 w-full sm:w-auto"
          >
            Falar no WhatsApp <MessageCircle className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-16 md:pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center">
                <Dumbbell className="text-brand-dark w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase">
                Lya Rejane <span className="text-brand-yellow">Academia</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
              A rede de academias que mais cresce em Teresina. Foco em resultados, estrutura premium e atendimento de excelência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-white">Unidades</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li>Vale Quem Tem, Teresina - PI</li>
              <li>Verde Lar, Teresina - PI</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-white">Contato</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li>(86) 99515-9038</li>
              <li>(86) 99932-6141</li>
              <li>contato@lyarejane.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 text-center md:text-left">
          <div>© 2026 Lya Rejane Academia. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-yellow">Privacidade</a>
            <a href="#" className="hover:text-brand-yellow">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Units />
      <Testimonials />
      <Gallery />
      <Plans />
      <FinalCTA />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5586995159038" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
