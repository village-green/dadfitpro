import { products } from "@/types/product";
import { ProductDetail } from "./product-detail";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  return <ProductDetail product={product} />;
}