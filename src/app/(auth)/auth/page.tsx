import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InstagramSignup from "@/components/Auth/Instagram/InstagramSignup";
import AuthForm from "@/components/Auth/AuthForm";
import { cookies } from "next/headers";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <AuthForm />
      {/* <InstagramSignup /> */}
    </div>
  );
}
