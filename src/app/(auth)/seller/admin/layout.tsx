import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import DashboardContent from "./DashboardContent";
import SideBar from "@/components/Admin/Seller/SideBar";
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
import AdminBar from "@/components/Admin/Seller/AdminBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <AdminBar /> */}
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <SideBar />
        <main className="flex-1 overflow-y-auto p-6">
          {/* <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <DashboardContent /> */}
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
