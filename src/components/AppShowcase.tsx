import { useEffect, useRef, useState } from "react";
import { Apple, Zap, LucideIcon } from "lucide-react";

interface AppShowcaseProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  gifSrc: string;
  features: { icon: LucideIcon; title: string; desc: string }[];
  reversed?: boolean;
  accentColor?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

const AppShowcase = ({
  label,
  title,
  titleAccent,
  description,
  gifSrc,
  features,
  reversed = false,
  accentColor = "hsl(214 100% 55%)",
  appStoreUrl = "https://apps.apple.com",
  playStoreUrl = "https://play.google.com",
}: AppShowcaseProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at ${reversed ? "30%" : "70%"} 60%, ${accentColor.replace(")", " / 0.08)")}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className={`flex justify-center mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">{label}</span>
          </div>
        </div>

        {/* Title */}
        <div className={`text-center mb-14 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="font-display leading-[0.95] tracking-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-foreground">{title}</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-gradient-blue mt-1">{titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-5 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video showcase — 16:9 landscape */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/40 shadow-[0_30px_80px_-20px_hsl(214_100%_55%/0.2)]">
            <div style={{ aspectRatio: "16/9" }} className="relative">
              <img
                src={gifSrc}
                alt={`${titleAccent} App Preview`}
                className="w-full h-full object-cover"
              />
              {/* Bottom gradient to mask Veo watermark */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 z-10"
                style={{
                  background: "linear-gradient(to top, hsl(var(--background)) 30%, transparent 100%)",
                }}
              />
              {/* Top subtle vignette */}
              <div
                className="absolute top-0 left-0 right-0 h-16 z-10"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--background) / 0.3) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group card-glass-bright rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row justify-center gap-3 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            <Apple className="w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] font-normal opacity-70 leading-none">Download on the</p>
              <p className="text-sm font-bold leading-tight">App Store</p>
            </div>
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all pulse-blue"
          >
            <Zap className="w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] font-normal opacity-80 leading-none">Get it on</p>
              <p className="text-sm font-bold leading-tight">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
