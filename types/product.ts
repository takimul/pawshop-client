export type Product = {
  id: string;
  name: string;
  slug: string;

  description: string;

  price: number;
  discountPrice?: number;

  category: "cat" | "dog" | "bird" | "fish" | "other";
  subCategory?: string;

  image: string;
  images?: string[];

  stock: number;
  rating?: number;

  brand?: string;

  createdAt?: string;
  updatedAt?: string;
};
