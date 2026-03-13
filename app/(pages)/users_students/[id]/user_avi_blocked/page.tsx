"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import AviMonthScheduleTable from "@/app/components/UsersStudent/AviMonthScheduleTable";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import { useAviDossierStore } from "@/app/store/zustand/useAviDossierStore";
import type { DocumentStatus } from "@/app/store/zustand/useAviDossierStore";

const statusConfig: Record<
  DocumentStatus,
  { textColor: string; borderColor: string; bgColor: string; dotColor: string }
> = {
  Approved: {
    textColor: "text-green53",
    borderColor: "border-green53/20",
    bgColor: "bg-green53/10",
    dotColor: "bg-green53",
  },
  "Action Required": {
    textColor: "text-yellow-1100",
    borderColor: "border-yellow-1100/20",
    bgColor: "bg-yellow-1100/10",
    dotColor: "bg-yellow-1100",
  },
  Missing: {
    textColor: "text-red2100",
    borderColor: "border-red2100/20",
    bgColor: "bg-red2100/10",
    dotColor: "bg-red2100",
  },
};

const UsersStudentsPage = () => {
  const {
    student,
    summaryCards,
    documents,
    timeline,
    releasedAmount,
    remainingAmount,
    isRejectModalOpen,
    rejectionReason,
    openRejectModal,
    closeRejectModal,
    setRejectionReason,
    confirmRejection,
  } = useAviDossierStore();

  return (
    <div className="font-inter">
      <div className="grid 5xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-solid border-gray-3600 shadow-4xl rounded-lg p-4"
          >
            <div className="flex items-center justify-between max-w-68.5 w-full">
              <div>
                <span className="text-gray-1900 font-inter font-normal text-xs leading-4 block tracking-[0.3px]">
                  {card.label}
                </span>
                <h4 className="text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 my-1">
                  {card.value}
                </h4>
                <p
                  className={`${card.changeType === "positive" ? "text-green53" : "text-red2100"} font-inter font-medium text-xs leading-4`}
                >
                  {card.change}
                </p>
              </div>
              <span
                className={`flex items-center justify-center rounded-xl w-12 h-12 ${card.iconBg}`}
              >
                <Image src={card.icon} width={24} height={24} alt="" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white flex 4xl:flex-row flex-col 4xl:items-center items-start justify-between border border-solid border-gray-3600 rounded-xl 5xl:p-6 p-4 mt-6 shadow-4xl">
        <div className="flex sm:flex-row flex-col items-center gap-6 4xl:mb-0 mb-6">
          <span className="bg-OxfordBlue2 rounded-xl w-[49.02px] h-14 flex items-center justify-center">
            <Image
              src="/images/shield-icon.svg"
              width={28}
              height={28}
              alt=""
              className="brightness-10000"
            />
          </span>
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-blue-1300 text-xl leading-7 font-semibold">
                {student.name}
              </h4>
              <span className="text-yellow-1100 gap-1.5 font-semibold text-base leading-6 border border-solid border-yellow-1100/20 bg-yellow-1100/10 h-9.5 inline-flex items-center justify-center rounded-full px-3">
                <strong className="bg-yellow-1100 rounded-full w-1.5 h-1.5 flex items-center"></strong>
                {student.statusLabel}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <p className="max-w-23.75 w-full flex-1 text-gray-1900 font-normal text-sm leading-5">
                {student.dossierId}
              </p>
              <span className="bg-gray-3600 rounded-full w-2 h-2 flex items-center"></span>
              <p className="max-w-43.75 w-full flex-1 text-gray-1900 font-normal text-sm leading-5">
                {student.university}
              </p>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col xl:items-center xl:w-auto w-full gap-8">
          <div className="inline-flex items-center bg-lighrgrey36/50 justify-center 5xl:gap-6 xl:gap-3 gap-10 rounded-lg 5xl:py-3 5xl:px-5 p-2.5">
            <div>
              <p className="text-gray-1900 font-medium text-xs leading-4 tracking-[0.3px]">
                Total Blocked
              </p>
              <h3 className="text-blue-1300 font-bold 5xl:text-2xl text-xl leading-8">
                Total {student.totalBlocked}
              </h3>
            </div>
            <span className="bg-gray-3600 w-px h-10 flex items-center justify-center"></span>
            <div>
              <p className="text-gray-1900 font-medium text-xs leading-4 tracking-[0.3px]">
                Monthly Release
              </p>
              <h3 className="text-green53 font-bold 5xl:text-2xl text-xl leading-6">
                {student.monthlyRelease}
              </h3>
            </div>
          </div>
          <ul className="xl:flex grid sm:grid-cols-3 grid-cols-1 items-center gap-2">
            <li>
              <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center">
                <Image
                  src="/images/file-black.svg"
                  alt="file"
                  width={16}
                  height={16}
                />
                Generate Attestation
              </button>
            </li>
            <li>
              <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center">
                <Image
                  src="/images/clock-gray.svg"
                  alt="file"
                  width={16}
                  height={16}
                  className="brightness-0"
                />
                Extend Period
              </button>
            </li>
            <li>
              <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-white font-normal text-sm leading-5 bg-red-1300 hover:bg-red-1300/90 border-solid border-red-1300 h-10 flex items-center justify-center">
                <Image
                  src="/images/refresh-icon.svg"
                  alt="file"
                  width={16}
                  height={16}
                  className="brightness-10000"
                />
                Close & Refund
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex 4xl:flex-row flex-col items-start gap-4 mt-6">
        <div className="4xl:w-[calc(100%-401px)] w-full">
          <div className="bg-white border border-solid border-gray-3600 rounded-lg shadow-4xl px-4 py-6">
            <div>
              <h4 className="text-blue-1300 font-semibold md:text-2xl text-xl leading-6 mb-1.5 tracking-[-0.6px] flex items-center gap-2">
                <Image
                  src="/images/file-black.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                Documents
              </h4>
              <p className="text-gray-1900 font-normal text-sm leading-6">
                Manage and review all required documentation for the AVI dossier
              </p>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
              {documents.map((doc) => {
                const status = statusConfig[doc.status];
                return (
                  <div
                    key={doc.id}
                    className="bg-white xl:max-w-96.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg p-4"
                  >
                    <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`${doc.iconBg} rounded-lg w-10 h-10 flex items-center justify-center`}
                        >
                          <Image
                            src={doc.icon}
                            width={doc.iconBg.includes("green") ? 16 : 20}
                            height={doc.iconBg.includes("green") ? 16 : 20}
                            alt=""
                          />
                        </span>
                        <div className="flex-1 w-full">
                          <h4 className="text-blue-1300 text-base leading-4 font-medium mb-1">
                            {doc.title}
                          </h4>
                          {doc.subtitle && (
                            <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2">
                              <Image
                                src="/images/calendar.svg"
                                width={12}
                                height={12}
                                alt=""
                              />
                              {doc.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                      <span
                        className={`${status.textColor} gap-1.5 font-medium text-xs leading-64 border border-solid ${status.borderColor} ${status.bgColor} h-5.5 inline-flex items-center justify-center rounded-full px-2`}
                      >
                        <strong
                          className={`${status.dotColor} rounded-full w-1.5 h-1.5 flex items-center`}
                        ></strong>
                        {doc.status}
                      </span>
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 mt-4">
                      {doc.actions.includes("view") && (
                        <li>
                          <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center">
                            <Image
                              src="/images/eye-icon.svg"
                              alt="file"
                              width={16}
                              height={16}
                            />
                            View PDF
                          </button>
                        </li>
                      )}
                      {doc.actions.includes("approve") && (
                        <li>
                          <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-green53 font-normal text-sm leading-5 bg-gray-1500 border-solid border-green53/30 h-9 flex items-center justify-center">
                            <Image
                              src="/images/chackdarkgreen.svg"
                              alt="file"
                              width={16}
                              height={16}
                            />
                            Approve
                          </button>
                        </li>
                      )}
                      {doc.actions.includes("reject") && (
                        <li>
                          <button
                            onClick={() => openRejectModal(doc.id)}
                            className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-red2100 font-normal text-sm leading-5 bg-gray-1500 border-solid border-red2100/30 h-9 flex items-center justify-center"
                          >
                            <Image
                              src="/images/closeRed.svg"
                              alt="file"
                              width={16}
                              height={16}
                            />
                            Reject
                          </button>
                        </li>
                      )}
                      {doc.actions.includes("upload") && (
                        <li>
                          <button className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center">
                            <Image
                              src="/icons/upload-icon.svg"
                              alt="file"
                              width={16}
                              height={16}
                              className="brightness-0"
                            />
                            Upload New
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-solid border-gray-3600 p-6 shadow-4xl mt-8 rounded-lg">
            <div className="mb-6 flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between">
              <div>
                <h4 className="text-blue-1300 font-semibold md:text-2xl text-xl leading-6 mb-1.5 tracking-[-0.6px] flex items-center gap-2">
                  <Image
                    src="/images/file-black.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  12-Month Release Schedule
                </h4>
                <p className="text-gray-1900 font-normal text-sm leading-6">
                  Monthly fund release plan with compliance controls
                </p>
              </div>
              <div>
                <ul className="flex items-center gap-6">
                  <li>
                    <span className="text-gray-1900 font-normal text-sm leading-5 block">
                      Released
                    </span>
                    <h4 className="text-green53 text-lg leading-7 font-semibold">
                      {releasedAmount}
                    </h4>
                  </li>
                  <li>
                    <span className="text-gray-1900 font-normal text-sm leading-5 block">
                      Remaining
                    </span>
                    <h4 className="text-blue-1300 text-lg leading-7 font-semibold text-right">
                      {remainingAmount}
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <AviMonthScheduleTable />
          </div>
        </div>

        <div className="4xl:max-w-100.25 w-full">
          <AdminActions />

          <div className="mt-8 bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4">
            <h4 className="text-blue-1300 font-semibold text-2xl leading-6 tracking-[-0.6px]">
              Activity Timeline
            </h4>
            <ul className="mt-6 relative after:absolute after:content='' after:left-2.75 after:top-0 after:w-0.5 after:h-[90%] after:bg-gray-3600">
              {timeline.map((event, index) => {
                const isLast = index === timeline.length - 1;
                return (
                  <li
                    key={event.id}
                    className={`flex items-start gap-4 ${!isLast ? "mb-8" : ""} relative z-50`}
                  >
                    {event.type === "completed" && (
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green53">
                        <Image
                          src="/icons/check-white.svg"
                          width={16}
                          height={16}
                          alt=""
                        />
                      </span>
                    )}
                    {event.type === "upcoming" && (
                      <span className="w-6 h-6 border-2 border-solid border-blue1400 bg-blue1400/10 flex items-center justify-center rounded-full">
                        <Image
                          src="/icons/right-blue-arrow.svg"
                          width={16}
                          height={16}
                          alt=""
                        />
                      </span>
                    )}
                    {event.type === "pending" && (
                      <span className="w-6 h-6 border-2 border-solid border-gray-3600 bg-gray-1500 flex items-center justify-center rounded-full">
                        <Image
                          src="/icons/ring-icon.svg"
                          width={12}
                          height={12}
                          alt=""
                        />
                      </span>
                    )}
                    <div className="flex-1 w-full">
                      <span className="text-gray-1900 text-xs leading-4 font-medium flex items-center gap-2">
                        {event.date}
                        {event.badge && (
                          <strong className="text-blue1400 font-medium text-xs leading-4 inline-flex items-center bg-blue1400/10 rounded-full h-5 px-2">
                            {event.badge}
                          </strong>
                        )}
                      </span>
                      <h4 className="text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5">
                        {event.title}
                      </h4>
                      <h4 className="text-gray-1900 text-sm leading-5 font-normal">
                        {event.description}
                      </h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isRejectModalOpen}
        onClose={closeRejectModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link
          onClick={closeRejectModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
            Reject Document
          </h4>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-1.5">
            Please provide a reason for rejecting this document. The student
            will be notified.
          </p>
          <textarea
            className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900 border border-solid border-gray-3600 rounded-md shadow-59xl w-full h-25 mt-6"
            placeholder="Enter rejection reason..."
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
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
                onClick={confirmRejection}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10"
              >
                Confirm Rejection
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;