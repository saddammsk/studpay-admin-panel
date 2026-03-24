"use client";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import { useIncidentStore } from "@/app/store/zustand/useIncidentstore";
import type { Severity, Status } from "@/app/store/zustand/useIncidentstore";

const severityConfig: Record<Severity, { wrapper: string; dot: string }> = {
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

const statusConfig: Record<Status, { wrapper: string }> = {
  New: { wrapper: "bg-red-2200 text-white" },
  "In Progress": { wrapper: "bg-yellow-2300 text-white" },
  Resolved: { wrapper: "bg-gray-5800 text-green-3300" },
  Closed: { wrapper: "bg-gray-5800 text-gray-2300" },
};

export default function IncidentTable() {
  const {
    incidents,
    selectedIncident,
    isModalOpen,
    openIncident,
    closeModal,
    resolveIncident,
    getTimeline,
  } = useIncidentStore();

  const timeline = selectedIncident ? getTimeline(selectedIncident.id) : [];

  return (
    <>
      <div className="border border-gray-200 overflow-x-auto">
        <table className="xl:w-full w-300">
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
              <tr
                onClick={() => openIncident(item)}
                key={item.id}
                className="border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                {/* ID & Severity */}
                <td className="px-5 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-black-2900 text-xs uppercase">
                      {item.id}
                    </span>
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
                    <span className="text-xs text-gray-2300">{item.time}</span>
                  </div>
                </td>

                {/* Assignee */}
                <td className="px-5 py-4 text-sm text-black-2900">
                  {item.assignee}
                </td>

                {/* Status */}
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

      {/****** Activity Log Modal *******/}
      {selectedIncident && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          panelClassName="max-w-[420px] border-0 rounded-lg! bg-white relative"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-5600">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold font-JetBrainsMono text-Black235">
                {selectedIncident.id}
              </h4>
              <span className="inline-flex items-center justify-center gap-1 text-xs px-2 h-5.5 bg-gray-3500 border border-solid border-red-2200/30 rounded text-red-2200 font-bold">
                ●{" "}
                {selectedIncident.severity}
              </span>
              <span
                className={`inline-flex items-center justify-center text-xs px-2 h-5 rounded font-normal ${statusConfig[selectedIncident.status].wrapper}`}
              >
                {selectedIncident.status}
              </span>
            </div>
          </div>

          <div className="px-5 py-4 border-b border-gray-5600">
            <div className="flex items-center gap-3">
              <span className="rounded-full w-10 h-10 shadow-84xl flex items-center justify-center">
                <Image
                  src={selectedIncident.studentAvatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </span>
              <div>
                <div className="text-Black23 text-sm font-bold leading-5">
                  {selectedIncident.studentName}
                </div>
                <div className="text-gray-23 text-xs leading-4 font-normal flex items-center gap-1">
                  <Image
                    src={selectedIncident.studentFlag}
                    alt="flag"
                    width={10}
                    height={10}
                  />
                  {selectedIncident.studentCountry}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="bg-gray-5800 rounded px-2.5 py-1.5">
                <div className="text-xs leading-4 text-gray-2300 font-normal">
                  Trigger
                </div>
                <div className="text-xs leading-4 font-normal text-Black235">
                  {selectedIncident.trigger}
                </div>
              </div>
              <div className="bg-gray-5800 rounded px-2.5 py-1.5">
                <div className="text-xs leading-4 text-gray-2300 font-normal">
                  Location
                </div>
                <div className="text-xs leading-4 font-normal text-Black235">
                  {selectedIncident.location}
                </div>
              </div>
              <div className="bg-gray-5800 rounded px-2.5 py-1.5">
                <div className="text-xs leading-4 text-gray-2300 font-normal">
                  Last Activity
                </div>
                <div className="text-xs leading-4 font-normal text-Black235">
                  {selectedIncident.time}
                </div>
              </div>
              <div className="bg-gray-5800 rounded px-2.5 py-1.5">
                <div className="text-xs leading-4 text-gray-2300 font-normal">
                  Assignee
                </div>
                <div className="text-xs leading-4 font-normal text-Black235">
                  {selectedIncident.assignee}
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 border-b border-gray-200">
            <h4 className="text-gray-2300 text-xs leading-4 font-bold flex items-center gap-1.5 uppercase">
              <Image
                src="/images/clock-gray.svg"
                width={14}
                height={14}
                alt=""
              />{" "}
              TIMELINE OF EVENTS
            </h4>

            <div className="relative pl-1 mt-3">
              <div className="absolute left-1.75 top-1 bottom-1 w-px bg-gray-300" />
              <div className="">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex gap-4 pt-1.5 mb-3 last:mb-0"
                  >
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-gray-700" />
                    <div className="">
                      <div className="text-[11px] leading-4 font-normal mb-px font-JetBrainsMono text-gray-2300">
                        {item.time}
                      </div>
                      <div className="text-Black235 text-sm leading-5 font-normal">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 py-4 border-b border-gray-200">
            <h4 className="text-gray-2300 text-xs leading-4 font-bold uppercase">
              COMMUNICATION HUB
            </h4>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button className="flex items-center justify-center hover:bg-gray-5600 h-9 text-Black235 font-normal sm:text-xs text-[10px] leading-4 gap-1.5 bg-gray-1800 border border-solid border-gray-5600 rounded-md w-full">
                <Image
                  src="/icons/call-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                Call Student
              </button>
              <button className="flex items-center justify-center hover:bg-gray-5600 h-9 text-Black235 font-normal sm:text-xs text-[10px] leading-4 gap-1.5 bg-gray-1800 border border-solid border-gray-5600 rounded-md w-full">
                <Image
                  src="/images/user-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                Trust Contact
              </button>
              <button className="flex items-center justify-center h-9 text-white font-normal sm:text-xs text-[10px] leading-4 gap-1.5 bg-red-2200 hover:bg-red-2200/90 border border-solid border-red-2200 rounded-md w-full">
                <Image
                  src="/images/Emergency.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                Emergency
              </button>
            </div>
          </div>

          <div className="px-5 py-4">
            <button
              onClick={() => resolveIncident(selectedIncident.id)}
              disabled={
                selectedIncident.status === "Resolved" ||
                selectedIncident.status === "Closed"
              }
              className="w-full bg-blue-1000 h-9 text-white text-sm leading-5 rounded-md hover:bg-blue-1000/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Resolve Incident
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}