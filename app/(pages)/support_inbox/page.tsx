'use client'
import TopBar from "@/app/components/common/TopBar";
import { useState } from "react";

type Priority = "urgent" | "high" | "medium" | "low";
type Status = "new" | "pending" | "resolved";
type FilterTab = "All" | "New" | "Pending" | "Resolved";

interface Ticket {
     id: string;
     priority: Priority;
     time: string;
     name: string;
     title: string;
     preview: string;
     tag: string;
     status: Status;
     hasAvatar?: boolean;
}

interface Message {
     id: string;
     sender: string;
     role?: string;
     time: string;
     content: string;
     isSupport: boolean;
     isInternal?: boolean;
}

interface Booking {
     id: string;
     label: string;
     amount: string;
     date: string;
     status: "pending" | "completed";
}

interface AuditLog {
     id: string;
     label: string;
     date: string;
     type: "error" | "success";
}

const TICKETS: Ticket[] = [
     {
          id: "TKT-001",
          priority: "urgent",
          time: "5 min ago",
          name: "Ahmed Hassan",
          title: "Payment failed for housing deposit",
          preview: "I tried to pay my housing deposit but the transaction failed...",
          tag: "Payment Issue",
          status: "new",
     },
     {
          id: "TKT-002",
          priority: "high",
          time: "23 min ago",
          name: "Maria Schmidt",
          title: "Housing booking cancellation request",
          preview: "I need to cancel my housing booking due to visa rejection...",
          tag: "Housing Dispute",
          status: "pending",
          hasAvatar: true,
     },
     {
          id: "TKT-003",
          priority: "medium",
          time: "1 hour ago",
          name: "John Chen",
          title: "KYC verification stuck",
          preview: "My KYC has been pending for 3 days now...",
          tag: "KYC Help",
          status: "pending",
     },
     {
          id: "TKT-004",
          priority: "medium",
          time: "2 hours ago",
          name: "Lisa Müller",
          title: "Insurance document not received",
          preview: "I completed insurance payment but haven't received documents...",
          tag: "Insurance",
          status: "new",
          hasAvatar: true,
     },
     {
          id: "TKT-005",
          priority: "high",
          time: "3 hours ago",
          name: "Alex Johnson",
          title: "Refund request for blocked account",
          preview: "My account was blocked and I need a refund...",
          tag: "Payment Issue",
          status: "pending",
     },
     {
          id: "TKT-006",
          priority: "low",
          time: "4 hours ago",
          name: "Sophie Wang",
          title: "How to book a house?",
          preview: "I'm new to StudPay and need help with housing booking...",
          tag: "General Inquiry",
          status: "new",
          hasAvatar: true,
     },
];

const MESSAGES: Message[] = [
     {
          id: "1",
          sender: "Ahmed Hassan",
          time: "10:23 AM",
          content:
               "Hello, I tried to pay my housing deposit of €500 but the transaction failed. My bank shows the amount was debited but I didn't receive any confirmation from StudPay.",
          isSupport: false,
     },
     {
          id: "2",
          sender: "Sarah",
          role: "Support",
          time: "10:25 AM",
          content:
               "Hi Ahmed, I'm sorry to hear about this issue. Let me check your transaction details right away. Can you please share the last 4 digits of the card you used?",
          isSupport: true,
     },
     {
          id: "3",
          sender: "Ahmed Hassan",
          time: "10:27 AM",
          content: "Yes, the card ends with 4521. The transaction was at 9:45 AM today.",
          isSupport: false,
     },
     {
          id: "4",
          sender: "Sarah → Finance Team",
          time: "10:28 AM",
          content:
               "Hello, I need to check Stripe logs for transaction around 9:45 AM, card ending 4521. Student claims amount debited but no confirmation. Possible timeout issue?",
          isSupport: true,
          isInternal: true,
     },
     {
          id: "5",
          sender: "Sarah",
          role: "Support",
          time: "10:32 AM",
          content:
               "Thank you, Ahmed. I can see your transaction in our system. It appears there was a timeout during processing. The payment was actually successful but the confirmation email wasn't sent. I'm processing the booking now and you'll receive confirmation within 5 minutes.",
          isSupport: true,
     },
];

const BOOKINGS: Booking[] = [
     {
          id: "BK-001",
          label: "Housing Deposit",
          amount: "€500",
          date: "Feb 1, 2024",
          status: "pending",
     },
     {
          id: "BK-002",
          label: "Insurance Premium",
          amount: "€120/mo",
          date: "Jan 20, 2024",
          status: "completed",
     },
];

const AUDIT_LOGS: AuditLog[] = [
     { id: "1", label: "Payment Attempted", date: "Today, 9:45 AM", type: "error" },
     { id: "2", label: "KYC Verified", date: "Jan 18, 2024", type: "success" },
     { id: "3", label: "Account Created", date: "Jan 15, 2024", type: "success" },
];

const priorityConfig: Record<Priority, { label: string; bg: string; text: string; dot: string }> = {
     urgent: { label: "urgent", bg: "bg-red-1300/10", text: "text-red-1300", dot: "bg-red-500" },
     high: { label: "high", bg: "bg-yellow-1100/10", text: "text-yellow-1100", dot: "bg-yellow-1100" },
     medium: { label: "medium", bg: "bg-blue1400/10", text: "text-blue1400", dot: "bg-yellow-400" },
     low: { label: "low", bg: "bg-blue1400/10", text: "text-blue1400", dot: "bg-blue1400" },
};

const statusConfig: Record<Status, { bg: string; text: string }> = {
     new: { bg: "bg-blue1400/10", text: "text-blue1400" },
     pending: { bg: "bg-yellow-1100/10", text: "text-yellow-1100" },
     resolved: { bg: "bg-green-50", text: "text-green-600" },
};

function StatCard({
     label,
     value,
     sub,
     trend,
     icon,
}: {
     label: string;
     value: string;
     sub: string;
     trend?: { label: string; up: boolean };
     icon: React.ReactNode;
}) {
     return (
          <div className="bg-white rounded-xl border border-gray-3600 shadow-4xl p-4 flex items-start justify-between">
               <div>
                    <p className="text-sm font-medium text-gray-1900   mb-1">{label}</p>
                    <p className="text-2xl font-bold text-blue-1300">{value}</p>
                    <p className="text-xs text-gray-1900 mt-1">{sub}</p>
                    {trend && (
                         <p className={`text-xs font-semibold mt-1 ${trend.up ? "text-green-1600" : "text-red-1300"}`}>
                              {trend.up ? "↑" : "↓"} {trend.label}
                         </p>
                    )}
               </div>
               <div className="w-10 h-10 rounded-lg bg-blue1400/10 flex items-center justify-center text-blue1400">
                    {icon}
               </div>
          </div>
     );
}

function TicketCard({
     ticket,
     active,
     onClick,
}: {
     ticket: Ticket;
     active: boolean;
     onClick: () => void;
}) {
     const p = priorityConfig[ticket.priority];
     const s = statusConfig[ticket.status];
     return (
          <button
               onClick={onClick}
               className={`w-full text-left px-4 py-3.5 mb-2 border rounded-lg border-gray-3600 transition-colors ${active ? "bg-LightSkyBlue" : "hover:bg-gray-50"
                    }`}
          >
               <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                         <span
                              className={`text-xs font-medium  px-2 py-0.5 rounded-full ${p.bg} ${p.text}`}
                         >
                              {p.label}
                         </span>
                         {ticket.priority === "urgent" && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                   <path d="M6.99935 12.8346C10.221 12.8346 12.8327 10.223 12.8327 7.0013C12.8327 3.77964 10.221 1.16797 6.99935 1.16797C3.77769 1.16797 1.16602 3.77964 1.16602 7.0013C1.16602 10.223 3.77769 12.8346 6.99935 12.8346Z" stroke="#EF4343" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M7 3.5V7L9.33333 8.16667" stroke="#EF4343" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                         )}
                    </div>
                    <span className="text-xs font-normal leading-4 text-gray-1900">{ticket.time}</span>
               </div>
               <div className="flex justify-between items-center gap-2 mb-0.5">

                    <p className="text-sm font-semibold text-gray-800">{ticket.name}</p>
                    {ticket.hasAvatar ? (
                         <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[9px] font-bold shrink-0">

                         </div>
                    ) : null}
               </div>
               <p className="text-sm font-medium text-blue-1300 mb-0.5">{ticket.title}</p>
               <p className="text-xs text-gray-1900 leading-relaxed line-clamp-2">{ticket.preview}</p>
               <div className="flex items-center justify-between gap-2 mt-2">
                    <span className="text-xs text-blue-1300 border border-gray-3600 rounded-full px-2.5 py-0.5">
                         {ticket.tag}
                    </span>
                    <span
                         className={`text-xs font-normal rounded-full px-2 py-0.5 ${s.bg} ${s.text}`}
                    >
                         {ticket.status}
                    </span>
               </div>
          </button>
     );
}

function ChatBubble({ msg }: { msg: Message }) {
     if (msg.isInternal) {
          return (
               <div className="flex justify-end">
                    <div className="max-w-[80%]  bg-yellow-3200 border border-yellow-1100/30 rounded-xl px-4  py-2.5">
                         <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-blue-1300/80">{msg.sender}</span>
                              <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                   <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                   />
                              </svg>
                              <span className="text-xs text-gray-1900">{msg.time}</span>
                         </div>
                         <p className="text-sm text-blue-1300 font-normald">{msg.content}</p>
                    </div>
               </div>
          );
     }

     if (msg.isSupport) {
          return (
               <div className="flex justify-end">
                    <div className="max-w-[80%] bg-gray-2000 rounded-xl px-4  py-2.5">
                         <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-blue-1300/80">
                                   {msg.sender} {msg.role && <span className=" text-blue-1300/80">({msg.role})</span>}
                              </span>
                              <span className="text-xs text-gray-1900">{msg.time}</span>
                         </div>
                         <p className="text-sm text-blue-1300 font-normal">{msg.content}</p>
                    </div>
               </div>
          );
     }

     return (
          <div className="flex justify-start">
               <div className="max-w-[80%] bg-yellow-3200 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2 mb-1">
                         <span className="text-xs font-medium text-blue-1300/80">{msg.sender}</span>
                         <span className="text-xs text-gray-1900">{msg.time}</span>
                    </div>
                    <p className="text-sm text-blue-1300 font-normal">{msg.content}</p>
               </div>
          </div>
     );
}
function page() {
     const [activeTab, setActiveTab] = useState<FilterTab>("All");
     const [activeTicket, setActiveTicket] = useState<string>("TKT-001");
     const [replyText, setReplyText] = useState("");
     const [replyToStudent, setReplyToStudent] = useState(false);

     const tabs: FilterTab[] = ["All", "New", "Pending", "Resolved"];

     const filtered = TICKETS.filter((t) => {
          if (activeTab === "All") return true;
          return t.status === activeTab.toLowerCase();
     });
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="bg-white">
                    <div className="px-5 pt-5 pb-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                         <StatCard
                              label="Active Tickets"
                              value="47"
                              sub="12 new today"
                              trend={{ label: "8% from last week", up: false }}
                              icon={
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.66602 7.5013C2.32906 7.5013 2.96494 7.76469 3.43378 8.23353C3.90262 8.70238 4.16602 9.33826 4.16602 10.0013C4.16602 10.6643 3.90262 11.3002 3.43378 11.7691C2.96494 12.2379 2.32906 12.5013 1.66602 12.5013V14.168C1.66602 14.61 1.84161 15.0339 2.15417 15.3465C2.46673 15.659 2.89065 15.8346 3.33268 15.8346H16.666C17.108 15.8346 17.532 15.659 17.8445 15.3465C18.1571 15.0339 18.3327 14.61 18.3327 14.168V12.5013C17.6696 12.5013 17.0338 12.2379 16.5649 11.7691C16.0961 11.3002 15.8327 10.6643 15.8327 10.0013C15.8327 9.33826 16.0961 8.70238 16.5649 8.23353C17.0338 7.76469 17.6696 7.5013 18.3327 7.5013V5.83464C18.3327 5.39261 18.1571 4.96868 17.8445 4.65612C17.532 4.34356 17.108 4.16797 16.666 4.16797H3.33268C2.89065 4.16797 2.46673 4.34356 2.15417 4.65612C1.84161 4.96868 1.66602 5.39261 1.66602 5.83464V7.5013Z" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.834 4.16797V5.83464" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.834 14.168V15.8346" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.834 9.16797V10.8346" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                              }
                         />
                         <StatCard
                              label="Unassigned"
                              value="8"
                              sub="Needs attention"
                              icon={
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13.3327 17.5V15.8333C13.3327 14.9493 12.9815 14.1014 12.3564 13.4763C11.7313 12.8512 10.8834 12.5 9.99935 12.5H4.99935C4.11529 12.5 3.26745 12.8512 2.64233 13.4763C2.01721 14.1014 1.66602 14.9493 1.66602 15.8333V17.5" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.49935 9.16667C9.3403 9.16667 10.8327 7.67428 10.8327 5.83333C10.8327 3.99238 9.3403 2.5 7.49935 2.5C5.6584 2.5 4.16602 3.99238 4.16602 5.83333C4.16602 7.67428 5.6584 9.16667 7.49935 9.16667Z" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.166 6.66797L18.3327 10.8346" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.3327 6.66797L14.166 10.8346" stroke="#3C83F6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                              }
                         />
                         <StatCard
                              label="Escalated Issues"
                              value="3"
                              sub="2 SLA breaches"
                              icon={
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                   </svg>
                              }
                         />
                         <StatCard
                              label="Avg. Resolution"
                              value="2.4h"
                              sub="Target: 4h"
                              trend={{ label: "15% from last week", up: true }}
                              icon={
                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                              }
                         />
                    </div>
                    <div className="px-5 pb-5 grid grid-cols-1 2xl:grid-cols-[260px_1fr_320px] xl:grid-cols-[220px_1fr_220px] gap-3 xl:h-[calc(100vh-160px)]">
                         {/* Left: Ticket List */}
                         <div className="bg-white rounded-xl border border-gray-3600 shadow-sm flex flex-col overflow-hidden">
                              <div className="px-4 pt-4 pb-2 mb-2 border-b border-gray-3600">
                                   <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm font-bold text-gray-800">Support Tickets</p>
                                        <span className="text-[10px] bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 font-semibold">
                                             6 total
                                        </span>
                                   </div>
                                   <div className="relative mb-3">
                                        <svg
                                             className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             viewBox="0 0 24 24"
                                        >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input
                                             type="text"
                                             placeholder="Search tickets..."
                                             className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                                        />
                                   </div>
                                   <div className="flex gap-1">
                                        {tabs.map((tab) => (
                                             <button
                                                  key={tab}
                                                  onClick={() => setActiveTab(tab)}
                                                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${activeTab === tab
                                                       ? "bg-blue-600 text-white"
                                                       : "text-gray-500 hover:bg-gray-100"
                                                       }`}
                                             >
                                                  {tab}
                                             </button>
                                        ))}
                                   </div>
                              </div>
                              <div className="xl:overflow-y-auto px-2 scrollbar-hide xl:flex-1">
                                   {filtered.map((t) => (
                                        <TicketCard
                                             key={t.id}
                                             ticket={t}
                                             active={activeTicket === t.id}
                                             onClick={() => setActiveTicket(t.id)}
                                        />
                                   ))}
                              </div>
                         </div>

                         {/* Center: Chat */}
                         <div className="bg-white rounded-xl border border-gray-3600 shadow-sm flex flex-col overflow-hidden">
                              {/* Header */}
                              <div className="p-4 border-b border-gray-3600 flex-wrap flex items-center justify-between">
                                   <div>
                                        <div className="flex items-center gap-2">
                                             <p className="text-base font-bold text-blue-1300">Payment failed for housing deposit</p>
                                             <span className="text-xs font-bold text-blue-1300 border border-gray-3600 rounded-full px-2.5 py-0.5">
                                                  TKT-001
                                             </span>
                                        </div>
                                        <p className="text-sm font-normal leading-5 text-gray-1900 mt-0.5">
                                             Ahmed Hassan •{" "}
                                             <span className="text-blue-500">ahmed.h@student.tu-berlin.de</span>
                                        </p>
                                   </div>
                                   <span className="text-xs font-bold  bg-blue1400 text-white rounded-full px-2.5 py-0.5">
                                        urgent
                                   </span>
                              </div>

                              {/* Messages */}
                              <div className="flex-1 overflow-y-auto scrollbar-hide p-3 flex flex-col gap-4">
                                   {MESSAGES.map((msg) => (
                                        <ChatBubble key={msg.id} msg={msg} />
                                   ))}
                              </div>

                              {/* Action buttons */}
                              <div className="px-5 py-2.5 border-t border-gray-100 flex gap-2 flex-wrap">
                                   <button className="text-xs font-medium px-3 py-2 rounded-lg border border-gray-3600 text-blue-1300 bg-gray-1500 hover:bg-blue-50 transition-colors">
                                        Assign to Finance
                                   </button>
                                   <button className="text-xs font-medium px-3 py-2 rounded-lg border border-yellow-1100/30 text-yellow-1100 bg-gray-1500 hover:bg-orange-50 transition-colors">
                                        Escalate to Manager
                                   </button>
                                   <button className="text-xs font-medium px-3 py-2 rounded-lg border border-red-1300/30 text-red-1300 bg-gray-1500 hover:bg-red-50 transition-colors">
                                        Refund Booking Fee
                                   </button>
                                   <button className="text-xs font-medium px-3 py-2 rounded-lg border border-green-1600/30 text-green-1600 bg-gray-1500 hover:bg-gray-50 transition-colors">
                                        Close Ticket
                                   </button>
                              </div>

                              {/* Reply box */}
                              <div className="px-5 pt-2 pb-3 border-t border-gray-3600">
                                   <div className="flex items-center justify-between mb-2">
                                        <button
                                             onClick={() => setReplyToStudent((v) => !v)}
                                             className="flex items-center gap-2 focus:outline-none"
                                        >
                                             <div
                                                  className={`w-8 h-4 rounded-full relative transition-colors duration-200 ${replyToStudent ? "bg-blue-500" : "bg-gray-200"
                                                       }`}
                                             >
                                                  <div
                                                       className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform duration-200 ${replyToStudent ? "translate-x-4" : "translate-x-0.5"
                                                            }`}
                                                  />
                                             </div>
                                             <span className="text-sm text-gray-1900">Reply to Student</span>
                                        </button>
                                        <div className="flex items-center gap-1 text-xs text-blue-1300 border bg-gray-1500 border-gray-3600 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-gray-50">
                                             Canned Responses
                                             <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                             </svg>
                                        </div>
                                   </div>
                                   <div className="bg-gray-1500 border border-gray-3600 rounded-lg">
                                        <textarea
                                             rows={3}
                                             value={replyText}
                                             onChange={(e) => setReplyText(e.target.value)}
                                             placeholder="Type your reply..."
                                             className="w-full text-sm border-none rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-300 text-gray-1900 placeholder-gray-1900"
                                        />
                                        <div className="flex items-center px-2 py-2.5 border-t border-gray-3600 justify-between mt-2">
                                             <button className="text-gray-400 hover:text-gray-600">
                                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                  </svg>
                                             </button>
                                             <button className="flex items-center gap-1.5 bg-blue1400 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                  </svg>
                                                  Send Reply
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Right: Student Context */}
                         <div className="bg-white rounded-xl border border-gray-3600 scrollbar-hide shadow-sm flex flex-col overflow-y-auto">
                              <div className="border-b border-gray-100">
                                   <div className="border-b border-gray-3600 p-4">
                                        <p className="text-base leading-6 font-bold text-blue-1300">Student Context</p>
                                   </div>
                                   <div className="p-4">
                                        <div className="flex items-center gap-3">
                                             <div className="w-12 h-12 rounded-full bg-blue1400/10 flex items-center justify-center">
                                                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                  </svg>
                                             </div>
                                             <div className="flex-1">
                                                  <p className="text-base leading-6 font-medium text-blue-1300">Ahmed Hassan</p>
                                                  <p className="text-xs font-normal text-gray-1900">ahmed.h@student.tu-berlin.de</p>
                                             </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 gap-3 mt-3">
                                             <div>
                                                  <p className="text-xs leading-4 font-normal text-gray-1900">University</p>
                                                  <p className="text-xs font-medium text-blue-1300">TU Berlin</p>
                                             </div>
                                             <div>
                                                  <p className="text-xs leading-4 font-normal text-gray-1900">Student ID</p>
                                                  <p className="text-xs font-medium text-blue-1300">STU-2024-8821</p>
                                             </div>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                             <span className="text-xs flex items-center gap-1 font-medium text-green-1600 bg-green-1600/10 border border-green-1600/30 rounded-md px-2.5 py-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                       <path d="M11.6673 7.5849C11.6673 10.5016 9.62565 11.9599 7.19898 12.8057C7.07191 12.8488 6.93388 12.8467 6.80815 12.7999C4.37565 11.9599 2.33398 10.5016 2.33398 7.5849V3.50156C2.33398 3.34685 2.39544 3.19848 2.50484 3.08909C2.61424 2.97969 2.76261 2.91823 2.91732 2.91823C4.08398 2.91823 5.54232 2.21823 6.55732 1.33156C6.6809 1.22598 6.83811 1.16797 7.00065 1.16797C7.16319 1.16797 7.3204 1.22598 7.44398 1.33156C8.46482 2.22406 9.91732 2.91823 11.084 2.91823C11.2387 2.91823 11.3871 2.97969 11.4965 3.08909C11.6059 3.19848 11.6673 3.34685 11.6673 3.50156V7.5849Z" stroke="#16A249" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg> Low Risk (15/100)
                                             </span>
                                             <span className="text-xs flex items-center gap-1 font-medium text-green-1600 bg-green-1600/10 border border-green-1600/30 rounded-md px-2.5 py-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                       <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#16A249" strokeLinecap="round" strokeLinejoin="round" />
                                                       <path d="M4.5 6L5.5 7L7.5 5" stroke="#16A249" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg> KYC Verified
                                             </span>
                                        </div>
                                   </div>
                              </div>
                              <div className="px-4 py-3 border-b border-gray-100">
                                   <p className="text-sm leading-5 font-medium text-blue-1300">Active Services</p>
                                   {[
                                        { icon: "/images/home-icon2.svg", name: "Student Housing", sub: "StudyFlat Berlin" },
                                        { icon: "/images/shield-icon4.svg", name: "Health Insurance", sub: "Allianz Care" },
                                   ].map((s) => (
                                        <div key={s.name} className="flex items-center justify-between py-2">
                                             <div className="flex items-center gap-2">
                                                  <div className="bg-blue1400/10 w-7 h-7 rounded-md flex items-center justify-center ">
                                                       <img src={s.icon} className="w-4 h-4 " alt="" />
                                                  </div>
                                                  <div>
                                                       <p className="text-sm font-medium text-blue-1300">{s.name}</p>
                                                       <p className="text-xs text-gray-1900 font-normal">{s.sub}</p>
                                                  </div>
                                             </div>
                                             <span className="text-xs font-bold text-green-600 bg-green-1600/10 rounded-full px-2 py-0.5">
                                                  Active
                                             </span>
                                        </div>
                                   ))}
                              </div>

                              <div className="px-4 py-3 border-b border-gray-100">
                                   <p className="text-sm leading-5 font-medium text-blue-1300 mb-2">Recent Bookings</p>
                                   {BOOKINGS.map((b) => (
                                        <div key={b.id} className="rounded-lg border flex items-start justify-between border-gray-3600 bg-gray-1500 p-2.5 mb-2">
                                             <div>
                                                  <div className="flex items-center justify-between mb-0.5">
                                                       <p className="text-xs font-medium text-blue-1300">{b.label}</p>
                                                  </div>
                                                  <div className="">
                                                       <p className="text-sm font-bold text-blue-1300">{b.amount}</p>
                                                       <p className="text-xs text-gray-1900">{b.date}</p>
                                                  </div>
                                             </div>
                                             <div>
                                                  <span
                                                       className={`text-xs font-bold rounded-full px-2 py-0.5 ${b.status === "pending"
                                                            ? "bg-yellow-1100/10 text-yellow-1100"
                                                            : "bg-green-1600/10 text-green-1600"
                                                            }`}
                                                  >
                                                       {b.status}
                                                  </span>
                                                  <p className="text-xs text-gray-1900 mt-0.5">{b.id}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              <div className="px-4 py-3 border-b border-gray-100">
                                   <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm font-medium text-blue-1300">Audit Logs</p>
                                        <button className="text-xs text-blue1400 font-medium flex items-center gap-0.5 hover:underline">
                                             View All
                                             <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                             </svg>
                                        </button>
                                   </div>
                                   <div className="space-y-2">
                                        {AUDIT_LOGS.map((log) => (
                                             <div key={log.id} className="flex items-center gap-2">
                                                  {log.type === "error" ? (
                                                       <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                                                            <img src="/images/cross-circle.svg" alt="" />
                                                       </div>
                                                  ) : (
                                                       <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                            <img src="/images/tick-circle7.svg" alt="" />
                                                       </div>
                                                  )}
                                                  <div>
                                                       <p className="text-xs font-normal text-blue-1300">{log.label}</p>
                                                       <p className="text-xs font-normal text-gray-1900">{log.date}</p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="px-4 py-3">
                                   <div className="flex items-center gap-1.5 mb-2">
                                        <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <p className="text-sm font-medium text-blue-1300">Account Summary</p>
                                   </div>
                                   <div className="grid grid-cols-2 gap-3">
                                        <div>
                                             <p className="text-xs font-normal text-gray-1900 mb-0.5">Total Spent</p>
                                             <p className="text-xs font-normal text-blue-1300">€2,450</p>
                                        </div>
                                        <div>
                                             <p className="text-xs font-normal text-gray-1900 mb-0.5">Member Since</p>
                                             <p className="text-xs font-normal text-blue-1300">Jan 15, 2024</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
