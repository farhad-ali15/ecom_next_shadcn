import { StaticImageData } from "next/image";

export interface IProduct {
  title: string;
  description: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string | StaticImageData;
};

export type Prom = {
  image: string | StaticImageData;
};
