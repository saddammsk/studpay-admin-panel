"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useSavingPotsStore, type Risk, type PotStatus, type Pot } from "@/app/store/zustand/useSavingPotsStore";
import Pagination from "@/app/components/common/Pagination";


const riskDot: Record<Risk, React.ReactNode> = {
  Low:    <span className="w-2.5 h-2.5 rounded-full bg-lightgreen17 inline-block" />,
  Medium: <span className="w-2.5 h-2.5 rounded-full bg-yellow-1100 inline-block" />,
  High:   <Image src="/icons/sheild-error.svg" width={20} height={20} alt="High Risk" />,
};

const statusStyle: Record<PotStatus, string> = {
  Active:    "bg-rosepink23 text-royalBlue123",
  Flagged:   "bg-rosepink23 text-red2100",
  Completed: "bg-rosepink23 text-lightgreen17",
};

const riskLabelStyle: Record<Risk, string> = {
  Low:    "text-lightgreen17",
  Medium: "text-yellow-1100",
  High:   "text-red2100",
};


function PotDetailModal({ pot, onClose }: { pot: Pot; onClose: () => void }) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-2"
          >
            <Dialog.Panel className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-solid border-gray-1000">
                <div>
                  <Dialog.Title className="text-black-2000 text-base leading-6 font-bold">
                    {pot.name}
                  </Dialog.Title>
                  <p className="text-gray-2300 text-sm leading-5 font-normal mt-0.5">
                    Pot ID #{pot.id} · Created {pot.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 h-6 rounded-full text-xs font-medium leading-4 inline-flex items-center justify-center ${statusStyle[pot.status]}`}
                  >
                    {pot.status}
                  </span>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600/50 transition-colors"
                  >
                    <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
                  </button>
                </div>
              </div>

              <div className="px-6 py-5 space-y-5">
                {pot.subtitle && (
                  <div className="flex items-start gap-2.5 bg-red2100/5 border border-solid border-red2100/20 rounded-lg px-4 py-3">
                    {pot.icon && (
                      <Image src={pot.icon} width={16} height={16} alt="alert" className="mt-0.5 shrink-0" />
                    )}
                    <p className="text-red2100 text-sm leading-5 font-medium">{pot.subtitle}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Creator",      value: pot.creator },
                    { label: "Participants", value: String(pot.participants) },
                    { label: "Collected",    value: pot.collected },
                    { label: "Target",       value: pot.limit },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-1600/30 rounded-xl px-4 py-3">
                      <p className="text-gray-2300 text-xs leading-4 font-medium uppercase mb-1">{label}</p>
                      <p className="text-black-2000 text-sm leading-5 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-2300 text-xs leading-4 font-medium uppercase">Progress</p>
                    <span
                      className={`text-sm font-semibold ${
                        pot.progress > 100 ? "text-red2100" : "text-royalBlue123"
                      }`}
                    >
                      {pot.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-1600 rounded-full overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full transition-all ${
                        pot.progress > 100 ? "bg-red2100" : "bg-royalBlue123"
                      }`}
                      style={{ width: `${Math.min(pot.progress, 100)}%` }}
                    />
                  </div>
                  {pot.progress > 100 && (
                    <p className="text-red2100 text-xs leading-4 font-normal mt-1.5">
                      ⚠ Collection exceeds target by {pot.progress - 100}%
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between py-3 border-t border-solid border-gray-1000">
                  <p className="text-gray-2300 text-sm leading-5 font-normal">Risk Level</p>
                  <span className={`flex items-center gap-1.5 text-sm font-semibold ${riskLabelStyle[pot.risk]}`}>
                    {riskDot[pot.risk]}
                    {pot.risk}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-1600/20 border-t border-solid border-gray-1000">
                {pot.status === "Flagged" && (
                  <button className="flex items-center gap-2 h-9 px-4 text-sm font-medium text-white bg-red2100 hover:bg-red2100/90 rounded-lg transition-colors">
                    <Image src="/images/recycle-icon-yellow.svg" width={16} height={16} alt="" className="brightness-200" />
                    Refund Pot
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="h-9 px-4 text-sm font-medium text-gray-2300 bg-white hover:bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}


const dropdownActions = (pot: Pot) => [
  {
    label: "View Details",
    show: true,
    isViewDetail: true,
  },
  {
    label: "Freeze Pot",
    show: pot.status === "Active",
    isViewDetail: false,
  },
  {
    label: "Refund Pot",
    show: pot.status === "Flagged",
    isViewDetail: false,
  },
  {
    label: "Mark Resolved",
    show: pot.status === "Flagged",
    isViewDetail: false,
  },
  {
    label: "Export Data",
    show: true,
    isViewDetail: false,
  },
];

function ActionsDropdown({ pot, onViewDetail }: { pot: Pot; onViewDetail: () => void }) {
  const actions = dropdownActions(pot).filter((a) => a.show);

  return (
  <Menu as="div" className="inline-block w-full">
  <MenuButton className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-1600/50">
    <Image src="/icons/dots-vertical.svg" width={16} height={16} alt="menu" />
  </MenuButton>


  <MenuItems anchor="bottom" className="mt-2 w-44 p-1 bg-white border border-gray-1000 rounded-xl shadow-lg overflow-hidden focus:outline-none">
    {actions.map((action) => (
      <MenuItem key={action.label} as={Fragment}>
        {({ active }) => (
          <button
            onClick={action.isViewDetail ? onViewDetail : undefined}
            className={`w-full flex items-center gap-2.5 px-3.5 py-1 text-xs ${
              active ? "bg-gray-1600/40" : ""}`}>
            {action.label}
          </button>
        )}
      </MenuItem>
    ))}
  </MenuItems>
</Menu>
  );
}


export default function PostCagnottesTable() {
  const [selectedPot, setSelectedPot] = useState<Pot | null>(null);

  const {
    pots,
    potPage,
    potPageSize,
    paginatedPots,
    totalPotPages,
    setPotPage,
  } = useSavingPotsStore();

  const rows = paginatedPots();
  const pages = totalPotPages();

  return (
    <>
      <div className="mt-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between px-5 py-4 border-b border-solid border-gray-1000">
          <div>
            <h4 className="text-lg leading-7 font-bold text-black-2000">
              Pots & Cagnottes Monitoring
            </h4>
            <p className="text-sm leading-5 font-normal text-gray-2300">
              Active user pots with anti-fraud monitoring
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
              <span className="w-2 h-2 rounded-full bg-lightgreen17" /> Low Risk
            </span>
            <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
              <span className="w-2 h-2 rounded-full bg-yellow-1100" /> Medium
            </span>
            <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
              <span className="w-2 h-2 rounded-full bg-red2100" /> High
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-275 text-sm">
            <thead>
              <tr className="bg-gray-1600/30">
                {["Risk", "Pot Name", "Creator", "Participants", "Collected", "Progress", "Status"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
                <th className="px-4 py-3 text-right uppercase text-xs leading-4 font-bold text-gray-2300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr
                  key={item.id}
                  className={`border-t border-solid border-gray-1000 transition-colors ${
                    item.status === "Flagged" ? "bg-rosepink23/30" : "hover:bg-gray-1600/10"
                  }`}
                >
                  <td className="px-4 py-3">{riskDot[item.risk]}</td>

                  <td className="px-4 py-3 text-black-2000 text-sm leading-5 font-medium">
                    <div>{item.name}</div>
                    {item.subtitle && (
                      <div className="flex items-center gap-1 text-red2100 text-xs leading-4 font-normal mt-1">
                        {item.icon && (
                          <Image src={item.icon} width={12} height={12} alt="icon" />
                        )}
                        <span>{item.subtitle}</span>
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-black-2000 text-sm leading-5 font-normal whitespace-nowrap">
                      {item.creator}
                    </div>
                    <div className="text-gray-2300 text-xs leading-4 font-normal">{item.date}</div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center text-black-2000 text-sm leading-5 font-medium gap-1.5">
                      <Image src="/images/user-blue.svg" width={14} height={14} alt="users" />
                      {item.participants}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-royalBlue123 text-sm leading-5 font-medium whitespace-nowrap">
                      {item.collected}
                    </div>
                    <div className="text-gray-2300 text-xs leading-4 font-normal whitespace-nowrap">
                      of {item.limit}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="w-24">
                      <div className="text-gray-2300 text-xs leading-4 font-normal mb-1 flex items-center justify-between">
                        Progress{" "}
                        <span className="text-black-2000 font-medium">{item.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-1600 rounded">
                        <div
                          className={`h-2 rounded ${
                            item.progress > 100 ? "bg-red2100" : "bg-royalBlue123"
                          }`}
                          style={{ width: `${Math.min(item.progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 h-6 rounded-full text-xs font-medium leading-4 inline-flex items-center justify-center ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <ul className="flex items-center justify-end gap-1">
                      <li>
                        <button
                          onClick={() => setSelectedPot(item)}
                          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-1600/50 transition-colors"
                        >
                          <Image src="/images/eyes-icon.svg" width={16} height={16} alt="view" />
                        </button>
                      </li>
                      <li>
                        <ActionsDropdown
                          pot={item}
                          onViewDetail={() => setSelectedPot(item)}
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <Pagination
            page={potPage}
            totalPages={pages}
            totalItems={pots.length}
            pageSize={potPageSize}
            onPageChange={setPotPage}
          />
        )}
      </div>

      {selectedPot && (
        <PotDetailModal pot={selectedPot} onClose={() => setSelectedPot(null)} />
      )}
    </>
  );
}