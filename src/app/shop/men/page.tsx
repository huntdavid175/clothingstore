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
          <GiHamburgerMenu />
          <h3 className="text-sm font-semibold">Online Boutique</h3>
        </div>

        <div className="flex space-x-4 items-center">
          <FaSearch />
          <FaUser />
          <TbJewishStarFilled />
          <FaShoppingBag />
        </div>
      </div>
      {/* main header ends  */}
      {/* Tagline  */}
      <div>
        <h2>Men's New In : Today - Latest Arrivals</h2>
        <p>Closet refresh long overdue? Enter: the men's New in</p>
      </div>
      {/* Tagline ends here  */}

      {/* sort and filter  */}
      <div>
        <p>Sort</p>
        <p>Filter</p>
      </div>

      {/* sort and filter ends here  */}
    </div>
  );
};

export default ListingPage;
