import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Renders a real photo when present at `src`. Until real NGO photographs are
 * dropped into src/assets/images, this shows a soft on-brand placeholder
 * instead of a broken-image icon, so the layout still looks finished.
 */
export default function ImageWithFallback({ src, alt, className = '', rounded = 'rounded-2xl' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`${className} ${rounded} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EAF8F7] to-[#FFF0EC] border border-[#0F8B8D]/15`}
      >
        <ImageIcon size={28} className="text-[#0F8B8D]/50" />
        <span className="text-[12px] text-[#64748B] px-4 text-center">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${className} ${rounded} object-cover`}
    />
  )
}
