import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Vision from "./sections/Vision";
import Workflow from "./sections/Workflow";
import Innovation from "./sections/Innovation";
import Future from "./sections/Future";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Workflow />
      <Innovation />
      <Future />
      <Contact />
      <Footer />
    </main>
  );
}