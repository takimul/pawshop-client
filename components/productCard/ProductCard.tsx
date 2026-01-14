import Link from "next/link";
import { Product } from "@/types/product";
import { useColorClasses } from "@/lib/styles";

export default function ProductCard({ product }: { product: Product }) {
  const { bgCard, borderMain,textPrice, textMain, textSecondary } = useColorClasses();
  return (
    <Link href={`/products/${encodeURIComponent(product.name)}`}>
      <div className={`${bgCard} border ${borderMain} rounded-xl p-4 hover:shadow-lg transition`}>
        <img src={product.image} className="h-40 mx-auto" />
        <h3 className={`mt-3 font-semibold ${textMain}`}>{product.name}</h3>
        <p className={`text-sm ${textSecondary}`}>{product.category}</p>
        <p className={`font-bold mt-2 ${textPrice}`}>৳{product.price}</p>
      </div>
    </Link>
  );
}
