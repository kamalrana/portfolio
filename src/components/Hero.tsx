import { ArrowRight, Download, BarChart3, MapPin, Briefcase, Award } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-60" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cobalt-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cobalt-700/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-cobalt-500 dark:bg-cobalt-400 animate-pulse" />
              Available for Senior / Tech Lead roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-ink-50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {profile.name}
            </h1>

            <div className="flex items-center gap-3 animate-fade-in-up flex-wrap" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl sm:text-2xl font-semibold text-gradient">
                {profile.title}
              </h2>
              <span className="text-ink-400 dark:text-ink-500">|</span>
              <span className="text-sm font-mono text-ink-500 dark:text-ink-400">
                {profile.experience}
              </span>
            </div>

            <p className="text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {profile.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-500 dark:text-ink-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400" /> {profile.focus}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400" /> AWS x2 + Oracle Certified
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => scrollTo('case-studies')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-cobalt-500/25 hover:-translate-y-0.5"
              >
                <BarChart3 className="w-4 h-4" />
                View Client Metrics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('timeline')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-ink-300 dark:border-ink-700 text-ink-700 dark:text-ink-200 font-medium text-sm hover:border-cobalt-500/50 hover:text-cobalt-600 dark:hover:text-cobalt-400 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>

          {/* Stats panel */}
          <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt-500/20 to-transparent rounded-2xl blur-xl opacity-60" />
              <div className="relative grid grid-cols-2 gap-px bg-ink-200 dark:bg-ink-800/30 rounded-2xl overflow-hidden border border-ink-200 dark:border-ink-700/50">
                {[
                  { label: 'Years Experience', value: '14+', sub: 'Java' },
                  { label: 'Spring Boot', value: '3+ yrs', sub: 'Modern Java Stack' },
                  { label: 'Team Leadership', value: '8 max', sub: 'Onshore + Offshore' },
                  { label: 'API Optimization', value: '60%', sub: 'Response Time Cut' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-ink-900 p-5 hover:bg-ink-50 dark:hover:bg-ink-800/50 transition-colors"
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs font-medium text-ink-700 dark:text-ink-200 mt-1">{stat.label}</div>
                    <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-ink-300 dark:border-ink-600 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-cobalt-500 dark:bg-cobalt-400 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
