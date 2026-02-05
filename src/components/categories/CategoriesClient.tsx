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
import { createCategory, updateCategory, deleteCategory } from "@/actions/categories"
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

interface Category {
    id: number
    name: string
    type: 'INCOME' | 'EXPENSE'
    _count: {
        transactions: number
    }
}

interface CategoriesClientProps {
    categories: Category[]
}

export function CategoriesClient({ categories }: CategoriesClientProps) {
    const [activeTab, setActiveTab] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editCategory, setEditCategory] = useState<Category | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const incomeCategories = categories.filter(c => c.type === 'INCOME')
    const expenseCategories = categories.filter(c => c.type === 'EXPENSE')

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createCategory({
                name: formData.get('name') as string,
                type: activeTab,
            })

            if (result.success) {
                toast.success('Category created successfully')
                setIsAddOpen(false)
            } else {
                toast.error(result.error || 'Failed to create category')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleUpdate(formData: FormData) {
        if (!editCategory) return
        setIsLoading(true)
        try {
            const result = await updateCategory(editCategory.id, {
                name: formData.get('name') as string,
                type: editCategory.type,
            })

            if (result.success) {
                toast.success('Category updated successfully')
                setEditCategory(null)
            } else {
                toast.error(result.error || 'Failed to update category')
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
            const result = await deleteCategory(deleteId)

            if (result.success) {
                toast.success('Category deleted successfully')
            } else {
                toast.error(result.error || 'Failed to delete category')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
            setDeleteId(null)
        }
    }

    function CategoryTable({ items, type }: { items: Category[]; type: 'INCOME' | 'EXPENSE' }) {
        return items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No {type.toLowerCase()} categories yet.</p>
                <Button onClick={() => setIsAddOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Category
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
                    {items.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell className="font-medium">{category.name}</TableCell>
                            <TableCell className="text-center">
                                <Badge variant="secondary">{category._count.transactions}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setEditCategory(category)}
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setDeleteId(category.id)}
                                        disabled={category._count.transactions > 0}
                                    >
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Categories</CardTitle>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Category
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New {activeTab === 'INCOME' ? 'Income' : 'Expense'} Category</DialogTitle>
                        </DialogHeader>
                        <form action={handleCreate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Category Name *</Label>
                                <Input id="name" name="name" required placeholder="e.g. Groceries" />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Create Category
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'INCOME' | 'EXPENSE')}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="EXPENSE" className="text-red-600 dark:text-red-400">
                            Expense ({expenseCategories.length})
                        </TabsTrigger>
                        <TabsTrigger value="INCOME" className="text-green-600 dark:text-green-400">
                            Income ({incomeCategories.length})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="EXPENSE">
                        <CategoryTable items={expenseCategories} type="EXPENSE" />
                    </TabsContent>
                    <TabsContent value="INCOME">
                        <CategoryTable items={incomeCategories} type="INCOME" />
                    </TabsContent>
                </Tabs>
            </CardContent>

            {/* Edit Dialog */}
            <Dialog open={!!editCategory} onOpenChange={(open) => !open && setEditCategory(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                    </DialogHeader>
                    {editCategory && (
                        <form action={handleUpdate} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-name">Category Name *</Label>
                                <Input
                                    id="edit-name"
                                    name="name"
                                    required
                                    defaultValue={editCategory.name}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setEditCategory(null)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Update Category
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
                        <AlertDialogTitle>Delete Category?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. Categories with existing transactions cannot be deleted.
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
