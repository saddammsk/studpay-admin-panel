"use client";

import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Suspended";


interface Payment {
  id: number;
  name: string;
  unit: string;
  occupancy: string;
  MonthlyRevenue: string;
  status: PaymentStatus;
  action: string;
}

const statusConfig = {
  Active: {
    classes: "bg-green-1600/10 border-green-1600/20 text-green-1600",
  },
  Suspended: {
    classes: "bg-red-1300/10 border-red-1300/20 text-red-1300",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "Mitte Residences",
    unit: "12",
    occupancy: "92%",
    MonthlyRevenue: "€12,960",
    status: "Active",
    action: 'View',
  },
  {
    id: 2,
    name: "Kreuzberg Apartments",
    unit: "8",
    occupancy: "100%",
    MonthlyRevenue: "€9,600",
    status: "Active",
    action: 'View',
  },
  {
    id: 3,
    name: "Prenzlauer Berg Studios",
    unit: "6",
    occupancy: "83%",
    MonthlyRevenue: "€5,940",
    status: "Active",
    action: 'View',
  },
  {
    id: 4,
    name: "Charlottenburg Flats",
    unit: "4",
    occupancy: "75%",
    MonthlyRevenue: "€3,000",
    status: "Suspended",
    action: 'View',
  },

];

export default function PropertieOwnedTable() {



  return (
    <>
      <div className="bg-white border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
        <div className="flex items-center justify-between gap-2 md:pb-6 pb-4 border-b border-gray-1600">
          <div className=''>
            <h4 className="text-black13 font-inter font-bold text-lg mb-1">
              Properties Owned
            </h4>
            <p className='text-gray-1200 font-normal text-sm leading-5'>4 properties registered</p>
          </div>
          <Link href={"#"} className='text-sm font-normal leading-5 text-blue-1300 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1600 border border-gray-1600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]'>View All Properties</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Property Name</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Units</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Occupancy</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Monthly Revenue</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Status</th>
                <th className="px-4 py-3 text-right font-inter font-medium text-sm text-gray-1200"></th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item) => (
                <tr key={item.id} className="group verti border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0">
                  <td className="px-4 py-6 font-normal font-inter text-sm leading-5 text-blue-1300">{item.name}</td>
                  <td className="px-4 py-6 font-normal font-inter text-base leading-6 text-blue-1300">{item.unit}</td>
                  <td className="px-4 py-6 font-normal font-inter text-sm leading-5 text-gray-1200">{item.occupancy}</td>
                  <td className="px-4 py-6 font-normal font-inter text-base leading-6 text-blue-1300">{item.MonthlyRevenue}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter border border-solid text-xs font-normal ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <Link href={"#"}
                      className="text-blue-1300 text-sm font-normal leading-5 inline-flex items-center"
                    >
                      {item.action}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
