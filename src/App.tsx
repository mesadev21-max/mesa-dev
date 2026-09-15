import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Showcase from "@/components/Showcase";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, Button } from "@/components/ui";
import { useScrollY } from "@/lib/hooks";
import { cn } from "@/utils/cn";

/** Slide-in conversion bar for small screens. */
function MobileCTA() {
  const y = useScrollY();
  const show = y > 760;
  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-out sm:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <div className="glass-dark flex items-center justify-between gap-3 rounded-full py-2 pr-2 pl-4 shadow-lift">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-bold tracking-[-0.01em] text-white">
            Free site audit + mockup
          </p>
          <p className="truncate text-[11px] text-white/50">No cost · reply in 24h</p>
        </div>
        <Button href="#contact" size="md" className="shrink-0">
          Start
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory">
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
