import React, { useState } from 'react';
import {
  Cpu,
  ShieldAlert,
  ShieldCheck,
  GraduationCap,
  Camera,
  Sparkles,
  Sliders,
  Volume2,
  BookOpen,
} from 'lucide-react';

type LabMode = 'fraud' | 'learning' | 'music';

export const InteractivePipeline: React.FC = () => {
  const [activeLab, setActiveLab] = useState<LabMode>('fraud');

  // Fraud Simulation State
  const [fraudType, setFraudType] = useState<'legit' | 'fraud'>('legit');
  const [isSimulatingFraud, setIsSimulatingFraud] = useState(false);
  const [fraudStep, setFraudStep] = useState(0);

  // Learning Simulation State
  const [studentScore, setStudentScore] = useState<number>(68);
  const [isSimulatingLearning, setIsSimulatingLearning] = useState(false);

  // Music Simulation State
  const [detectedEmotion, setDetectedEmotion] = useState<'Focused' | 'Calm' | 'Energetic'>('Focused');
  const [isSimulatingMusic, setIsSimulatingMusic] = useState(false);

  // Trigger Fraud Simulation
  const runFraudSimulation = (type: 'legit' | 'fraud') => {
    setFraudType(type);
    setIsSimulatingFraud(true);
    setFraudStep(1);

    setTimeout(() => setFraudStep(2), 700);
    setTimeout(() => setFraudStep(3), 1400);
    setTimeout(() => {
      setFraudStep(4);
      setIsSimulatingFraud(false);
    }, 2100);
  };

  // Trigger Learning Simulation
  const runLearningSimulation = (score: number) => {
    setStudentScore(score);
    setIsSimulatingLearning(true);

    setTimeout(() => {
      setIsSimulatingLearning(false);
    }, 1200);
  };

  // Trigger Music Simulation
  const runMusicSimulation = (emotion: 'Focused' | 'Calm' | 'Energetic') => {
    setDetectedEmotion(emotion);
    setIsSimulatingMusic(true);

    setTimeout(() => {
      setIsSimulatingMusic(false);
    }, 1200);
  };

  return (
    <section id="ai-lab" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow & grid background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Feature • AI Architecture Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
          Simulate The Intelligence Pipelines
        </h2>
        <p className="mt-3 text-base text-slate-400">
          Interact directly with live architectural simulations of Guru Vishnu's core machine learning systems.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-10 p-1.5 rounded-xl bg-[#090B12] border border-white/10">
        <button
          onClick={() => setActiveLab('fraud')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeLab === 'fraud'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fraud Classifier</span>
        </button>

        <button
          onClick={() => setActiveLab('learning')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeLab === 'learning'
              ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
          <span>Adaptive Learner</span>
        </button>

        <button
          onClick={() => setActiveLab('music')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeLab === 'music'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Camera className="w-3.5 h-3.5 text-emerald-400" />
          <span>Vision Emotion Audio</span>
        </button>
      </div>

      {/* Main Sandbox Window */}
      <div className="relative rounded-2xl bg-[#080A10] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

        {/* LAB 1: FRAUD DETECTION */}
        {activeLab === 'fraud' && (
          <div className="relative space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Pipeline 01: Imbalanced Transaction Classification
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Credit Card Anomaly Screening Pipeline
                </h3>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  disabled={isSimulatingFraud}
                  onClick={() => runFraudSimulation('legit')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                    fraudType === 'legit' && fraudStep === 4
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-emerald-500/40'
                  }`}
                >
                  Simulate Standard Purchase ($24.50)
                </button>
                <button
                  disabled={isSimulatingFraud}
                  onClick={() => runFraudSimulation('fraud')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                    fraudType === 'fraud' && fraudStep === 4
                      ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-rose-500/40'
                  }`}
                >
                  Simulate Irregular Spike ($4,890.00)
                </button>
              </div>
            </div>

            {/* Pipeline Stage Visualizer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stage 1 */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  fraudStep >= 1
                    ? 'bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    : 'bg-white/[0.02] border-white/5 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">STAGE 1: INGESTION</div>
                <div className="text-sm font-semibold text-white">Stream Vector</div>
                <div className="text-xs text-slate-400 mt-2 font-mono space-y-1">
                  <div>V1-V28: {fraudType === 'legit' ? 'Normal Bounds' : 'Outlier Deviations'}</div>
                  <div>Amount: {fraudType === 'legit' ? '$24.50 USD' : '$4,890.00 USD'}</div>
                </div>
              </div>

              {/* Stage 2 */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  fraudStep >= 2
                    ? 'bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    : 'bg-white/[0.02] border-white/5 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">STAGE 2: PREPROCESSING</div>
                <div className="text-sm font-semibold text-white">Robust Scaling</div>
                <div className="text-xs text-slate-400 mt-2 font-mono space-y-1">
                  <div>Imbalance Mitigation: Active</div>
                  <div>Standardized Scaler applied</div>
                </div>
              </div>

              {/* Stage 3 */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  fraudStep >= 3
                    ? 'bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    : 'bg-white/[0.02] border-white/5 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">STAGE 3: ML CLASSIFIER</div>
                <div className="text-sm font-semibold text-white">Scikit-learn Model</div>
                <div className="text-xs text-slate-400 mt-2 font-mono space-y-1">
                  <div>Decision Boundary: Scored</div>
                  <div>Anomaly Index: {fraudType === 'legit' ? '0.014' : '0.962'}</div>
                </div>
              </div>

              {/* Stage 4: Verdict */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  fraudStep >= 4
                    ? fraudType === 'legit'
                      ? 'bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                      : 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                    : 'bg-white/[0.02] border-white/5 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1">STAGE 4: VERDICT</div>
                <div className="text-sm font-bold flex items-center gap-1.5 text-white">
                  {fraudStep < 4 ? (
                    'Awaiting Pipeline...'
                  ) : fraudType === 'legit' ? (
                    <>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Transaction Cleared</span>
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-300">Fraud Flagged</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  {fraudStep < 4
                    ? 'Click one of the buttons above to trigger live feature pipeline.'
                    : fraudType === 'legit'
                    ? 'Standard risk threshold maintained. Zero friction approval.'
                    : 'Classified beyond safety threshold. Instant alert dispatched.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LAB 2: PERSONALIZED LEARNING */}
        {activeLab === 'learning' && (
          <div className="relative space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                  Pipeline 02: Adaptive Study Trajectory
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  AI Personalized Curriculum Engine
                </h3>
              </div>

              {/* Slider for student performance simulation */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">Diagnostic Score:</span>
                <button
                  disabled={isSimulatingLearning}
                  onClick={() => runLearningSimulation(45)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                    studentScore === 45
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  Struggling (45%)
                </button>
                <button
                  disabled={isSimulatingLearning}
                  onClick={() => runLearningSimulation(88)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                    studentScore === 88
                      ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  Mastery (88%)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Telemetry Input */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  Learner Telemetry
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between">
                    <span>Quiz Retention:</span>
                    <span className="text-violet-300 font-bold">{studentScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Speed:</span>
                    <span>{studentScore < 60 ? 'Deliberate / Hesitant' : 'Fluid / Rapid'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concept Density:</span>
                    <span>Data Structures & ML</span>
                  </div>
                </div>
              </div>

              {/* ML Engine Mapping */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <Cpu className="w-4 h-4" />
                  Adaptive Recommendation Matrix
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluates skill vectors across prerequisite chains, isolating conceptual bottlenecks without resetting completed topics.
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full transition-all duration-700"
                    style={{ width: `${studentScore}%` }}
                  />
                </div>
              </div>

              {/* Dynamic Path Output */}
              <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                  <BookOpen className="w-4 h-4" />
                  Generated Curriculum Path
                </div>
                <div className="text-xs space-y-1.5 text-slate-200">
                  {studentScore < 60 ? (
                    <>
                      <div className="p-1.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                        Targeted Review: Fundamental Heuristics
                      </div>
                      <div className="text-slate-400">Step-by-step visual exercises & formative quizzes</div>
                    </>
                  ) : (
                    <>
                      <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                        Advanced Track: Accelerated ML Pipelines
                      </div>
                      <div className="text-slate-400">Challenging synthesis projects & real data challenges</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LAB 3: MUSIC & FACIAL EMOTIONS */}
        {activeLab === 'music' && (
          <div className="relative space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Pipeline 03: Vision to Acoustic Alignment
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Real-time Emotion Music Recommendation
                </h3>
              </div>

              {/* Emotion Selector */}
              <div className="flex flex-wrap items-center gap-2">
                {(['Focused', 'Calm', 'Energetic'] as const).map((em) => (
                  <button
                    key={em}
                    disabled={isSimulatingMusic}
                    onClick={() => runMusicSimulation(em)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                      detectedEmotion === em
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-emerald-500/30'
                    }`}
                  >
                    Simulate: {em}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vision Landmark Scanner */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                  <Camera className="w-4 h-4" />
                  Facial Landmark Extraction
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-center font-mono text-xs text-slate-400 space-y-1">
                  <div>Detected State: <span className="text-white font-bold">{detectedEmotion}</span></div>
                  <div className="text-[11px] text-emerald-400">Confidence: Model Confirmed</div>
                </div>
              </div>

              {/* Classification Vector */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <Sliders className="w-4 h-4" />
                  Acoustic Valence Mapping
                </div>
                <div className="text-xs font-mono text-slate-300 space-y-1">
                  <div>Target BPM: {detectedEmotion === 'Energetic' ? '128 - 140' : detectedEmotion === 'Focused' ? '80 - 100' : '60 - 75'}</div>
                  <div>Acoustic Energy: {detectedEmotion === 'Energetic' ? 'High' : detectedEmotion === 'Focused' ? 'Steady' : 'Ambient'}</div>
                </div>
              </div>

              {/* Curated Playlist Output */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono font-semibold">
                  <Volume2 className="w-4 h-4" />
                  Dynamic Acoustic Output
                </div>
                <div className="text-xs text-slate-200">
                  <div className="font-semibold text-white">
                    {detectedEmotion === 'Focused' && 'Deep Ambient & Synthwave Flow'}
                    {detectedEmotion === 'Calm' && 'Minimalist Acoustic & Piano Lo-Fi'}
                    {detectedEmotion === 'Energetic' && 'High-BPM Electronic & Driving Beats'}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Synchronized in real-time with continuous facial emotion classification telemetry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
