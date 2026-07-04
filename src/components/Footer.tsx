'use client';

import { Phone, Mail, MapPin, ExternalLink, Download } from 'lucide-react';
import { BROCHURE } from '@/lib/downloads';

export default function Footer() {
  const offices = [
    {
      title: 'Corporate Office',
      address: [
        '79 Degrees, Plot No. 67, 1st Floor',
        'Chitiprolu Arcade, Jubilee Enclave',
        'Hitech City, Madhapur',
        'Hyderabad – 500081',
      ],
    },
    {
      title: 'Manufacturing Facility',
      address: [
        'Village Bhatian',
        'Nalagarh, District Solan',
        'Himachal Pradesh',
      ],
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Download Brochure', href: BROCHURE.href, download: BROCHURE.filename },
  ];

  return (
    <footer id="contact" className="relative bg-therallen-black text-white pt-24 pb-8 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-therallen-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-therallen-blue/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Logo and Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Research-driven pharmaceutical solutions delivering complex formulations and advanced drug delivery systems for global healthcare.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918978842468"
                className="flex items-center gap-3 text-slate-300 hover:text-therallen-cyan text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-therallen-cyan/10 transition-colors">
                  <Phone size={14} className="text-slate-300 group-hover:text-therallen-cyan" />
                </div>
                <span>+91 89788 42468</span>
              </a>
              <a
                href="mailto:info@therallen.com"
                className="flex items-center gap-3 text-slate-300 hover:text-therallen-cyan text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-therallen-cyan/10 transition-colors">
                  <Mail size={14} className="text-slate-300 group-hover:text-therallen-cyan" />
                </div>
                <span>info@therallen.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start">
            <h4 className="text-[15px] font-bold text-white tracking-wider uppercase mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-therallen-cyan" />
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  {...('download' in link && link.download ? { download: link.download } : {})}
                  className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>{link.name}</span>
                  {'download' in link && link.download ? (
                    <Download size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  ) : (
                    <ExternalLink size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Addresses Columns */}
          {offices.map((office) => (
            <div key={office.title} className="flex flex-col items-start">
              <h4 className="text-[15px] font-bold text-white tracking-wider uppercase mb-6 relative">
                {office.title}
                <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-therallen-cyan" />
              </h4>
              <div className="flex gap-2">
                <MapPin size={16} className="text-therallen-cyan flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-400 text-sm leading-relaxed flex flex-col gap-1">
                  {office.address.map((line, idx) => (
                    <span key={idx}>{line}</span>
                  ))}
                </address>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; 2026 Therallen Pharma Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-therallen-cyan" />
            <span className="font-bold tracking-widest uppercase text-[10px] text-slate-400">
              Therapeutics By Design
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
