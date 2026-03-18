"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Smartphone, Sofa, Landmark, Wifi, Eye, EyeOff } from "lucide-react";
import { useMarketplaceStore, ProductCategory } from "@/app/store/zustand/useMarketplaceStore";

const categoryStyles = {
  SIM:       "bg-blue-1000/10 text-blue-1000",
  Furniture: "bg-yellow-1100/10 text-yellow-1100",
  Banking:   "bg-green-1600/10 text-green-1600",
  Internet:  "bg-purple-1000/10 text-purple-1000",
};

const statusStyles = {
  Live:   "bg-green-1600/10 text-green-1600",
  Hidden: "bg-gray-1600 text-gray-1200",
};

const getIcon = (category: ProductCategory) => {
  switch (category) {
    case "SIM":       return <Smartphone className="w-3.5 h-3.5" />;
    case "Furniture": return <Sofa       className="w-3.5 h-3.5" />;
    case "Banking":   return <Landmark   className="w-3.5 h-3.5" />;
    case "Internet":  return <Wifi       className="w-3.5 h-3.5" />;
  }
};

export default function ServiceInventory() {
  const router = useRouter();
  const { products } = useMarketplaceStore();

  return (
    <div className="w-full overflow-auto">
      <table className="2xl:w-full w-325 text-sm">
        <thead className="bg-gray-6900/50 border-b border-gray-1000 text-gray-1200 uppercase text-xs">
          <tr>
            <th className="px-4 py-4 text-left">Product / Service</th>
            <th className="px-4 py-4 text-left">Category</th>
            <th className="px-4 py-4 text-left">Vendor</th>
            <th className="px-4 py-4 text-left">Price (EUR)</th>
            <th className="px-4 py-4 text-left">Commission %</th>
            <th className="px-4 py-4 text-left">Campaign</th>
            <th className="px-4 py-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item.id}
              onClick={() => router.push(`/marketplace/vendor`)}
              className="border-t border-gray-1000 hover:bg-gray-50 transition cursor-pointer"
            >
              <td className="px-4 py-4 text-gray-1200">{item.product}</td>
              <td className="px-4 py-4">
                <span className={`px-3 py-1 rounded-full text-xs inline-flex items-center gap-1 ${categoryStyles[item.category]}`}>
                  {getIcon(item.category)}
                  {item.category}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-1200">{item.vendor}</td>
              <td className="px-4 py-4 text-blue-2900">{item.price}</td>
              <td className="px-4 py-4 text-green-3200 font-bold">{item.commission}</td>
              <td className="px-4 py-4">
                {item.campaign ? (
                  <span className="px-2.5 py-1 bg-gray-7200 text-gray-7300 rounded-full text-xs">
                    {item.campaign}
                  </span>
                ) : "-"}
              </td>
              <td className="px-4 py-4">
                <span className={`px-2.5 py-1 rounded-full text-xs inline-flex items-center gap-1 ${statusStyles[item.status]}`}>
                  {item.status === "Live"
                    ? <Eye    className="w-3.5 h-3.5" />
                    : <EyeOff className="w-3.5 h-3.5" />
                  }
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}