import { motion } from 'framer-motion';
import { Scissors, Droplets, Zap } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Scissors,
    title: 'RIP',
    description: 'Tear Open the Packet',
    detail: 'No mixing required. No shaker needed. No mess.',
  },
  {
    number: '02',
    icon: Droplets,
    title: 'SIP',
    description: 'Squeeze & Sip Directly',
    detail: 'Consume the honey gel straight or mix into water pre-workout.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'GO',
    description: 'Perform at Your Best',
    detail: 'Clean energy activates within 20–30 minutes. Lasts 4–6 hours.',
  },
];

export const HowToUse = () => {
  return (
    <section className="relative py-20 md:py-32 bg-dark-mid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-honey font-accent tracking-widest text-sm mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm">
            Rip. Sip. Go.
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-honey via-honey to-honey/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ originX: 0 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  className="relative text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Circle */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-dark-card border-2 border-honey flex items-center justify-center relative z-10">
                      <step.icon className="w-10 h-10 text-honey" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-honey text-deep font-accent font-bold flex items-center justify-center text-sm">
                      {step.number}
                    </div>
                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-honey/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-text-warm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-honey font-medium mb-2">{step.description}</p>
                  <p className="text-text-dim text-sm">{step.detail}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Caption */}
        <ScrollReveal delay={0.6} className="text-center mt-12">
          <p className="text-text-dim text-sm">
            Take it anywhere. Use it anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
