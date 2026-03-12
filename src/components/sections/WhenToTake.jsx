import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Brain, Trophy, RefreshCw, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const accordionItems = [
  {
    id: 'pre-training',
    icon: Zap,
    title: 'Pre-Training',
    description: 'Unlocks clean power and sharp focus. Fuels output without gut strain or jittery crashes, so your body is primed to perform.',
    tip: 'Take 20-30 minutes before your workout for optimal results.',
  },
  {
    id: 'cognitive',
    icon: Brain,
    title: 'Before Cognitive Work',
    description: 'Elevates mental clarity and sustained concentration. Keeps the mind calm yet sharp for deep work, strategy, and problem-solving.',
    tip: 'Perfect for long work sessions, studying, or creative projects.',
  },
  {
    id: 'competition',
    icon: Trophy,
    title: 'Competition Days',
    description: 'Engineered for high stakes. Steady endurance, calm nerves, and explosive readiness when margins matter most.',
    tip: 'Use on game day or before important presentations.',
  },
  {
    id: 'recovery',
    icon: RefreshCw,
    title: 'Recovery & Reset',
    description: "Supports the body's repair cycle. Restores minerals, reduces inflammation, and accelerates recovery — so you're stronger tomorrow.",
    tip: 'Honey\'s antioxidants help reduce post-workout inflammation.',
  },
];

export const WhenToTake = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative py-20 md:py-32 bg-deep">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            When to Take It
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            Versatile energy for every moment that matters.
          </p>
        </ScrollReveal>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accordionItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <motion.div
                className={`bg-dark-card rounded-xl border-l-4 overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'border-honey' : 'border-honey/30 hover:border-honey/60'
                }`}
                whileHover={{ scale: openItem === item.id ? 1 : 1.02 }}
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center"
                      animate={{ 
                        scale: openItem === item.id ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-5 h-5 text-honey" />
                    </motion.div>
                    <h4 className="font-display text-lg font-semibold text-text-warm">
                      {item.title}
                    </h4>
                  </div>
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-text-dim" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-text-dim leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-honey">
                          <span className="w-1 h-1 rounded-full bg-honey" />
                          {item.tip}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
