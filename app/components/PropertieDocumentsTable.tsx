"use client";

import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Approved";


interface Payment {
  id: number;
  document: {
    name: string;
    icon: string;
  },
  type: string;
  Upload: string;
  status: PaymentStatus;
  action: string;
}

const statusConfig = {
  Approved: {
    classes: "bg-green-1600/10 border-green-1600/20 text-green-1600",
  },

} as const;

const payments: Payment[] = [
  {
    id: 1,
    document: {
      name: "Business Registration Certificate",
      icon: "/images/file-black.svg"
    },
    type: "PDF",
    Upload: "Mar 15, 2023",
    status: "Approved",
    action: 'View',
  },
  {
    id: 2,
    document: {
      name: "Tax Registration Document",
      icon: "/images/file-black.svg"
    },
    type: "PDF",
    Upload: "Mar 15, 2023",
    status: "Approved",
    action: 'View',
  },
  {
    id: 3,
    document: {
      name: "Company ID Proof",
      icon: "/images/file-black.svg"
    },
    type: "PDF",
    Upload: "Mar 16, 2023",
    status: "Approved",
    action: 'View',
  },
  {
    id: 4,
    document: {
      name: "Bank Account Verification",
      icon: "/images/file-black.svg"
    },
    type: "PDF",
    Upload: "Mar 18, 2023",
    status: "Approved",
    action: 'View',
  },

];

export default function PropertieDocumentsTable() {



  return (
    <>
      <div className="bg-white border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
        <div className="flex items-center justify-between gap-2 md:pb-6 pb-4 border-b border-gray-1600">
          <h4 className="text-black13 font-inter font-bold text-lg mb-1">
            Verification Documents
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Document Name</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Type</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Uploaded On</th>
                <th className="px-4 py-3 text-left font-inter font-medium text-sm text-gray-1200">Status</th>
                <th className="px-4 py-3 text-right font-inter font-medium text-sm text-gray-1200"></th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item) => (
                <tr key={item.id} className="group verti border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0">
                  <td className="px-4 py-6 font-normal font-inter text-sm leading-5 text-black-1600">
                    <div className='flex items-center gap-2'>
                      <Image
                        src={item.document.icon}
                        alt=""
                        width={16}
                        height={16}
                      />
                      {item.document.name}
                    </div>
                  </td>
                  <td className="px-4 py-6 font-normal font-inter text-base leading-6 text-black-1600">{item.type}</td>
                  <td className="px-4 py-6 font-normal font-inter text-sm leading-5 text-gray-1200">{item.Upload}</td>
                  <td className="px-4 py-6">
                    <span
                      className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter border border-solid text-xs font-normal ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <Link href={"#"}
                      className="text-black-1600 text-sm font-normal leading-5 inline-flex items-center"
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
