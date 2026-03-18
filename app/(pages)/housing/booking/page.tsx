"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeft, MoreVertical, RefreshCw, FileText, Key, Wallet,
  CalendarDays, TrendingUp, Download, ExternalLink, ShieldCheck,
  AlertTriangle, CreditCard, Check, FileEdit, ArrowDown, File,
  CheckCircle, XCircle, Info, Shield, Gauge, Home, Eye, PenLine,
  User, Building2, X,
} from "lucide-react";
import {
  useBookingStore,
  type EvidenceIcon,
  type ChecklistIcon,
  type ConfirmationStatus,
  type EvidenceCategory,
} from "@/app/store/zustand/Usebookingstore";


const CATEGORIES: EvidenceCategory[] = ["All", "Documents", "Keys", "Utility Meters", "Room Condition"];

const DISPUTE_REASONS = [
  "Payment not received",
  "Contract dispute",
  "Property condition",
  "Other",
] as const;


const stepIconMap: Record<string, React.ReactNode> = {
  fee_paid:        <Check      size={16} strokeWidth={2.5} />,
  contract_signed: <FileText   size={16} />,
  key_handover:    <Key        size={16} />,
  funds_released:  <CreditCard size={16} />,
};

const stepIconMapStep1: Record<string, React.ReactNode> = {
  fee_paid:        <Check    className="w-5 h-5" />,
  contract_signed: <FileEdit className="w-5 h-5" />,
  key_handover:    <Key      className="w-5 h-5" />,
  funds_released:  <Wallet   className="w-5 h-5" />,
};

const evidenceIconSmall: Record<EvidenceIcon, React.ReactNode> = {
  document: <FileText size={11} className="text-blue-1300 flex-shrink-0" />,
  key:      <Key      size={11} className="text-blue-1300 flex-shrink-0" />,
  meter:    <Gauge    size={11} className="text-blue-1300 flex-shrink-0" />,
  room:     <Home     size={11} className="text-blue-1300 flex-shrink-0" />,
};

const checklistIconMap: Record<ChecklistIcon, React.ReactNode> = {
  document: <FileText size={14} className="text-gray-1200" />,
  eye:      <Eye      size={14} className="text-gray-1200" />,
  pen:      <PenLine  size={14} className="text-gray-1200" />,
};

const statusBadge: Record<ConfirmationStatus, string> = {
  RECEIVED:  "bg-green-4100 text-white",
  DELIVERED: "bg-green-4100 text-white",
  PENDING:   "bg-green-4100 text-amber-700",
};


function StepIndicatorV1({ step, index, total }: { step: { id: string; label: string; sublabel: string; status: string }; index: number; total: number }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="relative flex items-center w-full">
        {index > 0 && (
          <div className={`absolute left-0 right-1/2 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" || step.status === "active" ? "bg-emerald-500" : "bg-gray-200"}`} />
        )}
        {index < total - 1 && (
          <div className={`absolute left-1/2 right-0 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" ? "bg-emerald-500" : "bg-gray-200"}`} />
        )}
        <div className="relative z-10 mx-auto">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            step.status === "complete" ? "bg-emerald-500 border-emerald-500 text-white"
            : step.status === "active" ? "bg-white border-emerald-500 text-emerald-500"
            : "bg-gray-7500 border-gray-7500 text-gray-400"
          }`}>
            {stepIconMapStep1[step.id]}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-sm font-semibold ${step.status === "pending" ? "text-gray-1900" : "text-blue-1300"}`}>
          {step.label}
        </p>
        <p className="text-[11px] text-gray-1900">{step.sublabel}</p>
      </div>
    </div>
  );
}

function StepIndicatorV2({ step, index, total }: { step: { id: string; label: string; sublabel: string; status: string }; index: number; total: number }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="relative flex items-center w-full">
        {index > 0 && (
          <div className={`absolute left-0 right-1/2 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" || step.status === "active" ? "bg-emerald-500" : "bg-gray-200"}`} />
        )}
        {index < total - 1 && (
          <div className={`absolute left-1/2 right-0 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" ? "bg-emerald-500" : "bg-gray-200"}`} />
        )}
        <div className="relative z-10 mx-auto">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            step.status === "complete" ? "bg-emerald-500 border-emerald-500 text-white"
            : step.status === "active"  ? "bg-[#cff1e5] border-emerald-500 text-emerald-500"
            : "bg-gray-7500 border-gray-300 text-gray-400"
          }`}>
            {stepIconMap[step.id]}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-sm font-semibold ${step.status === "complete" || step.status === "active" ? "text-emerald-500" : "text-gray-1900"}`}>
          {step.label}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">{step.sublabel}</p>
      </div>
    </div>
  );
}


function DisputeModal() {
  const { closeModal, disputeForm, disputeErrors, setDisputeField, submitDispute } = useBookingStore();
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Open Dispute</Dialog.Title>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={disputeForm.reason}
                    onChange={(e) => setDisputeField("reason", e.target.value as any)}
                    className={`w-full h-10 px-3 text-sm text-slate-700 bg-white border rounded-lg outline-none ${disputeErrors.reason ? "border-red-400" : "border-gray-1000"}`}
                  >
                    <option value="">Select a reason…</option>
                    {DISPUTE_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {disputeErrors.reason && <p className="text-xs text-red-500 mt-1">{disputeErrors.reason}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                    Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={disputeForm.details}
                    onChange={(e) => setDisputeField("details", e.target.value)}
                    placeholder="Describe the issue in detail…"
                    className={`w-full px-3 py-2.5 text-sm text-slate-700 bg-white border rounded-lg outline-none resize-none ${disputeErrors.details ? "border-red-400" : "border-gray-1000"}`}
                  />
                  {disputeErrors.details && <p className="text-xs text-red-500 mt-1">{disputeErrors.details}</p>}
                </div>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={closeModal} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">Cancel</button>
                <button onClick={submitDispute} className="px-4 h-9 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors">Submit Dispute</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function ConfirmPaymentModal() {
  const { closeModal, confirmPayment } = useBookingStore();
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Confirm Payment</Dialog.Title>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-gray-1200">Confirm that the <span className="font-semibold text-blue-1300">€299.00 booking fee</span> has been received from the student?</p>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={closeModal} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">Cancel</button>
                <button onClick={confirmPayment} className="flex items-center gap-1.5 px-4 h-9 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
                  <CreditCard size={14} /> Confirm Payment
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function RejectHandoverModal() {
  const { closeModal, rejectReason, rejectReasonError, setRejectReason, submitRejectHandover } = useBookingStore();
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Reject / Request Clarification</Dialog.Title>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                  Reason <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Describe what needs to be clarified or corrected…"
                  className={`w-full px-3 py-2.5 text-sm text-slate-700 bg-white border rounded-lg outline-none resize-none ${rejectReasonError ? "border-red-400" : "border-gray-1000"}`}
                />
                {rejectReasonError && <p className="text-xs text-red-500 mt-1">{rejectReasonError}</p>}
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={closeModal} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">Cancel</button>
                <button onClick={submitRejectHandover} className="px-4 h-9 text-sm font-semibold text-white bg-red2100 hover:bg-red-700 rounded-lg transition-colors">Submit</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function ConfirmReleaseModal() {
  const { closeModal, releaseRent } = useBookingStore();
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Confirm Release</Dialog.Title>
                <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-gray-1200">Release <span className="font-semibold text-blue-1300">€621.00</span> to <span className="font-semibold text-blue-1300">Heinrich Immobilien GmbH</span>? This action requires 2-factor authentication and cannot be undone.</p>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={closeModal} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">Cancel</button>
                <button onClick={releaseRent} className="px-4 h-9 text-sm font-semibold text-white bg-blue-1000 hover:bg-blue-700 rounded-lg transition-colors">Confirm & Release</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}


function Step1Body() {
  const { verifyContract, contractVerified } = useBookingStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Financial Split */}
      <div className="bg-cover p-4 rounded-xl border border-gray-200 bg-no-repeat bg-white font-inter">
        <div className="flex items-center justify-between pb-4 border-b border-gray-3600">
          <div className="flex items-center gap-2">
            <div className="bg-OxfordBlue2/10 rounded-lg w-8 h-8 flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-1300" />
            </div>
            <p className="font-semibold text-blue-1300 text-sm">Financial Split</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-white bg-lightgreen17 border border-lightgreen17 rounded-full px-3 py-0.5">PAID</span>
        </div>
        <div className="flex flex-col gap-5 py-6">
          <div className="flex items-center bg-gray-7500/50 p-4 rounded-lg justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-800 inline-block" />
              <span className="text-sm text-gray-700">Total Student Payment</span>
            </div>
            <span className="text-lg font-bold text-blue-1300">1.000,00 €</span>
          </div>
          <div className="flex flex-col gap-2 pl-3">
            <div className="flex items-center p-2 border-l-2 border-gray-1900/30 border-dashed justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-yellow-1100 inline-block" />
                <span className="text-sm text-gray-1900">Booking Fee</span>
                <span className="text-xs text-yellow-1100 rounded px-1.5 py-0.5">StudPay</span>
              </div>
              <span className="text-sm font-semibold text-yellow-1100">-299,00 €</span>
            </div>
            <div className="flex items-center p-2 border-l-2 border-gray-1900/30 border-dashed justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-yellow-1100 inline-block" />
                <span className="text-sm text-gray-1900">Commission</span>
                <span className="text-xs text-yellow-1100 rounded px-1.5 py-0.5">StudPay 8%</span>
              </div>
              <span className="text-sm font-semibold text-yellow-1100">-80,00 €</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-full h-[1px] bg-gray-3600 flex-1" />
            <ArrowDown className="w-4 h-4 text-gray-1900" />
            <div className="w-full h-[1px] bg-gray-3600 flex-1" />
          </div>
        </div>
        <div className="bg-lightgreen17/10 border border-lightgreen17/20 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-blue-1300">Final Payout to Landlord</span>
          </div>
          <span className="md:text-xl text-base block font-bold text-lightgreen17">621,00 €</span>
        </div>
        <p className="text-xs text-gray-1900 text-center mt-6">1.000,00 € - 299,00 € - 80,00 € = 621,00 €</p>
      </div>

      {/* Rental Agreement */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-OxfordBlue2/10 rounded-lg w-8 h-8 flex items-center justify-center">
              <File className="w-4 h-4 text-blue-1300" />
            </div>
            <div>
              <p className="font-semibold text-blue-1300 text-sm">Rental Agreement</p>
              <span className="text-xs leading-4 text-gray-1900 block">Signed Jan 18, 2024</span>
            </div>
          </div>
          {contractVerified ? (
            <span className="flex items-center gap-1 text-xs font-semibold text-lightgreen17 bg-lightgreen17/10 rounded-full px-3 py-1">
              <CheckCircle className="w-3 h-3" /> verified
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-semibold text-brown1300 bg-yellow-3000 rounded-full px-3 py-1">Pending</span>
          )}
        </div>
        <div className="border border-gray-200 rounded-lg p-5 flex flex-col gap-4">
          <div className="text-center border-b border-gray-100 pb-3">
            <p className="font-bold text-blue-1300 text-lg tracking-wide uppercase">Rental Agreement</p>
            <p className="text-xs text-gray-400 mt-0.5">Rental_Agreement_BK-2024-00847.pdf</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Tenant:",       value: "Maria Schmidt"          },
              { label: "Landlord:",     value: "Hans Müller"            },
              { label: "Property:",     value: "Apt 4B, Hauptstraße 23" },
              { label: "Monthly Rent:", value: "€800.00"                },
              { label: "Lease Period:", value: "12 months"              },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-sm text-gray-1900">{label}</span>
                <span className="text-sm text-blue-1300">{value}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-b pb-6 border-gray-100 pt-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 italic">Maria Schmidt</span>
              <div className="w-full border-b border-gray-300 border-dashed" />
              <span className="text-[10px] text-gray-400">Tenant Signature</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 italic">Hans Müller</span>
              <div className="w-full border-b border-gray-300 border-dashed" />
              <span className="text-[10px] text-gray-400">Landlord Signature</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-1">
            <button className="flex items-center gap-1.5 text-xs py-2 px-3 text-gray-1900 hover:text-gray-800 transition-colors">
              <Download className="w-3.5 h-3.5" /> Download
            </button>
            <button className="flex items-center gap-1.5 text-xs py-2 px-3 text-gray-1900 hover:text-gray-800 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Full View
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <button
            onClick={verifyContract}
            disabled={contractVerified}
            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-normal py-2.5 px-4 rounded-lg transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            {contractVerified ? "Signature Verified" : "Verify Signature"}
          </button>
          <button className="flex items-center justify-center bg-gray-1500 gap-2 border border-gray-200 hover:bg-gray-50 text-blue-1300 text-sm font-normal py-2.5 px-4 rounded-lg transition-colors">
            <Info className="w-4 h-4" /> Request Correction
          </button>
        </div>
      </div>
    </div>
  );
}


function Step2Body() {
  const {
    activeEvidenceCategory, setEvidenceCategory,
    checklist, toggleChecklist,
    confirmations,
    handoverApproved, handoverRejected, handoverActionLoading,
    approveHandover, openModal,
    filteredEvidence, checkedCount, allChecked,
  } = useBookingStore();

  const filtered = filteredEvidence();
  const checked  = checkedCount();

  return (
    <div className="flex xl:flex-nowrap flex-wrap gap-5">
      {/* Left — Visual Evidence */}
      <div className="xl:flex-1 xl:min-w-0 xl:w-auto w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-blue-1300">Visual Evidence</h2>
          <span className="text-xs bg-[#FEF3E2] text-gray-1200 px-2.5 py-1 rounded-full font-medium">
            {filtered.length} items uploaded
          </span>
        </div>
        <div className="flex gap-2 flex-wrap mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setEvidenceCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                activeEvidenceCategory === cat ? "bg-blue-1000 text-white" : "bg-grey5500 text-blue-1300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-3">
          {filtered.map((item) => (
            <div key={item.id} className="group cursor-pointer rounded-lg overflow-hidden border border-gray-1000 bg-white hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center relative">
                <img src="/images/card-img1.png" className="w-full" alt="" />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {evidenceIconSmall[item.icon]}
                  <p className="text-xs font-medium text-blue-1300 truncate">{item.title}</p>
                </div>
                <p className="text-[10px] text-gray-1200">{item.date} • {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="4xl:w-[394px] 2xl:w-[335px] xl:w-[310px] w-full xl:flex-shrink-0 flex flex-col gap-4">
        {/* Checklist */}
        <div className="bg-white border border-gray-1000 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-blue-1300">Verification Checklist</h3>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              checked === checklist.length ? "bg-yellow-3100 text-brown-1400" : "bg-amber-50 text-amber-500"
            }`}>
              {checked}/{checklist.length}
            </span>
          </div>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className="flex items-center gap-3 bg-grey5500 rounded-lg cursor-pointer group p-3"
              >
                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                  item.checked ? "bg-emerald-500 border-emerald-500" : "border-gray-1200 group-hover:border-emerald-400"
                }`}>
                  {item.checked && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-xs flex-1 transition-colors ${item.checked ? "text-gray-400 line-through" : "text-blue-1300"}`}>
                  {item.label}
                </span>
                {checklistIconMap[item.icon]}
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Status */}
        <div className="bg-white border border-gray-1000 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-blue-1300 mb-4">Confirmation Status</h3>
          <div className="space-y-3">
            {confirmations.map((conf) => (
              <div key={conf.id} className="flex items-center bg-green-4000/50 rounded-lg p-3 gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-green-4100/10 text-green-4100">
                  {conf.role === "student" ? <User size={14} /> : <Building2 size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-blue-1300">{conf.name}</p>
                  <p className="text-[10px] text-gray-1200">{conf.person} • {conf.date}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0 ${statusBadge[conf.status]}`}>
                  {conf.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Actions */}
        <div className="bg-white border border-gray-1000 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-blue-1300 mb-4">Admin Actions</h3>
          {!allChecked() && !handoverApproved && !handoverRejected && (
            <p className="text-xs text-amber-500 mb-3">Complete the verification checklist before approving.</p>
          )}
          <div className="space-y-3">
            {handoverApproved ? (
              <div className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-600 border border-emerald-200 text-sm font-semibold py-3 px-4 rounded-xl">
                <CheckCircle size={16} /> Handover Approved
              </div>
            ) : handoverRejected ? (
              <div className="w-full flex items-center justify-center gap-2 bg-red-50 text-red2100 border border-red2100/20 text-sm font-semibold py-3 px-4 rounded-xl">
                <XCircle size={16} /> Clarification Requested
              </div>
            ) : (
              <>
                <button
                  onClick={approveHandover}
                  disabled={handoverActionLoading !== null || !allChecked()}
                  className="w-full flex items-center justify-center gap-2 bg-green-4100 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <CheckCircle size={16} />
                  {handoverActionLoading === "approve" ? "Processing..." : "Approve Handover"}
                </button>
                <button
                  onClick={() => openModal("reject_handover")}
                  disabled={handoverActionLoading !== null}
                  className="w-full flex items-center justify-center gap-2 bg-gray-1800 hover:bg-red-50 disabled:opacity-60 text-red2100 border border-red2100/30 hover:border-red-300 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <XCircle size={16} />
                  {handoverActionLoading === "reject" ? "Processing..." : "Reject / Request Clarification"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


function PaymentLine({ label, amount, variant = "default" }: { label: string; amount: string; variant?: "default" | "deduction" }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className={variant === "deduction" ? "text-sm font-medium text-red-1000" : "text-sm font-medium text-black13/80"}>{label}</span>
      <span className={variant === "deduction" ? "text-sm font-semibold text-red-1000" : "text-sm font-semibold text-gray-900"}>{amount}</span>
    </div>
  );
}

function BeneficiaryField({ label, value, fullWidth = false }: { label: string; value: string; fullWidth?: boolean }) {
  return (
    <div className={fullWidth ? "col-span-2" : "col-span-1"}>
      <p className="text-xs font-medium uppercase tracking-widest text-gray-1400 mb-1">{label}</p>
      {fullWidth ? (
        <div className="rounded border border-gray1600 bg-gray1700/30 px-4 py-3">
          <p className="text-sm font-medium text-black13 tracking-wide">{value}</p>
        </div>
      ) : (
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      )}
    </div>
  );
}

function Step3Body() {
  const { fundsReleaseLoading, fundsReleased, releaseRent } = useBookingStore();

  return (
    <div className="flex items-start justify-center pt-6">
      <div className="w-full">
        <div className="mb-6">
          <h1 className="text-[30px] font-medium text-black13 tracking-tight">Funds Release &amp; Settlement</h1>
          <p className="mt-1 text-sm text-gray-1400">Review final payment details and authorize transfer to landlord.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="bg-white rounded-xl mb-6 shadow-52xl pb-6 overflow-hidden">
              <div className="flex items-center gap-2 p-6 border-b border-gray1600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 10.835C16.6667 15.0017 13.75 17.085 10.2834 18.2933C10.1018 18.3549 9.90466 18.3519 9.72504 18.285C6.25004 17.085 3.33337 15.0017 3.33337 10.835V5.00168C3.33337 4.78066 3.42117 4.5687 3.57745 4.41242C3.73373 4.25614 3.94569 4.16834 4.16671 4.16834C5.83337 4.16834 7.91671 3.16834 9.36671 1.90168C9.54325 1.75084 9.76784 1.66797 10 1.66797C10.2322 1.66797 10.4568 1.75084 10.6334 1.90168C12.0917 3.17668 14.1667 4.16834 15.8334 4.16834C16.0544 4.16834 16.2663 4.25614 16.4226 4.41242C16.5789 4.5687 16.6667 4.78066 16.6667 5.00168V10.835Z" stroke="#2FA26A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-lg font-medium text-black13">Payment Breakdown</h2>
              </div>
              <div className="px-6 pt-2 pb-4 mb-4 border-b border-gray1600">
                <PaymentLine label="Total Student Payment"    amount="€1,000.00" />
                <PaymentLine label="Less: Booking Fee"        amount="- €293.00" variant="deduction" />
                <PaymentLine label="Less: StudPay Commission" amount="- €86.00"  variant="deduction" />
              </div>
              <div className="mx-6 rounded-xl bg-green-4200/5 border border-green-4200/10 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-normal uppercase tracking-widest text-green-4200 mb-0.5">Final Payout</p>
                  <p className="text-xs text-gray-1400">To Landlord Account</p>
                </div>
                <p className="text-[28px] font-medium text-green-4200 tracking-tight">€621.00</p>
              </div>
            </div>
            <div className="bg-gray1700/50 border border-gray1700 rounded-xl p-4 flex items-start gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 10.835C16.6667 15.0017 13.75 17.085 10.2834 18.2933C10.1018 18.3549 9.90466 18.3519 9.72504 18.285C6.25004 17.085 3.33337 15.0017 3.33337 10.835V5.00168C3.33337 4.78066 3.42117 4.5687 3.57745 4.41242C3.73373 4.25614 3.94569 4.16834 4.16671 4.16834C5.83337 4.16834 7.91671 3.16834 9.36671 1.90168C9.54325 1.75084 9.76784 1.66797 10 1.66797C10.2322 1.66797 10.4568 1.75084 10.6334 1.90168C12.0917 3.17668 14.1667 4.16834 15.8334 4.16834C16.0544 4.16834 16.2663 4.25614 16.4226 4.41242C16.5789 4.5687 16.6667 4.78066 16.6667 5.00168V10.835Z" stroke="#2FA26A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm font-normal leading-5 text-blue-1200 max-w-[420px]">
                This transaction is protected by StudPay Secure Settlement. Funds are released instantly upon authorization.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl mb-6 shadow-52xl pb-6 overflow-hidden">
            <div className="flex items-center gap-2 p-6 border-b border-gray1600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 18.3346V3.33464C5 2.89261 5.17559 2.46868 5.48816 2.15612C5.80072 1.84356 6.22464 1.66797 6.66667 1.66797H13.3333C13.7754 1.66797 14.1993 1.84356 14.5118 2.15612C14.8244 2.46868 15 2.89261 15 3.33464V18.3346H5Z" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.99996 10H3.33329C2.89127 10 2.46734 10.1756 2.15478 10.4882C1.84222 10.8007 1.66663 11.2246 1.66663 11.6667V16.6667C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H4.99996" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33337 5H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33337 8.33203H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33337 11.668H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33337 15H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-lg font-medium text-black13">Beneficiary Details</h2>
            </div>
            <div className="px-6 py-5 grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="col-span-2">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-1400 mb-1">Account Holder Name</p>
                <p className="text-base font-normal text-black13">Heinrich Immobilien GmbH</p>
              </div>
              <BeneficiaryField label="Bank Name"   value="Deutsche Bank"                  />
              <BeneficiaryField label="BIC / SWIFT" value="DEUTDEFF"                      />
              <BeneficiaryField label="IBAN"         value="DE89 3704 0044 0532 0130 00" fullWidth />
            </div>
            <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
              <button
                onClick={releaseRent}
                disabled={fundsReleaseLoading || fundsReleased}
                className={`w-full rounded-xl py-3.5 text-base font-normal tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
                  fundsReleased     ? "bg-emerald-500 text-white cursor-default"
                  : fundsReleaseLoading ? "bg-blue-400 text-white cursor-wait"
                  : "bg-blue-1000 hover:bg-blue-700 active:scale-[0.99] text-white"
                }`}
              >
                {fundsReleased ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Funds Released Successfully
                  </span>
                ) : fundsReleaseLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Release Rent to Landlord"
                )}
              </button>
              <p className="text-center text-[11px] text-gray-1400">Action requires 2-factor authentication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function BookingPage() {
  const {
    currentPage, steps,
    activeModal, openModal, closeModal,
    paymentConfirmed, disputeSubmitted,
  } = useBookingStore();

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">

      {/* Top navbar */}
      <div className="bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0 xl:pl-72 lg:pl-62.5">
        <div className="flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000">
          <div className="flex-1 md:block hidden">
            <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">Housing Master Dashboard</h1>
            <p className="text-sm text-slate-500 mt-0.5">Manage listings, track bookings, and monitor campaign performance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white rounded-lg px-3 py-2">
              <CalendarDays size={13} className="text-slate-400" />
              Last updated: Today, 14:32 IST
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm hover:bg-slate-50 transition-colors">
              <RefreshCw size={13} /> Refresh
            </button>
          </div>
        </div>
      </div>

      <main className="md:px-4 md:py-6 flex flex-col gap-6">

        {/* Booking header */}
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-6">
            <Link href="/housing" className="text-gray-400 mt-2 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-4 h-4 text-blue-1300" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-blue-1300">Maria Schmidt</h2>
                <span className="text-xs font-bold text-white bg-lightgreen17 border border-emerald-200 rounded-full px-2.5 py-0.5">Active</span>
              </div>
              <p className="text-base text-gray-1900">Apt 4B, Hauptstraße 23, 10115 Berlin</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-gray-1900">#BK-2024-00847</span>
                <span className="w-1 h-1 my-1 rounded-full bg-gray-1900 inline-block" />
                <span className="text-xs text-gray-1900">Created Jan 15, 2024</span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar — V1 style on page 1, V2 style on pages 2 & 3 */}
        <div className="bg-white rounded-lg border border-gray-3600 md:p-6 p-2">
          <p className="text-sm font-semibold text-gray-700 mb-5">Booking Progress</p>
          <div className="flex items-start">
            {steps.map((step, i) =>
              currentPage === 1
                ? <StepIndicatorV1 key={step.id} step={step} index={i} total={steps.length} />
                : <StepIndicatorV2 key={step.id} step={step} index={i} total={steps.length} />
            )}
          </div>
        </div>

        {/* Step body */}
        {currentPage === 1 && <Step1Body />}
        {currentPage === 2 && <Step2Body />}
        {currentPage === 3 && <Step3Body />}

      </main>

      {/* Footer — only on page 1 */}
      {currentPage === 1 && (
        <footer className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3">
          <div className="max-w-5xl mx-auto flex items-center flex-wrap gap-5 justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-1900">
              <Shield className="w-3.5 h-3.5" />
              All transactions are secured and logged
            </div>
            <div className="flex items-center flex-wrap gap-3">
              {disputeSubmitted ? (
                <span className="flex items-center gap-1.5 text-sm text-red-500 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5" /> Dispute submitted
                </span>
              ) : (
                <button
                  onClick={() => openModal("dispute")}
                  className="flex items-center gap-1.5 border border-red-200 bg-gray-1500 text-red-500 hover:bg-red-50 text-sm font-normal py-2 px-4 rounded-lg transition-colors"
                >
                  <AlertTriangle className="w-3.5 h-3.5" /> Open Dispute
                </button>
              )}
              {paymentConfirmed ? (
                <span className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium border border-emerald-200 bg-emerald-50 py-2 px-4 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5" /> Payment Confirmed
                </span>
              ) : (
                <button
                  onClick={() => openModal("confirm_payment")}
                  className="flex items-center gap-1.5 border border-emerald-200 bg-gray-1500 text-emerald-600 hover:bg-emerald-50 text-sm font-normal py-2 px-4 rounded-lg transition-colors"
                >
                  <CreditCard className="w-3.5 h-3.5" /> Confirm 299,00 € Payment
                </button>
              )}
              <button className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-normal py-2 px-4 rounded-lg transition-colors">
                <img src="/images/rent-icon.svg" alt="" /> Release Rent to Landlord
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* All modals */}
      {activeModal === "dispute"          && <DisputeModal />}
      {activeModal === "confirm_payment"  && <ConfirmPaymentModal />}
      {activeModal === "reject_handover"  && <RejectHandoverModal />}
    </div>
  );
}