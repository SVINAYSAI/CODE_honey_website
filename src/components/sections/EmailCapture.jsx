import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import { HoneycombBg } from '../ui/HoneycombBg';
import { Button } from '../ui/Button';

export const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  // Generate confetti pieces
  const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    rotation: Math.random() * 720,
    color: ['#E8A020', '#FFD060', '#F5EDD8', '#2B4020'][Math.floor(Math.random() * 4)],
  }));

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-dark-mid overflow-hidden">
      <HoneycombBg opacity={0.05} />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Confetti */}
        <AnimatePresence>
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiPieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute left-1/2 top-1/2 w-3 h-3 rounded-sm"
                  style={{ backgroundColor: piece.color }}
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  animate={{ 
                    x: piece.x, 
                    y: -150, 
                    rotate: piece.rotation,
                    opacity: 0 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-4">
            Join The Hive
          </h2>
          <p className="text-text-dim text-lg mb-8">
            Get 10% off your first order + clean energy tips.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 bg-dark-card border border-honey/20 rounded-full text-text-warm placeholder:text-text-dim focus:border-honey focus:outline-none transition-colors"
                />
                <Button type="submit" variant="primary">
                  Get My Discount
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-honey text-xl font-display mb-6"
              >
                🍯 Welcome to the hive!
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-text-dim text-sm mb-8">
            No spam. No synthetic content. Unsubscribe anytime.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-card border border-honey/20 flex items-center justify-center text-text-dim hover:text-honey hover:border-honey transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-card border border-honey/20 flex items-center justify-center text-text-dim hover:text-honey hover:border-honey transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-card border border-honey/20 flex items-center justify-center text-text-dim hover:text-honey hover:border-honey transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
