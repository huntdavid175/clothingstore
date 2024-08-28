"use client";

import { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon, X, Search, Trash2 } from "lucide-react";

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
      "Blouses",
      "Suits",
      "Pants",
      "Outerwear",
      "Underwear",
      "Sleepwear",
      "Swimwear",
      "Loungewear",
      "Overalls",
      "Leggings",
      "Hoodies",
      "Cardigans",
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
      "Slippers",
      "Oxfords",
      "Wedges",
      "Espadrilles",
      "Clogs",
      "Mules",
      "Ankle Boots",
      "Chelsea Boots",
      "Running Shoes",
      "Flip Flops",
      "Dress Shoes",
      "Platform Shoes",
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
      "Gloves",
      "Ties",
      "Wallets",
      "Backpacks",
      "Hair Accessories",
      "Socks",
      "Beanies",
      "Earrings",
      "Necklaces",
      "Bracelets",
      "Cufflinks",
      "Brooches",
      "Pocket Squares",
    ],
  },
  {
    name: "Specialty Clothing",
    subcategories: [
      "Maternity Wear",
      "Plus Size Clothing",
      "Petite Clothing",
      "Tall Clothing",
      "Modest Clothing",
      "Bridal Wear",
      "Vintage Clothing",
      "Designer Clothing",
      "Workwear",
      "Uniforms",
      "Costumes",
      "Formal Wear",
    ],
  },
  {
    name: "Seasonal Clothing",
    subcategories: [
      "Winter Coats",
      "Rainwear",
      "Swim Trunks",
      "Beachwear",
      "Holiday Sweaters",
      "Summer Dresses",
      "Layering Pieces",
      "Thermal Wear",
    ],
  },
];

export default function Component() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [recentFilters, setRecentFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("");

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      subcategories: category.subcategories.filter((subcat) =>
        subcat.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.subcategories.length > 0);

  useEffect(() => {
    // Load recent filters from localStorage
    const savedFilters = localStorage.getItem("recentFilters");
    if (savedFilters) {
      setRecentFilters(JSON.parse(savedFilters));
    }
  }, []);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleApplyFilters = () => {
    // Update recent filters
    const updatedRecentFilters = [
      ...new Set([...selectedFilters, ...recentFilters]),
    ].slice(0, 5);
    setRecentFilters(updatedRecentFilters);
    localStorage.setItem("recentFilters", JSON.stringify(updatedRecentFilters));

    // Apply filters logic here
    console.log("Applied filters:", selectedFilters);
    console.log("Price range:", priceRange);
    console.log("Sort by:", sortBy);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setPriceRange([0, 200]);
    setSortBy("");
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-4 left-4 z-50 rounded-full"
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          Filters
          {selectedFilters.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {selectedFilters.length}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh] rounded-t-[10px]">
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle>Filters</DrawerTitle>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="mr-2"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <ScrollArea className="px-4 h-[calc(85vh-10rem)]">
          <div className="space-y-6">
            {recentFilters.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Recent Filters</h3>
                <div className="flex flex-wrap gap-2">
                  {recentFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={
                        selectedFilters.includes(filter)
                          ? "secondary"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => handleFilterChange(filter)}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            )}
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
                            <Checkbox
                              id={`category-${subcat}`}
                              checked={selectedFilters.includes(subcat)}
                              onCheckedChange={() => handleFilterChange(subcat)}
                            />
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
                  <Button
                    key={size}
                    variant={
                      selectedFilters.includes(size) ? "secondary" : "outline"
                    }
                    className="rounded-full"
                    onClick={() => handleFilterChange(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Red", class: "bg-red-500" },
                  { name: "Blue", class: "bg-blue-500" },
                  { name: "Green", class: "bg-green-500" },
                  { name: "Yellow", class: "bg-yellow-500" },
                  { name: "Purple", class: "bg-purple-500" },
                  { name: "Gray", class: "bg-gray-500" },
                ].map((color) => (
                  <Button
                    key={color.name}
                    variant="outline"
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedFilters.includes(color.name)
                        ? "ring-2 ring-offset-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleFilterChange(color.name)}
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
            <div>
              <h3 className="text-lg font-semibold mb-2">Sort By</h3>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price_low_high">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price_high_low">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <Button className="w-full" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
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
