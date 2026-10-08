import { useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'timeline', label: 'Timeline' },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ink-200 dark:border-ink-800/50 bg-white/80 dark:bg-ink-900/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-cobalt-500/15 border border-cobalt-500/25 flex items-center justify-center group-hover:bg-cobalt-500/25 transition-colors">
              <Code2 className="w-5 h-5 text-cobalt-500 dark:text-cobalt-400" />
            </div>
            <span className="font-mono text-sm font-semibold text-ink-800 dark:text-ink-100">
              KKR<span className="text-cobalt-500 dark:text-cobalt-400">.dev</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  active === link.id
                    ? 'text-cobalt-600 dark:text-cobalt-400'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-cobalt-500 dark:bg-cobalt-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-600 dark:text-ink-300 hover:border-cobalt-500/50 hover:text-cobalt-500 dark:hover:text-cobalt-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-lg border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-600 dark:text-ink-300"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`px-4 py-3 text-sm font-medium text-left rounded-lg transition-colors ${
                  active === link.id
                    ? 'text-cobalt-600 dark:text-cobalt-400 bg-cobalt-500/10'
                    : 'text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
