"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import { useFinancingStore } from "@/app/store/zustand/UseFinancingstore";
import type { ComplianceDocStatus } from "@/app/store/zustand/UseFinancingstore";

const statusStyles: Record<
  ComplianceDocStatus,
  { bg: string; border: string; text: string }
> = {
  Approved: {
    bg: "bg-yellow1800",
    border: "border-lightgreen17/20",
    text: "text-lightgreen17",
  },
  Pending: {
    bg: "bg-yellow1800",
    border: "border-yellow-1100/20",
    text: "text-yellow-1100",
  },
  Rejected: {
    bg: "bg-red2100/10",
    border: "border-red2100/20",
    text: "text-red2100",
  },
  Missing: {
    bg: "bg-gray-1600",
    border: "border-gray-1000",
    text: "text-gray-1200",
  },
};

const CreditComplianceDocs = () => {
  const {
    documents,
    activeModal,
    viewingDocumentId,
    openViewModal,
    closeViewModal,
    downloadDocument,
  } = useFinancingStore();

  const isViewModalOpen = activeModal === "viewDocument";

  const viewingDocument = viewingDocumentId
    ? documents.find((d) => d.id === viewingDocumentId)
    : null;

  return (
    <>
      <div className="bg-white mt-8 border border-solid border-gray-3100 rounded-lg shadow-4xl px-2.5 py-6">
        <div>
          <h4 className="text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]">
            <Image
              src="/icons/file-blue.svg"
              width={20}
              height={20}
              alt=""
            />
            Credit Compliance & Documents
          </h4>
          <p className="text-gray-1200 font-normal text-sm leading-5">
            Required financing documentation
          </p>
        </div>
        {documents.map((doc) => {
          const style = statusStyles[doc.status];
          return (
            <div
              key={doc.id}
              className="mt-3 flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg bg-white p-3"
            >
              <div className="flex items-center gap-3">
                <span className="bg-blue-2200/10 rounded-lg w-[36.53px] h-10 flex items-center justify-center">
                  <Image
                    src="/icons/file-blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </span>
                <div className="flex-1 w-full">
                  <h4 className="text-blue-1300 text-sm leading-5 font-medium">
                    {doc.title}
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-normal">
                    PDF • Uploaded {doc.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 sm:w-auto w-full">
                <span
                  className={`px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid ${style.bg} ${style.border} ${style.text}`}
                >
                  {doc.status}
                </span>
                <ul className="flex items-center gap-1">
                  <li>
                    <button
                      onClick={() => openViewModal(doc.id)}
                      className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-md hover:bg-gray-1600 transition-all duration-300"
                    >
                      <Image
                        src="/images/eyes-icon.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="brightness-0"
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => downloadDocument(doc.id)}
                      className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-md hover:bg-gray-1600 transition-all duration-300"
                    >
                      <Image
                        src="/images/export-icon4.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="brightness-0"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        panelClassName="max-w-[640px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeViewModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          {viewingDocument && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-2200/10 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/icons/file-blue.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
                    {viewingDocument.title}
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-normal mt-0.5">
                    {viewingDocument.fileName} • {viewingDocument.date} •{" "}
                    {viewingDocument.fileSize}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid ${statusStyles[viewingDocument.status].bg} ${statusStyles[viewingDocument.status].border} ${statusStyles[viewingDocument.status].text}`}
                >
                  {viewingDocument.status}
                </span>
              </div>
              <div className="bg-white border border-solid border-gray-1000 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-1000">
                  <span className="text-blue-1300 text-sm font-medium flex items-center gap-2">
                    <Image
                      src="/icons/file-blue.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    {viewingDocument.fileName}
                  </span>
                  <button
                    onClick={() => downloadDocument(viewingDocument.id)}
                    className="text-blue1400 text-xs font-medium hover:underline cursor-pointer"
                  >
                    Download
                  </button>
                </div>
                <div className="h-72 flex flex-col items-center justify-center bg-gray-1600/30">
                  <Image
                    src="/icons/file-blue.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="opacity-20 mb-3"
                  />
                  <p className="text-gray-1200 text-sm font-normal">
                    PDF Preview
                  </p>
                  <p className="text-gray-1200 text-xs font-normal mt-1 opacity-60">
                    Document preview will be displayed here
                  </p>
                </div>
              </div>
              <ul className="flex items-center justify-end gap-3 mt-4">
                <li>
                  <button
                    onClick={() => {
                      downloadDocument(viewingDocument.id);
                      closeViewModal();
                    }}
                    className="px-4 cursor-pointer hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-white border-solid border-gray-1000 h-10 flex items-center gap-2"
                  >
                    <Image
                      src="/images/export-icon4.svg"
                      width={16}
                      height={16}
                      alt=""
                      className="brightness-0"
                    />
                    Download
                  </button>
                </li>
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
    </>
  );
};

export default CreditComplianceDocs;