import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, Lock, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [selectedPack, setSelectedPack] = useState(products[0].packSizes[0]);
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [subscribeFrequency, setSubscribeFrequency] = useState('monthly');

  const product = products[activeProduct];
  const currentPrice = isSubscribe ? product.subscribePrice : selectedPack.price;
  const originalPrice = isSubscribe ? product.oneTimePrice : null;

  const handleProductChange = (index) => {
    setActiveProduct(index);
    setSelectedPack(products[index].packSizes[0]);
  };

  const nextProduct = () => {
    const next = (activeProduct + 1) % products.length;
    handleProductChange(next);
  };

  const prevProduct = () => {
    const prev = (activeProduct - 1 + products.length) % products.length;
    handleProductChange(prev);
  };

  return (
    <section id="shop" className="relative min-h-screen bg-deep overflow-hidden">
      {/* Dynamic Background that changes with product */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${product.color}80 0%, transparent 60%), 
                           radial-gradient(ellipse at 70% 80%, ${product.color}40 0%, transparent 50%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-28">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 px-4">
          <span className="text-honey font-accent tracking-[0.3em] text-sm mb-4 block">
            PRODUCTS
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-warm mb-4">
            Choose Your Formula
          </h2>
          <p className="text-text-dim text-lg max-w-2xl mx-auto">
            Every edition built on raw honey. No compromise.
          </p>
        </ScrollReveal>

        {/* Product Tabs */}
        <ScrollReveal delay={0.1} className="mb-16 px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((p, index) => (
              <button
                key={p.id}
                onClick={() => handleProductChange(index)}
                className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeProduct === index
                    ? 'text-deep shadow-lg'
                    : 'bg-dark-card text-text-warm border border-honey/20 hover:border-honey/50'
                }`}
                style={activeProduct === index ? { backgroundColor: product.color } : {}}
              >
                {p.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Full-Width Product Display */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden border border-honey/10"
              style={{
                background: `linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 50%, #1a1a1a 100%)`,
              }}
            >
              {/* Color Accent Strip */}
              <div 
                className="h-1.5 w-full"
                style={{ backgroundColor: product.color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left: Product Image */}
                <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
                  {/* Background Glow */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 blur-[80px]"
                    style={{ backgroundColor: product.color }}
                  />

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevProduct}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-deep/60 border border-honey/20 flex items-center justify-center text-text-warm hover:bg-honey/20 hover:border-honey transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextProduct}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-deep/60 border border-honey/20 flex items-center justify-center text-text-warm hover:bg-honey/20 hover:border-honey transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Product Image */}
                  {product.image && (
                    <motion.img
                      key={product.image}
                      initial={{ scale: 0.85, opacity: 0, rotateY: -10 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      exit={{ scale: 0.85, opacity: 0, rotateY: 10 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                    />
                  )}

                  {/* Decorative ring */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border opacity-10"
                    style={{ borderColor: product.color }}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border opacity-5"
                    style={{ borderColor: product.color }}
                  />
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  {/* Tag & Title */}
                  <Badge 
                    variant={product.tag === 'BESTSELLER' ? 'bestseller' : product.tag === 'NEW' ? 'new' : 'solid'} 
                    size="sm" 
                    className="mb-4 w-fit"
                  >
                    {product.tag}
                  </Badge>

                  <h3 className="font-display text-4xl md:text-5xl font-bold text-text-warm mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-dim text-lg mb-2">{product.subtitle}</p>
                  <p className="text-text-dim text-sm italic mb-6">{product.tagline}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-honey text-honey" />
                      ))}
                    </div>
                    <span className="text-sm text-text-dim">({product.reviewCount}+ reviews)</span>
                  </div>

                  {/* Claims */}
                  <ul className="space-y-3 mb-8">
                    {product.claims.map((claim, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-warm">
                        <Check className="w-5 h-5 text-honey flex-shrink-0" />
                        <span className="text-base">{claim}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pack Size Selector */}
                  <div className="mb-6">
                    <p className="text-sm text-text-dim mb-3 font-medium uppercase tracking-wider">Pack Size</p>
                    <div className="flex flex-wrap gap-3">
                      {product.packSizes.map((pack) => (
                        <button
                          key={pack.qty}
                          onClick={() => setSelectedPack(pack)}
                          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                            selectedPack.qty === pack.qty && !isSubscribe
                              ? 'bg-honey text-deep shadow-lg'
                              : 'bg-deep text-text-warm border border-honey/20 hover:border-honey/50'
                          }`}
                        >
                          {pack.qty} Pack — ${pack.price}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subscribe Toggle */}
                  <div className="bg-deep/60 rounded-2xl p-5 mb-6 border border-honey/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-text-warm font-medium text-base">Subscribe & Save</span>
                      <button
                        onClick={() => setIsSubscribe(!isSubscribe)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          isSubscribe ? 'bg-honey' : 'bg-dark-card'
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
                          animate={{ left: isSubscribe ? '32px' : '4px' }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </div>

                    {isSubscribe && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-4"
                      >
                        <select
                          value={subscribeFrequency}
                          onChange={(e) => setSubscribeFrequency(e.target.value)}
                          className="w-full bg-dark-card border border-honey/20 rounded-xl px-4 py-3 text-sm text-text-warm focus:border-honey focus:outline-none"
                        >
                          <option value="2weeks">Every 2 Weeks</option>
                          <option value="monthly">Every Month</option>
                        </select>
                      </motion.div>
                    )}

                    <div className="flex items-center gap-3">
                      {isSubscribe && originalPrice && (
                        <span className="text-text-dim line-through text-lg">${originalPrice}</span>
                      )}
                      <span className="text-4xl font-display font-bold text-honey">${currentPrice}</span>
                      {isSubscribe && (
                        <Badge variant="success" size="sm">15% OFF</Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mb-5 text-lg py-4"
                    onClick={() => {}}
                  >
                    {isSubscribe ? 'Subscribe Now' : 'Buy Now'}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-dim">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" /> Secure Checkout
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" /> 30-Day Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5" /> Free Returns
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product Thumbnails */}
        <div className="flex justify-center gap-4 mt-10 px-4">
          {products.map((p, index) => (
            <motion.button
              key={p.id}
              onClick={() => handleProductChange(index)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                activeProduct === index
                  ? 'border-honey shadow-honey'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {p.image && (
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
