"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from '@/app/components/Modal';

interface ActionType {
  icon: string;
  name: string;
}


interface Payment {
  id: number;
  number: string;
  name: string;
  recurring: {
    icon: string;
    type: string;
    direction?: string;
  };
  amount: string;
  frequency: string;
  product: string;
  action?: ActionType | null;
}





const payments: Payment[] = [
  {
    id: 1,
    number: "STU-2741",
    name: "Amina Diallo",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "Scholarship",
      direction: "up"
    },
    amount: "+€400",
    frequency: "Monthly",
    product: "High-Yield Savings Pot",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 2,
    number: "STU-1892",
    name: "Léo Martin",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "AVI Payout",
      direction: "up"
    },
    amount: "+€720",
    frequency: "Monthly",
    product: "Budget Optimizer Tool",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 3,
    number: "STU-3384",
    name: "Fatou Sy",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "Family Transfer",
      direction: "up"
    },
    amount: "+€250",
    frequency: "Monthly",
    product: "No match",
    action: null,
  }, {
    id: 4,
    number: "STU-0915",
    name: "Hugo Bernard",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "Part-time Salary",
      direction: "up"
    },
    amount: "+€580",
    frequency: "Bi-weekly",
    product: "Rental Guarantee Insurance",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 5,
    number: "STU-2741",
    name: "Amina Diallo",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Rent",
      direction: "down"
    },
    amount: "−€650",
    frequency: "Monthly",
    product: "Rental Guarantee Insurance",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 6,
    number: "STU-1892",
    name: "Léo Martin",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Insurance",
      direction: "down"
    },
    amount: "−€35",
    frequency: "Monthly",
    product: "Health Insurance Pack",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 7,
    number: "STU-3384",
    name: "Fatou Sy",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Transport Pass",
      direction: "down"
    },
    amount: "−€86",
    frequency: "Monthly",
    product: "No match",
    action: null,
  }, {
    id: 8,
    number: "STU-0915",
    name: "Hugo Bernard",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Rent",
      direction: "down"
    },
    amount: "−€520",
    frequency: "Monthly",
    product: "Rental Guarantee Insurance",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 9,
    number: "STU-4467",
    name: "Sofia Reyes",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "Scholarship",
      direction: "up"
    },
    amount: "+€550",
    frequency: "Monthly",
    product: "Emergency Fund Builder",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 10,
    number: "STU-4467",
    name: "Sofia Reyes",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Subscription",
      direction: "down"
    },
    amount: "−€42",
    frequency: "Monthly",
    product: "No match",
    action: null,
  }, {
    id: 11,
    number: "STU-5590",
    name: "Youssef El Amri",
    recurring: {
      icon: "../images/arrow-up.svg",
      type: "AVI Payout",
      direction: "up"
    },
    amount: "+€720",
    frequency: "Monthly",
    product: "High-Yield Savings Pot",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  }, {
    id: 12,
    number: "STU-5590",
    name: "Youssef El Amri",
    recurring: {
      icon: "../images/down-arrow-red.svg",
      type: "Insurance",
      direction: "down"
    },
    amount: "−€28",
    frequency: "Monthly",
    product: "Health Insurance Pack",
    action: { icon: "../images/rocket.svg", name: "Launch Campaign", },
  },
];

export default function FlowMatchTable() {
  const [search, setSearchState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white border border-gray23 rounded-[10px]">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-4 pb-4 md:pt-7 pt-4">
          <div>
            <h4 className="text-black-1400 font-inter font-bold leading-5 text-sm mb-0.5">
              Flow & Match Table
            </h4>
            <p className="text-gray-2300 font-inter font-normal leading-4 text-xs">Recurring operations with intelligent product matching</p>
          </div>
          <div className="relative flex-1 md:max-w-56 max-w-full md:mt-0 mt-4 w-full">
            <input
              type="text"
              className="text-xs transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-8.25 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
              placeholder="Search by ID, name, type..."
              value={search}
              onChange={(e) => setSearchState(e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image
                src="../images/search-icon.svg"
                width="16"
                height="16"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-t border-solid border-gray23 bg-gray24/50">
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-left text-gray-2300">Student ID</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-left text-gray-2300">Name</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-left text-gray-2300">Recurring Type</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-right text-gray-2300">Amount</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-left text-gray-2300">Frequency</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-left text-gray-2300">Matched Product</th>
                <th className="px-4 py-2.5 font-inter font-bold text-xs leading-4 uppercase text-center text-gray-2300">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item) => (
                <tr key={item.id}
                  className="border-b border-gray23 hover:bg-gray1700/50 transition"
                >
                  <td className="px-4 py-3.5 text-black-1400 font-inter font-bold text-[11.8px] leading-4">
                    {item.number}
                  </td>
                  <td className="px-4 py-3.5 text-black-1400 font-inter font-normal text-xs leading-4">
                    {item.name}
                  </td>
                  <td className="px-4 py-3.5 font-inter font-normal text-xs leading-4">
                    <div className={`flex items-center gap-1.5 ${item.recurring.direction === "down" ? "text-red1900" : "text-lightgreen19"}`}>
                      <Image
                        src={item.recurring.icon}
                        width="12"
                        height="12"
                        alt=""
                      />
                      <span className="block">
                        {item.recurring.type}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`px-4 py-3.5 text-right font-inter font-bold text-[10.5px] leading-4
                    ${item.amount.startsWith("+")
                        ? "text-lightgreen19"
                        : item.amount.startsWith("-")
                          ? "text-red1900"
                          : "text-red1900"
                      }
                  `}
                  >
                    {item.amount}
                  </td>

                  <td className="px-4 py-3.5 text-gray-2300 font-inter font-normal text-xs leading-4">
                    {item.frequency}
                  </td>

                  {/* Product */}
                  <td className="px-4 py-3.5 text-[11px]">
                    {item.product === "No match" ? (
                      <span className="text-gray-2300 italic text-xs leading-4">
                        {item.product}
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center border border-blue1500 text-blue1500 rounded-full h-5.5 px-2">
                        {item.product}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3.5 text-center">
                    {item.product === "No match" ? (
                      <span className="text-gray-2300 text-xs leading-4">—</span>
                    ) : (
                      <Link
                        href="#" onClick={() => setIsOpen(true)}
                        className="inline-flex items-center gap-1 text-white shadow-51xl bg-blue1500 rounded-lg h-6 px-3 text-[11px] font-bold"
                      >
                        <Image src={item.action!.icon} width={16} height={16} alt="" />
                        {item.action!.name}
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between bg-gray24/30 py-2.75 px-4">
          <p className="text-gray-2300 font-inter text-[11px] leading-4">Showing 12 of 12 records</p>
          <p className="text-gray-2300 font-inter text-[11px] leading-4">9 product matches found</p>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[460px] bg-gray-1800 relative"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center w-5 h-5 absolute top-2.5 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="bg-linear-to-r from-blue-1000 from-0% via-blue-1700 via-20% to-lightgreenNew2 to-100% w-full h-1.5 rounded-t-md absolute -top-px left-0"></div>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-blue-1000/10 w-10 h-10 flex items-center justify-center">
              <Image src="/images/rocket-blue.svg" width={20} height={20} alt="" />
            </span>
            <h4 className="text-blue1700 text-[19.5px] font-bold leading-7 tracking-[-0.5px]">Launch Campaign</h4>
          </div>
          <p className="text-gray-2300 font-normal mt-3 text-[13.1px] leading-[22.8px]">
            You're about to send a personalized campaign. Please review the
            details below.
          </p>
          <div className="bg-grey5500/50 border border-solid border-gray-3900/40 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-2300 font-normal uppercase text-xs leading-4 tracking-[0.6px]">Target Student</p>
              <span className="inline-flex items-center justify-center text-blue1700 font-bold text-[11.8px] leading-4 bg-white border border-solid border-gray-3900 rounded-full h-5.5 px-2.5">STU-2741</span>
            </div>
            <div className="flex items-center gap-3 mt-4 border-b border-solid border-gray-3900/60 pb-4">
              <span className="border border-solid border-lightgreen17/20 bg-blue-1700/20 rounded-full w-11 h-11 flex items-center justify-center">
                <Image src="/images/user-icon4.svg" width={20} height={20} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-blue1700 font-bold text-[15.9px] leading-6">Amina Diallo</h4>
                <p className="text-gray-2300 font-normal text-[13px] leading-5">Student Profile Match</p>
              </div>
            </div>
            <ul className="pt-4">
              <li className="text-gray-2300 mb-3 font-normal text-[12.9px] leading-5 flex items-center justify-between">
                Offer
                <span className="text-[11.8px] font-bold inline-flex items-center text-blue-1000 bg-blue-1000/20 rounded-full h-5 px-2.5">10% Insurance Discount</span>
              </li>
              <li className="text-gray-2300 font-normal text-[12.9px] leading-5 flex items-center justify-between">
                Product
                <strong className="text-blue1700 font-normal text-[13.1px] leading-5 ">High-Yield Savings Pot</strong>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <h4 className="text-gray-2300 font-normal text-xs leading-4 uppercase">Delivery Channels</h4>
            <ul className="flex items-center gap-2 mt-3">
              <li>
                <Link href={"#"} className="text-blue1700 font-normal text-[13px] leading-5 inline-flex items-center justify-center gap-2 bg-grey5500/60 border border-solid border-gray-3900/50 h-9.5 px-3 rounded-xl">
                  <Image src="/images/bell-icon-blue.svg" width={14} height={14} alt="" />
                  Push Notification
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-blue1700 font-normal text-[13px] leading-5 inline-flex items-center justify-center gap-2 bg-grey5500/60 border border-solid border-gray-3900/50 h-9.5 px-3 rounded-xl">
                  <Image src="/images/email-blue.svg" width={14} height={14} alt="" />
                  Email
                </Link>
              </li>
            </ul>
            <p className="text-gray-2300 font-normal text-[11.1px] leading-[19.5px] mt-3">This will trigger via <span className="text-blue1700">Content CMS </span>  to all students matching this profile.</p>
          </div>
        </div>
        <div className="bg-grey5500/30 border border-solid border-gray-3900/60 px-6 py-4">
          <ul className="grid grid-cols-2 gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-lightgreenNew2 hover:text-darkgreen59 transition-all duration-500 ease-in-out w-full shadow-55xl border rounded-[10px] text-blue1700 font-normal text-[13.3px] leading-5 bg-gray-1800 border-solid border-gray-3900 h-9.5"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer flex items-center justify-center w-full hover:bg-lightgreen17 hover:border-lightgreen17 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal gap-2 text-[13.3px] leading-5 bg-blue-1000 border-solid border-blue-1000 h-9.5"
              >
                <Image src="/images/send-icon.svg" width={14} height={14} alt="" />
                Send Campaign
              </button>
            </li>
          </ul>
        </div>


      </Modal >


    </>
  );
}
