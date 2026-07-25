import { motion } from 'framer-motion';

export const Card = ({
  image,
  title,
  subtitle,
  description,
  badge,
  children,
  className = '',
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${className}`}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-rose-950/90 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-md border border-rose-800/40">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {subtitle && (
          <span className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-1">
            {subtitle}
          </span>
        )}
        {title && (
          <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
