import Container from '../common/Container.jsx'
import PrimaryButton from '../common/PrimaryButton.jsx'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#063B5C] bg-cover bg-center min-h-[420px] sm:min-h-[460px] flex items-center"
      style={{ backgroundImage: `url(/cta_bg.png)` }}
    >
      {/* left-side scrim so the heading stays readable over the plant photo;
          fades out by mid-section so the image's own text/icons on the right stay clear */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#063B5C]/85 via-[#063B5C]/45 to-transparent" /> */}

      <Container className="py-16 sm:py-20 relative">
        <div className="flex flex-col items-start gap-5 max-w-md">
          <h2 className="font-display font-semibold text-[26px] sm:text-[32px] text-white leading-tight">
            Together We Can Create Healthier Communities
          </h2>
          <p className="text-[15px] text-white/75">
            Your support can bring healthcare, education and hope to communities that need it most.
          </p>
          <PrimaryButton to="/contact" variant="coral" showArrow>
            Donate Now
          </PrimaryButton>
        </div>
      </Container>
    </section>
  )
}