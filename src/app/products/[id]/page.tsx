import ProductCard from "@/components/ProductCard";
import { Products } from "@/lib/Utils/mock";
import { Product } from "@/lib/Utils/types";

export const getDetailedProduct = (id: number | string) => {
  return Products.filter((p: Product) => p.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const detailedProduct = getDetailedProduct(params.id);

  return (
    <div className="flex flex-col w-full mt-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <h4 className="scroll-m-20 text-sm ml-1 text-blue-600 mt-4 mb-2 font-semibold tracking-tight">
          PRODUCT
        </h4>
        <h2 className="scroll-m-20 ml-1 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check Product Details
        </h2>
      </div>
      <div className="flex justify-evenly mt-16">
        {detailedProduct.length > 0 ? (
          detailedProduct.map((product, index) => {
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
