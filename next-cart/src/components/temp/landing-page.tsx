'use client'

import Link from "next/link";
import { mockProducts } from "@/components/lib/constant";
import { useEffect, useState } from "react";
import {Product} from "@/components/lib/types";

export default function LandingPage() {
    const [randomProducts, setRandomProducts] = useState<Product[]>([]); // Ensure to define the type here

    useEffect(() => {
        // Shuffle products and select 9 random products
        const shuffleArray = (array: Product[]) => {
            return array.sort(() => Math.random() - 0.5);
        };

        const getRandomProducts = () => {
            const shuffledProducts = shuffleArray([...mockProducts]); // Clone and shuffle products

            return shuffledProducts.slice(0, 6); // Select the first 6 products
        };

        const selectedProducts = getRandomProducts();
        console.log("Selected Random Products: ", selectedProducts);

        setRandomProducts(selectedProducts); // Set state with selected products
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-full mx-auto">
                    <div className="relative z-10 pb-24 bg-white shadow-xl">
                        <div className="absolute inset-0">
                            <div className="h-96 w-full bg-center bg-cover bg-no-repeat rounded-lg" style={{ backgroundImage: "url('/images/product-listings/rainbow-blue.jpg')" }} />
                        </div>
                        <div className="max-w-lg mx-auto pt-12 pb-10 px-4 text-center relative z-20">
                            <h1 className="text-6xl mt-9 font-extrabold text-white sm:text-7xl md:text-5xl">Welcome to Next Cart Online Store</h1>
                            <p className="mt-3 text-lg text-white">
                                Discover amazing products and unbeatable deals.
                            </p>
                            <Link href="/products">
                                <button className="bg-gradient-to-r from-cyan-600 to-green-500 mt-8 w-full text-white py-3 px-4 rounded-md hover:from-cyan-700 hover:to-green-600 transition-all">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="py-12 bg-gray-100 rounded-lg">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-cyan-900">Featured Products</h2>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {randomProducts.map((product) => (
                            <div key={product.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                                <img className="w-full h-120 object-cover" src={product.image} alt={product.name} />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-cyan-800">{product.name}</h3>
                                    <p className="mt-1 text-cyan-600">₦{product.price.toLocaleString()}</p>
                                    <Link href={`/products/${product.id}`}>
                                        <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition duration-200">
                                            View Product
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}