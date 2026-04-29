const express = require("express");

const app = express();

// function middleware(req,res,next)
// {
//     console.log(req.url)
//     next()
// }

// app.use(middleware)

app.use((req,res,next) => { console.log("Data Received",new Date()); next()})

// Home
app.get("/", async (req, res) => {
     res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Home</title>
        <style>
            body {
                margin: 0;
                font-family: Arial;
            }
            nav {
                background: #333;
                padding: 15px;
                text-align: center;
            }
            nav a {
                color: white;
                margin: 15px;
                text-decoration: none;
                font-size: 18px;
            }
            h1 {
                text-align: center;
                margin-top: 50px;
            }
        </style>
    </head>
    <body>

        <nav>
            <a href="/">Home</a>
            <a href="/Orders">Orders</a>
            <a href="/Profile">Profile</a>
            <a href="/Electronics_Items">Electronics</a>
            <a href="/About">About</a>
        </nav>

        <h1>Welcome to Store</h1>

    </body>
    </html>
    `);
});

// Orders
app.get("/Orders", (req, res) => {
     const orders = [
        { orderId: 101, product: "Laptop", price: 55000, status: "Delivered" },
        { orderId: 102, product: "Headphones", price: 2000, status: "Shipped" },
        { orderId: 103, product: "Smartphone", price: 30000, status: "Processing" },
        { orderId: 104, product: "Keyboard", price: 1500, status: "Delivered" },
        { orderId: 105, product: "Mouse", price: 800, status: "Cancelled" },
        { orderId: 106, product: "Monitor", price: 12000, status: "Delivered" },
        { orderId: 107, product: "Printer", price: 7000, status: "Shipped" },
        { orderId: 108, product: "Tablet", price: 18000, status: "Processing" },
        { orderId: 109, product: "Smartwatch", price: 5000, status: "Delivered" },
        { orderId: 110, product: "Camera", price: 25000, status: "Shipped" },
        { orderId: 111, product: "Speaker", price: 3500, status: "Delivered" },
        { orderId: 112, product: "Power Bank", price: 1200, status: "Processing" },
        { orderId: 113, product: "Charger", price: 600, status: "Delivered" },
        { orderId: 114, product: "Router", price: 2200, status: "Shipped" },
        { orderId: 115, product: "External HDD", price: 4500, status: "Delivered" },
        { orderId: 116, product: "USB Drive", price: 700, status: "Cancelled" },
        { orderId: 117, product: "Gaming Console", price: 40000, status: "Processing" },
        { orderId: 118, product: "VR Headset", price: 15000, status: "Shipped" },
        { orderId: 119, product: "Microphone", price: 2500, status: "Delivered" },
        { orderId: 120, product: "Graphics Card", price: 60000, status: "Processing" }
    ];
    res.json(orders);
});

// Profile
app.get("/Profile", async (req, res) => {
    const profiles = [
        { userId: 1, name: "Amit Sharma", age: 21, email: "amit@gmail.com", city: "Pune" },
        { userId: 2, name: "Rahul Patil", age: 22, email: "rahul@gmail.com", city: "Mumbai" },
        { userId: 3, name: "Sneha Joshi", age: 20, email: "sneha@gmail.com", city: "Nagpur" },
        { userId: 4, name: "Priya Desai", age: 23, email: "priya@gmail.com", city: "Surat" },
        { userId: 5, name: "Karan Mehta", age: 24, email: "karan@gmail.com", city: "Delhi" },
        { userId: 6, name: "Neha Gupta", age: 21, email: "neha@gmail.com", city: "Jaipur" },
        { userId: 7, name: "Rohit Verma", age: 22, email: "rohit@gmail.com", city: "Bangalore" },
        { userId: 8, name: "Anjali Singh", age: 20, email: "anjali@gmail.com", city: "Lucknow" },
        { userId: 9, name: "Vikas Yadav", age: 23, email: "vikas@gmail.com", city: "Hyderabad" },
        { userId: 10, name: "Pooja Kulkarni", age: 21, email: "pooja@gmail.com", city: "Pune" }
    ];

    res.json(profiles);
});

// About
app.get("/About", async (req, res) => {
     const about = {
        companyName: "TechKart",
        description: "TechKart is an online platform that provides a wide range of electronic products at affordable prices.",
        mission: "To deliver quality products with fast and reliable service.",
        vision: "To become India's most trusted e-commerce platform.",
        founded: 2024,
        headquarters: "Pune, India",
        services: ["Online Shopping", "Fast Delivery", "Customer Support"],
        contactEmail: "support@techkart.com"
    };

    res.json(about);
});

// Electronics Items
app.get("/Electronics_Items", async (req, res) => {
    const products = [
        { id: 1, name: "Laptop", brand: "Dell", price: 55000, category: "Computers", stock: 10 },
        { id: 2, name: "Smartphone", brand: "Samsung", price: 30000, category: "Mobiles", stock: 25 },
        { id: 3, name: "Headphones", brand: "Sony", price: 2000, category: "Accessories", stock: 50 },
        { id: 4, name: "Keyboard", brand: "Logitech", price: 1500, category: "Accessories", stock: 40 },
        { id: 5, name: "Mouse", brand: "HP", price: 800, category: "Accessories", stock: 60 },
        { id: 6, name: "Monitor", brand: "LG", price: 12000, category: "Displays", stock: 15 },
        { id: 7, name: "Printer", brand: "Canon", price: 7000, category: "Office", stock: 12 },
        { id: 8, name: "Tablet", brand: "Apple", price: 45000, category: "Mobiles", stock: 8 },
        { id: 9, name: "Smartwatch", brand: "Noise", price: 5000, category: "Wearables", stock: 30 },
        { id: 10, name: "Camera", brand: "Nikon", price: 25000, category: "Photography", stock: 7 },
        { id: 11, name: "Speaker", brand: "JBL", price: 3500, category: "Audio", stock: 20 },
        { id: 12, name: "Power Bank", brand: "Mi", price: 1200, category: "Accessories", stock: 45 },
        { id: 13, name: "Charger", brand: "Boat", price: 600, category: "Accessories", stock: 70 },
        { id: 14, name: "Router", brand: "TP-Link", price: 2200, category: "Networking", stock: 18 },
        { id: 15, name: "External HDD", brand: "Seagate", price: 4500, category: "Storage", stock: 14 },
        { id: 16, name: "USB Drive", brand: "SanDisk", price: 700, category: "Storage", stock: 55 },
        { id: 17, name: "Gaming Console", brand: "Sony", price: 40000, category: "Gaming", stock: 5 },
        { id: 18, name: "VR Headset", brand: "Meta", price: 15000, category: "Gaming", stock: 9 },
        { id: 19, name: "Microphone", brand: "Blue", price: 2500, category: "Audio", stock: 22 },
        { id: 20, name: "Graphics Card", brand: "NVIDIA", price: 60000, category: "Computers", stock: 6 }
    ];

    res.json(products);
});

app.listen(4000, () => console.log(`Server started on 4000!!`));

