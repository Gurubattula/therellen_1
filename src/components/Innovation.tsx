'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, HelpCircle, Shield, Sparkles, Beaker, TrendingUp } from 'lucide-react';

// Register ScrollTrigger client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Innovation() {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineProgressLineRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const isCardsInView = useInView(cardsContainerRef, { once: true, amount: 0.15 });

  useEffect(() => {
    // Scroll progress line animation using GSAP
    if (!timelineProgressLineRef.current || !timelineContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineProgressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: 'top 30%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );
    }, timelineContainerRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      title: 'Pellet Technologies',
      description: 'Expertise in pelletisation processes including extrusion-spheronisation, powder/solution layering, and fluid bed coating for controlled release systems.',
      icon: Layers,
      color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'MUPS Development',
      description: 'Multi-Unit Particulate Systems (MUPS) formulation design engineered for consistent compression, preventing coating damage and ensuring uniform release profile.',
      icon: HelpCircle, // Customized for MUPS particulates
      color: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      title: 'Patent Aware Formulations',
      description: 'IP-guided formulation development to create non-infringing pathways, ensuring solid regulatory positions in global high-entry barrier markets.',
      icon: Shield,
      color: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      title: 'Nitrosamine-Free Products',
      description: 'State-of-the-art impurity profiling and raw material risk management to guarantee nitrosamine-free and genotoxic-impurity-safe formulations.',
      icon: Sparkles,
      color: 'from-cyan-500/10 to-teal-500/10',
    },
    {
      title: 'Analytical Validation',
      description: 'Method development, validation, and stability study setups conforming to international ICH guidelines, ensuring global compliance.',
      icon: Beaker,
      color: 'from-indigo-500/10 to-blue-500/10',
    },
    {
      title: 'Scale-Up Expertise',
      description: 'Seamless technology transfer from laboratory scale to pilot batches and final commercial scale-up under rigorous cGMP environments.',
      icon: TrendingUp,
      color: 'from-teal-500/10 to-cyan-500/10',
    },
  ];

  const processSteps = [
    {
      title: 'Market Intelligence',
      description: 'Analyzing global market needs, patent databases, and product lifecycles to select high-value projects.',
    },
    {
      title: 'Product Selection',
      description: 'Aligning scientific feasibility with commercial targets to define precise product specifications.',
    },
    {
      title: 'Research & Development',
      description: 'Designing non-infringing formulation pathways and prototype formulations at laboratory scales.',
    },
    {
      title: 'Validation',
      description: 'Conducting thorough analytical method validations and stability testing under international standards.',
    },
    {
      title: 'Scale-Up',
      description: 'Transferring technology to pilot plants, optimizing processes for consistent yield and purity.',
    },
    {
      title: 'Commercial Manufacturing',
      description: 'Large-scale commercial production under cGMP requirements for domestic and international markets.',
    },
  ];

  return (
    <section id="innovation" className="relative pt-12 pb-24 bg-white overflow-hidden">
      {/* Background cyan radial highlight */}
      <div className="absolute top-[40%] left-[-10%] w-[50%] h-[50%] rounded-full bg-therallen-cyan/5 blur-[120px] pointer-events-none" />

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
            Core Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-therallen-black tracking-tight mb-6"
          >
            Innovation Driven Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Therallen transforms market intelligence, scientific expertise, and formulation innovation into commercially scalable pharmaceutical solutions.
          </motion.p>
        </div>

        {/* Capability Cards Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col p-8 rounded-3xl bg-white border border-slate-100/90 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,87,217,0.05)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Micro Gradient Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-therallen-blue/[0.01] to-therallen-cyan/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cap.color} rounded-bl-full filter blur-md opacity-50 group-hover:opacity-85 transition-all duration-500 group-hover:scale-110`} />

                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-therallen-blue/5 border border-therallen-blue/10 text-therallen-blue mb-6 group-hover:bg-therallen-blue group-hover:text-white transition-all duration-500 ease-out">
                  <IconComponent size={24} className="transition-transform duration-500 group-hover:rotate-6" />
                </div>

                <h3 className="relative text-xl font-bold text-therallen-black mb-3 group-hover:text-therallen-blue transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="relative text-slate-500 text-sm leading-relaxed flex-grow">
                  {cap.description}
                </p>

                {/* Glowing Card Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-therallen-blue to-therallen-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase mb-3 block">
            End-To-End Execution
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-therallen-black tracking-tight">
            Development Process Timeline
          </h3>
        </div>

        {/* Timeline Path */}
        <div ref={timelineContainerRef} className="relative max-w-4xl mx-auto py-8">
          {/* Background Central Tracking Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0" />
          
          {/* Animated GSAP Scrolling Line */}
          <div
            ref={timelineProgressLineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-therallen-blue to-therallen-cyan -translate-x-1/2 origin-top z-0"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-start z-10 w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer spacer to align middle card properly */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full border-[3px] border-white bg-slate-200 shadow-md -translate-x-1/2 flex items-center justify-center transition-all duration-300 group-viewport-view">
                    {/* Glowing active node dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400 active-node-dot" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-therallen-blue/60 mb-2">
                      <span>0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-therallen-blue/30" />
                      <span>Stage</span>
                    </div>
                    <h4 className="text-xl font-bold text-therallen-black mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
