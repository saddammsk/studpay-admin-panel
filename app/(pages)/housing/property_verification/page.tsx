"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  Calendar,
  Star,
  MapPin,
  Wifi,
  RefreshCw,
  CalendarDays,
  Car,
  Sofa,
  Ban,
  PawPrint,
  Users,
  ExternalLink,
  GraduationCap,
  Shield,
  File,
  CheckCircle2,
  XCircle,
  X,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePropertyVerificationStore } from "@/app/store/zustand/Usepropertyverificationstore";
import PropertyActionBar from "@/app/components/PropertyActionBar";

const images = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
];

const amenities = [
  { icon: Wifi,  label: "Wifi Included" },
  { icon: Car,   label: "Parking"       },
  { icon: Sofa,  label: "Furnished"     },
];

const houseRules = [
  { icon: Ban,      label: "No smoking"       },
  { icon: PawPrint, label: "No pets allowed"  },
  { icon: Users,    label: "Max 2 occupants"  },
];

const REJECT_REASONS = [
  "Incomplete documentation",
  "Suspicious activity",
  "Does not meet safety standards",
  "Fraudulent documents",
  "Other",
];

function ConfirmDocModal({
  type,
  docName,
  onConfirm,
  onClose,
}: {
  type: "verify_doc" | "invalidate_doc";
  docName: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const isVerify = type === "verify_doc";
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">
                  {isVerify ? "Verify Document" : "Mark as Invalid"}
                </Dialog.Title>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-gray-1200">
                  {isVerify
                    ? `Are you sure you want to mark "${docName}" as verified?`
                    : `Are you sure you want to mark "${docName}" as invalid? The landlord will be notified.`}
                </p>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={onClose} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className={`px-4 h-9 text-sm font-semibold text-white rounded-lg transition-colors ${isVerify ? "bg-green-1600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                >
                  {isVerify ? "Yes, Verify" : "Yes, Mark Invalid"}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function ApproveModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Approve Listing</Dialog.Title>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-gray-1200">
                  This will make the property live on the platform. The landlord will be notified immediately.
                </p>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={onClose} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">
                  Cancel
                </button>
                <button onClick={onConfirm} className="px-4 h-9 text-sm font-semibold text-white bg-green-1600 hover:bg-green-700 rounded-lg transition-colors">
                  Approve Listing
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function RejectModal({ onClose }: { onClose: () => void }) {
  const { rejectForm, rejectErrors, setRejectField, submitReject } = usePropertyVerificationStore();

  const handleSubmit = () => { submitReject(); };

  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Reject Listing</Dialog.Title>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={rejectForm.reason}
                    onChange={(e) => setRejectField("reason", e.target.value)}
                    className={`w-full h-10 px-3 text-sm text-slate-700 bg-white border rounded-lg outline-none transition-colors ${rejectErrors.reason ? "border-red-400" : "border-gray-1000"} focus:border-blue-3000`}
                  >
                    <option value="">Select a reason…</option>
                    {REJECT_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {rejectErrors.reason && <p className="text-xs text-red-500 mt-1">{rejectErrors.reason}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                    Additional Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={rejectForm.details}
                    onChange={(e) => setRejectField("details", e.target.value)}
                    placeholder="Provide details that will be shared with the landlord…"
                    className={`w-full px-3 py-2.5 text-sm text-slate-700 bg-white border rounded-lg outline-none resize-none transition-colors ${rejectErrors.details ? "border-red-400" : "border-gray-1000"} focus:border-blue-3000`}
                  />
                  {rejectErrors.details && <p className="text-xs text-red-500 mt-1">{rejectErrors.details}</p>}
                </div>
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={onClose} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="px-4 h-9 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                  Reject Listing
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function RequestInfoModal({ onClose }: { onClose: () => void }) {
  const { requestInfoForm, requestInfoErrors, setRequestInfoField, submitRequestInfo } = usePropertyVerificationStore();

  const handleSubmit = () => { submitRequestInfo(); };

  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <Dialog.Title className="text-base font-bold text-blue-1300">Request Additional Info</Dialog.Title>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors">
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5">
                <label className="block text-xs font-semibold text-blue-1300 uppercase tracking-wide mb-1.5">
                  Message to Landlord <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={requestInfoForm.message}
                  onChange={(e) => setRequestInfoField("message", e.target.value)}
                  placeholder="Describe what additional information or documents are required…"
                  className={`w-full px-3 py-2.5 text-sm text-slate-700 bg-white border rounded-lg outline-none resize-none transition-colors ${requestInfoErrors.message ? "border-red-400" : "border-gray-1000"} focus:border-blue-3000`}
                />
                {requestInfoErrors.message && <p className="text-xs text-red-500 mt-1">{requestInfoErrors.message}</p>}
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600/30 border-t border-gray-1000">
                <button onClick={onClose} className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="flex items-center gap-1.5 px-4 h-9 text-sm font-semibold text-white bg-blue-3000 hover:bg-blue-700 rounded-lg transition-colors">
                  <MessageSquare size={14} /> Send Request
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function DocRow({ name, status }: { name: string; status: string }) {
  const { openModal } = usePropertyVerificationStore();
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-1600/30 2xl:flex-nowrap flex-wrap gap-4 mb-3 border border-gray-1000">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-yellow-3000 flex items-center justify-center flex-shrink-0 mt-0.5">
          <File size={20} className="text-green-1600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{name}</p>
          <button className="flex items-center gap-1 text-xs text-blue-3000 hover:text-blue-700 mt-0.5 transition-colors">
            View Document <ExternalLink size={10} />
          </button>
        </div>
      </div>
      {status === "verified" && (
        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-green-1600 text-white">
          Verified
        </span>
      )}
      {status === "invalid" && (
        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-red-600 text-white">
          Invalid
        </span>
      )}
      {status === "pending" && (
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300">Pending</span>
          <button
            onClick={() => openModal("verify_doc", name)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-1600 text-xs font-semibold text-green-1600 hover:bg-slate-50 transition-colors"
          >
            <img src="/images/verify-icon.svg" alt="" />
            Verify
          </button>
          <button
            onClick={() => openModal("invalidate_doc", name)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
          >
            <img src="/images/file-cross.svg" alt="" />
            Invalid
          </button>
        </div>
      )}
    </div>
  );
}

export default function PropertyVerification() {
  const {
    currentImage,
    prevImage,
    nextImage,
    documents,
    history,
    activeModal,
    pendingDocName,
    closeModal,
    confirmVerifyDoc,
    confirmInvalidateDoc,
    submitApprove,
    verifiedCount,
  } = usePropertyVerificationStore();

  const total = documents.length;
  const verified = verifiedCount();

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-53px] xl:-m-8 -m-4 font-inter">
      <div className="bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0 xl:pl-72 lg:pl-62.5">
        <div className="flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000">
          <div className="flex-1 md:block hidden">
            <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">
              Housing Master Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Manage listings, track bookings, and monitor campaign performance
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white rounded-lg px-3 py-2">
              <CalendarDays size={13} className="text-slate-400" />
              Last updated: Today, 14:32 IST
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm hover:bg-slate-50 transition-colors">
              <RefreshCw size={13} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 md:px-8 px-4">
        <div className="flex items-start gap-3 mb-6">
          <Link href="/housing" className="mt-1 w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0">
            <ArrowLeft size={15} className="text-slate-600" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold text-blue-1300 tracking-tight">
                Property Verification
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300 border border-gray-1600">
                <Clock size={11} />
                Pending Review
              </span>
            </div>
            <p className="text-base text-gray-1200 mt-0.5">
              Alexanderstraße 45, Berlin • Submitted Jan 25, 2026
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-5">
          <div className="space-y-5">
            {/* Property Images */}
            <div className="bg-white rounded-xl 4xl:px-16 md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold text-blue-1300">Property Images</p>
                <span className="text-xs text-blue-1300 font-medium border border-gray-1000 rounded-full py-0.5 px-2.5">{images.length} Photos</span>
              </div>
              <div className="relative">
                <img
                  src={images[currentImage]}
                  alt="Property"
                  className="w-full h-[260px] rounded-lg md:h-[340px] object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-1500 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ArrowLeft size={16} className="text-slate-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-1500 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ArrowRight size={16} className="text-slate-700" />
                </button>
                <button className="absolute cursor-pointer top-3 right-3 w-8 h-8 rounded-md bg-gray-1500/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors">
                  <img src="/images/expand-icon2.svg" alt="" />
                </button>
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-gray-1500/80 backdrop-blur-sm text-blue-1300 text-xs font-semibold mono">
                  {currentImage + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl 4xl:px-16 md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-blue-500" />
                <p className="text-lg leading-7 font-semibold text-blue-1300">Location Verification</p>
              </div>
              <div className="relative bg-slate-100 overflow-hidden">
                <img src="/images/map.png" alt="Map" className="w-full rounded-lg h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-3000 text-white text-sm font-semibold shadow-lg">
                    📍 Alexanderplatz, Berlin
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                <p className="text-sm text-gray-1200">Alexanderstraße 45, 10178 Berlin, Germany</p>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
              <div className="flex items-center mb-3 gap-2">
                <Building2 size={15} className="text-blue-3000" />
                <p className="text-lg font-semibold text-blue-1300">Property Details</p>
              </div>
              <div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-gray-1600/50">
                    <p className="text-xs font-semibold text-gray-1200 uppercase tracking-wide mb-1">Monthly Rent</p>
                    <p className="text-2xl font-bold text-blue-1300">€850</p>
                    <p className="text-xs text-gray-1200 mt-0.5">+ €150 utilities</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-1600/50">
                    <p className="text-xs font-semibold text-gray-1200 uppercase tracking-wide mb-1">Size</p>
                    <p className="text-2xl font-bold text-blue-1300">45 m<sup className="text-sm">2</sup></p>
                    <p className="text-xs text-gray-1200 mt-0.5">1 Bedroom</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-bold text-blue-1300 mb-2.5">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map(({ icon: Icon, label }) => (
                      <span key={label} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-gray-1600 text-xs font-medium text-blue-1300">
                        <Icon size={12} className="text-slate-500" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-bold text-slate-800 mb-2.5">House Rules</p>
                  <div className="space-y-2">
                    {houseRules.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2">
                        <Icon size={14} className="text-red-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 gap-2">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs text-slate-400">Available From</p>
                    <p className="text-sm font-semibold text-slate-700">March 1, 2026</p>
                  </div>
                  <div className="sm:text-right flex items-center justify-between">
                    <p className="text-xs text-slate-400">Minimum Stay</p>
                    <p className="text-sm font-semibold text-slate-700">6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* Landlord Profile */}
            <div className="bg-white rounded-xl md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 pb-3">
                <User size={15} className="text-blue-500" />
                <p className="text-lg font-semibold text-slate-800">Landlord Profile</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    MK
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">Marcus Keller</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[1, 2, 3, 4].map((s) => (
                        <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                      <Star size={12} className="text-slate-200 fill-slate-200" />
                      <span className="text-xs text-slate-500 ml-1">4.2 (28 reviews)</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 px-2.5 border border-gray-1000 rounded-full py-0.5 text-xs text-blue-1300">
                        <Building2 size={11} /> 12 Properties
                      </span>
                      <span className="flex items-center gap-1 px-2.5 border border-gray-1000 rounded-full py-0.5 text-xs text-blue-1300">
                        <Calendar size={11} /> Since 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Mail size={13} className="text-slate-400 flex-shrink-0" />
                    <a href="mailto:m.keller@immobilien-berlin.de" className="text-sm text-slate-700">m.keller@immobilien-berlin.de</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={13} className="text-slate-400 flex-shrink-0" />
                    <span className="text-sm text-slate-700">+49 30 1234 5678</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Verification */}
            <div className="bg-white rounded-xl border md:p-6 p-3 border-gray-1000 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <Shield size={15} className="text-blue-500" />
                  <p className="text-lg font-semibold text-slate-800">Document Verification</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300">
                  {verified}/{total} Verified
                </span>
              </div>
              <div>
                {documents.map((doc) => (
                  <DocRow key={doc.name} name={doc.name} status={doc.status} />
                ))}
              </div>
            </div>

            {/* Campaign Source */}
            <div className="bg-yellow-3000 rounded-xl md:p-6 p-3 border border-amber-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 pb-5">
                <GraduationCap size={15} className="text-brown-1300" />
                <p className="text-lg font-bold text-brown-1300">Campaign Source</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">TU Berlin Partnership</p>
                    <p className="text-sm text-slate-500">University Housing Program 2026</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-sm text-slate-400 mb-0.5">Campaign ID</p>
                    <p className="text-sm font-semibold text-slate-800 mono">TUB-2026-Q1-045</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-sm text-slate-400 mb-0.5">Joined Via</p>
                    <p className="text-sm font-semibold text-slate-800">Partner Referral</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-sm text-slate-400 mb-0.5">Commission Rate</p>
                    <p className="text-sm font-semibold text-slate-800">8%</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-sm text-slate-400 mb-0.5">Priority Listing</p>
                    <p className="text-sm font-semibold text-green-600">Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification History */}
            <div className="bg-white rounded-xl md:p-6 p-3 border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="flex items-center mb-3 gap-2">
                <p className="text-sm font-bold text-slate-800">Verification History</p>
              </div>
              <div className="space-y-3">
                {history.map((item, i) => (
                  <div key={i} className="flex items-center flex-wrap gap-4 justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                      <span className="text-sm text-slate-700 font-medium">{item.label}</span>
                      <span className="text-sm text-slate-400">by {item.by}</span>
                    </div>
                    <span className="text-sm text-slate-400 flex-shrink-0">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <PropertyActionBar price="€850/month" listingId="BER-2026-9847" />
      </div>

      {/* Modals */}
      {(activeModal === "verify_doc" || activeModal === "invalidate_doc") && pendingDocName && (
        <ConfirmDocModal
          type={activeModal}
          docName={pendingDocName}
          onConfirm={activeModal === "verify_doc" ? confirmVerifyDoc : confirmInvalidateDoc}
          onClose={closeModal}
        />
      )}
      {activeModal === "approve" && (
        <ApproveModal onConfirm={submitApprove} onClose={closeModal} />
      )}
      {activeModal === "reject" && (
        <RejectModal onClose={closeModal} />
      )}
      {activeModal === "request_info" && (
        <RequestInfoModal onClose={closeModal} />
      )}
    </div>
  );
}