"use client";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import { useInsuranceStore } from "@/app/store/zustand/Useinsurancestore";
import type { InsuranceDocStatus } from "@/app/store/zustand/Useinsurancestore";

const statusConfig: Record<InsuranceDocStatus, { color: string; icon: string }> = {
  Verified: {
    color: "text-green54",
    icon: "/icons/check-icon3.svg",
  },
  Pending: {
    color: "text-yellow1900",
    icon: "/images/clock-yellow.svg",
  },
};

export default function UserInsuranceTable() {
  const {
    insuranceDocuments,
    activeModal,
    viewingInsuranceDocId,
    openViewInsuranceDoc,
    closeViewInsuranceDoc,
    downloadInsuranceDoc,
  } = useInsuranceStore();

  const viewingDocument = viewingInsuranceDocId
    ? insuranceDocuments.find((d) => d.id === viewingInsuranceDocId)
    : null;

  return (
    <>
      <div className="overflow-x-auto p-5">
        <table className="4xl:w-full w-187.5 border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Document
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Issue Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Expiry
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {insuranceDocuments.map((item) => {
              const status = statusConfig[item.status];
              return (
                <tr
                  key={item.id}
                  className="border-b border-solid border-gray-1000 last:border-b-0"
                >
                  <td className="px-4 py-3">
                    <h4 className="text-blue-1300 text-sm font-medium leading-5">
                      {item.name}
                    </h4>
                    <span className="text-gray-1200 text-xs leading-4 block">
                      {item.subtitle}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="inline-flex items-center justify-center bg-gray-1600 text-gray-1200 text-xs font-medium rounded-md h-6 px-2">
                      {item.type}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-1200 text-sm leading-5 font-normal">
                    {item.issueDate}
                  </td>
                  <td className="px-4 py-3 text-gray-1200 text-sm leading-5 font-normal">
                    {item.expiry}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src={status.icon}
                        width={16}
                        height={16}
                        alt=""
                      />
                      <span
                        className={`text-xs leading-4 font-semibold ${status.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <ul className="flex items-center justify-center gap-2">
                      <li>
                        <button
                          onClick={() => openViewInsuranceDoc(item.id)}
                          className="flex items-center justify-center bg-white rounded-md h-8 w-8 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                        >
                          <Image
                            src="/images/eye-icon.svg"
                            width={16}
                            height={16}
                            alt="View"
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => downloadInsuranceDoc(item.id)}
                          className="flex items-center justify-center bg-white rounded-md h-8 w-8 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                        >
                          <Image
                            src="/icons/export-icon-4.svg"
                            width={16}
                            height={16}
                            alt="Download"
                          />
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={activeModal === "viewInsuranceDoc"}
        onClose={closeViewInsuranceDoc}
        panelClassName="max-w-[640px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeViewInsuranceDoc}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          {viewingDocument && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/icons/file-check.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="opacity-50"
                  />
                </span>
                <div>
                  <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
                    {viewingDocument.name}
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-normal mt-0.5">
                    {viewingDocument.subtitle} • {viewingDocument.fileName} •{" "}
                    {viewingDocument.fileSize}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={statusConfig[viewingDocument.status].icon}
                    width={16}
                    height={16}
                    alt=""
                  />
                  <span
                    className={`text-xs leading-4 font-semibold ${statusConfig[viewingDocument.status].color}`}
                  >
                    {viewingDocument.status}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center bg-gray-1600 text-gray-1200 text-xs font-medium rounded-md h-6 px-2">
                  {viewingDocument.type}
                </div>
                <span className="text-gray-1200 text-xs leading-4">
                  Issued: {viewingDocument.issueDate}
                </span>
                <span className="text-gray-1200 text-xs leading-4">
                  Expires: {viewingDocument.expiry}
                </span>
              </div>
              <div className="bg-white border border-solid border-gray-1000 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-1000">
                  <span className="text-blue-1300 text-sm font-medium flex items-center gap-2">
                    <Image
                      src="/icons/file-check.svg"
                      width={14}
                      height={14}
                      alt=""
                      className="opacity-50"
                    />
                    {viewingDocument.fileName}
                  </span>
                  <button
                    onClick={() => downloadInsuranceDoc(viewingDocument.id)}
                    className="text-blue1400 text-xs font-medium hover:underline cursor-pointer"
                  >
                    Download
                  </button>
                </div>
                <div className="h-72 flex flex-col items-center justify-center bg-gray-1600/30">
                  <Image
                    src="/icons/file-check.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="opacity-15 mb-3"
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
                      downloadInsuranceDoc(viewingDocument.id);
                      closeViewInsuranceDoc();
                    }}
                    className="px-4 cursor-pointer hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-white border-solid border-gray-1000 h-10 flex items-center gap-2"
                  >
                    <Image
                      src="/icons/export-icon-4.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    Download
                  </button>
                </li>
                <li>
                  <button
                    onClick={closeViewInsuranceDoc}
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
}