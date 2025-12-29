// import ProductDetails from "@/components/product/ProductDetails";
import { products } from "@/lib/data";
import ProductDetails from "@/pages/product/ProductDetails";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;

  // Case-insensitive matching and decode URI component
  const decodedName = decodeURIComponent(name);
  const product = products.find(
    (p) => p.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!product) notFound();

  return <ProductDetails product={product} />;
};

export default page;
