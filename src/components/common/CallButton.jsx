import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "919205545850";

  return (
    <a
      href={`tel:+${phoneNumber}`}
      aria-label="Call us now"
      className="
        fixed
        bottom-24
        right-5
        z-50
        w-14
        h-14
        sm:w-16
        sm:h-16
        rounded-full
        bg-[#ff6634]
        hover:bg-[#E85B3C]
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <Phone
        size={24}
        strokeWidth={2.3}
      />
    </a>
  );
}