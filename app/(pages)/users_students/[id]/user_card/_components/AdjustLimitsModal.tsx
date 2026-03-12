import React from "react";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";

interface AdjustLimitsForm {
  daily: string;
  monthly: string;
  atm: string;
  reason: string;
}

interface SpendingLimits {
  daily: { limit: number };
  monthly: { limit: number };
  atm: { limit: number };
}

interface AdjustLimitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: AdjustLimitsForm;
  spendingLimits: SpendingLimits;
  updateForm: (field: keyof AdjustLimitsForm, value: string) => void;
  resetForm: () => void;
  submitForm: () => void;
}

const AdjustLimitsModal: React.FC<AdjustLimitsModalProps> = ({
  isOpen,
  onClose,
  formData,
  spendingLimits,
  updateForm,
  resetForm,
  submitForm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="max-w-[512px] bg-white relative sm:h-auto h-full sm:overflow-x-hidden overflow-x-auto"
    >
      <div className="md:p-6 p-4">
        {/* Header */}
        <div className="mb-4">
          <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
            Adjust Spending Limits
          </h4>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-1.5">
            Modify the customer's daily, monthly, and ATM withdrawal limits.
          </p>
        </div>

        {/* 4-Eyes Approval */}
        <div className="mt-4 flex items-start gap-3 rounded-lg bg-blue1400/10 border border-solid border-blue1400/20 p-4">
          <span className="flex items-center justify-center w-6 h-6">
            <Image src="/images/user-blue.svg" width={20} height={20} alt="" />
          </span>
          <div>
            <h4 className="text-black-2000 font-medium text-sm leading-5">
              4-Eyes Approval Required
            </h4>
            <p className="text-gray-3800 font-normal text-xs leading-4">
              This change will be sent to a supervisor for approval before taking
              effect.
            </p>
          </div>
        </div>

        {/* Daily, Monthly, ATM Limits */}
        {[
          { label: "Daily Spending", key: "daily", options: ["1000", "2000", "3000"] },
          { label: "Monthly Spending", key: "monthly", options: ["5000", "6000", "8000"] },
          { label: "ATM Withdrawal", key: "atm", options: ["500", "600", "1000"] },
        ].map(({ label, key, options }) => (
          <div className="mt-4" key={key}>
            <label className="text-blue-1300 block mb-2.5 font-medium text-sm leading-5">
              {label}
            </label>
            <div className="flex items-center gap-7">
              <span className="w-3.5 text-gray-1900 font-normal text-sm leading-5 flex items-center">
                €
              </span>
              <div className="w-full flex-1">
                <CustomSelect
                  value={formData[key as keyof AdjustLimitsForm]}
                  onChange={(val) => updateForm(key as keyof AdjustLimitsForm, val)}
                  options={options.map((o) => ({ label: o, value: o }))}
                />
              </div>
            </div>
            <p className="text-gray-1900 font-normal text-xs leading-4 mt-2">
              Current limit: €
              {spendingLimits[key as keyof SpendingLimits].limit}
            </p>
          </div>
        ))}

        {/* Reason */}
        <div className="mt-4">
          <label className="text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5">
            Reason for Change <span className="text-red2100">*</span>
          </label>
          <textarea
            value={formData.reason}
            onChange={(e) => updateForm("reason", e.target.value)}
            className="text-gray-1200 placeholder:text-gray-1200 font-inter font-normal text-sm leading-5 bg-gray-1500 border border-solid border-gray-3600 py-2.5 px-3.5 h-20 rounded-md w-full"
            placeholder="Enter the business justification for this limit change..."
          />
        </div>

        {/* Warning */}
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-yellow1800/50 border border-solid border-yellow-1100/20 p-3">
          <span className="flex items-center justify-center w-6 h-6">
            <Image src="/images/warning-yellow.svg" width={20} height={22} alt="" />
          </span>
          <p className="text-gray-1900 font-normal text-xs leading-4">
            All limit changes are logged in the audit trail and require supervisor
            approval.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4">
          <ul className="flex items-center justify-end gap-3">
            <li>
              <button
                onClick={resetForm}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Reset
              </button>
            </li>
            <li>
              <button
                onClick={submitForm}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue-1000/90 hover:border-blue-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal text-sm leading-5 bg-blue-1000 border-solid border-blue-1000 h-10"
              >
                Submit for Approval
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default AdjustLimitsModal;