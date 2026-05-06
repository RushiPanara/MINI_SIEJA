import Hero from "@/components/Hero";
import About from "@/components/About";
import Workflow from "@/components/Workflow";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Workflow />
      <Showcase />
      <Footer />
    </main>
  );
}