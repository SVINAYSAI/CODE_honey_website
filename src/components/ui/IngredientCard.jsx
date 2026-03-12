import { motion } from 'framer-motion';

export const IngredientCard = ({ ingredient, index }) => {
  return (
    <motion.div
      className="flip-card h-72 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div className="flip-card-front bg-dark-card rounded-xl p-6 border border-honey/10 flex flex-col items-center text-center">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
            style={{ backgroundColor: `${ingredient.color}20` }}
          >
            {ingredient.emoji}
          </div>
          <h4 className="font-display text-xl font-semibold text-text-warm mb-2">
            {ingredient.name}
          </h4>
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{ backgroundColor: `${ingredient.color}30`, color: ingredient.color }}
          >
            {ingredient.tag}
          </span>
          <p className="text-sm text-text-dim leading-relaxed">
            {ingredient.front}
          </p>
          <p className="text-xs text-honey mt-auto">Hover to learn more →</p>
        </div>
        
        {/* Back */}
        <div 
          className="flip-card-back bg-dark-card rounded-xl p-6 border border-honey/20 flex flex-col"
          style={{ borderTop: `4px solid ${ingredient.color}` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{ingredient.emoji}</span>
            <h4 className="font-display text-lg font-semibold text-text-warm">
              {ingredient.name}
            </h4>
          </div>
          <p className="text-sm text-text-warm leading-relaxed flex-1">
            {ingredient.back}
          </p>
          <p className="text-xs text-text-dim mt-4">← Flip back</p>
        </div>
      </div>
    </motion.div>
  );
};
