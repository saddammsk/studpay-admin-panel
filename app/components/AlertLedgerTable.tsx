"use client";
import Image from "next/image";

type Severity = "P1 Critical" | "P2 High" | "P3 Normal";
type Status = "New" | "In Progress" | "Resolved" | "Closed";

interface Incident {
     id: string;
     severity: Severity;
     studentName: string;
     studentCountry: string;
     studentAvatar: string;
     studentFlag: string;
     trigger: string;
     location: string;
     time: string;
     assignee: string;
     status: Status;
}

const severityConfig: Record<
     Severity,
     { wrapper: string; dot: string }
> = {
     "P1 Critical": {
          wrapper: "bg-gray-3500 border-red-2200/30 text-red-2200",
          dot: "bg-red-2200",
     },
     "P2 High": {
          wrapper: "bg-gray-5700 border-yellow-2300/30 text-yellow-2300",
          dot: "bg-yellow-2300",
     },
     "P3 Normal": {
          wrapper: "bg-gray-5700 border-blue-3400/30 text-blue-3400",
          dot: "bg-blue-3400",
     },
};

const statusConfig: Record<
     Status,
     { wrapper: string; }
> = {
     New: {
          wrapper: "bg-red-2200 text-white",
     },
     "In Progress": {
          wrapper: "bg-yellow-2300 text-white",
     },
     Resolved: {
          wrapper: "bg-gray-5800 text-green-3300",
     },
     Closed: {
          wrapper: "bg-gray-5800 text-gray-2300",
     },
};

const incidents: Incident[] = [
     {
          id: "INC-2401",
          severity: "P1 Critical",
          studentName: "Amara Diallo",
          studentCountry: "Senegal",
          studentAvatar: "/images/avatar-1.png",
          studentFlag: "/images/🇸🇳.png",
          trigger: "SOS Manual",
          location: "Lyon, France",
          time: "3 min ago",
          assignee: "Agent Moreau",
          status: "New",
     },
     {
          id: "INC-2402",
          severity: "P1 Critical",
          studentName: "Yuki Tanaka",
          studentCountry: "Japan",
          studentAvatar: "/images/avatar2.png",
          studentFlag: "/images/🇯🇵.png",
          trigger: "SOS Manual",
          location: "Marseille, France",
          time: "7 min ago",
          assignee: "Unassigned",
          status: "New",
     },
     {
          id: "INC-2398",
          severity: "P2 High",
          studentName: "Carlos Mendes",
          studentCountry: "Brazil",
          studentAvatar: "/images/avatar3.png",
          studentFlag: "/images/🇧🇷.png",
          trigger: "Inactivity Timeout",
          location: "Paris, France",
          time: "45 min ago",
          assignee: "Agent Dupont",
          status: "In Progress",
     },
     {
          id: "INC-2395",
          severity: "P2 High",
          studentName: "Fatima Al-Hassan",
          studentCountry: "Morocco",
          studentAvatar: "/images/avatar-1.png",
          studentFlag: "/images/🇲🇦.png",
          trigger: "Geofence Exit",
          location: "Toulouse, France",
          time: "1 hr ago",
          assignee: "Agent Laurent",
          status: "In Progress",
     },
     {
          id: "INC-2388",
          severity: "P3 Normal",
          studentName: "Sofia Petrov",
          studentCountry: "Bulgaria",
          studentAvatar: "/images/avatar2.png",
          studentFlag: "/images/🇧🇬.png",
          trigger: "Geofence Exit",
          location: "Nice, France",
          time: "3 hr ago",
          assignee: "Agent Dupont",
          status: "Closed",
     },
];

export default function IncidentTable() {
     return (
          <div className="border border-gray-200 overflow-x-auto">
               <table className="xl:w-full w-[1200px]">
                    <thead>
                         <tr className="border-b border-gray-200">
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   ID & Severity
                              </th>
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   Student
                              </th>
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   Trigger
                              </th>
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   Location
                              </th>
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   Assignee
                              </th>
                              <th className="px-5 py-3 text-left text-xs uppercase text-gray-2300">
                                   Status
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {incidents.map((item) => (
                              <tr key={item.id} className="border-b border-gray-100">
                                   {/* ID & Severity */}
                                   <td className="px-5 py-4 text-sm">
                                        <div className="flex items-center gap-2">
                                             <span className="text-black-2900 text-xs uppercase">{item.id}</span>

                                             <span
                                                  className={`px-2 py-0.5 border text-xs rounded-md inline-flex items-center gap-1.5 ${severityConfig[item.severity].wrapper}`}
                                             >
                                                  <span
                                                       className={`w-2 h-2 rounded-full ${severityConfig[item.severity].dot}`}
                                                  />
                                                  {item.severity}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Student */}
                                   <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                             <Image
                                                  src={item.studentAvatar}
                                                  alt={item.studentName}
                                                  width={36}
                                                  height={36}
                                                  className="rounded-full"
                                             />

                                             <div className="flex flex-col">
                                                  <span className="text-sm text-black-2900">
                                                       {item.studentName}
                                                  </span>

                                                  <div className="flex items-center gap-1.5">
                                                       <Image
                                                            src={item.studentFlag}
                                                            alt={item.studentCountry}
                                                            width={14}
                                                            height={14}
                                                            className="rounded-sm"
                                                       />
                                                       <span className="text-xs text-gray-2300">
                                                            {item.studentCountry}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Trigger */}
                                   <td className="px-5 py-4 text-sm text-black-2900">
                                        {item.trigger}
                                   </td>

                                   {/* Location */}
                                   <td className="px-5 py-4 text-sm">
                                        <div className="flex flex-col">
                                             <span className="text-black-2900">{item.location}</span>
                                             <span className="text-xs text-gray-2300">
                                                  {item.time}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Assignee */}
                                   <td className="px-5 py-4 text-sm text-black-2900">
                                        {item.assignee}
                                   </td>

                                   {/* Status with Dot */}
                                   <td className="px-5 py-4">
                                        <span
                                             className={`px-3 py-1 text-xs rounded-md inline-flex items-center gap-1.5 ${statusConfig[item.status].wrapper}`}
                                        >

                                             {item.status}
                                        </span>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}