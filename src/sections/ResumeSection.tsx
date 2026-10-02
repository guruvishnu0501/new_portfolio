import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onDownloadResume,
  onOpenResumeModal,
}) => {
  return (
    <section id="resume" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0E1322] via-[#090C16] to-[#07090F] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.1)] overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              Want The Full Story? <br />
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Download My Resume.
              </span>
            </h2>

            <p className="text-base text-slate-300 font-light max-w-xl leading-relaxed">
              Access the complete one-page PDF summarizing academic achievements, verified machine learning implementations, technical certifications, and hackathon milestones.
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-cyan-400 block font-bold text-sm">8.76 / 10</span>
                <span className="text-slate-400 text-[11px]">B.Tech CGPA</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-cyan-400 block font-bold text-sm">3 Real Projects</span>
                <span className="text-slate-400 text-[11px]">ML, CV & Web</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-cyan-400 block font-bold text-sm">3 Hackathons</span>
                <span className="text-slate-400 text-[11px]">Including Guinness Event</span>
              </div>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onDownloadResume}
                className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm font-mono tracking-wide transition-all shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] flex items-center gap-2.5"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-sm font-mono transition-all flex items-center gap-2 hover:border-cyan-500/40"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Document Preview Miniature */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={onOpenResumeModal}
              className="cursor-pointer group relative w-full max-w-sm rounded-2xl bg-[#06080E] border border-white/10 p-6 shadow-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Pendela_Guru_Vishnu_Resume.pdf</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Minimal preview lines */}
              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="text-white font-bold text-sm">
                  {personalInfo.name}
                </div>
                <div className="text-cyan-400 text-xs">
                  {personalInfo.email} • {personalInfo.phone}
                </div>
                <div className="h-px bg-white/5 my-2" />
                <div className="text-slate-300 text-xs">
                  • B.Tech CS (IoT) — Malla Reddy Engineering College
                </div>
                <div className="text-slate-300 text-xs">
                  • Credit Card Fraud Detection (Python, ML)
                </div>
                <div className="text-slate-300 text-xs">
                  • AI Personalized Learning Platform
                </div>
                <div className="text-slate-300 text-xs">
                  • Music Recommendation via Facial Expressions
                </div>
                <div className="h-px bg-white/5 my-2" />
                <div className="text-emerald-400 text-[10px]">
                  Click to inspect full document preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
