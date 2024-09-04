import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import FilterDrawer from "@/components/Drawer/filterDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
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
      {/* Carousel section  */}
      <div className="max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex-1">
            <ProductDisplayCarousel />
          </div>
          <div className="flex-2 pl-12">
            <h1 className="text-3xl font-bold mb-4">Vintage Denim Jacket</h1>
            <p className="text-xl font-semibold mb-4">$45</p>
            <p className="mb-4">
              A classic vintage denim jacket perfect for any casual outfit
            </p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Size</h2>
              <div className="flex space-x-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <Button key={size} variant="outline">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <p className="mb-4">
              <span className="font-semibold">Condition:</span> Excenllent
            </p>
            <Card className="mb-6">
              <CardContent className="flex items-center space-x-4 p-4">
                <img
                  src="https://www.shutterstock.com/image-vector/clothing-store-logo-design-inspiration-600nw-2104754999.jpg"
                  alt="VintageVibes"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-semibold">VintageVibes</h2>
                  <a
                    href={`https://instagram.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <Instagram className="h-4 w-4 mr-1" />@
                    Vintage_vibes_official
                  </a>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full">Contact Seller on Instagram</Button>
          </div>
        </div>
      </div>
      {/* Carousel section ends here  */}
    </div>
  );
};

export default ProductDisplay;
