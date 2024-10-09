import Link from "next/link";
import InventoryContent from "@/components/Admin/Seller/InventoryContent";
import { Button } from "@/components/ui/button";
import React from "react";
import { PlusIcon } from "lucide-react";

const InventoryPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Inventory</h2>
        <div>
          <Link href="/seller/admin/inventory/add-product">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
      <InventoryContent />
    </div>
  );
};

export default InventoryPage;
