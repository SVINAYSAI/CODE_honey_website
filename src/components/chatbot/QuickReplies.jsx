import { motion } from 'framer-motion';

export const QuickReplies = ({ replies, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {replies.map((reply, index) => (
        <motion.button
          key={index}
          onClick={() => onSelect(reply)}
          className="px-3 py-1.5 bg-transparent border border-honey/40 rounded-full text-xs text-honey hover:bg-honey/10 hover:border-honey transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {reply}
        </motion.button>
      ))}
    </div>
  );
};
