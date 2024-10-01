import React from "react";
import { createClient } from "../../../../../utils/supabase/server";
import { redirect } from "next/navigation";
import SellerDashboard from "@/components/Admin/Seller/SellerDashboard";
import DashboardContent from "@/components/Admin/Seller/DashboardContent";

const SellerAdminPage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (!data.user || error) {
    redirect("/seller/auth");
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <DashboardContent />
    </div>
  );
};

export default SellerAdminPage;
