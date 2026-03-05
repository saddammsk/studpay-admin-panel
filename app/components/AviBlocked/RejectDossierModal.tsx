"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

type RejectionReason =
  | ""
  | "visa_denied"
  | "incomplete_docs"
  | "eligibility_failed"
  | "fraud_suspected"
  | "other";

const REJECTION_REASONS: { value: RejectionReason; label: string }[] = [
  { value: "visa_denied", label: "Visa Denied by Embassy" },
  { value: "incomplete_docs", label: "Incomplete Documentation" },
  { value: "eligibility_failed", label: "Eligibility Criteria Not Met" },
  { value: "fraud_suspected", label: "Fraud Suspected" },
  { value: "other", label: "Other" },
];

interface DossierInfo {
  id: string;
  name: string;
  accountHolder: string;
  bankName: string;
  iban: string;
  refundAmount: string;
  currency: string;
  supportEmail: string;
}

const DOSSIER: DossierInfo = {
  id: "#AVI-7722",
  name: "Alexander Petrova",
  accountHolder: "Alexander Petrova",
  bankName: "Deutsche Bank AG",
  iban: "DE89 3704 0044 0532 0130 00",
  refundAmount: "10,356",
  currency: "€",
  supportEmail: "support@studpay.com",
};

interface BadgeProps {
  label: string;
  variant: "red" | "pink";
}

function Badge({ label, variant }: BadgeProps) {
  const cls =
    variant === "red"
      ? "bg-red-100 text-red-600"
      : "bg-pink-100 text-pink-600";
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cls}`}>
      {label}
    </span>
  );
}

interface SectionLabelProps {
  label: string;
  badge?: { text: string; variant: "red" | "pink" };
}

function SectionLabel({ label, badge }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {badge && <Badge label={badge.text} variant={badge.variant} />}
    </div>
  );
}

interface UploadZoneProps {
  file: File | null;
  dragging: boolean;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
  onClick: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function UploadZone({
  file,
  dragging,
  onDrop,
  onDragOver,
  onDragLeave,
  onClick,
  inputRef,
  onChange,
}: UploadZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={onClick}
      className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
        dragging
          ? "border-red-400 bg-red-50"
          : file
          ? "border-green-400 bg-green-50"
          : "border-gray-300 bg-gray-50 hover:border-gray-400"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        className="hidden"
        onChange={onChange}
      />
      {file ? (
        <>
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm font-medium text-green-700 text-center break-all px-2">
            {file.name}
          </p>
          <p className="text-xs text-green-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </>
      ) : (
        <>
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <p className="text-sm font-medium text-gray-600">
            Drop file here or click to upload
          </p>
          <p className="text-xs text-gray-400">
            PDF, JPG, PNG, DOC up to 10MB
          </p>
        </>
      )}
    </div>
  );
}

interface RefundCardProps {
  info: DossierInfo;
}

function RefundCard({ info }: RefundCardProps) {
  return (
    <div className="border border-gray-3900 rounded-lg p-4 bg-white">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Account Holder</p>
          <p className="text-sm font-semibold text-gray-800">
            {info.accountHolder}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Bank Name</p>
          <p className="text-sm font-semibold text-gray-800">{info.bankName}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-0.5">IBAN</p>
        <p className="text-sm font-mono font-medium text-gray-800">
          {info.iban}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">Refund Amount</p>
        <p className="text-2xl font-bold text-red-500">
          {info.currency}
          {info.refundAmount}
        </p>
      </div>
    </div>
  );
}

interface NotificationPreviewProps {
  info: DossierInfo;
  reason: RejectionReason;
}

function NotificationPreview({ info, reason }: NotificationPreviewProps) {
  const reasonLabel =
    REJECTION_REASONS.find((r) => r.value === reason)?.label ?? null;

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white text-sm text-gray-600 space-y-2 leading-relaxed">
      <p className="font-semibold text-gray-800">
        Subject: Your AVI Application {info.id} Update
      </p>
      <p>Dear {info.name.split(" ")[0]},</p>
      <p>
        We regret to inform you that your AVI application has been processed
        with the following outcome:{" "}
        {reasonLabel ? (
          <span className="font-semibold text-gray-800">{reasonLabel}</span>
        ) : (
          <span className="font-bold text-gray-900">
            [Reason will appear here]
          </span>
        )}
      </p>
      <p>
        A refund of{" "}
        <span className="font-bold text-gray-900">
          {info.currency}
          {info.refundAmount}
        </span>{" "}
        will be initiated to your original payment source within 5-7 business
        days.
      </p>
      <p>For questions, please contact {info.supportEmail}.</p>
    </div>
  );
}

interface RejectDossierModalProps {
  onClose?: () => void;
  onConfirm?: (data: {
    reason: RejectionReason;
    justification: string;
    file: File | null;
  }) => void;
}

export default function RejectDossierModal({
  onClose,
  onConfirm,
}: RejectDossierModalProps) {
  const [reason, setReason] = useState<RejectionReason>("");
  const [justification, setJustification] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleConfirm = () => {
    onConfirm?.({ reason, justification, file });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
     

        <div className="overflow-y-auto flex-1 px-5 py-5 space-y-5">
          

          <div>
            <SectionLabel
              label="Reason for Rejection"
              badge={{ text: "Audit Trail Required", variant: "red" }}
            />
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value as RejectionReason)}
                className={`w-full appearance-none border-2 rounded-xl px-4 py-3 pr-10 text-sm bg-white focus:outline-none transition-colors ${
                  reason
                    ? "border-gray-300 text-gray-800"
                    : "border-green-500 text-gray-400"
                } focus:border-red-400`}
              >
                <option value="" disabled>
                  Select rejection reason...
                </option>
                {REJECTION_REASONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div>
            <SectionLabel
              label="Detailed Justification"
              badge={{ text: "Justification Required", variant: "pink" }}
            />
            <textarea
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Provide detailed justification for this rejection. This will be recorded in the audit trail..."
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none transition-colors"
            />
          </div>

          <div>
            <SectionLabel label="Upload Visa Rejection Letter" />
            <span className="text-red-500 text-sm -mt-1 block mb-2">*</span>
            <UploadZone
              file={file}
              dragging={dragging}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={() => setDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              inputRef={fileInputRef}
              onChange={handleFileChange}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-gray-700">
                Refund Destination (Original Payment Source)
              </h3>
            </div>
            <RefundCard info={DOSSIER} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-gray-700">
                Student Notification Preview
              </h3>
            </div>
            <NotificationPreview info={DOSSIER} reason={reason} />
          </div>
        </div>

        <div className="flex-shrink-0 px-5 py-4 border-t border-gray-100 flex items-center gap-3 bg-white">
          <button
            onClick={onClose}
            className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-400 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            Confirm Rejection &amp; Refund
          </button>
        </div>
      </div>
    </div>
  );
}
