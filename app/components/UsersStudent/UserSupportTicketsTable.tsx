"use client";

import Image from "next/image";
import { useSupportStore } from "@/app/store/zustand/useSupportStore";

type Priority = "Low" | "Medium" | "High" | "Urgent";
type Status = "Open" | "In Progress" | "Resolved" | "Closed";
type Category = "Technical" | "Billing" | "Compliance";

interface Ticket {
  id: string;
  subject: string;
  date: string;
  category: Category;
  priority: Priority;
  status: Status;
  assignee?: string;
  updated: string;
}

const TICKETS: Ticket[] = [
  { id: "TKT-2024-001", subject: "Card Not Working at ATM", date: "Jan 28, 2025", category: "Technical", priority: "Urgent", status: "Open", assignee: "Sophie M.", updated: "2 hours ago" },
  { id: "TKT-2024-002", subject: "Double Charge on Transaction", date: "Jan 27, 2025", category: "Billing", priority: "High", status: "In Progress", assignee: "Jean-Pierre B.", updated: "5 hours ago" },
  { id: "TKT-2024-003", subject: "KYC Document Rejected", date: "Jan 25, 2025", category: "Compliance", priority: "Medium", status: "In Progress", assignee: "Claire D.", updated: "1 day ago" },
  { id: "TKT-2024-004", subject: "Unable to Add Bank Account", date: "Jan 22, 2025", category: "Technical", priority: "Medium", status: "Resolved", assignee: "Sophie M.", updated: "2 days ago" },
  { id: "TKT-2024-005", subject: "Refund Not Received", date: "Jan 18, 2025", category: "Billing", priority: "High", status: "Closed", updated: "5 days ago" },
  { id: "TKT-2024-006", subject: "Account Verification Delay", date: "Jan 15, 2025", category: "Compliance", priority: "Low", status: "Closed", updated: "1 week ago" },
];

const borderColors: Record<Priority, string> = {
  Urgent: "border-red-400",
  High: "border-orange-400",
  Medium: "border-yellow-300",
  Low: "border-gray-300 border-l-0!",
};

const categoryColors: Record<Category, string> = {
  Technical: "bg-blue1400/10 border-azuregray12/30 text-blue1400",
  Billing: "bg-yellow2000/10 border-yellow2000/30 text-yellow2000",
  Compliance: "bg-Orange57 border-azureblue13/30 text-azureblue13",
};

const priorityColors: Record<Lowercase<Priority>, string> = {
  urgent: "bg-red-1300/10 border-red-1300/30 text-red-1300",
  high: "bg-green56/10 border-green56/30 text-green56",
  medium: "bg-yellow2000/10 border-yellow2000/30 text-yellow2000",
  low: "bg-green-1500/10 border-green-1500/30 text-green-1500",
};

const statusColors: Record<Status, string> = {
  Open: "bg-Orange57 border-green56/30 text-green56",
  "In Progress": "bg-Orange57 border-azuregray12/30 text-blue1400",
  Resolved: "bg-Orange57 border-green-1500/30 text-green-1500",
  Closed: "bg-Orange57 border-azuregray12/30 text-blue1400",
};

const TABLE_HEADERS = [
  { label: "Ticket ID", align: "text-left" },
  { label: "Subject", align: "text-left" },
  { label: "Category", align: "text-left" },
  { label: "Priority", align: "text-left" },
  { label: "Status", align: "text-left" },
  { label: "Assignee", align: "text-left" },
  { label: "Updated", align: "text-left" },
] as const;

export default function UserSupportTicketsTable() {
  const { search, statusFilter } = useSupportStore();

  const filteredTickets = TICKETS.filter((ticket) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      ticket.id.toLowerCase().includes(query) ||
      ticket.subject.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All…" || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="overflow-x-auto">
      <table className="5xl:w-full w-262.5">
        <thead>
          <tr className="bg-gray1700/30 border-b border-gray-3600">
            {TABLE_HEADERS.map((header) => (
              <th key={header.label} className={`px-4 py-3.5 ${header.align} text-[13.5px] font-bold text-gray-1900`}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredTickets.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-10 text-center text-gray-1900 text-sm">
                No tickets found matching your search.
              </td>
            </tr>
          ) : (
            filteredTickets.map((ticket) => (
              <tr
                key={ticket.id}
                className={`border-l-4 ${borderColors[ticket.priority]} border-b border-gray-200 last:border-b-0`}
              >
                <td className="px-3 py-6 text-blue1400 font-medium text-sm leading-5">{ticket.id}</td>
                <td className="px-3 py-6">
                  <div className="text-blue-1300 font-normal text-[13.1px] leading-5">{ticket.subject}</div>
                  <div className="text-gray-1900 font-normal text-[11.1px] leading-4">{ticket.date}</div>
                </td>
                <td className="px-3 py-6">
                  <span className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${categoryColors[ticket.category]}`}>
                    {ticket.category}
                  </span>
                </td>
                <td className="px-3 py-6">
                  <span className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${priorityColors[ticket.priority.toLowerCase() as Lowercase<Priority>]}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-3 py-6">
                  <span className={`px-2.5 h-6.5 inline-flex items-center justify-center rounded-full text-[10.3px] font-normal border border-solid ${statusColors[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-3 py-6 text-blue-1300 font-normal text-[13.3px] leading-5">
                  {ticket.assignee ?? <i className="text-gray-1900">Unassigned</i>}
                </td>
                <td className="px-3 py-6">
                  <div className="flex items-center gap-1.5">
                    <Image src="/images/clock-gray.svg" width={13} height={13} alt="" />
                    <span className="text-gray-1900 font-normal text-[13.3px] leading-5">{ticket.updated}</span>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}