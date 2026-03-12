import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-honey focus:ring-offset-2 focus:ring-offset-deep';
  
  const variants = {
    primary: 'bg-honey text-deep hover:bg-honey-light hover:scale-105 hover:shadow-honey',
    secondary: 'bg-transparent border-2 border-honey text-honey hover:bg-honey hover:text-deep',
    ghost: 'bg-transparent text-text-warm hover:text-honey',
    dark: 'bg-dark-card text-text-warm border border-honey/20 hover:border-honey hover:text-honey',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};
