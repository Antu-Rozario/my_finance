"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
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
    Plus,
    Calculator,
    User,
    Search,
    Command as CommandIcon,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/accounts"))}>
                        <Wallet className="mr-2 h-4 w-4" />
                        <span>Accounts</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/transactions"))}>
                        <ArrowLeftRight className="mr-2 h-4 w-4" />
                        <span>Transactions</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/categories"))}>
                        <Tags className="mr-2 h-4 w-4" />
                        <span>Categories</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/payees-payers"))}>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Payees & Payers</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/reports"))}>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Reports</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                    <CommandItem onSelect={() => runCommand(() => router.push("/transactions"))}>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>New Transaction</span>
                        <CommandShortcut>N</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/settings"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Theme">
                    <CommandItem onSelect={() => runCommand(() => console.log("Light"))}>
                        <Search className="mr-2 h-4 w-4" />
                        <span>Search Transactions</span>
                        <CommandShortcut>/</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
