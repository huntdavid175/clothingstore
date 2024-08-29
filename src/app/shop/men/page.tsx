import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import FilterDrawer from "@/components/Drawer/filterDrawer";

const ListingPage = () => {
  const clothes = new Array(30).fill("1");

  return (
    <div className="w-full flex flex-col items-center">
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
      <div className="w-full p-4 flex justify-center items-center bg-zinc-300">
        <div className="max-w-7xl">
          <p className="px-4 text-base font-semibold text-zinc-700">SORT</p>
          <FilterDrawer />
        </div>
      </div>

      {/* sort and filter ends here  */}

      {/* product listing starts here  */}
      <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-4 px-4 gap-x-4 gap-y-4">
        {clothes.map((item: any, index: number) => (
          <div className="w-full" key={index}>
            <Image
              src="https://images.asos-media.com/products/ellesse-hazzo-tipped-detail-overhead-hoodie-in-black/206898212-1-black?$n_640w$&wid=634&fit=constrain"
              alt="shop-image"
              layout="responsive"
              width={634}
              height={640}
              objectFit="cover"
            />
            <p className="text-sm font-light">
              ellesse Hazzo tipped detail overhead hoodie in black
            </p>
            <p className="text-lg font-semibold mt-2">$ 79.99</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
