import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "../store/hooks";
import { useState } from "react";

type PaymentStatus = "Verified" | "Pending" | "Rejected";

interface Actions {
  eyesimg: string;
  checkimg?: string;
  closeimg?: string;
}

interface Payment {
  id: number;
  name: string;
  email: string;
  document: string;
  date: string;
  documenticon: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Verified: {
    icon: "/images/checkgreendark.svg",
    classes: "bg-lightgreen12 text-green12",
  },
  Pending: {
    icon: "/images/clock-icon.svg",
    classes: "bg-yellow1200 text-brown1200",
  },
  Rejected: {
    icon: "/images/reject-icon.svg",
    classes: "bg-lightred1200 text-red1200",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@university.edu",
    document: "Passport",
    date: "Jan 15, 2024",
    status: "Pending",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@uni.es",
    document: "Student Visa",
    date: "Jan 14, 2024",
    status: "Verified",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 3,
    name: "David Chen",
    email: "david.chen@college.ca",
    document: "University ID",
    date: "Jan 13, 2024",
    status: "Pending",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@university.uk",
    document: "Passport",
    date: "Jan 12, 2024",
    status: "Rejected",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@uni.ae",
    document: "Student Visa",
    date: "Jan 11, 2024",
    status: "Pending",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@college.au",
    document: "Bank Statement",
    date: "Jan 10, 2024",
    status: "Verified",
    documenticon: "/images/document-icon.svg",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
];

export default function KycDocumentTable() {
   const {payments, filters} = useAppSelector((state)=> state.kycDocuments);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   const filteredPayments = payments.filter((payment)=>{
      const search = filters.search.toLowerCase().trim();
      const matchesSearch = 
      !search ||
      payment.name.toLowerCase().includes(search) ||
      payment.email.toLowerCase().includes(search) ||
      payment.document.toLowerCase().includes(search);

      const matchesStatus = 
      filters.status === "All Status" || payment.status === filters.status;

      return matchesSearch && matchesStatus;

   })


   const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
   const paginatedItems = filteredPayments.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );


  return (
    <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl">
      <div className="md:p-6 p-4 border-b border-gray-1600">
        <h4 className="text-blue-1200 font-semibold text-lg">Documents ({filteredPayments.length})</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Student Name</th>
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Email</th>
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Document Type</th>
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Submission Date</th>
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Status</th>
              <th className="px-4 py-3 text-left text-sm text-gray-1400">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedItems.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition">
                <td className="p-4">{item.name}</td>
                <td className="p-4 text-gray-1100">{item.email}</td>

                <td className="p-4 flex items-center gap-2">
                  <Image src={"/images/document-icon.svg"} alt="" width={16} height={16} />
                  {item.document}
                </td>

                <td className="p-4">{item.date}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={statusConfig[item.status].icon}
                      alt=""
                      width={12}
                      height={12}
                    />
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </td>

                <td className="p-4">
                  <ul className="flex items-center gap-2">

                    <li>
                      <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1600 transition">
                        <Image src={"/images/eyes-icon.svg"} alt="" width={16} height={16} />
                      </Link>
                    </li>

                    {item.status === "Pending" && (
                      <li>
                        <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1300 transition">
                          <Image src={"/images/checkgreen-icon.svg"} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}

                    {item.status === "Pending" && (
                      <li>
                        <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1300 transition">
                          <Image src={"/images/closeRed.svg"} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}

                  </ul>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        {payments.length > 0 && (
                    <div className="p-6">
                         <ul className="flex items-center justify-center gap-1">
                              <li>
                                   <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`flex items-center pl-2.5 pr-4 md:h-10 h-8 gap-1 rounded-md text-black13 font-medium text-sm leading-5 border border-solid border-transparent hover:border-gray1600 transition-all duration-500 ease-in-out ${currentPage === 1 ? "opacity-50 pointer-events-none" : ""}`}
                                   >
                                        <span className="flex items-center justify-center w-4 h-4">
                                             <Image
                                                  src="../images/left-arrow2.svg"
                                                  width='6'
                                                  height='6'
                                                  alt="" 
                                             />
                                        </span>
                                        Previous
                                   </button>
                              </li>
                              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                                   <li key={page}>
                                        <button
                                             onClick={() => setCurrentPage(page)}
                                             className={`flex items-center justify-center border border-solid ${currentPage === page ? "border-gray1600" : "border-transparent hover:border-gray1600"} rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5 transition-all duration-500 ease-in-out ${currentPage === page ? "" : ""}`}
                                        >
                                             {page}
                                        </button>
                                   </li>
                              ))}
                              {totalPages > 3 && currentPage < totalPages - 1 && (
                                   <li>
                                        <span className="flex items-center justify-center border border-solid border-transparent hover:border-gray1600 rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5 transition-all duration-500 ease-in-out">
                                             <Image
                                                  src="../images/dots-icon.svg"
                                                  width='16'
                                                  height='16'
                                                  alt=""
                                             />
                                        </span>
                                   </li>
                              )}
                              <li>
                                   <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center pl-4 pr-2.5 md:h-10 h-8 gap-1 rounded-md text-black13 font-medium text-sm leading-5 border border-solid border-transparent hover:border-gray1600  transition-all duration-500 ease-in-out ${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}`}
                                   >
                                        Next
                                        <span className="flex items-center justify-center w-4 h-4">
                                             <Image
                                                  src="../images/right-arrow.svg"
                                                  width='6'
                                                  height='6'
                                                  alt=""
                                             />
                                        </span>
                                   </button>
                              </li>
                         </ul>
                    </div>
               )}
      </div>
    </div>
  );
}
