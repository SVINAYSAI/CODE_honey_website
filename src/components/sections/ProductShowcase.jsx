import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, Zap, Clock, Leaf, ChevronLeft, ChevronRight, Lock, Shield, RotateCcw } from 'lucide-react';
import { products } from '../../data/products';
import { ScrollReveal } from '../ui/ScrollReveal';

const benefits = [
  { icon: Zap, label: 'NO CRASH', sub: 'Sustained Energy' },
  { icon: Clock, label: '4-6 HOURS', sub: 'Sustained Energy' },
  { icon: Leaf, label: 'CLEAN LABEL', sub: '8 Ingredients' },
];

export const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPack, setSelectedPack] = useState(0);
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [deliveryFreq, setDeliveryFreq] = useState('monthly');
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const product = products[activeIndex];
  const pack = product.packSizes[selectedPack];
  const oneTimePrice = product.oneTimePrice;
  const savings = (oneTimePrice - product.subscribePrice).toFixed(2);
  const isEven = activeIndex % 2 === 0;

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setSelectedPack(0);
  };

  const next = () => {
    const idx = (activeIndex + 1) % products.length;
    setDirection(1);
    setActiveIndex(idx);
    setSelectedPack(0);
  };

  const prev = () => {
    const idx = (activeIndex - 1 + products.length) % products.length;
    setDirection(-1);
    setActiveIndex(idx);
    setSelectedPack(0);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="shop" className="relative min-h-screen bg-deep overflow-hidden">
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex + '-bg'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${product.color} 0%, transparent 60%), 
                           radial-gradient(ellipse at 80% 80%, ${product.color}60 0%, transparent 50%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Side Navigation Arrows */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full items-center justify-center text-white transition-all hover:scale-110 border"
        style={{ borderColor: product.color + '50', backgroundColor: product.color + '15' }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full items-center justify-center text-white transition-all hover:scale-110 border"
        style={{ borderColor: product.color + '50', backgroundColor: product.color + '15' }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 py-16 md:py-24">
        {/* CODE NECTAR Badge */}
        <ScrollReveal className="flex justify-center mb-8">
          <motion.span
            key={activeIndex + '-badge'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-accent tracking-[0.2em] border"
            style={{ borderColor: product.color, color: product.color }}
          >
            CODE NECTAR
          </motion.span>
        </ScrollReveal>

        {/* Product Dots / Tabs */}
        <div className="flex justify-center gap-3 mb-12 px-4">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`px-4 py-2 rounded-full text-xs font-accent tracking-wider transition-all duration-300 border ${
                activeIndex === i
                  ? 'text-white'
                  : 'border-dark-card text-text-dim hover:text-text-warm'
              }`}
              style={activeIndex === i ? { backgroundColor: product.color, borderColor: product.color } : {}}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Main Product Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                {/* Image Side */}
                <div className={`relative flex items-center justify-center py-8 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Background Glow */}
                  <div
                    className="absolute inset-0 opacity-15 blur-[100px] rounded-full"
                    style={{ backgroundColor: product.color }}
                  />
                  {product.image && (
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    />
                  )}
                </div>

                {/* Details Side */}
                <div className={`${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Title */}
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-1 leading-tight">
                    {product.name}
                    {product.subtitle && (
                      <span className="block text-2xl md:text-3xl font-normal text-text-dim mt-1">
                        ({product.subtitle})
                      </span>
                    )}
                  </h2>
                  <p className="text-text-dim text-sm italic mb-4">{product.tagline}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-honey text-honey" />
                      ))}
                    </div>
                    <span className="text-text-dim text-sm">{product.reviewCount}+ Reviews</span>
                  </div>

                  {/* Claims */}
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mb-8">
                    {product.claims.map((claim, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-sm text-text-warm">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: product.color }} />
                        {claim}
                      </span>
                    ))}
                  </div>

                  {/* Pack Size Selector */}
                  <div className="mb-6">
                    <p className="text-xs font-accent tracking-[0.2em] text-text-dim mb-3 uppercase">Select Pack Size</p>
                    <div className="flex gap-3">
                      {product.packSizes.map((ps, i) => (
                        <button
                          key={ps.qty}
                          onClick={() => setSelectedPack(i)}
                          className={`flex-1 py-3 px-4 rounded-lg border-2 text-center transition-all duration-200 ${
                            selectedPack === i
                              ? 'text-white'
                              : 'border-dark-card text-text-dim hover:border-text-dim'
                          }`}
                          style={selectedPack === i ? { borderColor: product.color, backgroundColor: product.color + '20' } : {}}
                        >
                          <span className="block text-lg font-bold">{ps.qty}</span>
                          <span className="block text-xs mt-0.5">${ps.price.toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subscribe & Save Box */}
                  <div
                    className="rounded-xl p-5 mb-4 border-2 cursor-pointer transition-all"
                    style={{ borderColor: isSubscribe ? product.color : '#2e2e2e', backgroundColor: isSubscribe ? product.color + '08' : 'transparent' }}
                    onClick={() => setIsSubscribe(true)}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: product.color }}
                      >
                        {isSubscribe && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: product.color }}
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <span className="text-text-warm font-semibold text-base">Subscribe & Save</span>
                        <div className="flex items-center gap-2">
                          {isSubscribe && (
                            <span className="text-text-dim line-through text-sm">${oneTimePrice}</span>
                          )}
                          <span className="text-xl font-bold" style={{ color: product.color }}>
                            ${product.subscribePrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-dim text-xs ml-8 mb-4">Never run out of supplies. Cancel anytime.</p>

                    {isSubscribe && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <p className="text-xs font-accent tracking-[0.15em] text-text-dim mb-2 uppercase">Deliver Every:</p>
                        <div className="flex gap-2 mb-4">
                          <button
                            onClick={(e) => { e.stopPropagation(); setDeliveryFreq('2weeks'); }}
                            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border transition-all ${
                              deliveryFreq === '2weeks'
                                ? 'text-white border-transparent'
                                : 'border-dark-card text-text-dim hover:border-text-dim'
                            }`}
                            style={deliveryFreq === '2weeks' ? { backgroundColor: product.color } : {}}
                          >
                            Every 2 Weeks
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setDeliveryFreq('monthly'); }}
                            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium border transition-all ${
                              deliveryFreq === 'monthly'
                                ? 'text-white border-transparent'
                                : 'border-dark-card text-text-dim hover:border-text-dim'
                            }`}
                            style={deliveryFreq === 'monthly' ? { backgroundColor: product.color } : {}}
                          >
                            Every Month
                          </button>
                        </div>

                        <ul className="space-y-1 text-xs text-text-dim ml-1">
                          <li>• Lock in your edge with automatic simplicity.</li>
                          <li>• Members save 15% every order.</li>
                          <li>• Cancel anytime — no risk, just results.</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* One-Time Purchase */}
                  <div
                    className="rounded-xl p-4 mb-6 border-2 cursor-pointer transition-all"
                    style={{ borderColor: !isSubscribe ? product.color : '#2e2e2e', backgroundColor: !isSubscribe ? product.color + '08' : 'transparent' }}
                    onClick={() => setIsSubscribe(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: product.color }}
                      >
                        {!isSubscribe && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: product.color }}
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <span className="text-text-warm font-medium">One-Time Purchase</span>
                        <span className="text-lg font-bold text-text-warm">${oneTimePrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subscribe Now Button */}
                  <motion.button
                    className="w-full py-4 rounded-full text-white font-bold text-lg tracking-wide transition-all hover:brightness-110 hover:shadow-lg mb-4"
                    style={{ backgroundColor: product.color }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubscribe ? 'SUBSCRIBE NOW' : 'BUY NOW'}
                  </motion.button>

                  {/* Savings & Trust */}
                  <div className="text-center mb-6">
                    <p className="text-text-dim text-xs mb-1">You have made the right choice to save more</p>
                    <p className="font-bold text-sm" style={{ color: product.color }}>
                      ${savings} Savings
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-text-dim">
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

              {/* Benefits Row */}
              <div className="mt-14">
                <div className="flex justify-center gap-8 md:gap-16">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-3 border"
                        style={{ borderColor: product.color + '60', backgroundColor: product.color + '10' }}
                      >
                        <b.icon className="w-6 h-6" style={{ color: product.color }} />
                      </div>
                      <span className="text-xs font-accent tracking-wider text-text-warm">{b.label}</span>
                      <span className="text-[10px] text-text-dim">{b.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Product Hint */}
              {activeIndex < products.length - 1 && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={next}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <span className="text-xs font-accent tracking-[0.2em] text-text-dim group-hover:text-text-warm transition-colors">
                      SEE OUR{' '}
                      <span className="font-bold" style={{ color: product.color }}>
                        {products[activeIndex + 1].name.toUpperCase()}
                      </span>
                    </span>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ChevronRight className="w-4 h-4 text-text-dim rotate-90" />
                    </motion.div>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white border"
            style={{ borderColor: product.color + '50', backgroundColor: product.color + '15' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white border"
            style={{ borderColor: product.color + '50', backgroundColor: product.color + '15' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
