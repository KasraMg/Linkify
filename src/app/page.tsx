"use client";
import { Button } from "@heroui/button";

 
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">سلام به NextUI 🚀</h1>
      <Button color="primary" className="mt-4">
        کلیک کن
      </Button>
    </div>
  );
}
