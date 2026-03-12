import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { Card, ReportStolenForm } from "@/app/store/zustand/useCardInventoryStore";

type ReportStolenModalProps = {
  isOpen: boolean;
  onClose: () => void;
  reportStolenForm: ReportStolenForm;
  updateReportStolenForm: (field: keyof ReportStolenForm, value: string | boolean | 'Stolen' | 'Lost' | 'Damaged' | null) => void;
  reportCardStolen: () => void;
  cards: Card[];
};

const ReportStolenModal: React.FC<ReportStolenModalProps> = ({
  isOpen,
  onClose,
  reportStolenForm,
  updateReportStolenForm,
  reportCardStolen,
  cards,
}) => {
  const currentCard = cards.find((c) => c.id === reportStolenForm.targetCardId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="max-w-[538px] bg-white-1100 border-2 border-red85 relative h-full overflow-x-auto"
    >
      {/* Header */}
      <div className="w-full sticky top-0 z-10 bg-white">
        <Link
          onClick={onClose}
          href="#"
          className="flex items-center justify-center w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </Link>

        <div className="bg-red2500 border-b border-solid border-red85 sm:px-6 px-4 pt-5 sm:pb-5.5 pb-4">
          <div className="flex items-center gap-3">
            <span className="bg-red2400/10 rounded-full flex items-center justify-center w-10 h-10">
              <Image src="/icons/sheild-cross.svg" width={24} height={24} alt="Warning" />
            </span>
            <h4 className="text-red2400 font-bold text-xl leading-7 tracking-[-0.5px]">
              Report Card Stolen or Lost
            </h4>
          </div>
          <div className="flex items-start mt-3 gap-2 border border-solid border-red85 bg-red2400/5 rounded-xl p-3">
            <span className="flex items-center w-5 h-5">
              <Image src="/images/warning.svg" width={16} height={16} alt="Alert" />
            </span>
            <p className="flex-1 w-full font-normal text-sm leading-5.5 text-red2400">
              <span className="font-bold">This action is permanent and cannot be undone.</span> 
              The current card will be destroyed in the system and all associated transactions will be frozen.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="sm:p-6 p-4">
        {/* Card Details */}
        <div className="sm:pb-6 pb-4">
          <h4 className="text-gray-1200 font-normal text-sm leading-5 uppercase tracking-[0.35px]">Card Details</h4>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between rounded-xl mt-4 bg-gray-1000/50 border border-solid border-gray-1000 p-4">
            <div className="flex items-center gap-4">
              <span className="bg-white shadow-4xl border border-solid border-gray-1000 rounded-xl w-12.5 h-12.5 flex items-center justify-center">
                <Image src="/images/card-black.svg" width={24} height={24} alt="Card" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-blue-1300 text-base font-bold leading-6">StudPay Debit Card</h4>
                <p className="text-gray-1200 text-sm font-normal leading-5">
                  •••• •••• •••• {currentCard?.lastFour ?? '----'}
                </p>
                <span className="text-gray-1200 text-xs font-normal leading-4 block">Emma Richardson</span>
              </div>
            </div>
            <Link
              href="#"
              className="text-white text-xs font-bold leading-4 inline-flex items-center justify-center bg-red2400 rounded-full gap-2 h-7.5 px-3"
            >
              <Image src="/icons/info-sheild.svg" width={16} height={16} alt="Info" /> Suspicious Activity
            </Link>
          </div>
        </div>

        {/* Incident Type */}
        <div className="sm:pt-15 pt-4 sm:mb-6 mb-4 border-t border-solid border-gray-1000">
          <h4 className="text-gray-1200 mb-3.5 font-normal text-sm leading-5 uppercase">Incident Type</h4>
          <ul className="grid grid-cols-3 gap-3">
            {(['Stolen', 'Lost', 'Damaged'] as const).map((type) => (
              <li key={type}>
                <button
                  onClick={() => updateReportStolenForm('incidentType', type)}
                  className={`w-full border-2 border-solid p-4 flex items-center flex-col gap-2 rounded-xl transition-all ${
                    reportStolenForm.incidentType === type ? 'border-red2400 bg-red2500' : 'border-gray-1000'
                  }`}
                >
                  <Image
                    src={type === 'Stolen' ? '/icons/cross-round-icon.svg' : type === 'Lost' ? '/images/info-red.svg' : '/images/b.svg'}
                    width={24}
                    height={24}
                    alt={type}
                  />
                  <p
                    className={`font-normal text-sm leading-5 ${
                      reportStolenForm.incidentType === type ? 'text-red2400' : 'text-blue-1300'
                    }`}
                  >
                    {type}
                  </p>
                </button>
              </li>
            ))}
          </ul>

          {/* Replacement Card */}
          <div className="mt-6 flex items-center justify-between bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg p-4">
            <div>
              <h4 className="text-blue-1300 font-normal sm:text-sm text-xs leading-5 mb-1.5">
                Immediately Order Replacement Card
              </h4>
              <p className="text-gray-1200 font-normal sm:text-sm text-xs leading-5">
                Physical card fee of <strong className="text-blue-1300">$15.00</strong> will be charged
              </p>
            </div>
            <ToggleSwitch
              checked={reportStolenForm.orderReplacement}
              onChange={(v) => updateReportStolenForm('orderReplacement', v)}
            />
          </div>

          {/* Admin Notes */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-1200 font-normal text-sm leading-5 tracking-[0.35px] uppercase">
                Reason / Admin Notes
              </p>
              <span className="text-gray-1200 font-normal text-xs leading-4 block">Required</span>
            </div>
            <textarea
              value={reportStolenForm.adminNotes}
              onChange={(e) => updateReportStolenForm('adminNotes', e.target.value)}
              className="text-gray-1200 placeholder:text-gray-1200 h-25 font-normal text-sm leading-5 px-3.5 py-2.5 border border-solid border-gray-1000 rounded-[10px] w-full"
              placeholder="Log the conversation with the student. Include date, time, and verification method used..."
            />
          </div>

          {/* Identity Confirmed */}
          <button
            onClick={() => updateReportStolenForm('identityConfirmed', !reportStolenForm.identityConfirmed)}
            className={`mt-6 w-full flex items-start gap-3 rounded-xl border-2 border-solid p-4 text-left transition-all ${
              reportStolenForm.identityConfirmed ? 'bg-blue1400/5 border-blue-1400' : 'bg-gray-1000/30 border-gray-1000'
            }`}
          >
            <span
              className={`flex items-center justify-center w-4 h-4 border-2 border-solid rounded-full mt-0.5 ${
                reportStolenForm.identityConfirmed ? 'border-blue-1400 bg-blue-1400' : 'border-blue-1300'
              }`}
            ></span>
            <p className="text-blue-1300 font-normal text-sm leading-5.5">
              <strong className="font-bold">I confirm</strong> that I have verified the user&apos;s identity and they have explicitly requested this permanent block.
            </p>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full sticky bottom-0 z-10 bg-white">
        <div className="sm:p-6 p-4 bg-gray-1000/30 border-t border-solid border-gray-1000">
          <ul className="grid grid-cols-2 gap-3">
            <li>
              <button
                onClick={onClose}
                className="sm:px-4 px-2.5 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-gray-3800 font-medium sm:text-sm text-[11px] leading-5 bg-gray-1600 border-solid border-gray-1000 h-12"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={reportCardStolen}
                className="cursor-pointer sm:px-4 px-2.5 flex items-center justify-center sm:gap-4 gap-1.5 w-full hover:bg-red2400/90 transition-all duration-500 ease-in-out rounded-[10px] text-white font-bold sm:text-sm text-[11px] leading-5 bg-red2400 h-12"
              >
                <Image src="/icons/sheild-cross.svg" width={16} height={16} alt="Block Card" />
                Permanently Block Card
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ReportStolenModal;