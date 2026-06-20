export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Running Shoes",
    price: 89,
    category: "Clothing",
    image: "/images/running-shoes.jpg",
    description:
      "High-performance running shoes with cushioned sole for maximum comfort during long runs. Features breathable mesh upper and durable rubber outsole.",
    rating: 4,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 149,
    category: "Electronics",
    image: "/images/wireless-headphones.jpg",
    description:
      "Premium wireless headphones with active noise cancellation. 30-hour battery life, comfortable over-ear design, and crystal-clear audio quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Backpack",
    price: 129,
    category: "Clothing",
    image: "/images/backpack.jpg",
    description:
      "Durable and stylish backpack with multiple compartments. Water-resistant material, padded laptop sleeve, and ergonomic shoulder straps.",
    rating: 4,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    description:
      "Feature-packed smartwatch with heart rate monitor, GPS tracking, and 7-day battery life. Water-resistant and compatible with iOS and Android.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "/images/sunglasses.jpg",
    description:
      "Polarized sunglasses with UV400 protection. Lightweight titanium frame with scratch-resistant lenses for all-day comfort.",
    rating: 3,
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "/images/digital-camera.jpg",
    description:
      "Professional-grade digital camera with 24MP sensor, 4K video recording, and interchangeable lens system. Perfect for photography enthusiasts.",
    rating: 5,
  },
  {
    id: 7,
    name: "T-Shirt",
    price: 29,
    category: "Clothing",
    image: "/images/tshirt.jpg",
    description:
      "Premium cotton t-shirt with a comfortable fit. Available in multiple colors. Machine washable and retains shape after multiple washes.",
    rating: 4,
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "/images/smartphone.jpg",
    description:
      "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    rating: 5,
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 59,
    category: "Home",
    image: "/images/desk-lamp.jpg",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature. Touch control, USB charging port, and flexible gooseneck design.",
    rating: 4,
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 79,
    category: "Electronics",
    image: "/images/bluetooth-speaker.jpg",
    description:
      "Portable Bluetooth speaker with 360-degree sound. Waterproof design, 12-hour battery life, and built-in microphone for hands-free calls.",
    rating: 4,
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 39,
    category: "Home",
    image: "/images/yoga-mat.jpg",
    description:
      "Eco-friendly yoga mat with non-slip surface. Extra thick for joint comfort, lightweight and easy to carry with included strap.",
    rating: 4,
  },
  {
    id: 12,
    name: "Coffee Maker",
    price: 89,
    category: "Home",
    image: "/images/coffee-maker.jpg",
    description:
      "Programmable coffee maker with 12-cup capacity. Built-in grinder, auto-start timer, and keep-warm function for fresh coffee anytime.",
    rating: 5,
  },
];
