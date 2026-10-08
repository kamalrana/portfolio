import { useState } from 'react';
import {
  Server, Cloud, ShieldCheck, Database, Wrench, Globe,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Server, Cloud, ShieldCheck, Database, Wrench, Globe,
};

const levelConfig = {
  expert: { label: 'Expert', className: 'bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-300 border-cobalt-500/30' },
  advanced: { label: 'Advanced', className: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30' },
  proficient: { label: 'Proficient', className: 'bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30' },
};

type FilterLevel = 'all' | 'expert' | 'advanced' | 'proficient';

const filterTabs: { id: FilterLevel; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'expert', label: 'Expert' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'proficient', label: 'Proficient' },
];

export default function Expertise() {
  const [filter, setFilter] = useState<FilterLevel>('all');

  return (
    <section id="expertise" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cobalt-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-4">
            02 — Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            Technical Competency Matrix
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            Filter by proficiency level to explore the full technology stack — from deep Java architecture expertise to cloud-native DevOps tooling.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
  const colors: Record<FilterLevel, { bg: string; shadow: string }> = {
    all: { bg: 'bg-violet-500', shadow: 'shadow-violet-500/20' },
    expert: { bg: 'bg-cobalt-500', shadow: 'shadow-cobalt-500/20' },
    advanced: { bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/20' },
    proficient: { bg: 'bg-amber-500', shadow: 'shadow-amber-500/20' },
  };

  const color = colors[tab.id];

  return (
    <button
      key={tab.id}
      onClick={() => setFilter(tab.id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        filter === tab.id
          ? `${color.bg} text-white shadow-lg ${color.shadow}`  // ← Dynamic color!
          : 'bg-ink-100 dark:bg-ink-800/50 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700/50 border border-ink-200 dark:border-ink-700/30'
      }`}
    >
      {tab.label}
    </button>
  );
})}

        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? Server;
            const filteredSkills =
              filter === 'all'
                ? category.skills
                : category.skills.filter((s) => s.level === filter);

            return (
              <div
                key={category.id}
                className="reveal group relative rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 p-5 hover:border-cobalt-500/40 transition-all hover:shadow-xl hover:shadow-cobalt-500/5 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cobalt-500/15 border border-cobalt-500/25 flex items-center justify-center group-hover:bg-cobalt-500/25 transition-colors">
                    <Icon className="w-5 h-5 text-cobalt-500 dark:text-cobalt-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100 leading-tight">
                    {category.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill) => {
                      const lc = levelConfig[skill.level];
                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${lc.className} transition-transform hover:scale-105`}
                        >
                          {skill.name}
                        </span>
                      );
                    })
                  ) : (
                    <span className="text-xs text-ink-400 dark:text-ink-500 italic">
                      No skills at this level
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-ink-100 dark:border-ink-700/30 text-xs text-ink-400 dark:text-ink-500 font-mono">
                  {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
