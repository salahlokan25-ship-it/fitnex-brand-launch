import Navbar from "@/components/Navbar";
import FitnesCal from "@/components/FitnesCal";
import Footer from "@/components/Footer";

const AppPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-16">
      <FitnesCal />
    </div>
    <Footer />
  </div>
);

export default AppPage;
