import { Header } from "@/components/layout/Header"
import { getCategories } from "@/actions/categories"
import { CategoriesClient } from "@/components/categories/CategoriesClient"

export default async function CategoriesPage() {
    const categories = await getCategories()

    return (
        <>
            <Header title="Categories" />
            <div className="p-4 md:p-6">
                <CategoriesClient categories={categories} />
            </div>
        </>
    )
}
