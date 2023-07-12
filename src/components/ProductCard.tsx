import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = (props: {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string | StaticImageData;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <Link href={`/products/${props.id}`}>
          <div>
            <Image
              src={props.image}
              alt={props.title}
              width={300}
              height={400}
            />
            <h3 className="font-bold text-lg mt-4">{props.title}</h3>

            <p className="font-bold text-lg">
              Category{" "}
              <span className="text-base font-normal capitalize">
                {props.category}
              </span>
            </p>
            <p className="font-bold text-lg">${props.price}</p>
          </div>
        </Link>
        <div>
          <AddToCart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
