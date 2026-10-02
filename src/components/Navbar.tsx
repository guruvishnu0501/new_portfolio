import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal as TerminalIcon, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#ai-lab' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080C]/85 backdrop-blur-md border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Guru Vishnu Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
              <span className="font-mono font-black text-lg tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                GV
              </span>
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F2FE]" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-semibold tracking-wide text-slate-100 group-hover:text-cyan-400 transition-colors">
                Guru Vishnu
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                AI / ML Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B0D14]/70 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Interactive Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 bg-white/[0.03] hover:bg-cyan-500/10 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all duration-200 group"
              title="Launch Interactive Terminal (Press ` or click)"
              aria-label="Open Interactive Terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
              <span>terminal</span>
              <span className="text-[10px] text-slate-500 px-1 py-0.5 rounded border border-white/10 group-hover:border-cyan-500/30">
                ~
              </span>
            </button>

            {/* Resume Action */}
            <button
              onClick={onOpenResumeModal}
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium font-mono text-white bg-gradient-to-r from-cyan-500/20 via-cyan-400/15 to-violet-500/20 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-300 opacity-70" />
            </button>
          </div>

          {/* Mobile Menu & Terminal buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg border border-white/10 text-cyan-400 bg-white/[0.04]"
              aria-label="Open Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white bg-white/[0.04]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden px-4 py-6 bg-[#07080C]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View / Download Resume</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-mono text-slate-300 bg-white/5 border border-white/10"
                >
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span>Launch Interactive Terminal</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
