import { IProduct } from "@/lib/Utils/types";
import { getProductData } from "@/lib/Utils/utility";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Promo from "@/views/Promo";

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div className="m-6">
      <Hero />
      {/*promotion*/}
      <Promo />
      {/*productList*/}
      <ProductList />
    </div>
  );
}
