"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, User, Shield } from "lucide-react";
import ManagerDropdown from "./ManagerDropdown";

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

const checklistItems: ChecklistItem[] = [
  {
    id: "funds",
    label: "I confirm funds are received in the escrow account",
    description: "Verified bank transfer or payment confirmation",
  },
  {
    id: "passport",
    label: "I have verified the passport identity",
    description: "Photo ID matches submitted documents",
  },
  {
    id: "documents",
    label: "Documents match local consulate requirements",
    description: "All required documents are properly formatted",
  },
];

const complianceManagers = [
  "Sarah Mitchell",
  "James Okonkwo",
  "Elena Vasquez",
  "Thomas Brennan",
];

interface CheckboxItemProps {
  item: ChecklistItem;
  checked: boolean;
  onChange: (id: string) => void;
}

function CheckboxItem({ item, checked, onChange }: CheckboxItemProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(item.id)}
      className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-150 ${checked
        ? "border-green-2200/30 bg-green-2200/5"
        : "border-gray-3900 bg-white hover:border-green-2200/30"
        }`}
    >
      <span
        className={`mt-1 w-4 h-4 rounded border flex items-center justify-center transition-all duration-150 ${checked
          ? "border-green-2200 bg-[#3DBD8A]"
          : "border-green-2200 bg-white"
          }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6L5 9L10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <div className="flex-1 w-full">
        <h4 className={`sm:text-base text-sm font-medium sm:leading-6 leading-5 ${checked
          ? "text-green-2200"
          : "text-blue1700 "
          }`}
        >
          {item.label}
        </h4>
        <p className="text-sm leading-5 text-SteelGray mt-0.5">{item.description}</p>
      </div>
    </button>
  );
}

export default function ApproveAVIModal() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectedManager, setSelectedManager] = useState<string>("");
  const [remarks, setRemarks] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allChecked = checklistItems.every((item) => checkedItems[item.id]);
  const canSubmit = allChecked && selectedManager !== "";

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div className="sm:px-8 sm:py-6 p-4 border-b border-solid border-gray23 approve-gradient font-inter">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-green-2200/10 flex items-center justify-center">
            <Image
              src="/icons/AVI-file.svg"
              width="16"
              height="16"
              alt=""
            />
          </div>
          <div>
            <h2 className="sm:text-xl text-base leading-7 font-bold text-blue1700">
              Approve AVI & Release Funds
            </h2>
            <p className="sm:text-sm text-xs leading-5 text-SteelGray">
              4-Eyes Authorization Required
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-6">
          <div className="border border-gray-3900 bg-white rounded-xl p-4">
            <p className="text-xs leading-4 font-normal text-SteelGray uppercase tracking-[0.6px] mb-1">
              Dossier ID
            </p>
            <h4 className="text-lg leading-7 font-bold text-blue1700">#AVI-7722</h4>
          </div>
          <div className="border border-gray-3900 bg-white rounded-xl p-4">
            <p className="text-xs leading-4 font-normal text-SteelGray uppercase tracking-[0.6px] mb-1">
              Student Name
            </p>
            <h4 className="text-lg leading-7 font-bold text-blue1700">Alexander Petrova</h4>
          </div>
          <div className="border border-green-2200/20 bg-green-2200/10 rounded-xl p-4">
            <p className="text-xs leading-4 font-normal text-green-2200 uppercase tracking-[0.6px] mb-1">
              Student Name
            </p>
            <h4 className="text-lg leading-7 font-bold text-green-2200">€10.356</h4>
          </div>
        </div>
      </div>
 
      <div className="sm:px-8 sm:py-6 p-4">
        <div className="">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={16} className="text-[#3DBD8A]" />
            <h3 className="text-sm font-bold leading-5 text-blue1700 uppercase tracking-[0.7px]">
              Verification Checklist
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {checklistItems.map((item) => (
              <CheckboxItem
                key={item.id}
                item={item}
                checked={!!checkedItems[item.id]}
                onChange={toggleCheck}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-yellow-1100/10 border border-yellow-1100/30 rounded-xl p-4 flex items-start gap-3">
            <Image
              src="/icons/warning-yellow.svg"
              width="20"
              height="20"
              alt=""
            />
            <div className="flex-1 w-full">
              <h4 className="text-base leading-6 font-bold text-brown1300 mb-1">
                4-Eyes Principle Required
              </h4>
              <p className="text-sm text-brown1300/80 mt-1 leading-5">
                This action requires a secondary approval from a Compliance
                Manager before funds can be released.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <User size={15} className="text-[#3DBD8A]" />
            <h3 className="text-sm font-bold leading-5 text-blue1700 uppercase tracking-[0.7px]">
              Select Compliance Manager
            </h3>
          </div>
        <ManagerDropdown
          complianceManagers={complianceManagers}
          selectedManager={selectedManager}
          setSelectedManager={setSelectedManager}
        />
        </div>

        <div className="mt-6">
          <h3 className="text-sm mb-3 font-bold leading-5 text-blue1700 uppercase tracking-[0.7px]">
            Internal Approval Remarks
          </h3>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Add notes for the audit trail (optional)..."
            rows={4}
            className="w-full px-2.5 py-3 border border-gray23 h-25 rounded-md text-sm text-SteelGray placeholder:text-SteelGray resize-none focus:outline-none focus:border-green-2200 transition-colors"
          />
          <p className="text-xs leading-6 font-normal text-SteelGray mt-2">
           These remarks will be permanently saved in the Audit Trail
          </p>
        </div>
      </div>


    </div>
  );
}
