"use client";

import { useState, useCallback } from "react";
import { usePartnerStore } from "@/app/store/zustand/usePartnerStore";

type Step = "bank-details" | "contract-upload" | "credit-criteria" | "review";

interface PartnerFormData {
  bankName: string;
  country: string;
  accountManager: string;
  managerEmail: string;
  contractFile: File | null;
  minCreditScore: string;
  maxLoanAmount: string;
  interestRateRange: string;
}

// Use a local alias to avoid collision with the global FormData type
type FormData = PartnerFormData;
type FormErrors = Partial<Record<keyof FormData, string>>;

const STEPS: { id: Step; label: string; icon: React.ReactNode }[] = [
  {
    id: "bank-details",
    label: "Bank Details",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_337_51338)">
          <path d="M3.5 12.8327V2.33268C3.5 2.02326 3.62292 1.72652 3.84171 1.50772C4.0605 1.28893 4.35725 1.16602 4.66667 1.16602H9.33333C9.64275 1.16602 9.9395 1.28893 10.1583 1.50772C10.3771 1.72652 10.5 2.02326 10.5 2.33268V12.8327H3.5Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.50033 7H2.33366C2.02424 7 1.72749 7.12292 1.5087 7.34171C1.28991 7.5605 1.16699 7.85725 1.16699 8.16667V11.6667C1.16699 11.9761 1.28991 12.2728 1.5087 12.4916C1.72749 12.7104 2.02424 12.8333 2.33366 12.8333H3.50033" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.5 5.25H11.6667C11.9761 5.25 12.2728 5.37292 12.4916 5.59171C12.7104 5.8105 12.8333 6.10725 12.8333 6.41667V11.6667C12.8333 11.9761 12.7104 12.2728 12.4916 12.4916C12.2728 12.7104 11.9761 12.8333 11.6667 12.8333H10.5" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.83301 3.5H8.16634" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.83301 5.83398H8.16634" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.83301 8.16602H8.16634" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.83301 10.5H8.16634" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_337_51338">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: "contract-upload",
    label: "Contract Upload",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.74967 1.16602H3.49967C3.19026 1.16602 2.89351 1.28893 2.67472 1.50772C2.45592 1.72652 2.33301 2.02326 2.33301 2.33268V11.666C2.33301 11.9754 2.45592 12.2722 2.67472 12.491C2.89351 12.7098 3.19026 12.8327 3.49967 12.8327H10.4997C10.8091 12.8327 11.1058 12.7098 11.3246 12.491C11.5434 12.2722 11.6663 11.9754 11.6663 11.666V4.08268L8.74967 1.16602Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.16699 1.16602V3.49935C8.16699 3.80877 8.28991 4.10551 8.5087 4.32431C8.72749 4.5431 9.02424 4.66602 9.33366 4.66602H11.667" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.83366 5.25H4.66699" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33366 7.58398H4.66699" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33366 9.91602H4.66699" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "credit-criteria",
    label: "Credit Criteria",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.667 4.08398H6.41699" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.16699 9.91602H2.91699" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.91699 11.666C10.8835 11.666 11.667 10.8825 11.667 9.91602C11.667 8.94952 10.8835 8.16602 9.91699 8.16602C8.95049 8.16602 8.16699 8.94952 8.16699 9.91602C8.16699 10.8825 8.95049 11.666 9.91699 11.666Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.08301 5.83398C5.04951 5.83398 5.83301 5.05048 5.83301 4.08398C5.83301 3.11749 5.04951 2.33398 4.08301 2.33398C3.11651 2.33398 2.33301 3.11749 2.33301 4.08398C2.33301 5.05048 3.11651 5.83398 4.08301 5.83398Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "review",
    label: "Review",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00033 12.8327C10.222 12.8327 12.8337 10.221 12.8337 6.99935C12.8337 3.77769 10.222 1.16602 7.00033 1.16602C3.77866 1.16602 1.16699 3.77769 1.16699 6.99935C1.16699 10.221 3.77866 12.8327 7.00033 12.8327Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.25 7.00065L6.41667 8.16732L8.75 5.83398" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const COUNTRIES = [
  "Germany", "France", "Netherlands", "Spain", "Italy",
  "Switzerland", "Austria", "Belgium", "Luxembourg", "Portugal",
];


function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateStep(step: Step, form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (step === "bank-details") {
    if (!form.bankName.trim()) errors.bankName = "Bank name is required.";
    if (!form.country) errors.country = "Please select a country.";
    if (!form.accountManager.trim()) errors.accountManager = "Account manager name is required.";
    if (!form.managerEmail.trim()) {
      errors.managerEmail = "Manager email is required.";
    } else if (!validateEmail(form.managerEmail)) {
      errors.managerEmail = "Enter a valid email address.";
    }
  }

  if (step === "contract-upload") {
    if (!form.contractFile) errors.contractFile = "Please upload a contract file.";
  }

  if (step === "credit-criteria") {
    if (!form.minCreditScore.trim()) {
      errors.minCreditScore = "Minimum credit score is required.";
    } else if (isNaN(Number(form.minCreditScore)) || Number(form.minCreditScore) < 300 || Number(form.minCreditScore) > 850) {
      errors.minCreditScore = "Enter a score between 300 and 850.";
    }
    if (!form.maxLoanAmount.trim()) {
      errors.maxLoanAmount = "Maximum loan amount is required.";
    } else if (isNaN(Number(form.maxLoanAmount)) || Number(form.maxLoanAmount) <= 0) {
      errors.maxLoanAmount = "Enter a valid positive amount.";
    }
    if (!form.interestRateRange.trim()) {
      errors.interestRateRange = "Interest rate range is required.";
    } else if (!/^\d+(\.\d+)?%?\s*-\s*\d+(\.\d+)?%?$/.test(form.interestRateRange.trim())) {
      errors.interestRateRange = "Use format like 3.5% - 7.2%";
    }
  }

  return errors;
}


function StepIndicator({ currentStep }: { currentStep: Step }) {
  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);
  return (
    <div className="grid grid-cols-4 gap-1 w-full">
      {STEPS.map((step, i) => {
        const isCompleted = i < currentIndex;
        const isActive = step.id === currentStep;
        return (
          <div key={step.id}>
            <div className={`flex items-center gap-1 text-xs font-medium leading-4 transition-all duration-200 ${isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-400"}`}>
              <span className={`w-6 h-7 border-2 border-solid rounded-full flex items-center justify-center flex-shrink-0 ${isActive ? "text-blue-600 border-blue-600 bg-blue-50" : isCompleted ? "text-green-600 border-green-500 bg-green-50" : "text-gray-400 border-gray-300"}`}>
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#22c55e" />
                    <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  step.icon
                )}
              </span>
              <span className="flex-1 inline-flex">{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="5.5" stroke="#ef4444" />
        <path d="M6 3.5v3" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="6" cy="8.5" r="0.6" fill="#ef4444" />
      </svg>
      {message}
    </p>
  );
}


function inputCls(hasError: boolean) {
  return `text-gray-700 placeholder:text-gray-400 text-sm leading-4 h-10 w-full px-3 bg-gray-50 border border-solid rounded-lg transition-all outline-none focus:ring-2 ${hasError
    ? "border-red-400 focus:ring-red-100 focus:border-red-400"
    : "border-gray-200 focus:ring-blue-50 focus:border-blue-400"
    }`;
}


function BankDetailsStep({
  data,
  onChange,
  errors,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  errors: FormErrors;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm block mb-2 font-medium text-gray-800">Bank Name</label>
        <input
          className={inputCls(!!errors.bankName)}
          placeholder="e.g. Deutsche Bank"
          value={data.bankName}
          onChange={(e) => onChange("bankName", e.target.value)}
        />
        <FieldError message={errors.bankName} />
      </div>

      <div>
        <label className="text-sm block mb-2 font-medium text-gray-800">Country</label>
        <div className="relative">
          <select
            value={data.country}
            onChange={(e) => onChange("country", e.target.value)}
            className={`w-full px-3 h-10 text-sm leading-5 font-normal border rounded-lg outline-none focus:ring-2 appearance-none bg-gray-50 transition-all ${errors.country
              ? "border-red-400 focus:ring-red-100 focus:border-red-400 text-gray-700"
              : "border-gray-200 focus:ring-blue-50 focus:border-blue-400 text-gray-700"
              } ${!data.country ? "text-gray-400" : "text-gray-700"}`}
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <FieldError message={errors.country} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm block mb-2 font-medium text-gray-800">Account Manager</label>
          <input
            className={inputCls(!!errors.accountManager)}
            placeholder="Full name"
            value={data.accountManager}
            onChange={(e) => onChange("accountManager", e.target.value)}
          />
          <FieldError message={errors.accountManager} />
        </div>
        <div>
          <label className="text-sm block mb-2 font-medium text-gray-800">Manager Email</label>
          <input
            type="email"
            className={inputCls(!!errors.managerEmail)}
            placeholder="email@bank.com"
            value={data.managerEmail}
            onChange={(e) => onChange("managerEmail", e.target.value)}
          />
          <FieldError message={errors.managerEmail} />
        </div>
      </div>
    </div>
  );
}

function ContractUploadStep({
  file,
  onFile,
  error,
}: {
  file: File | null;
  onFile: (f: File | null) => void;
  error?: string;
}) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const f = e.dataTransfer.files[0];
      if (f) onFile(f);
    },
    [onFile]
  );

  return (
    <div className="flex flex-col gap-2">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl py-10 px-6 transition-all cursor-pointer ${dragging
          ? "border-blue-400 bg-blue-50"
          : error
            ? "border-red-300 bg-red-50/40"
            : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40"
          }`}
      >
        <div className="w-10 h-10">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke={error ? "#f87171" : "#6C7C93"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="17 8 12 3 7 8" stroke={error ? "#f87171" : "#6C7C93"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="3" x2="12" y2="15" stroke={error ? "#f87171" : "#6C7C93"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {file ? (
          <div className="text-center">
            <p className="text-sm leading-5 font-medium text-gray-800">{file.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <button
              onClick={(e) => { e.stopPropagation(); onFile(null); }}
              className="mt-2 text-xs text-red-400 hover:text-red-600 transition-colors"
            >
              Remove file
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h4 className="text-sm leading-5 font-medium text-gray-800">Drag & drop partnership contract</h4>
            <p className="text-xs leading-4 text-gray-400 mt-1">PDF, DOCX up to 25MB</p>
          </div>
        )}

        <label className="cursor-pointer">
          <input
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
          <span className="px-3 inline-flex items-center justify-center shadow-sm text-sm leading-5 font-medium text-gray-800 bg-white border mt-2 border-gray-200 h-9 rounded-lg hover:bg-gray-50 transition-all">
            Browse Files
          </span>
        </label>
      </div>
      <FieldError message={error} />
    </div>
  );
}

function CreditCriteriaStep({
  data,
  onChange,
  errors,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  errors: FormErrors;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm block mb-2 font-medium text-gray-800">Minimum Credit Score</label>
        <input
          className={inputCls(!!errors.minCreditScore)}
          placeholder="e.g. 650 (300–850)"
          value={data.minCreditScore}
          onChange={(e) => onChange("minCreditScore", e.target.value)}
        />
        <FieldError message={errors.minCreditScore} />
      </div>
      <div>
        <label className="text-sm block mb-2 font-medium text-gray-800">Maximum Loan Amount (€)</label>
        <input
          className={inputCls(!!errors.maxLoanAmount)}
          placeholder="e.g. 50000"
          value={data.maxLoanAmount}
          onChange={(e) => onChange("maxLoanAmount", e.target.value)}
        />
        <FieldError message={errors.maxLoanAmount} />
      </div>
      <div>
        <label className="text-sm block mb-2 font-medium text-gray-800">Interest Rate Range</label>
        <input
          className={inputCls(!!errors.interestRateRange)}
          placeholder="e.g. 3.5% - 7.2%"
          value={data.interestRateRange}
          onChange={(e) => onChange("interestRateRange", e.target.value)}
        />
        <FieldError message={errors.interestRateRange} />
      </div>
    </div>
  );
}

function ReviewStep({ data }: { data: FormData }) {
  const rows: { label: string; value: string }[] = [
    { label: "Bank", value: data.bankName },
    { label: "Country", value: data.country },
    { label: "Manager", value: data.accountManager ? `${data.accountManager} (${data.managerEmail})` : "" },
    { label: "Contract", value: data.contractFile?.name ?? "" },
    { label: "Min. Credit Score", value: data.minCreditScore },
    { label: "Max Loan", value: data.maxLoanAmount ? `€${Number(data.maxLoanAmount).toLocaleString()}` : "" },
    { label: "Interest Range", value: data.interestRateRange },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-sm font-medium leading-5 text-gray-800">Review Details</p>
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-400 text-sm leading-5">{row.label}</span>
            <span className={`text-sm leading-5 font-medium ${row.value ? "text-gray-800" : "text-gray-300"}`}>
              {row.value || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


function SuccessView({ bankName, onReset }: { bankName: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" fill="#22c55e" />
          <path d="M8 14l4.5 4.5L20 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-base font-semibold text-gray-900">Partner Onboarded!</p>
        <p className="text-sm text-gray-400 mt-1">
          <span className="font-medium text-gray-700">{bankName}</span> has been successfully added as a partner bank.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-2 px-4 h-9 text-sm font-medium text-blue-600 border border-blue-200 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
      >
        Onboard Another
      </button>
    </div>
  );
}


function DialogFooter({
  step,
  onBack,
  onNext,
}: {
  step: Step;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
}) {
  const isFirst = step === "bank-details";
  const isLast = step === "review";

  return (
    <div className="flex items-center justify-between mt-6">
      {isFirst ? (
        <button
          className="bg-gray-50 cursor-pointer border border-solid border-gray-200 rounded-lg h-10 px-4 text-gray-700 text-sm leading-5 inline-flex items-center justify-center hover:bg-gray-100 transition-all"
        >
          Cancel
        </button>
      ) : (
        <button
          onClick={onBack}
          className="bg-gray-50 cursor-pointer border border-solid border-gray-200 rounded-lg h-10 px-4 text-gray-700 text-sm leading-5 inline-flex items-center justify-center hover:bg-gray-100 transition-all"
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        className="inline-flex items-center justify-center gap-1.5 px-4 h-10 cursor-pointer text-sm leading-5 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all"
      >
        {isLast ? "Submit Partner" : "Continue"}
        {!isLast && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}


const STEP_ORDER: Step[] = ["bank-details", "contract-upload", "credit-criteria", "review"];

const INITIAL_FORM: FormData = {
  bankName: "",
  country: "",
  accountManager: "",
  managerEmail: "",
  contractFile: null,
  minCreditScore: "",
  maxLoanAmount: "",
  interestRateRange: "",
};

export default function OnboardPartnerModal() {
  const { addPartner, closeAddModal } = usePartnerStore();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<Step>("bank-details");
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = useCallback((key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const handleFile = useCallback((file: File | null) => {
    setForm((prev) => ({ ...prev, contractFile: file }));
    setErrors((prev) => ({ ...prev, contractFile: undefined }));
  }, []);

  const handleNext = () => {
    const validationErrors = validateStep(step, form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) {
      setStep(STEP_ORDER[idx + 1]);
    } else {
      addPartner(form);
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setErrors({});
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setStep("bank-details");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="w-full">
      {submitted ? (
        <SuccessView bankName={form.bankName} onReset={handleReset} />
      ) : (
        <>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-lg leading-7 font-semibold text-gray-900">Onboard New Partner Bank</h2>
            <StepIndicator currentStep={step} />
          </div>

          <div className="pt-8">
            {step === "bank-details" && (
              <BankDetailsStep data={form} onChange={handleChange} errors={errors} />
            )}
            {step === "contract-upload" && (
              <ContractUploadStep file={form.contractFile} onFile={handleFile} error={errors.contractFile} />
            )}
            {step === "credit-criteria" && (
              <CreditCriteriaStep data={form} onChange={handleChange} errors={errors} />
            )}
            {step === "review" && <ReviewStep data={form} />}
          </div>

          <DialogFooter
            step={step}
            onBack={handleBack}
            onNext={handleNext}
            onCancel={closeAddModal}
          />
        </>
      )}
    </div>
  );
}