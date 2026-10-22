import {
  ContactForm,
  CTABand,
  FAQ,
  FeatureGrid,
  Footer,
  Gallery,
  Hero,
  LogoStrip,
  Navbar,
  StatsRow,
  Testimonials,
  WhatsAppButton,
} from "@/components/sections";

// Temporary preview of the sections built so far — replaced by the full section-based home in Phase 6.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <LogoStrip />
        <FeatureGrid />
        <StatsRow />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
