import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer")

      if (!footer) return

      const footerRect = footer.getBoundingClientRect()

      // Button tab show hoga jab Footer viewport me enter karega
      setVisible(footerRect.top <= window.innerHeight)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed
        bottom-6
        left-5
        z-[9999]
        w-11
        h-11
        rounded-full
        bg-white
        text-[#3e4095]
        flex
        items-center
        justify-center
        shadow-lg
        hover:bg-[#00a85a]
        transition-all
        duration-200
      "
    >
      <ChevronUp size={20} />
    </button>
  )
}