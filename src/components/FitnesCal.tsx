import { useState, useEffect, useRef } from "react";
import { Apple, Smartphone, Star, ChevronRight, Zap, BarChart3, Target, Heart } from "lucide-react";
import fitnescalGif from "@/assets/fitnescal-app.gif";

const features = [
  {
    icon: BarChart3,
    title: "Smart Macro Tracking",
    desc: "Auto-calculate calories, protein, carbs & fat with AI-powered food recognition.",
  },
  {
    icon: Target,
    title: "Body Visualizer",
    desc: "See your body transformation in real-time as you hit your nutrition goals.",
  },
  {
    icon: Zap,
    title: "Instant Barcode Scan",
    desc: "Scan any food label and log it in under 2 seconds. 5M+ foods in database.",
  },
  {
    icon: Heart,
    title: "100% Free",
    desc: "Full premium features, zero paywalls. Your fitness journey, fully unlocked.",
  },
];

const FitnesCal = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fitnescal"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(214 100% 55% / 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 100% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 100% 55%) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div
          className={`flex justify-center mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2">
            <Smartphone className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Free App — Now Available
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display leading-[0.9] tracking-tight">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
              MEET
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gradient-blue">
              FITNESCAL
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mt-6 font-light leading-relaxed">
            The calorie counter app that actually works — built for athletes,
            designed for results. Track smarter, eat better, perform harder.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Phone Mockup */}
          <div
            className={`flex-1 flex justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute -inset-12 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -inset-6 rounded-full bg-primary/8 blur-2xl" />

              {/* Phone frame */}
              <div className="relative w-[260px] sm:w-[300px]">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-background rounded-full z-20" />

                {/* Screen container */}
                <div
                  className="relative rounded-[40px] overflow-hidden border-4 border-white/10 shadow-[0_40px_80px_-20px_hsl(214_100%_55%/0.4),0_0_0_1px_hsl(214_100%_55%/0.15)]"
                  style={{ aspectRatio: "9/19" }}
                >
                  <img
                    src={fitnescalGif}
                    alt="FitnesCal App — Calorie Counter"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center top",
                      transform: "scale(1.05)",
                      transformOrigin: "center top",
                    }}
                  />
                  {/* Bottom gradient to crop Veo watermark */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 z-10"
                    style={{
                      background: "linear-gradient(to top, hsl(220 20% 5%) 40%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Side button accents */}
                <div className="absolute right-[-6px] top-20 w-1.5 h-10 bg-white/10 rounded-full" />
                <div className="absolute left-[-6px] top-16 w-1.5 h-8 bg-white/10 rounded-full" />
                <div className="absolute left-[-6px] top-28 w-1.5 h-8 bg-white/10 rounded-full" />

                {/* Floating badges */}
                <div className="absolute -right-8 top-12 card-glass-bright rounded-2xl px-3 py-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-foreground">4.9</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">12k+ reviews</p>
                </div>

                <div className="absolute -left-10 bottom-24 card-glass-bright rounded-2xl px-3 py-2.5 shadow-xl">
                  <p className="text-[10px] text-muted-foreground">Today's goal</p>
                  <p className="text-sm font-bold text-foreground">2,450 kcal</p>
                  <div className="mt-1.5 h-1 bg-border rounded-full overflow-hidden w-20">
                    <div className="h-full bg-primary rounded-full" style={{ width: "68%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div
            className={`flex-1 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="group card-glass-bright rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-base mb-1.5">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
              >
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] font-normal opacity-70 leading-none">Download on the</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 pulse-blue"
              >
                <Zap className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] font-normal opacity-80 leading-none">Get it on</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </a>
            </div>

            <p className="text-muted-foreground text-xs mt-4 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" style={{ filter: "hue-rotate(100deg)" }} />
              Free forever · No subscription · No hidden costs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnesCal;
