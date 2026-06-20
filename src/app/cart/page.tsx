"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/"
          className="bg-[#0060BC] text-white px-6 py-2.5 rounded hover:bg-[#0058B8] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex gap-4"
            >
              <div className="relative w-24 h-24 bg-white rounded shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/product/${item.product.id}`}
                    className="font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {item.product.category}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      -
                    </button>
                    <span className="px-3 py-0.5 border-x border-gray-300 text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <p className="font-bold text-gray-900">
                  ${item.product.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 border-b border-gray-200 pb-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-600">
                  {item.product.name} × {item.quantity}
                </span>
                <span>${item.product.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-2">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg">${getCartTotal()}</span>
          </div>

          <button className="w-full mt-6 bg-[#0060BC] text-white font-medium py-2.5 rounded hover:bg-[#0058B8] transition-colors">
            Proceed to Checkout
          </button>

          <Link
            href="/"
            className="block text-center text-sm text-blue-600 hover:underline mt-3"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
