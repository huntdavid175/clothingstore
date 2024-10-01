"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomizationContent = () => {
  const [customization, setCustomization] = useState({
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    font: "sans-serif",
  });

  const handleCustomizationChange = (e: any) => {
    const { name, value } = e.target;
    setCustomization((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Customization</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <Input
              id="primaryColor"
              name="primaryColor"
              type="color"
              value={customization.primaryColor}
              onChange={handleCustomizationChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondaryColor">Secondary Color</Label>
            <Input
              id="secondaryColor"
              name="secondaryColor"
              type="color"
              value={customization.secondaryColor}
              onChange={handleCustomizationChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="font">Font</Label>
            <Select
              name="font"
              value={customization.font}
              onValueChange={(value) =>
                setCustomization((prev) => ({ ...prev, font: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sans-serif">Sans-serif</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="monospace">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Customization</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomizationContent;
