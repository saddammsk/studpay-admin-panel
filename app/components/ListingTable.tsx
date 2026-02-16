"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import InputField from "./InputField";
import CustomSelect from "./CustomSelect";

type AvailabilityStatus = "Booked" | "Available" | "Reserved";
type ListingStatus = "Active" | "Under Review" | "Paused";

const availabilityConfig = {
     Booked: {
          classes: "bg-gray-3500 text-blue-1400",
     },
     Available: {
          classes: "bg-green-1500/10 text-green-1500",
     },
     Reserved: {
          classes: "bg-yellow-1100/10 text-yellow-1100",
     },
} as const;

const listingStatusConfig = {
     Active: {
          classes: "bg-green-1500/10 text-green-1500",
     },
     "Under Review": {
          classes: "bg-purple-1300/10 text-purple-1300",
     },
     Paused: {
          classes: "bg-yellow-1100/10 text-yellow-1100",
     },
} as const;

interface Listing {
     id: number;
     unit: string;
     listingId: string;
     type: string;
     rent: string;
     deposit: string;
     availability: AvailabilityStatus;
     tenant: string;
     status: ListingStatus;
     created: string;
}

const listings: Listing[] = [
     {
          id: 1,
          unit: "Unit 1A",
          listingId: "LST-2024-001",
          type: "Studio",
          rent: "€850",
          deposit: "€1,700",
          availability: "Booked",
          tenant: "Emma Schmidt",
          status: "Active",
          created: "15 Jan 2024",
     },
     {
          id: 2,
          unit: "Unit 2B",
          listingId: "LST-2024-002",
          type: "1-Bedroom",
          rent: "€1,100",
          deposit: "€2,200",
          availability: "Available",
          tenant: "—",
          status: "Active",
          created: "14 Jan 2024",
     },
     {
          id: 3,
          unit: "Unit 3C",
          listingId: "LST-2024-003",
          type: "Shared",
          rent: "€550",
          deposit: "€1,100",
          availability: "Reserved",
          tenant: "Lucas Müller",
          status: "Under Review",
          created: "13 Jan 2024",
     },
     {
          id: 4,
          unit: "Unit 4B",
          listingId: "LST-2024-004",
          type: "Studio",
          rent: "€900",
          deposit: "€1,800",
          availability: "Available",
          tenant: "—",
          status: "Active",
          created: "12 Jan 2024",
     },
     {
          id: 5,
          unit: "Unit 5A",
          listingId: "LST-2024-005",
          type: "1-Bedroom",
          rent: "€1,250",
          deposit: "€2,500",
          availability: "Reserved",
          tenant: "—",
          status: "Paused",
          created: "10 Jan 2024",
     },
];

export default function ListingTable() {
     const [status, setStatus] = useState<string>("Select Status");
     const [status2, setStatus2] = useState<string>("Select Status");
     const [status3, setStatus3] = useState<string>("Select Status");
     const [selectedRows, setSelectedRows] = useState<number[]>([]);

     const isAllSelected = selectedRows.length === listings.length;

     const toggleAll = () => {
          setSelectedRows(isAllSelected ? [] : listings.map((i) => i.id));
     };

     const toggleRow = (id: number) => {
          setSelectedRows((prev) =>
               prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
          );
     };

     return (
          <div className="bg-white border border-gray1600 rounded-xl shadow-4xl shadow-9xl">
               <div className="p-4">
                    <h6 className="text-lg font-bold text-blue-1300 leading-7 mb-4">Listings</h6>
                    <div className='flex-wrap items-center flex gap-4'>
                         <div className='w-full 2xl:flex-1'>
                              <InputField
                                   ClassName='bg-gray-1500 w-full rounded-lg! h-10'
                                   type="text"
                                   placeholder="Search owner, email, or company..."
                                   iconSrc="/images/search-icon.svg"
                              />
                         </div>
                         <div className='flex items-center gap-3 flex-wrap'>
                              <div className='flex items-center text-sm font-normal leading-5 text-gray-1900 gap-2'>
                                   Filters:
                              </div>
                              <CustomSelect className='bg-gray-1500!'
                                   value={status}
                                   onChange={(e) => setStatus(e.target.value)}
                                   options={[
                                        { label: "All Status", value: "All Status" },
                                        { label: "Last 29 days", value: "Last 29 days" },
                                   ]}
                              />
                              <CustomSelect className='bg-gray-1500!'
                                   value={status2}
                                   onChange={(e) => setStatus2(e.target.value)}
                                   options={[
                                        { label: "All Verification", value: "All Verification" },
                                        { label: "Last 29 days", value: "Last 29 days" },
                                   ]}
                              />
                              <CustomSelect className='bg-gray-1500!'
                                   value={status3}
                                   onChange={(e) => setStatus3(e.target.value)}
                                   options={[
                                        { label: "All Countries", value: "All Countries" },
                                        { label: "Last 29 days", value: "Last 29 days" },
                                   ]}
                              />
                         </div>
                    </div>
               </div>
               <div className="overflow-x-auto">
                    <table className="4xl:w-full w-[1440px]">
                         <thead>
                              <tr className="border-b border-gray-3600 bg-gray1700/50">
                                   <th className="px-4 py-3 text-start">
                                        <input
                                             type="checkbox"
                                             checked={isAllSelected}
                                             onChange={toggleAll}
                                             className="w-4 h-4 rounded border border-blue-1400 checked:bg-blue-1000 appearance-none"
                                        />
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Unit / Listing ID
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Unit Type
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Monthly Rent
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Deposit
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Availability
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Tenant
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Listing Status
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Created
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-normal uppercase text-gray-1900">
                                        Actions
                                   </th>
                              </tr>
                         </thead>

                         <tbody>
                              {listings.map((item) => (
                                   <tr
                                        key={item.id}
                                        className="border-b border-gray1600 hover:bg-gray1700/50 transition"
                                   >
                                        <td className="px-4 py-4">
                                             <input
                                                  type="checkbox"
                                                  checked={selectedRows.includes(item.id)}
                                                  onChange={() => toggleRow(item.id)}
                                                  className="w-4 h-4 rounded border border-blue-1400 checked:bg-blue-1000 appearance-none"
                                             />
                                        </td>

                                        <td className="px-4 py-4">
                                             <div className="flex flex-col">
                                                  <span className="text-blue-1300 text-sm">
                                                       {item.unit}
                                                  </span>
                                                  <span className="text-gray-1900 text-sm">
                                                       {item.listingId}
                                                  </span>
                                             </div>
                                        </td>

                                        <td className="px-4 py-4 text-gray-1900 text-sm">
                                             {item.type}
                                        </td>

                                        <td className="px-4 py-4 text-gray-1900 text-sm">
                                             {item.rent}
                                        </td>

                                        <td className="px-4 py-4 text-gray-1900 text-sm">
                                             {item.deposit}
                                        </td>

                                        <td className="px-4 py-4">
                                             <span
                                                  className={`text-xs h-5.5 px-2.75 rounded-full inline-flex items-center ${availabilityConfig[item.availability].classes}`}
                                             >
                                                  {item.availability}
                                             </span>
                                        </td>

                                        <td className="px-4 py-4 text-gray-1900 text-sm">
                                             {item.tenant}
                                        </td>

                                        <td className="px-4 py-4">
                                             <span
                                                  className={`text-xs h-5.5 px-2.75 rounded-full inline-flex items-center ${listingStatusConfig[item.status].classes}`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>

                                        <td className="px-4 py-4 text-gray-1900 text-sm">
                                             {item.created}
                                        </td>

                                        <td className="px-4 py-4">
                                             <span className="text-gray-1900">...</span>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}
