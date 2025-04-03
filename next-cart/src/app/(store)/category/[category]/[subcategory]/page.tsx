import { notFound } from 'next/navigation'
import {categories} from "@/components/lib/categories";
import {slugify} from "@/components/lib/utils";
import {mockProducts} from "@/components/lib/constant";
import ProductCard from "@/components/components/commons/product-card";

export default function SubcategoryPage({
                                            params
                                        }: {
    params: { category: string; subcategory: string }
}) {
    // 1. Find category (server-side)
    const category = categories.find(c => slugify(c.name) === params.category)
    if (!category) notFound()

    // 2. Find subcategory (server-side)
    const subcategory = category.subcategories?.find(
        s => slugify(s.name) === params.subcategory
    )
    if (!subcategory) notFound()

    // 3. Filter products (server-side)
    const products = mockProducts.filter(
        p => p.category === subcategory.id
    )

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{subcategory.name}</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}