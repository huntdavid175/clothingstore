import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstagramSignup from "@/components/Auth/Instagram/InstagramSignup";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <InstagramSignup />
    </div>
  );
}
