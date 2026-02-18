import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";
import type { Product } from "@/data/products";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = products
    .filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "discount") {
        const dA = a.comparePrice - a.price;
        const dB = b.comparePrice - b.price;
        return dB - dA;
      }
      return 0;
    });

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-up">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Our Products
        </span>
        <h2 className="font-display text-6xl sm:text-7xl text-foreground mt-2 mb-4">
          SHOP THE <span className="text-gradient-blue">COLLECTION</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Premium fitness gear for every workout. All products in stock & ready to ship.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-muted border border-border rounded-sm pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-muted border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Biggest Discount</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setShowAll(false);
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing{" "}
        <span className="text-foreground font-semibold">{displayed.length}</span> of{" "}
        <span className="text-foreground font-semibold">{filtered.length}</span> products
      </p>

      {/* Grid */}
      {displayed.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">No products found.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-primary underline text-sm"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Load More */}
      {!showAll && filtered.length > 12 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="border border-primary text-primary px-8 py-3 rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            View All {filtered.length} Products
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
