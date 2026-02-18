import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-primary/30 rounded-lg blur-sm group-hover:bg-primary/50 transition-colors" />
              <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display text-sm font-bold tracking-tight">FX</span>
              </div>
            </div>
            <span className="font-display text-xl tracking-tight text-foreground">
              FITNEX
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#shop"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center mt-2"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
