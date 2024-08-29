import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import FilterDrawer from "@/components/Drawer/filterDrawer";
import ProductDisplayCarousel from "@/components/Carousel/ProductDisplayCarousel";

const ProductDisplay = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {" "}
      {/* main header  */}
      <div className="w-full  bg-black text-white">
        <div className="max-w-7xl flex justify-between items-center p-4 mx-auto">
          <div className="flex space-x-4 items-center">
            <GiHamburgerMenu className="text-xl" />
            <h3 className="text-xl font-bold">Online Boutique</h3>
          </div>

          <div className="flex space-x-4 items-center text-xl">
            <FaSearch />
            <FaUser />
            <TbJewishStarFilled />
            <FaShoppingBag />
          </div>
        </div>
      </div>
      {/* main header ends  */}
      <div className="max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <ProductDisplayCarousel />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
