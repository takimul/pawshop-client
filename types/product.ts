export type Product = {
  id: string;
  name: string;
  slug: string;

  description: string;

  price: number;
  discountPrice?: number;

  category: string;
  subCategory?: string;

  image: string;
  images?: string[];

  stock: number;
  rating: number;

  brand?: string;
  tags?: string[];
  discount?: number;

  createdAt?: string;
  updatedAt?: string;
};
