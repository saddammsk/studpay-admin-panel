"use client";

import { useState, useCallback } from "react";

type Step = "bank-details" | "contract-upload" | "credit-criteria" | "review";

interface FormData {
  bankName: string;
  country: string;
  accountManager: string;
  managerEmail: string;
  contractFile: File | null;
  minCreditScore: string;
  maxLoanAmount: string;
  interestRateRange: string;
}

const STEPS: { id: Step; label: string; icon: React.ReactNode }[] = [
  {
    id: "bank-details",
    label: "Bank Details",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_337_51338)"> <path d="M3.5 12.8327V2.33268C3.5 2.02326 3.62292 1.72652 3.84171 1.50772C4.0605 1.28893 4.35725 1.16602 4.66667 1.16602H9.33333C9.64275 1.16602 9.9395 1.28893 10.1583 1.50772C10.3771 1.72652 10.5 2.02326 10.5 2.33268V12.8327H3.5Z" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M3.50033 7H2.33366C2.02424 7 1.72749 7.12292 1.5087 7.34171C1.28991 7.5605 1.16699 7.85725 1.16699 8.16667V11.6667C1.16699 11.9761 1.28991 12.2728 1.5087 12.4916C1.72749 12.7104 2.02424 12.8333 2.33366 12.8333H3.50033" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M10.5 5.25H11.6667C11.9761 5.25 12.2728 5.37292 12.4916 5.59171C12.7104 5.8105 12.8333 6.10725 12.8333 6.41667V11.6667C12.8333 11.9761 12.7104 12.2728 12.4916 12.4916C12.2728 12.7104 11.9761 12.8333 11.6667 12.8333H10.5" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.83301 3.5H8.16634" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.83301 5.83398H8.16634" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.83301 8.16602H8.16634" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.83301 10.5H8.16634" stroke="#2378E7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_337_51338"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
    ),
  },
  {
    id: "contract-upload",
    label: "Contract Upload",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="14" height="14" fill="" rx="2" />
        <path d="M8.74967 1.16602H3.49967C3.19026 1.16602 2.89351 1.28893 2.67472 1.50772C2.45592 1.72652 2.33301 2.02326 2.33301 2.33268V11.666C2.33301 11.9754 2.45592 12.2722 2.67472 12.491C2.89351 12.7098 3.19026 12.8327 3.49967 12.8327H10.4997C10.8091 12.8327 11.1058 12.7098 11.3246 12.491C11.5434 12.2722 11.6663 11.9754 11.6663 11.666V4.08268L8.74967 1.16602Z" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.16699 1.16602V3.49935C8.16699 3.80877 8.28991 4.10551 8.5087 4.32431C8.72749 4.5431 9.02424 4.66602 9.33366 4.66602H11.667" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.83366 5.25H4.66699" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33366 7.58398H4.66699" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33366 9.91602H4.66699" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "credit-criteria",
    label: "Credit Criteria",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.667 4.08398H6.41699" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.16699 9.91602H2.91699" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.91699 11.666C10.8835 11.666 11.667 10.8825 11.667 9.91602C11.667 8.94952 10.8835 8.16602 9.91699 8.16602C8.95049 8.16602 8.16699 8.94952 8.16699 9.91602C8.16699 10.8825 8.95049 11.666 9.91699 11.666Z" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.08301 5.83398C5.04951 5.83398 5.83301 5.05048 5.83301 4.08398C5.83301 3.11749 5.04951 2.33398 4.08301 2.33398C3.11651 2.33398 2.33301 3.11749 2.33301 4.08398C2.33301 5.05048 3.11651 5.83398 4.08301 5.83398Z" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "review",
    label: "Review",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00033 12.8327C10.222 12.8327 12.8337 10.221 12.8337 6.99935C12.8337 3.77769 10.222 1.16602 7.00033 1.16602C3.77866 1.16602 1.16699 3.77769 1.16699 6.99935C1.16699 10.221 3.77866 12.8327 7.00033 12.8327Z" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.25 7.00065L6.41667 8.16732L8.75 5.83398" stroke="#6C7C93" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const COUNTRIES = [
  "Germany", "France", "Netherlands", "Spain", "Italy",
  "Switzerland", "Austria", "Belgium", "Luxembourg", "Portugal",
];

interface StepIndicatorProps {
  currentStep: Step;
}

function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);
  return (
    <div className="grid grid-cols-4 gap-1 w-full">
      {STEPS.map((step, i) => {
        const isCompleted = i < currentIndex;
        const isActive = step.id === currentStep;
        return (
          <div key={step.id} className="">
            <div className={`flex items-center gap-1 text-xs font-medium leading-4 transition-all duration-200 ${isActive
              ? "text-blue-600"
              : isCompleted
                ? "text-green-600"
                : "text-gray-5000"
              }`}
            >
              <span className={`w-6.25 h-7 border-2 border-solid  rounded-full flex items-center justify-center ${isActive ? "text-royalBlue128 border-royalBlue128 bg-royalBlue128/10" : isCompleted ? "text-green-3200 border-green-3200 bg-green-3200/10" : "text-gray-300 border-grey-5400"
                }`}
              >
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#22c55e" />
                    <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  step.icon
                )}
              </span>
              <span className="flex-1 inline-flex max-w-12.5 w-full">{step.label}</span>
            </div>

          </div>
        );
      })}
    </div>
  );
}

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}



interface BankDetailsStepProps {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
}

function BankDetailsStep({ data, onChange }: BankDetailsStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <label className="text-sm block mb-3 font-medium text-gBlack235">Bank Name</label>
        <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg shadow-71xl" placeholder="e.g. Deutsche Bank" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm block mb-3 font-medium text-gBlack235">Country</label>
        <div className="relative">
          <select
            value={data.country}
            onChange={(e) => onChange("country", e.target.value)}
            className="w-full px-3 h-10 text-sm leading-5 font-normal border border-grey-5400 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-Black235 appearance-none bg-gray-1500 transition-all"
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <label className="text-sm block mb-3 font-medium text-gBlack235">Account Manager</label>
          <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg" placeholder="Full name" />
        </div>
        <div className="">
          <label className="text-sm block mb-3 font-medium text-gBlack235">Manager Email</label>
          <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg" placeholder="email@bank.com" />
        </div>

      </div>
    </div>
  );
}

interface ContractUploadStepProps {
  file: File | null;
  onFile: (f: File | null) => void;
}

function ContractUploadStep({ file, onFile }: ContractUploadStepProps) {
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
    <div className="flex flex-col gap-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl py-10 px-6 transition-all cursor-pointer ${dragging ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40"
          }`}
      >
        <div className={`rounded-xl ${dragging ? "" : ""} w-10 h-10`}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gray-5000S">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#6C7C93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="17 8 12 3 7 8" stroke="#6C7C93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="3" x2="12" y2="15" stroke="#6C7C93" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {file ? (
          <div className="text-center mt-3">
            <p className="text-sm leading-5 font-medium text-Black235">{file.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        ) : (
          <div className="text-center">
            <h4 className="text-sm leading-5 font-medium text-Black235">Drag & drop partnership contract</h4>
            <p className="text-xs leading-4 text-gray-5000 mt-1">PDF, DOCX up to 25MB</p>
          </div>
        )}
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
          <span className="px-3 inline-flex items-center justify-center shadow-71xl text-sm leading-5 font-medium text-Black235 bg-white border mt-4 border-grey-5400 h-9 rounded-lg hover:bg-waterblue hover:border-grey-5400 transition-all">
            Browse Files
          </span>
        </label>
      </div>
    </div>
  );
}

interface CreditCriteriaStepProps {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
}

function CreditCriteriaStep({ data, onChange }: CreditCriteriaStepProps) {
  return (
    <div className="">
      <div className="mb-4">
        <label className="text-sm block mb-3 font-medium text-gBlack235">Minimum Credit Score</label>
        <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg shadow-71xl" placeholder="e.g. 650" />
      </div>
       <div className="mb-4">
        <label className="text-sm block mb-3 font-medium text-gBlack235">Maximum Loan Amount (€)</label>
        <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg" placeholder="e.g. 50000" />
      </div>
       <div className="">
        <label className="text-sm block mb-3 font-medium text-gBlack235">Minimum Credit Score</label>
        <input type="" className="text-gray-5000 placeholder:text-gray-5000 text-sm leading-4 h-10 w-full px-3 bg-gray-1500 border border-solid border-grey-5400 rounded-lg" placeholder="e.g. 3.5% - 7.2%" />
      </div>
    </div>
  );
}

interface ReviewStepProps {
  data: FormData;
}

function ReviewStep({ data }: ReviewStepProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Bank", value: data.bankName },
    { label: "Country", value: data.country },
    { label: "Manager", value: data.accountManager ? `${data.accountManager} (${data.managerEmail})` : "" },
    { label: "Min. Credit Score", value: data.minCreditScore },
    { label: "Max Loan", value: data.maxLoanAmount ? `€${data.maxLoanAmount}` : "" },
    { label: "Interest Range", value: data.interestRateRange },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-sm font-medium leading-5 text-Black235">Review Details</p>
      <div className="bg-gray-2000 rounded-[10px] p-4 overflow-hidden">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between mb-2 last:mb-0 }`}
          >
            <span className="text-gray-5000 text-sm leading-5 block">{row.label}</span>
            <span className={` text-sm leading-5 block ${row.value ? "text-gray-800" : "text-gray-5000"}`}>
              {row.value || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DialogFooterProps {
  step: Step;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}

function DialogFooter({ step, onBack, onNext, onCancel, onSubmit }: DialogFooterProps) {
  const isFirst = step === "bank-details";
  const isLast = step === "review";

  return (
    <div className="flex items-center justify-between mt-6">
      {isFirst ? (
        <button
          onClick={onCancel}
          className="bg-gray-1500 cursor-pointer border border-solid border-grey-5400 rounded-lg h-10 px-4 text-Black235 text-sm leading-5 inline-flex items-center justify-center"
        >
          Cancel
        </button>
      ) : (
        <button
          onClick={onBack}
          className="bg-gray-1500 cursor-pointer border border-solid border-grey-5400 rounded-lg h-10 px-4 text-Black235 text-sm leading-5 inline-flex items-center justify-center"
        >
          Back
        </button>
      )}
      {isLast ? (
        <button
          onClick={onNext}
          className="inline-flex items-center justify-center px-4 h-10 cursor-pointer text-sm leading-5 font-medium text-white bg-royalBlue128 rounded-lg hover:bg-royalBlue128/90 active:bg-royalBlue128/90 transition-all"
        >
          Submit Partner
        </button>
      ) : (
        <button
          onClick={onNext}
          className="inline-flex items-center justify-center px-4 h-10 cursor-pointer text-sm leading-5 font-medium text-white bg-royalBlue128 rounded-lg hover:bg-royalBlue128/90 active:bg-royalBlue128/90 transition-all"
        >
          Continue
        </button>
      )}
    </div>
  );
}

export default function OnboardPartnerModal() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState<Step>("bank-details");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    bankName: "",
    country: "",
    accountManager: "",
    managerEmail: "",
    contractFile: null,
    minCreditScore: "",
    maxLoanAmount: "",
    interestRateRange: "",
  });

  const handleChange = useCallback((key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleFile = useCallback((file: File | null) => {
    setForm((prev) => ({ ...prev, contractFile: file }));
  }, []);

  const stepOrder: Step[] = ["bank-details", "contract-upload", "credit-criteria", "review"];

  const handleNext = () => {
    const idx = stepOrder.indexOf(step);
    if (idx < stepOrder.length - 1) setStep(stepOrder[idx + 1]);
  };

  const handleBack = () => {
    const idx = stepOrder.indexOf(step);
    if (idx > 0) setStep(stepOrder[idx - 1]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setOpen(false);
  };



  return (
    <div>
      {open && (
        <div className="w-full">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-4  w-full">
              <h2 className="text-lg leading-7 font-semibold text-black-1300">Onboard New Partner Bank</h2>
              <StepIndicator currentStep={step} />
            </div>
          </div>



          <div className="pt-10">
            {step === "bank-details" && (
              <BankDetailsStep data={form} onChange={handleChange} />
            )}
            {step === "contract-upload" && (
              <ContractUploadStep file={form.contractFile} onFile={handleFile} />
            )}
            {step === "credit-criteria" && (
              <CreditCriteriaStep data={form} onChange={handleChange} />
            )}
            {step === "review" && <ReviewStep data={form} />}
          </div>

          <div className="">
            <DialogFooter
              step={step}
              onBack={handleBack}
              onNext={handleNext}
              onCancel={() => setOpen(false)}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}

    </div>
  );
}
