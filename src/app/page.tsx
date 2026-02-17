import { Hero } from "@/components/portfolio/hero";
import { WorkGrid } from "@/components/portfolio/work-grid";
import { About } from "@/components/portfolio/about";
import { TrustBar } from "@/components/portfolio/trust-bar";
import { FooterCTA } from "@/components/portfolio/footer-cta";
import { Navbar } from "@/components/portfolio/navbar";
import { AudioController } from "@/components/portfolio/audio-controller";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <TrustBar />
      <WorkGrid />
      <About />
      <FooterCTA />
      <AudioController />
    </main>
  );
}
