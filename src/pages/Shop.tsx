import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Shop = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-16">
      <ProductsSection />
    </div>
    <Footer />
  </div>
);

export default Shop;
