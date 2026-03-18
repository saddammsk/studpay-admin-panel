'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import Image from "next/image";
import { Store } from "lucide-react";
import DashboardStats2 from "@/app/components/DashboardStats2";
import ServiceInventory from "@/app/components/ServiceInventory";
import OrdersTable from "@/app/components/OrdersTable";
import AddProductModal from "@/app/components/MarketPlace/AddProductModal";

export default function MarketplacePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div>
          <div className="flex mb-6 items-center flex-wrap gap-4 justify-between">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-blue-2800/10 rounded-lg w-11 h-11">
                <Store className="w-5 h-5 text-blue-2800" />
              </div>
              <div>
                <h1 className="text-[22px] font-bold leading-7 text-black-2000">
                  Marketplace Command Center
                </h1>
                <p className="text-xs leading-4 font-normal text-gray-6400">
                  Manage vendors, products, and student orders
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
            >
              <Image src="/images/refresh-icon.svg" width={16} height={16} alt="" />
              Refresh Data
            </Link>
          </div>

          <DashboardStats2 />

          <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
            <div className="flex py-7 px-3 items-center justify-between">
              <h6 className="text-lg font-bold text-blue-2900">Service Inventory</h6>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
              >
                + Add Product
              </button>
            </div>
            <ServiceInventory />
          </div>

          <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
            <div className="flex py-7 px-3 items-center justify-between">
              <h6 className="text-lg font-bold text-blue-2900">Recent Orders Ledger</h6>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
              >
                View All Orders
              </Link>
            </div>
            <OrdersTable />
          </div>
        </div>
      </div>

      <AddProductModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}