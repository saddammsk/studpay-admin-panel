import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { Checkbox } from "@headlessui/react";

interface CreateVirtualCardForm {
  cardPurpose: string;
  cardNickname: string;
  limitType: string;
  spendingLimit: string;
  shortTerm: boolean;
  instantActivation: boolean;
  autoTokenization: boolean;
  adminReason: string;
}

interface CreateVirtualCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: CreateVirtualCardForm;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateForm: (field: keyof CreateVirtualCardForm, value: any) => void;
  submitForm: () => void;
}

const CreateVirtualCardModal: React.FC<CreateVirtualCardModalProps> = ({
  isOpen,
  onClose,
  formData,
  updateForm,
  submitForm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="max-w-[512px] bg-white relative h-full overflow-x-auto"
    >
      <div className="w-full bg-white sticky top-0 z-10">
        <Link
          href="#"
          onClick={onClose}
          className="flex items-center justify-center w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="border-b border-solid border-gray-1000 flex items-center gap-3 px-6 pt-5 pb-4">
          <span className="bg-blue-1400/10 rounded-lg flex items-center justify-center w-9 h-9">
            <Image src="/icons/card-blue.svg" width={20} height={20} alt="" />
          </span>
          <h4 className="text-blue-1300 font-semibold text-xl leading-7 tracking-[-0.5px]">
            Create Virtual Card
          </h4>
        </div>
      </div>

      <div className="md:px-6 px-4 py-5">
        <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
          <Image src="/images/wallet-icon3.svg" width={16} height={16} alt="" />
          Card Configuration
        </h4>

        <div className="mt-3">
          <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
            Card Purpose
          </label>
          <CustomSelect
            value={formData.cardPurpose}
            onChange={(val) => updateForm("cardPurpose", val)}
            options={[
              { label: "Select use case", value: "" },
              { label: "Online Shopping", value: "shopping" },
              { label: "Subscription Services", value: "subscriptions" },
              { label: "Travel", value: "travel" },
            ]}
          />
        </div>

        <div className="mt-4">
          <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center gap-1.5">
            <Image src="/images/tag-icon.svg" width={16} height={16} alt="" />
            Card Nickname
          </label>
          <InputField
            ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 pl-3.5"
            type="text"
            placeholder="e.g., Netflix Card, Amazon Purchases"
            value={formData.cardNickname}
            onChange={(e) => updateForm("cardNickname", e.target.value)}
          />
          <p className="text-gray-1200 text-xs font-normal leading-4 mt-1">
            A friendly name to identify this card
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-solid border-gray-1000">
          <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
            <Image src="/images/wallet-icon3.svg" width={16} height={16} alt="" />
            Financial Limits
          </h4>

          <div className="mt-3">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center">
              Limit Type
            </label>
            <CustomSelect
              value={formData.limitType}
              onChange={(val) => updateForm("limitType", val)}
              options={[
                { label: "Maximum Lifetime Limit", value: "Maximum Lifetime Limit" },
                { label: "Monthly Limit", value: "Monthly Limit" },
                { label: "Per Transaction", value: "Per Transaction" },
              ]}
            />
          </div>

          <div className="mt-3">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
              Spending Limit
            </label>
            <div className="relative">
              <InputField
                ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 pl-8"
                type="number"
                placeholder="0.00"
                value={formData.spendingLimit}
                onChange={(e) => updateForm("spendingLimit", e.target.value)}
              />
              <span className="text-gray-1200 font-medium text-base leading-6 block absolute left-3 top-1/2 -translate-y-1/2">
                £
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="flex items-center">
                <Image src="/images/clock-gray.svg" width={20} height={22} alt="" />
              </span>
              <div>
                <h4 className="text-blue-1300 font-medium text-sm leading-5 mb-[3.5px]">
                  Short-term Card (1 month)
                </h4>
                <p className="text-gray-1200 font-normal text-xs leading-4">
                  Standard expiry (3 years)
                </p>
              </div>
            </div>
            <ToggleSwitch
              checked={formData.shortTerm}
              onChange={(v) => updateForm("shortTerm", v)}
            />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-solid border-gray-1000">
          <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
            <Image src="/images/Deployment-icon.svg" width={16} height={16} alt="" />
            Deployment Options
          </h4>

          <div className="mt-3 flex items-center justify-between bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Checkbox
                checked={formData.instantActivation}
                onChange={(v) => updateForm("instantActivation", v)}
                className="group w-4 h-4 rounded flex items-center border border-solid border-gray-1000"
              >
                <div className="flex items-center justify-center">
                  <Image src="/images/check-icon.svg" width={14} height={14} alt="" />
                </div>
              </Checkbox>
              <div className="flex-1 w-full">
                <h4 className="text-blue-1300 font-medium text-sm leading-5 mb-[3.5px]">
                  Instant Activation
                </h4>
                <p className="text-gray-1200 font-normal text-xs leading-4">
                  Activate card immediately upon creation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="flex items-center">
                <Image src="/images/mobile-dark.svg" width={20} height={22} alt="" />
              </span>
              <div>
                <h4 className="text-blue-1300 font-medium text-sm leading-5 mb-[3.5px]">
                  Auto-Tokenization
                </h4>
                <p className="text-gray-1200 font-normal text-xs leading-4">
                  Pre-authorize for Apple Pay / Google Pay
                </p>
              </div>
            </div>
            <ToggleSwitch
              checked={formData.autoTokenization}
              onChange={(v) => updateForm("autoTokenization", v)}
            />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-solid border-gray-1000">
          <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center gap-1.5">
            <Image src="/images/file-icon2.svg" width={16} height={16} alt="" />
            Admin Reason
            <span className="text-red-1300">*</span>
          </label>
          <textarea
            value={formData.adminReason}
            onChange={(e) => updateForm("adminReason", e.target.value)}
            className="text-gray-1200 placeholder:text-gray-1200 h-20 font-normal text-sm leading-5 px-3.5 py-2.5 bg-white-1100 border border-solid border-gray-1000 rounded-md w-full"
            placeholder="e.g., Customer request via Support Ticket #456"
          />
          <p className="text-gray-1200 font-normal text-xs leading-4 mt-1">
            Required: Provide a reason for this manual card creation
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-lg bg-gray-1600/70 border border-solid border-gray-1000 px-3 py-2.5">
          <span className="flex items-center justify-center w-4 h-4">
            <Image src="/icons/info-dark.svg" width={16} height={16} alt="" />
          </span>
          <p className="text-gray-1200 font-normal text-sm leading-5">
            This virtual card issuance will be recorded in the user's Audit Trail.
          </p>
        </div>
      </div>

      <div className="w-full sticky bottom-0 bg-white z-10">
        <div className="px-6 py-4 bg-gray-1600/50 border-t border-solid border-gray-1000">
          <ul className="flex items-center justify-end gap-3">
            <li>
              <button
                onClick={onClose}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
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

export default CreateVirtualCardModal;