export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
  titleColor = 'text-slate-900',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-rose-50 text-rose-900 border border-rose-200/80 mb-3 shadow-xs">
          {badge}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${titleColor} mb-4 leading-tight`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
