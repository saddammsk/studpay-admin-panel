"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface CurrentTerms {
  principal: number;
  interestRate: number;
  tenure: number;
}

interface LoanModificationModalProps {
  currentTerms?: CurrentTerms;
  onCancel?: () => void;
  onSubmit?: (newRate: number, newTenure: number) => void;
}

const TENURE_OPTIONS = [
  { label: "6 months", value: 6 },
  { label: "10 months (current)", value: 10 },
  { label: "12 months", value: 12 },
  { label: "18 months", value: 18 },
  { label: "24 months", value: 24 },
  { label: "36 months", value: 36 },
];

function calculateEMI(principal: number, annualRate: number, months: number): number {
  if (months === 0) return 0;
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function LoanInterestRate({
  currentTerms = { principal: 5400, interestRate: 8.5, tenure: 10 },
  onCancel,
  onSubmit,
}: LoanModificationModalProps) {
  const [newRate, setNewRate] = useState<number>(currentTerms.interestRate);
  const [newTenure, setNewTenure] = useState<number>(currentTerms.tenure);
  const [tenureOpen, setTenureOpen] = useState(false);

  const oldEMI = calculateEMI(currentTerms.principal, currentTerms.interestRate, currentTerms.tenure);
  const newEMI = calculateEMI(currentTerms.principal, newRate, newTenure);

  const sliderPercent = ((newRate - 1) / (20 - 1)) * 100;

  const handleRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRate(parseFloat(e.target.value));
  }, []);

  const handleTenureSelect = useCallback((value: number) => {
    setNewTenure(value);
    setTenureOpen(false);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit?.(newRate, newTenure);
  }, [newRate, newTenure, onSubmit]);

  const selectedTenureLabel =
    TENURE_OPTIONS.find((o) => o.value === newTenure)?.label ?? `${newTenure} months`;

  return (
    <div className=''>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <label className="text-[13.1px] leading-5 block font-normal text-Black236">New Interest Rate</label>
          <span className="text-[13.1px] font-bold leading-5 text-royalBlue131">{newRate.toFixed(1)}%</span>
        </div>
        <div className="relative mb-1">
          <div className="h-2 w-full rounded-full bg-lighrgrey47 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-royalBlue131 transition-all"
              style={{ width: `${sliderPercent}%` }}
            />
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={0.1}
            value={newRate}
            onChange={handleRateChange}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
            style={{ margin: 0 }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gray-1800 border-2 border-royalBlue131 shadow-78xl pointer-events-none transition-all"
            style={{ left: `calc(${sliderPercent}% - 11px)` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lighrgrey48 text-xs leading-4 font-normal block">1%</span>
          <span className="text-lighrgrey48 text-xs leading-4 font-normal block">20%</span>
        </div>
      </div>

      <div>
        <label className="block text-[13.1px] leading-5 font-normal text-Black236 mb-2">
          New Tenure / Duration
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setTenureOpen((p) => !p)}
            className="w-full flex items-center justify-between rounded-[10px] border border-lighrgrey49 bg-gray-1800 px-3 h-10 text-[13.1px] leading-5 text-Black236 hover:border-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <span>{selectedTenureLabel}</span>
            <Image
              src="/icons/chevronDown.svg"
              width="10"
              height="10"
              alt=""
              className={`transition-transform opacity-50 ${tenureOpen ? "rotate-180" : ""}`}
            />

          </button>
          {tenureOpen && (
            <div className="absolute z-10 mt-1 w-full rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
              {TENURE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleTenureSelect(opt.value)}
                  className={`w-full px-4 py-2.5 text-left text-[0.875rem] hover:bg-blue-50 transition-colors ${newTenure === opt.value ? "text-blue-600 font-medium bg-blue-50/60" : "text-gray-700"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lighrgrey48 text-xs leading-4 uppercase">
          EMI Comparison
        </p>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 rounded-xl p-4 text-center">
            <p className="text-[11.4px] leading-4 font-normal text-lighrgrey48 mb-1">Old Monthly EMI</p>
            <p className="text-Black236 text-[18.1px] font-bold leading-7">{formatCurrency(oldEMI)}</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full">
            <Image
              src="/icons/right-arrow-long.svg"
              width="16"
              height="16"
              alt=""
            />
          </div>
          <div className="flex-1 rounded-xl border border-royalBlue131/30 bg-royalBlue132/40 p-4 text-center">
            <p className="text-lighrgrey48 text-[11.3px] leading-4 font-normal mb-1">New Monthly EMI</p>
            <p className="text-royalBlue131 text-[18.1px] font-bold leading-7">{formatCurrency(newEMI)}</p>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 mt-4 bg-red-1300/5 border border-solid border-red-1300/30 rounded-xl p-3">
        <span>
          <Image
              src="/icons/sheild-error.svg"
              width="20"
              height="20"
              alt="" 
            />
        </span>
        <div className="">
          <h4 className="text-Black236 font-bold text-[13.6px] leading-5">Super-Admin Approval Required</h4>
          <p className="text-lighrgrey48 font-normal text-[11.1px] leading-4 mt-0.5">This action requires a secondary approval from a Super-Admin before it takes
            effect.
            </p>
        </div>
      </div>

    </div>
  );
}