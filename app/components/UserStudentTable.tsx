import Link from "next/link";
import Image from "next/image"; 

type PaymentStatus = "Verified" | "Pending" | "Subscribed" | "Not Subscribed" | "Under Review" | "Approved" | "Rejected";

interface Actions {
     eyesimg: string;
     userimg: string;
     chatimg: string;
}


interface Payment {
     id: number;
     name: string;
     email: string;
     country: string;
     avistatus: PaymentStatus;
     kycstatus: PaymentStatus;
     status: PaymentStatus;
     actions: Actions;
}

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

const payments: Payment[] = [
     {
          id: 1,
          name: "John Smith",
          email: "john.smith@university.edu",
          country: "Country",
          status: "Verified",
          avistatus: "Subscribed",
          kycstatus: "Approved",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
     {
          id: 2,
          name: "Maria Garcia",
          email: "maria.garcia@uni.es",
          country: "Spain",
          status: "Pending",
          avistatus: "Not Subscribed",
          kycstatus: "Pending",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
     {
          id: 3,
          name: "David Chen",
          email: "david.chen@college.ca",
          country: "Canada",
          status: "Verified",
          avistatus: "Subscribed",
          kycstatus: "Approved",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
     {
          id: 4,
          name: "Sarah Johnson",
          email: "sarah.j@university.uk",
          country: "UK",
          status: "Verified",
          avistatus: "Not Subscribed",
          kycstatus: "Under Review",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
     {
          id: 5,
          name: "Ahmed Hassan",
          email: "ahmed.hassan@uni.ae",
          country: "UAE",
          status: "Pending",
          avistatus: "Subscribed",
          kycstatus: "Rejected",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
     {
          id: 6,
          name: "Lisa Wang",
          email: "lisa.wang@college.au",
          country: "Australia",
          status: "Verified",
          avistatus: "Subscribed",
          kycstatus: "Approved",
          actions: {
               eyesimg: "/images/eyes-icon.svg",
               userimg: "/images/userx.svg",
               chatimg: "/images/chat-icon.svg",
          },
     },
];

export default function UserStudentTable() {
     return (
          <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl">
               <div className="md:p-6 p-4 border-b border-solid border-gray-1600">
                    <h4 className="text-blue-1200 font-neulis-sans font-semibold text-lg leading-7">Users (6)</h4>
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
                              {payments.map((item) => (
                                   <tr key={item.id} className="group border-b border-gray1600">
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-black13 font-medium text-sm leading-5 flex items-center">
                                                  {item.name}
                                             </span>
                                        </td>
                                        {/* Email */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-gray-1100 font-normal text-sm leading-5 flex items-center">
                                                  {item.email}
                                             </span>
                                        </td>
                                        {/* Country */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span className="text-black13 font-normal text-sm leading-5 flex items-center">
                                                  {item.country}
                                             </span>
                                        </td>
                                        {/* Status */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.status].classes
                                                       }`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>
                                        {/* Avi Status */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.avistatus].classes
                                                       }`}
                                             >
                                                  {item.avistatus}
                                             </span>
                                        </td>
                                        {/* Kay Status */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <span
                                                  className={`px-2.75 h-5.5 w-fit rounded-full font-semibold text-xs leading-4 flex items-center ${statusConfig[item.kycstatus].classes
                                                       }`}
                                             >
                                                  {item.kycstatus}
                                             </span>
                                        </td>

                                        {/* More */}
                                        <td className="p-4 group-hover:bg-gray1700">
                                             <ul className="flex items-center gap-2">
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={item.actions.eyesimg}
                                                                 alt=""
                                                                 width='16'
                                                                 height='16'
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={item.actions.userimg}
                                                                 alt=""
                                                                 width='16'
                                                                 height='16'
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href={"#"} className="w-10 h-9 flex items-center justify-center">
                                                            <Image
                                                                 src={item.actions.chatimg}
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
               <div className="p-6">
                    <ul className="flex items-center justify-center gap-1">
                         <li>
                              <Link href={"#"} className="flex items-center pl-2.5 pr-4 md:h-10 h-8 gap-1 rounded-md text-black13 font-medium text-sm leading-5 border border-solid border-transparent hover:border-gray1600 transition-all duration-500 ease-in-out">
                                   <span className="flex items-center justify-center w-4 h-4">
                                        <Image
                                             src="../images/left-arrow2.svg"
                                             width='6'
                                             height='6'
                                             alt="" 
                                        />
                                   </span>
                                   Previous
                              </Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-gray1600 rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5  transition-all duration-500 ease-in-out">
                                   1
                              </Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-transparent hover:border-gray1600 rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5 transition-all duration-500 ease-in-out">
                                   2
                              </Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-transparent hover:border-gray1600 rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5 transition-all duration-500 ease-in-out">
                                   3
                              </Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center justify-center border border-solid border-transparent hover:border-gray1600 rounded-md md:w-10 w-8 md:h-10 h-8 text-black13 font-medium text-sm leading-5 transition-all duration-500 ease-in-out">
                                   <Image
                                        src="../images/dots-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </Link>
                         </li>
                         <li>
                              <Link href={"#"} className="flex items-center pl-4 pr-2.5 md:h-10 h-8 gap-1 rounded-md text-black13 font-medium text-sm leading-5 border border-solid border-transparent hover:border-gray1600  transition-all duration-500 ease-in-out">
                                   Next
                                   <span className="flex items-center justify-center w-4 h-4">
                                        <Image
                                             src="../images/right-arrow.svg"
                                              width='6'
                                             height='6'
                                             alt="" 
                                        />
                                   </span>
                              </Link>
                         </li>
                    </ul>
               </div>
          </div>
     );
}
