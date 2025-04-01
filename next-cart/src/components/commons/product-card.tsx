'use client'

import { Product } from '@/components/lib/types'
import Link from 'next/link'
import { useCart } from '@/components/utils/useCart'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/components/ui/card'
import { Badge } from '@/components/components/ui/badge'
import { toast } from 'sonner'

export default function ProductCard({ product }: { product: Product }) {
    const { addItem } = useCart()

    const handleAddToCart = () => {
        try {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1 // Explicitly adding quantity since it's required in CartItem type
            });
            toast.success(`${product.name} added to cart`);
        } catch (error) {
            toast.error('Failed to add item to cart');
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <Link href={`/products/${product.id}`} className="flex-grow">
                <CardHeader className="p-0">
                    <div className="aspect-square bg-muted rounded-t-lg relative overflow-hidden">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                [Product Image]
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1 hover:text-primary line-clamp-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < Math.floor(product.rating) ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <Badge variant="outline" className="ml-2">
                            {product.rating.toFixed(1)}
                        </Badge>
                    </div>
                </CardContent>
            </Link>
            <CardFooter className="flex justify-between items-center p-4 pt-0">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart();
                    }}
                    aria-label={`Add ${product.name} to cart`}
                >
                    <ShoppingCart className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}