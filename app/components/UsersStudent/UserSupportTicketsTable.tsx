"use client";
import Image from "next/image";

interface Ticket {
  id: string;
  subject: string;
  date: string;
  category: string;
  priority: "Low" | "Medium" | "High" | "Urgent";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  assignee?: string;
  updated: string;
}

const tickets: Ticket[] = [
  {
    id: "TKT-2024-001",
    subject: "Card Not Working at ATM",
    date: "Jan 28, 2025",
    category: "Technical",
    priority: "Urgent",
    status: "Open",
    assignee: "Sophie M.",
    updated: "2 hours ago",
  },
  {
    id: "TKT-2024-002",
    subject: "Double Charge on Transaction",
    date: "Jan 27, 2025",
    category: "Billing",
    priority: "High",
    status: "In Progress",
    assignee: "Jean-Pierre B.",
    updated: "5 hours ago",
  },
  {
    id: "TKT-2024-003",
    subject: "KYC Document Rejected",
    date: "Jan 25, 2025",
    category: "Compliance",
    priority: "Medium",
    status: "In Progress",
    assignee: "Claire D.",
    updated: "1 day ago",
  },
  {
    id: "TKT-2024-004",
    subject: "Unable to Add Bank Account",
    date: "Jan 22, 2025",
    category: "Technical",
    priority: "Medium",
    status: "Resolved",
    assignee: "Sophie M.",
    updated: "2 days ago",
  },
  {
    id: "TKT-2024-005",
    subject: "Refund Not Received",
    date: "Jan 18, 2025",
    category: "Billing",
    priority: "High",
    status: "Closed",
    updated: "5 days ago",
  },
  {
    id: "TKT-2024-006",
    subject: "Account Verification Delay",
    date: "Jan 15, 2025",
    category: "Compliance",
    priority: "Low",
    status: "Closed",
    updated: "1 week ago",
  },
];

// Configs for left border and badge colors
const borderColors: Record<string, string> = {
  Urgent: "border-red-400",
  High: "border-orange-400",
  Medium: "border-yellow-300",
};

const categoryColors: Record<string, string> = {
  Technical: "bg-blue1400/10 border-azuregray12/30 text-blue1400",
  Billing: "bg-yellow2000/10 border-yellow2000/30 text-yellow2000",
  Compliance: "bg-Orange57 border-azureblue13/30 text-azureblue13",
};

const priorityColors: Record<string, string> = {
  urgent: "bg-red-1300/10 border-red-1300/30 text-red-1300",
  high: "bg-green56/10 border-green56/30 text-green56",
  medium: "bg-yellow2000/10 border-yellow2000/30 text-yellow2000",
  low: "bg-green-1500/10 border-green-1500/30 text-green-1500",
};

const statusColors: Record<string, string> = {
  Open: "bg-Orange57 border-green56/30 text-green56",
  "In Progress": "bg-Orange57 border-azuregray12/30 text-blue1400",
  Resolved: "bg-Orange57 border-green-1500/30 text-green-1500",
  Closed: "bg-Orange57 border-azuregray12/30 text-blue1400",
};

export default function TicketTable() {
  return (
    <div className="overflow-x-auto">
      <table className="5xl:w-full w-262.5">
        <thead>
          <tr className="bg-gray1700/30 border-b border-gray-3600">
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Ticket ID
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Subject
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Category
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Priority
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Status
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Assignee
            </th>
            <th className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
              Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className={`border-l-4 ${borderColors[ticket.priority] || "border-gray-300 border-l-0!"} border-b border-gray-200 last:border-b-0`}
            >
              <td className="px-3 py-6 text-blue1400 font-medium text-sm leading-5">{ticket.id}</td>
              <td className="px-3 py-6">
                <div className="text-blue-1300 font-normal text-[13.1px] leading-5">{ticket.subject}</div>
                <div className="text-gray-1900 font-normal text-[11.1px] leading-4">{ticket.date}</div>
              </td>
              <td className="px-3 py-6">
                <span
                  className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${categoryColors[ticket.category]}`}
                >
                  {ticket.category}
                </span>
              </td>
              <td className="px-3 py-6">
                <span
                  className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${priorityColors[ticket.priority.toLowerCase()]
                    }`}
                >
                  {ticket.priority}
                </span>
              </td>
              <td className="px-3 py-6">
                <span
                  className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${statusColors[ticket.status]}`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="px-3 py-6 text-blue-1300 font-normal text-[13.3px] leading-5">{ticket.assignee || <i className="text-gray-1900">Unassigned</i>}</td>
              <td className="px-3 py-6">
                <div className="flex items-center gap-1.5">
                  <Image src="/images/clock-gray.svg" width={13} height={13} alt="" />
                  <span className="text-gray-1900 font-normal text-[13.3px] leading-5">{ticket.updated}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}