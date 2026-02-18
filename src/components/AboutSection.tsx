import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders worldwide. Fast & reliable delivery.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "30-day hassle-free return policy.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Premium materials tested by athletes.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Always here to help you perform better.",
  },
];

const testimonials = [
  {
    name: "Alex M.",
    role: "Marathon Runner",
    text: "The compression gear from Fitnex has completely transformed my recovery. I can train harder and feel better the next day.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "CrossFit Athlete",
    text: "Best resistance bands I've ever used. The 5-level set is perfect for progressive overload at home.",
    rating: 5,
  },
  {
    name: "Jordan T.",
    role: "Cycling Enthusiast",
    text: "The cycling jacket is absolutely worth every penny. Stayed dry through a 3-hour rain ride!",
    rating: 5,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="text-center group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{feat.title}</h4>
                <p className="text-muted-foreground text-sm">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* About Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display text-6xl text-foreground mt-2 mb-6">
              BORN FROM <span className="text-gradient-orange">PASSION</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fitnex was built by athletes, for athletes. We know what it's like to
              settle for mediocre gear that holds you back. That's why every product
              in our collection is tested, refined, and engineered for real performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From cycling jackets that conquer any weather to resistance bands that
              grow with your strength — Fitnex gear is your competitive edge.
            </p>
            <a
              href="#shop"
              className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
            >
              Shop Our Collection
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2019", label: "Founded" },
              { num: "50K+", label: "Customers" },
              { num: "25+", label: "Products" },
              { num: "4.9★", label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="card-glass rounded-xl p-6 text-center">
                <p className="font-display text-4xl text-primary">{s.num}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-10">
            <h2 className="font-display text-6xl text-foreground">
              WHAT ATHLETES <span className="text-gradient-orange">SAY</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass rounded-xl p-6">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-primary text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
