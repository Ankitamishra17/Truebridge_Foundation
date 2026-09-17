import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  QrCode,
  User,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
} from "lucide-react";

export default function DonateModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [copied, setCopied] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Donation enquiry:", form);

    alert(
      "Thank you for your interest. Please scan the QR code to donate."
    );
  };

  const donationText =
    "I would like to support Truebridge Empowerment Echo Foundation through a donation.";

  const handleCopyDonationText = async () => {
    try {
      await navigator.clipboard.writeText(donationText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleClose = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setCopied(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl bg-white p-4 shadow-2xl sm:p-5"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close donation modal"
              className="absolute right-3 top-3 rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-[#3e4095]"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="pr-8">
              <div className="mb-1 flex items-center gap-2">
                <div className="rounded-full bg-[#fff0eb] p-2">
                  <Heart
                    size={19}
                    className="fill-[#ff6634] text-[#ff6634]"
                  />
                </div>

                <h2 className="text-xl font-bold text-[#3e4095] sm:text-2xl">
                  Support Our Causes
                </h2>
              </div>

              <p className="text-xs leading-5 text-gray-600 sm:text-sm">
                Your support helps us serve people, animals and communities
                in need.
              </p>
            </div>

            {/* QR Section */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#f7f7ff] p-3 sm:gap-5 sm:p-4">
              <div className="shrink-0 rounded-lg bg-white p-1.5 shadow-sm">
                <img
                  src="/donation.jpeg"
                  alt="Donation QR Code"
                  className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                />
              </div>

              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-1.5">
                  <QrCode size={17} className="text-[#3e4095]" />

                  <h3 className="text-base font-bold text-[#3e4095]">
                    Scan to Donate
                  </h3>
                </div>

                <p className="text-xs leading-5 text-gray-600 sm:text-sm">
                  Scan the QR code using your UPI app to support our
                  healthcare, women empowerment and animal care initiatives.
                </p>

                <button
                  type="button"
                  onClick={handleCopyDonationText}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6634] hover:underline"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy Donation Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Donor Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <h3 className="mb-3 text-base font-bold text-[#3e4095]">
                Donor Details
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Full Name */}
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#3e4095]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#3e4095]"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#3e4095]"
                  />
                </div>

                {/* Address */}
                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="City / Address"
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#3e4095]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff6634] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00a85a]"
              >
                <Heart size={17} />
                Submit Donation 
              </button>

              <p className="mt-2 text-center text-[11px] leading-4 text-gray-500">
                Donation enquiry form only. Please use the QR code to make
                your donation.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}