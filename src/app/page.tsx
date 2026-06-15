import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Navigation from "@/components/layout/Navigation";
import Values from "@/components/Values";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Values />
        <Contacts />
      </main>
    </div>
  );
}
