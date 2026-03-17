"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import { useSafetyStore } from "@/app/store/zustand/Usesafetystore";
import AdminActions from "@/app/components/UsersStudent/AdminActions";

const StudSafePage = () => {
  const {
    student,
    safetyStatus,
    lastUpdated,
    checkIns,
    sosHistory,
    trustedContacts,
    coverageItems,
    activeModal,
    isSubmitting,
    contactTarget,
    convertAsset,
    convertAmount,
    emailSubject,
    emailBody,
    pushTitle,
    pushBody,
    openModal,
    closeModal,
    confirmFreezeWallet,
    confirmWelfareCheck,
    confirmLockAssets,
    confirmShareProfile,
    callContact,
    smsContact,
    setConvertAsset,
    setConvertAmount,
    isConvertValid,
    confirmConvert,
    confirmImpersonate,
    confirmFreezeAccount,
    setEmailSubject,
    setEmailBody,
    submitEmail,
    setPushTitle,
    setPushBody,
    submitPush,
  } = useSafetyStore();

  return (
    <div className="w-full">
      <div className="flex xl:flex-row flex-col items-start gap-6 mt-6">
        <div className="xl:w-[calc(100%-300px)] w-full p">
          <div className="bg-white flex items-center gap-4 border border-solid border-lighrgrey40 rounded-xl p-4">
            <span className="bg-azureblue12/10 w-12 h-12 flex items-center justify-center text-azureblue12 text-lg leading-7 font-bold rounded-full">
              {student.initials}
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-Black234 text-base leading-6 font-bold">
                {student.name}
              </h4>
              <p className="text-lighrgrey38 text-sm leading-5">
                Student ID: {student.studentId} • {student.location}
              </p>
            </div>
          </div>

          <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-6">
            <div className="bg-white flex items-start gap-2 shadow-4xl border border-l-4 border-solid border-lighrgrey40 border-l-orange-500 rounded-xl px-2.5 py-6">
              <span className="flex items-center w-4 h-4">
                <Image src="/images/shield-dark.svg" width={16} height={16} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-lighrgrey38 text-sm leading-5">Safety Status</h4>
                <span className="text-white mt-2.5 text-xs font-bold leading-4 inline-flex items-center justify-center bg-green-1600 rounded-full h-5.5 px-2.5">
                  {safetyStatus}
                </span>
                <p className="text-lighrgrey38 mt-2.5 text-xs leading-4 font-normal">
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>

            <div className="bg-white flex items-start gap-2 shadow-4xl border border-solid border-lighrgrey40 rounded-xl px-2.5 py-6">
              <span className="flex items-center w-4 h-4">
                <Image src="/images/location-gray.svg" width={16} height={16} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-lighrgrey38 text-sm leading-5">Recent Check-ins</h4>
                <ul className="mt-2">
                  {checkIns.map((ci) => (
                    <li key={ci.id} className="flex items-center gap-2 mb-2 last:mb-0">
                      <span className="flex items-center justify-center w-3 h-3">
                        <Image src="/images/clock-gray.svg" width={12} height={12} alt="" />
                      </span>
                      <div>
                        <h5 className="text-Black234 text-xs leading-4 font-normal">{ci.location}</h5>
                        <p className="text-lighrgrey38 text-xs leading-4 font-normal">{ci.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white flex items-start gap-2 shadow-4xl border border-solid border-lighrgrey40 rounded-xl px-2.5 py-6">
              <span className="flex items-center w-4 h-4">
                <Image src="/images/warning-gray.svg" width={16} height={16} alt="" />
              </span>
              <div className="flex-1 w-full">
                <h4 className="text-lighrgrey38 text-sm leading-5 mb-2">SOS Button History</h4>
                <p className="text-lighrgrey38 text-sm leading-5 font-normal flex items-center gap-2">
                  <Image src="/images/sheild-green.svg" width={16} height={16} alt="" />
                  {sosHistory}
                </p>
                <p className="text-lighrgrey38 text-xs leading-4 mt-2">{sosHistory}</p>
              </div>
            </div>
          </div>

          <div className="grid 4xl:grid-cols-2 grid-cols-1 items-start xl:gap-6 gap-0 mt-6">
            <div className="mb-4 border border-solid border-lighrgrey40 rounded-xl bg-white shadow-4xl sm:p-6 p-4">
              <h4 className="text-Black234 sm:mb-6 mb-4 flex items-center gap-2 sm:text-2xl text-[15px] leading-6 font-bold tracking-[-0.6px]">
                <Image src="/icons/Trusted-user.svg" width={20} height={20} alt="" />
                Trusted Contacts (Emergency Dossier)
              </h4>
              {trustedContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`mb-4 last:mb-0 flex items-start justify-between border border-solid rounded-xl p-4 ${
                    contact.isPrimary
                      ? "bg-yellow-2500/5 border-yellow-2500"
                      : "bg-white border-lighrgrey40"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`inline-flex items-center justify-center text-xs leading-4 font-bold rounded-full h-5.5 px-2.5 ${
                          contact.badgeStyle === "primary"
                            ? "text-white bg-black-2400"
                            : "text-Black234 bg-lighrgrey39"
                        }`}
                      >
                        {contact.badge}
                      </span>
                      <Image src="/icons/check-icon3.svg" width={16} height={16} alt="" />
                    </div>
                    <h4 className="text-Black234 text-base leading-6 font-bold mb-1">
                      {contact.name}
                    </h4>
                    <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-1">
                      {contact.role}
                    </p>
                    <span className="text-Black234 text-sm leading-5 font-normal">
                      {contact.phone}
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-2">
                        <button
                          onClick={() => callContact(contact)}
                          className="inline-flex items-center justify-center text-white font-normal text-sm leading-5 gap-3 bg-green-1600 hover:bg-green-1600/90 h-9 rounded-[10px] w-21.5 cursor-pointer transition-all duration-300"
                        >
                          <Image src="/images/call-icon.svg" width={16} height={16} alt="" className="brightness-10000" />
                          Call
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => smsContact(contact)}
                          className={`inline-flex items-center justify-center text-yellow-2500 font-normal text-sm leading-5 gap-3 border border-solid border-yellow-2500 hover:bg-yellow-2500/10 h-9 rounded-[10px] w-21.5 cursor-pointer transition-all duration-300 ${
                            contact.isPrimary ? "bg-SnowWhite" : ""
                          }`}
                        >
                          <Image src="/icons/sms-icon.svg" width={16} height={16} alt="" />
                          SMS
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="border border-solid border-lighrgrey40 rounded-xl bg-white shadow-4xl sm:p-6 p-4">
                <h4 className="text-Black234 sm:mb-6 mb-4 flex items-center gap-2 sm:text-2xl text-[15px] leading-6 font-bold tracking-[-0.6px]">
                  <Image src="/icons/sheild-dark-blue2.svg" width={20} height={20} alt="" />
                  Protection & Insurance
                </h4>

                {coverageItems.map((item) => {
                  if (item.variant === "coverage") {
                    return (
                      <div key={item.id} className="bg-white mb-4 flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between border border-solid border-lighrgrey40 rounded-xl p-4">
                        <div>
                          <h4 className="flex items-center mb-1 text-Black234 text-base gap-2 leading-6 font-normal">
                            <Image src={item.icon} width={16} height={16} alt="" />
                            {item.title}
                          </h4>
                          <div className="inline-flex mb-1 items-center text-white text-xs leading-4 gap-1 font-bold bg-green-1600 rounded-full h-5.5 px-2.5">
                            <Image src="/icons/check-icon3.svg" width={12} height={12} alt="" className="brightness-10000" />
                            {item.statusLabel}
                          </div>
                          <ul>
                            <li className="text-lighrgrey38 font-normal text-sm leading-5 mb-1">
                              Provider: <span className="text-Black234">{item.provider}</span>
                            </li>
                            <li className="text-lighrgrey38 font-normal text-sm leading-5 mb-1">
                              Policy #: <span className="text-Black234">{item.policyNumber}</span>
                            </li>
                            <li className="text-lighrgrey38 font-normal text-sm leading-5">
                              Valid until: <span className="text-Black234">{item.validUntil}</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button
                            onClick={() => openModal("viewPolicy")}
                            className="group inline-flex items-center justify-center text-Black234 font-normal text-sm leading-5 gap-3 hover:bg-violet55 hover:text-white border border-solid border-lighrgrey40 bg-SnowWhite h-9 rounded-[10px] w-32.5 cursor-pointer transition-all duration-300"
                          >
                            <Image src="/icons/expend-icon2.svg" width={16} height={16} alt="" className="group-hover:brightness-10000" />
                            View Policy
                          </button>
                        </div>
                      </div>
                    );
                  }

                  if (item.variant === "accident") {
                    return (
                      <div key={item.id} className="bg-white mb-4 flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between border border-solid border-lighrgrey40 rounded-xl p-4">
                        <div>
                          <h4 className="flex items-center mb-1 text-Black234 text-base gap-2 leading-6 font-normal">
                            <Image src={item.icon} width={16} height={16} alt="" />
                            {item.title}
                          </h4>
                          <div className="inline-flex mb-1 items-center text-white text-xs leading-4 gap-1 font-bold bg-green-1600 rounded-full h-5.5 px-2.5">
                            <Image src="/icons/check-icon3.svg" width={12} height={12} alt="" className="brightness-10000" />
                            {item.statusLabel}
                          </div>
                          <ul>
                            <li className="text-lighrgrey38 font-normal text-sm leading-5">
                              Coverage: <span className="text-Black234">{item.coverage}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  }

                  if (item.variant === "legal") {
                    return (
                      <div key={item.id} className="bg-yellow-2500/5 border border-solid border-yellow-2500/30 rounded-xl p-4">
                        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between">
                          <h4 className="flex items-center text-Black234 text-base gap-2 leading-6 font-normal">
                            <Image src={item.icon} width={16} height={16} alt="" />
                            {item.title}
                          </h4>
                          <button
                            onClick={() => openModal("contactLegal")}
                            className="group inline-flex items-center justify-center text-yellow-2500 font-normal text-sm leading-5 gap-3 hover:bg-yellow-2500/10 border border-solid border-yellow-2500 bg-SnowWhite h-9 rounded-[10px] w-36.75 cursor-pointer transition-all duration-300"
                          >
                            <Image src="/icons/expend-orange.svg" width={16} height={16} alt="" />
                            Contact Legal
                          </button>
                        </div>
                        <p className="text-lighrgrey38 mt-2 font-normal text-sm leading-5">
                          {item.description}
                        </p>
                        <p className="text-lighrgrey38 mt-4.5 flex sm:flex-nowrap flex-wrap items-center font-normal text-sm leading-5">
                          <Image src="/images/info-yellow.svg" width={16} height={16} alt="" className="mr-2" />
                          Emergency Hotline:<span className="text-Black234">{item.hotline}</span>
                        </p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <div className="border border-solid border-lighrgrey40 rounded-xl bg-white shadow-4xl sm:p-6 p-4 sm:mt-6 mt-4">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <Image src="/icons/warning-dark.svg" width={20} height={20} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-Black234 mb-6 flex items-center gap-2 text-2xl leading-6 font-bold tracking-[-0.6px]">
                      Admin Safety Actions
                    </h4>
                    <div className="mt-6">
                      <button
                        onClick={() => openModal("welfareCheck")}
                        className="w-full mb-3 border border-solid border-azureblue12/30 rounded-[10px] bg-SnowWhite hover:bg-azureblue12/5 sm:px-4 px-3 py-3 flex items-center sm:gap-5 gap-3 cursor-pointer transition-all duration-300"
                      >
                        <Image src="/icons/bell-dark.svg" width={16} height={16} alt="" />
                        <div className="flex-1 w-full text-left">
                          <h4 className="text-Black234 font-normal leading-5 text-sm">Trigger Welfare Check</h4>
                          <p className="text-lighrgrey38 font-normal leading-4 text-xs">Send push notification to confirm safety</p>
                        </div>
                      </button>
                      <button
                        onClick={() => openModal("lockAssets")}
                        className="w-full mb-3 border border-solid border-red-1300/30 rounded-[10px] bg-SnowWhite hover:bg-red-1300/5 sm:px-4 px-3 py-3 flex items-center sm:gap-5 gap-3 cursor-pointer transition-all duration-300"
                      >
                        <Image src="/icons/lock-red.svg" width={16} height={16} alt="" />
                        <div className="flex-1 w-full text-left">
                          <h4 className="text-red-1300 font-normal leading-5 text-sm">Lock All Digital Assets</h4>
                          <p className="text-red-1300 opacity-70 font-normal leading-4 text-xs">Freeze cards, crypto & accounts</p>
                        </div>
                      </button>
                      <button
                        onClick={() => openModal("shareProfile")}
                        className="w-full border border-solid border-yellow-2500/30 rounded-[10px] bg-SnowWhite hover:bg-yellow-2500/5 sm:px-4 px-3 py-3 flex items-center sm:gap-5 gap-3 cursor-pointer transition-all duration-300"
                      >
                        <Image src="/icons/share-icon.svg" width={16} height={16} alt="" />
                        <div className="flex-1 w-full text-left">
                          <h4 className="text-red-1300 font-normal leading-5 text-sm">Share Profile with Authorities</h4>
                          <p className="text-red-1300 opacity-70 font-normal leading-4 text-xs">Generate secure link for police/embassy</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdminActions/>
       
      </div>

      <Modal isOpen={activeModal === "freezeWallet"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-3.5 md:px-6 p-4">
          <h4 className="text-blue-1300 font-semibold text-lg leading-5 tracking-[-0.45px]">Freeze Wallet</h4>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">This is a high-security action. Freezing the wallet will immediately block all crypto withdrawals. Use this only for suspicious activity.</p>
          <div className="bg-red2300 border border-solid border-red2200/20 mt-5.5 rounded-lg p-1.5">
            <p className="text-red2200 flex items-center justify-center gap-2 text-sm leading-5 font-bold">
              <Image src="/images/warning.svg" width={16} height={16} alt="" />
              All pending and future withdrawals will be blocked
            </p>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmFreezeWallet} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Freezing...</> : "Confirm Freeze"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "convertCrypto"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <h4 className="text-blue-1300 flex items-center gap-3 font-bold text-lg leading-5 tracking-[-0.45px]">
            <span className="bg-blue-1000/10 flex items-center justify-center rounded-xl w-10 h-10">
              <Image src="/icons/converter-blue.svg" width={20} height={20} alt="" />
            </span>
            Convert Crypto to Fiat
          </h4>
          <p className="text-lighrgrey38 font-normal text-sm leading-5 mt-4">Sell crypto to cover student expenses like rent or fees.</p>
          <div className="mt-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">Asset</label>
            <CustomSelect
              className="shadow-57xl"
              options={[
                { label: "Select Asset", value: "Select Asset" },
                { label: "BTC", value: "BTC" },
                { label: "ETH", value: "ETH" },
                { label: "USDT", value: "USDT" },
              ]}
              onChange={(val: string) => setConvertAsset(val)}
            />
          </div>
          <div className="mt-4 mb-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">Amount</label>
            <input type="text" value={convertAmount} onChange={(e) => setConvertAmount(e.target.value)} className="border border-solid border-lighrgrey40 rounded-[10px] h-10 text-lighrgrey38 text-sm leading-4 px-3 w-full outline-0" placeholder="0.00" />
          </div>
          <button onClick={confirmConvert} disabled={!isConvertValid() || isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue-1000 border-solid border-blue-1000 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Converting...</> : "Convert to EUR"}
          </button>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "welfareCheck"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-azureblue12/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/bell-dark.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Trigger Welfare Check</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">A push notification will be sent to {student.name} asking them to confirm their safety. If no response within 1 hour, their emergency contacts will be notified.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmWelfareCheck} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-azureblue12/90 transition-all duration-500 ease-in-out bg-green-1600 border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-azureblue12 border-solid border-azureblue12 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Sending...</> : "Send Welfare Check"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "lockAssets"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/lock-red.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Lock All Digital Assets</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">This will immediately freeze all cards, crypto wallets, and bank accounts. The user will not be able to make any transactions until unlocked by an administrator.</p>
          <div className="bg-red2300 border border-solid border-red2200/20 mt-4 rounded-lg p-1.5">
            <p className="text-red2200 flex items-center justify-center gap-2 text-sm leading-5 font-bold">
              <Image src="/images/warning.svg" width={16} height={16} alt="" />
              This action takes effect immediately
            </p>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmLockAssets} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Locking...</> : "Lock All Assets"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "shareProfile"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-2500/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/share-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Share Profile with Authorities</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">A secure, time-limited link will be generated containing the student&apos;s profile, recent activity, and emergency contacts. This link can be shared with police or embassy officials.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmShareProfile} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center bg-green-1600 justify-center w-full hover:bg-yellow-2500/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-yellow-2500 border-solid border-yellow-2500 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Generating...</> : "Generate Secure Link"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "viewPolicy"} onClose={closeModal} panelClassName="max-w-[640px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 z-10">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-1600/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/file-blue-dark.svg" width={20} height={20} alt="" /></span>
            <div>
              <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Insurance Policy Details</h4>
              <p className="text-lighrgrey38 text-xs leading-4 font-normal mt-0.5">StudProtect International — SP-2024-IE-78234</p>
            </div>
          </div>
          <div className="bg-white border border-solid border-lighrgrey40 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between text-sm"><span className="text-lighrgrey38 font-normal">Provider</span><span className="text-Black234 font-semibold">StudProtect International</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-lighrgrey38 font-normal">Policy Number</span><span className="text-Black234 font-medium">SP-2024-IE-78234</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-lighrgrey38 font-normal">Valid Until</span><span className="text-Black234 font-medium">August 31, 2025</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-lighrgrey38 font-normal">Status</span><span className="inline-flex items-center text-white text-xs leading-4 gap-1 font-bold bg-green-1600 rounded-full h-5.5 px-2.5"><Image src="/icons/check-icon3.svg" width={12} height={12} alt="" className="brightness-10000" />Active</span></div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-4">
            <li><button onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">Close</button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "contactLegal"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-2500/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/legal-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Contact Legal Assistance</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">StudPay&apos;s legal help partner is available 24/7 for students facing legal issues abroad.</p>
          <div className="mt-4 bg-yellow-2500/5 border border-solid border-yellow-2500/20 rounded-lg p-3">
            <p className="text-yellow-2500 text-sm font-medium flex items-center gap-2">
              <Image src="/images/info-yellow.svg" width={16} height={16} alt="" />
              Emergency Hotline: +353 1 800 LEGAL
            </p>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">Close</button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "callContact"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-green-1600/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/call-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Call {contactTarget?.name}</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">You are about to initiate a call to <strong className="text-blue-1300">{contactTarget?.name}</strong> ({contactTarget?.role}) at <strong className="text-blue-1300">{contactTarget?.phone}</strong>.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">Cancel</button></li>
            <li><Link href={`tel:${contactTarget?.phone?.replace(/\s/g, "")}`} onClick={closeModal} className="cursor-pointer px-4 flex items-center justify-center hover:bg-green-1600/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-green-1600 border-solid border-green-1600 h-10">
              <Image src="/images/call-icon.svg" width={14} height={14} alt="" className="brightness-10000" />
              Call Now
            </Link></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "smsContact"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-2500/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/icons/sms-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">SMS {contactTarget?.name}</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">Send an SMS to <strong className="text-blue-1300">{contactTarget?.name}</strong> ({contactTarget?.role}) at <strong className="text-blue-1300">{contactTarget?.phone}</strong>.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">Cancel</button></li>
            <li><Link href={`sms:${contactTarget?.phone?.replace(/\s/g, "")}`} onClick={closeModal} className="cursor-pointer bg-green-1600 px-4 flex items-center justify-center hover:bg-yellow-2500/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-yellow-2500 border-solid border-yellow-2500 h-10">
              <Image src="/icons/sms-icon.svg" width={14} height={14} alt="" className="brightness-10000" />
              Send SMS
            </Link></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "impersonateUser"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue1400/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/eyes-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Impersonate User</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">You will view the platform as {student.name}. All actions during impersonation will be logged for audit purposes.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmImpersonate} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Starting...</> : "Start Impersonation"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "freezeAccount"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/freeze-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Freeze Account</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">This will immediately suspend all account activity including transactions, insurance claims, and premium payments.</p>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={confirmFreezeAccount} disabled={isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red1700/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red1700 border-solid border-red1700 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Freezing...</> : "Confirm Freeze"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "adjustLimits"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-1100/10 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/filter-yellow.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Adjust Account Limits</h4>
          </div>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">This action requires 4-eyes approval. A request will be sent to a second administrator for confirmation.</p>
          <div className="mt-4 bg-yellow-1100/5 border border-solid border-yellow-1100/20 rounded-md p-3 flex items-center gap-2">
            <Image src="/images/filter-yellow.svg" width={16} height={16} alt="" />
            <span className="text-yellow-1100 text-xs font-medium">4-Eyes verification required — a second admin must approve this change.</span>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">Cancel</button></li>
            <li><button onClick={closeModal} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-yellow-1100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-yellow-1100 border-solid border-yellow-1100 h-10">Submit for Approval</button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "sendEmail"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/email-black.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Send Email</h4>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">Subject</label>
              <input type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10" placeholder="Email subject..." />
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">Message</label>
              <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none" placeholder="Write your email..." />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={submitEmail} disabled={!emailSubject.trim() || !emailBody.trim() || isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Sending...</> : "Send Email"}
            </button></li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "sendPush"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <Link onClick={closeModal} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-8.5 md:px-6 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center"><Image src="/images/puch-icon.svg" width={20} height={20} alt="" /></span>
            <h4 className="text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]">Send Push Notification</h4>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">Title</label>
              <input type="text" value={pushTitle} onChange={(e) => setPushTitle(e.target.value)} className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 border border-solid border-gray-3600 rounded-md w-full h-10" placeholder="Notification title..." />
            </div>
            <div>
              <label className="text-gray-1200 text-xs leading-4 font-medium block mb-1.5">Body</label>
              <textarea value={pushBody} onChange={(e) => setPushBody(e.target.value)} className="text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900/50 border border-solid border-gray-3600 rounded-md w-full h-25 resize-none" placeholder="Notification message..." />
            </div>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li><button onClick={closeModal} disabled={isSubmitting} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10 disabled:opacity-50 disabled:cursor-not-allowed">Cancel</button></li>
            <li><button onClick={submitPush} disabled={!pushTitle.trim() || !pushBody.trim() || isSubmitting} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue1400/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue1400 border-solid border-blue1400 h-10 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>Sending...</> : "Send Notification"}
            </button></li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default StudSafePage;