'use client'
import { useState } from "react";

interface Agent {
  id: number;
  name: string;
  role: string;
}

interface AlertItem {
  id: string;
  severity: "critical" | "high" | "medium";
  title: string;
  description: string;
  time: string;
}

const agents: Agent[] = [
  { id: 1, name: "Sarah Chen", role: "Senior Compliance Officer" },
  { id: 2, name: "Marcus Webb", role: "Fraud Analyst" },
  { id: 3, name: "Priya Nair", role: "Risk Investigator" },
];

const alertsData: AlertItem[] = [
  { id: "USR-4521", severity: "critical", title: "Potential Sanction Match", description: "Name match against OFAC SDN list - 87% confidence", time: "2m ago" },
  { id: "USR-3892", severity: "high", title: "High Velocity Alert", description: "15 transactions in 10 minutes - €12,400 total", time: "8m ago" },
  { id: "USR-7721", severity: "medium", title: "Unusual Activity", description: "First-time large transfer to high-risk jurisdiction", time: "15m ago" },
];

interface AssignModalProps {
  alert: AlertItem;
  onClose: () => void;
  onAssign: (alertId: string, agent: Agent) => void;
}

function AssignModal({ alert, onClose, onAssign }: AssignModalProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-5 w-72 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm font-semibold text-black mb-1">Assign Agent</p>
        <p className="text-[11px] text-gray-500 mb-3">
          {alert.id} — {alert.title}
        </p>
        <div className="flex flex-col gap-2 mb-4">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelected(agent.id)}
              className={`flex items-center gap-2.5 p-2 rounded-lg border-2 text-left cursor-pointer transition-all ${
                selected === agent.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shrink-0">
                {agent.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <p className="text-xs font-semibold text-black leading-4">{agent.name}</p>
                <p className="text-[10px] text-gray-500">{agent.role}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 cursor-pointer bg-white"
          >
            Cancel
          </button>
          <button
            disabled={!selected}
            onClick={() => {
              const found = agents.find((a) => a.id === selected);
              if (found) {
                onAssign(alert.id, found);
                onClose();
              }
            }}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-white border-none transition-colors ${
              selected ? "bg-blue-600 cursor-pointer" : "bg-blue-200 cursor-not-allowed"
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

interface DetailModalProps {
  alert: AlertItem;
  onClose: () => void;
}

function DetailModal({ alert, onClose }: DetailModalProps) {
  const riskScore =
    alert.severity === "critical" ? "92/100" : alert.severity === "high" ? "74/100" : "51/100";

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-5 w-80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-black">{alert.title}</p>
            <p className="text-[10px] text-gray-500 uppercase mt-0.5">
              {alert.id} · {alert.severity}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 text-lg leading-none bg-transparent border-none cursor-pointer hover:text-gray-600"
          >
            ×
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-2.5 mb-3">
          <p className="text-[11px] text-gray-600 leading-relaxed">{alert.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {(
            [
              ["Detected", alert.time],
              ["Status", "Unassigned"],
              ["Risk Score", riskScore],
              ["Source", "Automated Rule"],
            ] as [string, string][]
          ).map(([label, val]) => (
            <div key={label} className="bg-gray-100 rounded-lg p-2">
              <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide">{label}</p>
              <p className="text-xs font-semibold text-black mt-0.5">{val}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-600 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function RiskFraudAlerts() {
  const [assignModal, setAssignModal] = useState<string | null>(null);
  const [detailModal, setDetailModal] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, Agent>>({});

  const handleAssign = (alertId: string, agent: Agent): void => {
    setAssignments((prev) => ({ ...prev, [alertId]: agent }));
  };

  const assignAlert = assignModal ? alertsData.find((a) => a.id === assignModal) : null;
  const detailAlert = detailModal ? alertsData.find((a) => a.id === detailModal) : null;

  return (
    <div className="flex-1">
      {assignAlert && (
        <AssignModal
          alert={assignAlert}
          onClose={() => setAssignModal(null)}
          onAssign={handleAssign}
        />
      )}
      {detailAlert && (
        <DetailModal
          alert={detailAlert}
          onClose={() => setDetailModal(null)}
        />
      )}

      <div className="flex-1 w-full border border-solid border-gray-200 rounded-lg bg-white">

        {/* Header */}
        <div className="border-b border-solid border-gray-200 flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="text-sm font-semibold leading-5 text-black">Risk & Fraud Alerts</p>
          </div>
          <p className="text-red-600 font-medium text-xs bg-red-100 inline-flex items-center justify-center rounded-full h-5 px-2">
            1 critical
          </p>
        </div>

        {/* Critical Alert */}
        <div className="border-l-2 border-b border-solid border-l-red-600 border-b-gray-200 p-3">
          <div className="flex items-start gap-3">
            <span className="bg-red-100 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <div className="flex-1 w-full">
              <ul className="flex items-center gap-3 list-none p-0 m-0">
                <li><span className="text-white font-medium text-[10px] leading-none inline-flex items-center justify-center bg-red-600 rounded h-[19px] px-1.5 uppercase">critical</span></li>
                <li><span className="text-gray-500 font-medium text-[10px] leading-none inline-flex items-center justify-center h-[19px] uppercase">USR-4521</span></li>
              </ul>
              <h4 className="mt-1 text-black font-medium text-xs leading-4">Potential Sanction Match</h4>
              <p className="mt-0.5 text-gray-500 font-normal text-[11px] leading-4">Name match against OFAC SDN list - 87% confidence</p>
              {assignments["USR-4521"] && (
                <p className="mt-0.5 text-blue-600 text-[10px] font-medium">👤 Assigned: {assignments["USR-4521"].name}</p>
              )}
              <div className="flex items-center justify-between">
                <ul className="mt-1.5 flex items-center gap-2 list-none p-0 m-0">
                  <li>
                    <button onClick={() => setAssignModal("USR-4521")} className="bg-gray-100 border border-solid border-gray-200 text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-1.5 cursor-pointer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                      {assignments["USR-4521"] ? "Reassign" : "Assign Agent"}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setDetailModal("USR-4521")} className="text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1 cursor-pointer bg-transparent border-none">
                      View Details
                    </button>
                  </li>
                </ul>
                <p className="text-gray-500 font-normal text-[10px] leading-none">2m ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* High Alert */}
        <div className="border-l-2 border-b border-solid border-l-gray-200 border-b-gray-200 p-3">
          <div className="flex items-start gap-3">
            <span className="bg-yellow-100 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <div className="flex-1 w-full">
              <ul className="flex items-center gap-3 list-none p-0 m-0">
                <li><span className="text-white font-medium text-[10px] leading-none inline-flex items-center justify-center bg-yellow-500 rounded h-[19px] px-1.5 uppercase">high</span></li>
                <li><span className="text-gray-500 font-medium text-[10px] leading-none inline-flex items-center justify-center h-[19px] uppercase">USR-3892</span></li>
              </ul>
              <h4 className="mt-1 text-black font-medium text-xs leading-4">High Velocity Alert</h4>
              <p className="mt-0.5 text-gray-500 font-normal text-[11px] leading-4">15 transactions in 10 minutes - €12,400 total</p>
              {assignments["USR-3892"] && (
                <p className="mt-0.5 text-blue-600 text-[10px] font-medium">👤 Assigned: {assignments["USR-3892"].name}</p>
              )}
              <div className="flex items-center justify-between">
                <ul className="mt-1.5 flex items-center gap-2 list-none p-0 m-0">
                  <li>
                    <button onClick={() => setAssignModal("USR-3892")} className="bg-gray-100 border border-solid border-gray-200 text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-1.5 cursor-pointer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                      {assignments["USR-3892"] ? "Reassign" : "Assign Agent"}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setDetailModal("USR-3892")} className="text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1 cursor-pointer bg-transparent border-none">
                      View Details
                    </button>
                  </li>
                </ul>
                <p className="text-gray-500 font-normal text-[10px] leading-none">8m ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medium Alert */}
        <div className="rounded-b-lg border-l-2 border-b border-solid border-l-gray-200 border-b-gray-200 p-3">
          <div className="flex items-start gap-3">
            <span className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <div className="flex-1 w-full">
              <ul className="flex items-center gap-3 list-none p-0 m-0">
                <li><span className="text-gray-600 font-medium text-[10px] leading-none inline-flex items-center justify-center bg-gray-200 rounded h-[19px] px-1.5 uppercase">medium</span></li>
                <li><span className="text-gray-500 font-medium text-[10px] leading-none inline-flex items-center justify-center h-[19px] uppercase">USR-7721</span></li>
              </ul>
              <h4 className="mt-1 text-black font-medium text-xs leading-4">Unusual Activity</h4>
              <p className="mt-0.5 text-gray-500 font-normal text-[11px] leading-4">First-time large transfer to high-risk jurisdiction</p>
              {assignments["USR-7721"] && (
                <p className="mt-0.5 text-blue-600 text-[10px] font-medium">👤 Assigned: {assignments["USR-7721"].name}</p>
              )}
              <div className="flex items-center justify-between">
                <ul className="mt-1.5 flex items-center gap-2 list-none p-0 m-0">
                  <li>
                    <button onClick={() => setAssignModal("USR-7721")} className="bg-gray-100 border border-solid border-gray-200 text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-1.5 cursor-pointer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                      {assignments["USR-7721"] ? "Reassign" : "Assign Agent"}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setDetailModal("USR-7721")} className="text-black font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1 cursor-pointer bg-transparent border-none">
                      View Details
                    </button>
                  </li>
                </ul>
                <p className="text-gray-500 font-normal text-[10px] leading-none">15m ago</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}