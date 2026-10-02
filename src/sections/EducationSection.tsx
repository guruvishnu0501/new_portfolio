import React from 'react';
import { Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
          <span>05 / ACADEMIC BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          Education Timeline
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
          Consistent record of academic distinction and core computer science fundamentals.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 pb-4">
        {educationData.map((item) => {
          const isCurrent = item.period.includes('Present');

          return (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-cyan-400 border-[#07080C] shadow-[0_0_15px_#00F2FE]'
                    : 'bg-[#0E121E] border-white/30 group-hover:border-cyan-400'
                }`}
              />

              {/* Year Stamp on left for desktop */}
              <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono font-bold text-cyan-400">
                {item.period}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-[#090C14] border border-white/8 hover:border-cyan-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-bold self-start sm:self-auto">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                <div className="text-sm font-medium text-slate-300 mb-3">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                  {item.details}
                </p>

                {/* Key Coursework (if available) */}
                {item.keyCoursework && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Focus Areas & Core Subjects:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.keyCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
