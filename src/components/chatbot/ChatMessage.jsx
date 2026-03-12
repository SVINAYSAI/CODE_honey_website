import { motion } from 'framer-motion';

export const ChatMessage = ({ role, text, timestamp }) => {
  const isBot = role === 'bot';
  
  // Format text with line breaks
  const formattedText = text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <motion.div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial={{ opacity: 0, y: isBot ? 10 : 0, x: isBot ? -10 : 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isBot
            ? 'bg-dark-card text-text-warm border-l-4 border-honey rounded-tl-sm'
            : 'bg-honey text-deep rounded-tr-sm'
        }`}
      >
        <p className="text-sm leading-relaxed">{formattedText}</p>
        <span className={`text-xs mt-1 block ${isBot ? 'text-text-dim' : 'text-deep/60'}`}>
          {timestamp}
        </span>
      </div>
    </motion.div>
  );
};
