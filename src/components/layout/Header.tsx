"use client"

import { MobileSidebar } from "./Sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
    title?: string
}

export function Header({ title }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-4 md:px-6">
                <MobileSidebar />

                <div className="flex-1">
                    {title && (
                        <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
