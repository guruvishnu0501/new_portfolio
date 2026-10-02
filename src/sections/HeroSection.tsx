import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileText,
  Terminal as TerminalIcon,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { NeuralCanvas } from '../components/NeuralCanvas';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onDownloadResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onDownloadResume,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Interactive Neural Canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralCanvas className="opacity-70" />
      </div>

      {/* Radial lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E121D]/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,242,254,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono font-medium text-slate-200">
              {personalInfo.availability}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-[11px] font-mono text-cyan-300">
              B.Tech CS (IoT)
            </span>
          </motion.div>

          {/* Primary Punchy Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              Building <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent glow-text-cyan">
                Intelligent
              </span>{' '}
              <br />
              Digital Experiences.
            </h1>
          </motion.div>

          {/* Subtitle strictly matching facts */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed"
          >
            Computer Science student focused on{' '}
            <span className="text-white font-medium">Artificial Intelligence</span>,{' '}
            <span className="text-cyan-300 font-medium">Machine Learning</span>, and{' '}
            <span className="text-white font-medium">software development</span>.
          </motion.p>

          {/* Key Facts Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 font-bold">8.76</span> CGPA
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 font-bold">3</span> ML Projects
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 font-bold">2+</span> Hackathon Podiums
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
              <span className="text-cyan-400 font-bold">6</span> Technical Certs
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onDownloadResume}
              className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub: github.com/guruvishnu0501"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn: linkedin.com/in/pendela-guru-vishnu"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive AI Terminal & Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div
            onClick={onOpenTerminal}
            className="group cursor-pointer relative rounded-2xl bg-[#090C14]/90 border border-white/10 hover:border-cyan-500/50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.2)]"
          >
            {/* Header window dots */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">guru@terminal:~$</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
                <TerminalIcon className="w-3 h-3" />
                <span>Click to Launch</span>
              </span>
            </div>

            {/* Code / Terminal Content */}
            <div className="font-mono text-xs space-y-2.5 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-violet-400">guru@portfolio:~$</span>
                <span className="text-cyan-300 font-semibold">whoami</span>
              </div>

              <div className="pl-4 space-y-1 text-slate-300 border-l border-cyan-500/20 my-2">
                <div className="text-white font-medium">Computer Science</div>
                <div className="text-cyan-400 font-medium">AI / ML</div>
                <div className="text-slate-300 font-medium">Problem Solver</div>
                <div className="text-emerald-400 font-medium">Builder</div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-violet-400">guru@portfolio:~$</span>
                <span className="text-cyan-300 font-semibold">sys.status()</span>
              </div>

              <div className="pl-4 space-y-1 text-[11px] text-slate-400 font-mono">
                <div>[01] Model Pipeline: Online</div>
                <div>[02] Academic Track: Malla Reddy Engineering College</div>
                <div>[03] Status: Ready for technical interviews</div>
              </div>

              {/* Blinking prompt line */}
              <div className="flex items-center gap-2 pt-2 text-cyan-400">
                <span className="text-violet-400">guru@portfolio:~$</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Decorative bottom corner glow */}
            <div className="absolute -bottom-px -right-px w-24 h-24 bg-gradient-to-br from-transparent to-cyan-500/20 rounded-br-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};
