"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

interface FAQItem {
     category: "Payments" | "Account" | "Security" | "Transfers" | "Promotions";
     question: string;
     views: string;
     lastUpdated: string;
     helpfulness: number;
}
const getHelpfulnessColor = (value: number) => {
     if (value >= 90) return "text-green-1600";
     if (value >= 85) return "text-blue-3000";
     return "text-yellow-1100";
};
const categoryConfig: Record<
     FAQItem["category"],
     { classes: string }
> = {
     Payments: {
          classes: "bg-blue-3000/10 text-blue-3000",
     },
     Account: {
          classes: "bg-skyblue23/10 text-skyblue23",
     },
     Security: {
          classes: "bg-yellow-1100/10 text-yellow-1100",
     },
     Transfers: {
          classes: "bg-green-1600/10 text-green-1600",
     },
     Promotions: {
          classes: "bg-purple-2000/10 text-purple-2000",
     },
};

const faqs: FAQItem[] = [
     {
          category: "Payments",
          question: "How do I add money to my StudPay wallet?",
          views: "1,250 views",
          lastUpdated: "2 days ago",
          helpfulness: 94,
     },
     {
          category: "Account",
          question: "How can I verify my student ID?",
          views: "980 views",
          lastUpdated: "5 days ago",
          helpfulness: 89,
     },
     {
          category: "Security",
          question: "How do I enable two-factor authentication?",
          views: "756 views",
          lastUpdated: "1 week ago",
          helpfulness: 92,
     },
     {
          category: "Transfers",
          question: "What are the fees for international transfers?",
          views: "542 views",
          lastUpdated: "3 days ago",
          helpfulness: 78,
     },
     {
          category: "Promotions",
          question: "How do I apply a discount code?",
          views: "423 views",
          lastUpdated: "1 day ago",
          helpfulness: 85,
     },
];

export default function ManagerTable() {
     return (
          <div className="border border-gray-1000 overflow-x-auto">
               <table className="xl:w-full w-[1199px]">
                    <thead>
                         <tr className="border-b border-gray-1000">
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Category
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Question
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Last Updated
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Helpfulness
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Actions
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {faqs.map((item, index) => (
                              <tr key={index} className="border-b border-gray-3600">

                                   {/* Category */}
                                   <td className="px-5 py-6 text-sm">
                                        <span
                                             className={`px-3 h-5.5 rounded-full text-xs inline-flex items-center justify-center ${categoryConfig[item.category].classes}`}
                                        >
                                             {item.category}
                                        </span>
                                   </td>

                                   {/* Question + Views */}
                                   <td className="px-5 py-6 text-sm">
                                        <div className="flex flex-col">
                                             <span className="text-black-2600">
                                                  {item.question}
                                             </span>
                                             <span className="text-xs text-gray-1200 mt-1">
                                                  {item.views}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Last Updated */}
                                   <td className="px-5 py-6 text-sm text-black-2600">
                                        {item.lastUpdated}
                                   </td>

                                   {/* Helpfulness */}
                                   <td className="px-5 py-6 text-sm">
                                        <div className="flex items-center gap-3">
                                             <Image
                                                  src="/images/thumb-green.svg"
                                                  alt="thumb"
                                                  width={16}
                                                  height={16}
                                                  className="text-green-1600"
                                             />

                                             {/* Percentage */}
                                             <span
                                                  className={`text-sm font-medium w-8 ${getHelpfulnessColor(
                                                       item.helpfulness
                                                  )}`}
                                             >
                                                  {item.helpfulness}%
                                             </span>


                                             {/* Progress Bar */}
                                             <div className="w-24">
                                                  <ProgressBar
                                                       value={item.helpfulness}
                                                       className="h-1.5"
                                                       barColor={
                                                            item.helpfulness >= 90
                                                                 ? "bg-lightgreen17"
                                                                 : item.helpfulness >= 80
                                                                      ? "bg-blue-3000"
                                                                      : "bg-yellow-1100"
                                                       }
                                                       bgColor="bg-white/80"
                                                  />
                                             </div>
                                        </div>
                                   </td>

                                   {/* Actions */}
                                   <td className="px-5 py-6">
                                        <Image
                                             src="/images/pencile-icon2.svg"
                                             alt="edit"
                                             width={16}
                                             height={16}
                                        />
                                   </td>

                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}