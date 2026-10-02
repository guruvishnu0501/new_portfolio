import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  projectsData,
  achievementsData,
  certificationsData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'pdf'>('preview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#090C14] border border-cyan-500/30 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_30px_rgba(0,242,254,0.15)] overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0D111C] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-sm font-bold text-white">
                  Pendela_Guru_Vishnu_Resume.pdf
                </span>
              </div>

              {/* Tab Selector */}
              <div className="hidden sm:flex items-center p-1 rounded-lg bg-black/40 border border-white/5 text-xs font-mono ml-4">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'preview'
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive Reader
                </button>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'pdf'
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw PDF Embed
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onDownload}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {activeTab === 'pdf' ? (
              <div className="w-full h-[65vh] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                <iframe
                  src="/Pendela_Guru_Vishnu_Resume.pdf#toolbar=1"
                  className="w-full h-full"
                  title="Guru Vishnu Resume PDF"
                />
              </div>
            ) : (
              /* Structured High-Density Resume Document */
              <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-xl bg-[#06080E] border border-white/10 shadow-inner font-sans space-y-8 text-slate-300">
                {/* Header */}
                <div className="border-b border-white/10 pb-6 text-center space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xs font-mono text-cyan-400">
                    {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {personalInfo.linkedin}
                    </a>{' '}
                    •{' '}
                    <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {personalInfo.github}
                    </a>
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Professional Summary
                  </h2>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {personalInfo.summary}
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Education
                  </h2>
                  <div className="space-y-3">
                    {educationData.map((e) => (
                      <div key={e.id} className="text-xs flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white">{e.institution}</div>
                          <div className="text-slate-400">{e.degree}</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="text-slate-400">{e.period}</div>
                          <div className="text-cyan-300 font-bold">{e.scoreLabel}: {e.score}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Technical Projects
                  </h2>
                  <div className="space-y-4">
                    {projectsData.map((p) => (
                      <div key={p.id} className="space-y-1.5 text-xs">
                        <div className="flex justify-between items-baseline">
                          <div className="font-bold text-white text-sm">{p.title}</div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {p.tags.join(' • ')}
                          </div>
                        </div>
                        <ul className="space-y-1 pl-4 list-disc marker:text-cyan-400 text-slate-300">
                          {p.resumeBullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Technical Skills
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    <div>
                      <strong className="text-slate-200">Languages:</strong>{' '}
                      <span className="text-slate-400 font-mono">Python, Java Fundamentals</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">Core:</strong>{' '}
                      <span className="text-slate-400 font-mono">OOP, Data Structures, Algorithms, Problem Solving</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">Web:</strong>{' '}
                      <span className="text-slate-400 font-mono">HTML, CSS, JavaScript</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">Databases:</strong>{' '}
                      <span className="text-slate-400 font-mono">MySQL, MongoDB</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">Technology & Libraries:</strong>{' '}
                      <span className="text-slate-400 font-mono">Artificial Intelligence, Machine Learning, NumPy, Pandas, Scikit-learn</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">Tools:</strong>{' '}
                      <span className="text-slate-400 font-mono">Git, GitHub, VS Code</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {certificationsData.map((c) => (
                      <div key={c.id} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-slate-300">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-cyan-500/20 pb-1">
                    Honors & Achievements
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    {achievementsData.map((a) => (
                      <div key={a.id} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono font-bold shrink-0">[{a.rankBadge}]</span>
                        <span className="text-slate-300">
                          <strong className="text-white">{a.title}</strong> — {a.organization} ({a.year})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
