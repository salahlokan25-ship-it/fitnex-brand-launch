import { Bike, Dumbbell, Zap, ShoppingBag, Shield, Package, Activity, Footprints } from "lucide-react";

const categoryData = [
  {
    name: "Cycling",
    icon: Bike,
    count: 3,
    desc: "Jackets, caps & socks for every ride",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Apparel",
    icon: ShoppingBag,
    count: 9,
    desc: "Leggings, shirts, tanks & more",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Equipment",
    icon: Dumbbell,
    count: 4,
    desc: "Bands, boards & training gear",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "Accessories",
    icon: Package,
    count: 5,
    desc: "Straps, bags & training aids",
    color: "from-sky-500/20 to-sky-500/5",
  },
  {
    name: "Cardio",
    icon: Activity,
    count: 1,
    desc: "Jump ropes & cardio essentials",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    name: "Body Shapers",
    icon: Zap,
    count: 2,
    desc: "Core sculpting & waist trainers",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    name: "Footwear",
    icon: Footprints,
    count: 1,
    desc: "Performance running shoes",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Electronics",
    icon: Shield,
    count: 1,
    desc: "Smart training technology",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Shop by Category
          </span>
          <h2 className="font-display text-6xl sm:text-7xl text-foreground mt-2">
            FIND YOUR <span className="text-gradient-blue">GEAR</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryData.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.name}
                href={`#shop`}
                className={`group relative bg-gradient-to-br ${cat.color} border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{cat.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{cat.desc}</p>
                  </div>
                  <span className="text-primary text-sm font-semibold">
                    {cat.count} Products →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
