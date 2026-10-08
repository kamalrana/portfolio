import { useState } from 'react';
import { ChevronDown, TrendingUp, Users, Clock, Zap, Building2, Shield } from 'lucide-react';
import { caseStudies, type CaseStudy as CaseStudyType } from '@/data/portfolio';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cobalt-700/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-4">
            03 — Enterprise Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            Client Project Impact
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            Technical achievements, scale metrics, and business value delivered across banking, insurance, and legal-tech domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudyType }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="reveal group relative rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 overflow-hidden transition-all hover:shadow-2xl hover:shadow-cobalt-500/10 hover:border-cobalt-500/40 hover:-translate-y-1.5">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-cobalt-500 via-cobalt-400 to-transparent" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              {study.client}
            </div>
            <h3 className="text-lg font-semibold text-ink-800 dark:text-ink-100 leading-tight">
              {study.project}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-ink-500 dark:text-ink-400 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-ink-100 dark:bg-ink-700/40">{study.domain}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {study.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
          {study.summary}
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-ink-50 dark:bg-ink-900/50 border border-ink-100 dark:border-ink-700/30 p-3 text-center"
            >
              <Zap className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400 mx-auto mb-1" />
              <div className="text-sm font-bold text-gradient leading-tight">{metric.value}</div>
              <div className="text-[10px] text-ink-500 dark:text-ink-400 mt-0.5 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {study.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cobalt-500/10 text-cobalt-600 dark:text-cobalt-300/80 border border-cobalt-500/15"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-ink-50 dark:bg-ink-900/40 border border-ink-100 dark:border-ink-700/30 text-sm font-medium text-ink-700 dark:text-ink-200 hover:border-cobalt-500/30 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400" />
            {expanded ? 'Hide Details' : 'View Technical Highlights & Leadership'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-cobalt-500 dark:text-cobalt-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            expanded ? 'max-h-[900px] opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 pt-3 border-t border-ink-100 dark:border-ink-700/30">
            <div>
              <h4 className="text-xs font-semibold text-cobalt-600 dark:text-cobalt-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Technical Highlights
              </h4>
              <ul className="space-y-1.5">
                {study.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                    <span className="w-1 h-1 rounded-full bg-cobalt-500 dark:bg-cobalt-400 mt-2 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Leadership & Impact
              </h4>
              <ul className="space-y-1.5">
                {study.leadership.map((l, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
