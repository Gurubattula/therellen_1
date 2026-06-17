'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about-us',
      dropdown: [
        { name: 'Company Overview', href: '/about/overview' },
        { name: 'Leadership and Team', href: '/about/leadership' },
        { name: 'Vision and Mission', href: '/about/vision-mission' },
        { name: 'Milestones', href: '/about/milestones' }
      ]
    },
    { 
      name: 'Capabilities', 
      href: '/capabilities',
      dropdown: [
        { name: 'Manufacturing', href: '/capabilities/manufacturing' },
        { name: 'Research and Development', href: '/capabilities/rd' },
        { name: 'Quality Assurance', href: '/capabilities/quality-assurance' },
        { name: 'Technology Platforms', href: '/capabilities/technology' }
      ]
    },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'Products Overview', href: '/products/overview' },
        { name: 'Pre-Formulation Intermediates', href: '/products/pre-formulation' },
        { name: 'Finished Dose Formulations', href: '/products/finished-dose' },
        { name: 'Therapeutic Areas', href: '/products/therapeutic-areas' }
      ]
    },
    { name: 'Partnering', href: '/partnering' },
    { name: 'Global Reach', href: '/global-reach' },
    { 
      name: 'Knowledge Hub', 
      href: '/knowledge-hub',
      dropdown: [
        { name: 'Blog and Articles', href: '/knowledge-hub/blog' },
        { name: 'White Papers and Downloads', href: '/knowledge-hub/white-papers' },
        { name: 'FAQs', href: '/knowledge-hub/faqs' }
      ]
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleMobileLinkClick = (linkName: string, hasDropdown: boolean, e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      setActiveMobileDropdown(activeMobileDropdown === linkName ? null : linkName);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
            ? 'glassmorphism shadow-[0_4px_20px_rgba(0,87,217,0.04)]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[88px] flex items-center justify-between overflow-visible">

          {/* Logo */}
          <a
            href="#home"
            className="relative z-50 flex items-center group"
          >
            <Image
              src="/therellen_logo.png"
              alt="Therallen Logo"
              width={600}
              height={300}
              priority
              className="
                h-16
                md:h-20
                lg:h-24
                xl:h-28
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.02]
              "
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              return (
                <div key={link.name} className="relative group py-2">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-therallen-black font-semibold text-[13px] xl:text-[14px] transition-colors duration-300 hover:text-therallen-blue py-1"
                  >
                    <span>{link.name}</span>
                    {hasDropdown && <ChevronDown size={12} className="opacity-70 group-hover:text-therallen-blue transition-colors" />}
                  </a>
                  
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-therallen-blue transition-all duration-300 group-hover:w-full group-hover:left-0" />

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-1.5 w-60 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-5 py-2 text-[13px] font-semibold text-slate-600 hover:text-therallen-blue hover:bg-slate-50 transition-colors"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-therallen-black hover:text-therallen-blue transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white shadow-2xl p-8 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20 pb-8">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => {
                    const hasDropdown = !!link.dropdown;
                    const isOpen = activeMobileDropdown === link.name;
                    return (
                      <div key={link.name} className="flex key flex-col">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <a
                            href={link.href}
                            onClick={(e) => handleMobileLinkClick(link.name, hasDropdown, e)}
                            className="text-xl font-bold text-therallen-black hover:text-therallen-blue transition-colors py-2 flex items-center justify-between"
                          >
                            <span>{link.name}</span>
                            {hasDropdown && (
                              <ChevronDown 
                                size={18} 
                                className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-therallen-blue' : ''}`}
                              />
                            )}
                          </a>
                        </motion.div>
                        
                        {/* Sub links for mobile */}
                        {link.dropdown && isOpen && (
                          <div className="flex flex-col pl-4 border-l border-slate-100 gap-2 mt-1 mb-3">
                            {link.dropdown.map((subLink) => (
                              <a
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-semibold text-slate-500 hover:text-therallen-blue transition-colors py-1.5"
                              >
                                {subLink.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <div className="text-center text-xs text-slate-400">
                  Therapeutics By Design
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}