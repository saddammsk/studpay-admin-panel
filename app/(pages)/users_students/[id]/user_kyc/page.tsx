"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import ProgressBar from "@/app/components/ProgressBar";
import RiskScoringCard from "@/app/components/UsersStudent/Kyc/RiskScoringCard";
import { useKycStore } from "@/app/store/zustand/usekycStore";
import type { DocumentTab, TimelineEntryStatus, WatchlistItemStatus } from "@/app/store/zustand/usekycStore";

const tabConfig: { key: DocumentTab; label: string }[] = [
  { key: "passport", label: "Passport / ID" },
  { key: "poa", label: "Proof of Address" },
  { key: "selfie", label: "Selfie" },
];

const timelineStatusConfig: Record<
  TimelineEntryStatus,
  { color: string; bg: string; border: string; icon: string }
> = {
  PENDING: { color: "text-yellow-1100", bg: "bg-yellow-1100/10", border: "border-yellow-1100/20", icon: "/images/clock-yellow.svg" },
  APPROVED: { color: "text-yellow-1100", bg: "bg-yellow-1100/10", border: "border-yellow-1100/20", icon: "/icons/check-dark.svg" },
  UPDATED: { color: "text-yellow-1100", bg: "bg-yellow-1100/10", border: "border-yellow-1100/20", icon: "/images/warning-yellow.svg" },
  REJECTED: { color: "text-red-1300", bg: "bg-red-1300/10", border: "border-red-1300/20", icon: "/icons/cross-round-red.svg" },
  SUBMITTED: { color: "text-blue-1300", bg: "bg-blue-1300/10", border: "border-blue-1300/20", icon: "/icons/submitted-icon.svg" },
  WATCHLIST_CLEAR: { color: "text-green53", bg: "bg-green53/10", border: "border-green53/20", icon: "/icons/check-dark.svg" },
  OVERRIDE: { color: "text-yellow-1100", bg: "bg-yellow-1100/10", border: "border-yellow-1100/20", icon: "/images/warning-yellow.svg" },
};

const watchlistStatusConfig: Record<
  WatchlistItemStatus,
  { label: string; color: string; bg: string; border: string; containerBg: string; containerBorder: string; icon: string }
> = {
  clear: { label: "CLEAR", color: "text-green53", bg: "bg-green53/10", border: "border-green53/20", containerBg: "bg-green53/5", containerBorder: "border-green53/20", icon: "/icons/check-dark.svg" },
  pending: { label: "PENDING", color: "text-yellow-1100", bg: "bg-yellow-1100/10", border: "border-yellow-1100/20", containerBg: "bg-yellow-1100/5", containerBorder: "border-yellow-1100/20", icon: "/images/clock-yellow.svg" },
  hit: { label: "HIT", color: "text-red-1300", bg: "bg-red-1300/10", border: "border-red-1300/20", containerBg: "bg-red-1300/5", containerBorder: "border-red-1300/20", icon: "/icons/cross-round-red.svg" },
};

const UsersStudentsKycPage = () => {
  const {
    activeDocumentTab,
    zoomLevel,
    kycStatus,
    userId,
    firstApprovalBy,
    watchlistItems,
    isRescreening,
    timelineEntries,
    auditLog,
    biometric,
    personalInfo,
    ocrFields,
    isOverrideModalOpen,
    overrideReason,
    isRejectModalOpen,
    rejectReason,
    isApproveModalOpen,
    setActiveDocumentTab,
    zoomIn,
    zoomOut,
    resetZoom,
    rescreenWatchlist,
    openOverrideModal,
    closeOverrideModal,
    setOverrideReason,
    confirmOverride,
    openRejectModal,
    closeRejectModal,
    setRejectReason,
    confirmReject,
    openApproveModal,
    closeApproveModal,
    confirmApprove,
    toggleOcrValidation,
  } = useKycStore();

  const validatedCount = ocrFields.filter((f) => f.validated).length;

  return (
    <div className="font-inter">
      <div className="4xl:pb-20 md:pb-37.5 sm:pb-50">
        <div className="flex 4xl:flex-row flex-col gap-6">
          <div className="5xl:max-w-157.5 4xl:max-w-125 max-w-full w-full">
            <div className="bg-white border border-solid border-gray-3600 rounded-lg">
              <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between border-b border-solid border-gray-3600 px-4 py-5.5">
                <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                  <Image src="/images/file-icon2.svg" width={16} height={16} alt="" />
                  Document Viewer
                </h4>
                <div className="flex items-center gap-1">
                  <ul className="flex items-center gap-2">
                    <li>
                      <button onClick={zoomOut} className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-2000 rounded transition-colors">
                        <Image src="/icons/minus-zoom.svg" width={16} height={16} alt="" />
                      </button>
                    </li>
                    <li>
                      <span className="text-blue-1300 text-xs text-center leading-4 font-normal font-JetBrainsMono block sm:w-12 w-11">
                        {zoomLevel}%
                      </span>
                    </li>
                    <li>
                      <button onClick={zoomIn} className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-2000 rounded transition-colors">
                        <Image src="/icons/zoom-icon.svg" width={16} height={16} alt="" />
                      </button>
                    </li>
                  </ul>
                  <button onClick={resetZoom} className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-gray-2000 rounded transition-colors">
                    <Image src="/icons/refresh-icon.svg" width={16} height={16} alt="" />
                  </button>
                  <Link href="#" className="flex items-center justify-center w-8 h-8">
                    <Image src="/images/download-black.svg" width={16} height={16} alt="" />
                  </Link>
                </div>
              </div>
              <div className="border-b border-solid border-gray-3600">
                <ul className="flex items-center">
                  {tabConfig.map((tab) => (
                    <li key={tab.key}>
                      <button
                        onClick={() => setActiveDocumentTab(tab.key)}
                        className={`text-xs leading-4 font-normal px-4 py-2.5 border-b-2 border-solid flex items-center justify-center cursor-pointer transition-colors ${
                          activeDocumentTab === tab.key
                            ? "text-blue-1300 border-blue-1300"
                            : "text-gray-1900 border-transparent hover:text-blue-1300"
                        }`}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green53 font-bold text-xs leading-4 h-5.5 px-2.5 border border-solid border-green53/10 bg-green53/20 rounded-full inline-flex items-center justify-center mt-0.5">
                    Verified
                  </span>
                  <p className="text-gray-1900 text-xs leading-4 font-normal">Uploaded: Jan 16, 2024 at 14:32</p>
                </div>
                <div
                  className="overflow-auto rounded-lg"
                  style={{ maxHeight: "400px" }}
                >
                  <Image
                    src="/images/Verified-file.jpg"
                    width={598}
                    height={280}
                    alt=""
                    className="rounded-lg transition-transform duration-300 origin-top-left"
                    style={{ transform: `scale(${zoomLevel / 100})`, width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-solid border-gray-3600 rounded-lg p-4 mt-6">
              <div className="flex items-center justify-between">
                <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                  <Image src="/images/user-icon2.svg" width={16} height={16} alt="" />
                  Biometric Match
                </h4>
                <p className="text-gray-1900 text-xs leading-4 font-normal">Last: {biometric.lastChecked}</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-center">
                  <span className="bg-gray-2000 border-2 border-solid border-gray-3600 rounded-lg flex items-center justify-center w-16 h-20 mx-auto">
                    <Image src="/icons/user-gray.svg" width={32} height={32} alt="" />
                  </span>
                  <p className="text-gray-1900 text-xs leading-4 capitalize font-normal mt-1.5">ID Photo</p>
                </div>
                <div className="relative flex flex-1 w-full items-center justify-center flex-col">
                  <span className="absolute top-3.5 left-0 bg-gray-3600 h-0.5 w-full"></span>
                  <span className="relative z-50 flex items-center justify-center w-8 h-8 bg-green53/10 rounded-full">
                    <Image src="/icons/check-dark.svg" width={16} height={16} alt="" />
                  </span>
                  <h4 className="text-2xl leading-8 font-bold text-green53">{biometric.matchPercentage}%</h4>
                  <p className="text-xs leading-4 font-normal text-green53">High Match</p>
                </div>
                <div className="text-center">
                  <span className="bg-gray-2000 border-2 border-solid border-gray-3600 rounded-lg flex items-center justify-center w-16 h-20 mx-auto">
                    <Image src="/icons/camera.svg" width={32} height={32} alt="" />
                  </span>
                  <p className="text-gray-1900 text-xs leading-4 capitalize font-normal mt-1.5">Liveness</p>
                </div>
              </div>
              <div className="mt-4">
                <ProgressBar value={biometric.matchPercentage} className="h-2" barColor="bg-green53" bgColor="bg-gray-2000" />
              </div>
            </div>

            <div className="bg-white border border-solid border-gray-3600 rounded-lg p-4 mt-6">
              <h4 className="text-blue-1300 text-sm leading-5 font-bold">Personal Information</h4>
              <ul className="grid sm:grid-cols-3 grid-cols-2 gap-x-6 gap-y-4 mt-4">
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/gender-user-icon.svg" width={14} height={14} alt="" />
                    Gender
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.gender}</h4>
                </li>
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/heart-icon.svg" width={14} height={14} alt="" />
                    Marital Status
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.maritalStatus}</h4>
                </li>
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/bag-icon.svg" width={14} height={14} alt="" />
                    Profession
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.profession}</h4>
                </li>
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/income-wealth.svg" width={14} height={14} alt="" />
                    Source of Wealth
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.sourceOfWealth}</h4>
                </li>
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/employer.svg" width={14} height={14} alt="" />
                    Employer
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.employer}</h4>
                </li>
                <li>
                  <span className="flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal">
                    <Image src="/icons/nationality-icon.svg" width={14} height={14} alt="" />
                    Nationality
                  </span>
                  <h4 className="text-blue-1300 text-sm leading-5 font-normal">{personalInfo.nationality}</h4>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-solid border-gray-3600 rounded-lg mt-6">
              <div className="flex items-center justify-between border-b border-solid border-gray-3600 px-4 py-5.5">
                <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                  <Image src="/icons/ocr-icon.svg" width={16} height={16} alt="" />
                  OCR Data Extraction
                </h4>
                <span className="text-blue-1300 text-xs leading-4 font-bold inline-flex items-center justify-center border border-solid border-gray-3600 rounded-full h-5.5 px-2.5">
                  {validatedCount}/{ocrFields.length} Validated
                </span>
              </div>
              {ocrFields.map((field) => (
                <div key={field.id} className="border-b border-solid border-gray-3600 flex items-start gap-3 p-3 last:border-b-0">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-gray-1900 text-xs leading-4 font-normal uppercase">{field.label}</p>
                      <span
                        className={`px-1.5 h-4.25 inline-flex items-center pt-0.5 justify-center rounded-full text-[10px] font-bold leading-3.75 border border-solid ${
                          field.validated
                            ? "bg-green-1300/10 border-lightgreen15 text-green-1800"
                            : "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100"
                        }`}
                      >
                        {field.validated ? "Validated" : "Pending"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase">System Extracted</p>
                        <h4 className="text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase">{field.extracted}</h4>
                      </div>
                      <div>
                        <p className="text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase">User Input</p>
                        <h4 className="text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono">{field.userInput}</h4>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleOcrValidation(field.id)}
                    className="w-10 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-2000 rounded transition-colors"
                  >
                    <Image
                      src={field.validated ? "/icons/check-icon.svg" : "/icons/check-dark.svg"}
                      width={16}
                      height={16}
                      alt=""
                      className={field.validated ? "" : "opacity-30"}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl">
                <RiskScoringCard />
              </div>
              <div className="bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                    <Image src="/icons/Watchlist.svg" width={16} height={16} alt="" />
                    Watchlist Screening
                  </h4>
                  <button
                    onClick={rescreenWatchlist}
                    disabled={isRescreening}
                    className="inline-flex items-center justify-center text-blue-1300 text-xs leading-4 font-normal gap-3.5 bg-gray-1500 border border-solid border-gray-3600 rounded-md h-7 px-3 cursor-pointer hover:bg-gray-2000 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Image
                      src="/icons/Re-screen.svg"
                      width={16}
                      height={16}
                      alt=""
                      className={isRescreening ? "animate-spin" : ""}
                    />
                    {isRescreening ? "Screening..." : "Re-screen"}
                  </button>
                </div>
                <div className="mt-4 pb-4">
                  {watchlistItems.map((item) => {
                    const config = watchlistStatusConfig[item.status];
                    return (
                      <div
                        key={item.id}
                        className={`mb-3 last:mb-0 flex items-start justify-between ${config.containerBg} border border-solid ${config.containerBorder} rounded-lg p-3 transition-all duration-300`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-4 h-4">
                            <Image src={config.icon} width={16} height={16} alt="" />
                          </span>
                          <div>
                            <h4 className="text-blue-1300 text-sm leading-5 font-normal mb-0.5">{item.name}</h4>
                            <p className="text-gray-1900 text-xs leading-4 font-normal">
                              Source: {item.source} • Last checked: {item.lastChecked}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`${config.color} font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 ${config.bg} border border-solid ${config.border} rounded-full whitespace-nowrap`}
                        >
                          {config.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-3 border-t border-solid border-gray-3600">
                  <p className="text-gray-1900 text-[10px] leading-3.75 font-normal">
                    Screening against OFAC, UN, EU, UK HMT sanctions lists and global PEP databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl">
              <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                <Image src="/icons/timeline.svg" width={16} height={16} alt="" />
                KYC Status Timeline
              </h4>
              <div className="mt-4 relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-3600 w-px h-[98%] flex items-center"></span>
                {timelineEntries.map((entry) => {
                  const config = timelineStatusConfig[entry.status];
                  return (
                    <div key={entry.id} className="flex items-start gap-2 mb-4 last:mb-0 relative z-50">
                      <span className="bg-white w-4 h-4 rounded-full flex items-center justify-center">
                        <Image src={config.icon} width={16} height={16} alt="" />
                      </span>
                      <div className="flex-1 w-full">
                        <ul className="flex items-center gap-2 mb-1">
                          <li>
                            <span
                              className={`${config.color} font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 ${config.bg} border border-solid ${config.border} rounded-full`}
                            >
                              {entry.status}
                            </span>
                          </li>
                          <li>
                            <p className="text-gray-1900 text-xs leading-4 font-normal">{entry.timestamp}</p>
                          </li>
                        </ul>
                        <h4 className="text-blue-1300 text-sm leading-5 font-normal">{entry.title}</h4>
                        {entry.author && (
                          <p className="text-gray-1900 text-xs leading-4 font-normal mt-1">by {entry.author}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 bg-white border border-solid border-gray-3600 rounded-lg shadow-4xl">
              <div className="border-b border-gray-3600 p-4">
                <h4 className="text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2">
                  <Image src="/icons/file-board.svg" width={16} height={16} alt="" />
                  Audit Log
                </h4>
              </div>
              <div className="w-full overflow-auto">
                <table className="2xl:w-full w-300">
                  <thead className="border-b border-gray-3600">
                    <tr>
                      <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Admin</th>
                      <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Action</th>
                      <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Notes</th>
                      <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLog.map((entry) => (
                      <tr
                        key={entry.id}
                        className="border-b border-gray-3600 hover:bg-gray-2000/50 transition last:border-b-0"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-1300 text-[10px] w-6 h-6 font-normal leading-5 inline-flex items-center justify-center bg-blue-1300/10 rounded-full">
                              {entry.admin.initials}
                            </span>
                            <h4 className="text-blue-1300 flex-1 w-full text-sm leading-5 font-normal">{entry.admin.name}</h4>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-gray-1900 text-xs leading-4 font-normal font-JetBrainsMono uppercase">
                            {entry.action}
                          </p>
                        </td>
                        <td className="p-4">
                          <p className="text-gray-1900 text-xs leading-4 font-normal">{entry.notes}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-gray-1900 text-xs leading-4 font-normal">{entry.timestamp}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white z-50 fixed bottom-0 right-0 xl:w-[calc(100%-287px)] lg:w-[calc(100%-250px)] w-full ml-auto sm:flex hidden 4xl:flex-row flex-col 4xl:gap-0 gap-4 items-center justify-between shadow-7xl border-t border-solid border-gray-3600 py-4 4xl:px-17.5 px-4">
        <div className="flex items-center gap-2">
          <span className="bg-blue-1300/10 flex items-center justify-center w-10 h-10 rounded-full">
            <Image src="/icons/Watchlist.svg" width={20} height={20} alt="" />
          </span>
          <div className="flex-1 flex items-center gap-4 w-full">
            <div>
              <h4 className="text-blue-1300 font-bold text-sm leading-5">KYC Action Hub</h4>
              <p className="text-gray-1900 font-normal text-xs leading-4">User ID: {userId}</p>
            </div>
            {firstApprovalBy && (
              <span className="text-blue-1300 font-bold text-xs leading-4 inline-flex items-center justify-center gap-1.5 h-6.5 border border-solid border-gray-3600 rounded-full px-2">
                <Image src="/images/user-black.svg" width={12} height={12} alt="" />
                First approval by: {firstApprovalBy}
              </span>
            )}
            {kycStatus === "approved" && (
              <span className="text-green53 font-bold text-xs leading-4 inline-flex items-center justify-center gap-1.5 h-6.5 border border-solid border-green53/20 bg-green53/10 rounded-full px-2">
                KYC Approved
              </span>
            )}
            {kycStatus === "rejected" && (
              <span className="text-red-1300 font-bold text-xs leading-4 inline-flex items-center justify-center gap-1.5 h-6.5 border border-solid border-red-1300/20 bg-red-1300/10 rounded-full px-2">
                KYC Rejected
              </span>
            )}
          </div>
        </div>
        <ul className="flex md:flex-nowrap flex-wrap justify-center items-center gap-3">
          <li>
            <button
              onClick={openOverrideModal}
              disabled={kycStatus !== "pending"}
              className="inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-yellow-1100/30 text-yellow-1100 text-sm leading-5 bg-gray-1500 rounded-md cursor-pointer hover:bg-yellow-1100/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image src="/images/warning-yellow.svg" width={16} height={16} alt="" />
              Override Status
            </button>
          </li>
          <li>
            <button
              onClick={openRejectModal}
              disabled={kycStatus !== "pending"}
              className="inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-red-1300/30 text-red-1300 text-sm leading-5 bg-gray-1500 rounded-md cursor-pointer hover:bg-red-1300/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image src="/icons/cross-round-red.svg" width={16} height={16} alt="" />
              Reject & Request Re-upload
            </button>
          </li>
          <li>
            <button
              onClick={openApproveModal}
              disabled={kycStatus !== "pending"}
              className="inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-green53 text-white text-sm leading-5 bg-green53 rounded-md cursor-pointer hover:bg-green53/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image src="/icons/check-dark.svg" width={16} height={16} alt="" className="brightness-10000" />
              Approve Identity
              <span className="inline-flex items-center justify-center text-white text-[10px] leading-5 font-bold bg-white/20 rounded-full h-[26px] px-2">
                4-Eyes
              </span>
            </button>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={isOverrideModalOpen}
        onClose={closeOverrideModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link onClick={closeOverrideModal} href="#" className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-yellow-1100/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image src="/images/warning-yellow.svg" width={20} height={20} alt="" />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">Override KYC Status</h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-3">
            This will override the current KYC status and mark the identity as approved. A reason is required for audit compliance.
          </p>
          <textarea
            className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900 border border-solid border-gray-3600 rounded-md shadow-59xl w-full h-25 mt-4 resize-none"
            placeholder="Enter override reason..."
            value={overrideReason}
            onChange={(e) => setOverrideReason(e.target.value)}
          />
          <ul className="flex items-center justify-end gap-3 mt-4">
            <li>
              <button
                onClick={closeOverrideModal}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmOverride}
                disabled={!overrideReason.trim()}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-yellow-1100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-yellow-1100 border-solid border-yellow-1100 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image src="/images/warning-yellow.svg" width={14} height={14} alt="" className="brightness-10000" />
                Confirm Override
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isRejectModalOpen}
        onClose={closeRejectModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link onClick={closeRejectModal} href="#" className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-red-1300/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image src="/icons/cross-round-red.svg" width={20} height={20} alt="" />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">Reject & Request Re-upload</h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-3">
            This will reject the current KYC submission and notify the user to re-upload documents. Please provide a reason.
          </p>
          <textarea
            className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900 border border-solid border-gray-3600 rounded-md shadow-59xl w-full h-25 mt-4 resize-none"
            placeholder="Enter rejection reason..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          />
          <ul className="flex items-center justify-end gap-3 mt-4">
            <li>
              <button
                onClick={closeRejectModal}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmReject}
                disabled={!rejectReason.trim()}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red-1300/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red-1300 border-solid border-red-1300 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image src="/icons/cross-round-red.svg" width={14} height={14} alt="" className="brightness-10000" />
                Confirm Rejection
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isApproveModalOpen}
        onClose={closeApproveModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link onClick={closeApproveModal} href="#" className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-green53/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image src="/icons/check-dark.svg" width={20} height={20} alt="" />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">Approve Identity</h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-3">
            You are about to grant <strong className="text-blue-1300 font-semibold">second approval (4-Eyes)</strong> for this identity verification. This will complete the KYC process.
          </p>
          <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-1900 text-xs leading-4 font-normal">Biometric Match</span>
              <span className="text-green53 font-bold text-xs">{biometric.matchPercentage}%</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-1900 text-xs leading-4 font-normal">Watchlist Screening</span>
              <span className="text-green53 font-bold text-xs">
                {watchlistItems.filter((w) => w.status === "clear").length}/{watchlistItems.length} Clear
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-1900 text-xs leading-4 font-normal">OCR Validation</span>
              <span className="text-blue-1300 font-bold text-xs">{validatedCount}/{ocrFields.length} Validated</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-1900 text-xs leading-4 font-normal">First Approval</span>
              <span className="text-blue-1300 font-bold text-xs">{firstApprovalBy}</span>
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeApproveModal}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmApprove}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-green53/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-green53 border-solid border-green53 h-10"
              >
                <Image src="/icons/check-dark.svg" width={14} height={14} alt="" className="brightness-10000" />
                Confirm Approval
                <span className="inline-flex items-center justify-center text-white text-[10px] leading-5 font-bold bg-white/20 rounded-full h-5 px-1.5">
                  4-Eyes
                </span>
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsKycPage;