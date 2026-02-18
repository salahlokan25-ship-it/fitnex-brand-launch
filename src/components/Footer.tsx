import { Zap, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Banner */}
      <div className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl text-primary-foreground mb-3">
            READY TO LEVEL UP?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Join 50,000+ athletes who train smarter with Fitnex gear.
          </p>
          <a
            href="#shop"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
          >
            Shop Now — Free Shipping
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display text-2xl tracking-wider">FITNEX</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium fitness gear engineered for athletes who refuse to settle.
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["All Products", "Cycling Gear", "Apparel", "Equipment", "Accessories", "Sale"].map((l) => (
                <li key={l}>
                  <a href="#shop" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["FAQ", "Shipping Info", "Returns", "Size Guide", "Contact Us", "Track Order"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Get exclusive deals & fitness tips.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-muted border border-border rounded-sm pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded-sm text-sm font-bold hover:opacity-90 transition-opacity">
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
