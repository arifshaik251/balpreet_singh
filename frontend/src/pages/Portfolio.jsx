import Nav from "@/components/site/Nav";
import ScrollProgress from "@/components/site/ScrollProgress";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Consulting from "@/components/site/Consulting";
import Dishes from "@/components/site/Dishes";
import Projects from "@/components/site/Projects";
import Awards from "@/components/site/Awards";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Portfolio() {
  return (
    <main data-testid="portfolio-page" className="bg-[#0A0908] text-[#E6E2DD]">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Consulting />
      <Dishes />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
