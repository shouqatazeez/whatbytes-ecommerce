"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const currentMaxPrice = Number(searchParams.get("maxPrice")) || 5000;

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/?${params.toString()}`);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    if (value >= 1000) {
      params.delete("maxPrice");
    } else {
      params.set("maxPrice", value.toString());
    }
    router.push(`/?${params.toString()}`);
  };

  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) || 0;
    const params = new URLSearchParams(searchParams.toString());
    if (value >= 5000) {
      params.delete("maxPrice");
    } else {
      params.set("maxPrice", value.toString());
    }
    router.push(`/?${params.toString()}`);
  };

  const sliderValue = Math.min(currentMaxPrice, 1000);

  return (
    <aside className="w-full lg:w-52 shrink-0 space-y-5">
      <div className="bg-[#0658A8] rounded-xl p-5 text-white">
        <h2 className="font-bold text-lg mb-3">Filters</h2>

        <h3 className="font-bold text-sm mb-2">Category</h3>
        <div className="space-y-1.5">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={currentCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 appearance-none rounded-full border-2 border-white checked:bg-white checked:border-white relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full checked:after:bg-blue-600"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>

        <h3 className="font-bold text-sm mt-4 mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full accent-white"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-bold text-base mb-2">Category</h3>
        <div className="space-y-1.5">
          {categories.map((category) => (
            <label
              key={`cat2-${category}`}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category2"
                value={category}
                checked={currentCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 appearance-none rounded-full border-2 border-gray-400 checked:border-blue-600 checked:bg-blue-600 relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full checked:after:bg-white"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>

        <h3 className="font-bold text-base mt-4 mb-2">Price</h3>
        <input
          type="number"
          value={currentMaxPrice}
          onChange={handlePriceInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
        />
      </div>
    </aside>
  );
}
