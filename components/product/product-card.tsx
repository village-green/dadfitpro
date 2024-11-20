import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import type { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        
        <p className="text-xl font-bold mb-4">${product.price}</p>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">
            {product.specifications.Weight}
          </p>
        </div>

        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`} className="flex items-center justify-center">
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}