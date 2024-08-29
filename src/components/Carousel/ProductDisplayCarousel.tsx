import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProductDisplayCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src="https://images.asos-media.com/products/ellesse-almora-sweatshirt-in-beige/206898124-1-beige?$n_1280w$&wid=1125&fit=constrain"
                width={1280}
                height={1280}
                objectFit="contain"
                alt="product image"
                sizes="(100vw, 100vh)"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProductDisplayCarousel;
