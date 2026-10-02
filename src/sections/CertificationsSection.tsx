import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>06 / PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Certifications & Bootcamps
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Specialized technical credentials covering Azure AI, Data Science, Python, and modern software development.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Source: Verified Resume Credentials
        </div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificationsData.map((cert) => {
          const isMicrosoft = cert.name.includes('Azure');

          return (
            <div
              key={cert.id}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isMicrosoft
                  ? 'bg-gradient-to-br from-[#0B1525] to-[#080B14] border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]'
                  : 'bg-[#080A12] border-white/8 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10 uppercase">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                  {cert.name}
                </h3>

                <div className="text-xs text-slate-400 font-mono mt-1">
                  {cert.issuerOrType}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cert.credentialTag}</span>
                <span className="text-emerald-400 font-semibold">Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
