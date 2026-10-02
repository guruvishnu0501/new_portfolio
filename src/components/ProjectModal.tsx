import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Cpu,
  ShieldAlert,
  CheckCircle2,
  Clock,
  GitBranch,
  Sparkles,
} from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Animated pipeline progress
  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % project.architectureSteps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090B12] border border-cyan-500/30 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(0,242,254,0.15)] overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0D101A] border-b border-white/10 select-none">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Case Study
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-mono text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.repoStatus}</span>
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scroll Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/5 text-cyan-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-base text-slate-300 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Architecture Pipeline Visualization */}
            <div className="p-5 rounded-xl bg-[#06070B] border border-cyan-500/20 shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  System Architecture & Inference Pipeline
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Step {activePipelineStep + 1} of {project.architectureSteps.length}
                </span>
              </div>

              {/* Step Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {project.architectureSteps.map((step, idx) => {
                  const isActive = activePipelineStep === idx;
                  return (
                    <div
                      key={step.label}
                      onClick={() => setActivePipelineStep(idx)}
                      className={`cursor-pointer relative p-3 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-500/15 border-cyan-400/80 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>
                      <div className="text-xs font-semibold text-slate-100 leading-tight">
                        {step.label}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-2">
                        {step.subtext}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Current Active Step Expanded Banner */}
              <div className="mt-4 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-cyan-300" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-cyan-300">
                    Active Phase: {project.architectureSteps[activePipelineStep].label}
                  </span>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    {project.architectureSteps[activePipelineStep].subtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Problem & Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/8 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  Engineering Challenge
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              {/* Outcome */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/8 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  Project Outcome
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.outcome}</p>
              </div>
            </div>

            {/* Resume-Verified Implementations */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Highlights (Source: Verified Resume)
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.resumeBullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technologies & Roles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-100 text-sm">{tech.name}</span>
                    <span className="text-xs font-mono text-slate-400 text-right">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Verified academic project implementation</span>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 font-medium text-xs font-mono transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
