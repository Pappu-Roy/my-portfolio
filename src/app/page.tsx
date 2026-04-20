import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Coding from "@/components/Coding";
import Projects from "@/components/Projects";
import ExtraCurricular from "@/components/ExtraCurricular";
import Blog from "@/components/Blog"; 
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Education />
      <Coding />
      <Experience />
      <Projects />
      <ExtraCurricular />
      <Blog /> 
      <Contact />
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          © 2026 Pappu Roy. All Rights Reserved!
        </p>
      </footer>
    </main>
  );
}