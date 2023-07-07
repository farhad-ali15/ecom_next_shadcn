import { Product, Prom } from "./types";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import promo1 from "/public/promo1.webp";
import promo2 from "/public/promo2.webp";
import promo3 from "/public/promo3.webp";

export const Products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    category: "female",
    image: p1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    category: "female",
    image: p2,
  },
  {
    id: 3,
    name: "Product3",
    price: 201,
    category: "kids",
    image: p3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 22,
    category: "female",
    image: p1,
  },
  {
    id: 5,
    name: "Product 5",
    price: 21,
    category: "kids",
    image: p2,
  },
  {
    id: 6,
    name: "Product 6",
    price: 211,
    category: "male",
    image: p1,
  },
  {
    id: 7,
    name: "Product 7",
    price: 55,
    category: "male",
    image: p3,
  },
];

export const Promotion: Prom[] = [
  {
    image: promo1,
  },
  {
    image: promo2,
  },
  {
    image: promo3,
  },
];
