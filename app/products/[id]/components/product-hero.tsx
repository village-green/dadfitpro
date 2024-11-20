"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function ProductHero({ product }: { product: Product }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors rounded-lg" />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="ml-1 font-medium text-sm">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {product.reviews} reviews
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>

        <Button size="lg" className="w-full text-lg h-12">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}