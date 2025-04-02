'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/utils/useCart'
import { Badge } from '@/components/components/ui/badge'
import {Button} from "@/components/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/components/ui/dropdown-menu";

export default function Header() {
    const { totalItems } = useCart()

    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-cyan-800">
                    NextCart
                </Link>

                <nav className="flex items-center space-x-4">
                    <Button asChild variant="ghost">
                        <Link href="#">Log in</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/products">Products</Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                {totalItems > 0 && (
                                    <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0
                                    bg-gradient-to-r from-cyan-600 to-green-500 hover:from-cyan-700 hover:to-green-600 transition-all">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href="/cart">View Cart</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/checkout">Checkout</Link>
                            </DropdownMenuItem>
                            {/*<DropdownMenuItem asChild>*/}
                            {/*    <Link href="/logout">Logout</Link>*/}
                            {/*</DropdownMenuItem>*/}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </div>
        </header>
    )
}