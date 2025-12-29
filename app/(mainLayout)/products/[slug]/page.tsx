// import ProductDetails from "@/components/product/ProductDetails";
import { products } from "@/lib/data";
import ProductDetails from "@/pages/product/ProductDetails";
import { notFound } from "next/navigation";

// Async page to unwrap params
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // unwrap params
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return <ProductDetails product={product} />;
};

export default page;
