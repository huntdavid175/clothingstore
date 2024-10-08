"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPage, setShowPage] = useState<boolean>(false);

  const router = useRouter();

  const saveChoice = (choice: string) => {
    localStorage.setItem("choice", choice);
  };

  useEffect(() => {
    const choice = localStorage.getItem("choice");
    if (choice) {
      router.push(`/shop/${choice}`);
      return;
    }
    setShowPage(true);
  }, []);

  if (showPage) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
        <Button
          className="w-[70%] lg:w-[50%] py-6 rounded-none"
          onClick={() => {
            saveChoice("men");
            router.push("/shop/men");
          }}
        >
          Men
        </Button>
        <Button
          className="w-[70%] lg:w-[50%] py-6 rounded-none"
          onClick={() => {
            saveChoice("women");
            router.push("/shop/women");
          }}
        >
          Women
        </Button>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
        <p className="text-3xl font-bold font-raleway">Online Boutique</p>
      </main>
    );
  }
}
