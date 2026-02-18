import { Zap, Instagram, Facebook, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Banner */}
      <div className="relative overflow-hidden py-16" style={{ background: "linear-gradient(135deg, hsl(220 18% 10%) 0%, hsl(214 60% 12%) 100%)" }}>
        {/* Decorative */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Limited Time</p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-3">
            READY TO <span className="text-gradient-blue">LEVEL UP?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join 50,000+ athletes who train smarter with Fitnex gear.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-xl shadow-primary/30 pulse-blue"
          >
            Shop Now — Free Shipping
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display text-sm font-bold">FX</span>
              </div>
              <span className="font-display text-xl tracking-tight">FITNEX</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium fitness gear engineered for athletes who refuse to settle.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">Shop</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["All Products", "Cycling Gear", "Apparel", "Equipment", "Accessories", "Sale"].map((l) => (
                <li key={l}>
                  <a href="#shop" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["FAQ", "Shipping Info", "Returns", "Size Guide", "Contact Us", "Track Order"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Get exclusive deals & fitness tips.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-muted border border-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-3.5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2025 Fitnex. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
