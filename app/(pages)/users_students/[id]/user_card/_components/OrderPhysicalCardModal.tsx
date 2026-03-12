import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";

interface OrderPhysicalCardForm {
  cardType: string;
  cardholderName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
  shippingMethod: string;
  reason: string;
  waiveIssuanceFee: boolean;
}

interface OrderPhysicalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: OrderPhysicalCardForm;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateForm: (field: keyof OrderPhysicalCardForm, value: any) => void;
  submitForm: () => void;
}

const OrderPhysicalCardModal: React.FC<OrderPhysicalCardModalProps> = ({
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
      <div className="w-full sticky top-0 z-10 bg-white">
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
            Order Physical Card
          </h4>
        </div>
      </div>

      <div className="md:px-6 px-4 py-5">
        <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
          <Image src="/images/gift-box.svg" width={16} height={16} alt="" />
          Card Configuration
        </h4>

        <div className="mt-3">
          <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
            Card Type
          </label>
          <CustomSelect
            value={formData.cardType}
            onChange={(val) => updateForm("cardType", val)}
            options={[
              { label: "Select card type", value: "" },
              { label: "Visa Debit", value: "visa-debit" },
              { label: "Mastercard Debit", value: "mc-debit" },
            ]}
          />
        </div>

        <div className="mt-4">
          <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
            Cardholder Name
          </label>
          <InputField
            ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10"
            type="text"
            placeholder="Emma Johnson"
            value={formData.cardholderName}
            iconSrc="/images/user-icon2.svg"
            onChange={(e) => updateForm("cardholderName", e.target.value)}
          />
          <p className="text-gray-1200 text-xs font-normal leading-4 mt-1">
            Name as it will appear on the card
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-solid border-gray-1000">
          <h4 className="text-blue-1300 font-semibold text-sm leading-5 flex items-center gap-2">
            <Image src="/images/location-gray.svg" width={16} height={16} alt="" />
            Shipping & Logistics
          </h4>

          <div className="mt-3">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
              Street Address
            </label>
            <InputField
              ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 !pl-3"
              type="text"
              placeholder="123 University Avenue"
              value={formData.streetAddress}
              onChange={(e) => updateForm("streetAddress", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
                City
              </label>
              <InputField
                ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 !pl-3"
                type="text"
                placeholder="Cambridge"
                value={formData.city}
                onChange={(e) => updateForm("city", e.target.value)}
              />
            </div>
            <div>
              <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
                Postal Code
              </label>
              <InputField
                ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 !pl-3"
                type="text"
                placeholder="CB2 1TN"
                value={formData.postalCode}
                onChange={(e) => updateForm("postalCode", e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
              Country
            </label>
            <InputField
              ClassName="bg-gray-1500 text-gray-3800 rounded-md h-10 !pl-3"
              type="text"
              placeholder="United Kingdom"
              value={formData.country}
              onChange={(e) => updateForm("country", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center gap-1.5">
              <Image src="/images/van-icon.svg" width={16} height={16} alt="" />
              Shipping Method
            </label>
            <CustomSelect
              value={formData.shippingMethod}
              onChange={(val) => updateForm("shippingMethod", val)}
              options={[
                { label: "Select shipping method", value: "" },
                { label: "Standard (5-7 days)", value: "standard" },
                { label: "Express (1-2 days)", value: "express" },
              ]}
            />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-solid border-gray-1000">
          <label className="text-blue-1300 mb-1.5 font-medium text-sm leading-5 flex items-center gap-1.5">
            <Image src="/images/file-icon2.svg" width={16} height={16} alt="" />
            Reason for Order
            <span className="text-red-1300">*</span>
          </label>
          <textarea
            value={formData.reason}
            onChange={(e) => updateForm("reason", e.target.value)}
            className="text-gray-1200 placeholder:text-gray-1200 h-20 font-normal text-sm leading-5 px-3.5 py-2.5 bg-white-1100 border border-solid border-gray-1000 rounded-md w-full"
            placeholder="e.g., Previous card lost, First-time issue, Card damaged..."
          />
          <p className="text-gray-1200 font-normal text-xs leading-4 mt-1">
            Required: Explain why this card is being manually ordered
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between bg-gray-1600/50 border border-solid border-gray-1000 rounded-lg p-4">
          <div>
            <h4 className="text-blue-1300 font-medium text-sm leading-5 mb-[3.5px]">
              Waive Issuance Fee
            </h4>
            <p className="text-gray-1200 font-normal text-xs leading-4">
              Override the standard card issuance fee
            </p>
          </div>
          <ToggleSwitch
            checked={formData.waiveIssuanceFee}
            onChange={(v) => updateForm("waiveIssuanceFee", v)}
          />
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-lg bg-red-2300 border border-solid border-red-2200/20 px-3 py-2">
          <span className="flex items-center justify-center w-6 h-6">
            <Image src="/images/warning.svg" width={20} height={22} alt="" />
          </span>
          <p className="text-red-2200 font-medium text-sm leading-5">
            <span className="font-bold">Requires 4-Eyes Approval: </span> This order
            will be sent to a supervisor for final confirmation.
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

export default OrderPhysicalCardModal;