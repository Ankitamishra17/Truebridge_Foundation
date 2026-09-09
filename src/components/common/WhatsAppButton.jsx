import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919205545850";

  const message = encodeURIComponent(
    "Hello Truebridge Empowerment Echo Foundation, I would like to know more about your initiatives.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        w-14
        h-14
        sm:w-16
        sm:h-16
        rounded-full
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        hover:bg-[#20BD5A]
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-[30px] sm:text-[34px]" />
    </a>
  );
}
