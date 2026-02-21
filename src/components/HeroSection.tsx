import { useState, useEffect } from "react";
import { ChevronDown, Star, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fitnexHero from "@/assets/fitnex-hero.gif";
import ShaderBackground from "@/components/ShaderBackground";

const stats = [
  { value: "50K+", label: "Happy Athletes" },
  { value: "25+", label: "Products" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "Free", label: "Shipping" },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Shader Background */}
      <div className="absolute inset-0">
        <ShaderBackground />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Premium Fitness Gear
              </span>
            </div>


            <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
              Elite fitness gear engineered for athletes who refuse to settle.
              From cycling to CrossFit — we've got you covered.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link
                to="/shop"
                className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base tracking-wide hover:opacity-95 transition-all duration-200 pulse-blue"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/categories"
                className="flex items-center justify-center border border-border/60 text-foreground/80 px-8 py-4 rounded-lg font-medium text-base hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                Browse Categories
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background"
                    style={{ background: `linear-gradient(135deg, ${c}, white)` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  Trusted by <span className="text-foreground font-semibold">50,000+</span> athletes
                </span>
              </div>
            </div>
          </div>

          {/* GIF / Hero Visual */}
          <div
            className={`flex-1 flex justify-center w-full transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-2xl">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-primary/15 rounded-3xl blur-3xl" />

              {/* GIF Container — larger, watermark cropped from bottom */}
              <div
                className="relative rounded-2xl overflow-hidden border border-primary/25 shadow-2xl glow-blue"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={fitnexHero}
                  alt="Fitnex – Premium Fitness Gear in Action"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center top",
                    transform: "scale(1.08)",
                    transformOrigin: "center top",
                  }}
                />
                {/* Bottom gradient mask to cover watermark */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(220 20% 5%) 30%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating badge — orders */}
              <div className="absolute -bottom-5 -left-5 card-glass-bright rounded-2xl p-3.5 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/15 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground font-medium">This week</p>
                  <p className="text-sm font-bold text-foreground">+2,400 orders</p>
                </div>
              </div>

              {/* Floating badge — shipping */}
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-4 py-2.5 shadow-2xl flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-semibold">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass-bright rounded-xl p-5 text-center group hover:border-primary/40 transition-all duration-300"
            >
              <p className="font-display text-3xl text-gradient-blue">{stat.value}</p>
              <p className="text-muted-foreground text-xs font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-muted-foreground text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
