import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Navigation from "@/components/Navigation";
import Values from "@/components/Values";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Values />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}
