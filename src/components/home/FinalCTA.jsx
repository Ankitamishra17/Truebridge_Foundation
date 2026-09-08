import Container from "../common/Container.jsx";
import PrimaryButton from "../common/PrimaryButton.jsx";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#063B5C] min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center -mb-20">

      {/* Background Image — Mobile */}
      <div
        className="sm:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/cta_bg_mobile.png)`,
        }}
        aria-hidden="true"
      />

      {/* Background Image — Desktop */}
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/cta_bg.png)`,
        }}
        aria-hidden="true"
      />

      <Container className="py-12 sm:py-16 md:py-20 relative z-10 ">
        <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[280px] xs:max-w-sm sm:max-w-md lg:max-w-lg">

          <h2 className="font-display font-semibold text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight">
            Together We Can Create Healthier Communities
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/75 leading-relaxed">
            Your support helps build healthier communities.
          </p>

          <PrimaryButton to="/contact" variant="coral" showArrow className="mb-14">
            Donate Now
          </PrimaryButton>

        </div>
      </Container>
    </section>
  );
}