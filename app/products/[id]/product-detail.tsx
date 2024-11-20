"use client";

import type { Product } from "@/types/product";
import { ProductHero } from "./components/product-hero";
import { ProductDetails } from "./components/product-details";

export function ProductDetail({ product }: { product: Product }) {
  if (!product) {
    return (
      <div className="min-h-screen bg-muted pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ProductHero product={product} />
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}