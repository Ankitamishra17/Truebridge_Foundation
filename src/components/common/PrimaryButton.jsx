import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  coral: 'bg-[#FF6B4A] text-white hover:bg-[#F0572F]',
  navy: 'bg-[#063B5C] text-white hover:bg-[#052E48]',
  teal: 'bg-[#0F8B8D] text-white hover:bg-[#0C7375]',
  outline: 'bg-transparent border-2 border-[#0F8B8D] text-[#0F8B8D] hover:bg-[#EAF8F7]',
  'outline-light': 'bg-transparent border-2 border-white/70 text-white hover:bg-white/10',
}

export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'coral',
  icon,
  showArrow = false,
  className = '',
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-body font-semibold text-[15px] transition-colors whitespace-nowrap ${variants[variant]} ${className}`

  const content = (
    <>
      {icon}
      {children}
      {showArrow && <ArrowRight size={16} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
