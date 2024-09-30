import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import FilterDrawer from "@/components/Drawer/filterDrawer";
import ProductListingItem from "@/components/Product/ProductListingItem";
import { products } from "@/lib/products";
import SidebarFilter from "@/components/Sidebar/SideBar";

const ListingPage = () => {
  const clothes = new Array(30).fill("1");

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tagline  */}
      <div className="max-w-7xl p-4">
        <h2 className="text-xl font-bold text-center">
          Men&apos;s New In : Today - Latest Arrivals
        </h2>
        <p className="text-sm font-light text-center">
          Closet refresh long overdue? Enter: the men&apos;s New in
        </p>
      </div>
      {/* Tagline ends here  */}

      {/* sort and filter  */}
      <div className="w-full p-4 flex justify-center items-center bg-zinc-300 relative">
        <div className="max-w-7xl">
          <p className="px-4 text-base font-semibold text-zinc-700">SORT</p>
          <FilterDrawer />
        </div>
      </div>

      {/* sort and filter ends here  */}

      {/* product listing starts here  */}
      <div className="max-w-8xl lg:grid lg:grid-cols-[300px_auto] lg:overflow-visible">
        <SidebarFilter />
        <div className="flex-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-x-4 gap-y-4">
          {products.map((item: any, index: number) => (
            <ProductListingItem
              key={index}
              // imgSrc="https://images.asos-media.com/products/asos-design-slim-chino-shorts-in-khaki/205478455-1-green?$n_960w$&wid=952&fit=constrain"
              imgSrc={item.imgSrc}
              productName={item.productName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
