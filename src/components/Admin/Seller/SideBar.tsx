import { Button } from "@/components/ui/button";

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
import path from "path";
import SideBarItem from "./SideBarItem";
import { logout } from "@/app/(auth)/seller/auth/actions";

const navLinks = [
  {
    name: "Dashboard",
    href: "/seller/admin",
    icon: <HomeIcon className="mr-2 h-4 w-4" />,
    slug: "admin",
  },
  {
    name: "Inventory",
    href: "/seller/admin/inventory",
    icon: <PackageIcon className="mr-2 h-4 w-4" />,
    slug: "inventory",
  },
  {
    name: "Profile",
    href: "/seller/admin/profile",
    icon: <UserIcon className="mr-2 h-4 w-4" />,
    slug: "profile",
  },
  {
    name: "Collections",
    href: "/seller/admin/collections",
    icon: <BoxesIcon className="mr-2 h-4 w-4" />,
    slug: "collections",
  },
  {
    name: "Inquiries",
    href: "/seller/admin/inquiries",
    icon: <MessageSquareIcon className="mr-2 h-4 w-4" />,
    slug: "inquiries",
  },

  {
    name: "Customization",
    href: "/seller/admin/customization",
    icon: <PaletteIcon className="mr-2 h-4 w-4" />,
    slug: "customization",
  },
  {
    name: "Seasonal Showcase",
    href: "/seller/admin/seasonal-showcase",
    icon: <CalendarIcon className="mr-2 h-4 w-4" />,
    slug: "seasonal-showcase",
  },
  {
    name: "SEO Tools",
    href: "/seller/admin/seo-tools",
    icon: <SearchIcon className="mr-2 h-4 w-4" />,
    slug: "seo-tools",
  },
];

const SideBar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-gray-800 border-r">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Seller Dashboard
        </h2>
      </div>
      <nav className="mt-6">
        {navLinks.map((item) => (
          <SideBarItem key={item.name} {...item} />
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <form action={logout}>
          <Button variant="ghost" type="submit">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default SideBar;
