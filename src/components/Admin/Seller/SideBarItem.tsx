"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  href: string;
  icon: React.ReactNode;
  slug: string;
}

const SideBarItem: React.FC<Props> = ({ name, href, icon, slug }) => {
  const pathname = usePathname().split("/");

  const currentPath = pathname[pathname.length - 1];

  const isActive = currentPath === slug;

  console.log(isActive);
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={`w-full justify-start cursor-pointer rounded-none ${
          isActive ? "bg-black text-white hover:bg-black hover:text-white" : ""
        }`}
      >
        {/* <HomeIcon className="mr-2 h-4 w-4" /> */}
        {icon}
        {name}
      </Button>
    </Link>
  );
};

export default SideBarItem;
