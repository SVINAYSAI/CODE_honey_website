import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';

const credentials = [
  '12+ Years Experience',
  '600+ Clients',
  'Top 3% World Podcast',
];

const checks = [
  'Zero Synthetic Ingredients',
  'Whole-Food Formulation',
  'Built for Longevity',
];

export const ExpertEndorsement = () => {
  return (
    <section className="relative py-20 md:py-32 bg-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Expert */}
          <ScrollReveal direction="left">
            <div className="text-center lg:text-left">
              {/* Photo */}
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-honey mx-auto lg:mx-0">
                  <div 
                    className="w-full h-full flex items-center justify-center text-6xl"
                    style={{ background: 'linear-gradient(145deg, #2B4020, #1A1C17)' }}
                  >
                    👨‍⚕️
                  </div>
                </div>
                {/* Ring Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-honey/30"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Name & Title */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-warm mb-1">
                Andrés Preschel
              </h3>
              <p className="text-honey mb-6">BSc, MSc(c) — Health & Performance Coach</p>

              {/* Credentials */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {credentials.map((cred, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-dark-card border border-honey/20 rounded-full text-xs text-text-dim"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Quote */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Quote Mark */}
              <Quote className="w-16 h-16 text-honey/20 mb-4" />

              {/* Quote Text */}
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-text-warm leading-relaxed mb-8">
                "CODE leverages whole-food compounds to work with my body, 
                not against it. With years of experience in performance and physiology, 
                I know when a formula is thoughtfully built.{' '}
                <span className="text-honey">This one is.</span>"
              </blockquote>

              {/* Checkmarks */}
              <div className="flex flex-wrap gap-4 mb-8">
                {checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-text-dim">
                    <Check className="w-4 h-4 text-honey" />
                    {check}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="primary">
                Try Code Nectar
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Backed By Strip */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="bg-dark-card rounded-xl py-4 px-6 text-center border border-honey/10">
            <p className="text-text-dim text-sm font-accent tracking-wider">
              BACKED BY SCIENCE, CHOSEN BY PROFESSIONALS
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
