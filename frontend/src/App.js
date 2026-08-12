import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1 }}>
      <div className="relative bg-obsidian font-body text-white antialiased">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: NOISE }}
        />
        <Navbar />
        <main>
          <Hero />
          <MarqueeStrip />
          <About />
          <Experience />
          <Certifications />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </div>
    </ReactLenis>
  );
}

export default App;
