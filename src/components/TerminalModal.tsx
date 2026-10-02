import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, projectsData, achievementsData, educationData } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
  onDownloadResume?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onDownloadResume,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-semibold">{personalInfo.name}</p>
          <p className="text-slate-400 text-xs">{personalInfo.title} • {personalInfo.currentRole}</p>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="pt-2 text-xs text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> to view available terminal commands.
          </div>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>(['whoami']);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global hotkey to open/close with backtick or ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    let result: React.ReactNode = null;

    if (!cleanCmd) return;

    setPastCommands((prev) => [...prev, cmdText]);
    setCommandIndex(-1);

    switch (cleanCmd) {
      case 'help':
        result = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold mb-1">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-cyan-300 font-mono">whoami</span> - Display developer profile</div>
              <div><span className="text-cyan-300 font-mono">projects</span> - Inspect machine learning projects</div>
              <div><span className="text-cyan-300 font-mono">skills</span> - Display technical skill matrix</div>
              <div><span className="text-cyan-300 font-mono">achievements</span> - Hackathon rankings & awards</div>
              <div><span className="text-cyan-300 font-mono">education</span> - Academic background & CGPA</div>
              <div><span className="text-cyan-300 font-mono">contact</span> - Display direct contact channels</div>
              <div><span className="text-cyan-300 font-mono">resume</span> - Trigger official resume download</div>
              <div><span className="text-cyan-300 font-mono">clear</span> - Clear terminal screen buffer</div>
              <div><span className="text-cyan-300 font-mono">exit</span> - Close interactive terminal</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        result = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-cyan-400 font-bold">{personalInfo.name}</p>
            <p className="text-slate-400">{personalInfo.subDescriptor}</p>
            <p className="text-slate-300 mt-1">{personalInfo.summary}</p>
            <p className="text-cyan-300/80 mt-1">Status: ● {personalInfo.availability}</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Verified Machine Learning Projects:</p>
            {projectsData.map((p, idx) => (
              <div key={p.id} className="p-2 rounded bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">
                    {idx + 1}. {p.title}
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono">{p.category}</span>
                </div>
                <p className="text-slate-400 text-[11px] mt-0.5">{p.tagline}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="px-1.5 py-0.2 rounded text-[10px] bg-white/5 text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Technical Core Capabilities:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-400 font-mono">AI/ML:</span> Python, Scikit-learn, NumPy, Pandas, Machine Learning, Artificial Intelligence
              </div>
              <div>
                <span className="text-slate-400 font-mono">Core:</span> OOP, Data Structures, Algorithms, Problem Solving
              </div>
              <div>
                <span className="text-slate-400 font-mono">Web & DB:</span> HTML, CSS, JavaScript, MySQL, MongoDB
              </div>
              <div>
                <span className="text-slate-400 font-mono">Tooling:</span> Git, GitHub, VS Code
              </div>
            </div>
          </div>
        );
        break;

      case 'achievements':
        result = (
          <div className="space-y-1.5 text-xs">
            <p className="text-cyan-400 font-semibold">Hackathon Honors & Events:</p>
            {achievementsData.map((a) => (
              <div key={a.id} className="flex items-start gap-2 text-slate-300">
                <span className="text-cyan-400 font-mono font-bold shrink-0">[{a.rankBadge}]</span>
                <div>
                  <span className="font-semibold text-slate-200">{a.title}</span> —{' '}
                  <span className="text-slate-400">{a.organization} ({a.year})</span>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        result = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Academic Milestones:</p>
            {educationData.map((e) => (
              <div key={e.id} className="border-l-2 border-cyan-500/40 pl-2">
                <div className="text-slate-200 font-semibold">{e.degree}</div>
                <div className="text-slate-400 text-[11px]">
                  {e.institution} ({e.period}) • <span className="text-cyan-300 font-bold">{e.scoreLabel}: {e.score}</span>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-semibold">Direct Channels:</p>
            <div className="text-slate-300 space-y-0.5 font-mono text-[11px]">
              <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline">{personalInfo.email}</a></div>
              <div>Phone: <span className="text-slate-200">{personalInfo.phone}</span></div>
              <div>LinkedIn: <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">{personalInfo.linkedin}</a></div>
              <div>GitHub: <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">{personalInfo.github}</a></div>
              <div>Location: <span className="text-slate-200">{personalInfo.location}</span></div>
            </div>
          </div>
        );
        break;

      case 'resume':
        if (onDownloadResume) {
          onDownloadResume();
        } else {
          window.open('/Pendela_Guru_Vishnu_Resume.pdf', '_blank');
        }
        result = (
          <div className="text-xs text-emerald-400 font-mono">
            ✓ Downloading official resume: Pendela_Guru_Vishnu_Resume.pdf
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        result = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cmdText}". Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: result }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = commandIndex === -1 ? pastCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(pastCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < pastCommands.length) {
          setCommandIndex(nextIdx);
          setInputVal(pastCommands[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[82vh] flex flex-col rounded-xl bg-[#090B10] border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.15)] overflow-hidden z-10"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0E1118] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-slate-300">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>guru@portfolio:~</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">ESC to close</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick chips */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#090B10] border-b border-white/5 overflow-x-auto text-[11px] font-mono">
              <span className="text-slate-400 shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Quick:
              </span>
              {['whoami', 'projects', 'skills', 'achievements', 'education', 'contact', 'resume', 'clear'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 transition-colors shrink-0"
                  >
                    {cmd}
                  </button>
                )
              )}
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 scanline min-h-[280px]"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-violet-400 font-bold">guru@portfolio:~$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Input */}
              <div className="flex items-center gap-2 pt-1 text-cyan-400">
                <span className="text-violet-400 font-bold shrink-0">guru@portfolio:~$</span>
                <div className="flex-1 flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-white font-mono focus:outline-none placeholder-slate-600 text-xs caret-cyan-400"
                    placeholder="Type 'help' for commands..."
                    autoFocus
                  />
                  <button
                    onClick={() => executeCommand(inputVal)}
                    className="text-slate-400 hover:text-cyan-400 p-1"
                    aria-label="Submit command"
                  >
                    <CornerDownLeft className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
