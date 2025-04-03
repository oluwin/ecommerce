import { Category } from './types';

export const categories: Category[] = [
    {
        id: "1",
        name: "Electronics",
        slug: "electronics",
        count: 120
    },
    {
        id: "2",
        name: "Home Appliances",
        slug: "home-appliances",
        count: 80,
        subcategories: [
            {
                id: "3",
                name: "Kitchen Appliances",
                slug: "kitchen-appliances",
                count: 35
            },
            {
                id: "4",
                name: "Cleaning Appliances",
                slug: "cleaning-appliances",
                count: 45
            }
        ]
    },
    {
        id: "5",
        name: "Security Systems",
        slug: "security-systems",
        count: 50,
        subcategories: [
            {
                id: "6",
                name: "Surveillance Cameras",
                slug: "surveillance-cameras",
                count: 20,
                subcategories: [
                    {
                        id: "7",
                        name: "Indoor Cameras",
                        slug: "indoor-cameras",
                        count: 10
                    },
                    {
                        id: "8",
                        name: "Outdoor Cameras",
                        slug: "outdoor-cameras",
                        count: 10
                    }
                ]
            },
            {
                id: "9",
                name: "Access Control Systems",
                slug: "access-control-systems",
                count: 30
            }
        ]
    },
    {
        id: "10",
        name: "Metering Solutions",
        slug: "metering-solutions",
        count: 100,
        subcategories: [
            {
                id: "11",
                name: "Smart Meters",
                slug: "smart-meters",
                count: 40
            },
            {
                id: "12",
                name: "Water Meters",
                slug: "water-meters",
                count: 30
            },
            {
                id: "13",
                name: "Gas Meters",
                slug: "gas-meters",
                count: 25
            },
        ]
    },
    {
        id: "14",
        name: "Furniture",
        slug: "furniture",
        count: 90,
        subcategories: [
            {
                id: "15",
                name: "Living Room Furniture",
                slug: "living-room-furniture",
                count: 50
            },
            {
                id: "16",
                name: "Bedroom Furniture",
                slug: "bedroom-furniture",
                count: 40
            }
        ]
    },
    {
        id: "17",
        name: "Clothing",
        slug: "clothing",
        count: 200,
        subcategories: [
            {
                id: "18",
                name: "Men's Wear",
                slug: "mens-wear",
                count: 100
            },
            {
                id: "19",
                name: "Women's Wear",
                slug: "womens-wear",
                count: 100
            }
        ]
    },
    {
        id: "20",
        name: "Toys",
        slug: "toys",
        count: 60,
        subcategories: [
            {
                id: "21",
                name: "Educational Toys",
                slug: "educational-toys",
                count: 30
            },
            {
                id: "22",
                name: "Outdoor Toys",
                slug: "outdoor-toys",
                count: 30
            }
        ]
    },
    {
        id: "23",
        name: "Books",
        slug: "books",
        count: 150,
        subcategories: [
            {
                id: "24",
                name: "Fiction",
                slug: "fiction",
                count: 75
            },
            {
                id: "25",
                name: "Non-Fiction",
                slug: "non-fiction",
                count: 75
            }
        ]
    },
    {
        id: "26",
        name: "Health & Beauty",
        slug: "health-beauty",
        count: 110,
        subcategories: [
            {
                id: "27",
                name: "Skincare",
                slug: "skincare",
                count: 60
            },
            {
                id: "28",
                name: "Makeup",
                slug: "makeup",
                count: 50
            }
        ]
    },
    {
        id: "29",
        name: "Pet Supplies",
        slug: "pet-supplies",
        count: 70,
        subcategories: [
            {
                id: "30",
                name: "Dog Supplies",
                slug: "dog-supplies",
                count: 40
            },
            {
                id: "31",
                name: "Cat Supplies",
                slug: "cat-supplies",
                count: 30
            }
        ]
    }
];