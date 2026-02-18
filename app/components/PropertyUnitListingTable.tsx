"use client";

import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Booked" | "Available" | "Reserved";

interface Actions {
  eyesimg: string;
  name: string;
}

interface Payment {
  id: number;
  unit: string;
  type: string;
  MonthlyRent: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Booked: {
    classes: "bg-blue-2200/10 border-blue-2200/20 text-blue-2200",
  },
  Available: {
    classes: "bg-green-1600/10 border-green-1600/20 text-green-1600",
  },
  Reserved: {
    classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    unit: "Unit 1A",
    type: "1-Bedroom",
    MonthlyRent: "€1,200",
    status: "Booked",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },
  {
    id: 2,
    unit: "Unit 2B",
    type: "Studio",
    MonthlyRent: "€950",
    status: "Booked",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },
  {
    id: 3,
    unit: "Unit 3C",
    type: "Studio",
    MonthlyRent: "€900",
    status: "Available",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },
  {
    id: 4,
    unit: "Unit 4B",
    type: "Studio",
    MonthlyRent: "€1,050",
    status: "Booked",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },
  {
    id: 5,
    unit: "Unit 5A",
    type: "2-Bedroom",
    MonthlyRent: "€1,450",
    status: "Reserved",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },
  {
    id: 6,
    unit: "Unit 6D",
    type: "1-Bedroom",
    MonthlyRent: "€1,100",
    status: "Available",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      name: "View"
    },
  },

];

export default function BlockedTable() {



  return (
    <>
      <div className="bg-white border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
        <div className="flex items-center justify-between gap-2 md:pb-6 pb-4 border-b border-gray-1600">
          <h4 className="text-black13 font-inter font-semibold sm:text-2xl text-xl">
            Unit Listings
          </h4>
          <Link href={"#"} className="text-sm font-normal leading-5 text-white h-9 px-3 flex items-center justify-center gap-2 bg-blue-2200 border border-blue-2200 transition-all duration-500 ease-in-out hover:bg-blue-2200/90 rounded-[10px]">
            <Image
              src="/images/plus-icon.svg"
              alt=""
              width={16}
              height={16}
            />
            Add Listing
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Unit</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Type</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Monthly Rent</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Status</th>
                <th className="px-4 py-3 text-right font-inter font-medium text-sm text-gray-1200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item) => (
                <tr key={item.id} className="group verti border-b border-gray1600 hover:bg-gray1700/50 transition">
                  <td className="px-4 py-4.5 font-normal font-inter text-base leading-6 text-blue-1300">{item.unit}</td>
                  <td className="px-4 py-4.5 font-normal font-inter text-sm leading-5 text-gray-1200">{item.type}</td>
                  <td className="px-4 py-4.5 font-normal font-inter text-base leading-6 text-blue-1300">{item.MonthlyRent}</td>
                  <td className="px-4 py-4.5">
                    <span
                      className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter border border-solid text-xs font-normal ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4.5">
                    <Link href={"#"}
                      className="text-blue-1300 text-sm font-normal leading-5 inline-flex items-center justify-end gap-1.5"
                    >
                      <Image
                        src={item.actions.eyesimg}
                        alt=""
                        width={16}
                        height={16} />
                      {item.actions.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pt-4 flex items-center justify-between'>
          <p className='text-gray-1200 font-normal text-sm leading-5'>Showing 6 of 24 listings</p>
          <Link href={"#"} className='text-sm font-normal leading-5 text-blue-1300 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1600 border border-gray-1600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]'>View All Listings</Link>
        </div>
      </div>
    </>
  );
}
