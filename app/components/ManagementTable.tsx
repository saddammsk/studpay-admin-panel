"use client";

import Link from "next/link";
import Image from "next/image";

type VerificationStatus = "Verified" | "Not Verified";
type AccountStatus = "Active" | "Pending" | "Suspended";

const verificationConfig = {
     Verified: {
          classes: "bg-green-1500/10 border-green-1500/10 text-green-1500",
     },
     "Not Verified": {
          classes: "bg-yellow-1100/10 border-yellow-1100/10 text-yellow-1100",
     },
} as const;

const statusConfig = {
     Active: {
          classes: "bg-green-1500/10 border-green-1500/10 text-green-1500",
     },
     Pending: {
          classes: "bg-yellow-1100/10 border-yellow-1100/10 text-yellow-1100",
     },
     Suspended: {
          classes: "bg-red-1300/10 border-red-1300/10 text-red-1300",
     },
} as const;

interface Company {
     id: number;
     company: string;
     owner: string;
     email: string;
     country: {
          name: string;
          flag: string;
     };
     properties: number;
     listings: number;
     deposits: string;
     verification: VerificationStatus;
     status: AccountStatus;
}

const companies: Company[] = [
     {
          id: 1,
          company: "Berlin Student Housing GmbH",
          owner: "Hans Mueller",
          email: "hans@berlinstudenthousing.de",
          country: {
               name: "Germany",
               flag: "/images/🇩🇪.png",
          },
          properties: 12,
          listings: 45,
          deposits: "€67,500",
          verification: "Verified",
          status: "Active",
     },
     {
          id: 2,
          company: "Amsterdam Living BV",
          owner: "Sophie van der Berg",
          email: "sophie@amsterdamliving.nl",
          country: {
               name: "Netherlands",
               flag: "/images/🇳🇱.png",
          },
          properties: 8,
          listings: 32,
          deposits: "€48,000",
          verification: "Verified",
          status: "Active",
     },
     {
          id: 3,
          company: "Paris Étudiants SARL",
          owner: "Jean-Pierre Dubois",
          email: "jp.dubois@parisetudiants.fr",
          country: {
               name: "France",
               flag: "/images/🇫🇷.png",
          },
          properties: 5,
          listings: 18,
          deposits: "€27,000",
          verification: "Not Verified",
          status: "Pending",
     },
     {
          id: 4,
          company: "Paris Étudiants SARL",
          owner: "Jean-Pierre Dubois",
          email: "jp.dubois@parisetudiants.fr",
          country: {
               name: "Spain",
               flag: "/images/🇪🇸.png",
          },
          properties: 5,
          listings: 18,
          deposits: "€27,000",
          verification: "Not Verified",
          status: "Suspended",
     },
     {
          id: 5,
          company: "Paris Étudiants SARL",
          owner: "Jean-Pierre Dubois",
          email: "jp.dubois@parisetudiants.fr",
          country: {
               name: "Austria",
               flag: "/images/🇦🇹.png",
          },
          properties: 5,
          listings: 18,
          deposits: "€27,000",
          verification: "Not Verified",
          status: "Pending",
     },
     {
          id: 6,
          company: "Paris Étudiants SARL",
          owner: "Jean-Pierre Dubois",
          email: "jp.dubois@parisetudiants.fr",
          country: {
               name: "Ireland",
               flag: "/images/🇮🇪.png",
          },
          properties: 5,
          listings: 18,
          deposits: "€27,000",
          verification: "Not Verified",
          status: "Pending",
     },
];

function ManagementTable() {
     return (
          <div className="bg-white border border-gray1600 rounded-xl shadow-4xl shadow-9xl">
               <div className="overflow-x-auto">
                    <table className="4xl:w-full w-[1440px]">
                         <thead>
                              <tr className="border-b border-gray-3600 bg-gray1700/50">
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Owner / Company
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Contact Email
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Country
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Properties
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Listings
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Deposits Held
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Verification
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Status
                                   </th>
                                   <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                        Actions
                                   </th>
                              </tr>
                         </thead>

                         <tbody>
                              {companies.map((item) => (
                                   <tr
                                        key={item.id}
                                        className="border-b border-gray1600 hover:bg-gray1700/50 transition"
                                   >
                                        {/* Owner / Company */}
                                        <td className="px-4 py-4">
                                             <div className="flex flex-col">
                                                  <span className="text-black-1600  font-normal text-sm leading-5">
                                                       {item.company}
                                                  </span>
                                                  <span className="text-gray-1900 text-sm">
                                                       {item.owner}
                                                  </span>
                                             </div>
                                        </td>

                                        {/* Email */}
                                        <td className="px-4 py-4 text-gray-1900  font-normal text-sm leading-5">
                                             {item.email}
                                        </td>

                                        {/* Country */}
                                        <td className="px-4 py-4">
                                             <div className="flex items-center gap-2">
                                                  <Image
                                                       src={item.country.flag}
                                                       alt={item.country.name}
                                                       width={18}
                                                       height={12}
                                                       className="rounded-sm"
                                                  />
                                                  <span className="text-sm text-black-1600">
                                                       {item.country.name}
                                                  </span>
                                             </div>
                                        </td>

                                        {/* Properties */}
                                        <td className="px-4 py-4 text-black-1600 text-sm">
                                             {item.properties}
                                        </td>

                                        {/* Listings */}
                                        <td className="px-4 py-4 text-black-1600 text-sm">
                                             {item.listings}
                                        </td>

                                        {/* Deposits */}
                                        <td className="px-4 py-4 text-blue-1000 font-normal text-sm">
                                             {item.deposits}
                                        </td>

                                        {/* Verification */}
                                        <td className="px-4 py-4">
                                             <span
                                                  className={`text-xs font-normal border leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${verificationConfig[item.verification].classes}`}
                                             >
                                                  {item.verification}
                                             </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                             <span
                                                  className={`text-xs font-normal leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4">
                                             <ul className="flex items-center gap-2">
                                                  <li>
                                                       <Link
                                                            href="#"
                                                            className="w-8 h-8 flex items-center justify-center rounded-md  hover:bg-gray-1600 transition"
                                                       >
                                                            <Image
                                                                 src="/images/eye-icon.svg"
                                                                 alt="View"
                                                                 width={16}
                                                                 height={16}
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link
                                                            href="#"
                                                            className="w-8 h-8 flex items-center justify-center rounded-md  hover:bg-gray-1600 transition"
                                                       >
                                                            <Image
                                                                 src="/images/pencile-icon2.svg"
                                                                 alt="Edit"
                                                                 width={16}
                                                                 height={16}
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link
                                                            href="#"
                                                            className="w-8 h-8 flex items-center justify-center rounded-md  hover:bg-gray-1600 transition"
                                                       >
                                                            <Image
                                                                 src="/images/user-setting.svg"
                                                                 alt="Delete"
                                                                 width={16}
                                                                 height={16}
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link
                                                            href="#"
                                                            className="w-8 h-8 flex items-center justify-center rounded-md  hover:bg-gray-1600 transition"   >
                                                            <Image
                                                                 src="/images/block-icon.svg"
                                                                 alt="Delete"
                                                                 width={16}
                                                                 height={16}
                                                            />
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link
                                                            href="#"
                                                            className="w-8 h-8 flex items-center justify-center rounded-md  hover:bg-gray-1600 transition"
                                                       >
                                                            <Image
                                                                 src="/images/del-icon2.svg"
                                                                 alt="Delete"
                                                                 width={16}
                                                                 height={16}
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
          </div>
     );
}

export default ManagementTable;
