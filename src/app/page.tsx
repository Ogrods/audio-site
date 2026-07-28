import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
