"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/types/product";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

type SortOption = {
  label: string;
  value: string;
  sortFn: (a: any, b: any) => number;
};

const sortOptions: SortOption[] = [
  {
    label: "Price: Low to High",
    value: "price-asc",
    sortFn: (a, b) => a.price - b.price
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
    sortFn: (a, b) => b.price - a.price
  },
  {
    label: "Rating: High to Low",
    value: "rating-desc",
    sortFn: (a, b) => b.rating - a.rating
  },
  {
    label: "Rating: Low to High",
    value: "rating-asc",
    sortFn: (a, b) => a.rating - b.rating
  },
  {
    label: "Weight: High to Low",
    value: "weight-desc",
    sortFn: (a, b) => {
      const getMaxWeight = (spec: string) => {
        const match = spec.match(/up to (\d+)/i) || spec.match(/(\d+)\s*lbs/i);
        return match ? parseInt(match[1]) : 0;
      };
      return getMaxWeight(b.specifications.Weight) - getMaxWeight(a.specifications.Weight);
    }
  },
  {
    label: "Weight: Low to High",
    value: "weight-asc",
    sortFn: (a, b) => {
      const getMaxWeight = (spec: string) => {
        const match = spec.match(/up to (\d+)/i) || spec.match(/(\d+)\s*lbs/i);
        return match ? parseInt(match[1]) : 0;
      };
      return getMaxWeight(a.specifications.Weight) - getMaxWeight(b.specifications.Weight);
    }
  }
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState<string>("rating-desc");

  const sortedProducts = [...products].sort(
    sortOptions.find(option => option.value === sortBy)?.sortFn || (() => 0)
  );

  return (
    <div className="min-h-screen bg-muted pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Adjustable Dumbbells</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect adjustable dumbbells for your home gym.
            </p>
          </div>

          <div className="flex items-center gap-2 min-w-[240px]">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}