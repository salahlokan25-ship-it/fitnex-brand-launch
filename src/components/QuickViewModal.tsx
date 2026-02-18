import { useState } from "react";
import { X, Star, ShoppingCart, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { Product } from "@/data/products";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [imgIndex, setImgIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const discount = Math.round(
    ((product.comparePrice - product.price) / product.comparePrice) * 100
  );

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative card-glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-muted rounded-full p-2 hover:bg-border transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Images */}
          <div className="relative bg-muted rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden aspect-square">
            <img
              src={product.images[imgIndex] || product.image}
              alt={product.title}
              className="w-full h-full object-contain p-6"
              onError={(e) => {
                (e.target as HTMLImageElement).src = product.images[0];
              }}
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setImgIndex((i) => Math.min(product.images.length - 1, i + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1.5"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === imgIndex ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            {product.badge && (
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col gap-4">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-foreground font-bold text-xl mt-1 leading-tight">
                {product.title}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">4.9 (128 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-muted-foreground line-through text-lg">
                ${product.comparePrice.toFixed(2)}
              </span>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-sm">
                -{discount}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Color: <span className="text-muted-foreground font-normal">{selectedColor || "Select"}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs px-3 py-1.5 rounded-sm border transition-all ${
                        selectedColor === color
                          ? "border-primary text-primary bg-primary/10"
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Size: <span className="text-muted-foreground font-normal">{selectedSize || "Select"}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-xs px-3 py-1.5 rounded-sm border transition-all ${
                        selectedSize === size
                          ? "border-primary text-primary bg-primary/10"
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`mt-auto flex items-center justify-center gap-2 py-3 px-6 rounded-sm font-bold text-sm transition-all duration-300 ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              🚚 Free shipping on all orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
