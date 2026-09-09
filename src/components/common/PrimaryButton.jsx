
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  coral: 'bg-[#ff6634] text-white hover:bg-[#ff6634]',
  navy: 'bg-[#3e4095] text-white hover:bg-[#3e4095]',
  teal: 'bg-[#00a85a] text-white hover:bg-[#00a85a]',
  outline: 'bg-transparent border-2 border-[#00a85a] text-[#00a85a] hover:bg-[#E6F6EF]',
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

