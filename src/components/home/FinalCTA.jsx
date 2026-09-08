import Container from "../common/Container.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#063B5C] bg-cover bg-center min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center"
      style={{ backgroundImage: `url(/cta_bg.png)` }}
    >
      {/* Overlay so white text stays readable regardless of image brightness or screen size */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-r from-[#063B5C]/95 via-[#063B5C]/80 to-[#063B5C]/40 sm:to-[#063B5C]/30"
        aria-hidden="true"
      /> */}

      <Container className="py-12 sm:py-16 md:py-20 relative">
        <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[280px] xs:max-w-sm sm:max-w-md lg:max-w-lg">
          <h2 className="font-display font-semibold text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight">
            Together We Can Create Healthier Communities
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/75 leading-relaxed">
            Your support can bring healthcare, education and hope to communities
            that need it most.
          </p>
          <PrimaryButton to="/contact" variant="coral" showArrow>
            Donate Now
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
