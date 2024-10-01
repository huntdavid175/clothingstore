import InventoryContent from "@/components/Admin/Seller/InventoryContent";
import React from "react";

const InventoryPage = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Inventory</h2>
      <InventoryContent />
    </div>
  );
};

export default InventoryPage;
