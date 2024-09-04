import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  productName: string;
  price: string;
}

const ProductListingItem: React.FC<Props> = ({
  imgSrc,
  productName,
  price,
}) => {
  return (
    <Link href="/shop/men/product">
      <div className="w-full cursor-pointer">
        <Image
          src={imgSrc}
          alt="shop-image"
          layout="responsive"
          width={634}
          height={640}
          objectFit="cover"
        />
        <p className="text-sm font-light">{productName}</p>
        <p className="text-lg font-semibold mt-2">$ {price}</p>
      </div>
    </Link>
  );
};

export default ProductListingItem;
