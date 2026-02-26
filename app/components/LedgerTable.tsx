"use client";
import Image from "next/image";

type Status = "Live" | "Draft" | "Archived";

interface Notification {
     id: string;
     title: string;
     date: string;
     category: "Promotion" | "Update" | "Alert" | "Announcement";
     channel: "Push" | "Email" | "In-App";
     channelIcon: string;
     targetSegment: string;
     status: Status;
}

const statusConfig: Record<
     Status,
     { wrapper: string; dot: string }
> = {
     Live: {
          wrapper:
               "bg-green-1600/10  text-green-1600",
          dot: "bg-green-1600",
     },
     Draft: {
          wrapper:
               "bg-yellow-1100/10 text-yellow-1100",
          dot: "bg-yellow-1100",
     },
     Archived: {
          wrapper:
               "bg-gray-1200/10 text-gray-1200",
          dot: "bg-gray-1200",
     },
};

const categoryConfig: Record<
     Notification["category"],
     { classes: string }
> = {
     Promotion: {
          classes: "bg-blue-3000/10 text-blue-3000",
     },
     Update: {
          classes: "bg-skyblue23/10 text-skyblue23",
     },
     Alert: {
          classes: "bg-yellow-1100/10 text-yellow-1100",
     },
     Announcement: {
          classes: "bg-green-1600/10 text-green-1600",
     },
};

const notifications: Notification[] = [
     {
          id: "CNT-001",
          title: "Winter Semester Cashback Offer",
          date: "Jan 15, 2026",
          category: "Promotion",
          channel: "Push",
          channelIcon: "/images/push-icon.svg",
          targetSegment: "TU Munich Students",
          status: "Live",
     },
     {
          id: "CNT-002",
          title: "New Payment Method Available",
          date: "Jan 12, 2026",
          category: "Update",
          channel: "Email",
          channelIcon: "/images/mail-icon.svg",
          targetSegment: "All Users",
          status: "Live",
     },
     {
          id: "CNT-003",
          title: "Valentine's Day Special",
          date: "Feb 10, 2026",
          category: "Promotion",
          channel: "In-App",
          channelIcon: "/images/globe-icon2.svg",
          targetSegment: "Active Users",
          status: "Draft",
     },
     {
          id: "CNT-004",
          title: "System Maintenance Notice",
          date: "Dec 28, 2025",
          category: "Alert",
          channel: "Push",
          channelIcon: "/images/push-icon.svg",
          targetSegment: "All Users",
          status: "Archived",
     },
     {
          id: "CNT-005",
          title: "Student ID Verification Reminder",
          date: "Jan 20, 2026",
          category: "Alert",
          channel: "Email",
          channelIcon: "/images/mail-icon.svg",
          targetSegment: "Unverified Users",
          status: "Live",
     },
     {
          id: "CNT-006",
          title: "Referral Program Launch",
          date: "Feb 01, 2026",
          category: "Announcement",
          channel: "Push",
          channelIcon: "/images/globe-icon2.svg",
          targetSegment: "University Partners",
          status: "Draft",
     },
];

export default function LedgerTable() {
     return (
          <div className="border border-gray-1000 overflow-x-auto">
               <table className="xl:w-full w-[1199px]">
                    <thead>
                         <tr className="border-b border-gray-1000">
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   ID
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Title
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Category
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Channel
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Target Segment
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Status
                              </th>
                              <th className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">
                                   Actions
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {notifications.map((item) => (
                              <tr key={item.id} className="border-b border-gray-3600">
                                   {/* ID */}
                                   <td className="px-4 py-6 text-sm text-gray-1200">
                                        {item.id}
                                   </td>

                                   {/* Title + Date */}
                                   <td className="px-4 py-6 text-sm">
                                        <div className="flex flex-col">
                                             <span className="text-black-2600">
                                                  {item.title}
                                             </span>
                                             <span className="text-xs text-gray-1200">
                                                  {item.date}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Category */}
                                   <td className="px-4 py-6 text-sm">
                                        <span
                                             className={`px-3 h-5.5 rounded-full text-xs inline-flex items-center justify-center ${categoryConfig[item.category].classes}`}
                                        >
                                             {item.category}
                                        </span>
                                   </td>

                                   {/* Channel */}
                                   <td className="px-4 py-6 text-sm">
                                        <div className="flex items-center gap-2 text-black-2600">
                                             <Image
                                                  src={item.channelIcon}
                                                  alt={item.channel}
                                                  width={16}
                                                  height={16}
                                             />
                                             <span>{item.channel}</span>
                                        </div>
                                   </td>

                                   {/* Target Segment */}
                                   <td className="px-4 py-6 text-sm text-black-2600">
                                        {item.targetSegment}
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-6">
                                        <span
                                             className={`px-3 h-5.5 rounded-full text-xs  inline-flex items-center gap-1.5 ${statusConfig[item.status].wrapper}`}
                                        >
                                             <span
                                                  className={`w-1.5 h-1.5 rounded-full ${statusConfig[item.status].dot}`}
                                             ></span>
                                             {item.status}
                                        </span>
                                   </td>

                                   {/* Actions */}
                                   <td className="px-4 py-6">
                                        <img src="/images/dots-icon2.svg" alt="" />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}