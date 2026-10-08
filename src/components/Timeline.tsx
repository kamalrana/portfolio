import { useState } from 'react';
import { Briefcase, ChevronRight, Calendar } from 'lucide-react';
import { timeline } from '@/data/portfolio';

export default function Timeline() {
  const [activeId, setActiveId] = useState(timeline[0].id);
  const active = timeline.find((t) => t.id === activeId) ?? timeline[0];

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cobalt-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-4">
            06 — Professional Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            Career Progression
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            14+ years of technical leadership across enterprise banking, insurance, and legal-tech platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Timeline list */}
          <div className="lg:col-span-5">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cobalt-500/50 via-ink-300 dark:via-ink-700 to-transparent" />

              {timeline.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className="reveal relative w-full text-left mb-6 group"
                  >
                    {/* Node */}
                    <div
                      className={`absolute -left-[22px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                        isActive
                          ? 'bg-cobalt-500 border-cobalt-400 scale-125 shadow-lg shadow-cobalt-500/40'
                          : 'bg-white dark:bg-ink-900 border-ink-300 dark:border-ink-600 group-hover:border-cobalt-500/50'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-cobalt-400 animate-ping opacity-60" />
                      )}
                    </div>

                    <div
                      className={`rounded-xl p-4 border transition-all ${
                        isActive
                          ? 'bg-cobalt-500/10 border-cobalt-500/30'
                          : 'bg-white dark:bg-ink-800/30 border-ink-200 dark:border-ink-700/40 group-hover:border-cobalt-500/20'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className={`w-4 h-4 ${isActive ? 'text-cobalt-500 dark:text-cobalt-400' : 'text-ink-400 dark:text-ink-500'}`} />
                          <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                            {item.company}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? 'text-cobalt-500 dark:text-cobalt-400 rotate-90' : 'text-ink-300 dark:text-ink-600'
                          }`}
                        />
                      </div>
                      <div className="text-xs text-ink-600 dark:text-ink-300 mt-1.5 ml-6">
                        {item.role}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400 mt-1 ml-6 font-mono">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div
              key={active.id}
              className="reveal sticky top-24 rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 p-6 animate-fade-in-up"
            >
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div>
                  <div className="text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-1">{active.company}</div>
                  <h3 className="text-xl font-bold text-ink-800 dark:text-ink-100">
                    {active.role}
                  </h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-mono text-ink-500 dark:text-ink-400">{active.period}</div>
                  <div className="text-xs text-cobalt-600 dark:text-cobalt-400 font-medium mt-0.5">{active.duration}</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-cobalt-500/30 via-ink-200 dark:via-ink-700/30 to-transparent mb-4" />

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-cobalt-600 dark:text-cobalt-400 uppercase tracking-wider mb-2">
                  Key Impact
                </h4>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {active.impact}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-cobalt-600 dark:text-cobalt-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cobalt-500/10 text-cobalt-600 dark:text-cobalt-300 border border-cobalt-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
