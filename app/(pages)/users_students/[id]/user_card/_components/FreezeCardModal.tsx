import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Radio, RadioGroup } from "@headlessui/react";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import { Card } from "@/app/store/zustand/useCardInventoryStore";



type FreezeCardForm = {
  freezeDuration: '24h' | '72h' | '7d' | 'indefinite' | ''; // <-- stricter type
  reason: string;
  internalNotes: string;
  targetCardId: string | null;
};

type FreezeCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  freezeCardForm: FreezeCardForm;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateFreezeCardForm: (field: keyof FreezeCardForm, value: any) => void;
  freezeCard: () => void;
  cards: Card[];
  freezeReasons: { name: string }[];
  selectedFreezeReason: { name: string };
};

const FreezeCardModal: React.FC<FreezeCardModalProps> = ({
  isOpen,
  onClose,
  freezeCardForm,
  updateFreezeCardForm,
  freezeCard,
  cards,
  freezeReasons,
  selectedFreezeReason,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="max-w-[520px] bg-white-1100 border-2 border-yellow-1100/30 relative h-full overflow-x-auto"
    >
      <div className="w-full bg-white sticky top-0 z-10">
        <Link
          onClick={onClose}
          href="#"
          className="flex items-center justify-center w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>

        <div className="bg-yellow-1100/5 border-b border-solid border-yellow-1100/20 flex items-center gap-3 px-6 pt-6 pb-5.5">
          <span className="bg-yellow-1100/10 rounded-full flex items-center justify-center w-10 h-10">
            <Image src="/images/warning-yellow.svg" width={24} height={24} alt="" />
          </span>
          <div className="flex-1 w-full">
            <h4 className="text-blue-1300 font-semibold text-xl leading-7 tracking-[-0.5px]">
              Freeze Card: ••••{" "}
              {cards.find((c) => c.id === freezeCardForm.targetCardId)?.lastFour ?? "----"}
            </h4>
            <p className="text-gray-1200 font-normal text-sm leading-5 mt-1">
              Temporarily disable this card. This action is reversible.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-1.5">
        <div className="my-6">
          <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
            <Image src="/images/shield-dark.svg" width={16} height={16} alt="" />Risk Context
          </h4>
          <div className="bg-gray-1600 rounded-lg p-4 mt-3">
            <ul>
              <li className="text-gray-1200 font-normal text-sm mb-3 leading-5 flex items-center justify-between">
                Current Risk Score <span className="text-red-1300 font-bold text-lg leading-7">75/100</span>
              </li>
              <li className="text-gray-1200 font-normal text-sm leading-5 flex items-center justify-between">
                Active Fraud Flags
              </li>
            </ul>
            <ul className="flex items-center gap-2 mt-2.5">
              <li>
                <span className="text-red-1300 font-medium text-xs leading-4 inline-flex items-center justify-center h-6.5 rounded-md px-2.5 bg-red-1300/10 border border-solid border-red-1300/20">
                  Multiple declined transactions
                </span>
              </li>
              <li>
                <span className="text-red-1300 font-medium text-xs leading-4 inline-flex items-center justify-center h-6.5 rounded-md px-2.5 bg-red-1300/10 border border-solid border-red-1300/20">
                  Unusual location detected
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
            <Image src="/images/card-gray.svg" width={16} height={16} alt="" />Action Details
          </h4>
          <div className="mt-3">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center">
              Freeze Duration <span className="text-red-1300">*</span>
            </label>
          <CustomSelect
              value={freezeCardForm.freezeDuration}
              onChange={(val) =>
                updateFreezeCardForm(
                  "freezeDuration",
                  val as FreezeCardForm["freezeDuration"]
                )
              }
              options={[
                { label: "Select duration", value: "" },
                { label: "24 hours", value: "24h" },
                { label: "72 hours", value: "72h" },
                { label: "7 days", value: "7d" },
                { label: "Indefinite", value: "indefinite" },
              ]}
            />
          </div>

          <div className="mt-3">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center">
              Reason for Freeze<span className="text-red-1300">*</span>
            </label>
            <RadioGroup
              by="name"
              value={selectedFreezeReason}
              onChange={(v: { name: string }) => updateFreezeCardForm("reason", v.name)}
              aria-label="Freeze reason"
            >
              {freezeReasons.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="group relative flex cursor-pointer border border-solid border-gray-1000 rounded-lg bg-white px-3 py-3.5 transition focus:not-data-focus:outline-none data-checked:bg-white/50 data-focus:outline data-focus:outline-white mb-4 last:mb-0"
                >
                  <div className="flex w-full items-center gap-3">
                    <div className="border border-solid border-blue-1400 rounded-full w-4 h-4 flex items-center transition group-data-checked:bg-blue-1400"></div>
                    <p className="text-blue-1300 font-normal text-sm leading-5">{plan.name}</p>
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-4">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center gap-1.5">
              Internal Notes
            </label>
            <textarea
              value={freezeCardForm.internalNotes}
              onChange={(e) => updateFreezeCardForm("internalNotes", e.target.value)}
              className="text-gray-1200 placeholder:text-gray-1200 h-20 font-normal text-sm leading-5 px-3.5 py-2.5 bg-white-1100 border border-solid border-gray-1000 rounded-md w-full"
              placeholder="Add any additional details for the audit log..."
            />
            <p className="text-gray-1200 font-normal text-xs leading-4 mt-1">
              These notes will be stored in the audit log.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-2 rounded-lg bg-yellow1800/50 border border-solid border-yellow-1100/20 p-4">
            <span className="flex items-center justify-center w-5 h-5">
              <Image src="/images/warning-yellow.svg" width={20} height={22} alt="" />
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-blue-1300 font-medium text-sm leading-5">Impact Summary</h4>
              <p className="text-gray-1200 font-normal text-sm leading-5 mt-1">
                Freezing this card will decline all incoming transactions and digital wallet payments
                (Apple/Google Pay) immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white">
          <div className="py-4 w-full bg-gray-1600/50 border-t border-solid border-gray-1000">
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
                  onClick={freezeCard}
                  className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-yellow-1100/90 hover:border-yellow-1100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal text-sm leading-5 bg-yellow-1100 border-solid border-yellow-1100 h-10"
                >
                  Confirm Freeze
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FreezeCardModal;