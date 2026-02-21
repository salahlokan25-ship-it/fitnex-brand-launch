import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BackgroundPaths from "@/components/BackgroundPaths";
import Footer from "@/components/Footer";

const Home = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <BackgroundPaths />
    <HeroSection />
    <Footer />
  </div>
);

export default Home;
