"use client";

import {
  Star, Clock,
  Search, MoreVertical, Calendar, Gift, CircleCheck,
} from "lucide-react";

import TopBar from "@/app/components/common/TopBar";
import ProgressBar from "@/app/components/ProgressBar";
import ToggleSwitch from "@/app/components/ui/ToggleSwitch";
import Link from "next/link";
import { useVendorStore } from "@/app/store/zustand/useVendorStore";

export default function VendorPage() {
  const {
    payouts,
    search,
    setSearch,
    toggleProduct,
    filteredProducts,
  } = useVendorStore();

  const products = filteredProducts();

  return (
    <div>
      <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div>
          <div className="grid grid-cols-12 gap-6">

            <div className="2xl:col-span-3 xl:col-span-6 col-span-12 space-y-4">

              <div className="bg-white border border-gray-1000 flex gap-4 p-4 rounded-xl shadow-18xl">
                <div>
                  <img className="rounded-xl" src="/images/Berlin-Telecom.png" alt="" />
                </div>
                <div>
                  <h2 className="font-bold leading-7 text-blue-1300 text-lg">Berlin Telecom</h2>
                  <p className="text-sm text-gray-1200">SIM Cards & Mobile Plans</p>
                  <span className="mt-2 inline-flex bg-lightgreen17 w-fit text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-1000 p-4 rounded-xl shadow-18xl">
                <h3 className="font-bold leading-5 mb-2 text-sm text-blue-1300">Trust Metrics</h3>
                <div className="flex items-center text-sm mb-4 gap-2">
                  <Star size={16} className="text-yellow-1100" />
                  <span className="text-gray-1200 text-sm font-normal leading-5 block">Student Rating</span>
                  <div className="ml-auto text-end">
                    <span className="font-normal text-xs leading-4 font-normal block text-gray-1200">
                      <span className="text-blue-1300 text-lg font-bold">4.7</span> / 5
                    </span>
                    <h6 className="text-[10px] leading-[15px] text-gray-1200">1,248 reviews</h6>
                  </div>
                </div>
                <ProgressBar value={70} barColor="bg-gray-7400" />
                <div className="flex text-sm items-center text-gray-1200 mt-4 gap-2">
                  <Clock size={16} />
                  Avg Fulfillment
                  <span className="ml-auto text-blue-1300 font-medium">2.3 hours</span>
                </div>
                <div className="border-t border-gray-1000 flex items-center justify-between mt-4 pt-3">
                  <p className="text-xs text-gray-1200">Member since</p>
                  <p className="text-xs text-blue-1300 font-medium">March 2023</p>
                </div>
              </div>

              <div className="bg-white border border-gray-1000 p-4 rounded-xl shadow-18xl">
                <div className="flex items-center mb-2 gap-2">
                  <img src="/images/document-icon2.svg" alt="" />
                  <h3 className="font-bold text-sm text-blue-1300">KYB Documents</h3>
                </div>
                <div className="flex justify-between mb-2 text-sm items-center bg-gray-2100/50 rounded-lg py-2 px-3">
                  <div>
                    <h6 className="text-sm font-medium text-blue-1300 leading-5">Business Registration</h6>
                    <span className="text-[10px] font-normal text-gray-1200 leading-5 block">Expires: Dec 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white rounded-full inline-block py-1 px-3 bg-lightgreen17 text-[10px] font-bold">Verified</span>
                    <Link href="/"><img src="/images/export-icon2.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="flex justify-between mb-2 text-sm items-center bg-gray-2100/50 rounded-lg py-2 px-3">
                  <div>
                    <h6 className="text-sm font-medium text-blue-1300 leading-5">Tax Certificate</h6>
                    <span className="text-[10px] font-normal text-gray-1200 leading-5 block">Expires: Mar 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white rounded-full inline-block py-1 px-3 bg-lightgreen17 text-[10px] font-bold">Verified</span>
                    <Link href="/"><img src="/images/export-icon2.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="flex justify-between text-sm items-center bg-gray-2100/50 rounded-lg py-2 px-3">
                  <div>
                    <h6 className="text-sm font-medium text-blue-1300 leading-5">Data Protection Compliance</h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white rounded-full inline-block py-1 px-3 bg-yellow-1100 text-[10px] font-bold">Pending</span>
                    <Link href="/"><img src="/images/export-icon2.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-6 col-span-12">
              <div className="bg-white rounded-xl shadow p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex justify-center gap-2 items-center">
                    <img src="/images/cube-icon.svg" alt="" />
                    <h3 className="font-bold leading-5 text-sm text-blue-1300">Product Catalog</h3>
                  </div>
                  <span className="text-xs font-bold text-blue-1300 rounded-full py-0.5 px-2.5 bg-gray-2100">
                    {products.length} Products
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center flex-1 bg-gray-1600 h-8 border border-gray-1000 rounded-md px-3 py-2">
                    <Search size={16} className="text-gray-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="ml-2 text-sm font-normal text-gray-1200 placeholder:text-gray-1200 outline-none w-full bg-gray-1600 rounded-md"
                      placeholder="Search products..."
                    />
                  </div>
                  <Link href="" className="bg-gray-1600 rounded-md border border-gray-1000 w-8 h-8 flex items-center justify-center">
                    <img src="/images/filter.svg" alt="" />
                  </Link>
                </div>

                <div className="space-y-3">
                  {products.length === 0 ? (
                    <p className="text-sm text-center text-gray-1200 py-6">
                      No products match your search.
                    </p>
                  ) : (
                    products.map((product) => (
                      <div
                        key={product.id}
                        className="border border-gray-1000 bg-white rounded-lg p-3 flex items-center justify-between"
                      >
                        <div className="flex flex-wrap gap-3">
                          <img
                            src={product.image}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div>
                            <div className="flex mb-1 items-center gap-2">
                              <h4 className="font-medium text-sm leading-5 text-blue-1300">
                                {product.name}
                              </h4>
                              {product.bundle && (
                                <span className="text-xs bg-lightgreen17 text-white flex items-center gap-1 px-2 py-0.5 rounded-full">
                                  <Gift size={12} className="text-white" /> Bundle
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-normal leading-4 mb-2 text-gray-1200">
                              {product.description}
                            </p>
                            <div className="flex text-xs gap-4 text-gray-1200 mt-1">
                              <span>Price: <span className="text-sm font-bold text-blue-1300">{product.price}</span></span>
                              <span>Commission: <span className="text-sm font-medium text-lightgreen17">{product.commission}</span></span>
                              <span>Sales: <span className="text-sm font-medium text-blue-1300">{product.sales}</span></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MoreVertical size={18} />
                          <ToggleSwitch
                            enabled={product.enabled}
                            setEnabled={() => toggleProduct(product.id)}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="2xl:col-span-3 col-span-12 space-y-6">

              <div className="border border-gray-1000 bg-white rounded-lg p-3">
                <div className="flex gap-2 items-center mb-2">
                  <img src="/images/trend-up4.svg" className="w-4 h-4" alt="" />
                  <h3 className="font-bold leading-5 text-sm text-blue-1300">Sales Summary</h3>
                </div>
                <div className="bg-lightgreen17/10 rounded-xl p-4">
                  <p className="text-xs font-normal mb-1.5 text-gray-1200">Total Sales (All Time)</p>
                  <div className="flex items-center gap-2">
                    <p className="4xl:text-2xl text-xl leading-8 text-blue-1300 font-bold">€187,542.80</p>
                    <div className="flex items-center gap-1 text-[10px] leading-[15px] text-lightgreen17 w-fit bg-lightgreen17/10 rounded-full py-0.5 px-2.5">
                      <img src="/images/arrow-up.svg" className="w-2.5 h-2.5" alt="" /> +12.5%
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-3 gap-3">
                  <div className="bg-gray-2100/50 rounded-lg p-3">
                    <span className="text-[10px] block font-normal leading-[15px] text-gray-1200">StudPay Share</span>
                    <h6 className="text-sm font-bold leading-5 text-blue-1300">€18,754.28</h6>
                  </div>
                  <div className="bg-gray-2100/50 rounded-lg p-3">
                    <span className="text-[10px] block font-normal leading-[15px] text-gray-1200">Vendor Share</span>
                    <h6 className="text-sm font-bold leading-5 text-lightgreen17">€168,788.52</h6>
                  </div>
                </div>
              </div>

              <div className="border border-gray-1000 bg-white rounded-lg p-3">
                <div className="flex gap-2 items-center mb-2">
                  <Calendar size={16} className="text-blue-1300" />
                  <h3 className="font-bold leading-5 text-sm text-blue-1300">Payout Schedule</h3>
                </div>
                <div className="bg-lightgreen17/10 mb-4 flex items-start justify-between rounded-xl p-4">
                  <div>
                    <p className="text-xs font-normal mb-1.5 text-gray-1200">Next Payout</p>
                    <p className="4xl:text-xl text-lg leading-8 text-lightgreen17 font-bold">€12,450.00</p>
                    <p className="text-xs font-normal text-gray-1200">Feb 15, 2026</p>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-2.5 font-bold text-[10px] bg-yellow-1100/10 rounded-full leading-[15px] text-yellow-1100">
                    <Clock size={16} className="text-yellow-1100" /> Scheduled
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-1200 font-medium">Recent Payouts</p>
                  {payouts.map((p) => (
                    <div
                      key={p.id}
                      className="flex justify-between text-sm bg-gray-2100/30 py-2 px-3 rounded-lg"
                    >
                      <div>
                        <span className="text-sm font-medium leading-5 text-blue-1300">{p.amount}</span>
                        <span className="text-gray-1200 block text-[10px] leading-[15px]">{p.date}</span>
                      </div>
                      <span className="text-[10px] h-fit leading-[15px] font-bold text-lightgreen17 rounded-full py-0.5 px-2.5 bg-lightgreen17/10">
                        Completed
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-1000 bg-white rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center mb-2">
                    <img src="/images/building-icon2.svg" alt="" />
                    <h3 className="font-bold leading-5 text-sm text-blue-1300">Bank Details</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full inline-flex items-center gap-1 text-[10px] text-lightgreen17 bg-lightgreen17/10">
                    <CircleCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
                <div className="bg-gray-2100/30 rounded-lg p-3">
                  <div className="pb-3 border-b border-gray-1000">
                    <span className="block text-[10px] font-normal leading-[15px] text-gray-1200">Bank Name</span>
                    <p className="text-sm font-medium leading-5 text-blue-1300">Deutsche Bank</p>
                  </div>
                  <div className="py-3 border-b border-gray-1000">
                    <span className="block text-[10px] font-normal leading-[15px] text-gray-1200">Account Holder</span>
                    <p className="text-sm font-medium leading-5 text-blue-1300">Berlin Telecom GmbH</p>
                  </div>
                  <div className="py-3 border-b border-gray-1000">
                    <span className="block text-[10px] font-normal leading-[15px] text-gray-1200">IBAN</span>
                    <p className="text-sm font-medium leading-5 text-blue-1300">DE89 3704 0044 0532 0130 00</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="flex items-center gap-4 text-xs font-medium leading-4 text-blue-1300 py-[7px] w-full bg-gray-1600 rounded-md border-gray-1000 justify-center"
                >
                  <img src="/images/payment-icon2.svg" alt="" /> View Payment History
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}