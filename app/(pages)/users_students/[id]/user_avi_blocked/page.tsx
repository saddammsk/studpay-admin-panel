"use client";
import { useRef } from "react";
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

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const UsersStudentsPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    isViewModalOpen,
    viewingDocument,
    openViewModal,
    closeViewModal,
    isApproveModalOpen,
    approvingDocumentId,
    openApproveModal,
    closeApproveModal,
    confirmApproval,
    isUploadModalOpen,
    uploadingDocumentId,
    uploadFileName,
    uploadFileSize,
    uploadProgress,
    isUploading,
    openUploadModal,
    closeUploadModal,
    setUploadFile,
    confirmUpload,
  } = useAviDossierStore();

  const approvingDocument = approvingDocumentId
    ? documents.find((d) => d.id === approvingDocumentId)
    : null;

  const uploadingDocument = uploadingDocumentId
    ? documents.find((d) => d.id === uploadingDocumentId)
    : null;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file.name, formatFileSize(file.size));
    e.target.value = "";
  };

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
                          <button
                            onClick={() => openViewModal(doc.id)}
                            className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                          >
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
                          <button
                            onClick={() => openApproveModal(doc.id)}
                            className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-green53 font-normal text-sm leading-5 bg-gray-1500 border-solid border-green53/30 h-9 flex items-center justify-center"
                          >
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
                          <button
                            onClick={() => openUploadModal(doc.id)}
                            className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                          >
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
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/closeRed.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
              Reject Document
            </h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-1.5">
            Please provide a reason for rejecting this document. The student
            will be notified.
          </p>
          <textarea
            className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900 border border-solid border-gray-3600 rounded-md w-full h-25 mt-6 resize-none"
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
                disabled={!rejectionReason.trim()}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image
                  src="/images/closeRed.svg"
                  width={14}
                  height={14}
                  alt=""
                  className="brightness-10000"
                />
                Confirm Rejection
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        panelClassName="max-w-[640px] bg-gray-1500 relative"
      >
        <Link
          onClick={closeViewModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          {viewingDocument && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`${viewingDocument.iconBg} rounded-lg w-10 h-10 flex items-center justify-center`}
                >
                  <Image
                    src={viewingDocument.icon}
                    width={20}
                    height={20}
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
                    {viewingDocument.title}
                  </h4>
                  {viewingDocument.subtitle && (
                    <p className="text-gray-3800 font-normal text-xs leading-4 mt-0.5">
                      {viewingDocument.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`${statusConfig[viewingDocument.status].textColor} gap-1.5 font-medium text-xs leading-64 border border-solid ${statusConfig[viewingDocument.status].borderColor} ${statusConfig[viewingDocument.status].bgColor} h-5.5 inline-flex items-center justify-center rounded-full px-2`}
                >
                  <strong
                    className={`${statusConfig[viewingDocument.status].dotColor} rounded-full w-1.5 h-1.5 flex items-center`}
                  ></strong>
                  {viewingDocument.status}
                </span>
                {viewingDocument.fileName && (
                  <span className="text-gray-1900 text-xs leading-4 font-normal">
                    {viewingDocument.fileName}
                    {viewingDocument.fileSize &&
                      ` (${viewingDocument.fileSize})`}
                  </span>
                )}
              </div>
              <div className="bg-white border border-solid border-gray-3600 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-3600">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/file-black.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <span className="text-blue-1300 text-sm font-medium">
                      {viewingDocument.fileName ?? "document.pdf"}
                    </span>
                  </div>
                  <button className="text-blue1400 text-xs font-medium hover:underline cursor-pointer">
                    Download
                  </button>
                </div>
                <div className="h-80 flex flex-col items-center justify-center bg-lighrgrey36/30">
                  <Image
                    src="/images/file-black.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="opacity-20 mb-3"
                  />
                  <p className="text-gray-1900 text-sm font-normal">
                    PDF Preview
                  </p>
                  <p className="text-gray-1900 text-xs font-normal mt-1 opacity-60">
                    Document preview will be displayed here
                  </p>
                </div>
              </div>
              <ul className="flex items-center justify-end gap-3 mt-4">
                <li>
                  <button
                    onClick={closeViewModal}
                    className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
                  >
                    Close
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={isApproveModalOpen}
        onClose={closeApproveModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link
          onClick={closeApproveModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-green53/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/chackdarkgreen.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
              Approve Document
            </h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-3">
            Are you sure you want to approve{" "}
            <strong className="text-blue-1300 font-semibold">
              {approvingDocument?.title}
            </strong>
            ? This action will mark the document as verified and compliant.
          </p>
          {approvingDocument?.fileName && (
            <div className="flex items-center gap-3 mt-4 bg-white border border-solid border-gray-3600 rounded-md px-3 py-2.5">
              <Image
                src="/images/file-black.svg"
                width={16}
                height={16}
                alt=""
              />
              <div className="flex-1">
                <p className="text-blue-1300 text-sm font-medium leading-4">
                  {approvingDocument.fileName}
                </p>
                {approvingDocument.fileSize && (
                  <p className="text-gray-1900 text-xs leading-4 mt-0.5">
                    {approvingDocument.fileSize}
                  </p>
                )}
              </div>
              <span className="text-green53 gap-1.5 font-medium text-xs border border-solid border-green53/20 bg-green53/10 h-5.5 inline-flex items-center justify-center rounded-full px-2">
                <strong className="bg-green53 rounded-full w-1.5 h-1.5 flex items-center"></strong>
                PDF
              </span>
            </div>
          )}
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
                onClick={confirmApproval}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-green53/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-green53 border-solid border-green53 h-10"
              >
                <Image
                  src="/images/chackdarkgreen.svg"
                  width={14}
                  height={14}
                  alt=""
                  className="brightness-10000"
                />
                Confirm Approval
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isUploadModalOpen}
        onClose={closeUploadModal}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link
          onClick={closeUploadModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-blue1400/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/icons/upload-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]">
              Upload Document
            </h4>
          </div>
          <p className="text-gray-3800 font-normal text-sm leading-5 mt-1.5">
            Upload a new file for{" "}
            <strong className="text-blue-1300 font-semibold">
              {uploadingDocument?.title}
            </strong>
            . Accepted format: PDF (max 10MB).
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />

          {!uploadFileName ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 border-2 border-dashed border-gray-3600 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue1400 hover:bg-blue1400/5 transition-all duration-300"
            >
              <span className="bg-lighrgrey36 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Image
                  src="/icons/upload-icon.svg"
                  width={24}
                  height={24}
                  alt=""
                  className="opacity-50"
                />
              </span>
              <p className="text-blue-1300 text-sm font-medium">
                Click to upload or drag and drop
              </p>
              <p className="text-gray-1900 text-xs font-normal mt-1">
                PDF up to 10MB
              </p>
            </div>
          ) : (
            <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/file-black.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-blue-1300 text-sm font-medium leading-4 truncate">
                    {uploadFileName}
                  </p>
                  <p className="text-gray-1900 text-xs leading-4 mt-0.5">
                    {uploadFileSize}
                  </p>
                </div>
                {!isUploading && (
                  <button
                    onClick={() => {
                      setUploadFile("", "");
                    }}
                    className="cursor-pointer"
                  >
                    <Image
                      src="/images/cross-gray.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </button>
                )}
              </div>
              {isUploading && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-1900 text-xs font-medium">
                      Uploading...
                    </span>
                    <span className="text-blue1400 text-xs font-semibold">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-3600 rounded-full h-1.5">
                    <div
                      className="bg-blue1400 h-1.5 rounded-full transition-all duration-200 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          )}

          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeUploadModal}
                disabled={isUploading}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmUpload}
                disabled={!uploadFileName || isUploading}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image
                  src="/icons/upload-icon.svg"
                  width={14}
                  height={14}
                  alt=""
                  className="brightness-10000"
                />
                {isUploading ? "Uploading..." : "Upload Document"}
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;