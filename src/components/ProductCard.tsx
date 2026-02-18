import { useState } from "react";
import { ShoppingCart, Star, Eye } from "lucide-react";
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
    <div className="group card-glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted/50 aspect-square">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm p-4 text-center font-medium">
            {product.title}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest uppercase shadow-lg shadow-primary/30">
              {product.badge}
            </span>
          )}
          <span className="bg-background/80 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-md border border-primary/20">
            -{discount}%
          </span>
        </div>

        {/* Quick View overlay */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
          <button
            onClick={() => onQuickView(product)}
            className="bg-primary text-primary-foreground text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Category tag */}
        <span className="inline-block text-primary text-[10px] font-semibold uppercase tracking-widest mb-2">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-foreground font-semibold text-sm leading-snug mb-2.5 line-clamp-2">
          {product.title}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-primary fill-primary" />
            ))}
          </div>
          <span className="text-muted-foreground text-xs">(128)</span>
        </div>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1 mb-3 flex-wrap">
            {product.colors.slice(0, 5).map((color) => (
              <span
                key={color}
                className="text-[10px] text-muted-foreground border border-border rounded-md px-2 py-0.5 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              >
                {color}
              </span>
            ))}
            {product.colors.length > 5 && (
              <span className="text-[10px] text-muted-foreground font-medium">
                +{product.colors.length - 5} more
              </span>
            )}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-1">
          <div>
            <span className="text-primary font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-muted-foreground text-xs line-through ml-1.5">
              ${product.comparePrice.toFixed(2)}
            </span>
          </div>
          <button className="bg-primary text-primary-foreground rounded-xl p-2.5 hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
