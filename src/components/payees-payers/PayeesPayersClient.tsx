"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import { createPayeePayer, updatePayeePayer, deletePayeePayer } from "@/actions/payees-payers"
import { toast } from "sonner"
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

interface PayeePayer {
    id: number
    name: string
    type: 'PAYEE' | 'PAYER'
    _count: {
        payerTransactions: number
        payeeTransactions: number
    }
}

interface PayeesPayersClientProps {
    payeesPayers: PayeePayer[]
}

export function PayeesPayersClient({ payeesPayers }: PayeesPayersClientProps) {
    const [activeTab, setActiveTab] = useState<'PAYEE' | 'PAYER'>('PAYEE')
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editItem, setEditItem] = useState<PayeePayer | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const payees = payeesPayers.filter(p => p.type === 'PAYEE')
    const payers = payeesPayers.filter(p => p.type === 'PAYER')

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createPayeePayer({
                name: formData.get('name') as string,
                type: activeTab,
            })

            if (result.success) {
                toast.success(`${activeTab === 'PAYEE' ? 'Payee' : 'Payer'} created successfully`)
                setIsAddOpen(false)
            } else {
                toast.error(result.error || 'Failed to create')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleUpdate(formData: FormData) {
        if (!editItem) return
        setIsLoading(true)
        try {
            const result = await updatePayeePayer(editItem.id, {
                name: formData.get('name') as string,
                type: editItem.type,
            })

            if (result.success) {
                toast.success('Updated successfully')
                setEditItem(null)
            } else {
                toast.error(result.error || 'Failed to update')
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
            const result = await deletePayeePayer(deleteId)

            if (result.success) {
                toast.success('Deleted successfully')
            } else {
                toast.error(result.error || 'Failed to delete')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
            setDeleteId(null)
        }
    }

    function ItemTable({ items, type }: { items: PayeePayer[]; type: 'PAYEE' | 'PAYER' }) {
        return items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No {type === 'PAYEE' ? 'payees' : 'payers'} yet.</p>
                <Button onClick={() => setIsAddOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add {type === 'PAYEE' ? 'Payee' : 'Payer'}
                </Button>
            </div>
        ) : (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-center">Transactions</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => {
                        const transactionCount = type === 'PAYER'
                            ? item._count.payerTransactions
                            : item._count.payeeTransactions
                        return (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="secondary">{transactionCount}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setEditItem(item)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setDeleteId(item.id)}
                                            disabled={transactionCount > 0}
                                        >
                                            <Trash2 className="h-4 w-4 text-destructive" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Payees & Payers</CardTitle>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add {activeTab === 'PAYEE' ? 'Payee' : 'Payer'}
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New {activeTab === 'PAYEE' ? 'Payee' : 'Payer'}</DialogTitle>
                        </DialogHeader>
                        <form action={handleCreate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name *</Label>
                                <Input id="name" name="name" required placeholder={`e.g. ${activeTab === 'PAYEE' ? 'Grocery Store' : 'Employer'}`} />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Create
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'PAYEE' | 'PAYER')}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="PAYEE" className="text-red-600 dark:text-red-400">
                            Payees ({payees.length})
                        </TabsTrigger>
                        <TabsTrigger value="PAYER" className="text-green-600 dark:text-green-400">
                            Payers ({payers.length})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="PAYEE">
                        <ItemTable items={payees} type="PAYEE" />
                    </TabsContent>
                    <TabsContent value="PAYER">
                        <ItemTable items={payers} type="PAYER" />
                    </TabsContent>
                </Tabs>
            </CardContent>

            {/* Edit Dialog */}
            <Dialog open={!!editItem} onOpenChange={(open) => !open && setEditItem(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit {editItem?.type === 'PAYEE' ? 'Payee' : 'Payer'}</DialogTitle>
                    </DialogHeader>
                    {editItem && (
                        <form action={handleUpdate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-name">Name *</Label>
                                <Input
                                    id="edit-name"
                                    name="name"
                                    required
                                    defaultValue={editItem.name}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setEditItem(null)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Update
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
                        <AlertDialogTitle>Delete?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. Items with existing transactions cannot be deleted.
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
