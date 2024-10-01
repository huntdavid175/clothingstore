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
import SideBar from "./SideBar";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return <div></div>;
}
