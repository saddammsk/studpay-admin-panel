"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  useContentCMSStore,
  NotificationStatus,
  NotificationChannel,
  NotificationCategory,
} from "@/app/store/zustand/useContentCMSStore";

const statusConfig: Record<NotificationStatus, { wrapper: string; dot: string }> = {
  Live: { wrapper: "bg-green-1600/10 text-green-1600", dot: "bg-green-1600" },
  Draft: { wrapper: "bg-yellow-1100/10 text-yellow-1100", dot: "bg-yellow-1100" },
  Archived: { wrapper: "bg-gray-1200/10 text-gray-1200", dot: "bg-gray-1200" },
};

const categoryConfig: Record<NotificationCategory, { classes: string }> = {
  Promotion: { classes: "bg-blue-3000/10 text-blue-3000" },
  Update: { classes: "bg-skyblue23/10 text-skyblue23" },
  Alert: { classes: "bg-yellow-1100/10 text-yellow-1100" },
  Announcement: { classes: "bg-green-1600/10 text-green-1600" },
};

const CHANNELS: Array<NotificationChannel | "All Channels"> = ["All Channels", "Push", "Email", "In-App"];
const STATUSES: Array<NotificationStatus | "All Status"> = ["All Status", "Live", "Draft", "Archived"];

function RowMenu({ id }: { id: string }) {
  const { openRowMenuId, setOpenRowMenuId, updateNotificationStatus, deleteNotification } = useContentCMSStore();
  const isOpen = openRowMenuId === id;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenRowMenuId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, setOpenRowMenuId]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpenRowMenuId(isOpen ? null : id)}
        className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
      >
        <img src="/images/dots-icon2.svg" alt="" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-1000 rounded-lg shadow-13xl z-20 overflow-hidden">
          <button onClick={() => updateNotificationStatus(id, "Live")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-green-1600 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-1600 shrink-0" /> Set Live
          </button>
          <button onClick={() => updateNotificationStatus(id, "Draft")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-yellow-1100 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-1100 shrink-0" /> Set Draft
          </button>
          <button onClick={() => updateNotificationStatus(id, "Archived")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-gray-1200 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-1200 shrink-0" /> Archive
          </button>
          <div className="border-t border-gray-1000" />
          <button onClick={() => deleteNotification(id)} className="w-full text-left text-xs px-3 py-2 hover:bg-red-50 text-red-1300 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 3h9M4.5 3V2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1M5 5.5v3M7 5.5v3M2 3l.5 6.5A1 1 0 003.5 10.5h5a1 1 0 001-1L10 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function LedgerTable() {
  const {
    pagedNotifications, filteredNotifications,
    channelFilter, setChannelFilter,
    statusFilter, setStatusFilter,
    currentPage, setCurrentPage, totalPages,
  } = useContentCMSStore();

  const items = pagedNotifications();
  const total = filteredNotifications().length;
  const pages = totalPages();

  return (
    <div>
     <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-5">
          <div>
          <h6 className="text-base font-bold leading-6 text-black-2600">Communication Ledger</h6>
          <p className="text-sm font-normal leading-5 text-gray-1200">
            Manage all student-facing communications
          </p>
          </div>

            <div className="px-5 py-3 flex flex-wrap items-center gap-3">
        <select
          value={channelFilter}
          onChange={(e) => setChannelFilter(e.target.value as NotificationChannel | "All Channels")}
          className="h-9 px-3 text-sm border border-gray-1000 rounded-md bg-white outline-none cursor-pointer text-black-2600"
        >
          {CHANNELS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as NotificationStatus | "All Status")}
          className="h-9 px-3 text-sm border border-gray-1000 rounded-md bg-white outline-none cursor-pointer text-black-2600"
        >
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
     </div>
    

      <div className="border-t border-gray-1000 overflow-x-auto">
        <table className="xl:w-full w-[1199px]">
          <thead>
            <tr className="border-b border-gray-1000">
              {["ID", "Title", "Category", "Channel", "Target Segment", "Status", "Actions"].map((h) => (
                <th key={h} className="px-5 py-3 bg-gray-1600/30 text-left font-normal uppercase text-xs text-gray-1200">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-sm text-gray-1200">No communications match your filters.</td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="border-b border-gray-3600">
                  <td className="px-4 py-6 text-sm text-gray-1200">{item.id}</td>
                  <td className="px-4 py-6 text-sm">
                    <div className="flex flex-col">
                      <span className="text-black-2600">{item.title}</span>
                      <span className="text-xs text-gray-1200">{item.date}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6 text-sm">
                    <span className={`px-3 h-5.5 rounded-full text-xs inline-flex items-center justify-center ${categoryConfig[item.category].classes}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-4 py-6 text-sm">
                    <div className="flex items-center gap-2 text-black-2600">
                      <Image src={item.channelIcon} alt={item.channel} width={16} height={16} />
                      <span>{item.channel}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6 text-sm text-black-2600">{item.targetSegment}</td>
                  <td className="px-4 py-6">
                    <span className={`px-3 h-5.5 rounded-full text-xs inline-flex items-center gap-1.5 ${statusConfig[item.status].wrapper}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[item.status].dot}`} />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <RowMenu id={item.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="py-4 px-5 flex items-center justify-between border-t border-gray-1000">
        <p className="text-sm font-normal leading-5 text-gray-1200">
          Showing {Math.min((currentPage - 1) * 6 + items.length, total)} of {total} communications
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-black-2600 bg-transparent border border-gray-1000 h-10 px-4 rounded-md text-sm font-medium disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${p === currentPage ? "bg-blue-1000 text-white" : "border border-gray-1000 text-black-2600 hover:bg-gray-50"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pages}
            className="text-black-2600 bg-transparent border border-gray-1000 h-10 px-4 rounded-md text-sm font-medium disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}