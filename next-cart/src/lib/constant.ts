import { Product } from './types'

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 199.99,
        image: '/images/headphones.jpg',
        category: 'Electronics',
        rating: 4.5,
        reviews: 120,
    },
    {
        id: '2',
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health monitoring',
        price: 249.99,
        image: '/images/smartwatch.jpg',
        category: 'Electronics',
        rating: 4.2,
        reviews: 85,
    },
    {
        id: '3',
        name: 'Running Shoes',
        description: 'Comfortable running shoes with great support',
        price: 89.99,
        image: '/images/shoes.jpg',
        category: 'Sports',
        rating: 4.7,
        reviews: 210,
    },
    // Add more products as needed
]