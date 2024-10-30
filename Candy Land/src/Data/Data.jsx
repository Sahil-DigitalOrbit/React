export const Customers = [
  {
    uName: "John Doe",
    uContact: "1234567890",
    uMail: "john.doe@example.com",
    uPassword: "securePass123",
  },
  {
    uName: "Jane Smith",
    uContact: "2345678901",
    uMail: "jane.smith@example.com",
    uPassword: "anotherPass456",
  },
  {
    uName: "Mark Jones",
    uContact: "3456789012",
    uMail: "mark.jones@example.com",
    uPassword: "thirdPass789",
  },
  {
    uName: "Sarah Lee",
    uContact: "4567890123",
    uMail: "sarah.lee@example.com",
    uPassword: "secureMe987",
  },
];
// Brands-----------------------------------------------------------------------------------------------------------
export const Brands = [
  {
    name: "TechCorp",
    image: "https://example.com/images/techcorp.jpg"
  },
  {
    name: "FurniStyle",
    image: "https://example.com/images/furnistyle.jpg"
  },
  {
    name: "FutureGadgets",
    image: "https://example.com/images/futuregadgets.jpg"
  },
  {
    name: "HomeEase",
    image: "https://example.com/images/homeease.jpg"
  },
  {
    name: "LuxDesign",
    image: "https://example.com/images/luxdesign.jpg"
  },
  {
    name: "SparkSound",
    image: "https://example.com/images/sparksound.jpg"
  },
  {
    name: "PlayTime",
    image: "https://example.com/images/playtime.jpg"
  },
  {
    name: "UrbanLiving",
    image: "https://example.com/images/urbanliving.jpg"
  }
];
// categories-----------------------------------------------------------------------------------
export const Categories = [
  {
    name: "Electronics",
    image: "https://example.com/images/electronics.jpg"
  },
  {
    name: "Furniture",
    image: "https://example.com/images/furniture.jpg"
  },
  {
    name: "Home Appliances",
    image: "https://example.com/images/home-appliances.jpg"
  },
  {
    name: "Toys",
    image: "https://example.com/images/toys.jpg"
  }
];

// products-----------------------------------------------------------------------------------------------------------------
export const Products = [
  {
    id: 1,
    category: "Electronics",
    brand: "TechCorp",
    name: "Smartphone X",
    description: "High-end smartphone with amazing display and performance.",
    image: ["https://example.com/images/product1.jpg"],
    price: 999.99,
    publish: true,
    quantity: 100,
    ratings: 4.5
  },
  {
    id: 2,
    category: "Furniture",
    brand: "FurniStyle",
    name: "Leather Sofa",
    description: "Premium leather sofa with elegant design.",
    image: ["https://example.com/images/product2.jpg"],
    price: 799.99,
    publish: true,
    quantity: 20,
    ratings: 4.7
  },
  {
    id: 3,
    category: "Electronics",
    brand: "FutureGadgets",
    name: "Laptop Pro",
    description: "Powerful laptop for professionals with cutting-edge performance.",
    image: ["https://example.com/images/product3.jpg"],
    price: 1299.99,
    publish: true,
    quantity: 50,
    ratings: 4.6
  },
  {
    id: 4,
    category: "Home Appliances",
    brand: "HomeEase",
    name: "Washing Machine",
    description: "Energy-efficient washing machine with quick wash option.",
    image: ["https://example.com/images/product4.jpg"],
    price: 499.99,
    publish: true,
    quantity: 30,
    ratings: 4.3
  },
  {
    id: 5,
    category: "Furniture",
    brand: "LuxDesign",
    name: "Dining Table",
    description: "Modern dining table with a sleek finish.",
    image: ["https://example.com/images/product5.jpg"],
    price: 599.99,
    publish: true,
    quantity: 15,
    ratings: 4.5
  },
  {
    id: 6,
    category: "Electronics",
    brand: "SparkSound",
    name: "Bluetooth Speaker",
    description: "Portable speaker with amazing sound quality.",
    image: ["https://example.com/images/product6.jpg"],
    price: 199.99,
    publish: true,
    quantity: 80,
    ratings: 4.4
  },
  {
    id: 7,
    category: "Toys",
    brand: "PlayTime",
    name: "Remote Control Car",
    description: "Fun and exciting toy for kids of all ages.",
    image: ["https://example.com/images/product7.jpg"],
    price: 49.99,
    publish: true,
    quantity: 120,
    ratings: 4.8
  },
  {
    id: 8,
    category: "Home Appliances",
    brand: "HomeEase",
    name: "Microwave Oven",
    description: "Compact microwave with easy-to-use features.",
    image: ["https://example.com/images/product8.jpg"],
    price: 149.99,
    publish: false,
    quantity: 45,
    ratings: 4.2
  },
  {
    id: 9,
    category: "Furniture",
    brand: "UrbanLiving",
    name: "Office Chair",
    description: "Ergonomic chair with lumbar support for comfortable seating.",
    image: ["https://example.com/images/product9.jpg"],
    price: 159.99,
    publish: true,
    quantity: 60,
    ratings: 4.6
  },
  {
    id: 10,
    category: "Electronics",
    brand: "TechCorp",
    name: "Tablet S",
    description: "Lightweight tablet with high-resolution display.",
    image: ["https://example.com/images/product10.jpg"],
    price: 299.99,
    publish: true,
    quantity: 40,
    ratings: 4.5
  },
  {
    id: 11,
    category: "Toys",
    brand: "PlayTime",
    name: "Building Blocks Set",
    description: "Educational building blocks for children.",
    image: ["https://example.com/images/product11.jpg"],
    price: 29.99,
    publish: true,
    quantity: 200,
    ratings: 4.9
  },
  {
    id: 12,
    category: "Home Appliances",
    brand: "HomeEase",
    name: "Refrigerator",
    description: "Energy-saving refrigerator with spacious compartments.",
    image: ["https://example.com/images/product12.jpg"],
    price: 899.99,
    publish: true,
    quantity: 25,
    ratings: 4.4
  },
  {
    id: 13,
    category: "Furniture",
    brand: "LuxDesign",
    name: "Bookshelf",
    description: "Elegant bookshelf to organize your books and decor.",
    image: ["https://example.com/images/product13.jpg"],
    price: 199.99,
    publish: true,
    quantity: 35,
    ratings: 4.3
  },
  {
    id: 14,
    category: "Electronics",
    brand: "FutureGadgets",
    name: "Smart Watch",
    description: "Advanced smartwatch with multiple fitness tracking features.",
    image: ["https://example.com/images/product14.jpg"],
    price: 149.99,
    publish: true,
    quantity: 100,
    ratings: 4.6
  },
  {
    id: 15,
    category: "Toys",
    brand: "PlayTime",
    name: "Toy Train Set",
    description: "Classic train set for endless playtime.",
    image: ["https://example.com/images/product15.jpg"],
    price: 39.99,
    publish: true,
    quantity: 180,
    ratings: 4.8
  },
  {
    id: 16,
    category: "Home Appliances",
    brand: "HomeEase",
    name: "Vacuum Cleaner",
    description: "Powerful vacuum cleaner with multiple attachments.",
    image: ["https://example.com/images/product16.jpg"],
    price: 299.99,
    publish: true,
    quantity: 55,
    ratings: 4.5
  },
  {
    id: 17,
    category: "Furniture",
    brand: "LuxDesign",
    name: "Coffee Table",
    description: "Stylish coffee table to complement your living room.",
    image: ["https://example.com/images/product17.jpg"],
    price: 99.99,
    publish: true,
    quantity: 70,
    ratings: 4.6
  },
  {
    id: 18,
    category: "Electronics",
    brand: "SparkSound",
    name: "Headphones",
    description: "Noise-canceling headphones with excellent sound quality.",
    image: ["https://example.com/images/product18.jpg"],
    price: 249.99,
    publish: true,
    quantity: 90,
    ratings: 4.7
  },
  {
    id: 19,
    category: "Home Appliances",
    brand: "HomeEase",
    name: "Air Conditioner",
    description: "Energy-efficient air conditioner for cooling large spaces.",
    image: ["https://example.com/images/product19.jpg"],
    price: 749.99,
    publish: true,
    quantity: 20,
    ratings: 4.5
  },
  {
    id: 20,
    category: "Electronics",
    brand: "FutureGadgets",
    name: "Camera Pro",
    description: "Professional camera with high-resolution lens.",
    image: ["https://example.com/images/product20.jpg"],
    price: 1499.99,
    publish: true,
    quantity: 15,
    ratings: 4.8
  }
];
// orders-------------------------------------------------------------------------------------------------------------
export const Orders = [
  {
    id: 1,
    user_id: 1,
    product_id: 1,
    quantity: 1,
  },
  {
    id: 2,
    user_id: 2,
    product_id: 2,
    quantity: 1,
  },
  {
    id: 3,
    user_id: 3,
    product_id: 3,
    quantity: 1,
  },
  {
    id: 4,
    user_id: 1,
    product_id: 4,
    quantity: 1,
  },
  {
    id: 5,
    user_id: 4,
    product_id: 5,
    quantity: 1,
  },
  {
    id: 6,
    user_id: 5,
    product_id: 6,
    quantity: 2,
  },
  {
    id: 7,
    user_id: 2,
    product_id: 7,
    quantity: 3,
  },
  {
    id: 8,
    user_id: 3,
    product_id: 10,
    quantity: 1,
  },
  {
    id: 9,
    user_id: 3,
    product_id: 11,
    quantity: 2,
  },
  {
    id: 10,
    user_id: 4,
    product_id: 8,
    quantity: 1,
  },
  {
    id: 11,
    user_id: 5,
    product_id: 13,
    quantity: 1,
  },
  {
    id: 12,
    user_id: 1,
    product_id: 14,
    quantity: 1,
  },
  {
    id: 13,
    user_id: 2,
    product_id: 15,
    quantity: 1,
  },
  {
    id: 14,
    user_id: 3,
    product_id: 16,
    quantity: 1,
  },
  {
    id: 15,
    user_id: 4,
    product_id: 18,
    quantity: 2,
  },
  {
    id: 16,
    user_id: 5,
    product_id: 20,
    quantity: 1,
  },
];
