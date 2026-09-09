
export default function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle, 
  align = "center", 
  light = false, 
  className = "", 
}) { 
  const isCenter = align === "center"; 
  const alignClass = isCenter 
    ? "text-center items-center" 
    : "text-left items-start"; 
 
  return ( 
    <div className={`flex flex-col ${alignClass} ${className}`}> 
      {eyebrow && ( 
        <span 
          className={`font-script text-xl sm:text-2xl leading-none mb-1.5 ${ 
            light ? "text-white/90" : "text-[#ff6634]" 
          }`} 
        > 
          {eyebrow} 
        </span> 
      )} 
 
      <h2 
        className={`font-display font-semibold text-[26px] xs:text-[30px] sm:text-[36px] leading-[1.15] tracking-tight ${ 
          light ? "text-white" : "text-[#3e4095]" 
        }`} 
      > 
        {title} 
      </h2> 
 
      {/* accent underline */} 
      <span 
        className={`mt-3.5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#00a85a] to-[#ff6634] ${ 
          isCenter ? "mx-auto" : "" 
        }`} 
      /> 
 
      {subtitle && ( 
        <p 
          className={`mt-4 text-[14.5px] sm:text-[16px] leading-relaxed max-w-xl ${ 
            isCenter ? "mx-auto" : "" 
          } ${light ? "text-white/70" : "text-[#64748B]"}`} 
        > 
          {subtitle} 
        </p> 
      )} 
    </div> 
  ); 
}

