import { motion } from 'framer-motion';

export const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '' 
}) => {
  const variants = {
    default: 'bg-honey/10 text-honey border border-honey/30',
    solid: 'bg-honey text-deep',
    outline: 'bg-transparent border border-honey text-honey',
    success: 'bg-forest/30 text-green-400 border border-forest',
    new: 'bg-honey text-deep font-accent tracking-wider',
    bestseller: 'bg-honey text-deep font-accent tracking-wider',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <motion.span
      className={`inline-flex items-center rounded-full font-body font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
};
