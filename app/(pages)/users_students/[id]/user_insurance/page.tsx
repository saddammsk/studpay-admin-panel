"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import UserInsuranceTable from "@/app/components/UsersStudent/UserInsuranceTable";
import { useInsuranceStore } from "@/app/store/zustand/Useinsurancestore";
import AdminActions from "@/app/components/UsersStudent/AdminActions";

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const UsersStudentsPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    policies,
    claims,
    premiumPayments,
    activeModal,
    isSubmitting,
    supportSubject,
    supportMessage,
    uploadFileName,
    uploadFileSize,
    uploadProgress,
    isUploading,
    emailSubject,
    emailBody,
    pushTitle,
    pushBody,
    openModal,
    closeModal,
    confirmTerminatePolicies,
    confirmRenewPolicy,
    setSupportSubject,
    setSupportMessage,
    submitSupportLiaison,
    setUploadFile,
    clearUploadFile,
    confirmUploadCertificate,
    setEmailSubject,
    setEmailBody,
    submitEmail,
    setPushTitle,
    setPushBody,
    submitPush,
    confirmFreezeAccount,
    confirmImpersonate,
  } = useInsuranceStore();

  const allTerminated = policies.every((p) => p.status === "Terminated");
  const activePoliciesCount = policies.filter((p) => p.status === "Active").length;
  const allPremiumsPaid = premiumPayments.every((p) => p.status === "Paid");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file.name, formatFileSize(file.size));
    e.target.value = "";
  };

  return (
    <div className="font-inter">
      <div className="flex xl:flex-row flex-col items-start gap-6 mt-6">
        <div className="xl:w-[calc(100%-300px)] w-full p">
          <div className="grid 4xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
                    <Image
                      src={policy.icon}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <div className="flex-1 w-full flex items-start justify-between">
                    <div>
                      <h4 className="text-blue-1300 font-semibold 2xl:text-sm text-[13px] leading-5">
                        {policy.title}
                      </h4>
                      <p className="text-gray-1200 font-normal text-xs leading-4">
                        {policy.subtitle}
                      </p>
                    </div>
                    <div
                      className={`inline-flex items-center rounded-full h-6.5 px-2.5 gap-1.5 border border-solid font-inter font-medium text-xs leading-4 ${
                        policy.status === "Active"
                          ? "bg-green55 border-lightgreen17/20 text-green54"
                          : policy.status === "Terminated"
                            ? "bg-red2100/10 border-red2100/20 text-red2100"
                            : "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100"
                      }`}
                    >
                      <span
                        className={`flex items-center rounded-full w-1.5 h-1.5 ${
                          policy.status === "Active"
                            ? "bg-lightgreen17"
                            : policy.status === "Terminated"
                              ? "bg-red2100"
                              : "bg-yellow-1100"
                        }`}
                      ></span>
                      {policy.status}
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex mb-2 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                    Provider
                    <span className="flex items-center text-blue-1300 font-medium">
                      {policy.provider}
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal">
                    Policy Number
                    <span className="flex items-center text-blue-1300 font-medium">
                      {policy.policyNumber}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
            <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between py-4 px-5 border-b border-solid border-gray-1000">
              <div className="flex items-center gap-2.5">
                <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/icons/file-check.svg"
                    width={16}
                    height={16}
                    alt=""
                    className="opacity-50"
                  />
                </span>
                <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                  Insurance Documents & Certifications
                </h4>
              </div>
              <button
                onClick={() => openModal("uploadCertificate")}
                className="flex items-center justify-center bg-white-1100 border border-solid border-gray-1000 rounded-md h-9 px-3 text-sm leading-5 font-medium cursor-pointer hover:bg-gray-1600 transition-all duration-300"
              >
                <Image
                  src="/icons/upload-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="mr-2"
                />
                Upload Certificate
              </button>
            </div>
            <UserInsuranceTable />
          </div>

          <div className="mt-6 grid 2xl:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="flex items-center justify-between py-4 px-5 border-b border-solid border-gray-1000">
                <div className="flex items-center gap-2.5">
                  <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/icons/info-dark.svg"
                      width={16}
                      height={16}
                      alt=""
                      className="opacity-50"
                    />
                  </span>
                  <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                    Insurance Claims
                  </h4>
                </div>
                <span className="text-gray-1200 font-normal text-xs leading-4">
                  {claims.length} claims
                </span>
              </div>
              <div className="p-5 space-y-3">
                {claims.map((claim) => (
                  <div
                    key={claim.id}
                    className="bg-gray-1600/30 flex items-center justify-between border border-solid border-gray-1000 rounded-lg p-4"
                  >
                    <div>
                      <h4 className="text-blue-1300 font-medium text-sm leading-5">
                        {claim.title}
                      </h4>
                      <p className="text-gray-1200 font-normal text-xs leading-4">
                        {claim.claimNumber} • {claim.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                        {claim.amount}
                      </h4>
                      <span
                        className={`text-xs leading-4 font-normal flex items-center gap-2 ${
                          claim.status === "Paid"
                            ? "text-lightgreen17"
                            : claim.status === "Processing"
                              ? "text-yellow-1100"
                              : "text-red2100"
                        }`}
                      >
                        <Image
                          src={
                            claim.status === "Paid"
                              ? "/icons/check-icon3.svg"
                              : "/images/clock-yellow.svg"
                          }
                          width={16}
                          height={16}
                          alt=""
                          className="opacity-50"
                        />
                        {claim.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="flex items-center justify-between py-4 px-5 border-b border-solid border-gray-1000">
                <div className="flex items-center gap-2.5">
                  <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/icons/payment.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                  <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                    Premium Payments
                  </h4>
                </div>
                <span
                  className={`font-semibold text-xs leading-4 ${
                    allPremiumsPaid ? "text-green54" : "text-yellow-1100"
                  }`}
                >
                  {allPremiumsPaid ? "All Paid" : "Payments Pending"}
                </span>
              </div>
              <div className="p-5 space-y-3">
                {premiumPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="bg-gray-1600/30 flex items-center justify-between border border-solid border-gray-1000 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full w-8 h-8 flex items-center justify-center ${
                          payment.status === "Paid"
                            ? "bg-green55"
                            : "bg-yellow-1100/10"
                        }`}
                      >
                        <Image
                          src={
                            payment.status === "Paid"
                              ? "/icons/check-icon3.svg"
                              : "/images/clock-yellow.svg"
                          }
                          width={16}
                          height={16}
                          alt=""
                          className="opacity-50"
                        />
                      </span>
                      <div>
                        <h4 className="text-blue-1300 font-medium text-sm leading-5">
                          {payment.month}
                        </h4>
                        <p className="text-gray-1200 font-normal text-xs leading-4">
                          {payment.date} • {payment.method}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                      {payment.amount}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
            <div className="flex items-center justify-between py-4 px-5 border-b border-solid border-gray-1000">
              <div className="flex items-center gap-2.5">
                <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/icons/setting-icon.svg"
                    width={16}
                    height={16}
                    alt=""
                    className="opacity-50"
                  />
                </span>
                <h4 className="text-blue-1300 font-semibold text-sm leading-5">
                  Admin Control Actions
                </h4>
              </div>
            </div>
            <div className="5xl:p-5 px-3 py-5">
              <p className="text-gray-1200 text-sm leading-4 font-normal">
                Admin actions for managing this housing reservation and lease
                agreement.
              </p>
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-4">
                <button
                  onClick={() => openModal("renewPolicy")}
                  disabled={allTerminated}
                  className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-lightgreen17/30 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-lightgreen17/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Image
                    src="/icons/renew-icon.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <h4 className="text-blue-1300 text-sm leading-5 font-medium mt-2">
                    Renew Policy
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-medium">
                    Next academic year
                  </p>
                </button>
                <button
                  onClick={() => openModal("terminatePolicies")}
                  disabled={allTerminated}
                  className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-red-1300/30 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-red2100/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Image
                    src="/images/cross-red.svg"
                    width={16}
                    height={16}
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
                  onClick={() => openModal("supportLiaison")}
                  className="bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-gray-1000 text-center py-4 5xl:px-2 px-1 cursor-pointer hover:bg-gray-1600/50 transition-all duration-300"
                >
                  <Image
                    src="/images/support-icon.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <h4 className="text-blue-1300 text-sm leading-5 font-medium mt-2">
                    Support Liaison
                  </h4>
                  <p className="text-gray-1200 text-xs leading-4 font-medium">
                    Contact provider
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

      <AdminActions/>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileSelect}
        className="hidden"
      />

      <Modal
        isOpen={activeModal === "terminatePolicies"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
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
              Terminate Insurance Policies
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This action will cancel all your active insurance policies. Any
            remaining premium balance will be refunded within 30 business days.
            This is typically done when leaving the country.
          </p>
          <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-md p-3 space-y-2">
            {policies
              .filter((p) => p.status === "Active")
              .map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-1200 font-normal">{p.title}</span>
                  <span className="text-blue-1300 font-medium">
                    {p.policyNumber}
                  </span>
                </div>
              ))}
          </div>
          <p className="text-red2100 text-xs font-medium mt-3">
            {activePoliciesCount} active{" "}
            {activePoliciesCount === 1 ? "policy" : "policies"} will be
            terminated.
          </p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmTerminatePolicies}
                disabled={isSubmitting}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
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
        isOpen={activeModal === "renewPolicy"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-lightgreen17/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/icons/renew-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Renew Insurance Policies
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This will renew all active insurance policies for the next academic
            year (Sept 2025 — Aug 2026). Premium rates may be adjusted.
          </p>
          <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-md p-3 space-y-2">
            {policies
              .filter((p) => p.status === "Active")
              .map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-1200 font-normal">{p.title}</span>
                  <span className="text-blue-1300 font-medium">
                    {p.provider}
                  </span>
                </div>
              ))}
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmRenewPolicy}
                disabled={isSubmitting}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-lightgreen17/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-lightgreen17 border-solid border-lightgreen17 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  "Confirm Renewal"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "supportLiaison"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/support-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Contact Insurance Provider
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            Open a support ticket with the insurance provider on behalf of the
            student.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Subject
              </label>
              <select
                value={supportSubject}
                onChange={(e) => setSupportSubject(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10 bg-white"
              >
                <option value="">Select a subject</option>
                <option value="Coverage Question">Coverage Question</option>
                <option value="Claim Dispute">Claim Dispute</option>
                <option value="Policy Amendment">Policy Amendment</option>
                <option value="Premium Inquiry">Premium Inquiry</option>
                <option value="Certificate Request">Certificate Request</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Message
              </label>
              <textarea
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none"
                placeholder="Describe the issue or request..."
              />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={submitSupportLiaison}
                disabled={
                  !supportSubject.trim() ||
                  !supportMessage.trim() ||
                  isSubmitting
                }
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send to Provider"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "uploadCertificate"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue1400/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="/icons/upload-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Upload Insurance Certificate
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            Upload a new insurance certificate or attestation document. Accepted
            formats: PDF, JPG, PNG (max 10MB).
          </p>
          {!uploadFileName ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 border-2 border-dashed border-gray-3600 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue1400 hover:bg-blue1400/5 transition-all duration-300"
            >
              <span className="bg-gray-1600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
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
              <p className="text-gray-1200 text-xs font-normal mt-1">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          ) : (
            <div className="mt-4 bg-white border border-solid border-gray-3600 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue1400/10 rounded-lg w-10 h-10 flex items-center justify-center">
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
                  <p className="text-gray-1200 text-xs leading-4 mt-0.5">
                    {uploadFileSize}
                  </p>
                </div>
                {!isUploading && (
                  <button onClick={clearUploadFile} className="cursor-pointer">
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
                    <span className="text-gray-1200 text-xs font-medium">
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
                onClick={closeModal}
                disabled={isUploading}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmUploadCertificate}
                disabled={!uploadFileName || isUploading}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Upload Certificate"}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "impersonateUser"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue1400/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="../images/eye-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Impersonate User
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            You will view the platform as this user. All actions taken during
            impersonation will be logged for audit purposes.
          </p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmImpersonate}
                disabled={isSubmitting}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Starting...
                  </>
                ) : (
                  "Start Impersonation"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "freezeAccount"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="../images/freeze-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Freeze Account
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This will immediately suspend all account activity including
            transactions, insurance claims, and premium payments. The user will
            be notified.
          </p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={confirmFreezeAccount}
                disabled={isSubmitting}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red1700/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red1700 border-solid border-red1700 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Freezing...
                  </>
                ) : (
                  "Confirm Freeze"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "adjustLimits"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-1100/10 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="../images/filter-yellow.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Adjust Account Limits
            </h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This action requires 4-eyes approval. A request will be sent to a
            second administrator for confirmation before changes take effect.
          </p>
          <div className="mt-4 bg-yellow-1100/5 border border-solid border-yellow-1100/20 rounded-md p-3 flex items-center gap-2">
            <Image
              src="../images/filter-yellow.svg"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-yellow-1100 text-xs font-medium">
              4-Eyes verification required — a second admin must approve this
              change.
            </span>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={closeModal}
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-yellow-1100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-yellow-1100 border-solid border-yellow-1100 h-10"
              >
                Submit for Approval
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "sendEmail"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="../images/email-black.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Send Email
            </h4>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10"
                placeholder="Email subject..."
              />
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Message
              </label>
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none"
                placeholder="Write your email..."
              />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={submitEmail}
                disabled={
                  !emailSubject.trim() || !emailBody.trim() || isSubmitting
                }
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Email"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "sendPush"}
        onClose={closeModal}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={closeModal}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
              <Image
                src="../images/puch-icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">
              Send Push Notification
            </h4>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={pushTitle}
                onChange={(e) => setPushTitle(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10"
                placeholder="Notification title..."
              />
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">
                Body
              </label>
              <textarea
                value={pushBody}
                onChange={(e) => setPushBody(e.target.value)}
                className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none"
                placeholder="Notification message..."
              />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={submitPush}
                disabled={
                  !pushTitle.trim() || !pushBody.trim() || isSubmitting
                }
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Notification"
                )}
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;