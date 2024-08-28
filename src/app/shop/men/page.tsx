import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

const ListingPage = () => {
  return (
    <div className="w-full">
      {/* main header  */}
      <div className="w-full flex justify-between items-center p-4 bg-black text-white">
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
      {/* main header ends  */}
      {/* Tagline  */}
      <div className="w-full p-4">
        <h2 className="text-xl font-bold">
          Men&apos;s New In : Today - Latest Arrivals
        </h2>
        <p className="text-sm font-light">
          Closet refresh long overdue? Enter: the men&apos;s New in
        </p>
      </div>
      {/* Tagline ends here  */}

      {/* sort and filter  */}
      <div className="w-full p-4 flex justify-between items-center bg-zinc-300">
        <p className="px-12 text-lg font-semibold text-zinc-700">SORT</p>
        <p className="px-12 text-lg font-semibold text-zinc-700">FILTER</p>
      </div>

      {/* sort and filter ends here  */}
    </div>
  );
};

export default ListingPage;
