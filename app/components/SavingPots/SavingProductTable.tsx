"use client";

import Image from "next/image";
import { useSavingPotsStore, Tier, ProductStatus } from "@/app/store/zustand/useSavingPotsStore"
import EditRatesModal from "./EditRatesModal";
import Pagination from "@/app/components/common/Pagination";


const tierStyle: Record<Tier, string> = {
  Basic:   "bg-gray-1600 text-gray-2300",
  Premium: "bg-rosepink23 text-royalBlue123",
  VIP:     "bg-rosepink23 text-yellow-1100",
};

const statusStyle: Record<ProductStatus, string> = {
  Active:  "bg-rosepink23 text-lightgreen17",
  Pending: "bg-rosepink23 text-yellow-1100",
};

export default function SavingProductTable() {
  const {
    products,
    productPage,
    productPageSize,
    paginatedProducts,
    totalProductPages,
    setProductPage,
    openEdit,
  } = useSavingPotsStore();

  const rows = paginatedProducts();
  const pages = totalProductPages();

  return (
    <>
      <div className="mt-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between py-4 px-5 border-b border-solid border-gray-1000">
          <div>
            <h4 className="text-black-2000 text-lg leading-7 font-bold">
              Savings Product Configuration
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-2300">
              Manage savings tiers and interest rates
            </p>
          </div>
          <button className="text-black-2000 flex items-center gap-2 border border-solid border-gray-1000 px-4 h-9.5 rounded-lg text-sm leading-5 font-medium hover:bg-gray-1600/30 transition-colors">
            <Image src="/icons/sheild-dark-blue.svg" width={16} height={16} alt="shield" className="brightness-0" />
            4-Eyes Approval Log
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="4xl:w-full w-310 text-sm">
            <thead className="bg-gray-1600/30">
              <tr>
                {["Product", "Tier", "Interest Rate", "Min/Max Deposit", "Withdrawal", "AUM", "Status"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold whitespace-nowrap">
                    {h}
                  </th>
                ))}
                <th className="px-4 py-3 text-right uppercase text-xs leading-4 text-gray-2300 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.id} className="border-t border-solid border-gray-1000 hover:bg-gray-1600/10 transition-colors">
                  <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-medium whitespace-nowrap">
                    {item.product}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 h-6 rounded-full text-xs leading-4 font-medium inline-flex items-center justify-center ${tierStyle[item.tier]}`}>
                      {item.tier}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-lightgreen17 text-sm leading-5 font-bold">{item.interest}</div>
                    <div className="text-xs leading-4 font-normal text-gray-2300">
                      Index: {item.index} + Margin: {item.margin}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-2300 text-sm leading-5 font-normal">
                    <div className="flex items-center gap-1">Min: <span className="text-black-2000">{item.minDeposit}</span></div>
                    <div className="flex items-center gap-1">Max: <span className="text-black-2000">{item.maxDeposit}</span></div>
                  </td>
                  <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-normal">{item.withdrawal}</td>
                  <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-medium whitespace-nowrap">{item.aum}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 h-6 rounded-full text-xs leading-4 font-medium inline-flex items-center justify-center ${statusStyle[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() => openEdit(item.id)}
                      className="text-black-2000 text-sm leading-5 font-medium border border-solid border-gray-1000 cursor-pointer hover:bg-gray-1600/30 px-3 h-8.5 rounded-lg flex items-center gap-2.5 ml-auto transition-colors"
                    >
                      <Image src="/images/edit-icon.svg" width={14} height={14} alt="edit" />
                      Edit Rates
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <Pagination
            page={productPage}
            totalPages={pages}
            totalItems={products.length}
            pageSize={productPageSize}
            onPageChange={setProductPage}
          />
        )}
      </div>

      <EditRatesModal/>
    </>
  );
}