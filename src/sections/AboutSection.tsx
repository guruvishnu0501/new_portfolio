import React from 'react';
import { Cpu, Sparkles, Code, Binary, GraduationCap, MapPin, Award } from 'lucide-react';
import { personalInfo, capabilityBlocks } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  Code: Code,
  Binary: Binary,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
          <span>01 / ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          Engineering Intelligence <br className="hidden sm:inline" />
          <span className="text-slate-400 font-light">& Practical Software.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {personalInfo.summary}
        </p>
      </div>

      {/* Currently Banner */}
      <div className="mb-14 p-6 rounded-2xl bg-gradient-to-r from-[#0C0F17] via-[#0D121E] to-[#0C0F17] border border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                Currently Pursuing
              </div>
              <div className="text-sm font-bold text-white">
                B.Tech Computer Science (IoT)
              </div>
              <div className="text-xs text-slate-400">
                Malla Reddy Engineering College
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                Academic Standing
              </div>
              <div className="text-sm font-bold text-white">
                CGPA: {personalInfo.cgpa}
              </div>
              <div className="text-xs text-slate-400">
                Consistent distinction (Class X 100%, XII 92.5%)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-violet-400 uppercase tracking-wider">
                Location & Base
              </div>
              <div className="text-sm font-bold text-white">
                {personalInfo.location}
              </div>
              <div className="text-xs text-slate-400">
                Open to remote & on-site opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Capability Blocks */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
          Core Technical Domains
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilityBlocks.map((block) => {
            const Icon = iconMap[block.iconName as keyof typeof iconMap] || Cpu;
            return (
              <div
                key={block.num}
                className="group relative p-6 rounded-2xl bg-[#090C14] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,242,254,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-cyan-400/80">
                      {block.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-4 h-4 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                    {block.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Explored in projects</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
