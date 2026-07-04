'use client';

import { motion, Variants } from 'framer-motion';
import { Globe, Award, ClipboardCheck, Handshake, Users, Lightbulb } from 'lucide-react';

export default function Partnerships() {
  const milestones = [
    {
      year: '2017',
      title: 'R&D Center',
      desc: 'Establishment of state-of-the-art research & development facility in Hyderabad.',
    },
    {
      year: '2018',
      title: 'cGMP Manufacturing',
      desc: 'Commissioning of cGMP-compliant manufacturing facility in Nalagarh.',
    },
    {
      year: '2021',
      title: 'IP Filings',
      desc: 'Filing of international patents for non-infringing formulation pathways.',
    },
    {
      year: '2023',
      title: 'International Audits',
      desc: 'Successful facility audits by international pharmaceutical customers.',
    },
    {
      year: '2024 – 2025',
      title: 'Portfolio Expansion',
      desc: 'Expanded global product portfolio across semi-regulated and regulated markets.',
    },
  ];

  const benefits = [
    {
      title: 'Innovation First',
      description: 'Pioneering formulation strategies that break technical barriers and bypass patent bottlenecks.',
      icon: Lightbulb,
    },
    {
      title: 'Global Market Focus',
      description: 'Enabling seamless expansion with products engineered to meet diverse regulatory jurisdictions worldwide.',
      icon: Globe,
    },
    {
      title: 'Regulatory Excellence',
      description: 'Robust technical dossiers prepared to meet strict EU-GMP, US-FDA, and local guidelines.',
      icon: Award,
    },
    {
      title: 'Quality Assurance',
      description: 'Embedded Quality-by-Design (QbD) methodologies across formulation and batch manufacturing.',
      icon: ClipboardCheck,
    },
    {
      title: 'Customer-Centric Development',
      description: 'Custom formulation research tailored to specific dosage forms, release profiles, and cost metrics.',
      icon: Users,
    },
    {
      title: 'Long-Term Partnerships',
      description: 'A transparent B2B collaboration philosophy offering licensing, tech-transfers, and contract supply.',
      icon: Handshake,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="partnerships"
      className="relative py-24 bg-gradient-to-b from-therallen-light via-white to-therallen-light overflow-hidden"
    >
      {/* Background ambient light effects */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-therallen-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-therallen-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-therallen-blue font-bold text-xs tracking-wider uppercase mb-3"
          >
            Global Reach
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-therallen-black tracking-tight mb-6"
          >
            Growing Together <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">Globally</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Supporting pharmaceutical companies worldwide through innovation, quality, and long-term strategic partnerships.
          </motion.p>
        </div>

        {/* Milestone Timeline Card Carousel/Row */}
        <div className="relative mb-32">
          {/* Central Horizontal Connector Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-[2px] bg-slate-100 z-0" />

          {/* Sequential scroll-triggered timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10"
          >
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Visual Node */}
                <div className="relative mb-6 lg:mx-auto flex justify-center items-center">
                  {/* Timeline Year Badge */}
                  <div className="relative z-10 bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] px-4 py-2 rounded-full font-extrabold text-[15px] text-therallen-blue group-hover:bg-therallen-blue group-hover:text-white group-hover:border-therallen-blue transition-all duration-300">
                    {milestone.year}
                  </div>
                  {/* Micro timeline pulse */}
                  <div className="absolute inset-0 bg-therallen-blue/5 rounded-full scale-135 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Milestone Details Card */}
                <div className="bg-white border border-slate-100/80 shadow-[0_4px_20px_rgba(0,87,217,0.02)] p-6 rounded-2xl w-full flex-grow hover:shadow-[0_15px_30px_rgba(0,87,217,0.04)] hover:-translate-y-1 transition-all duration-500 ease-out">
                  <h4 className="font-bold text-therallen-black text-[16px] mb-2 group-hover:text-therallen-blue transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Choose Therallen Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase mb-3 block">
            The Therallen Advantage
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-therallen-black tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">Therallen</span>
          </h3>
        </div>

        {/* Why Choose Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white border border-slate-100/95 shadow-[0_4px_30px_rgba(0,0,0,0.005)] hover:shadow-[0_20px_40px_rgba(0,198,255,0.06)] p-8 rounded-3xl overflow-hidden transition-all duration-500"
              >
                {/* Background soft glowing blur on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-therallen-cyan/5 rounded-full blur-xl group-hover:bg-therallen-cyan/15 group-hover:scale-125 transition-all duration-500" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-therallen-cyan/5 text-therallen-blue group-hover:bg-gradient-to-r group-hover:from-therallen-cyan group-hover:to-therallen-blue group-hover:text-white transition-all duration-500">
                    <IconComponent size={22} className="transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-bold text-therallen-black transition-colors duration-300 group-hover:text-therallen-blue">
                    {benefit.title}
                  </h4>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                  {benefit.description}
                </p>

                {/* Left accent line indicator */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-therallen-cyan transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
