import React, { useState } from 'react';
import {
  Sparkles,
  Terminal,
  Binary,
  Globe,
  Database,
  Wrench,
  Info,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Terminal: Terminal,
  Binary: Binary,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    context: string;
  } | null>(null);

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>02 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Skills & Frameworks
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
            Strictly verified core competencies across machine learning, software architecture, databases, and core computer science.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#090B12] border border-white/10 self-start md:self-end">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Clusters
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap] || Terminal;
          return (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#090C14] border border-white/8 hover:border-cyan-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => {
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() =>
                          setHoveredSkill({
                            name: skill.name,
                            context: skill.applicationContext,
                          })
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`group relative px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 cursor-pointer ${
                          skill.highlight
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/20 shadow-[0_0_12px_rgba(0,242,254,0.1)]'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{category.skills.length} core competencies</span>
                <span className="text-slate-400">• Verified</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Tooltip Context Bar */}
      <div className="mt-8 p-4 rounded-xl bg-[#090B12] border border-cyan-500/20 shadow-inner flex items-center gap-3">
        <Info className="w-4 h-4 text-cyan-400 shrink-0" />
        <div className="text-xs font-mono text-slate-300">
          {hoveredSkill ? (
            <span>
              <strong className="text-cyan-300">{hoveredSkill.name}:</strong>{' '}
              {hoveredSkill.context}
            </span>
          ) : (
            <span className="text-slate-400">
              Hover over any skill chip above to view real-world application context and implementation details.
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
