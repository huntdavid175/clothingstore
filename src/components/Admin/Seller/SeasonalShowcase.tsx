"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

// Mock data for initial clothing items
const initialClothes = [
  {
    id: 1,
    name: "Summer T-Shirt",
    category: "Tops",
    price: 19.99,
    images: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    inStock: true,
    tags: ["summer", "casual"],
    collection: "Summer Vibes",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Bottoms",
    price: 49.99,
    images: ["/placeholder.svg?height=100&width=100"],
    inStock: true,
    tags: ["denim", "casual"],
    collection: "Everyday Essentials",
  },
  {
    id: 3,
    name: "Floral Dress",
    category: "Dresses",
    price: 39.99,
    images: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    inStock: false,
    tags: ["floral", "summer", "party"],
    collection: "Summer Vibes",
  },
];

const SeasonalShowcaseContent = () => {
  const [clothes, setClothes] = useState(initialClothes);
  const [seasonalShowcase, setSeasonalShowcase] = useState<any>({
    name: "",
    startDate: "",
    endDate: "",
    items: [],
  });
  const handleSeasonalShowcaseChange = (e: any) => {
    const { name, value } = e.target;
    setSeasonalShowcase((prev: any) => ({ ...prev, [name]: value }));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seasonal Showcase</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="showcaseName">Showcase Name</Label>
            <Input
              id="showcaseName"
              name="name"
              value={seasonalShowcase.name}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={seasonalShowcase.startDate}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={seasonalShowcase.endDate}
              onChange={handleSeasonalShowcaseChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Select Items for Showcase</Label>
            {clothes.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`item-${item.id}`}
                  checked={seasonalShowcase.items.includes(item.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSeasonalShowcase((prev: any) => ({
                        ...prev,
                        items: [...prev.items, item.id],
                      }));
                    } else {
                      setSeasonalShowcase((prev: any) => ({
                        ...prev,
                        items: prev.items.filter((id: any) => id !== item.id),
                      }));
                    }
                  }}
                />
                <Label htmlFor={`item-${item.id}`}>{item.name}</Label>
              </div>
            ))}
          </div>
          <Button type="submit">Create Showcase</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeasonalShowcaseContent;
