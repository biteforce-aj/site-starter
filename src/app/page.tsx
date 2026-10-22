import { CTABand, FeatureGrid, Footer, Hero, Navbar } from "@/components/sections";

// Temporary preview of the sections built so far — replaced by the full section-based home in Phase 6.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <FeatureGrid />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
