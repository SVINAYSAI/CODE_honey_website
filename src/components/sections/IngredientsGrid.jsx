import { ingredients } from '../../data/ingredients';
import { IngredientCard } from '../ui/IngredientCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const IngredientsGrid = () => {
  return (
    <section className="relative py-20 md:py-32 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-4">
          <span className="text-honey font-accent tracking-widest text-sm mb-4 block">
            CLEAN LABEL
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            What Goes In
          </h2>
          <p className="text-text-dim text-lg max-w-2xl mx-auto">
            Every ingredient earns its place. Nothing hidden, nothing artificial.
          </p>
        </ScrollReveal>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {ingredients.map((ingredient, index) => (
            <IngredientCard 
              key={ingredient.id} 
              ingredient={ingredient} 
              index={index}
            />
          ))}
        </div>

        {/* Caption */}
        <ScrollReveal delay={0.6} className="text-center">
          <p className="text-text-dim text-sm italic">
            Ingredients your body can recognize.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
