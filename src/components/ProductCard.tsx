"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-40 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm font-bold text-gray-900 mt-1">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-[#0060BC] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#0058B8] transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
