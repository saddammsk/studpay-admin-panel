"use client";

import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Pending" | "Suspended";

interface Actions {
  eyesimg: string;
}

interface Payment {
  id: number;
  name: string;
  email: string;
  country: string;
  amount: string;
  disbursement: string;
  subscription: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Active: {
    classes: "bg-blue-1000 text-white",
  },
  Pending: {
    classes: "bg-yellow1400 text-brown2000",
  },
  Suspended: {
    classes: "bg-red-1000 text-white",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.johnson@university.edu",
    country: "Germany",
    amount: "€12,000",
    disbursement: "€800",
    subscription: "2024-01-15",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    email: "carlos.r@estudios.es",
    country: "Germany",
    amount: "€12,000",
    disbursement: "€800",
    subscription: "2024-01-14",
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@uni.in",
    country: "France",
    amount: "€12,000",
    disbursement: "€800",
    subscription: "2024-01-13",
    status: "Suspended",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@college.uk",
    country: "France",
    amount: "€12,000",
    disbursement: "€800",
    subscription: "2024-01-13",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 5,
    name: "Li Wei",
    email: "li.wei@university.cn",
    country: "Netherlands",
    amount: "€12,000",
    disbursement: "€800",
    subscription: "2024-01-13",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },

];

export default function BlockedTable() {



  return (
    <>
      <div className="bg-white border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
        <div className="flex items-center gap-2 md:pb-6 pb-4 border-b border-gray-1600">
          <Image src="/images/sheild-block.svg" alt="" width={20} height={20} />
          <h4 className="text-black13 font-inter font-semibold sm:text-2xl text-xl">
            Blocked AVI Account(5)</h4>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Student Name</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Email</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Country of study</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Block Amount</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Monthly Disbursement</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Subscription Date</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Status</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item) => (
                <tr key={item.id} className="group verti border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0">
                  <td className="p-4 font-inter font-medium text-sm leading-5 text-black13">{item.name}</td>
                  <td className="p-4 font-inter font-normal text-sm leading-5 text-gray-1100">{item.email}</td>


                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-semibold">{item.country}</td>

                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-semibold">{item.amount}</td>
                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-semibold">{item.disbursement}</td>

                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-normal"> {item.subscription}</td>

                  <td className="p-4">
                    <span
                      className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter text-xs font-semibold ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <Link href={"#"}
                      className="text-black13 text-sm font-normal leading-5 inline-flex items-center justify-center gap-3 border border-solid border-gray1600 rounded-md h-9 px-3.25 group-hover:bg-white transition-all duration-500 ease-in-out"
                    >
                      <Image src={item.actions.eyesimg} alt="" width={16} height={16} />
                      View Details
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
