import React from "react";
import { createClient } from "../../../../../utils/supabase/server";
import { redirect } from "next/navigation";
import SellerDashboard from "@/components/Admin/Seller/SellerDashboard";

const SellerAdminPage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (!data.user || error) {
    redirect("/seller/auth");
  }

  return (
    <div>
      <SellerDashboard />
    </div>
  );
};

export default SellerAdminPage;
