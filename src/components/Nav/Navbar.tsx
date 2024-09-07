import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      {/* main header  */}
      <div className="w-full  bg-black text-white">
        <div className="max-w-7xl flex justify-between items-center p-4 mx-auto">
          <div className="flex space-x-4 items-center">
            <div className="lg:hidden">
              {" "}
              <GiHamburgerMenu className="text-xl" />
            </div>
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
    </>
  );
};

export default Navbar;
