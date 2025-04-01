export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    rating: number
    reviews: number
}

export interface ProductListing {
    products: Product[]
    total: number
    page: number
    limit: number
}