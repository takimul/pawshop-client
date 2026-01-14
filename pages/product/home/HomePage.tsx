"use client";

import React from 'react';
import { products } from "@/lib/data";
import ProductCard from '@/components/productCard/ProductCard';
import { useColorClasses } from '@/lib/styles';
import HomeBanner from './HomeBanner';


const HomePage = () => {
  const { bgMain, textMain } = useColorClasses();
    return (
      <div className={`${bgMain} ${textMain} `}>
         <HomeBanner />
        <div className={` flex min-h-screen items-center  justify-center font-sans `}>
         
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mt-6 gap-6">
                    {products.slice(0, 10).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
        </div>
      </div>
    );
};

export default HomePage;