import ProductCard from "@/components/ProductCard";
import { Products } from "@/lib/Utils/mock";
import { Product } from "@/lib/Utils/types";

export const getFilteredProducts = (category: string) => {
  return Products.filter((p: Product) => p.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const filteredProduct = getFilteredProducts(params.slug);
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
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product, index) => {
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
          })
        ) : (
          <p>Sorry! no products found</p>
        )}
      </div>
    </div>
  );
}
