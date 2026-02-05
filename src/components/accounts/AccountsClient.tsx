"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/utils"
import { Plus, Pencil, Trash2, Eye, Loader2 } from "lucide-react"
import { createAccount, updateAccount, deleteAccount } from "@/actions/accounts"
import { toast } from "sonner"
import Link from "next/link"

interface Account {
    id: number
    name: string
    openingBalance: number
    note: string | null
    currentBalance: number
    transactionCount: number
}

interface AccountsClientProps {
    accounts: Account[]
    currencySymbol: string
}

export function AccountsClient({ accounts, currencySymbol }: AccountsClientProps) {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editAccount, setEditAccount] = useState<Account | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createAccount({
                name: formData.get('name') as string,
                openingBalance: parseFloat(formData.get('openingBalance') as string) || 0,
                note: formData.get('note') as string || undefined,
            })

            if (result.success) {
                toast.success('Account created successfully')
                setIsAddOpen(false)
            } else {
                toast.error('Failed to create account')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleUpdate(formData: FormData) {
        if (!editAccount) return
        setIsLoading(true)
        try {
            const result = await updateAccount(editAccount.id, {
                name: formData.get('name') as string,
                openingBalance: editAccount.openingBalance, // Read-only
                note: formData.get('note') as string || undefined,
            })

            if (result.success) {
                toast.success('Account updated successfully')
                setEditAccount(null)
            } else {
                toast.error('Failed to update account')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleDelete() {
        if (!deleteId) return
        setIsLoading(true)
        try {
            const result = await deleteAccount(deleteId)

            if (result.success) {
                toast.success('Account deleted successfully')
            } else {
                toast.error(result.error || 'Failed to delete account')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
            setDeleteId(null)
        }
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Accounts</CardTitle>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Account
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Account</DialogTitle>
                        </DialogHeader>
                        <form action={handleCreate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Account Name</Label>
                                <Input id="name" name="name" required placeholder="e.g. City Bank" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="openingBalance">Opening Balance</Label>
                                <Input
                                    id="openingBalance"
                                    name="openingBalance"
                                    type="number"
                                    step="0.01"
                                    defaultValue="0"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="note">Note</Label>
                                <Textarea id="note" name="note" placeholder="Optional description" />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Create Account
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                {accounts.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-4">No accounts yet. Add your first account to get started.</p>
                        <Button onClick={() => setIsAddOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Account
                        </Button>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Account Name</TableHead>
                                <TableHead className="text-right">Opening Balance</TableHead>
                                <TableHead className="text-right">Current Balance</TableHead>
                                <TableHead>Note</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {accounts.map((account) => (
                                <TableRow key={account.id}>
                                    <TableCell className="font-medium">{account.name}</TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(account.openingBalance, currencySymbol)}
                                    </TableCell>
                                    <TableCell className={`text-right font-medium ${account.currentBalance >= 0
                                        ? 'text-green-600 dark:text-green-400'
                                        : 'text-red-600 dark:text-red-400'
                                        }`}>
                                        {formatCurrency(account.currentBalance, currencySymbol)}
                                    </TableCell>
                                    <TableCell className="max-w-[200px] truncate">
                                        {account.note || '-'}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/accounts/${account.id}`}>
                                                    <Eye className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setEditAccount(account)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setDeleteId(account.id)}
                                            >
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>

            {/* Edit Dialog */}
            <Dialog open={!!editAccount} onOpenChange={(open) => !open && setEditAccount(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Account</DialogTitle>
                    </DialogHeader>
                    {editAccount && (
                        <form action={handleUpdate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-name">Account Name</Label>
                                <Input
                                    id="edit-name"
                                    name="name"
                                    required
                                    defaultValue={editAccount.name}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Opening Balance (Read-only)</Label>
                                <Input
                                    value={formatCurrency(editAccount.openingBalance, currencySymbol)}
                                    disabled
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-note">Note</Label>
                                <Textarea
                                    id="edit-note"
                                    name="note"
                                    defaultValue={editAccount.note || ''}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setEditAccount(null)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Update Account
                                </Button>
                            </div>
                        </form>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Account?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the account.
                            Note: Accounts with existing transactions cannot be deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    )
}
