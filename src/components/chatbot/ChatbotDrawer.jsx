import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Send } from 'lucide-react';
import { botConfig, quickReplies } from '../../data/chatbotData';
import { getBotResponse } from './chatbotEngine';
import { ChatMessage } from './ChatMessage';
import { QuickReplies } from './QuickReplies';

export const ChatbotDrawer = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);

  // Add greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          text: botConfig.greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMessage = {
        role: 'bot',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-4 md:right-6 w-[calc(100%-2rem)] md:w-[380px] h-[520px] bg-dark-card rounded-2xl shadow-2xl border border-honey/20 z-50 overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-honey/10 bg-dark-mid">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-honey flex items-center justify-center text-xl">
                {botConfig.avatar}
              </div>
              <div>
                <h4 className="font-display font-semibold text-text-warm">{botConfig.name}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-text-dim">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onClose}
                className="p-2 text-text-dim hover:text-text-warm transition-colors"
                aria-label="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-text-dim hover:text-text-warm transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                text={message.text}
                timestamp={message.timestamp}
              />
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                className="flex justify-start mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-dark-card rounded-2xl px-4 py-3 border-l-4 border-honey rounded-tl-sm">
                  <div className="flex items-center gap-2 text-sm text-text-dim">
                    <span>HIVE is thinking</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ...
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Quick Replies */}
            {showQuickReplies && !isTyping && (
              <QuickReplies
                replies={quickReplies}
                onSelect={(reply) => handleSend(reply)}
              />
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-honey/10 bg-dark-mid">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 bg-dark-card border border-honey/20 rounded-full text-text-warm text-sm placeholder:text-text-dim focus:border-honey focus:outline-none transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-honey flex items-center justify-center text-deep hover:bg-honey-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
