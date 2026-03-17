"use client";

import Link from "next/link";
import Image from "next/image";
import ProgressBar from "@/app/components/ProgressBar";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { Checkbox } from "@headlessui/react";
import UserFinancingTable from "@/app/components/UsersStudent/UserFinancingTable";
import CreditScoreCard from "@/app/components/UsersStudent/Financing/CreditScoreCard";
import ScoreHistory from "@/app/components/UsersStudent/Financing/ScoreHistory";
import Recommendations from "@/app/components/UsersStudent/Financing/Recommendations";
import LoanInterestRate from "@/app/components/UsersStudent/Financing/LoanInterestRate";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import { useFinancingStore } from "@/app/store/zustand/UseFinancingstore";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CreditComplianceDocs from "./_components/CreditComplianceDocs";

const CREDIT_SCORE = 742;
const MAX_SCORE = 1000;
const GAUGE_SEGMENTS = [
  { value: 300, color: "#EF4444" },
  { value: 150, color: "#EF4444" },
  { value: 100, color: "#F59E0B" },
  { value: 150, color: "#22C55E" },
  { value: 100, color: "#22C55E" },
  { value: 200, color: "#16A34A" },
];
const NEEDLE_ANGLE = 180 - (CREDIT_SCORE / MAX_SCORE) * 180;

const scoreHistory = [
  {
    id: 1,
    icon: "/images/card-gray.svg",
    title: "Timely Rent Payment",
    date: "Jan 28, 2024",
    time: "2:30 PM",
    change: 15,
    type: "positive" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
  {
    id: 2,
    icon: "/images/wallet-icon3.svg",
    title: "High Credit Utilization (>70%)",
    date: "Jan 25, 2024",
    time: "9:15 AM",
    change: -10,
    type: "negative" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
  {
    id: 3,
    icon: "/images/file-icon2.svg",
    title: "New Loan Approved",
    date: "Jan 20, 2024",
    time: "11:45 AM",
    change: 25,
    type: "positive" as const,
    status: "Admin: Sarah M.",
    git: "/images/user-icon2.svg",
  },
  {
    id: 4,
    icon: "/icons/ac-profile.svg",
    title: "Account Age Milestone (1 Year)",
    date: "Jan 15, 2024",
    time: "4:20 PM",
    change: 10,
    type: "positive" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
  {
    id: 5,
    icon: "/images/card-gray.svg",
    title: "Late Payment Warning",
    date: "Jan 10, 2024",
    time: "8:00 AM",
    change: -5,
    type: "negative" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
  {
    id: 6,
    icon: "/images/card-gray.svg",
    title: "Rent Payment Streak Bonus",
    date: "Dec 28, 2023",
    time: "10:00 AM",
    change: 8,
    type: "positive" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
  {
    id: 7,
    icon: "/images/card-gray.svg",
    title: "Consistent Balance Maintained",
    date: "Jan 5, 2024",
    time: "1:30 PM",
    change: 20,
    type: "positive" as const,
    status: "System",
    git: "/icons/git-icon.svg",
  },
];

const recommendations = [
  { id: 1, text: "Maintain a balance above €200 for 30 consecutive days to gain bonus points.", points: 20 },
  { id: 2, text: "Reduce credit utilization below 30% to improve your score faster.", points: 15 },
  { id: 3, text: "Set up automatic rent payments to ensure timely payments.", points: 10 },
  { id: 4, text: "Keep your account active with at least one transaction per month.", points: 5 },
];

const EXTENSION_OPTIONS = [7, 14, 30] as const;

const UsersStudentsPage = () => {
  const {
    activeModal,
    openModal,
    closeModal,
    penaltyReason,
    penaltyAmount,
    gracePeriodWaiver,
    extensionDays,
    accrueInterest,
    gracePeriodConfirmed,
    setPenaltyReason,
    setPenaltyAmount,
    toggleGracePeriodWaiver,
    setExtensionDays,
    toggleAccrueInterest,
    toggleGracePeriodConfirmed,
    isPenaltyValid,
    isGracePeriodValid,
    submitPenalty,
    submitGracePeriod,
  } = useFinancingStore();

  return (
    <div className="font-inter">
      <div className="pt-6 mb-6">
        <h4 className="text-blue-1300 font-inter font-bold text-2xl leading-7">Financing Profile</h4>
        <p className="text-gray-1200 font-normal text-base leading-6">Your complete credit and loan status overview</p>
      </div>

      <div className="2xl:flex grid md:grid-cols-3 grid-cols-1 4xl:gap-8.5 gap-4">
        <div className="2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-gray-1200 text-sm font-medium leading-5">Loan Status</h4>
            <span className="rounded-lg bg-blue-2200/10 w-8 h-8 flex items-center justify-center">
              <Image src="/images/price-down-arrow-blue.svg" width={16} height={16} alt="" />
            </span>
          </div>
          <span className="text-blue-2200 font-medium text-sm leading-5 inline-flex items-center justify-center bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-6.5 px-2.5">Active</span>
          <p className="text-gray-1200 font-normal text-xs leading-4 mt-3">Current loan is in repayment</p>
        </div>
        <div className="2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-gray-1200 text-sm font-medium leading-5">Total Principal</h4>
            <span className="rounded-lg bg-yellow1800 w-8 h-8 flex items-center justify-center">
              <Image src="/icons/wallet-green.svg" width={16} height={16} alt="" />
            </span>
          </div>
          <h3 className="text-blue-1300 text-2xl leading-8 font-bold">$5,400.00</h3>
          <p className="text-gray-1200 font-normal text-xs leading-4 mt-1">Original amount borrowed</p>
        </div>
        <div className="2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-gray-1200 text-sm font-medium leading-5">Remaining Balance</h4>
            <span className="rounded-lg bg-yellow1800 w-8 h-8 flex items-center justify-center">
              <Image src="/icons/wallet-red.svg" width={16} height={16} alt="" />
            </span>
          </div>
          <ProgressBar value={47} barColor="bg-blue-2200" bgColor="bg-gray-1600" className="h-1.5!" />
          <p className="text-gray-1200 font-normal text-xs leading-4 mt-1">47% paid off</p>
        </div>
        <div className="2xl:col-span-1 md:col-span-3 4xl:max-w-105.5 2xl:max-w-98.75 max-w-full w-full bg-white border border-solid border-gray-1000 px-3 py-5 rounded-lg shadow-61xl">
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between">
            <div>
              <h4 className="text-blue1700 text-xl leading-7 font-bold mb-0.5">Credit Score</h4>
              <p className="text-SteelGray text-sm leading-4 font-normal">John Anderson • <span className="text-xs">USR-2847391</span></p>
            </div>
            <button type="button" onClick={() => openModal("creditReport")} className="py-1.5 px-2 bg-gray-2000/60 rounded-xl h-10 inline-flex items-center gap-1 text-SteelGray text-sm leading-5 font-normal cursor-pointer">
              <span className="flex items-center justify-center bg-gray-2000 rounded-2xl w-8 h-8">
                <Image src="/icons/file-gray.svg" width={16} height={16} alt="" />
              </span>
              View Full Report
            </button>
          </div>
          <div className="relative w-full mt-2 h-[180px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={GAUGE_SEGMENTS}
                  cx="50%"
                  cy="75%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius="60%"
                  outerRadius="85%"
                  dataKey="value"
                  stroke="none"
                  cornerRadius={6}
                  paddingAngle={4}
                >
                  {GAUGE_SEGMENTS.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center" style={{ top: "18%" }}>
              <svg width="200" height="120" viewBox="0 0 200 120" className="absolute" style={{ top: "0" }}>
                <g transform="translate(100, 95)">
                  <line
                    x1="0"
                    y1="0"
                    x2={-70 * Math.cos((NEEDLE_ANGLE * Math.PI) / 180)}
                    y2={-70 * Math.sin((NEEDLE_ANGLE * Math.PI) / 180)}
                    stroke="#1F2937"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="0" r="5" fill="#22C55E" stroke="#fff" strokeWidth="2" />
                </g>
              </svg>
            </div>
            <div className="absolute flex flex-col items-center" style={{ bottom: "8px" }}>
              <div className="flex items-baseline gap-0.5">
                <span className="text-blue-1300 text-3xl font-bold leading-none">{CREDIT_SCORE}</span>
                <span className="text-gray-1200 text-sm font-normal">/{MAX_SCORE}</span>
              </div>
              <span className="text-green-500 text-sm font-semibold mt-1">Good</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col items-start 4xl:gap-12.5 gap-4 mt-6">
        <div className="xl:w-[calc(100%-411px)] w-full">
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-1000 rounded-lg p-5">
            <div className="flex items-center gap-4">
              <span className="bg-blue-2200/10 rounded-xl flex items-center justify-center w-12 h-12">
                <Image src="/icons/calendar-blue.svg" width={24} height={24} alt="" />
              </span>
              <div className="flex-1 w-full">
                <span className="text-gray-1200 text-sm leading-5 font-normal block">Next Installment Due</span>
                <h4 className="text-blue-1300 font-semibold text-lg leading-7">Sat, Feb 15, 2025</h4>
                <p className="text-gray-1200 text-xs leading-6 font-normal block">17 days remaining</p>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="text-gray-1200 font-inter font-normal text-sm leading-5 block">Amount Due</span>
              <h4 className="text-blue-1300 mb-2 font-bold text-2xl leading-8">$468.75</h4>
              <Link href="#" className="sm:w-full w-full inline-flex items-center justify-center gap-3 text-white text-sm leading-5 font-medium bg-blue-2200 hover:bg-blue-2200/90 rounded-md h-9 px-3">
                Pay Now
                <Image src="/images/right-arrow-white.svg" width={16} height={16} alt="" />
              </Link>
            </div>
          </div>
          <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
            <div className="sm:p-6 p-4">
              <h4 className="text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]">
                <Image src="/icons/Repayment-icon.svg" width={20} height={20} alt="" />
                Repayment Ledger
              </h4>
              <p className="text-gray-1200 font-normal text-sm leading-5">Full schedule of loan repayments</p>
            </div>
            <UserFinancingTable />
          </div>
        </div>
        <div className="xl:max-w-102.75 w-full">

          <AdminActions />

          <CreditComplianceDocs/>
        
        </div>
      </div>

      <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl sm:p-6 p-4">
        <div>
          <h4 className="text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]">
            <Image src="/images/shield-blue.svg" width={20} height={20} alt="" />
            Owner/Admin Controls
          </h4>
          <p className="text-gray-1200 font-normal text-sm leading-5">Manage loan terms and apply adjustments</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 4xl:gap-27.5 xl:gap-8 gap-4 mt-3">
          <div className="border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4">
            <h4 className="text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5">
              <span className="bg-blue-2200/10 rounded-lg w-8 h-8 flex items-center justify-center">
                <Image src="/icons/refresh-blue.svg" width={16} height={16} alt="" />
              </span>
              Restructure Loan
            </h4>
            <p className="text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4">Change monthly payment or interest rate. Requires 4-eyes approval.</p>
            <button type="button" onClick={() => openModal("restructureLoan")} className="w-full flex items-center justify-center gap-3.5 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-1000 rounded-md bg-white h-9 px-3 hover:bg-gray-1600 transition-all duration-500 ease-in-out cursor-pointer">
              <Image src="/icons/setting-icon.svg" width={16} height={16} alt="" />
              Restructure
            </button>
          </div>
          <div className="border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4">
            <h4 className="text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5">
              <span className="bg-yellow1800 rounded-lg w-8 h-8 flex items-center justify-center">
                <Image src="/images/warning.svg" width={16} height={16} alt="" />
              </span>
              Apply Penalty
            </h4>
            <p className="text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4">Manually add a late fee for missed or delayed payments.</p>
            <button type="button" onClick={() => openModal("applyPenalty")} className="w-full flex items-center justify-center gap-3.5 text-red-1300 font-inter font-normal text-sm leading-5 border border-solid border-red-1300/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out cursor-pointer">
              <Image src="/images/warning.svg" width={16} height={16} alt="" />
              Apply Fee
            </button>
          </div>
          <div className="border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4">
            <h4 className="text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5">
              <span className="bg-yellow1800 rounded-lg w-8 h-8 flex items-center justify-center">
                <Image src="/images/clock-yellow.svg" width={16} height={16} alt="" />
              </span>
              Grace Period
            </h4>
            <p className="text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4">Delay the next payment without applying a penalty.</p>
            <button type="button" onClick={() => openModal("gracePeriod")} className="w-full flex items-center justify-center gap-3.5 text-yellow-1100 font-inter font-normal text-sm leading-5 border border-solid border-yellow-1100/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out cursor-pointer">
              <Image src="/images/clock-yellow.svg" width={16} height={16} alt="" />
              Request
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={activeModal === "creditReport"} onClose={closeModal} panelClassName="max-w-[672px] bg-gray-1500 relative h-full overflow-y-auto sm:p-6 px-4 pb-4 pt-12">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-full sm:w-8 sm:h-8 w-6 h-6 absolute sm:top-8 top-6 shadow-75xl right-6 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <div className="mb-6">
          <h4 className="text-blue-1300 font-inter font-semibold text-xl leading-7 tracking-[-0.5px]">Credit Score History & Insights</h4>
          <p className="text-gray-1200 font-inter font-normal text-sm leading-5">Track changes and get recommendations to improve your score</p>
        </div>
        <div>
          <CreditScoreCard score={742} status="Good" updated="Jan 30, 2026 at 8:01 PM" />
          <ScoreHistory history={scoreHistory} />
          <Recommendations items={recommendations} />
        </div>
        <Link href="#" className="flex items-center justify-center border border-solid border-gray-1000 bg-white rounded-[10px] h-10 text-gray-1200 text-sm leading-5 font-semibold gap-2 hover:bg-gray-1600">
          <Image src="/icons/Adjustment-icon.svg" width={16} height={16} alt="" />
          Manual Adjustment
        </Link>
      </Modal>

      <Modal isOpen={activeModal === "applyPenalty"} onClose={closeModal} panelClassName="max-w-[448px] bg-gray-1500 relative sm:p-6 px-4 pb-4 pt-12">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-full w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <div className="mb-6 flex items-center gap-2">
          <span className="bg-red2100/10 rounded-lg w-9 h-9 flex items-center justify-center">
            <Image src="/icons/sheild-error.svg" width={20} height={20} alt="" />
          </span>
          <div className="flex-1 w-full">
            <h4 className="text-blue-1300 font-inter font-semibold text-xl leading-7 tracking-[-0.5px]">Apply Late Fee / Penalty</h4>
            <p className="text-gray-1200 font-inter font-normal text-sm leading-5">Charge a penalty to the tenant&apos;s account</p>
          </div>
        </div>
        <div>
          <div className="mt-3">
            <label className="text-blue-1300 block mb-1.5 font-normal text-[13.5px] leading-5">Penalty Reason</label>
            <CustomSelect
              className="shadow-57xl"
              options={[
                { label: "Select card type", value: "Select card type" },
                { label: "2000", value: "2000" },
              ]}
              value={penaltyReason}
              onChange={(value: string) => setPenaltyReason(value)}
            />
          </div>
          <div className="mt-5">
            <label className="text-blue-1300 block mb-1.5 font-normal text-[13.5px] leading-5">Amount</label>
            <InputField
            ClassName="bg-gray-1500 text-gray-3800 rounded-md! h-10!"
            type="text"
            placeholder="0.00"
            value={penaltyAmount}
            iconSrc="/images/dollar-icon.svg"
            onChange={(e) => setPenaltyAmount(e.target.value)}
          />
          </div>
          <div className="mt-5 flex items-center justify-end bg-gray1700/50 border border-solid border-gray1600 rounded-lg p-3">
            <div className="flex-1 w-full">
              <h4 className="text-black13 font-inter font-normal text-[13.3px] leading-5">Grace Period Waiver</h4>
              <p className="text-gray-1400 font-inter font-normal text-[11.1px] leading-4">Waive penalty if paid within 48 hours</p>
            </div>
            <ToggleSwitch checked={gracePeriodWaiver} onChange={toggleGracePeriodWaiver} />
          </div>
          <div className="mt-4">
            <ul className="flex items-center justify-end gap-3">
              <li>
                <button type="button" onClick={closeModal} className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">
                  Cancel
                </button>
              </li>
              <li>
                <button type="button" disabled={!isPenaltyValid()} onClick={submitPenalty} className="cursor-pointer disabled:opacity-50 gap-2 px-4 flex items-center justify-center w-full hover:bg-red2100/90 hover:border-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal text-sm leading-5 bg-red2100 border-solid border-red2100 h-10">
                  <Image src="/icons/sheild-error.svg" width={16} height={16} alt="" className="brightness-10000" />
                  Charge Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "gracePeriod"} onClose={closeModal} panelClassName="max-w-[448px] bg-gray-1500 relative sm:p-6 px-4 pb-4 pt-12">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-full w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <div className="mb-6 flex items-center gap-2">
          <span className="bg-blue-1200/10 rounded-lg w-9 h-9 flex items-center justify-center">
            <Image src="/icons/Period-icon.svg" width={20} height={20} alt="" />
          </span>
          <div className="flex-1 w-full">
            <h4 className="text-black13 font-inter font-bold text-[17.7px] leading-7 tracking-[-0.45px]">Grace Period Request</h4>
            <p className="text-gray-1400 font-inter font-normal text-[13px] leading-5">Extend the payment deadline for Marcus Schmidt</p>
          </div>
        </div>
        <div>
          <div className="mt-3">
            <label className="text-blue-1300 block mb-2.5 font-normal text-[13.2px] leading-5">Extension Duration</label>
            <ul className="grid grid-cols-3 gap-2">
              {EXTENSION_OPTIONS.map((days) => (
                <li key={days}>
                  <button type="button" onClick={() => setExtensionDays(days)} className={`w-full bg-white py-3.5 border-2 border-solid rounded-lg flex items-center justify-center flex-col cursor-pointer ${extensionDays === days ? "border-blue1800" : "border-gray1600"}`}>
                    <h4 className="text-black13 text-xl leading-7 font-bold">{days}</h4>
                    <p className="text-gray-1400 text-[11.1px] leading-4 font-normal mt-1.5">days</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex items-center justify-end bg-gray1700/50 border border-solid border-gray1600 rounded-lg p-3">
            <div className="flex-1 w-full">
              <h4 className="text-black13 font-inter font-normal text-[13.3px] leading-5">Accrue Interest</h4>
              <p className="text-gray-1400 font-inter font-normal text-[11.1px] leading-4">Accrue interest during grace period?</p>
            </div>
            <ToggleSwitch checked={accrueInterest} onChange={toggleAccrueInterest} />
          </div>
          <div className="mt-5">
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                checked={gracePeriodConfirmed}
                onChange={toggleGracePeriodConfirmed}
                className="group block w-4 h-4 rounded border border-solid border-blue-1200 bg-white data-checked:bg-blue1400 data-checked:border-blue1400 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"
              >
                <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
                  <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Checkbox>
              <p onClick={toggleGracePeriodConfirmed} className="flex-1 w-full text-gray-1400 text-[13px] leading-4 font-normal">
                I confirm this grace period extension and understand the impact on the payment schedule.
              </p>
            </label>
          </div>
          <div className="mt-6">
            <ul className="flex items-center justify-end gap-3">
              <li>
                <button type="button" onClick={closeModal} className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">
                  Cancel
                </button>
              </li>
              <li>
                <button type="button" disabled={!isGracePeriodValid()} onClick={submitGracePeriod} className="cursor-pointer disabled:opacity-50 gap-2 px-4 flex items-center justify-center w-full hover:bg-blue-1200/90 hover:border-blue-1200/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal text-sm leading-5 bg-blue-1200 border-solid border-blue-1200 h-10">
                  <Image src="/icons/Period-icon.svg" width={16} height={16} alt="" className="brightness-10000" />
                  Grant Grace Period
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "restructureLoan"} onClose={closeModal} panelClassName="max-w-[540px] bg-gray-1500 relative sm:overflow-y-hidden border-0 sm:h-auto h-full overflow-y-auto">
        <span className="bg-linear-to-r from-royalBlue131 from-0 via-royalBlue131/70 via-50% to-royalBlue131 to-100% h-1.5 block w-full absolute top-0 left-0 rounded-t-xl" />
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-full w-4 h-4 absolute sm:top-4 sm:right-4 top-3 right-3 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <div className="sm:p-6 p-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lighrgrey47">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3335 4.66602H7.3335" stroke="#1252A1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.3335 11.334H3.3335" stroke="#1252A1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.3335 13.334C12.4381 13.334 13.3335 12.4386 13.3335 11.334C13.3335 10.2294 12.4381 9.33398 11.3335 9.33398C10.2289 9.33398 9.3335 10.2294 9.3335 11.334C9.3335 12.4386 10.2289 13.334 11.3335 13.334Z" stroke="#1252A1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.6665 6.66602C5.77107 6.66602 6.6665 5.77059 6.6665 4.66602C6.6665 3.56145 5.77107 2.66602 4.6665 2.66602C3.56193 2.66602 2.6665 3.56145 2.6665 4.66602C2.6665 5.77059 3.56193 6.66602 4.6665 6.66602Z" stroke="#1252A1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="sm:text-[19.5px] text-base tracking-[-0.5px] font-bold text-blue-1300 leading-7">Loan Modification & Restructuring</h2>
            </div>
            <p className="text-lighrgrey48 text-[13px] font-normal leading-[22.8px]">Adjust loan terms below. Changes require super-admin approval before taking effect.</p>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.6px] text-lighrgrey48">Current Terms</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Principal</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">$5,400</p>
              </div>
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Interest Rate</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">8.5%</p>
              </div>
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Tenure</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">10 mo</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.6px] text-lighrgrey48">New Terms</p>
            <LoanInterestRate />
          </div>
        </div>
        <div className="bg-lighrgrey47/30 border-t border-solid border-lighrgrey49/60 px-6 py-4">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <li>
              <button type="button" onClick={closeModal} className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-gray-3800 font-normal text-[13.3px] leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">
                Cancel
              </button>
            </li>
            <li>
              <button type="button" className="cursor-pointer gap-2 px-4 flex items-center justify-center w-full hover:bg-royalBlue131/90 hover:border-royalBlue131/90 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal text-[13px] leading-5 bg-royalBlue131 border-solid border-royalBlue131 h-10">
                <Image src="/icons/Adjustment-icon.svg" width={16} height={16} alt="" className="brightness-10000" />
                Submit for Approval
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;