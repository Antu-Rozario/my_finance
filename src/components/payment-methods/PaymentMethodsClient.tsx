"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import { createPaymentMethod, updatePaymentMethod, deletePaymentMethod } from "@/actions/payment-methods"
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

interface PaymentMethod {
    id: number
    name: string
    _count: {
        transactions: number
    }
}

interface PaymentMethodsClientProps {
    paymentMethods: PaymentMethod[]
}

export function PaymentMethodsClient({ paymentMethods }: PaymentMethodsClientProps) {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editMethod, setEditMethod] = useState<PaymentMethod | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createPaymentMethod({
                name: formData.get('name') as string,
            })

            if (result.success) {
                toast.success('Payment method created successfully')
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
        if (!editMethod) return
        setIsLoading(true)
        try {
            const result = await updatePaymentMethod(editMethod.id, {
                name: formData.get('name') as string,
            })

            if (result.success) {
                toast.success('Payment method updated successfully')
                setEditMethod(null)
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
            const result = await deletePaymentMethod(deleteId)

            if (result.success) {
                toast.success('Payment method deleted successfully')
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

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Payment Methods</CardTitle>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Payment Method
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Payment Method</DialogTitle>
                        </DialogHeader>
                        <form action={handleCreate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Method Name *</Label>
                                <Input id="name" name="name" required placeholder="e.g. Credit Card" />
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
                {paymentMethods.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-4">No payment methods yet.</p>
                        <Button onClick={() => setIsAddOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Payment Method
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
                            {paymentMethods.map((method) => (
                                <TableRow key={method.id}>
                                    <TableCell className="font-medium">{method.name}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="secondary">{method._count.transactions}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setEditMethod(method)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setDeleteId(method.id)}
                                                disabled={method._count.transactions > 0}
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
            <Dialog open={!!editMethod} onOpenChange={(open) => !open && setEditMethod(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Payment Method</DialogTitle>
                    </DialogHeader>
                    {editMethod && (
                        <form action={handleUpdate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-name">Method Name *</Label>
                                <Input
                                    id="edit-name"
                                    name="name"
                                    required
                                    defaultValue={editMethod.name}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setEditMethod(null)}>
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
                        <AlertDialogTitle>Delete Payment Method?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. Payment methods with existing transactions cannot be deleted.
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
