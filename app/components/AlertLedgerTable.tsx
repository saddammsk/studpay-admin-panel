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
          wrapper: "bg-red-500/10 text-red-600",
          dot: "bg-red-600",
     },
     "P2 High": {
          wrapper: "bg-orange-500/10 text-orange-600",
          dot: "bg-orange-600",
     },
     "P3 Normal": {
          wrapper: "bg-blue-500/10 text-blue-600",
          dot: "bg-blue-600",
     },
};

const statusConfig: Record<
     Status,
     { wrapper: string; dot: string }
> = {
     New: {
          wrapper: "bg-red-500/10 text-red-600",
          dot: "bg-red-600",
     },
     "In Progress": {
          wrapper: "bg-orange-500/10 text-orange-600",
          dot: "bg-orange-600",
     },
     Resolved: {
          wrapper: "bg-green-500/10 text-green-600",
          dot: "bg-green-600",
     },
     Closed: {
          wrapper: "bg-gray-400/10 text-gray-500",
          dot: "bg-gray-500",
     },
};

const incidents: Incident[] = [
     {
          id: "INC-2401",
          severity: "P1 Critical",
          studentName: "Amara Diallo",
          studentCountry: "Senegal",
          studentAvatar: "/images/student1.png",
          studentFlag: "/images/flag-senegal.png",
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
          studentAvatar: "/images/student2.png",
          studentFlag: "/images/flag-japan.png",
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
          studentAvatar: "/images/student3.png",
          studentFlag: "/images/flag-brazil.png",
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
          studentAvatar: "/images/student4.png",
          studentFlag: "/images/flag-morocco.png",
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
          studentAvatar: "/images/student6.png",
          studentFlag: "/images/flag-bulgaria.png",
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
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   ID & Severity
                              </th>
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   Student
                              </th>
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   Trigger
                              </th>
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   Location
                              </th>
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   Assignee
                              </th>
                              <th className="px-5 py-3 bg-gray-100 text-left text-xs uppercase text-gray-500">
                                   Status
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {incidents.map((item) => (
                              <tr key={item.id} className="border-b border-gray-100">
                                   {/* ID & Severity */}
                                   <td className="px-5 py-4 text-sm">
                                        <div className="flex items-center gap-3">
                                             <span className="text-gray-800">{item.id}</span>

                                             <span
                                                  className={`px-2 py-1 text-xs rounded-md inline-flex items-center gap-1.5 ${severityConfig[item.severity].wrapper}`}
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
                                                  <span className="text-sm text-black">
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
                                                       <span className="text-xs text-gray-500">
                                                            {item.studentCountry}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Trigger */}
                                   <td className="px-5 py-4 text-sm text-gray-700">
                                        {item.trigger}
                                   </td>

                                   {/* Location */}
                                   <td className="px-5 py-4 text-sm">
                                        <div className="flex flex-col">
                                             <span className="text-gray-800">{item.location}</span>
                                             <span className="text-xs text-gray-500">
                                                  {item.time}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Assignee */}
                                   <td className="px-5 py-4 text-sm text-gray-800">
                                        {item.assignee}
                                   </td>

                                   {/* Status with Dot */}
                                   <td className="px-5 py-4">
                                        <span
                                             className={`px-3 py-1 text-xs rounded-md inline-flex items-center gap-1.5 ${statusConfig[item.status].wrapper}`}
                                        >
                                             <span
                                                  className={`w-2 h-2 rounded-full ${statusConfig[item.status].dot}`}
                                             />
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