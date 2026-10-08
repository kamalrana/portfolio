import { Github, Linkedin, Mail, ShieldAlert, Heart } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-ink-200 dark:border-ink-800/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cobalt-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Left: identity */}
          <div>
            <h3 className="text-xl font-bold text-ink-800 dark:text-ink-100 mb-2">
              {profile.name}
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-4 max-w-md">
              {profile.title} | {profile.experience} of enterprise Java engineering. Open to Senior Developer and Technical Lead roles in fintech and banking.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-600 dark:text-ink-300 hover:border-cobalt-500/50 hover:text-cobalt-500 dark:hover:text-cobalt-400 hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-600 dark:text-ink-300 hover:border-cobalt-500/50 hover:text-cobalt-500 dark:hover:text-cobalt-400 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-600 dark:text-ink-300 hover:border-cobalt-500/50 hover:text-cobalt-500 dark:hover:text-cobalt-400 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: NDA disclaimer */}
          <div className="md:justify-self-end max-w-md">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-300 mb-1">
                    Confidentiality &amp; Corporate NDA Disclaimer
                  </h4>
                  <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">
                    All client project details on this portfolio are intentionally anonymized to protect
                    non-disclosure agreements. Client names have been replaced with generalized industry
                    descriptors. Technical metrics and architectural details are presented at a level that
                    preserves confidentiality while demonstrating competency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-100 dark:border-ink-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400 dark:text-ink-500 font-mono">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400 dark:text-ink-500 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-cobalt-500 dark:text-cobalt-400 fill-current" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
