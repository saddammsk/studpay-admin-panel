"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import { AlertTriangle, CreditCard, Globe, FileText, Activity, Smartphone } from "lucide-react";
import { useRiskFraudStore } from "@/app/store/zustand/useRiskFraudStore";

const categoryConfig: Record<string, { icon: React.ReactNode; style: string }> = {
  "Identity Theft":    { icon: <AlertTriangle size={14} />, style: "bg-red-1300/10 text-red-1300 border border-red-1300/20"          },
  "Payment Bounce":    { icon: <CreditCard    size={14} />, style: "bg-yellow-1100/10 text-yellow-1100 border border-yellow-1100/20" },
  "Multiple IPs":      { icon: <Globe        size={14} />, style: "bg-blue1400/10 text-blue1400 border border-blue1400/20"           },
  "Document Fraud":    { icon: <FileText      size={14} />, style: "bg-red-50 text-red-600 border border-red-200"                    },
  "Suspicious Activity":{ icon: <Activity    size={14} />, style: "bg-yellow-50 text-yellow-600 border border-yellow-200"           },
  "Device Fraud":      { icon: <Smartphone   size={14} />, style: "bg-red-1300/10 text-red-1300 border border-red-1300/20"          },
};

const riskColors = {
  "High Risk":   "bg-red-1300/10 text-red-1300 border border-red-1300/20",
  "Medium Risk": "bg-yellow-1100/10 text-yellow-1100 border border-yellow-1100/20",
  "Low Risk":    "bg-green-1600/20 text-green-1600 border border-green-1600/10",
};

const statusColors = {
  Critical:   "text-red-1300",
  Suspicious: "text-yellow-1100",
  Pending:    "text-gray-1900",
  Cleared:    "text-green-1600",
};

export default function AlertsTable() {
  const {
    filteredAlerts,
    selectedAlert,
    isModalOpen,
    openModal,
    closeModal,
    freezeAccount,
    clearAlert,
    escalateAlert,
  } = useRiskFraudStore();

  const alerts = filteredAlerts();

  return (
    <>
      <div className="bg-white rounded-xl mt-3 border border-gray-3600 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-6100/50 border-gray-3600 text-blue-1300">
            <tr>
              <th className="px-4 font-semibold py-3 text-left">Alert ID</th>
              <th className="px-4 font-semibold py-3 text-left">User</th>
              <th className="px-4 font-semibold py-3 text-left">Risk Category</th>
              <th className="px-4 font-semibold py-3 text-left">Risk Score</th>
              <th className="px-4 font-semibold py-3 text-left">Detected On</th>
              <th className="px-4 font-semibold py-3 text-left">Status</th>
              <th className="px-4 font-semibold py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-1900 text-sm">
                  No alerts match your search.
                </td>
              </tr>
            ) : (
              alerts.map((alert) => (
                <tr
                  key={alert.id}
                  className={`border-t border-gray-3600 ${
                    alert.riskLevel === "High Risk" ? "bg-red-1300/5" : "bg-yellow-1100/5"
                  } hover:bg-gray-50 transition`}
                >
                  <td className="px-4 py-4 font-medium text-gray-1900">{alert.id}</td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-6100 flex items-center justify-center text-xs font-medium text-blue-1300">
                        {alert.initials}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-blue-1300">{alert.name}</p>
                        <p className="text-xs text-gray-1900">{alert.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ${categoryConfig[alert.category]?.style}`}>
                      {categoryConfig[alert.category]?.icon}
                      {alert.category}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs rounded-md ${riskColors[alert.riskLevel]}`}>
                      {alert.riskScore} {alert.riskLevel}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="text-blue-1300 text-sm font-medium leading-5">{alert.date}</div>
                    <div className="text-xs font-normal leading-4 text-gray-1900">{alert.time}</div>
                  </td>

                  <td className="px-4 py-4">
                    <span className={`flex items-center gap-2 ${statusColors[alert.status]}`}>
                      <span className="h-2.5 w-2.5 rounded-full bg-current"></span>
                      {alert.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <button
                      onClick={() => openModal(alert)}
                      className="px-3 py-1.5 text-sm flex items-center text-blue-1300 bg-blue-1300/5 gap-1.5 border rounded-md border-blue-1300/20 transition"
                    >
                      Take Action <img src="/images/dots-icon.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        panelClassName="max-w-[384px] border-0 rounded-lg! bg-white relative"
      >
        <div className="bg-blue-1300/10 rounded-t-xl flex items-center gap-3 px-5 py-4">
          <span className="bg-red-1300/20 rounded-full w-10 h-10 flex items-center justify-center">
            <Image src="/images/warning.svg" width={20} height={20} alt="" />
          </span>
          <div>
            <h4 className="text-blue-1300 font-inter font-semibold text-lg leading-7">Take Action</h4>
            <p className="text-gray-1900 font-inter font-normal text-sm leading-5">
              Alert ID: {selectedAlert?.id ?? "—"}
            </p>
          </div>
        </div>

        <div className="px-2 py-2">
          <div className="border-b border-solid border-gray-3600 pb-1">
            <Link
              href="/risk_fraud"
              className="text-blue-1300 px-4 py-3 rounded-lg hover:bg-gray-6100 text-sm leading-5 font-medium flex items-center gap-3"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/view-eyes.svg" width={20} height={20} alt="" />
              </span>
              View Details
            </Link>
          </div>

          <div className="border-b border-solid border-gray-3600 py-1">
            <button
              onClick={() => selectedAlert && freezeAccount(selectedAlert.id)}
              className="w-full flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-red-1300/10 mb-1"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/Freeze-ac-icon.svg" width={20} height={20} alt="" />
              </span>
              <div className="text-left">
                <h4 className="text-red-1300 font-inter font-medium text-sm leading-5">Freeze Account</h4>
                <p className="text-gray-19 font-inter font-normal text-xs leading-4 mt-px">Temporarily suspend all activity</p>
              </div>
            </button>

            <button
              onClick={() => selectedAlert && clearAlert(selectedAlert.id)}
              className="w-full flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-green-1600/10 mb-1"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/check-dark.svg" width={20} height={20} alt="" />
              </span>
              <div className="text-left">
                <h4 className="text-green-1600 font-inter font-medium text-sm leading-5">Clear Alert</h4>
                <p className="text-gray-19 font-inter font-normal text-xs leading-4 mt-px">Mark as false positive</p>
              </div>
            </button>

            <button
              onClick={closeModal}
              className="w-full flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-blue-1300/10"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/video-icon.svg" width={20} height={20} alt="" className="brightness-0" />
              </span>
              <div className="text-left">
                <h4 className="text-blue-1300 font-inter font-medium text-sm leading-5">Request Video KYC</h4>
                <p className="text-gray-19 font-inter font-normal text-xs leading-4 mt-px">Initiate identity verification</p>
              </div>
            </button>
          </div>

          <div className="py-1">
            <button
              onClick={closeModal}
              className="w-full flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-gray-6100/10 mb-1"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/contact-icon.svg" width={20} height={20} alt="" />
              </span>
              <div className="text-left">
                <h4 className="text-blue-1300 font-inter font-medium text-sm leading-5">Contact User</h4>
              </div>
            </button>

            <button
              onClick={() => selectedAlert && escalateAlert(selectedAlert.id)}
              className="w-full flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-yellow-1100/10"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Image src="/icons/flag-icon.svg" width={20} height={20} alt="" />
              </span>
              <div className="text-left">
                <h4 className="text-yellow-1100 font-inter font-medium text-sm leading-5">Escalate</h4>
                <p className="text-gray-19 font-inter font-normal text-xs leading-4 mt-px">Send to senior review</p>
              </div>
            </button>
          </div>

          <div className="border-t border-solid border-gray-3600 py-3 px-4 bg-gray-6100/30">
            <button
              onClick={closeModal}
              className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-medium text-sm leading-5 bg-white-1100 border-solid border-gray-3600 h-9 flex items-center justify-center"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}