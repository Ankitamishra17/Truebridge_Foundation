export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-script text-2xl sm:text-3xl text-[#FF6B4A] mb-1 leading-none">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-semibold text-[28px] sm:text-[36px] leading-tight ${
          light ? 'text-white' : 'text-[#063B5C]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[15px] sm:text-[16px] max-w-xl ${
            light ? 'text-white/70' : 'text-[#64748B]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
