import Image from "next/image";
import React from "react";

const HomeShopCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="w-full min-h-[350px] relative">
      <Image
        src={imageUrl}
        alt="shop-image"
        fill
        sizes="100vh"
        objectFit="cover"
      />
    </div>
  );
};

export default HomeShopCard;
