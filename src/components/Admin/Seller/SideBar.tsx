import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const SideBar = () => {
  //   const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Seller Dashboard
        </h2>
      </div>
      <nav className="mt-6">
        <Link href={"/seller/admin"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href={"/seller/admin/inventory"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <PackageIcon className="mr-2 h-4 w-4" />
            Inventory
          </Button>
        </Link>
        <Link href={"/seller/admin/profile"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
        <Link href={"/seller/admin/collections"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <BoxesIcon className="mr-2 h-4 w-4" />
            Collections
          </Button>
        </Link>
        <Link href={"/seller/admin/inquiries"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Inquiries
          </Button>
        </Link>
        <Link href={"/seller/admin/customization"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <PaletteIcon className="mr-2 h-4 w-4" />
            Customization
          </Button>
        </Link>
        <Link href={"/seller/admin/seasonal-showcase"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Seasonal Showcase
          </Button>
        </Link>
        <Link href={"/seller/admin/seo-tools"}>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            SEO Tools
          </Button>
        </Link>
      </nav>
      <div className="absolute bottom-4 left-4">
        <Button variant="ghost">
          <LogOutIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;
