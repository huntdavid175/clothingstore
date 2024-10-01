"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ShirtIcon,
  ImageIcon,
  UserIcon,
  MessageSquareIcon,
} from "lucide-react";

// Mock data for analytics
const initialAnalytics = {
  profileViews: 1200,
  productViews: 3500,
  inquiries: 45,
  topProducts: [
    { name: "Summer T-Shirt", views: 500 },
    { name: "Floral Dress", views: 450 },
    { name: "Slim Fit Jeans", views: 300 },
  ],
};

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

const DashboardContent = () => {
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [clothes, setClothes] = useState(initialClothes);
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products
            </CardTitle>
            <ShirtIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clothes.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.profileViews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Product Views</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.productViews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
            <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.inquiries}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.topProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContent;
