 "use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";

const statusConfig = {
     Verified: {
          classes: "bg-lightgreen12 text-green12",
     },
     Pending: {
          classes: "bg-yellow1200 text-brown1200",
     },
     Subscribed: {
          classes: "bg-white-1000 text-blue-1000",
     },
     Approved: {
          classes: "bg-lightgreen12 text-green12",
     },
     "Not Subscribed": {
          classes: "bg-gray-1600 text-blue-1100",
     },
     "Under Review": {
          classes: "bg-yellow1200 text-brown1200",
     },
     Rejected: {
          classes: "bg-lightred1200 text-red1200",
     },

} as const;

export default function UserStudentTable() {
     const { students, filters } = useAppSelector((state) => state.usersStudents);
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 6;

     const filteredStudents = students.filter((student) => {
          const search = filters.search.toLowerCase().trim();

          const matchesSearch =
               !search ||
               student.name.toLowerCase().includes(search) ||
               student.email.toLowerCase().includes(search) ||
               student.country.toLowerCase().includes(search);

          const matchesCountry =
               filters.country === "All Countries" || student.country === filters.country;

          const matchesStatus =
               filters.status === "All Status" || student.status === filters.status;

          return matchesSearch && matchesCountry && matchesStatus;
     });

          const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

          const paginatedStudents = filteredStudents.slice(
               (currentPage - 1) * itemsPerPage,
               currentPage * itemsPerPage
          );


     return (
          <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl">
               <div className="md:p-6 p-4 border-b border-solid border-gray-1600">
                    <h4 className="text-blue-1200 font-neulis-sans font-semibold text-lg leading-7">
                         Users ({filteredStudents.length})
                    </h4>
               </div>
               <div className="overflow-x-auto">
                    <table className="2xl:w-full w-341.25">
                         <thead className="bg-white text-left">
                              <tr className="group">
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">Name</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">Email</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">Country</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">Account Status</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">AVI Status</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">KYC Status</th>
                                   <th className="group-hover:bg-gray1700 text-gray-1400 font-medium text-sm leading-5 border-b border-solid border-gray1600 px-4 py-3.5">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {paginatedStudents.map((item) => (
                                   <tr key={item.id} className="group border-b border-gray1600">
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-black13 font-medium text-sm leading-5 flex items-center">
                                                  {item.name}
                                             </span>
                                        </td>
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-gray-1100 font-normal text-sm leading-5 flex items-center">
                                                  {item.email}
                                             </span>
                                        </td>
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-black13 font-normal text-sm leading-5 flex items-center">
                                                  {item.country}
                                             </span>
                                        </td>
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.status].classes
                                                       }`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.avistatus].classes
                                                       }`}
                                             >
                                                  {item.avistatus}
                                             </span>
                                        </td>
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.kycstatus].classes
                                                       }`}
                                             >
                                                  {item.kycstatus}
                                             </span>
                                        </td>

                                        <td className="p-4 group-hover:bg-gray1700">
                                             <ul className="flex items-center gap-2">
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={"/images/eyes-icon.svg"}
                                                                 alt=""
                                                                 width='16'
                                                                 height='16'
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={"/images/userx.svg"}
                                                                 alt=""
                                                                 width='16'
                                                                 height='16'
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={"/images/chat-icon.svg"}
                                                                 alt=""
                                                                 width='16'
                                                                 height='16'
                                                            />
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
               {/* Functional Pagination */}
               {students.length > 0 && (
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
     );
}
