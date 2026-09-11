import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  HandHeart,
  ArrowRight,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SupportOurWork() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F7F7]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-sm">

          {/* Decorative Background */}
          <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-[#3E4095]/5" />
          <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-[#00A85A]/5" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center p-6 sm:p-10 lg:p-14">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECECF9] text-[#3E4095] text-sm font-semibold mb-5 mt-24">
                <Heart size={16} fill="currentColor" />
                Support Our Work
              </div>

              {/* Heading */}
              <h2 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#3E4095] leading-tight">
                Help Us Make a
                <span className="text-[#FF6634]"> Difference</span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
                Your support helps Truebridge Empowerment Echo Foundation
                continue its work in healthcare, women empowerment, awareness
                programmes and community welfare.
              </p>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
                Every contribution, big or small, can help us reach more people
                and provide meaningful support to communities in need.
              </p>

              {/* Benefits */}
              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF8F1] flex items-center justify-center flex-shrink-0">
                    <Heart
                      size={19}
                      className="text-[#00A85A]"
                      fill="currentColor"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#3E4095]">
                      Support Community Healthcare
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Help support health camps and medical assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center flex-shrink-0">
                    <HandHeart
                      size={19}
                      className="text-[#FF6634]"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#3E4095]">
                      Empower Women
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Contribute towards awareness, guidance and empowerment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ECECF9] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck
                      size={19}
                      className="text-[#3E4095]"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#3E4095]">
                      Strengthen Social Initiatives
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Support awareness and community welfare programmes.
                    </p>
                  </div>
                </div>

              </div>

             
            </motion.div>

            {/* ================= RIGHT RECEIPT ================= */}
            <motion.div
              id="donation-receipt"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Receipt Heading */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#00A85A] font-semibold">
                    Donation Support
                  </p>

                  <h3 className="font-['Poppins'] text-xl sm:text-2xl font-semibold text-[#3E4095] mt-1">
                    Official Donation Receipt
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] flex items-center justify-center flex-shrink-0">
                  <FileText
                    size={21}
                    className="text-[#FF6634]"
                  />
                </div>
              </div>

              {/* Receipt Image */}
              <div className="bg-[#F7F7F7] rounded-2xl p-3 sm:p-4 border border-gray-200">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img
                    src="/donation-receipt.jpeg"
                    alt="Truebridge Empowerment Echo Foundation donation receipt"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  className="text-[#00A85A] mt-0.5 flex-shrink-0"
                />

                <p className="text-xs sm:text-sm text-gray-500 leading-6">
                  Donations are acknowledged through an official receipt from
                  Truebridge Empowerment Echo Foundation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}