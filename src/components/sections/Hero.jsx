import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HoneycombBg } from '../ui/HoneycombBg';

const trustBadges = [
  '8 Clean Ingredients',
  'Raw Honey',
  'Glyphosate-Free',
  'No Seed Oils',
];

const tickerItems = [
  '8 CLEAN INGREDIENTS',
  '100% RAW HONEY',
  'GLYPHOSATE-FREE',
  'NO SEED OILS',
  'MADE IN THE USA',
  'NO ARTIFICIAL ANYTHING',
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden pt-10">
      {/* Background */}
      <div className="absolute inset-0 bg-deep">
        <HoneycombBg opacity={0.03} />
        
        {/* Radial Glow */}
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(232,160,32,0.4) 0%, transparent 40%)',
            transform: 'translate(30%, -50%)',
          }}
        />
        
        {/* Diagonal Gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(232,160,32,0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left"
            >
              {/* Eyebrow */}
              <Badge variant="outline" className="mb-6">
                WHOLE-FOOD PERFORMANCE
              </Badge>

              {/* Headline */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-warm leading-[0.95] mb-4">
                The Cleanest
                <br />
                <span className="gradient-text">Pre-Workout</span>
                <br />
                on Earth.
              </h1>

              {/* Subheadline */}
              <p className="font-display text-xl md:text-2xl text-honey italic mb-6">
                Built from raw honey. Not a lab.
              </p>

              {/* Body */}
              <p className="text-text-dim text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                A whole-food pre-workout built around raw honey to deliver 
                sustained energy without synthetic overstimulation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button variant="primary" size="lg">
                  Get Clean Energy Now
                </Button>
                <Button variant="secondary" size="lg">
                  See Ingredients →
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {trustBadges.map((badge, i) => (
                  <span 
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-text-dim"
                  >
                    <Check className="w-3.5 h-3.5 text-honey" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Product */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Product Container */}
              <div className="relative">
                {/* Floating Badge - Reviews */}
                <motion.div
                  className="absolute -top-4 -left-4 z-10 bg-dark-card border border-honey/30 rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-honey font-bold">600+</span>
                    <span className="text-text-warm text-sm">Reviews</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-honey text-honey" />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Product Image Placeholder */}
                <motion.div
                  className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #1A1C17 0%, #2B4020 50%, #1A1C17 100%)',
                    boxShadow: '0 0 60px rgba(232, 160, 32, 0.3), inset 0 0 40px rgba(232, 160, 32, 0.1)',
                  }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Honey Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-honey/10 via-transparent to-honey/5" />
                  
                  {/* Product Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img 
                      src="/Flowing.webp" 
                      alt="CODE NECTAR Flowing" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </motion.div>

                {/* Floating Pill - Stats */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-honey text-deep rounded-full px-6 py-2 font-accent tracking-wider text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  NO CRASH · 4-6 HRS · 8 INGREDIENTS
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className="relative bg-honey py-3 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-content">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center mx-8 text-deep font-accent tracking-wider text-sm">
                <span className="mr-2">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
