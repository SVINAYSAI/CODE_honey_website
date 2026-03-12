import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { ChatbotDrawer } from './ChatbotDrawer';

export const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setHasBeenOpened(true);
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && !hasBeenOpened && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 bg-dark-card border border-honey/20 rounded-lg px-3 py-2 text-sm text-text-warm shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Chat with HIVE AI
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-dark-card border-r border-b border-honey/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-honey flex items-center justify-center text-deep shadow-lg hover:shadow-honey transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        {/* Pulse Ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-honey"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        
        <MessageCircle className="w-6 h-6" />
        
        {/* Unread Badge */}
        {!hasBeenOpened && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            1
          </span>
        )}
      </motion.button>

      {/* Chat Drawer */}
      <ChatbotDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
