"use client";

import React from "react";
import { useRouter } from "next/navigation"

import {
     Smartphone,
     Sofa,
     Landmark,
     Wifi,
     Eye,

     EyeOff
} from "lucide-react";

type Product = {
     id: string;
     product: string;
     category: "SIM" | "Furniture" | "Banking" | "Internet";
     vendor: string;
     price: string;
     commission: string;
     campaign?: string;
     status: "Live" | "Hidden";
};

const products: Product[] = [
     {
          id: "1",
          product: "Lebara Student SIM",
          category: "SIM",
          vendor: "Lebara Mobile",
          price: "€9.99",
          commission: "15%",
          campaign: "TU Berlin Welcome Bundle",
          status: "Live",
     },
     {
          id: "2",
          product: "IKEA Starter Kit",
          category: "Furniture",
          vendor: "IKEA Germany",
          price: "€199.00",
          commission: "8%",
          campaign: "TU Berlin Welcome Bundle",
          status: "Live",
     },
     {
          id: "3",
          product: "N26 Student Account",
          category: "Banking",
          vendor: "N26 Bank",
          price: "Free",
          commission: "25%",
          status: "Live",
     },
     {
          id: "4",
          product: "Vodafone Home Internet",
          category: "Internet",
          vendor: "Vodafone DE",
          price: "€29.99",
          commission: "12%",
          status: "Live",
     },
     {
          id: "5",
          product: "Premium Desk Set",
          category: "Furniture",
          vendor: "Home24",
          price: "€349.00",
          commission: "10%",
          status: "Hidden",
     },
     {
          id: "6",
          product: "O2 Prepaid SIM",
          category: "SIM",
          vendor: "Telefónica",
          price: "€14.99",
          commission: "18%",
          status: "Live",
     },
     {
          id: "7",
          product: "DKB Student Visa",
          category: "Banking",
          vendor: "DKB Bank",
          price: "Free",
          commission: "20%",
          campaign: "Munich Uni Deal",
          status: "Live",
     },
];

const categoryStyles = {
     SIM: "bg-blue-1000/10 text-blue-1000",
     Furniture: "bg-yellow-1100/10 text-yellow-1100",
     Banking: "bg-green-1600/10 text-green-1600",
     Internet: "bg-purple-1000/10 text-purple-1000",
};

const statusStyles = {
     Live: "bg-green-1600/10 text-green-1600",
     Hidden: "bg-gray-1600 text-gray-1200",
};

export default function ServiceInventory() {
const router = useRouter()

     const getIcon = (category: Product["category"]) => {
          switch (category) {
               case "SIM":
                    return <Smartphone className="w-3.5 h-3.5" />;
               case "Furniture":
                    return <Sofa className="w-3.5 h-3.5" />;
               case "Banking":
                    return <Landmark className="w-3.5 h-3.5" />;
               case "Internet":
                    return <Wifi className="w-3.5 h-3.5" />;
          }
     };

     return (
          <div className="w-full  overflow-auto">
               <table className="2xl:w-full w-325 text-sm">

                    {/* Header */}
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

                    {/* Body */}
                    <tbody>
                         {products.map((item) => (
                              <tr onClick={() => router.push(`/marketplace/vendor`)}
                                   key={item.id}
                                   className="border-t border-gray-1000 hover:bg-gray-50 transition"
                              >

                                   {/* Product */}
                                   <td className="px-4 py-4 text-gray-1200">
                                        {item.product}
                                   </td>

                                   {/* Category */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs inline-flex items-center gap-1 ${categoryStyles[item.category]}`}
                                        >
                                             {getIcon(item.category)}
                                             {item.category}
                                        </span>
                                   </td>

                                   {/* Vendor */}
                                   <td className="px-4 py-4 text-gray-1200">
                                        {item.vendor}
                                   </td>

                                   {/* Price */}
                                   <td className="px-4 py-4 text-blue-2900">
                                        {item.price}
                                   </td>

                                   {/* Commission */}
                                   <td className="px-4 py-4 text-green-3200 font-bold">
                                        {item.commission}
                                   </td>

                                   {/* Campaign */}
                                   <td className="px-4 py-4">
                                        {item.campaign ? (
                                             <span className="px-2.5 py-1 bg-gray-7200 text-gray-7300 rounded-full text-xs">
                                                  {item.campaign}
                                             </span>
                                        ) : (
                                             "-"
                                        )}
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-2.5 py-1 rounded-full text-xs inline-flex items-center gap-1 ${statusStyles[item.status]}`}
                                        >
                                             {item.status === "Live" ? (
                                                  <Eye className="w-3.5 h-3.5" />
                                             ) : (
                                                  <EyeOff className="w-3.5 h-3.5" />
                                             )}
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