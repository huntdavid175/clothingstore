import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import AdminBar from "@/components/Admin/Seller/AdminBar";
import SideBar from "@/components/Admin/Seller/SideBar";
import "../../../globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Online Boutique",
  description:
    "View all clothings being sold in Ghana and clothing sellers on instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminBar />
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
}
