import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  const external = certifications.filter((c) => c.type === 'external');
  const internal = certifications.filter((c) => c.type === 'internal');

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-600 dark:text-cobalt-400 mb-4">
            05 — Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mb-3">
            Verified Credentials
          </h2>
          <p className="text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
            Industry-recognized certifications and completed internal training programs across AWS, Java, and cloud-native architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* External */}
          <div className="reveal rounded-2xl border border-cobalt-500/20 bg-cobalt-500/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cobalt-500 dark:text-cobalt-400" />
              <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                Industry Certifications
              </h3>
            </div>
            <div className="space-y-2">
              {external.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2.5 rounded-lg bg-white dark:bg-ink-900/40 border border-ink-100 dark:border-ink-700/30 px-3 py-2.5"
                >
                  <BadgeCheck className="w-4 h-4 text-cobalt-500 dark:text-cobalt-400 flex-shrink-0" />
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cobalt-600 dark:text-cobalt-300 hover:underline hover:text-cobalt-700 dark:hover:text-cobalt-200 transition-colors"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <span className="text-sm text-ink-700 dark:text-ink-200">{cert.name}</span>
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* Internal */}
          <div className="reveal rounded-2xl border border-ink-200 dark:border-ink-700/40 bg-white dark:bg-ink-800/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <h3 className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                Internal Training Programs
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {internal.map((cert) => (
                <span
                  key={cert.name}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-300/90 border border-emerald-500/20"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
