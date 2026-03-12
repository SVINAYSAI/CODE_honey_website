import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const neverItems = [
  {
    title: 'Artificial Sweeteners',
    description: 'No sucralose, aspartame, or acesulfame-K. Ever.',
  },
  {
    title: 'Synthetic Caffeine',
    description: 'No caffeine anhydrous. Only natural sources.',
  },
  {
    title: 'Seed Oils',
    description: 'No canola, soybean, or sunflower oils.',
  },
  {
    title: 'Artificial Colors',
    description: 'No Red 40, Yellow 5, or synthetic dyes.',
  },
  {
    title: 'Artificial Flavors',
    description: 'Real ingredients only. No lab-made flavor compounds.',
  },
  {
    title: 'Fillers & Binders',
    description: 'No maltodextrin, silicon dioxide, or additives.',
  },
];

export const NeverUse = () => {
  return (
    <section className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Red Tint Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 26, 26, 0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            What We'll <span className="text-red-500">Never</span> Use
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            Clean means saying no.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neverItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-dark-card p-6 rounded-xl border-l-4 border-red-500/50 hover:border-red-500 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-text-warm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-dim text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
