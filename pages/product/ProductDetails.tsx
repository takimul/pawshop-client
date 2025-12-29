import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  return (
    <section className="container mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} className="rounded-xl w-full" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-semibold">৳{product.price}</p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
