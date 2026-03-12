import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="shop" className="relative py-20 md:py-32 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-honey font-accent tracking-widest text-sm mb-4 block">
            PRODUCTS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm">
            Choose Your Formula
          </h2>
        </ScrollReveal>

        {/* Product Tabs */}
        <ScrollReveal delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-honey text-deep'
                    : 'bg-dark-card text-text-warm border border-honey/20 hover:border-honey'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Product */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <ProductCard 
              product={products[activeProduct]} 
              onAddToCart={() => {}}
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile: Show All Products */}
        <div className="md:hidden mt-12 space-y-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} onAddToCart={() => {}} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
