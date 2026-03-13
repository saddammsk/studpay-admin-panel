"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import { useHousingStore } from "@/app/store/zustand/Usehousingstore";

const UsersStudentsPage = () => {
  const {
    housing,
    documents,
    payments,
    isTerminateModalOpen,
    isTerminating,
    openTerminateModal,
    closeTerminateModal,
    confirmTerminate,
    isRecordPaymentModalOpen,
    recordPaymentMonth,
    recordPaymentAmount,
    isRecordingPayment,
    openRecordPaymentModal,
    closeRecordPaymentModal,
    setRecordPaymentMonth,
    setRecordPaymentAmount,
    confirmRecordPayment,
    isContactLandlordModalOpen,
    contactSubject,
    contactMessage,
    isSendingMessage,
    openContactLandlordModal,
    closeContactLandlordModal,
    setContactSubject,
    setContactMessage,
    confirmContactLandlord,
    isViewDocumentModalOpen,
    viewingDocumentId,
    openViewDocumentModal,
    closeViewDocumentModal,
    downloadDocument,
    isInsurancePolicyModalOpen,
    openInsurancePolicyModal,
    closeInsurancePolicyModal,
  } = useHousingStore();

  const viewingDocument = viewingDocumentId
    ? documents.find((d) => d.id === viewingDocumentId)
    : null;

  const pendingPayments = payments.filter(
    (p) => p.status === "Pending" || p.status === "Scheduled"
  );

  const isLeaseTerminated = housing.leaseStatus === "Terminated";

  return (
    <div className="w-full flex-1">
      <div className="flex xl:flex-row flex-col items-start gap-6 mt-6">
        <div className="xl:w-[calc(100%-300px)] w-full p">
          <div className="relative flex 2xl:flex-row flex-col 2xlitems-center 2xl:gap-0 shadow-62xl gap-4 justify-between bg-white border border-solid border-gray-1000 rounded-lg pt-7 pb-6 4xl:px-11 2xl:px-5 px-3">
            <span
              className={`absolute top-0 left-1/2 -translate-x-1/2 flex items-center h-1 w-[96%] ${
                isLeaseTerminated
                  ? "bg-linear-to-r from-red2100 to-red2100/60"
                  : "bg-linear-to-r from-lightgreen17 to-lightgreen17/60"
              }`}
            ></span>
            <div className="flex sm:flex-row flex-col items-start 2xl:gap-4 gap-2">
              <span className="bg-gray-1600 rounded-xl flex items-center justify-center w-14 h-14">
                <Image
                  src="/images/building-icon2.svg"
                  width="28"
                  height="28"
                  alt=""
                />
              </span>
              <div className="flex-1 w-full">
                <div className="flex sm:flex-row flex-col-reverse sm:items-center items-start sm:gap-3 gap-2">
                  <h4 className="text-blue-1300 text-xl leading-7 font-semibold flex items-center">
                    {housing.propertyName}
                  </h4>
                  <span
                    className={`inline-flex items-center rounded-full h-6.5 px-2.5 gap-1.5 border border-solid font-inter font-medium text-xs leading-4 ${
                      isLeaseTerminated
                        ? "bg-red2100/10 border-red2100/20 text-red2100"
                        : "bg-green55 border-lightgreen17/20 text-green54"
                    }`}
                  >
                    <span
                      className={`flex items-center rounded-full w-1.5 h-1.5 ${
                        isLeaseTerminated ? "bg-red2100" : "bg-lightgreen17"
                      }`}
                    ></span>
                    {housing.leaseStatus}
                  </span>
                </div>
                <div className="flex sm:flex-nowrap flex-wrap items-center gap-1.5 my-1.5">
                  <p className="text-gray-1200 text-xs leading-5 gap-1.5 font-normal flex items-center">
                    <Image
                      src="/images/location-gray.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    {housing.address}
                  </p>
                  <span className="text-gray-1200/40 text-base leading-6 flex items-center">
                    •
                  </span>
                  <strong className="text-blue-1300 text-sm leading-5 block">
                    {housing.room}
                  </strong>
                </div>
                <p className="text-gray-1200 text-xs leading-5 gap-1.5 font-normal flex items-center">
                  <Image
                    src="/images/calendar-icon3.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  {housing.leaseStart} — {housing.leaseEnd}
                </p>
              </div>
            </div>
            <div className="2xl:text-right text-center">
              <span className="text-gray-1200 font-inter font-normal text-sm leading-5 block">
                Monthly Rent
              </span>
              <h4 className="text-blue-1300 mb-2 font-bold text-2xl leading-8">
                {housing.monthlyRent}
              </h4>
              <Link
                href={"#"}
                className="w-full inline-flex items-center justify-center gap-1.5 text-lightgreen17 text-xs leading-4 font-medium"
              >
                <Image
                  src="/icons/card-lightgreen.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Paid via StudPay AVI Release
              </Link>
            </div>
          </div>

          <div className="grid 4xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <div className="px-2.5 bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4">
                <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/shield-dark.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                  Rental Guarantee & Insurance
                </h4>
              </div>
              <div className="5xl:p-5 px-3 py-5 grid 2xl:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <div className="flex items-center mb-1.5 2xl:justify-start justify-between gap-3">
                    <h4 className="text-gray-1200 text-xs leading-4 uppercase font-medium">
                      StudPay Rental Guarantee
                    </h4>
                    <span className="inline-flex items-center bg-green55 rounded-full h-6.5 px-2.5 gap-1.5 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4">
                      <span className="flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5"></span>
                      Verified
                    </span>
                  </div>
                  <h4 className="text-gray-1200 text-sm leading-4 font-normal">
                    Garantie Locative
                  </h4>
                  <div className="mt-4 bg-gray-1600/50 5xl:p-4 p-2.5 w-full">
                    <ul>
                      <li className="flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Security Deposit
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-lg text-base leading-7 font-semibold">
                          <Image
                            src="/icons/euro-sign.svg"
                            width="16"
                            height="16"
                            alt=""
                          />
                          {housing.securityDeposit}
                        </span>
                      </li>
                      <li className="flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Coverage Amount
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium">
                          {housing.coverageAmount}
                        </span>
                      </li>
                      <li className="flex items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Provider
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium">
                          {housing.guaranteeProvider}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-between mb-1.5">
                    <h4 className="text-gray-1200 5xl:text-xs text-[10px] leading-4 uppercase font-medium">
                      Housing Insurance
                      <span className="block 5xl:text-xs text-[10px] 5xl:leading-5 leading-4">
                        Multirisque Habitation
                      </span>
                    </h4>
                    <span className="inline-flex items-center bg-green55 rounded-full h-6.5 px-2.5 gap-1.5 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4">
                      <span className="flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5"></span>
                      Active
                    </span>
                  </div>
                  <div className="my-4 bg-gray-1600/50 5xl:p-4 p-2.5 w-full">
                    <ul>
                      <li className="flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Policy Number
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-lg text-sm 5xl:leading-7 leading-6 font-semibold">
                          {housing.policyNumber}
                        </span>
                      </li>
                      <li className="flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Coverage Type
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium">
                          {housing.coverageType}
                        </span>
                      </li>
                      <li className="flex items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                        Annual Premium
                        <span className="flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium">
                          {housing.annualPremium}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={openInsurancePolicyModal}
                    className="w-full cursor-pointer flex items-center justify-center bg-white-1100 border border-solid border-gray-1000 rounded-md h-9 px-3 5xl:text-sm text-[11px] leading-5 font-medium hover:bg-gray-1600 transition-all duration-300"
                  >
                    <Image
                      src="/icons/file-check.svg"
                      width="16"
                      height="16"
                      alt=""
                      className="mr-2"
                    />
                    View Insurance Policy
                    <Image
                      src="/icons/expend-icon2.svg"
                      width="16"
                      height="16"
                      alt=""
                      className="5xl:ml-6 ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-2.5 bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4">
                <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/images/setting-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                  Management Controls
                </h4>
              </div>
              <div className="5xl:p-5 px-3 py-5">
                <p className="text-gray-1200 text-sm leading-4 font-normal">
                  Admin actions for managing this housing reservation and lease
                  agreement.
                </p>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-4">
                  <button
                    onClick={openTerminateModal}
                    disabled={isLeaseTerminated}
                    className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-red-1300/30 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-red2100/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Image
                      src="/images/cross-red.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    <h4 className="text-blue-1300 text-sm leading-5 font-medium mt-2">
                      Terminate Lease
                    </h4>
                    <p className="text-gray-1200 text-xs leading-4 font-medium">
                      End agreement & refund
                    </p>
                  </button>
                  <button
                    onClick={openRecordPaymentModal}
                    disabled={isLeaseTerminated || pendingPayments.length === 0}
                    className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-lightgreen17/30 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-lightgreen17/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Image
                      src="/icons/card-lightgreen.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    <h4 className="text-blue-1300 text-sm leading-5 font-medium mt-2">
                      Record Payment
                    </h4>
                    <p className="text-gray-1200 text-xs leading-4 font-medium">
                      Mark rent as paid
                    </p>
                  </button>
                  <button
                    onClick={openContactLandlordModal}
                    className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-gray-1000 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-gray-1600/50 transition-all duration-300"
                  >
                    <Image
                      src="/images/email-gray.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    <h4 className="text-blue-1300 text-sm leading-5 font-medium mt-2">
                      Contact Landlord
                    </h4>
                    <p className="text-gray-1200 text-xs leading-4 font-medium">
                      Open support ticket
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 border border-solid border-gray-3100 rounded-lg shadow-4xl px-5">
            <div className="border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4">
              <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                <Image
                  src="/icons/folder-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </span>
              <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                Documents & Contracts Vault
              </h4>
            </div>
            <div className="4xl:p-5 px-0 py-5 space-y-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center">
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div>
                      <h4 className="text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2">
                        {doc.title}
                        <Image
                          src={
                            doc.verification === "verified"
                              ? "/icons/check-icon3.svg"
                              : "/images/clock-yellow.svg"
                          }
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className="text-gray-1200 text-xs leading-4 font-normal">
                        {doc.subtitle} • {doc.date} • {doc.fileSize}
                      </p>
                    </div>
                  </div>
                  <ul className="flex items-center sm:w-auto w-full sm:justify-start justify-center gap-2">
                    <li>
                      <button
                        onClick={() => openViewDocumentModal(doc.id)}
                        className="px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium cursor-pointer rounded-md transition-all duration-300"
                      >
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className="brightness-0"
                        />
                        View
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => downloadDocument(doc.id)}
                        className="px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium cursor-pointer rounded-md transition-all duration-300"
                      >
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className="brightness-0"
                        />
                        Download
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <AdminActions />
        </div>
      </div>

      <Modal
        isOpen={isTerminateModalOpen}
        onClose={closeTerminateModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeTerminateModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/cross-red.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Terminate Lease Agreement
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This action will initiate the lease termination process. The
            security deposit of €{housing.securityDeposit} will be reviewed for
            refund after the final inspection.
          </p>
          <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-md p-3">
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-1200 font-normal">Property</span>
                <span className="text-blue-1300 font-medium">
                  {housing.propertyName}
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-1200 font-normal">Room</span>
                <span className="text-blue-1300 font-medium">
                  {housing.room}
                </span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-1200 font-normal">
                  Security Deposit
                </span>
                <span className="text-blue-1300 font-semibold">
                  €{housing.securityDeposit}
                </span>
              </li>
            </ul>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeTerminateModal}
                disabled={isTerminating}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmTerminate}
                disabled={isTerminating}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTerminating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Terminating...
                  </>
                ) : (
                  "Confirm Terminate"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isRecordPaymentModalOpen}
        onClose={closeRecordPaymentModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeRecordPaymentModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-lightgreen17/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/icons/card-lightgreen.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Record Rent Payment
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            Mark a monthly rent payment as received for this lease.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Payment Month
              </label>
              <select
                value={recordPaymentMonth}
                onChange={(e) => setRecordPaymentMonth(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10 bg-white"
              >
                <option value="">Select month</option>
                {pendingPayments.map((p) => (
                  <option key={p.id} value={p.month}>
                    {p.month} — {p.amount}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Amount
              </label>
              <input
                type="text"
                value={recordPaymentAmount}
                onChange={(e) => setRecordPaymentAmount(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10"
                placeholder="€650"
              />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeRecordPaymentModal}
                disabled={isRecordingPayment}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmRecordPayment}
                disabled={!recordPaymentMonth || isRecordingPayment}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-lightgreen17/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-lightgreen17 border-solid border-lightgreen17 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRecordingPayment ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Recording...
                  </>
                ) : (
                  <>
                    <Image
                      src="/icons/card-lightgreen.svg"
                      width={14}
                      height={14}
                      alt=""
                      className="brightness-10000"
                    />
                    Confirm Payment
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isContactLandlordModalOpen}
        onClose={closeContactLandlordModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeContactLandlordModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/email-gray.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Contact Landlord
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            Open a support ticket regarding {housing.propertyName} —{" "}
            {housing.room}. The landlord will be notified via email.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Subject
              </label>
              <select
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10 bg-white"
              >
                <option value="">Select a subject</option>
                <option value="Maintenance Request">Maintenance Request</option>
                <option value="Lease Question">Lease Question</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Noise Complaint">Noise Complaint</option>
                <option value="Move-out Notice">Move-out Notice</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Message
              </label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none"
                placeholder="Describe your issue or request..."
              />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeContactLandlordModal}
                disabled={isSendingMessage}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmContactLandlord}
                disabled={
                  !contactSubject.trim() ||
                  !contactMessage.trim() ||
                  isSendingMessage
                }
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSendingMessage ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Image
                      src="/images/email-gray.svg"
                      width={14}
                      height={14}
                      alt=""
                      className="brightness-10000"
                    />
                    Send Message
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isViewDocumentModalOpen}
        onClose={closeViewDocumentModal}
        panelClassName="max-w-[640px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeViewDocumentModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          {viewingDocument && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/icons/file-gray.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px] flex items-center gap-2">
                    {viewingDocument.title}
                    <Image
                      src={
                        viewingDocument.verification === "verified"
                          ? "/icons/check-icon3.svg"
                          : "/images/clock-yellow.svg"
                      }
                      width={16}
                      height={16}
                      alt=""
                    />
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-normal mt-0.5">
                    {viewingDocument.subtitle} • {viewingDocument.date} •{" "}
                    {viewingDocument.fileSize}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-solid border-gray-1000 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-1000">
                  <span className="text-blue-1300 text-sm font-medium flex items-center gap-2">
                    <Image
                      src="/icons/file-gray.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    {viewingDocument.title}.pdf
                  </span>
                  <button
                    onClick={() => {
                      downloadDocument(viewingDocument.id);
                    }}
                    className="text-blue1400 text-xs font-medium hover:underline cursor-pointer"
                  >
                    Download
                  </button>
                </div>
                <div className="h-72 flex flex-col items-center justify-center bg-gray-1600/30">
                  <Image
                    src="/icons/file-gray.svg"
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
                      closeViewDocumentModal();
                    }}
                    className="px-4 cursor-pointer hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-white border-solid border-gray-1000 h-10 flex items-center gap-2"
                  >
                    <Image
                      src="/icons/export-icon-4.svg"
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
                    onClick={closeViewDocumentModal}
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
        isOpen={isInsurancePolicyModalOpen}
        onClose={closeInsurancePolicyModal}
        panelClassName="max-w-[640px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeInsurancePolicyModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/shield-dark.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <div>
              <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
                Insurance Policy Details
              </h4>
              <p className="text-gray-1200 text-xs leading-4 font-normal mt-0.5">
                Multirisque Habitation — {housing.policyNumber}
              </p>
            </div>
          </div>
          <div className="bg-white border border-solid border-gray-1000 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">Policy Number</span>
              <span className="text-blue-1300 font-semibold">
                {housing.policyNumber}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">Coverage Type</span>
              <span className="text-blue-1300 font-medium">
                {housing.coverageType}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">
                Annual Premium
              </span>
              <span className="text-blue-1300 font-medium">
                {housing.annualPremium}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">
                Coverage Amount
              </span>
              <span className="text-blue-1300 font-medium">
                {housing.coverageAmount}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">Property</span>
              <span className="text-blue-1300 font-medium">
                {housing.propertyName}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-1200 font-normal">Status</span>
              <span className="inline-flex items-center bg-green55 rounded-full h-5 px-2 gap-1 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4">
                <span className="flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5"></span>
                Active
              </span>
            </div>
          </div>
          <div className="bg-white border border-solid border-gray-1000 rounded-lg overflow-hidden mt-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-1000">
              <span className="text-blue-1300 text-sm font-medium flex items-center gap-2">
                <Image
                  src="/icons/file-gray.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                insurance-policy-{housing.policyNumber}.pdf
              </span>
              <button className="text-blue1400 text-xs font-medium hover:underline cursor-pointer">
                Download
              </button>
            </div>
            <div className="h-48 flex flex-col items-center justify-center bg-gray-1600/30">
              <Image
                src="/images/shield-dark.svg"
                width={40}
                height={40}
                alt=""
                className="opacity-20 mb-3"
              />
              <p className="text-gray-1200 text-sm font-normal">
                Insurance Policy Document
              </p>
              <p className="text-gray-1200 text-xs font-normal mt-1 opacity-60">
                Full policy details will be displayed here
              </p>
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-4">
            <li>
              <button
                onClick={closeInsurancePolicyModal}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;