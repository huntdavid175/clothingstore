"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarFilter() {
  const [priceRange, setPriceRange] = React.useState([0, 200]);

  return (
    <aside
      className="hidden w-[300px] bg-background border-r h-[calc(100vh-4rem)] flex-1 flex-shrink-0 lg:sticky lg:left-0 lg:top-0 lg:flex lg:flex-col"
      aria-label="Product filters"
    >
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <Slider
              min={0}
              max={200}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tops" />
                    <label
                      htmlFor="tops"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tops
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bottoms" />
                    <label
                      htmlFor="bottoms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Bottoms
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dresses" />
                    <label
                      htmlFor="dresses"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Dresses
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="outerwear" />
                    <label
                      htmlFor="outerwear"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Outerwear
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="xs" />
                    <label
                      htmlFor="xs"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      XS
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="s" />
                    <label
                      htmlFor="s"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m" />
                    <label
                      htmlFor="m"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      M
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="l" />
                    <label
                      htmlFor="l"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      L
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="xl" />
                    <label
                      htmlFor="xl"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="color">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="black" />
                    <label
                      htmlFor="black"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Black
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="white" />
                    <label
                      htmlFor="white"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      White
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="red" />
                    <label
                      htmlFor="red"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Red
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="blue" />
                    <label
                      htmlFor="blue"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Blue
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="green" />
                    <label
                      htmlFor="green"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Green
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </aside>
  );
}
