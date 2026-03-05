
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import {
     RefreshCw,
     FileText,
     AlertTriangle,
     Activity,
     Database,
     Calendar,
     Search,
     Download,
     CrossIcon,
     Cross,
     X,
     Store
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import StatsCard3 from "@/app/components/StatsCard3";
import ProgressBar from "@/app/components/ProgressBar";
import AuditTable from "@/app/components/AuditTable";
import DashboardStats2 from "@/app/components/DashboardStats2";
import ServiceInventory from "@/app/components/ServiceInventory";
import OrdersTable from "@/app/components/OrdersTable";
function page() {
     const [status, setStatus] = useState("Bulk Actions");
     const [severity, setSeverity] = useState("");
     const [module, setModule] = useState("");
     const [timeRange, setTimeRange] = useState("");

     const users = [
          {
               name: "Sarah Chen",
               role: "Finance Manager",
               time: "Now",
               value: 47,
               status: "online",
          },
          {
               name: "Ahmed Hassan",
               role: "Security Lead",
               time: "2m ago",
               value: 32,
               status: "away",
          },
          {
               name: "Maria Rodriguez",
               role: "System Admin",
               time: "15m ago",
               value: 28,
               status: "online",
          },
          {
               name: "James Wilson",
               role: "Compliance Officer",
               time: "5m ago",
               value: 19,
               status: "offline",
          },
          {
               name: "Priya Sharma",
               role: "Operations",
               time: "1h ago",
               value: 12,
               status: "online",
          },
     ];

     return (
          <div>
               <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
                    <TopBar></TopBar>
                    <div>
                         <div className="flex mb-6 itesm-center flex-wrap gap-4 justify-between">
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
                              <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                   <Image
                                        src="/images/refresh-icon.svg"
                                        width="16"
                                        height="16"
                                        alt=""
                                   />
                                   Refresh Data
                              </Link>
                         </div>
                         <DashboardStats2></DashboardStats2>
                         <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                              <div className="flex py-7 px-3 items-center justify-between">
                                   <h6 className="text-lg font-bold text-blue-2900">Service Inventory</h6>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>

                                        + Add Product
                                   </Link>
                              </div>
                              <ServiceInventory></ServiceInventory>
                         </div>
                         <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                              <div className="flex py-7 px-3 items-center justify-between">
                                   <h6 className="text-lg font-bold text-blue-2900">Recent Orders Ledger</h6>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                        View All Orders
                                   </Link>
                              </div>
                              <OrdersTable></OrdersTable>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
