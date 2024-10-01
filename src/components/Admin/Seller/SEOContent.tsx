"use client";

import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const SEOContent = () => {
  const [clothes, setClothes] = useState(initialClothes);
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">SEO Tips</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use descriptive, keyword-rich product titles</li>
              <li>Write detailed product descriptions</li>
              <li>Use alt text for all product images</li>
              <li>Create unique content for each product page</li>
              <li>Optimize your store&apos;s loading speed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Keyword Suggestions</h3>
            <p>Based on your inventory, consider using these keywords:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.from(new Set(clothes.flatMap((item) => item.tags))).map(
                (tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOContent;
