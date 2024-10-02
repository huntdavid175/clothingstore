"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";

const AdminBar = () => {
  return (
    <>
      <div className="w-full  bg-black text-white">
        <div className="max-w-7xl flex justify-between items-center p-4 mx-auto">
          <div className="flex space-x-4 items-center">
            <div className="lg:hidden">
              <GiHamburgerMenu className="text-xl" />
            </div>
            <h3 className="hidden lg:block text-xl font-bold">
              Online Boutique
            </h3>
          </div>

          <div className="flex space-x-4 items-center text-xl">
            <IoNotifications className="cursor-pointer" />
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold font-raleway">
                Marylin Mondrong
              </p>
              <p className="text-xs font-light font-raleway">Good Afternoon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBar;
