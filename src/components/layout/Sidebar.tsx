"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { UserMenu } from "@/components/layout/UserMenu"
import { UserRole } from "@/generated/prisma/client"
import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    Tags,
    Users,
    CreditCard,
    FileText,
    Repeat,
    Settings,
    Menu,
    DollarSign,
} from "lucide-react"

const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Accounts",
        href: "/accounts",
        icon: Wallet,
    },
    {
        title: "Transactions",
        href: "/transactions",
        icon: ArrowLeftRight,
    },
    {
        title: "Categories",
        href: "/categories",
        icon: Tags,
    },
    {
        title: "Payees & Payers",
        href: "/payees-payers",
        icon: Users,
    },
    {
        title: "Payment Methods",
        href: "/payment-methods",
        icon: CreditCard,
    },
    {
        title: "Reports",
        href: "/reports",
        icon: FileText,
    },
    {
        title: "Recurring",
        href: "/recurring",
        icon: Repeat,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    user?: {
        id: string
        name: string | null
        email: string
        role: UserRole
        image?: string | null
    } | null
}

export function Sidebar({ className, user }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("pb-12 min-h-screen flex flex-col", className)}>
            <div className="flex-1 space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="flex items-center gap-2 px-4 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <DollarSign className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold">My Finance</span>
                            <span className="text-xs text-muted-foreground">Personal Finance Manager</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        {sidebarNavItems.map((item) => (
                            <Button
                                key={item.href}
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start gap-2",
                                    pathname === item.href && "bg-muted font-medium"
                                )}
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            {user && (
                <div className="border-t px-3 py-3">
                    <UserMenu user={user} />
                </div>
            )}
        </div>
    )
}

export function MobileSidebar({ user }: { user?: SidebarProps['user'] }) {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <ScrollArea className="flex-1">
                    <div className="space-y-4 py-4">
                        <div className="px-3 py-2">
                            <div className="flex items-center gap-2 px-4 mb-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    <DollarSign className="h-6 w-6 text-primary-foreground" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">My Finance</span>
                                    <span className="text-xs text-muted-foreground">Personal Finance Manager</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                {sidebarNavItems.map((item) => (
                                    <Button
                                        key={item.href}
                                        variant={pathname === item.href ? "secondary" : "ghost"}
                                        className={cn(
                                            "w-full justify-start gap-2",
                                            pathname === item.href && "bg-muted font-medium"
                                        )}
                                        asChild
                                        onClick={() => setOpen(false)}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="h-4 w-4" />
                                            {item.title}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                {user && (
                    <div className="border-t px-3 py-3">
                        <UserMenu user={user} />
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
