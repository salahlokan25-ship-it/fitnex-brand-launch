import { useState, useEffect } from "react";
import { ChevronDown, Star, TrendingUp, Shield, Zap } from "lucide-react";
import fitnexHero from "@/assets/fitnex-hero.gif";

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary" fill="currentColor" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Premium Fitness Gear
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none mb-6 tracking-wide">
              <span className="text-foreground">TRAIN</span>
              <br />
              <span className="text-gradient-orange">HARDER.</span>
              <br />
              <span className="text-foreground">PERFORM</span>
              <br />
              <span className="text-gradient-orange">BETTER.</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Elite fitness gear engineered for athletes who refuse to settle.
              From cycling to CrossFit — we've got you covered.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#shop"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold text-lg tracking-wide hover:opacity-90 transition-all duration-200 pulse-orange"
              >
                SHOP NOW
              </a>
              <a
                href="#categories"
                className="border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-200"
              >
                Browse Categories
              </a>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Trusted by 50,000+ athletes worldwide
              </span>
            </div>
          </div>

          {/* GIF / Hero Visual */}
          <div
            className={`flex-1 flex justify-center transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl glow-orange max-w-lg w-full">
                <img
                  src={fitnexHero}
                  alt="Fitnex – Premium Fitness Gear in Action"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">This week</p>
                    <p className="text-sm font-bold text-foreground">+2,400 orders</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass rounded-lg p-4 text-center"
            >
              <p className="font-display text-3xl text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
