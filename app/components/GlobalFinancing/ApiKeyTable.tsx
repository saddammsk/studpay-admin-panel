"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useApiKeyStore, ApiKey } from "@/app/store/zustand/useApikeyStore";

const statusConfig: Record<string, string> = {
  active:   "bg-green59/10 border-green59/20 text-blue1700",
  inactive: "bg-gray-6200 border-grey5800 text-blue1700",
  expired:  "bg-red2100/10 border-red2100/20 text-blue1700",
};

const statusLabel: Record<string, string> = {
  active:   "Active",
  inactive: "inactive",
  expired:  "revoked",
};

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "Never";
  const diff  = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 2)   return "just now";
  if (mins < 60)  return `${mins} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

function maskSecret(key: string): string {
  const prefix = key.includes("test") ? "sk_test_" : "sk_live_";
  return prefix + "••••••••••••••••";
}

function ActionMenu({ item }: { item: ApiKey }) {
  const { openViewModal, openDeleteModal, toggleKeyStatus } = useApiKeyStore();

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition">
        <Image src="/icons/dots-vertical.svg" width={16} height={16} alt="actions" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-1 w-44 origin-top-right rounded-md bg-white shadow-lg border border-grey5800 py-1 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => openViewModal(item)}
                className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs text-blue1700 ${
                  active ? "bg-gray-6200" : ""
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View Details
              </button>
            )}
          </Menu.Item>

          {item.status !== "expired" && (
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => toggleKeyStatus(item.id)}
                  className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs text-blue1700 ${
                    active ? "bg-gray-6200" : ""
                  }`}
                >
                  {item.status === "active" ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeLinecap="round"/>
                        <line x1="10" y1="15" x2="10" y2="9" strokeLinecap="round"/>
                        <line x1="14" y1="15" x2="14" y2="9" strokeLinecap="round"/>
                      </svg>
                      Deactivate
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeLinecap="round"/>
                        <polygon points="10 8 16 12 10 16 10 8" strokeLinecap="round"/>
                      </svg>
                      Activate
                    </>
                  )}
                </button>
              )}
            </Menu.Item>
          )}

          <div className="my-1 border-t border-grey5800" />

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => openDeleteModal(item)}
                className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs text-red-600 ${
                  active ? "bg-red-50" : ""
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" strokeLinecap="round"/>
                  <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round"/>
                </svg>
                Revoke Key
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function ApiKeyTable() {
  const { keys } = useApiKeyStore();

  return (
    <div className="overflow-x-auto">
      <table className="lg:w-full w-200">
        <thead>
          <tr className="border-b border-solid border-grey-5400">
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Key Name
            </th>
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Secret
            </th>
            <th className="p-4 tracking-[0.6px] text-center text-xs font-bold text-gray-5000 uppercase">
              Created
            </th>
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Time
            </th>
            <th className="p-4 tracking-[0.6px] text-center text-xs font-bold text-gray-5000 uppercase">
              Status
            </th>
            <th className="p-4" />
          </tr>
        </thead>

        <tbody>
          {keys.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-12 text-center text-sm text-gray-5000">
                No API keys yet. Generate your first key to get started.
              </td>
            </tr>
          ) : (
            keys.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0"
              >
                <td className="px-4 py-5">
                  <h4 className="text-blue1700 font-medium text-sm">{item.name}</h4>
                </td>

                <td className="px-4 py-5">
                  <span className="inline-flex items-center text-gray-5000 text-sm bg-gray-6200 rounded px-2 py-1">
                    {maskSecret(item.key)}
                  </span>
                </td>

                <td className="px-4 py-5 text-gray-5000 text-xs text-center">
                  {item.createdAt}
                </td>

                <td className="px-4 py-5 text-gray-5000 text-xs">
                  {timeAgo(item.lastUsed)}
                </td>

                <td className="p-4 text-center">
                  <span
                    className={`px-2 h-5.5 text-xs font-semibold border rounded-full inline-flex items-center ${
                      statusConfig[item.status] ?? statusConfig.inactive
                    }`}
                  >
                    {statusLabel[item.status] ?? item.status}
                  </span>
                </td>

                <td className="p-4">
                  <ActionMenu item={item} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}