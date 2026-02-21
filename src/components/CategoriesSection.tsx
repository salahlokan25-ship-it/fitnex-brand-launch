import { Link } from "react-router-dom";
import imgStrength from "@/assets/categories/strength.jpg";
import imgCardio from "@/assets/categories/cardio.jpg";
import imgRecovery from "@/assets/categories/recovery.jpg";
import imgApparel from "@/assets/categories/apparel.jpg";
import imgAccessories from "@/assets/categories/accessories.jpg";
import imgSale from "@/assets/categories/sale.jpg";

const categories = [
  { name: "Strength", image: imgStrength },
  { name: "Cardio", image: imgCardio },
  { name: "Recovery", image: imgRecovery },
  { name: "Apparel", image: imgApparel },
  { name: "Accessories", image: imgAccessories },
  { name: "Sale", image: imgSale },
];

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-foreground leading-[0.95]">
            TRAIN <span className="text-gradient-blue">HARDER.</span>
            <br />
            EXPLORE GEAR.
          </h1>
          <p className="text-muted-foreground text-lg mt-6 max-w-lg mx-auto">
            Premium equipment and apparel engineered for your best performance.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="group relative rounded-xl border border-border overflow-hidden bg-card hover:border-primary/60 transition-all duration-300"
            >
              {/* Title */}
              <h2 className="font-display text-3xl sm:text-4xl text-foreground px-6 pt-5 pb-2">
                {cat.name.toUpperCase()}
              </h2>

              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Bottom gradient for readability */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* CTA */}
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg group-hover:bg-primary/90 transition-colors">
                  Explore {cat.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
