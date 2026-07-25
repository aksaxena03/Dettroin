import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-rose-900 hover:bg-rose-950 text-white focus:ring-rose-700 shadow-rose-900/15 hover:shadow-lg',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-slate-950 focus:ring-amber-400 font-semibold shadow-amber-500/20 hover:shadow-lg',
    crimson: 'bg-rose-950 hover:bg-black text-white focus:ring-rose-900 font-semibold shadow-rose-950/20 hover:shadow-lg',
    outline: 'border-2 border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white focus:ring-rose-700',
    dark: 'bg-slate-950 hover:bg-slate-900 text-white focus:ring-slate-950',
    ghost: 'bg-transparent text-slate-700 hover:bg-rose-50 hover:text-rose-900 shadow-none',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </motion.button>
  );
};

export default Button;
