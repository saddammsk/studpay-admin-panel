"use client";
import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";
import ProgressBar from "@/app/components/ProgressBar";
import { Checkbox } from '@headlessui/react'

type PaymentStatus = "Verified" | "Pending" | "Rejected";
type PlanStatus = "Premium" | "Free";

interface UserInfo {
     info: string;
     name: string;
     mail: string;
}
interface RouteInfo {
     arrowicon: string;
     pkimg: string;
     ausimg: string;
}

interface Payment {
     id: number;
     userid: string;
     userinfo: UserInfo;
     route: RouteInfo;
     status: PaymentStatus;
     risk: number;
     onboardingPercent: number;
     ltv: string;
     plan: PlanStatus;
     actions: string;
}

const statusConfig = {
     Verified: {
          classes: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17",
     },
     Pending: {
          classes: "bg-lightgreen18 border-yellow-1100/20 text-yellow-1100",
     },
     Rejected: {
          classes: "bg-lightgreen18 border-red1600/20 text-red1600",
     },
} as const;

const planConfig = {
     Premium: {
          classes: "bg-gray1700 border-blue1400/20 text-blue1400",
     },
     Free: {
          classes: "bg-gray1700  border-transparent text-gray-1900",
     },
} as const;

const getRiskClass = (risk: number) => {
     if (risk >= 80) return "bg-red1600 text-white";
     if (risk <= 30) return "bg-lightgreen17 text-white";
     return "bg-yellow-1100 text-black14";
};
const payments: Payment[] = [
     {
          id: 1,
          userid: "USRQH3MQ",
          userinfo: {
               info: "AB",
               name: "Ahmed Butt",
               mail: "ahmed_butt69@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇵🇰.png",
               ausimg: "/images/🇦🇺.png",
          },
          status: "Pending",
          risk: 88,
          onboardingPercent: 81,
          ltv: "£13,561",
          plan: "Premium",
          actions: "/icons/dots-icon.svg",
     },
     {
          id: 2,
          userid: "USRA0FD2",
          userinfo: {
               info: "AC",
               name: "Adnan Chaudhry",
               mail: "adnan.chaudhry59@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇵🇰.png",
               ausimg: "/images/🇨🇦.png",
          },
          status: "Verified",
          risk: 43,
          onboardingPercent: 59,
          ltv: "£885",
          plan: "Premium",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 3,
          userid: "USR5VBAW",
          userinfo: {
               info: "AC",
               name: "Ali Chaudhry",
               mail: "ali_chaudhry53@yahoo.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇧🇩.png",
               ausimg: "/images/🇬🇧.png",
          },
          status: "Rejected",
          risk: 40,
          onboardingPercent: 29,
          ltv: "£5,760",
          plan: "Free",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 4,
          userid: "USR8JIII",
          userinfo: {
               info: "HH",
               name: "Hamza Hussain",
               mail: "hamza_hussain54@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇬🇭.png",
               ausimg: "/images/🇳🇱.png",
          },
          status: "Verified",
          risk: 41,
          onboardingPercent: 80,
          ltv: "£2,698",
          plan: "Free",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 5,
          userid: "USR8MO1Y",
          userinfo: {
               info: "IM",
               name: "Ibrahim Mirza",
               mail: "ibrahim_mirza39@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇬🇭.png",
               ausimg: "/images/🇳🇿.png",
          },
          status: "Rejected",
          risk: 56,
          onboardingPercent: 84,
          ltv: "£1,454",
          plan: "Premium",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 6,
          userid: "USRU83FM",
          userinfo: {
               info: "HC",
               name: "Hamza Chaudhry",
               mail: "hamza.chaudhry70@icloud.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇵🇰.png",
               ausimg: "/images/🇬🇧.png",
          },
          status: "Verified",
          risk: 43,
          onboardingPercent: 83,
          ltv: "£7,738",
          plan: "Free",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 7,
          userid: "USR4STLU",
          userinfo: {
               info: "AS",
               name: "Adnan Syed",
               mail: "adnansyed60@yahoo.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇰🇪.png",
               ausimg: "/images/🇮🇪.png",
          },
          status: "Rejected",
          risk: 52,
          onboardingPercent: 82,
          ltv: "£9,122",
          plan: "Premium",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 8,
          userid: "USRVJ19P",
          userinfo: {
               info: "KA",
               name: "Khadija Ali",
               mail: "khadijaali55@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇧🇩.png",
               ausimg: "/images/🇺🇸.png",
          },
          status: "Verified",
          risk: 35,
          onboardingPercent: 66,
          ltv: "£3,035",
          plan: "Free",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 9,
          userid: "USR3EAY4",
          userinfo: {
               info: "FA",
               name: "Fatima Aslam",
               mail: "fatima.aslam86@hotmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇵🇰.png",
               ausimg: "/images/🇬🇧.png",
          },
          status: "Verified",
          risk: 21,
          onboardingPercent: 37,
          ltv: "£5,576",
          plan: "Free",
          actions: "/icons/dots-icon.svg",
     }, {
          id: 10,
          userid: "USR7PKUW",
          userinfo: {
               info: "AA",
               name: "Amina Aslam",
               mail: "amina_aslam35@gmail.com",
          },
          route: {
               arrowicon: "/icons/right-arrow.svg",
               pkimg: "/images/🇳🇬.png",
               ausimg: "/images/🇩🇪.png",
          },
          status: "Verified",
          risk: 66,
          onboardingPercent: 74,
          ltv: "£9,277",
          plan: "Premium",
          actions: "/icons/dots-icon.svg",
     },
];

export default function UserWalletTable() {

     const [checkedRows, setCheckedRows] = useState<{ [key: number]: boolean }>({});

     const allChecked = payments.length > 0 && payments.every(item => checkedRows[item.id]);
     const someChecked = payments.some(item => checkedRows[item.id]) && !allChecked;

     const toggleAll = () => {
          if (allChecked) {
               setCheckedRows({});
          } else {
               const newState: { [key: number]: boolean } = {};
               payments.forEach(item => newState[item.id] = true);
               setCheckedRows(newState);
          }
     };

     const toggleRow = (id: number) => {
          setCheckedRows(prev => ({ ...prev, [id]: !prev[id] }));
     };

     return (
          <div>
               <p className="text-gray-1900 text-sm">87 users</p>
               <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">
                    <table className="xl:w-full w-275">
                         <thead>
                              <tr className="bg-gray1700 border-b border-gray1600">
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">
                                        <div className='flex items-center'>
                                             <input
                                                  type="checkbox"
                                                  checked={allChecked}
                                                  ref={el => {
                                                       if (el) el.indeterminate = someChecked;
                                                  }}
                                                  onChange={toggleAll}
                                                  className="w-4 h-4 cursor-pointer bg-transparent border border-darkblue2 rounded data-[checked=true]:bg-darkblue2 data-[checked=true]:border-darkblue2"
                                             />
                                        </div>
                                   </th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">User ID</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">User Info</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">Route</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">Status</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">Risk</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">Onboarding</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">LTV</th>
                                   <th className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4">Plan</th>
                                   <th className="lg:p-4 p-2.5"></th>
                              </tr>
                         </thead>

                         <tbody>
                              {payments.map((item) => (
                                   <tr
                                        key={item.id}
                                        className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                                   >
                                        <td className="lg:px-4 px-2.5 py-6 font-inter text-gray-1900 font-normal text-[9.9px] leading-4">
                                             <div className='flex items-center'>
                                                  <input
                                                       type="checkbox"
                                                       checked={!!checkedRows[item.id]}
                                                       onChange={() => toggleRow(item.id)}
                                                       className="w-4 h-4 bg-transparent cursor-pointer border border-darkblue2 rounded data-[checked=true]:bg-darkblue2 data-[checked=true]:border-darkblue2"
                                                  />
                                             </div>
                                        </td>
                                        <td className="lg:px-4 px-2.5 py-6 font-inter text-gray-1900 font-normal text-[9.9px] leading-4">{item.userid}</td>

                                        <td className="lg:px-4 px-2.5 py-6">
                                             <div className="flex items-center gap-3">
                                                  <span className="text-darkblue2 font-inter text-xs leading-6 bg-darkblue2/10 rounded-full w-8 h-8 flex items-center justify-center">{item.userinfo.info}</span>
                                                  <div className="flex-1 w-full">
                                                       <span className="text-blue-1300 font-inter font-normal text-sm leading-5 block">{item.userinfo.name}</span>
                                                       <span className="text-gray-1900 font-inter font-normal text-xs leading-4 block">
                                                            {item.userinfo.mail}
                                                       </span>
                                                  </div>
                                             </div>
                                        </td>
                                        <td className="lg:px-4 px-2.5 py-6">
                                             <div className="flex items-center gap-1.5">
                                                  <span className="flex items-center justify-center w-4 h-4">
                                                       <Image src={item.route.pkimg} width={16} height={16} alt="route" />
                                                  </span>
                                                  <Image src={item.route.arrowicon} width={16} height={16} alt="route" />
                                                  <span className="flex items-center justify-center w-4 h-4">
                                                       <Image src={item.route.ausimg} width={16} height={16} alt="route" />
                                                  </span>
                                             </div>
                                        </td>
                                        <td className="lg:px-4 px-2.5 py-6">
                                             <span
                                                  className={`border border-solid inline-flex items-center rounded-full justify-center font-inter font-normal text-xs leading-4 px-2 h-5.5 ${statusConfig[item.status].classes}`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>

                                        <td className="lg:px-4 px-2.5 py-6">
                                             <span
                                                  className={`font-inter font-bold text-xs leading-12 rounded-full w-8 h-8 flex items-center justify-center  ${getRiskClass(item.risk)}`}
                                             >
                                                  {item.risk}
                                             </span>
                                        </td>

                                        <td className="lg:px-4 px-2.5 py-6">
                                             <div className="flex items-center gap-2">
                                                  <ProgressBar
                                                       value={item.onboardingPercent}
                                                       barColor={
                                                            item.onboardingPercent >= 80
                                                                 ? "bg-yellow-1100"
                                                                 : item.onboardingPercent >= 50
                                                                      ? "bg-yellow-1100"
                                                                      : "bg-gray-1900"
                                                       }
                                                       className="flex-1 w-full"
                                                  />
                                                  <span className="w-6 flex items-center justify-center text-gray-1900 font-inter font-normal text-xs leading-4">
                                                       {item.onboardingPercent}%
                                                  </span>
                                             </div>
                                        </td>
                                        <td className="lg:px-4 px-2.5 py-6 text-blue-1300 font-inter font-normal text-sm leading-5">{item.ltv}</td>

                                        <td className="lg:px-4 px-2.5 py-6">
                                             <span
                                                  className={`inline-flex items-center border border-solid justify-center rounded-full h-5.5 px-2 text-xs font-normal leading-4 ${planConfig[item.plan].classes}`}
                                             >
                                                  {item.plan}
                                             </span>
                                        </td>

                                        <td className="lg:px-4 px-2.5 py-6">
                                             <Link href="#">
                                                  <Image
                                                       src={item.actions}
                                                       width={16}
                                                       height={16}
                                                       alt="actions"
                                                  />
                                             </Link>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}