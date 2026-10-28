import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { hasCv } from "@/lib/cv";

export default function Home() {
  const cv = hasCv();
  return (
    <>
      <Navbar hasCv={cv} />
      <main>
        <Hero /><About /><Projects /><Skills /><Education /><DevelopmentProcess /><Contact hasCv={cv} />
      </main>
      <Footer />
    </>
  );
}
