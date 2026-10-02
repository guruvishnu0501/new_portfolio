import React from 'react';
import {
  Clock,
  Activity,
  Maximize2,
  GraduationCap,
  Camera,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Machine Learning <br className="hidden sm:inline" />
            <span className="text-cyan-300">Case Studies.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
            Real-world systems engineered from data preprocessing and mathematical modeling to predictive inference.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg self-start md:self-end">
          Click any project to explore deep architecture
        </div>
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-12">
        {projectsData.map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer relative rounded-2xl bg-[#080A12] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(0,242,254,0.15)] overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#0B0E18] border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    CASE STUDY // 0{index + 1}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400">{project.category}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-amber-300/80 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.repoStatus}</span>
                  </span>
                  <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Pipeline</span>
                    <Maximize2 className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Details */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & Approach Summary */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs text-slate-400 leading-relaxed">
                      <strong className="text-rose-400 font-mono uppercase tracking-wider block mb-1">
                        Challenge:
                      </strong>
                      {project.problem}
                    </div>

                    <div className="text-xs text-slate-400 leading-relaxed">
                      <strong className="text-cyan-400 font-mono uppercase tracking-wider block mb-1">
                        Engineering Approach:
                      </strong>
                      <ul className="space-y-1">
                        {project.resumeBullets.slice(0, 2).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-slate-300">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-200 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Custom Visual Representation */}
                <div className="lg:col-span-5">
                  <div className="relative p-5 rounded-xl bg-[#05070B] border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 min-h-[220px] flex flex-col justify-center">
                    {/* Visual 1: Fraud Network */}
                    {project.visualType === 'fraud-network' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-cyan-400" /> Transaction Pipeline
                          </span>
                          <span className="text-emerald-400 font-bold">Imbalance Addressed</span>
                        </div>

                        {/* Visual Node Grid */}
                        <div className="grid grid-cols-3 gap-2 text-center font-mono">
                          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                            <div className="text-[10px] text-slate-400">Class Ratio</div>
                            <div className="text-xs font-bold text-white mt-1">&lt; 0.2% Fraud</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                            <div className="text-[10px] text-cyan-400">Resampling</div>
                            <div className="text-xs font-bold text-cyan-300 mt-1">Balanced</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                            <div className="text-[10px] text-slate-400">Precision Tuning</div>
                            <div className="text-xs font-bold text-emerald-400 mt-1">Optimized</div>
                          </div>
                        </div>

                        {/* Status bar */}
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>Decision Boundary</span>
                          <span className="text-cyan-400 font-semibold">Trained & Evaluated</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Learning Matrix */}
                    {project.visualType === 'learning-matrix' && (
                      <div className="space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                            Adaptive Matrix
                          </span>
                          <span className="text-violet-400 font-bold">Telemetry Live</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div>
                            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                              <span>DSA & Algorithms</span>
                              <span className="text-cyan-300 font-bold">Mastery: High</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-cyan-400 w-4/5 rounded-full" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                              <span>Machine Learning Foundations</span>
                              <span className="text-violet-300 font-bold">Adaptive Review</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-violet-400 w-3/5 rounded-full" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-1 text-[11px] text-slate-400 flex items-center justify-between">
                          <span>Dynamic Path</span>
                          <span className="text-cyan-300">Generated</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Facial Emotion Recommendation */}
                    {project.visualType === 'emotion-camera' && (
                      <div className="space-y-3 font-mono">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Camera className="w-3.5 h-3.5 text-emerald-400" />
                            CV Emotion Engine
                          </span>
                          <span className="text-emerald-400 font-bold">Real-time</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5 text-center">
                          <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                            Detected Biometric State
                          </div>
                          <div className="text-sm font-bold text-white flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Emotional Valence Mapped</span>
                          </div>
                          <div className="text-[11px] text-cyan-300">
                            → Dynamic Acoustic Playlist Curated
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Facial Landmarks</span>
                          <span className="text-emerald-400 font-semibold">Continuous Ingestion</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
