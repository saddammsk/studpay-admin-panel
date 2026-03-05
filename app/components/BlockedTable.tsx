"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import Approvepopap from "@/app/components/AviBlocked/Approvepopap";
import RejectDossierModal from "@/app/components/AviBlocked/RejectDossierModal";
import CustomSelect from "@/app/components/CustomSelect";


type PipelineStatus =
  | "Payment Pending"
  | "Funds Received"
  | "Locked"
  | "AVI Issued";

type VerificationStatus =
  | "Verified"
  | "Pending Review"
  | "Rejected"
  | "Requires Documents"

interface Student {
  id: number;
  name: string;
  studentId: string;
  university: string;
  amount: string;
  pipeline: PipelineStatus;
  verification: VerificationStatus;
  sla: {
    icon: string;
    time: string;
  }
  modified: {
    icon: string;
    name: string;
    date: string;
  },
}

const pipelineConfig = {
  "Payment Pending": "bg-yellow-1300/10 border-yellow2100 text-BurntOrange",
  "Funds Received": "bg-blue-1700/10 border-blue300 text-blue800",
  Locked: "bg-purple-1100/10 border-purpal12 text-purpal14",
  "AVI Issued": "bg-green-1300/10 border-lightgreen15 text-green-1800",
};

const verificationConfig = {
  Verified: "bg-green-1300/10 border-lightgreen15 text-green-1800",
  "Pending Review": "bg-yellow-1300/10 border-yellow2100 text-BurntOrange",
  Rejected: "bg-red-1300/10 border-red-1300/20 text-red-1300",
  "Requires Documents": "bg-orange-1000/10 border-orange83 text-BurntOrange2",
};

const students: Student[] = [
  {
    id: 1,
    name: "Adaora Nnamdi",
    studentId: "STU_78234",
    university: "University of Lagos",
    amount: "10.332,00 €",
    pipeline: "Payment Pending",
    verification: "Verified",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "21h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Sarah Chen",
      date: "Jan 29, 15:04",
    },
  },
  {
    id: 2,
    name: "Blessing Okoro",
    studentId: "STU_67234",
    university: "University of Lagos",
    amount: "10.332,00 €",
    pipeline: "Payment Pending",
    verification: "Pending Review",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "19h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Sarah Chen",
      date: "Jan 29, 15:04",
    },
  },
  {
    id: 3,
    name: "Ifeanyi Chukwu",
    studentId: "STU_12890",
    university: "Nnamdi Azikiwe University",
    amount: "10.332,00 €",
    pipeline: "Payment Pending",
    verification: "Rejected",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "22h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Fatima Ibrahim",
      date: "Jan 29, 16:04",
    },
  },
  {
    id: 4,
    name: "Oluwaseun Adebayo",
    studentId: "STU_91456",
    university: "Lagos State University",
    amount: "10.332,00 €",
    pipeline: "Funds Received",
    verification: "Verified",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "17h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Emmanuel Adeyemi",
      date: "Jan 29, 11:04",
    },
  },
  {
    id: 5,
    name: "Tunde Bakare",
    studentId: "STU_89012",
    university: "Obafemi Awolowo University",
    amount: "10.332,00 €",
    pipeline: "Funds Received",
    verification: "Requires Documents",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "11h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Emmanuel Adeyemi",
      date: "Jan 29, 05:04",
    },
  },
  {
    id: 6,
    name: "Chukwuemeka Adekunle",
    studentId: "STU_90123",
    university: "Federal University of Tech…",
    amount: "10.332,00 €",
    pipeline: "Funds Received",
    verification: "Verified",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "20h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Emmanuel Adeyemi",
      date: "Jan 29, 14:04",
    },
  },
  {
    id: 7,
    name: "Chidinma Okafor",
    studentId: "STU_45678",
    university: "University of Nigeria",
    amount: "10.332,00 €",
    pipeline: "Locked",
    verification: "Verified",
    sla: {
      icon: "/images/clock-yellow.svg",
      time: "0h 14m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Michael Okonkwo",
      date: "Jan 28, 17:04",
    },
  },
  {
    id: 8,
    name: "Amaka Eze",
    studentId: "STU_34567",
    university: "University of Benin",
    amount: "10.332,00 €",
    pipeline: "Locked",
    verification: "Verified",
    sla: {
      icon: "/images/clock-gray.svg",
      time: "3h 59m",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Michael Okonkwo",
      date: "Jan 29, 09:04",
    },
  },
  {
    id: 9,
    name: "Emeka Ugochukwu",
    studentId: "STU_23891",
    university: "Ahmadu Bello University",
    amount: "10.332,00 €",
    pipeline: "AVI Issued",
    verification: "Verified",
    sla: {
      icon: "/images/checkgreendark.svg",
      time: "Complete",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Fatima Ibrahim",
      date: "Jan 27, 17:04",
    },
  },
  {
    id: 10,
    name: "Ngozi Obi",
    studentId: "STU_56789",
    university: "University of Ibadan",
    amount: "10.332,00 €",
    pipeline: "AVI Issued",
    verification: "Verified",
    sla: {
      icon: "/images/checkgreendark.svg",
      time: "Complete",
    },
    modified: {
      icon: "/images/user-icon3.svg",
      name: "Sarah Chen",
      date: "Jan 25, 17:04",
    },
  },
];

export default function BlockedTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="5xl:w-full w-375">

            {/* HEADER */}

            <thead>
              <tr className="border-b border-gray-1000 text-left bg-gray24/30">
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Student</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">University</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Amount</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Pipeline Status</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Verification</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">SLA Timer</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Last Modified By</th>
                <th className="px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold">Actions</th>
              </tr>
            </thead>

            {/* BODY */}

            <tbody>
              {students.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-1000 hover:bg-gray24/50"
                >
                  {/* Student */}

                  <td className="px-3 py-4">
                    <div className="text-blue-1300 text-sm leading-5 font-normal mb-0.5">{item.name}</div>
                    <div className="text-gray-1200 text-xs leading-4 font-normal">
                      {item.studentId}
                    </div>
                  </td>

                  {/* University */}

                  <td className="px-3 py-4 text-blue-1300  text-sm leading-5 font-normal">
                    {item.university}
                  </td>

                  {/* Amount */}

                  <td className="px-3 py-4 text-blue-1300  text-sm leading-5 font-normal">
                    {item.amount}
                  </td>

                  {/* Pipeline */}

                  <td className="px-3 py-4">
                    <span
                      className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${pipelineConfig[item.pipeline]
                        }`}
                    >
                      {item.pipeline}
                    </span>
                  </td>

                  {/* Verification */}

                  <td className="px-3 py-4">
                    <span
                      className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${verificationConfig[item.verification]
                        }`}
                    >
                      {item.verification}
                    </span>
                  </td>

                  {/* SLA */}

                  <td className="px-3 py-4">

                    <span className="text-gray-1200 text-xs leading-4 font-normal flex items-center gap-1.5">
                      <Image
                        src={item.sla.icon}
                        width="16"
                        height="16"
                        alt=""
                      />
                      {item.sla.time === "Complete" ? (
                        <span className="text-green-1300">{item.sla.time}</span>
                      ) : (
                        <>
                          <span className={item.sla.icon.includes("yellow") ? "text-yellow-1300" : "text-gray-1200"}>
                            {item.sla.time.split('/')[0]}
                          </span>
                          <span className="text-gray-1200/60"> / 24h</span>
                        </>
                      )}


                    </span>
                  </td>

                  {/* Last Modified */}

                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 flex items-center justify-center">
                        <Image
                          src={item.modified.icon}
                          width="14"
                          height="14"
                          alt=""
                        />
                      </span>
                      <div className="flex-1 w-full">
                        <h4 className="text-blue-1300 text-sm leading-5 font-normal mb-0.5">{item.modified.name}</h4>
                        <span className="block text-gray-1200 text-sm leading-4 font-normal">{item.modified.date}</span>
                      </div>
                    </div>
                  </td>

                  {/* Actions */}

                  <td className="px-3 py-4">
                    <ul className="flex items-center gap-2 justify-end">
                      <li>
                        <button className="group hover:bg-LightSkyBlue rounded-md flex cursor-pointer items-center justify-center w-8 h-8">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path className="group-hover:stroke-royalBlue124"
                              d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z"
                              stroke="#0F1729"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path className="group-hover:stroke-royalBlue124"
                              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                              stroke="#0F1729"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                      <li>
                        {item.pipeline === "Locked" && (
                          <button onClick={() => setIsOpen(true)} className="text-green-1800 cursor-pointer hover:bg-gray-1600 text-sm leading-5 font-normal inline-flex items-center gap-1 border border-solid border-lightgreen15 rounded-md h-8 px-3 bg-gray-1800">
                            <Image
                              src="/icons/checkdarkgreen.svg"
                              width="16"
                              height="16"
                              alt=""
                            />
                            Approve
                          </button>
                        )}
                      </li>
                      <li>
                        {item.sla.time !== "Complete" && (
                          <button onClick={() => setIsOpen2(true)} className="text-red-1300 cursor-pointer hover:bg-red-1300/10 text-sm leading-5 font-normal inline-flex items-center gap-1 border border-solid border-red-1300/30 rounded-md h-8 px-3 bg-gray-1800">
                            <Image
                              src="/images/cross-red.svg"
                              width="16"
                              height="16"
                              alt=""
                            />
                            Refund
                          </button>
                        )}
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* APPROVE AVI MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[695px] bg-white relative shadow-66xl! h-full overflow-x-auto"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <Approvepopap />
        <div className="px-6 py-4 bg-gray-1600/50 border-t border-solid border-gray-3900">
          <ul className="flex items-center justify-between gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer sm:px-8 px-5 flex items-center sm:gap-4 gap-3 opacity-50 justify-center w-full hover:bg-green-2200/90 hover:border-green-2200/90 transition-all duration-500 ease-in-out border rounded-md text-white font-bold  text-sm leading-5 bg-green-2200 border-solid border-green-2200 h-10"
              >
                <Image
                  src="/images/shield-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                  className="brightness-10000"
                />
                Request Approval
              </button>
            </li>
          </ul>
        </div>
      </Modal>
      {/* REJECT DOSSIER MODAL */}
      <Modal
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        panelClassName="max-w-[580px] bg-white relative border border-solid border-gray23! shadow-66xl! h-full overflow-x-auto"
      >
        <Link onClick={() => setIsOpen2(false)} href={"#"} className="flex items-center justify-center w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="bg-red2100 md:px-6 p-4 py-4 flex items-center gap-3 mt-8">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
          </div>
          <div className="flex-1 w-full">
            <h4 className="font-bold text-white text-lg leading-7">
              Warning: Critical Action
            </h4>
            <p className="text-white text-sm leading-5">
              This action will cancel the AVI and trigger a refund process
            </p>
          </div>
        </div>
        <div className="md:p-6 p-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/sheild-error.svg" width={16} height={16} alt="" />
              </span>
              <h2 className="text-xl leading-7 tracking-[-0.5px] font-bold text-blue1700">
                Reject Dossier Initiate Refund
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-SteelGray text-sm leading-5 font-normal flex items-center gap-4">Dossier ID: <span className="font-bold text-blue1700">#AVI-7722</span></span>
              <span className="text-SteelGray text-sm leading-5">•</span>
              <span className="text-blue1700 text-sm leading-5 font-normal">Alexander Petrova</span>
            </div>
            <div className='mt-1.5'>
              <div className="flex items-center gap-2 mb-2">
                <label className='text-blue1700 font-normal text-sm leading-5 flex items-center'>Reason for Rejection</label>
                <span className="text-xs leading-4 font-normal inline-flex items-center justify-center px-2 h-5 bg-red2100/10 text-red2100 rounded-full">Audit Trail Required</span>
              </div>
              <CustomSelect
                className='shadow-67xl h-11 rounded-md'
                options={[
                  { label: 'Select rejection reason...', value: 'Select rejection reason...' },
                  { label: '2000', value: '2000' }
                ]}
              />
            </div>
            <div className='mt-5'>
              <div className="flex items-center gap-2 mb-2">
                <label className='text-blue1700 font-normal text-sm leading-5 flex items-center'>Detailed Justification</label>
                <span className="text-xs leading-4 font-normal inline-flex items-center justify-center px-2 h-5 bg-red2100/10 text-red2100 rounded-full">Justification Required</span>
              </div>
              <textarea className="text-SteelGray px-3.5 py-2.5 placeholder:text-SteelGray text-sm leading-5 font-normal bg-gray-1500 border border-solid border-gray-3900 rounded-md h-20 w-full" placeholder="Provide detailed justification for this rejection. This will be recorded in the audit 
trail..."></textarea>
            </div>
            <div className='mt-5'>
              <div className="flex items-center gap-2 mb-2">
                <label className='text-blue-1300 mb-1.5 font-normal text-sm leading-5 flex items-center'>Upload Visa Rejection Letter <span className='text-red-1300'>*</span></label>
              </div>
              <label className="group cursor-pointer flex flex-col items-center bg-lighrgrey41/30 border border-dashed border-SteelGray rounded-xl p-6.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28.3337 13.3333L20.0003 5L11.667 13.3333" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 5V25" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-normal text-blue1700 text-center mb-1 mt-3">
                  Drop file here or click to upload
                </p>
                <p className="text-xs text-SteelGray leading-4 font-normal">
                  PDF, JPG, PNG, DOC up to 10MB
                </p>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/images/audit-building.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                <h3 className="text-sm font-normal text-blue1700">
                  Refund Destination (Original Payment Source)
                </h3>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-lighrgrey41/50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs leading-4 text-SteelGray mb-1">Account Holder</p>
                    <p className="text-sm leading-5 font-normal text-blue1700">
                      Alexander Petrova
                    </p>
                  </div>
                  <div>
                    <p className="text-xs leading-4 text-SteelGray mb-1">Bank Name</p>
                    <p className="text-sm leading-5 font-normal text-blue1700">
                      Deutsche Bank AG
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs leading-4 text-SteelGray mb-1">IBAN</p>
                  <p className="text-sm leading-5 font-normal text-blue1700">
                    DE89 3704 0044 0532 0130 00
                  </p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-SteelGray mb-1">Refund Amount</p>
                  <p className="text-lg leading-7 font-bold text-red2100">
                    €10,356
                  </p>
                </div>
              </div>

            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/icons/sms-icon2.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                <h3 className="text-sm font-normal text-blue1700">
                  Student Notification Preview
                </h3>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-lighrgrey41/50">
                <h4 className="text-sm leading-[22.8px] font-normal text-blue1700">Subject: Your AVI Application #AVI-7722 Update</h4>
                <p className="text-xs leading-[22.8px]  text-SteelGray mt-2">Dear Alexander,</p>
                <p className="text-xs leading-[22.8px]  text-SteelGray mt-[22.8px]">We regret to inform you that your AVI application has been processed with the
                  following outcome: <strong className="font-bold text-blue1700">[Reason will appear here]</strong></p>
                <p className="text-xs leading-[22.8px]  text-SteelGray mt-[22.8px]">A refund of <strong className="font-bold text-blue1700">€10,356</strong>will be initiated to your original payment source within 5-7
                  business days.</p>
                <p className="text-xs leading-[22.8px]  text-SteelGray mt-[22.8px]">For questions, please contact support@studpay.com.</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="md:px-6 px-4 py-4 bg-gray-1600/50 border-t border-solid border-gray-3900">
          <ul className="flex items-center justify-between gap-3">
            <li>
              <button
                onClick={() => setIsOpen2(false)}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer sm:px-8 px-3 flex items-center sm:gap-4 gap-2 opacity-50 justify-center w-full hover:bg-red2100/90 hover:border-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-bold  sm:text-sm text-xs leading-5 bg-red2100 border-solid border-red2100 h-10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
                Confirm Rejection & Refund
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
}