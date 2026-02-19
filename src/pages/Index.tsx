import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import FitnesCal from "@/components/FitnesCal";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

// Legacy single-page index — now replaced by multi-page routing
const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <CategoriesSection />
    <ProductsSection />
    <FitnesCal />
    <AboutSection />
    <Footer />
  </div>
);

export default Index;
