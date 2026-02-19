import Navbar from "@/components/Navbar";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Categories = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-16">
      <CategoriesSection />
    </div>
    <Footer />
  </div>
);

export default Categories;
