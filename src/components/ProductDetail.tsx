"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { Star } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-72 md:h-96 bg-gray-50 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="text-xl font-bold text-gray-900 mt-2">
              ${product.price}
            </p>

            <div className="mt-2">{renderStars(product.rating)}</div>

            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-sm font-semibold text-gray-900">
                {product.category}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <span className="text-sm text-gray-600">Qty:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x border-gray-300 text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-6 bg-[#0060BC] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#0058B8] transition-colors w-fit text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
