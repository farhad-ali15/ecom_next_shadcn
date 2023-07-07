import { Promotion } from "@/lib/Utils/mock";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Promo = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <h4 className="scroll-m-20 text-sm ml-1 text-blue-600 mt-4 mb-2 font-semibold tracking-tight">
            PROMOTIONS
          </h4>
          <h2 className="scroll-m-20 ml-1 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Our Promotions Events
          </h2>
        </div>
        <div className="flex flex-row w-3/4 gap-x-6 justify-evenly ">
          <div className="flex flex-col flex-1  gap-y-4 ">
            {/* left side */}
            <div className="bg-gray-400 flex flex-row justify-between items-center flex-1 w-96 h-9 ">
              <div className="flex flex-col justify-between">
                <h2 className=" ml-2  pb-2 text-3xl font-semibold  transition-colors">
                  GET UP TO 60%
                </h2>
                <p className="leading-7 tx p-2 [&:not(:first-child)]:mt-6">
                  For the summer season
                </p>
              </div>
              <Image
                src={Promotion[0].image}
                alt=""
                width={220}
                height={220}
                className=""
              />
            </div>
            <div className="bg-gray-950 flex items-center justify-center flex-col flex-1 w-96 h-12 pl-5 pr-5 pt-4 pb-2">
              <h2 className="scroll-m-20 ml-1 text-white  pb-2 text-3xl font-semibold tracking-tight transition-colors">
                GET 30% Off
              </h2>
              <h4 className="scroll-m-20 mb-2 text-white ml-1 text-xl  tracking-tight">
                USE PROMO CODE
              </h4>
              <Button className="w-3/4" variant="secondary">
                DINEWEEKENDSALE
              </Button>
            </div>
          </div>
          <div className="flex flex-row h-full p-0 gap-x-4  flex-1 justify-center items-center">
            {/* right side */}
            <div className="bg-[#efe1c7] flex flex-col justify-between flex-1 w-12 h-96  ">
              <h2 className="scroll-m-20 ml-1  pb-2 text-lg font-semibold tracking-tight transition-colors">
                Flex Sweatshirt
              </h2>
              <div className="flex flex-row">
                <h2 className="scroll-m-20 ml-1 line-through  pb-2 text-lg font-semibold tracking-tight transition-colors">
                  $100.00
                </h2>
                <h2 className=" ml-6  text-lg font-bold tracking-tight transition-colors">
                  $75.00
                </h2>
              </div>
              <Image
                src={Promotion[1].image}
                alt=""
                width={250}
                height={280}
                className=""
              />
            </div>
            <div className="bg-gray-400 flex flex-col justify-between   flex-1 w-12 h-96  ">
              <h2 className="scroll-m-20 ml-1  pb-2 text-lg font-semibold tracking-tight transition-colors">
                Flex Push Button Bomber
              </h2>
              <div className="flex flex-row">
                <h2 className="scroll-m-20 ml-1 line-through  pb-2 text-lg font-semibold tracking-tight transition-colors">
                  $225.00
                </h2>
                <h2 className=" ml-6  text-lg font-bold tracking-tight transition-colors">
                  $190.00
                </h2>
              </div>
              <Image
                src={Promotion[2].image}
                alt=""
                width={240}
                height={260}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
