import HomeShopCard from "@/components/HomeCards/HomeShopCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const galleryOne = [
  "https://images.pexels.com/photos/7760558/pexels-photo-7760558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/9522943/pexels-photo-9522943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/23878674/pexels-photo-23878674/free-photo-of-sunlight-over-men-in-black-clothes.jpeg",
];
const Shop = () => {
  return (
    <div>
      <div className="w-full h-[550px] bg-black relative">
        <Image
          src={
            "https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="shop-image"
          fill
          objectFit="cover"
        />
        <div className="w-full h-full flex flex-col justify-center items-center absolute bg-black opacity-30" />
        <div className="w-full h-full flex flex-col justify-center items-center absolute space-y-12">
          <p className="text-white text-[45px] lg:text-[175px] font-semibold">
            This is ASOS
          </p>
          <div className="flex space-x-4">
            <Button className="bg-white text-black hover:text-white lg:px-12">
              Shop Womens
            </Button>
            <Button className="bg-white text-black hover:text-white lg:px-12">
              Shop Mens
            </Button>
          </div>
        </div>
      </div>

      <section className="pt-12">
        <h2 className="text-3xl text-center mb-4">Shop the best clothes</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryOne.map((item) => (
            <HomeShopCard key={item} imageUrl={item} />
          ))}
        </div>
      </section>
      <section className="pt-12">
        <h2 className="text-3xl text-center mb-4">Women Categories</h2>
      </section>

      <section className="pt-12">
        <h2 className="text-3xl text-center mb-4">Men Categories</h2>
      </section>
    </div>
  );
};

export default Shop;
