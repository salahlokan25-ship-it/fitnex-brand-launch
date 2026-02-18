import { useState } from "react";
import { ShoppingCart, Star, Eye, Tag } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [imgError, setImgError] = useState(false);
  const discount = Math.round(
    ((product.comparePrice - product.price) / product.comparePrice) * 100
  );

  return (
    <div className="group card-glass rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm p-4 text-center">
            {product.title}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
              {product.badge}
            </span>
          )}
          <span className="bg-card/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm">
            -{discount}%
          </span>
        </div>

        {/* Quick View */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
        >
          <Eye className="w-3.5 h-3.5" />
          Quick View
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Category */}
        <div className="flex items-center gap-1.5 mb-2">
          <Tag className="w-3 h-3 text-primary" />
          <span className="text-primary text-[10px] font-semibold uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-foreground font-semibold text-sm leading-tight mb-2 line-clamp-2">
          {product.title}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-primary fill-primary" />
          ))}
          <span className="text-muted-foreground text-xs ml-1">(128)</span>
        </div>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1 mb-3 flex-wrap">
            {product.colors.slice(0, 6).map((color) => (
              <span
                key={color}
                className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              >
                {color}
              </span>
            ))}
            {product.colors.length > 6 && (
              <span className="text-[10px] text-muted-foreground">
                +{product.colors.length - 6}
              </span>
            )}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-muted-foreground text-xs line-through ml-2">
              ${product.comparePrice.toFixed(2)}
            </span>
          </div>
          <button className="bg-primary text-primary-foreground rounded-sm px-3 py-2 hover:opacity-90 transition-opacity">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
