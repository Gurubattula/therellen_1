'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-white pt-[20px] lg:pt-[24px] px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-0 pb-8 relative">
        
        {/* Left Side Column: Static Text (z-20 to overlay above image) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative pt-12 md:pt-16 pb-4 md:pb-6 lg:py-0">


          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-therallen-black leading-[1.15] mb-6 tracking-tight">
            Innovative Drug <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">
              Delivery Systems
            </span> <br />
            Engineered for <br className="hidden lg:block" />
            Global Healthcare
          </h1>

          <p className="text-slate-600 text-[16px] sm:text-lg leading-relaxed max-w-xl mb-0">
            Research-driven pharmaceutical solutions delivering complex formulations, advanced pellet technologies, and scalable manufacturing excellence.
          </p>
        </div>

        {/* Right Side Column: Image (z-10, overlays under text on mobile/tablet) */}
        <div className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-[65%] h-full lg:h-auto z-10 flex justify-center lg:justify-end items-center lg:items-start pt-0 lg:-ml-[10%] pointer-events-none lg:pointer-events-auto opacity-100">
          <div className="relative w-full aspect-square flex justify-center lg:justify-end items-center select-none">
            {/* Masked image container that blends edges naturally on desktop */}
            <div 
              className="relative w-full h-full flex justify-center lg:justify-end items-center mask-radial-desktop"
            >
              <Image
                src="/capuse_therellen2.png"
                alt="Therallen Drug Delivery Illustration"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain filter brightness-[1.05] contrast-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
