import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Radio, RadioGroup } from "@headlessui/react";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import { Card, UnblockPinForm } from "@/app/store/zustand/useCardInventoryStore";

type IdentityCheckPlan = { name: string };

type UnblockPinModalProps = {
  isOpen: boolean;
  onClose: () => void;
  unblockPinForm: UnblockPinForm;
  updateUnblockPinForm: (field: keyof UnblockPinForm, value: string | boolean) => void;
  unblockPin: () => void;
  cards: Card[];
  identityCheckPlans: IdentityCheckPlan[];
};

const UnblockPinModal: React.FC<UnblockPinModalProps> = ({
  isOpen,
  onClose,
  unblockPinForm,
  updateUnblockPinForm,
  unblockPin,
  cards,
  identityCheckPlans,
}) => {
  const targetCard = cards.find((c) => c.id === unblockPinForm.targetCardId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="max-w-[600px] bg-white-1100 border-2 border-skyblue26 relative h-full overflow-x-auto"
    >
      <div className="w-full bg-white sticky top-0 z-10">
        <Link
          onClick={onClose}
          href="#"
          className="flex items-center justify-center w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="bg-skyblue27 border-b border-solid border-skyblue26 sm:px-6 px-4 pt-5 sm:pb-5.5 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-skyblue23/10 rounded-full flex items-center justify-center w-11 h-11">
              <Image src="/icons/key-icon.svg" width={24} height={24} alt="" />
            </span>
            <h4 className="text-skyblue23 font-bold text-xl leading-7 tracking-[-0.5px]">
              Unblock / Reset Card PIN
            </h4>
          </div>
          <p className="font-normal text-sm leading-5.5 text-gray-1200">
            Use this when a student enters the wrong PIN too many times or forgets it.
          </p>
        </div>
      </div>

      <div className="sm:p-6 p-4">
        <div className="sm:pb-6 pb-4">
          <h4 className="text-gray-1200 font-normal text-sm leading-5 uppercase tracking-[0.35px]">
            Card Details
          </h4>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between rounded-xl mt-4 bg-gray-1000/50 border border-solid border-gray-1000 p-4">
            <div className="flex items-center gap-4">
              <span className="bg-white shadow-4xl border border-solid border-gray-1000 rounded-xl w-12.5 h-12.5 flex items-center justify-center">
                <Image src="/images/user-icon5.svg" width={24} height={24} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-blue-1300 text-base font-bold leading-6">{targetCard?.type ?? 'StudPay Debit Card'}</h4>
                <p className="text-gray-1200 text-sm font-normal leading-5">
                  StudPay Debit Card •••• {targetCard?.lastFour ?? '----'}
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="text-black14 text-xs font-normal leading-5 inline-flex items-center justify-center bg-yellow1800 border border-solid border-yellow-1100/30 rounded-xl gap-2 h-8.5 px-3"
            >
              <Image src="/icons/info-brown.svg" width={16} height={16} alt="" /> 3 Failed Attempts
            </Link>
          </div>
        </div>

        <div className="sm:pt-6 pt-4 border-t border-solid border-gray-1000">
          <h4 className="text-gray-1200 mb-3.5 font-normal text-sm leading-5 uppercase">
            Identity Verification
          </h4>
          <RadioGroup
            value={unblockPinForm.identityVerified}
            onChange={(v: boolean) => updateUnblockPinForm('identityVerified', v)}
            aria-label="Identity verification"
            className="space-y-2"
          >
            {identityCheckPlans.map((plan) => (
              <Radio
                key={plan.name}
                value={true}
                className="group relative flex cursor-pointer rounded-xl bg-gray-1000/30 border-2 border-solid border-gray-1000 p-4 transition focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
              >
                <div className="flex w-full items-center gap-3">
                  <div className="w-4 h-4 border-2 border-solid border-blue-1300 rounded-full flex items-center transition group-data-checked:bg-blue-1300"></div>
                  <div className="flex-1 w-full">
                    <p className="font-normal blue-1300 text-sm leading-[22.8px]">{plan.name}</p>
                  </div>
                </div>
              </Radio>
            ))}
          </RadioGroup>

          <div className="mt-5">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center">
              Verification Method
            </label>
            <CustomSelect
              value={unblockPinForm.verificationMethod}
              onChange={(val: string) => updateUnblockPinForm('verificationMethod', val)}
              options={[
                { label: 'Select verification method...', value: '' },
                { label: 'Security Questions', value: 'security-questions' },
                { label: 'ID Document Check', value: 'id-document' },
                { label: 'Phone Verification', value: 'phone' },
              ]}
            />
          </div>

          <div className="border-t border-solid border-gray-1000 sm:pt-6 pt-4 sm:mt-6 mt-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-1200 font-normal text-sm leading-5 tracking-[0.35px] uppercase">Admin Reason</p>
              <span className="text-gray-1200 font-normal text-xs leading-4 block">Required</span>
            </div>
            <textarea
              value={unblockPinForm.adminReason}
              onChange={(e) => updateUnblockPinForm('adminReason', e.target.value)}
              className="text-gray-1200 placeholder:text-gray-1200 h-25 font-normal text-sm leading-5 px-3.5 py-2.5 border border-solid border-gray-1000 rounded-[10px] w-full"
              placeholder="e.g., User locked out after 3 failed attempts. Verified identity via security question..."
            />
          </div>

          <div className="mt-6 flex gap-3 items-start bg-yellow1800 border border-solid border-yellow-1100/30 rounded-xl p-4">
            <span className="w-5 h-5 flex items-center">
              <Image src="/images/shield-yellow.svg" width={20} height={20} alt="" />
            </span>
            <p className="text-blue-1300 flex-1 w-full font-normal text-xs leading-[22.8px]">
              <span className="font-bold">Security Notice:</span> For security reasons, the Admin cannot see or set the new PIN. The process must be completed by the student on their mobile device.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sticky bottom-0 bg-white z-10">
        <div className="sm:p-6 p-4 bg-gray-1000/30 border-t border-solid border-gray-1000">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <li>
              <button
                onClick={onClose}
                className="group sm:px-4 px-2.5 flex items-center justify-center sm:gap-4 gap-1.5 cursor-pointer hover:bg-gray-1000 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-gray-1200 font-medium sm:text-sm text-[11px] leading-5 bg-gray-1600 border-solid border-gray-1000 h-12"
              >
                <Image
                  src="/icons/lock-open.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="group-hover:brightness-0"
                />
                Unblock Attempt Counter
              </button>
            </li>
            <li>
              <button
                onClick={unblockPin}
                className="cursor-pointer sm:px-4 px-2.5 flex items-center justify-center sm:gap-4 gap-1.5 w-full hover:opacity-90 transition-all duration-500 ease-in-out rounded-[10px] text-white font-bold sm:text-sm text-[11px] leading-5 bg-skyblue23 h-12"
              >
                <Image src="/icons/send-icon.svg" className="" width={16} height={16} alt="" />
                Send Reset Instructions
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default UnblockPinModal;