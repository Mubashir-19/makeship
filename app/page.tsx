import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
