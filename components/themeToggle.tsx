"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useThemeStore } from "@/app/stores/themeStore"

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const { setTheme: setZustandTheme } = useThemeStore()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])


  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setZustandTheme(newTheme)
  }
  if (!isMounted) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="bg-background border-border hover:bg-accent hover:text-accent-foreground dark:bg-background dark:border-border dark:hover:bg-accent"
        aria-label="Loading theme"
      />
    )
  }
  console.log("current theme is ", theme)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-background border-border hover:bg-accent hover:text-accent-foreground dark:bg-background dark:border-border dark:hover:bg-accent">
          {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border border-border shadow-lg dark:bg-background/95 dark:border-border">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
