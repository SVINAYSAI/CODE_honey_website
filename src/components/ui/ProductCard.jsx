import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Lock, Shield, RotateCcw } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export const ProductCard = ({ product, onAddToCart }) => {
  const [selectedPack, setSelectedPack] = useState(product.packSizes[0]);
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [subscribeFrequency, setSubscribeFrequency] = useState('monthly');
  
  const currentPrice = isSubscribe ? product.subscribePrice : selectedPack.price;
  const originalPrice = isSubscribe ? product.oneTimePrice : null;
  
  return (
    <motion.div
      className="bg-dark-card rounded-2xl overflow-hidden border border-honey/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Color Accent Strip */}
      <div 
        className="h-2 w-full"
        style={{ backgroundColor: product.color }}
      />
      
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        {product.image && (
          <div className="w-full md:w-1/2 bg-dark/50 flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
            {/* Soft backdrop glow matching product color */}
            <div 
              className="absolute inset-0 opacity-20 blur-3xl"
              style={{ backgroundColor: product.color }}
            />
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-sm h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-10"
            />
          </div>
        )}
        
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge variant={product.tag === 'BESTSELLER' ? 'bestseller' : product.tag === 'NEW' ? 'new' : 'solid'} size="sm" className="mb-3">
              {product.tag}
            </Badge>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-text-warm">
              {product.name}
            </h3>
            <p className="text-text-dim text-sm mt-1">{product.subtitle}</p>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-honey text-honey" />
            ))}
          </div>
          <span className="text-sm text-text-dim">({product.reviewCount}+ reviews)</span>
        </div>
        
        {/* Claims */}
        <ul className="space-y-2 mb-6">
          {product.claims.map((claim, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-text-warm">
              <Check className="w-4 h-4 text-honey flex-shrink-0" />
              {claim}
            </li>
          ))}
        </ul>
        
        {/* Pack Size Selector */}
        <div className="mb-6">
          <p className="text-sm text-text-dim mb-3">Choose pack size:</p>
          <div className="flex flex-wrap gap-2">
            {product.packSizes.map((pack) => (
              <button
                key={pack.qty}
                onClick={() => setSelectedPack(pack)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedPack.qty === pack.qty && !isSubscribe
                    ? 'bg-honey text-deep'
                    : 'bg-dark-mid text-text-warm border border-honey/20 hover:border-honey'
                }`}
              >
                {pack.qty} Pack
              </button>
            ))}
          </div>
        </div>
        
        {/* Subscribe Toggle */}
        <div className="bg-dark-mid rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text-warm font-medium">Subscribe & Save</span>
            <button
              onClick={() => setIsSubscribe(!isSubscribe)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isSubscribe ? 'bg-honey' : 'bg-dark-card'
              }`}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 rounded-full bg-white"
                animate={{ left: isSubscribe ? '28px' : '4px' }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
          
          {isSubscribe && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-3"
            >
              <select
                value={subscribeFrequency}
                onChange={(e) => setSubscribeFrequency(e.target.value)}
                className="w-full bg-dark-card border border-honey/20 rounded-lg px-3 py-2 text-sm text-text-warm focus:border-honey focus:outline-none"
              >
                <option value="2weeks">Every 2 Weeks</option>
                <option value="monthly">Every Month</option>
              </select>
            </motion.div>
          )}
          
          <div className="flex items-center gap-2">
            {isSubscribe && originalPrice && (
              <span className="text-text-dim line-through text-sm">${originalPrice}</span>
            )}
            <span className="text-2xl font-display font-bold text-honey">${currentPrice}</span>
            {isSubscribe && (
              <Badge variant="success" size="sm">15% OFF</Badge>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full mb-4"
          onClick={() => onAddToCart(product)}
        >
          {isSubscribe ? 'Subscribe Now' : 'Buy Now'}
        </Button>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-text-dim">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> Secure Checkout
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" /> 30-Day Guarantee
          </span>
          <span className="flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Free Returns
          </span>
        </div>
        </div>
      </div>
    </motion.div>
  );
};
