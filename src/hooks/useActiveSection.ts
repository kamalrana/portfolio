import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'expertise', 'case-studies', 'architecture', 'timeline'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter(entry => entry.isIntersecting)
          .reduce((prev, current) => {
            const prevDistance = Math.abs(prev.boundingClientRect.top);
            const currentDistance = Math.abs(current.boundingClientRect.top);
            return currentDistance < prevDistance ? current : prev;
          }, entries[0]);

        if (visibleEntry?.isIntersecting) {
          setActive(visibleEntry.target.id);
        }
      },
      { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
