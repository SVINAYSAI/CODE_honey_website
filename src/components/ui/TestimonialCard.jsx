import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export const TestimonialCard = ({ ambassador }) => {
  return (
    <motion.div
      className="bg-dark-card rounded-2xl p-6 md:p-8 border border-honey/10 min-w-[300px] md:min-w-[400px] max-w-[400px]"
      whileHover={{ y: -5, borderColor: 'rgba(232, 160, 32, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar & Info */}
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold text-white"
          style={{ backgroundColor: ambassador.color }}
        >
          {ambassador.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-text-warm">
            {ambassador.name}
          </h4>
          <p className="text-sm text-text-dim">{ambassador.role}</p>
        </div>
      </div>
      
      {/* Quote */}
      <blockquote className="text-text-warm leading-relaxed mb-4">
        "{ambassador.quote}"
      </blockquote>
      
      {/* Instagram */}
      <a 
        href={`https://instagram.com/${ambassador.instagram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-honey hover:text-honey-light transition-colors"
      >
        <Instagram className="w-4 h-4" />
        {ambassador.instagram}
      </a>
    </motion.div>
  );
};
