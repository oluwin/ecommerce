'use client'

import { useParams } from 'next/navigation'
import { mockProducts } from '@/components/lib/constant'
import { categories } from '@/components/lib/categories'
import ProductCard from "@/components/components/commons/product-card"
import { slugify } from '@/components/lib/utils'

export default function CategoryPage() {
    const { category: categorySlug } = useParams()
    const { subcategory: subcategorySlug } = useParams()

    // Find the current category by matching the slug
    const currentCategory = categories.find(c =>
        slugify(c.name) === categorySlug
    )

    // Find the current subcategory by matching the slug if exists
    const currentSubcategory = currentCategory?.subcategories?.find(
        sc => slugify(sc.name) === subcategorySlug
    )

    // Filter products based on category/subcategory IDs
    const filteredProducts = mockProducts.filter(product => {
        if (subcategorySlug && currentSubcategory) {
            // For subcategory pages
            return product.category === currentSubcategory.id
        } else if (currentCategory) {
            // For category pages (include all subcategory products)
            return product.category === currentCategory.id ||
                currentCategory.subcategories?.some(sc => sc.id === product.category)
        }
        return false
    })

    return (
        <div className="flex flex-col md:flex-row">
            <main className="flex-1 p-4 md:p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                        {currentSubcategory?.name || currentCategory?.name || "Category"}
                    </h1>
                    <p className="text-gray-600">
                        {filteredProducts.length} products available
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    )
}