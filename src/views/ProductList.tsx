import React from "react";

import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import { Products } from "@/lib/Utils/mock";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const productSlice = Products.slice(0, 3);
  return (
    <div className="flex flex-col w-full mt-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <h4 className="scroll-m-20 text-sm ml-1 text-blue-600 mt-4 mb-2 font-semibold tracking-tight">
          PRODUCTS
        </h4>
        <h2 className="scroll-m-20 ml-1 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check What We Have
        </h2>
      </div>
      <div className="flex justify-evenly mt-16">
        {productSlice.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
