import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-16">
      <AboutSection />
    </div>
    <Footer />
  </div>
);

export default About;
