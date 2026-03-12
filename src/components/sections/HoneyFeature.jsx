import { motion } from 'framer-motion';
import { Zap, Leaf, Shield, Battery } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';

const benefits = [
  {
    icon: Battery,
    title: 'Sustained Energy Release',
    description: 'Glucose + fructose dual pathways deliver steady fuel without spikes.',
  },
  {
    icon: Leaf,
    title: '100% Natural Fuel',
    description: 'No processing, no additives — straight from the hive to you.',
  },
  {
    icon: Shield,
    title: 'Natural Antioxidants',
    description: 'Polyphenols reduce oxidative stress during high-output activity.',
  },
  {
    icon: Zap,
    title: 'Carbohydrate-Driven Energy',
    description: 'Fuels muscles directly without relying purely on stimulants.',
  },
];

export const HoneyFeature = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              {/* Main Visual */}
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-dark">
                <video 
                  src="/0d8e1d6442cb4e51bbb3c76f5de13e84.HD-1080p-7.2Mbps-65738013.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <div>
            <ScrollReveal>
              <span className="text-honey font-accent tracking-widest text-sm mb-4 block">
                AT THE CENTER OF IT ALL
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6">
                100% Raw Honey
              </h2>
              <p className="text-text-dim text-lg leading-relaxed mb-8">
                Raw honey is the foundation of every CODE NECTAR product. Its unique 
                glucose-fructose composition follows dual metabolic pathways — delivering 
                both immediate and sustained energy without the spikes and crashes of 
                refined sugars or artificial sweeteners.
              </p>
            </ScrollReveal>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                  <motion.div
                    className="bg-dark-card p-5 rounded-xl border-l-4 border-honey hover:border-honey-light transition-all duration-300 group"
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(232, 160, 32, 0.2)' }}
                  >
                    <benefit.icon className="w-6 h-6 text-honey mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-display text-lg font-semibold text-text-warm mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-text-dim text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <Button variant="secondary">
                Try It Now →
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
