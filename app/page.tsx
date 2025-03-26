"use client"// just for testing gotta keep it a server component afterwards 
import { useStore } from "./store/useStore";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, toggleTheme } = useStore();
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={toggleTheme} variant="outline">
        Current theme: {theme}
      </Button>
    </div>
  );
}
