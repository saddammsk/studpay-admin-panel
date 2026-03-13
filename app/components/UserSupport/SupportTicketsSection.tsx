"use client";

import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
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

const STATUS_OPTIONS = [
  { label: "All…", value: "All…" },
  { label: "Open", value: "Open" },
  { label: "In Progress", value: "In Progress" },
  { label: "Resolved", value: "Resolved" },
  { label: "Closed", value: "Closed" },
];

const CATEGORY_OPTIONS = [
  { label: "All…", value: "All…" },
  { label: "Technical", value: "Technical" },
  { label: "Billing", value: "Billing" },
  { label: "Compliance", value: "Compliance" },
];

const PRIORITY_OPTIONS = [
  { label: "All…", value: "All…" },
  { label: "Urgent", value: "Urgent" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
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
  "Ticket ID",
  "Subject",
  "Category",
  "Priority",
  "Status",
  "Assignee",
  "Updated",
] as const;

const SupportTicketsSection = () => {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    categoryFilter,
    setCategoryFilter,
    priorityFilter,
    setPriorityFilter,
    showAdvancedFilters,
    toggleAdvancedFilters,
    resetFilters,
  } = useSupportStore();

  const hasActiveFilters =
    statusFilter !== "All…" ||
    categoryFilter !== "All…" ||
    priorityFilter !== "All…" ||
    search.trim() !== "";

  const filteredTickets = TICKETS.filter((ticket) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      ticket.id.toLowerCase().includes(query) ||
      ticket.subject.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All…" || ticket.status === statusFilter;
    const matchesCategory = categoryFilter === "All…" || ticket.category === categoryFilter;
    const matchesPriority = priorityFilter === "All…" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  return (
    <div className="border border-solid border-gray-3600 bg-white shadow-64xl rounded-lg">
      <div className="md:px-6 px-4 md:pt-6 pt-4 pb-4">
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between">
          <div>
            <h4 className="text-blue-1300 font-semibold text-[17.3px] leading-7 mb-0.5">Support Tickets</h4>
            <p className="text-gray-1900 font-normal text-[13px] leading-5">Manage and track all support requests</p>
          </div>
          <button
            type="button"
            onClick={toggleAdvancedFilters}
            className={`flex items-center justify-center gap-2 border border-solid rounded-md h-9 px-3 font-normal text-[13.1px] leading-5 cursor-pointer transition-all duration-300 ${
              showAdvancedFilters
                ? "border-blue1400 bg-blue1400/5 text-blue1400"
                : "border-gray-3600 bg-gray-1500 text-blue-1300"
            }`}
          >
            <Image src="/icons/filter-icon.svg" width={16} height={16} alt="" />
            Advanced Filters
            {hasActiveFilters && (
              <span className="bg-blue1400 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {[statusFilter !== "All…", categoryFilter !== "All…", priorityFilter !== "All…", search.trim() !== ""].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center sm:max-w-152.5 w-full sm:mt-4 mt-2 sm:gap-3 gap-2">
          <div className="relative flex-1 max-w-full w-full">
            <input
              type="text"
              className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
              placeholder="Search by ticket ID or subject..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/images/search-icon.svg" width={16} height={16} alt="" />
            </div>
          </div>
          <div className="relative sm:w-37.5! w-full!">
            <CustomSelect
              value={statusFilter}
              className="h-10 w-full! pl-9"
              onChange={(value: string) => setStatusFilter(value)}
              options={STATUS_OPTIONS}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/icons/single-filter.svg" width={16} height={16} alt="" />
            </div>
          </div>
        </div>

        {showAdvancedFilters && (
          <div className="mt-4 pt-4 border-t border-solid border-gray-3600">
            <div className="flex sm:flex-row flex-col sm:items-end gap-3">
              <div className="flex-1">
                <label className="text-gray-1900 font-normal text-xs leading-4 mb-1.5 block">Category</label>
                <CustomSelect
                  value={categoryFilter}
                  className="h-10 w-full!"
                  onChange={(value: string) => setCategoryFilter(value)}
                  options={CATEGORY_OPTIONS}
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-1900 font-normal text-xs leading-4 mb-1.5 block">Priority</label>
                <CustomSelect
                  value={priorityFilter}
                  className="h-10 w-full!"
                  onChange={(value: string) => setPriorityFilter(value)}
                  options={PRIORITY_OPTIONS}
                />
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex items-center justify-center gap-1.5 text-red-1300 font-normal text-xs leading-4 h-10 px-3 border border-solid border-red-1300/20 rounded-md hover:bg-red-1300/5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Clear All
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="5xl:w-full w-262.5">
          <thead>
            <tr className="bg-gray1700/30 border-b border-gray-3600">
              {TABLE_HEADERS.map((header) => (
                <th key={header} className="px-4 py-3.5 text-left text-[13.5px] font-bold text-gray-1900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-1900 text-sm">
                  No tickets found matching your filters.
                </td>
              </tr>
            ) : (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id} className={`border-l-4 ${borderColors[ticket.priority]} border-b border-gray-200 last:border-b-0`}>
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
    </div>
  );
};

export default SupportTicketsSection;