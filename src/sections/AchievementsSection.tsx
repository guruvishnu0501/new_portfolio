import React from 'react';
import { Trophy, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>04 / HONORS & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Hackathon Arena <br className="hidden sm:inline" />
            <span className="text-slate-400 font-light">& Podium Finishes.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
            Demonstrated engineering execution, problem-solving, and team delivery under competitive time constraints.
          </p>
        </div>

        <div className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 rounded-lg flex items-center gap-2 self-start md:self-end">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Competitive Records</span>
        </div>
      </div>

      {/* Hackathon Wall Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementsData.map((item) => {
          const isTop3 = item.rankBadge === '03';
          const isTop4 = item.rankBadge === '04';
          const isRecord = item.rankBadge === '36H';

          return (
            <div
              key={item.id}
              className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                isTop3
                  ? 'bg-gradient-to-b from-[#0F1420] to-[#0A0D15] border-cyan-500/40 hover:border-cyan-400 shadow-[0_10px_30px_rgba(0,242,254,0.15)]'
                  : isTop4
                  ? 'bg-gradient-to-b from-[#13111F] to-[#0B0A14] border-violet-500/30 hover:border-violet-400 shadow-[0_10px_30px_rgba(139,92,246,0.12)]'
                  : isRecord
                  ? 'bg-gradient-to-b from-[#16120E] to-[#0D0B0A] border-amber-500/30 hover:border-amber-400 shadow-[0_10px_30px_rgba(245,158,11,0.12)]'
                  : 'bg-[#080A12] border-white/8 hover:border-white/20'
              }`}
            >
              <div>
                {/* Badge & Year Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl font-mono font-black text-xl border ${
                      isTop3
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : isTop4
                        ? 'bg-violet-500/10 text-violet-300 border-violet-500/40'
                        : isRecord
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/40'
                        : 'bg-white/5 text-slate-300 border-white/10'
                    }`}
                  >
                    {item.rankBadge}
                  </div>

                  <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                  {item.organization}
                </div>

                {/* Description strictly factual */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {item.tag}
                </span>
                <Trophy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
