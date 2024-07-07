
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    imageUrl: string;
    rating: number;
};

const products: Product[] = [
    {
        id: 1,
        name: "Smartphone XYZ",
        description: "A high-end smartphone with a sleek design and powerful features.",
        price: 999.99,
        category: "Electronics",
        stock: 50,
        imageUrl: '/images/header.png',
        rating: 4.5,
    },
    {
        id: 2,
        name: "Laptop ABC",
        description: "A powerful laptop suitable for all your computing needs.",
        price: 1499.99,
        category: "Computers",
        stock: 30,
        imageUrl: '/images/header.png',
        rating: 4.7,
    },
    {
        id: 3,
        name: "Wireless Headphones",
        description: "Comfortable and high-quality wireless headphones.",
        price: 199.99,
        category: "Accessories",
        stock: 100,
        imageUrl: '/images/header.png',
        rating: 4.2,
    },
    {
        id: 4,
        name: "Smart Watch",
        description: "A smart watch with various health tracking features.",
        price: 299.99,
        category: "Wearables",
        stock: 75,
        imageUrl: '/images/header.png',
        rating: 4.3,
    },
    // {
    //     id: 5,
    //     name: "4K Ultra HD TV",
    //     description: "A 55-inch 4K Ultra HD TV with vibrant colors and sharp details.",
    //     price: 799.99,
    //     category: "Electronics",
    //     stock: 20,
    //     imageUrl: '/images/header.png',
    //     rating: 4.8,
    // },
    // {
    //     id: 6,
    //     name: "Bluetooth Speaker",
    //     description: "A portable Bluetooth speaker with excellent sound quality.",
    //     price: 99.99,
    //     category: "Accessories",
    //     stock: 150,
    //     imageUrl: '/images/header.png',
    //     rating: 4.6,
    // },
    // {
    //     id: 7,
    //     name: "Gaming Console",
    //     description: "The latest gaming console with incredible performance.",
    //     price: 499.99,
    //     category: "Gaming",
    //     stock: 40,
    //     imageUrl: '/images/header.png',
    //     rating: 4.9,
    // },
    // {
    //     id: 8,
    //     name: "Digital Camera",
    //     description: "A digital camera with high resolution and various features.",
    //     price: 599.99,
    //     category: "Photography",
    //     stock: 25,
    //     imageUrl: '/images/header.png',
    //     rating: 4.4,
    // },
    // {
    //     id: 9,
    //     name: "Fitness Tracker",
    //     description: "A fitness tracker to monitor your daily activities and health.",
    //     price: 129.99,
    //     category: "Wearables",
    //     stock: 80,
    //     imageUrl: '/images/header.png',
    //     rating: 4.1,
    // },
    // {
    //     id: 10,
    //     name: "Tablet XYZ",
    //     description: "A versatile tablet with a large screen and powerful processor.",
    //     price: 399.99,
    //     category: "Computers",
    //     stock: 60,
    //     imageUrl:'/images/header.png',
    //     rating: 4.5,
    // },
];

export default products;
