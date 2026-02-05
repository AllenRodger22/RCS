
import { Hero } from "@/components/portfolio/hero";
import { WorkCarousel } from "@/components/portfolio/work-carousel";
import { About } from "@/components/portfolio/about";
import { ValueProp } from "@/components/portfolio/value-prop";
import { FooterCTA } from "@/components/portfolio/footer-cta";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Hero />
      <WorkCarousel />
      <About />
      <ValueProp />
      <FooterCTA />
    </main>
  );
}
