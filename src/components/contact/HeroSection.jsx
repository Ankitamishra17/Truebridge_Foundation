import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-100px)]">
      {/* Background Image — mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact_banner_mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Background Image — desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact_banner.png')",
        }}
        aria-hidden="true"
      />

      {/* White Gradient Overlay — mobile */}
 <div
        className="sm:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.3) 78%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* White Gradient Overlay — desktop */}
      {/* <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.05) 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 min-h-[calc(100vh-100px)] flex items-center">
        <div className="w-full">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl py-12 sm:py-16"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-5 -mt-8">
              <a
                href="/"
                className="text-[#64748B] hover:text-[#0F8B8D] transition-colors"
              >
                Home
              </a>

              <span className="text-[#94A3B8]">/</span>

              <span className="font-medium text-[#0F8B8D]">Contact Us</span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-display
               text-[34px] sm:text-[40px]
                leading-[1.1]
                font-semibold
                max-w-2xl
                text-[#032D46]
              "
            >
              We'd love to hear from you.
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                text-[13px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.6]
                text-[#032D46]/75
                max-w-[190px]
                sm:max-w-md
              "
            >
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
              mt-2
              sm:mt-4
              flex
              flex-wrap
              gap-x-8
              gap-y-5
              border-t
              border-[#032D46]/10
              pt-6
              pb-8
            "
          >
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F8B8D]/10 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[12px] sm:text-[13px] text-[#032D46]/60">
                  Call us
                </p>

                <p className="text-[13px] sm:text-[15px] font-semibold text-[#032D46]">
                  +91 XXXXXXXXX
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F8B8D]/10 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[12px] sm:text-[13px] text-[#032D46]/60">
                  Email us
                </p>

                <p className="text-[13px] sm:text-[15px] font-semibold text-[#032D46]">
                  hello@truebridge.org
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F8B8D]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#0F8B8D]" />
              </span>

              <div>
                <p className="text-[12px] sm:text-[13px] text-[#032D46]/60">
                  Find us
                </p>

                <p className="text-[13px] sm:text-[15px] font-semibold text-[#032D46]">
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
