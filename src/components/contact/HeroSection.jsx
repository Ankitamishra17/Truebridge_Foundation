import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact_banner.png')",
        }}
        aria-hidden="true"
      />

      {/* White Gradient Overlay - Left to Right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.05) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <a
                href="/"
                className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
              >
                Home
              </a>

              <span className="text-[#94A3B8]">/</span>

              <span className="font-medium text-[#0F8B8D]">Contact Us</span>
            </div>

            <h1
              className="
                mt-3
                font-display
                text-[38px]
                sm:text-[54px]
                leading-[1.08]
                font-semibold
                max-w-2xl
                text-[#032D46]
              "
            >
              We'd love to hear from you.
            </h1>

            <p className="mt-5 text-[17px] leading-relaxed text-[#032D46]/75 max-w-lg">
              Whether you want to volunteer, partner on a camp, or just ask a
              question — reach out and someone from our team will get back to
              you.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              mt-12
              flex
              flex-wrap
              gap-x-10
              gap-y-6
              border-t
              border-[#032D46]/10
              pt-8
            "
          >
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#0F8B8D]/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <Phone size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[13px] text-[#032D46]/60">Call us</p>

                <p className="text-[15px] font-semibold text-[#032D46]">
                  +91 00000 00000
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#0F8B8D]/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <Mail size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[13px] text-[#032D46]/60">Email us</p>

                <p className="text-[15px] font-semibold text-[#032D46]">
                  hello@truebridge.org
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#0F8B8D]/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <MapPin size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[13px] text-[#032D46]/60">Find us</p>

                <p className="text-[15px] font-semibold text-[#032D46]">
                  Shahdara, New Delhi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
