import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import FilterDrawer from "@/components/Drawer/filterDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Instagram, Heart, Tag, Star } from "lucide-react";
import ProductDisplayCarousel from "@/components/Carousel/ProductDisplayCarousel";

const product = {
  name: "Vintage Denim Jacket",
  description: "A classic vintage denim jacket, perfect for any casual outfit.",
  price: "$45",
  seller: {
    name: "VintageVibes",
    instagram: "vintage_vibes_official",
    avatar: "/placeholder.svg",
    totalListings: 156,
    joinedDate: "2022-03-15",
    rating: 4.8,
  },
  images: [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ],
  sizes: ["S", "M", "L"],
  condition: "Excellent",
  tags: ["vintage", "denim", "jacket", "90s"],
  reviews: [
    {
      user: "FashionLover",
      rating: 5,
      comment: "Amazing quality and fast shipping!",
    },
    {
      user: "VintageCollector",
      rating: 4,
      comment: "Great piece, exactly as described.",
    },
  ],
};

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
      <div className="max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex-1">
            <ProductDisplayCarousel />
          </div>
          <div className="flex-2 px-4 mt-8 lg:mt-0 lg:px-0 lg:pl-12">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <Button
                variant="ghost"
                size="icon"
                // onClick={toggleFavorite}
                // className={isFavorite ? "text-red-500" : "text-gray-500"}
              >
                {/* <Heart className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} /> */}
              </Button>
            </div>
            <p className="text-xl font-semibold mb-4">{product.price}</p>
            <p className="mb-4">{product.description}</p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Size</h2>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <p className="mb-4">
              <span className="font-semibold">Condition:</span>{" "}
              {product.condition}
            </p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Card className="mb-6">
              <CardContent className="flex items-start space-x-4 p-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="https://www.shutterstock.com/image-vector/clothing-store-logo-design-inspiration-600nw-2104754999.jpg"
                    alt={product.seller.name}
                  />
                  <AvatarFallback>
                    {product.seller.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h2 className="font-semibold">{product.seller.name}</h2>
                  <a
                    href={`https://instagram.com/${product.seller.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <Instagram className="h-4 w-4 mr-1" />@
                    {product.seller.instagram}
                  </a>
                  <div className="text-sm text-gray-500 mt-1">
                    <p>{product.seller.totalListings} listings</p>
                    <p>
                      Joined{" "}
                      {new Date(product.seller.joinedDate).toLocaleDateString()}
                    </p>
                    <div className="flex items-center">
                      <Star
                        className="h-4 w-4 text-yellow-400 mr-1"
                        fill="currentColor"
                      />
                      <span>{product.seller.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full mb-4">Contact Seller on Instagram</Button>
          </div>
        </div>
      </div>
      {/* Carousel section ends here  */}
    </div>
  );
};

export default ProductDisplay;
