import ProductCard from "@/components/shared/productCard/ProductCard";
import { products } from "@/lib/data";

export default function ProductPage() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
