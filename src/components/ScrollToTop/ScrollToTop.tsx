// src/components/ScrollToTop/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';

interface ScrollToTopProps {
  threshold?: number; // Show button after scrolling this many pixels
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  const handleScroll = () => {
    setIsVisible(window.scrollY > threshold);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [threshold]);

  if (!isVisible) return null; // Don't render if not needed

  return (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className='fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50'
      title='Back to top'
    >
      {/* Chevron Up Icon */}
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 15l7-7 7 7'
        />
      </svg>
    </button>
  );
};
export default ScrollToTop
