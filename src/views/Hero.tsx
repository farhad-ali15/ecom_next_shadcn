import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import hero_img from "/public/hero_img.webp";
import Image from "next/image";

import { client } from "@/lib/Utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { getProductImageData } from "@/lib/Utils/utility";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const heroImage = await getProductImageData();

const Hero = () => {
  return (
    <section className="flex flex-col gap-y-10 py-6 lg:flex-row lg:py-5 justify-between items-center px-2">
      {/*left div */}
      <div className="space-y-6 max-w-lg">
        <Badge>70% Sale</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-xl font-medium leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black h-12 px-4 mt-5 gap-x-2">
          <ShoppingCart className="" />
          Start Shopping
        </Button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
              }
              alt="bazaar"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
              }
              alt="baztel"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
              }
              alt="versase"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"
              }
              alt="in style"
            />
          </div>
        </div>
      </div>
      {/*right div */}
      <div className="flex  bg-orange-200 rounded-full">
        <Image
          src={urlFor(heroImage.image).url()}
          alt="heroImage"
          width={500}
          height={500}
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
