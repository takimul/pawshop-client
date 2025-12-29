import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${encodeURIComponent(product.name)}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg transition">
        <img src={product.image} className="h-40 mx-auto" />
        <h3 className="mt-3 font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="font-bold mt-2">৳{product.price}</p>
      </div>
    </Link>
  );
}
