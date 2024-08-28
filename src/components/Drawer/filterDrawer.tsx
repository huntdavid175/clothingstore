"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterIcon, X, Search } from "lucide-react";

// Sample category data structure
const categories = [
  {
    name: "Clothing",
    subcategories: [
      "T-Shirts",
      "Jeans",
      "Dresses",
      "Jackets",
      "Sweaters",
      "Skirts",
      "Shorts",
      "Activewear",
    ],
  },
  {
    name: "Shoes",
    subcategories: [
      "Sneakers",
      "Boots",
      "Sandals",
      "Heels",
      "Flats",
      "Loafers",
      "Athletic Shoes",
    ],
  },
  {
    name: "Accessories",
    subcategories: [
      "Bags",
      "Jewelry",
      "Belts",
      "Hats",
      "Scarves",
      "Sunglasses",
      "Watches",
    ],
  },
  // Add more main categories as needed
];

export default function Component() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      subcategories: category.subcategories.filter((subcat) =>
        subcat.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.subcategories.length > 0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-4 left-4 z-50 rounded-full"
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh] rounded-t-[10px]">
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className="px-4 h-[calc(85vh-10rem)]">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Accordion type="multiple" className="w-full">
                {filteredCategories.map((category) => (
                  <AccordionItem value={category.name} key={category.name}>
                    <AccordionTrigger>{category.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {category.subcategories.map((subcat) => (
                          <div key={subcat} className="flex items-center">
                            <Checkbox id={`category-${subcat}`} />
                            <Label
                              htmlFor={`category-${subcat}`}
                              className="ml-2"
                            >
                              {subcat}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <Button key={size} variant="outline" className="rounded-full">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "bg-red-500",
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-yellow-500",
                  "bg-purple-500",
                  "bg-gray-500",
                ].map((color) => (
                  <Button
                    key={color}
                    variant="outline"
                    className={`w-8 h-8 rounded-full ${color}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Price Range</h3>
              <Slider
                min={0}
                max={200}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <Button className="w-full">Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
