"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DashboardContent from "./DashboardContent";
import {
  HomeIcon,
  PackageIcon,
  UserIcon,
  MessageSquareIcon,
  BoxesIcon,
  CalendarIcon,
  SearchIcon,
  PaletteIcon,
  LogOutIcon,
} from "lucide-react";

import SeasonalShowcaseContent from "./SeasonalShowcase";
import InventoryContent from "./InventoryContent";
import ProfileContent from "./ProfileContent";
import CollectionsContent from "./CollectionsContent";
import InquiriesContent from "./InquiriesContent";
import CustomizationContent from "./CustomizationContent";
import SEOContent from "./SEOContent";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Seller Dashboard
          </h2>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("inventory")}
          >
            <PackageIcon className="mr-2 h-4 w-4" />
            Inventory
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("collections")}
          >
            <BoxesIcon className="mr-2 h-4 w-4" />
            Collections
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("inquiries")}
          >
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Inquiries
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("customization")}
          >
            <PaletteIcon className="mr-2 h-4 w-4" />
            Customization
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("seasonal")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Seasonal Showcase
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("seo")}
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            SEO Tools
          </Button>
        </nav>
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" onClick={() => console.log("logged out")}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">
        <Tabs value={activeTab} className="space-y-4">
          <TabsContent value="dashboard" className="space-y-4">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <DashboardContent />
          </TabsContent>
          <TabsContent value="inventory" className="space-y-4">
            <h2 className="text-2xl font-bold">Inventory Management</h2>
            <InventoryContent />
          </TabsContent>
          <TabsContent value="profile" className="space-y-4">
            <h2 className="text-2xl font-bold">Seller Profile</h2>
            <ProfileContent />
          </TabsContent>
          <TabsContent value="collections" className="space-y-4">
            <h2 className="text-2xl font-bold">Collections</h2>
            <CollectionsContent />
          </TabsContent>
          <TabsContent value="inquiries" className="space-y-4">
            <h2 className="text-2xl font-bold">Customer Inquiries</h2>
            <InquiriesContent />
          </TabsContent>
          <TabsContent value="customization" className="space-y-4">
            <h2 className="text-2xl font-bold">Store Customization</h2>
            <CustomizationContent />
          </TabsContent>
          <TabsContent value="seasonal" className="space-y-4">
            <h2 className="text-2xl font-bold">Seasonal Showcase</h2>
            <SeasonalShowcaseContent />
          </TabsContent>
          <TabsContent value="seo" className="space-y-4">
            <h2 className="text-2xl font-bold">SEO Tools</h2>
            <SEOContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
