import { useState } from 'react';
import {
  Smartphone, Shuffle, Boxes, Database, Cloud,
  ArrowDown, Code2, GitBranch, Layers,
  type LucideIcon,
} from 'lucide-react';
import { archLayers, apiEndpoints, type ApiEndpoint } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Shuffle, Boxes, Database, Cloud,
};

type TabView = 'overview' | 'api';

const tabs: { id: TabView; label: string; icon: typeof Layers }[] = [
  { id: 'overview', label: 'Architecture Overview', icon: Layers },
  { id: 'api', label: 'API Design', icon: Code2 },
];

const methodColors: Record<ApiEndpoint['method'], string> = {
  GET: 'bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-300 border-cobalt-500/30',
  POST: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
  PUT: 'bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30',
  DELETE: 'bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/30',
};

export default function ArchitectureShowcase() {
  const [tab, setTab] = useState<TabView>('overview');

  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cobalt-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-4">
            04 — Architecture Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            How I'd Build This in Spring Boot + Flutter
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            A reference architecture for this portfolio — demonstrating enterprise design patterns I apply
            daily: domain-driven microservices, hexagonal architecture, and cloud-native DevOps on AWS.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === t.id
                    ? 'bg-cobalt-500 text-white shadow-lg shadow-cobalt-500/20'
                    : 'bg-ink-100 dark:bg-ink-800/50 text-ink-600 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-700/50 border border-ink-200 dark:border-ink-700/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {tab === 'overview' ? <OverviewTab /> : <ApiTab />}
      </div>
    </section>
  );
}

function OverviewTab() {
  return (
    <div className="grid lg:grid-cols-12 gap-6 animate-fade-in-up">
      {/* Layered diagram */}
      <div className="lg:col-span-7">
        <div className="space-y-3">
          {archLayers.map((layer, idx) => {
            const Icon = iconMap[layer.icon] ?? Boxes;
            const isLast = idx === archLayers.length - 1;
            return (
              <div key={layer.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 60}ms` }}>
                <div className="group relative rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 p-5 hover:border-cobalt-500/40 transition-all hover:shadow-xl hover:shadow-cobalt-500/5 hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-cobalt-500/15 border border-cobalt-500/25 flex items-center justify-center group-hover:bg-cobalt-500/25 transition-colors">
                        <Icon className="w-5 h-5 text-cobalt-500 dark:text-cobalt-400" />
                      </div>
                      <span className="text-[10px] font-mono text-ink-400 dark:text-ink-500">L{idx + 1}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                          {layer.name}
                        </h3>
                        <span className="text-[11px] font-mono text-cobalt-600 dark:text-cobalt-400/70">
                          {layer.tagline}
                        </span>
                      </div>
                      <p className="text-xs text-ink-500 dark:text-ink-400 mt-2 leading-relaxed">
                        {layer.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-ink-100 dark:bg-ink-900/50 text-ink-600 dark:text-ink-300 border border-ink-200 dark:border-ink-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {!isLast && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-cobalt-500/40 dark:text-cobalt-400/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Design decisions panel */}
      <div className="lg:col-span-5">
        <div className="sticky top-24 rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 p-5 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400" />
            <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100">
              Key Design Decisions
            </h3>
          </div>

          <div className="space-y-5">
            {archLayers.map((layer) => (
              <div key={layer.id}>
                <h4 className="text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-1.5 uppercase tracking-wider">
                  {layer.name}
                </h4>
                <ul className="space-y-1.5">
                  {layer.decisions.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-ink-600 dark:text-ink-300 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-cobalt-500 dark:bg-cobalt-400 mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiTab() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="rounded-2xl border border-ink-200 dark:border-ink-700/50 bg-white dark:bg-ink-800/30 overflow-hidden">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-200 dark:border-ink-700/50 bg-ink-50 dark:bg-ink-900/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
          </div>
          <span className="text-xs font-mono text-ink-400 dark:text-ink-500 ml-2">
            REST API — Spring Boot 3 / Java 21
          </span>
        </div>

        {/* Endpoint list */}
        <div className="divide-y divide-ink-100 dark:divide-ink-700/30">
          {apiEndpoints.map((ep) => (
            <div
              key={`${ep.method}-${ep.path}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-ink-50 dark:hover:bg-ink-900/30 transition-colors group"
            >
              <span
                className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold border flex-shrink-0 w-16 text-center ${methodColors[ep.method]}`}
              >
                {ep.method}
              </span>
              <code className="text-sm font-mono text-ink-700 dark:text-ink-200 flex-1 min-w-0 truncate">
                {ep.path}
              </code>
              <span className="text-xs text-ink-400 dark:text-ink-500 hidden sm:block flex-shrink-0">
                {ep.description}
              </span>
              <span className="text-[10px] font-mono text-cobalt-600 dark:text-cobalt-400/70 flex-shrink-0 hidden md:block">
                {ep.service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture notes */}
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        {[
          {
            title: 'OpenAPI 3',
            desc: 'Springdoc auto-generates Swagger UI for interactive API exploration and client SDK generation.',
          },
          {
            title: 'Problem Details',
            desc: 'RFC 7807 standardized error responses with trace IDs for every exception path.',
          },
          {
            title: 'Versioned Routes',
            desc: '/api/v1/* prefix enables backward-compatible evolution without breaking existing Flutter clients.',
          },
        ].map((note, i) => (
          <div
            key={note.title}
            className="rounded-xl border border-ink-200 dark:border-ink-700/40 bg-white dark:bg-ink-800/30 p-4 animate-fade-in-up"
            style={{ animationDelay: `${300 + i * 80}ms` }}
          >
            <h4 className="text-xs font-semibold text-cobalt-600 dark:text-cobalt-400 mb-1.5 uppercase tracking-wider">
              {note.title}
            </h4>
            <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">
              {note.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
