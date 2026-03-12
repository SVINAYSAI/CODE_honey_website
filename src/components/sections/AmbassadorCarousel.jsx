import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ambassadors } from '../../data/ambassadors';
import { TestimonialCard } from '../ui/TestimonialCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AmbassadorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ambassadors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ambassadors.length) % ambassadors.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ambassadors.length);
  };

  return (
    <section id="ambassadors" className="relative py-20 md:py-32 bg-dark-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-warm mb-4">
            Trusted by Athletes.
            <br />
            <span className="text-honey">Chosen by Professionals.</span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <div 
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * 424 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {[...ambassadors, ...ambassadors].map((ambassador, index) => (
                <TestimonialCard key={index} ambassador={ambassador} />
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-dark-card border border-honey/20 flex items-center justify-center text-text-warm hover:text-honey hover:border-honey transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-dark-card border border-honey/20 flex items-center justify-center text-text-warm hover:text-honey hover:border-honey transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {ambassadors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index 
                  ? 'w-8 bg-honey' 
                  : 'bg-honey/30 hover:bg-honey/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
