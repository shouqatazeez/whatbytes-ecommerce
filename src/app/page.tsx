import { Suspense } from "react";
import { products } from "@/data/products";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const category = (params.category as string) || "All";
  const maxPrice = Number(params.maxPrice) || 5000;
  const search = (params.search as string) || "";

  let filteredProducts = products;

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price <= maxPrice
  );

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-5">
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
