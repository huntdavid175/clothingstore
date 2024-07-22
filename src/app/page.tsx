"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
      <Button
        className="w-[70%] lg:w-[50%] py-6"
        onClick={() => router.push("/shop")}
      >
        Already Made
      </Button>

      <Button
        className="w-[70%] lg:w-[50%] py-6"
        onClick={() => router.push("/shop")}
      >
        Thrifts
      </Button>
    </main>
  );
}
