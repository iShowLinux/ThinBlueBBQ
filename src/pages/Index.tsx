import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Competitions from "@/components/Competitions";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Competitions />
      <Instagram />
      <Contact />
      <Footer />
      <CallButton />
    </div>
  );
};

export default Index;
