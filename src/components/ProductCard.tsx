import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (props: {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string | StaticImageData;
}) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div>
        <Image src={props.image} alt={props.title} width={300} height={400} />
        <h3 className="font-bold text-lg mt-4">{props.title}</h3>
        <h5 className="font-bold text-sm mt-4">Category: </h5>
        <p className="capitalize">{props.category}</p>
        <p className="font-bold text-lg">${props.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
