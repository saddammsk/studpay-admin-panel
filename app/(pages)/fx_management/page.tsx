"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import FxManagementTable from "@/app/components/FxManagementTable";
import { useFxStore } from "@/app/store/zustand/useFxManagementStore";

const rateCards = [
  {
    pair: "EUR/USD",
    from: "EUR",
    to: "USD",
    marketRate: "1.0847",
    markup: "+0.65%",
    finalRate: "1.0917",
    change: "+0.23%",
    barColor: "bg-green-1600",
    badgeBg: "bg-green-1600/10",
    badgeText: "text-green-1600",
    arrowSrc: "/images/price-arrow-green.svg",
  },
  {
    pair: "EUR/PKR",
    from: "EUR",
    to: "PKR",
    marketRate: "302.4500",
    markup: "+1.20%",
    finalRate: "306.0800",
    change: "-0.23%",
    barColor: "bg-red-1300",
    badgeBg: "bg-red-1300/10",
    badgeText: "text-red-1300",
    arrowSrc: "/images/price-arrow-red.svg",
  },
  {
    pair: "USD/GBP",
    from: "USD",
    to: "GBP",
    marketRate: "0.7923",
    markup: "+0.45%",
    finalRate: "0.7959",
    change: "+0.15%",
    barColor: "bg-green-1600",
    badgeBg: "bg-green-1600/10",
    badgeText: "text-green-1600",
    arrowSrc: "/images/price-arrow-green.svg",
  },
];

const CORRIDOR_OPTIONS = [
  { label: "EUR/USD", value: "EUR/USD" },
  { label: "EUR/PKR", value: "EUR/PKR" },
  { label: "USD/GBP", value: "USD/GBP" },
  { label: "USD/PKR", value: "USD/PKR" },
  { label: "GBP/EUR", value: "GBP/EUR" },
  { label: "EUR/AED", value: "EUR/AED" },
  { label: "USD/CNY", value: "USD/CNY" },
  { label: "EUR/CNY", value: "EUR/CNY" },
];

const DURATION_OPTIONS = ["1h", "4h", "12h", "24h", "Until manual reset"];

const FXManagementPage = () => {
  const {
    isEmergencyFreezeModalOpen,
    isRateOverrideModalOpen,
    openModal,
    closeModal,
    overrideForm,
    overrideErrors,
    setOverrideField,
    submitOverride,
  } = useFxStore();

  return (
    <div className="font-inter">

      {/* ── Mobile Header ── */}
      <ul className="md:hidden flex items-center justify-end mb-4 gap-1">
        <li>
          <CustomSelect
            className="h-9! w-34! text-gray-1900!"
            options={[
              { label: "Last 30 days", value: "Last 30 days" },
              { label: "Last 7 days", value: "Last 7 days" },
            ]}
          />
        </li>
        <li>
          <Button
            onClick={() => {}}
            iconSrc="/images/plus-icon.svg"
            label="New Application"
            className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
          />
        </li>
      </ul>

      {/* ── Real-Time Rate Monitor ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-blue-1300 text-lg leading-7 font-bold">Real-Time Rate Monitor</h4>
          <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2">
            <span className="bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center" />
            Live Rates
          </p>
        </div>

        <div className="grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {rateCards.map((card) => (
            <div
              key={card.pair}
              className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl"
            >
              <div className="flex items-start justify-between w-full mb-3">
                <div className="flex items-center gap-2">
                  <ul className="flex items-center">
                    <li>
                      <span className="inline-flex items-center justify-center text-blue-2200 text-xs font-bold leading-4 uppercase bg-gray1700 rounded-full w-8 h-8">
                        {card.from}
                      </span>
                    </li>
                    <li className="-ml-2">
                      <span className="inline-flex items-center justify-center text-blue-1300 text-xs font-bold leading-4 uppercase bg-gray1700 border-2 border-solid border-white rounded-full w-8 h-8">
                        {card.to}
                      </span>
                    </li>
                  </ul>
                  <h4 className="text-blue-1300 text-base leading-6 font-bold">{card.pair}</h4>
                </div>
                <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2">
                  <span className="bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center" />
                  Live
                </p>
              </div>

              <div className="mb-6">
                <ul className="grid grid-cols-3 gap-3">
                  <li>
                    <span className="block text-xs leading-4 font-medium text-gray-1900 uppercase">Market Rate</span>
                    <h4 className="text-blue-1300 text-lg leading-7 font-bold">{card.marketRate}</h4>
                  </li>
                  <li>
                    <span className="block text-xs leading-4 font-medium text-gray-1900 uppercase">Markup</span>
                    <h4 className="text-blue-2200 text-lg leading-7 font-bold">{card.markup}</h4>
                  </li>
                  <li>
                    <span className="block text-xs leading-4 font-medium text-gray-1900 uppercase">Final Rate</span>
                    <h4 className="text-blue-1300 text-lg leading-7 font-bold">{card.finalRate}</h4>
                  </li>
                </ul>
              </div>

              <span className={`${card.barColor} w-21.5 h-px flex items-center`} />
              <div className="flex items-center justify-end mt-1">
                <span className={`inline-flex items-center gap-1 ${card.badgeBg} rounded-full h-6 px-2`}>
                  <Image src={card.arrowSrc} width={12} height={12} alt="" />
                  <p className={`flex items-center gap-1 ${card.badgeText} text-xs leading-4 font-medium`}>
                    {card.change} <span className="text-gray-1900">24h</span>
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FX Volume & Revenue Analytics ── */}
      <div className="mt-6">
        <h4 className="text-blue-1300 text-lg leading-7 font-bold mb-4">FX Volume & Revenue Analytics</h4>
        <div className="grid 4xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
            <div className="flex items-center justify-between">
              <div className="bg-gray1700 w-10 h-10 flex items-center justify-center rounded-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.66669V18.3334" stroke="#2463EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.1667 4.16669H7.91667C7.14312 4.16669 6.40125 4.47398 5.85427 5.02096C5.30729 5.56794 5 6.30981 5 7.08335C5 7.8569 5.30729 8.59877 5.85427 9.14575C6.40125 9.69273 7.14312 10 7.91667 10H12.0833C12.8569 10 13.5987 10.3073 14.1457 10.8543C14.6927 11.4013 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.5261 12.8569 15.8334 12.0833 15.8334H5" stroke="#2463EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2">
                <Image src="/images/price-arrow-green.svg" width={12} height={12} alt="" />
                <p className="text-green-1600 text-xs leading-4 font-medium">+12.5%</p>
              </span>
            </div>
            <div className="mt-3">
              <p className="text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase">Total FX Volume (24h)</p>
              <h4 className="text-blue-1300 text-2xl leading-8 font-bold">$2.4M</h4>
              <p className="text-gray-1900 text-xs leading-4 font-normal mt-1">4,328 transactions</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-lightgreen17 p-5 shadow-4xl">
            <div className="flex items-center justify-between">
              <div className="bg-yellow1800 w-10 h-10 flex items-center justify-center rounded-lg">
                <Image src="/images/price-arrow-green.svg" width={20} height={20} alt="" />
              </div>
              <span className="inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2">
                <Image src="/images/price-arrow-green.svg" width={12} height={12} alt="" />
                <p className="text-green-1600 text-xs leading-4 font-medium">+8.2%</p>
              </span>
            </div>
            <div className="mt-3">
              <p className="text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase">Revenue from Spreads</p>
              <h4 className="text-blue-1300 text-2xl leading-8 font-bold">$34,892</h4>
              <p className="text-gray-1900 text-xs leading-4 font-normal mt-1">1.45% avg margin</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
            <div className="flex items-center justify-between">
              <div className="bg-gray1700 w-10 h-10 flex items-center justify-center rounded-lg">
                <Image src="/icons/trade-arrow.svg" width={20} height={20} alt="" />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase">Most Traded Pair</p>
              <h4 className="text-blue-1300 text-2xl leading-8 font-bold">EUR/PKR</h4>
              <p className="text-gray-1900 text-xs leading-4 font-normal mt-1">1,247 trades today</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-red-1300 p-5 shadow-4xl">
            <div className="flex items-center justify-between gap-3">
              <div className="bg-yellow1800 w-10 h-10 flex items-center justify-center rounded-lg">
                <Image src="/images/warning.svg" width={20} height={20} alt="" />
              </div>
              <div className="flex-1 w-full">
                <h4 className="text-blue-1300 text-sm leading-5 font-medium">Rate Anomalies</h4>
                <p className="text-red-1300 text-xs leading-4 font-normal">1 active alert</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between bg-yellow1800 rounded-lg p-2">
              <h4 className="text-blue-1300 text-sm leading-5 font-normal uppercase">EUR/PKR</h4>
              <p className="text-red-1300 text-xs leading-4 font-medium">+5.80%</p>
              <p className="text-gray-1900 text-xs leading-4 font-normal">2 min ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FX Table ── */}
      <FxManagementTable />

      {/* ── Critical Controls ── */}
      <div className="mt-6 bg-white border border-solid border-gray-3600 rounded-lg shadow-4xl p-5">
        <h4 className="text-blue-1300 text-lg leading-7 font-bold flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 10.8331C16.6663 14.9997 13.7497 17.0831 10.283 18.2914C10.1015 18.3529 9.90429 18.35 9.72467 18.2831C6.24967 17.0831 3.33301 14.9997 3.33301 10.8331V4.99972C3.33301 4.77871 3.42081 4.56675 3.57709 4.41047C3.73337 4.25419 3.94533 4.16639 4.16634 4.16639C5.83301 4.16639 7.91634 3.16639 9.36634 1.89972C9.54289 1.74889 9.76747 1.66602 9.99967 1.66602C10.2319 1.66602 10.4565 1.74889 10.633 1.89972C12.0913 3.17472 14.1663 4.16639 15.833 4.16639C16.054 4.16639 16.266 4.25419 16.4223 4.41047C16.5785 4.56675 16.6663 4.77871 16.6663 4.99972V10.8331Z" stroke="#EF4343" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Critical Controls
        </h4>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div className="border border-solid border-gray-3600 bg-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow1800 rounded-lg flex items-center justify-center w-10 h-10">
                <Image src="/images/warning.svg" width={20} height={20} alt="" />
              </span>
              <div>
                <h4 className="text-blue-1300 text-sm leading-5 font-medium">Emergency Rate Freeze</h4>
                <p className="text-gray-1900 text-xs leading-4 font-normal mt-0.5">Immediately halt all FX conversions</p>
              </div>
            </div>
            <button
              onClick={() => openModal("emergencyFreeze")}
              className="flex items-center justify-center h-10 text-white text-sm leading-5 font-medium gap-4 bg-red-1300 hover:bg-red-1300/90 rounded-md w-full transition"
            >
              <Image src="/images/lock-icon.svg" width={20} height={20} alt="" className="brightness-1000" />
              Activate Emergency Freeze
            </button>
          </div>

          <div className="border border-solid border-gray-3600 bg-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow1800 rounded-lg flex items-center justify-center w-10 h-10">
                <Image src="/icons/eyes-yellow.svg" width={20} height={20} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-blue-1300 text-sm leading-5 font-medium">Manual Rate Override</h4>
                <p className="text-gray-1900 text-xs leading-4 font-normal mt-0.5">
                  Set a fixed rate for a specific corridor (4-Eyes Approval Required)
                </p>
              </div>
            </div>
            <button
              onClick={() => openModal("rateOverride")}
              className="group flex items-center justify-center h-10 text-yellow-1100 text-sm leading-5 font-medium gap-4 bg-gray-1500 hover:bg-yellow-1100 hover:text-white border border-solid border-yellow-1100 rounded-md w-full transition"
            >
              <Image src="/icons/lock-yellow.svg" width={20} height={20} alt="" className="group-hover:brightness-10000" />
              Request Rate Override
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isEmergencyFreezeModalOpen}
        onClose={() => closeModal("emergencyFreeze")}
        panelClassName="max-w-[480px] bg-gray-1500 relative md:p-6 p-4"
      >
        <div>
          <h4 className="text-red-1300 font-bold flex items-center gap-2 text-xl leading-6 tracking-[-0.5px]">
            <Image src="/images/warning.svg" width={20} height={20} alt="" />
            Emergency Rate Freeze
          </h4>
          <p className="text-SteelGray text-sm leading-5 mt-1.5">
            This will immediately halt ALL FX conversions across all corridors. This action takes effect instantly.
          </p>
        </div>
        <div className="mt-6 bg-red-1300/5 border border-red-1300/20 rounded-lg p-4 text-sm text-red-1300">
          All pending FX transactions will be queued. Students and partners will be notified automatically.
          This action is logged in the audit trail.
        </div>
        <ul className="grid grid-cols-2 gap-3 mt-6">
          <li>
            <button
              onClick={() => closeModal("emergencyFreeze")}
              className="flex items-center justify-center text-blue-1300 text-sm font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 w-full hover:bg-gray-2000 transition"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => closeModal("emergencyFreeze")}
              className="flex items-center justify-center text-white text-sm font-medium bg-red-1300 border border-solid border-red-1300 rounded-md h-10 w-full hover:bg-red-1300/90 transition"
            >
              Confirm Emergency Freeze
            </button>
          </li>
        </ul>
      </Modal>

      <Modal
        isOpen={isRateOverrideModalOpen}
        onClose={() => closeModal("rateOverride")}
        panelClassName="max-w-[480px] bg-gray-1500 relative md:p-6 p-4"
      >
        <div>
          <h4 className="text-yellow-1100 font-bold flex items-center gap-2 text-xl leading-6 tracking-[-0.5px]">
            <Image src="/icons/eyes-yellow.svg" width={20} height={20} alt="" />
            Manual Rate Override
          </h4>
          <p className="text-SteelGray text-sm leading-5 mt-1.5">
            Set a fixed rate for a specific corridor. Requires 4-Eyes approval before activation.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label className="text-blue-1300 text-sm font-medium block mb-1.5">Corridor</label>
            <CustomSelect
              className="w-full bg-gray-1500 border border-gray-3600"
              value={overrideForm.pair}
              onChange={(value: string) => setOverrideField("pair", value)}
              options={CORRIDOR_OPTIONS}
            />
          </div>
          <div>
            <label className="text-blue-1300 text-sm font-medium block mb-1.5">
              Override Rate <span className="text-red-1300">*</span>
            </label>
            <input
              type="number"
              min="0"
              step="0.0001"
              value={overrideForm.rate}
              onChange={(e) => setOverrideField("rate", e.target.value)}
              placeholder="0.0000"
              className={`text-sm text-blue-1300 placeholder:text-SteelGray px-3.5 h-10 bg-gray-1500 border rounded-md w-full outline-0 ${
                overrideErrors.rate ? "border-red-1300" : "border-gray-3600"
              }`}
            />
            {overrideErrors.rate && (
              <p className="text-red-1300 text-xs mt-1">{overrideErrors.rate}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="text-blue-1300 text-sm font-medium block mb-1.5">Duration</label>
          <div className="flex gap-2 flex-wrap">
            {DURATION_OPTIONS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setOverrideField("duration", d)}
                className={`flex-1 h-9 rounded-md border text-xs font-medium transition ${
                  overrideForm.duration === d
                    ? "bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100"
                    : "bg-gray-1500 border-gray-3600 text-SteelGray hover:bg-gray-2000"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="text-blue-1300 text-sm font-medium block mb-1.5">
            Reason <span className="text-red-1300">*</span>
          </label>
          <textarea
            value={overrideForm.reason}
            onChange={(e) => setOverrideField("reason", e.target.value)}
            placeholder="Explain the reason for this rate override..."
            className={`text-sm text-blue-1300 placeholder:text-SteelGray px-3.5 py-2 bg-gray-1500 border rounded-md w-full outline-0 h-24 resize-none ${
              overrideErrors.reason ? "border-red-1300" : "border-gray-3600"
            }`}
          />
          {overrideErrors.reason && (
            <p className="text-red-1300 text-xs mt-1">{overrideErrors.reason}</p>
          )}
        </div>

        <div className="mt-4 bg-yellow-1100/5 border border-yellow-1100/20 rounded-lg p-3 flex items-center gap-2">
          <span className="text-yellow-1100 whitespace-nowrap text-xs bg-yellow-1100/10 border border-yellow-1100/20 rounded-full h-5.5 px-2 inline-flex items-center">
            4-Eyes
          </span>
          <p className="text-SteelGray text-xs">
            A second admin must approve this override before it takes effect.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 mt-6">
          <li>
            <button
              onClick={() => closeModal("rateOverride")}
              className="flex items-center justify-center text-blue-1300 text-sm font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 w-full hover:bg-gray-2000 transition"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => submitOverride()}
              className="group flex items-center justify-center gap-2 text-yellow-1100 text-sm font-medium bg-yellow-1100/10 border border-solid border-yellow-1100/30 rounded-md h-10 w-full hover:bg-yellow-1100 hover:text-white transition"
            >
              <Image src="/icons/lock-yellow.svg" width={14} height={14} alt="" className="group-hover:brightness-10000" />
              Request Override
            </button>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default FXManagementPage;