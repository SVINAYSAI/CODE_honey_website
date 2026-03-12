import { motion } from 'framer-motion';
import { CounterStat } from '../ui/CounterStat';

const stats = [
  { value: 600, suffix: '+', label: '5-Star Reviews' },
  { value: 8, suffix: '', label: 'Clean Ingredients' },
  { value: 6, suffix: 'hr', label: 'Sustained Energy', prefix: '4–' },
];

export const StatsBanner = () => {
  return (
    <section className="relative py-16 md:py-20 bg-forest overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(232,160,32,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center px-8 md:px-16">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-honey mb-2">
                  {stat.prefix && <span className="text-3xl md:text-4xl">{stat.prefix}</span>}
                  <CounterStat target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-warm/80 font-body text-sm md:text-base tracking-wide">
                  {stat.label}
                </p>
              </div>
              
              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-honey/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
