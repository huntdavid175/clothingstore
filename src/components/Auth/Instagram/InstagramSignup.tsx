"use server";

import React from "react";
import { Button } from "@/components/ui/button";

import { Instagram } from "lucide-react";
import { signIn } from "../../../../auth";

const InstagramSignup = () => {
  //   const handleInstagramLogin = async () => {
  //     // Implement Instagram login logic here
  //     await signIn("instagram");
  //     console.log("Instagram login clicked");
  //   };
  return (
    <form
      className="mt-4"
      action={async () => {
        "use server";
        await signIn("instagram");
      }}
    >
      <Button
        variant="outline"
        className="w-full flex items-center justify-center"
        // onClick={handleInstagramLogin}
      >
        <Instagram className="mr-2 h-4 w-4" />
        {/* {isLogin ? "Login with Instagram" : "Sign Up with Instagram"} */}
        Login with Instagram
      </Button>
    </form>
  );
};

export default InstagramSignup;
