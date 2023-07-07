import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>

      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/products"}>All Products</Link>
        </li>
      </ul>
      <div className="flex px-1 border items-center rounded-md gap-x-1">
        <Search />

        <Input
          className="w-80 border-none focus:outline-none pl-1 pr-5 py-1 rounded-r-md "
          type="text"
          placeholder="What Are You Looking For?"
        />
      </div>
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
