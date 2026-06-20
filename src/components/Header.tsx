"use client";

import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { cartItems } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-[#0458A8] text-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="text-3xl font-bold shrink-0">
          Logo
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/80" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg text-sm text-white placeholder-white/70 bg-transparent border border-white/40 focus:outline-none focus:border-white/60"
            />
          </div>
        </form>

        <Link
          href="/cart"
          className="flex items-center gap-2 bg-[#002858] hover:bg-[#001f45] px-5 py-3 rounded-lg text-sm font-semibold transition-colors shrink-0"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="bg-white text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
