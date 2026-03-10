"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import VerifyGuarantorChecked from "@/app/components/VerifyGuarantorChecked";

type Student = {
     id: string;
     name: string;
     Gname: string;
     type: string;
     coverage: string;
     date: string;
     status: "Active" | "Pending" | "Expired" | "Claimed";
     doc: string;
     action: string;
};

const students: Student[] = [
     {
          id: "GRT-2024-001",
          name: "Marie Schmidt",
          Gname: "Klaus Schmidt (Parent)",
          type: "Financial",
          coverage: "15.000,00 €",
          date: "30 Jun 2025",
          status: "Active",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     }, {
          id: "GRT-2024-002",
          name: "Jean-Pierre Dubois",
          Gname: "BNP Paribas",
          type: "Rental",
          coverage: "8.500,00 €",
          date: "15 Mar 2025",
          status: "Active",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     }, {
          id: "GRT-2024-003",
          name: "Anna Kowalski",
          Gname: "StudPay Internal",
          type: "Financial",
          coverage: "22.000,00 €",
          date: "31 Dec 2024",
          status: "Pending",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     }, {
          id: "GRT-2024-004",
          name: "Luca Rossi",
          Gname: "UniCredit Bank",
          type: "Rental",
          coverage: "6.000,00 €",
          date: "30 Sept 2024",
          status: "Expired",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     }, {
          id: "GRT-2024-005",
          name: "Sofia Martinez",
          Gname: "Maria Martinez (Parent)",
          type: "Financial",
          coverage: "18.500,00 €",
          date: "15 Jan 2025",
          status: "Claimed",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     }, {
          id: "GRT-2024-006",
          name: "Henrik Andersen",
          Gname: "Danske Bank",
          type: "Financial",
          coverage: "25.000,00 €",
          date: "20 Aug 2025",
          status: "Active",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     },
     {
          id: "GRT-2024-007",
          name: "Elena Popescu",
          Gname: "Ionut Popescu (Parent)",
          type: "Rental",
          coverage: "4.500,00 €",
          date: "28 Feb 2025",
          status: "Pending",
          doc: "/images/eyes-blue.svg",
          action: "/icons/dots-vertical.svg",
     },

];

const badgeStyles = {
     status: {
          Active: "bg-rosepink22 border-lightgreen17/20 text-green54",
          Pending: "bg-rosepink22 border-yellow-1100/20 text-darkbrownishOrange",
          Expired: "bg-gray-2000 border-gray-3600 text-gray-1900",
          Claimed: "bg-rosepink22 border-red1600/20 text-DarkCrimson",
     },

};

export default function StudentTable() {
     const [openRow, setOpenRow] = useState<string | null>(null);
     const [isOpen, setIsOpen] = useState(false);
     const [isOpen2, setIsOpen2] = useState(false);
     const [isOpen3, setIsOpen3] = useState(false);

     return (
          <>
               <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto">
                    <table className="2xl:w-full w-300">
                         <thead className="bg-gray-2000/30 border-b border-gray-3600">
                              <tr>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Guaranty ID</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Student Name</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Guarantor Name</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Type</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Coverage</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Expiry Date</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Status</th>
                                   <th className="px-3.5 py-4 text-left text-blue-1300 text-sm leading-5 font-bold">Doc</th>
                                   <th className="px-3.5 py-4 text-blue-1300 text-sm leading-5 font-bold"></th>
                              </tr>
                         </thead>

                         <tbody>
                              {students.map((student) => (
                                   <tr key={student.id}
                                        className="border-b border-gray-3600 hover:bg-gray-2000/50 transition last:border-b-0"
                                   >
                                        <td className="p-4 text-gray-1900 text-sm font-normal leading-5">
                                             {student.id}
                                        </td>

                                        <td className="p-4">
                                             <p className="text-blue-1300 text-sm font-normal leading-5">
                                                  {student.name}
                                             </p>
                                        </td>

                                        <td className="p-4">
                                             <p className="text-blue-1300 text-sm font-normal leading-5">
                                                  {student.Gname}
                                             </p>
                                        </td>

                                        <td className="p-4">
                                             <p className="text-blue-1300 text-sm font-normal leading-5 border border-solid border-gray-3600 rounded-full h-5.5 px-2.5 inline-flex items-center justify-center">
                                                  {student.type}
                                             </p>
                                        </td>

                                        <td className="p-4">
                                             <p className="text-blue-1300 text-sm font-normal leading-5">
                                                  {student.coverage}
                                             </p>
                                        </td>
                                        <td className="p-4">
                                             <p className="text-blue-1300 text-sm font-normal leading-5">
                                                  {student.date}
                                             </p>
                                        </td>
                                        <td className="p-4">
                                             <span
                                                  className={`px-2.5 h-5.5 border rounded-full inline-flex items-center justify-center text-xs font-normal leading-4 ${badgeStyles.status[student.status]}`}
                                             >
                                                  {student.status}
                                             </span>
                                        </td>
                                        <td className="p-4">
                                             <Link onClick={() => setIsOpen3(true)} href={"#"} className="group w-10 h-10 rounded-md hover:bg-rosepink22 flex items-center justify-center">
                                                  <Image
                                                       src={student.doc}
                                                       width='16'
                                                       height='16'
                                                       alt=""
                                                       className="brightness-0 group-hover:brightness-[inherit] "
                                                  />
                                             </Link>
                                        </td>
                                        <td className="p-4">
                                             <div className="relative ml-auto">

                                                  <button
                                                       onClick={() =>
                                                            setOpenRow(openRow === student.id ? null : student.id)
                                                       }
                                                       className="w-10 h-10 cursor-pointer rounded-md hover:bg-lighrgrey44 ml-auto flex items-center justify-center"
                                                  >
                                                       <Image
                                                            src={student.action}
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                       />
                                                  </button>

                                                  {openRow === student.id && (
                                                       <div className="absolute right-0 p-1.5 mt-2 w-50 bg-white shadow-73xl rounded-lg border border-solid border-lighrgrey45 z-10">
                                                            <ul>
                                                                 <li className="mb-1.5">
                                                                      <Link onClick={() => setIsOpen2(true)}
                                                                           href="#"
                                                                           className="text-green-2200 capitalize tracking-[-0.28px] text-sm leading-4 font-medium flex items-center gap-2 p-2.5"
                                                                      >
                                                                           <Image src="/icons/Verify-file.svg" width={20} height={20} alt="" />
                                                                           Verify Guarantor
                                                                      </Link>
                                                                 </li>

                                                                 <li>
                                                                      <Link onClick={() => setIsOpen(true)}
                                                                           href="#"
                                                                           className="text-red-1200 capitalize tracking-[-0.28px] text-sm leading-4 font-medium flex items-center gap-2 p-2.5"
                                                                      >
                                                                           <Image src="/images/warning.svg" width={20} height={20} alt="" />
                                                                           Initiate Claim
                                                                      </Link>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                  )}
                                             </div>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
               {/* MODAL */}
               <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    panelClassName="max-w-[512px] bg-gray-1500 relative md:p-6 p-4"
               >
                    <div className=''>
                         <h4 className='text-red1600 font-bold flex items-center gap-2 text-2xl leading-6 tracking-[-0.6px] gap-1'><Image src="/images/warning.svg" width={20} height={20} alt="" /> Initiate Claim Process</h4>
                         <p className='text-gray-1900 font-normal text-sm leading-5 mt-1.5'>Start the claim process against the guarantor due to student default.</p>
                    </div>
                    <div className="mt-6 bg-rosepink22/50 rounded-lg border border-solid border-red1600/20 p-4">
                         <h4 className='text-DarkCrimson font-normal text-base leading-6 gap-2 flex items-center'><Image src="/images/claim-icon.svg" width={16} height={16} alt="" /> Claim Details</h4>
                         <ul className="grid grid-cols-2 gap-2 mt-3">
                              <li>
                                   <span className="text-gray-1900 text-sm leading-5 font-normal block">Guaranty ID:</span>
                                   <p className="text-blue-1300 text-sm  leading-5 font-medium block">GRT-2024-0892</p>
                              </li>
                              <li>
                                   <span className="text-gray-1900 text-sm leading-5 font-normal block">Student:</span>
                                   <p className="text-blue-1300 text-sm  leading-5 font-medium block">Emma Johnson</p>
                              </li>
                              <li>
                                   <span className="text-gray-1900 text-sm leading-5 font-normal block">Guarantor:</span>
                                   <p className="text-blue-1300 text-sm  leading-5 font-medium block">John Smith Sr.</p>
                              </li>
                              <li>
                                   <span className="text-gray-1900 text-sm leading-5 font-normal block">Claim Amount:</span>
                                   <p className="text-blue-1300 text-sm leading-5 font-bold block">15.000,00 €</p>
                              </li>
                         </ul>
                    </div>
                    <div className="mt-6">
                         <h4 className="font-normal text-sm leading-5 mb-2.5">Reason for Claim<span className="text-red1600">*</span></h4>
                         <textarea className="text-gray-1900 placeholder:text-gray-1900 rounded-md text-sm leading-5 font-normal px-3.5 py-2 bg-gray-1500 border border-solid border-gray-3600 h-25 w-full" placeholder="Describe the default circumstances and any collection attempts 
made..."></textarea>
                         <p className="text-gray-1900 text-xs leading-4 font-normal mt-2">This information will be included in the official claim documentation.</p>
                    </div>
                    <div className="mt-4 bg-gray-2000/50 rounded-lg p-3 flex items-center gap-2">
                         <span className="w-4 h-4 flex items-center justify-center">
                              <Image src="/images/clock-icon.svg" width={10} height={16} alt="" className="brightness-0" />
                         </span>
                         <p className="text-gray-1900 text-xs leading-4 font-normal">
                              <span className="text-blue-1300">Processing Time:</span> Claims are typically processed within 5-10 business days.
                              The guarantor will be notified via registered mail.
                         </p>
                    </div>
                    <ul className="grid grid-cols-2 gap-3 mt-6">
                         <li>
                              <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center text-blue-1300 text-sm leading-5 font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 w-full hover:bg-lighrgrey44">Cancel</Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center text-white gap-4 text-sm leading-5 font-normal bg-red1600 border opacity-50 border-solid border-red1600 rounded-md h-10 w-full hover:bg-red1600/90"><Image src="/images/warning.svg" width={10} height={16} className="brightness-10000" alt="" /> Initiate Claim</Link>
                         </li>
                    </ul>
               </Modal>
               {/* MODAL */}
               <Modal
                    isOpen={isOpen2}
                    onClose={() => setIsOpen2(false)}
                    panelClassName="max-w-[512px] bg-gray-1500 relative md:p-6 p-4"
               >
                    <div className=''>
                         <h4 className='text-blue-1300 font-bold flex items-center gap-2 text-2xl leading-6 tracking-[-0.6px]'><Image src="/icons/Verify-card.svg" width={20} height={20} alt="" /> Verify Guarantor</h4>
                         <p className='text-gray-1900 font-normal text-sm leading-5 mt-1.5'>Complete the verification checklist for the guarantor before
                              activation.</p>
                    </div>
                    <div className="bg-gray-2000 rounded-lg p-4 mt-6">
                         <ul>
                              <li className="text-gray-1900 text-sm leading-5 font-mormal flex items-center justify-between mb-2">Guarantor: <span className="text-blue-1300 block">John Smith Sr.</span></li>
                              <li className="text-gray-1900 text-sm leading-5 font-mormal flex items-center justify-between">Student: <span className="text-blue-1300 block">Emma Johnson</span></li>
                         </ul>
                    </div>
                    <div className="mt-4">
                         <h4 className="text-blue-1300 text-sm leading-5 mb-3">Verification Checklist</h4>
                         <VerifyGuarantorChecked />
                    </div>
                    <ul className="grid grid-cols-2 sm:gap-3 gap-1.5 mt-6">
                         <li>
                              <Link onClick={() => setIsOpen2(false)} href={"#"} className="flex items-center justify-center text-blue-1300 sm:text-sm text-xs leading-5 font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 w-full hover:bg-lighrgrey44">Cancel</Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center text-green54 gap-4 sm:text-sm text-xs leading-5 font-normal bg-lightgreen17 border opacity-50 border-solid border-lightgreen17 rounded-md h-10 w-full hover:bg-lightgreen17/90"><Image src="/icons/confirm-clock-icon.svg" width={16} height={16} alt="" /> Confirm Verification</Link>
                         </li>
                    </ul>
               </Modal>

               {/* MODAL */}
               <Modal
                    isOpen={isOpen3}
                    onClose={() => setIsOpen3(false)}
                    panelClassName="max-w-[1824px] bg-white/70 border border-solid border-white/30 rounded-2xl! relative lg:items-center items-start "
               >
                    <div className="flex items-center sm:px-6 sm:py-5 p-4 gap-3 bg-white rounded-t-2xl border-b border-solid border-gray-3600">
                         <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-1400/10">
                              <Image src="/icons/DocumentReview.svg" width={20} height={20} alt="" />
                         </span>
                         <div className='flex-1 w-full'>
                              <h4 className='text-blue-1300 font-bold flex items-center gap-2 text-lg leading-7'>Guaranty Document Review</h4>
                              <p className='text-gray-1900 font-normal text-sm leading-5 mt-1.5'>Reference: GUA-2024-001847</p>
                         </div>
                    </div>
                    <div className="lg:flex block lg:h-[calc(100vh-250px)] h-[calc(100vh-160px)] lg:overflow-hidden overflow-y-auto">
                         <div className="w-full flex-1">
                              <div className="bg-white flex items-center justify-between py-2.5 px-3">
                                   <div className="flex items-center sm:gap-4 gap-1.5">
                                        <ul className="flex items-center gap-2">
                                             <li>
                                                  <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                                                       <Image src="/icons/minus-zoom.svg" width={16} height={16} alt="" />
                                                  </Link>
                                             </li>
                                             <li>
                                                  <span className="text-gray-1900 text-sm text-center leading-5 font-normal block sm:w-16 w-11">100%</span>
                                             </li>
                                             <li>
                                                  <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                                                       <Image src="/icons/zoom-icon.svg" width={16} height={16} alt="" />
                                                  </Link>
                                             </li>
                                        </ul>
                                        <span className="flex items-center bg-gray-3600 w-px h-4"></span>
                                        <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                                             <Image src="/icons/refresh-icon.svg" width={16} height={16} alt="" />
                                        </Link>
                                   </div>
                                   <Link href={"#"} className="flex items-center justify-center text-blue1700 text-sm h-9 leading-5 gap-2 px-3 bg-gray-1500 border border-solid border-gray-3600 rounded-[10px]">
                                        <Image src="/icons/upload-icon.svg" width={16} height={16} alt="" />
                                        Download
                                   </Link>
                              </div>
                              <div className="bg-gray-6200/50 rounded-xl sm:p-6 p-4 sm:h-[calc(100%-56px)] overflow-y-auto">
                                   <div className="bg-white shadow-7xl sm:p-12 p-5 max-w-148.75 w-full mx-auto">
                                        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-gray-3600 pb-6">
                                             <div className="flex items-center gap-3">
                                                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-1400/10">
                                                       <Image src="/icons/file-blue.svg" width={24} height={24} alt="" />
                                                  </span>
                                                  <div className='flex-1 w-full'>
                                                       <h4 className='text-blue-1300 font-bold flex items-center text-base leading-6'>StudPay Financial Services</h4>
                                                       <p className='text-gray-1900 font-normal text-sm leading-5'>Official Guarantee Document</p>
                                                  </div>
                                             </div>
                                             <span className="text-green-1600 text-xs rounded-full leading-4 inline-flex items-center gap-2 bg-green-1600/10 border border-solid border-green-1600/20 h-7.5 px-3"><Image src="/icons/sheild-greendark.svg" width={16} height={16} alt="" /> Verified</span>
                                        </div>
                                        <div className="text-center sm:my-12 my-5">
                                             <h4 className="text-blue1700 sm:text-2xl text-base leading-8 font-bold">PARENTAL GUARANTEE LETTER</h4>
                                             <p className="text-gray-1900 text-base leading-6 font-normal sm:mt-2 mt-1">Reference: GUA-2024-001847</p>
                                        </div>
                                        <div className="pb-4">
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">Date: January 15, 2024</p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">To: StudPay Financial Services</p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">
                                                  I, <span className="text-blue1700 font-bold"> John Smith,</span> hereby unconditionally and irrevocably guarantee the repayment
                                                  of the education financing facility granted to my ward, <span className="text-blue1700 font-bold"> Emma Smith </span> (Student ID:
                                                  STU-2024-5847).
                                             </p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">
                                                  Facility Amount: <span className="text-blue1700 font-bold"> €15,000.00</span>
                                             </p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">
                                                  Loan Reference: <span className="text-blue1700 font-bold"> LN-2024-001</span>
                                             </p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">
                                                  Duration: 36 months
                                             </p>
                                             <p className="text-blue1700 text-sm leading-[22.8px] font-normal mb-4">
                                                  I understand and agree that in the event of default by the borrower, I shall be
                                                  liable for the full outstanding amount including any accrued interest and
                                                  applicable fees.
                                             </p>
                                        </div>
                                        <div className="flex items-start justify-between border-t border-solid border-gray-3600 pt-8">
                                             <div className="">
                                                  <p className="text-blue1700 text-sm leading-[22.8px] font-normal">Guarantor Signature:</p>
                                                  <div className="sm:max-w-48 max-w-30 w-full border-b border-solid text-center border-blue1700/30 sm:pt-6.5 pt-4 sm:pb-2 pb-1 sm:px-8 px-3 sm:mt-4 mt-0">
                                                       <h4 className="text-blue-1400 sm:text-2xl text-xl font-normal italic leading-8">John Smith</h4>
                                                  </div>
                                                  <p className="text-gray-1900 text-xs leading-4 font-normal mt-2">John Smith</p>
                                             </div>
                                             <div className="">
                                                  <p className="text-blue1700 text-sm leading-[22.8px] text-right mb-4">Date:</p>
                                                  <p className="text-blue1700 text-sm leading-[22.8px] text-right">January 15, 2024</p>
                                             </div>
                                        </div>
                                        <div className="text-center border-t border-solid border-gray-3600 sm:pt-8 pt-5 sm:mt-6 mt-4">
                                             <p className="text-grya-1900 text-xs leading-4 font-normal mb-1">
                                                  This document is digitally signed and verified by StudPay's secure document verification
                                                  system.
                                             </p>
                                             <p className="text-grya-1900 text-xs leading-4 font-normal">
                                                  Document ID: DOC-2024-001847-GUA | Verification Code: VF7X-K9M2-P4QL
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="lg:max-w-[384px] max-w-full w-full bg-white lg:p-6 p-4 h-full overflow-y-auto">
                              <div className="">
                                   <h4 className="text-grya-1900 text-xs leading-4 font-bold uppercase">Document Information</h4>
                                   <ul className="mt-4">
                                        <li>
                                             <Link href={"#"} className="sm:p-4 p-2.5 rounded-xl flex items-center gap-3 bg-lighrgrey46/50 border border-solid border-royalBlue130/10">
                                                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-1600/10"><Image src="/images/check-green-round.svg" width={20} height={20} alt="" /></span>
                                                  <div className="flex-1 w-full">
                                                       <h4 className="text-blue1700 text-sm font-normal leading-5">Document Status</h4>
                                                       <span className="text-blue1700 font-bold text-xs leading-2 h-5.5 px-2.5 border border-solid border-green-1600/10 bg-green-1600/20 rounded-full inline-flex items-center justify-center mt-0.5">Verified</span>
                                                  </div>
                                             </Link>
                                        </li>
                                        <li className="mt-6">
                                             <Link href={"#"} className="sm:p-4 p-2.5 rounded-xl flex items-center gap-3">
                                                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-1400/10"><Image src="/images/file-blue.svg" width={16} height={16} alt="" /></span>
                                                  <div className="flex-1 w-full">
                                                       <h4 className="text-grya-1900 text-xs font-normal leading-4 uppercase">Document Type</h4>
                                                       <p className="text-blue1700 text-sm font-normal leading-5 mt-0.5">Parental Guarantee Letter</p>
                                                  </div>
                                             </Link>
                                        </li>
                                        <li className="mt-4">
                                             <Link href={"#"} className="sm:p-4 p-2.5 rounded-xl flex items-center gap-3">
                                                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-1400/10"><Image src="/icons/upload-user.svg" width={16} height={16} alt="" /></span>
                                                  <div className="flex-1 w-full">
                                                       <h4 className="text-grya-1900 text-xs font-normal leading-4 uppercase">Uploaded By</h4>
                                                       <p className="text-blue1700 text-sm font-normal leading-5 mt-0.5">Emma Smith</p>
                                                  </div>
                                             </Link>
                                        </li>
                                        <li className="mt-4">
                                             <Link href={"#"} className="sm:p-4 p-2.5 rounded-xl flex items-center gap-3">
                                                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-1400/10"><Image src="/icons/calendar-time.svg" width={16} height={16} alt="" /></span>
                                                  <div className="flex-1 w-full">
                                                       <h4 className="text-grya-1900 text-xs font-normal leading-4 uppercase">Upload Timestamp</h4>
                                                       <p className="text-blue1700 text-sm font-normal leading-5 mt-0.5">Jan 15, 2024 at 2:34 PM</p>
                                                  </div>
                                             </Link>
                                        </li>
                                        <li className="mt-4">
                                             <Link href={"#"} className="sm:p-4 p-2.5 rounded-xl flex items-center gap-3">
                                                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-1400/10"><Image src="/icons/linked-icon.svg" width={16} height={16} alt="" /></span>
                                                  <div className="flex-1 w-full">
                                                       <h4 className="text-grya-1900 text-xs font-normal leading-4 uppercase">Linked Loan</h4>
                                                       <p className="text-blue1700 text-sm font-normal leading-5 mt-0.5">LN-2024-001</p>
                                                  </div>
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className="border-t border-solid border-gray-3600 pt-6 mt-8">
                                   <div className="flex items-center gap-2">
                                        <h4 className="text-blue1700 text-sm leading-5 font-bold ">Admin Decision</h4>
                                        <span className="inline-flex items-center text-blue-1400 text-xs leading-4 gap-1 border border-solid border-blue-1400/20 bg-blue-1400/10 px-2 h-5.5 rounded-full"><Image src="/images/user-blue.svg" width={12} height={12} alt="" /> 4-Eyes Required</span>
                                   </div>
                                   <div className="px-4 h-12 mt-4 flex items-center justify-between bg-blue-1400 rounded-[10px]">
                                        <div className="flex items-center gap-3">
                                             <Image src="/images/check-round.svg" width={28} height={28} alt="" />
                                             <h4 className="text-white text-base leading-6 font-normal">Approve Document</h4>
                                        </div>
                                        <span className="inline-flex items-center text-white text-xs leading-4 gap-1 border border-solid border-white/30 bg-white/20 px-2 h-5.5 rounded-full"><Image src="/images/user-eye-icon.svg" width={16} height={16} alt="" /> 4-Eyes</span>
                                   </div>
                                   <div className="px-4 h-12 mt-4 flex items-center justify-between bg-gray-1500 border border-solid border-red2100/30 rounded-[10px]">
                                        <div className="flex items-center gap-3">
                                             <Image src="/images/reject-cross.svg" width={28} height={28} alt="" />
                                             <h4 className="text-red2100 text-base leading-6 font-normal">Reject Document</h4>
                                        </div>
                                        <Link href={"#"} className="flex items-center justify-center w-4 h-4">
                                             <Image src="/icons/down-arrow-red.svg" className="opacity-60" width={16} height={16} alt="" />
                                        </Link>
                                   </div>
                                   <div className="px-4 h-12 mt-4 flex items-center justify-between bg-gray-1500 border border-solid border-yellow-1100/30 rounded-[10px]">
                                        <div className="flex items-center gap-3">
                                             <Image src="/icons/refresh-yellow.svg" width={28} height={28} alt="" />
                                             <h4 className="text-yellow-1100 text-base leading-6 font-normal">Reject Document</h4>
                                        </div>
                                   </div>
                                   <p className="text-grya-1900 mt-4 text-xs leading-[19.5px] font-normal">
                                        Approving this document requires a second admin sign-off to
                                        complete the 4-Eyes verification process. Requesting a new
                                        version will send an instant notification to the student.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-gray-6200/50 flex items-center justify-between border-t border-solid border-gray-3600 rounded-b-2xl px-2.5 py-3.5">
                         <p className="text-grya-1900 text-xs leading-4 flex items-center gap-1"><Image src="/images/eye-icon.svg" width={16} height={16} alt="" /> Last viewed by <span className="text-blue1700 block"> Admin Sarah </span> at <span className="text-blue1700 block">10:15 AM</span> </p>
                         <p className="text-grya-1900 text-xs leading-4 flex items-center gap-2"><Image src="/images/clock-gray.svg" width={14} height={14} alt="" /> Today</p>
                    </div>

               </Modal>
          </>
     );
}