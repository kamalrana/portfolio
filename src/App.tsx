import { useTheme } from '@/hooks/useTheme';
import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import CaseStudies from '@/components/CaseStudies';
import ArchitectureShowcase from '@/components/ArchitectureShowcase';
import Certifications from '@/components/Certifications';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-900 text-ink-800 dark:text-ink-100 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Expertise />
        <CaseStudies />
        <ArchitectureShowcase />
        <Certifications />
        <Timeline />
      </main>
      <Footer />
      <ScrollToTop threshold={300} />
    </div>
  );
}

export default App;
