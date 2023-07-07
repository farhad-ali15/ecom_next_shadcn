import { client } from "@/lib/Utils/sanityClient";

export const getProductData = async () => {
  const data = await client.fetch(`*[_type=="product"]`);
  return data;
};
export const getProductImageData = async () => {
  const product = await client.fetch(`*[_type=="product"][0]{image}`);
  return product;
};
