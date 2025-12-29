import React from 'react';
import { products } from "@/lib/data";
import ProductCard from '@/components/shared/productCard/ProductCard';
const HomePage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
        </div>
    );
};

export default HomePage;