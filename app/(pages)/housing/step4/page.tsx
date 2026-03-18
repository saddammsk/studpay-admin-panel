"use client";

import { useState } from "react";

interface PaymentLineProps {
     label: string;
     amount: string;
     variant?: "default" | "deduction" | "total";
}

function PaymentLine({ label, amount, variant = "default" }: PaymentLineProps) {
     return (
          <div className="flex items-center justify-between py-3">
               <span
                    className={
                         variant === "deduction"
                              ? "text-sm font-medium text-red-500"
                              : "text-sm font-medium text-gray-700"
                    }
               >
                    {label}
               </span>
               <span
                    className={
                         variant === "deduction"
                              ? "text-sm font-semibold text-red-500"
                              : "text-sm font-semibold text-gray-900"
                    }
               >
                    {amount}
               </span>
          </div>
     );
}

interface BeneficiaryFieldProps {
     label: string;
     value: string;
     fullWidth?: boolean;
}

function BeneficiaryField({ label, value, fullWidth = false }: BeneficiaryFieldProps) {
     return (
          <div className={fullWidth ? "col-span-2" : "col-span-1"}>
               <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    {label}
               </p>
               {fullWidth ? (
                    <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                         <p className="text-sm font-medium text-gray-800 tracking-wide">{value}</p>
                    </div>
               ) : (
                    <p className="text-sm font-semibold text-gray-800">{value}</p>
               )}
          </div>
     );
}

export default function FundsRelease() {
     const [loading, setLoading] = useState(false);
     const [confirmed, setConfirmed] = useState(false);

     const handleRelease = () => {
          setLoading(true);
          setTimeout(() => {
               setLoading(false);
               setConfirmed(true);
          }, 1800);
     };

     return (
          <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-10 px-4 pb-10">
               <div className="w-full max-w-5xl">
                    <div className="mb-6">
                         <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                              Funds Release &amp; Settlement
                         </h1>
                         <p className="mt-1 text-sm text-gray-500">
                              Review final payment details and authorize transfer to landlord.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                         {/* Payment Breakdown */}
                         <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
                                   <svg
                                        className="w-4 h-4 text-emerald-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                   </svg>
                                   <h2 className="text-sm font-semibold text-gray-800">Payment Breakdown</h2>
                              </div>

                              <div className="px-6 pt-2 pb-4 divide-y divide-gray-100">
                                   <PaymentLine label="Total Student Payment" amount="€1,000.00" />
                                   <PaymentLine label="Less: Booking Fee" amount="- €293.00" variant="deduction" />
                                   <PaymentLine label="Less: StudPay Commission" amount="- €86.00" variant="deduction" />
                              </div>

                              <div className="mx-6 mb-6 rounded-xl bg-emerald-50 border border-emerald-100 px-5 py-4 flex items-center justify-between">
                                   <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-0.5">
                                             Final Payout
                                        </p>
                                        <p className="text-xs text-emerald-500">To Landlord Account</p>
                                   </div>
                                   <p className="text-2xl font-bold text-emerald-600 tracking-tight">€621.00</p>
                              </div>

                              <div className="mx-6 mb-6 flex items-start gap-2.5">
                                   <svg
                                        className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                   </svg>
                                   <p className="text-xs text-gray-500 leading-relaxed">
                                        This transaction is protected by StudPay Secure Settlement. Funds are released
                                        instantly upon authorization.
                                   </p>
                              </div>
                         </div>

                         {/* Beneficiary Details */}
                         <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
                                   <svg
                                        className="w-4 h-4 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                        />
                                   </svg>
                                   <h2 className="text-sm font-semibold text-gray-800">Beneficiary Details</h2>
                              </div>

                              <div className="px-6 py-5 grid grid-cols-2 gap-x-6 gap-y-5">
                                   <div className="col-span-2">
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                                             Account Holder Name
                                        </p>
                                        <p className="text-base font-semibold text-gray-900">Heinrich Immobilien GmbH</p>
                                   </div>

                                   <BeneficiaryField label="Bank Name" value="Deutsche Bank" />
                                   <BeneficiaryField label="BIC / SWIFT" value="DEUTDEFF" />
                                   <BeneficiaryField label="IBAN" value="DE89 3704 0044 0532 0130 00" fullWidth />
                              </div>

                              <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                                   <button
                                        onClick={handleRelease}
                                        disabled={loading || confirmed}
                                        className={`w-full rounded-xl py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                  ${confirmed
                                                  ? "bg-emerald-500 text-white cursor-default"
                                                  : loading
                                                       ? "bg-blue-400 text-white cursor-wait"
                                                       : "bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white"
                                             }`}
                                   >
                                        {confirmed ? (
                                             <span className="flex items-center justify-center gap-2">
                                                  <svg
                                                       className="w-4 h-4"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       strokeWidth={2.5}
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                  </svg>
                                                  Funds Released Successfully
                                             </span>
                                        ) : loading ? (
                                             <span className="flex items-center justify-center gap-2">
                                                  <svg
                                                       className="w-4 h-4 animate-spin"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                       />
                                                       <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                       />
                                                  </svg>
                                                  Processing...
                                             </span>
                                        ) : (
                                             "Release Rent to Landlord"
                                        )}
                                   </button>
                                   <p className="text-center text-[11px] text-gray-400">
                                        Action requires 2-factor authentication
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}