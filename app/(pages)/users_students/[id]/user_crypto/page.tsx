"use client";

import Image from "next/image";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import UserCryptoAssetTable from "@/app/components/UsersStudent/UserCryptoAssetTable";
import UserCryptoLedgerTable from "@/app/components/UsersStudent/UserCryptoLedgerTable";
import { useCryptoStore } from "@/app/store/zustand/UseCryptoStore";
import AdminActions from "@/app/components/UsersStudent/AdminActions";

const UsersStudentsPage = () => {
  const {
    activeModal,
    openModal,
    closeModal,
    convertAsset,
    convertAmount,
    setConvertAsset,
    setConvertAmount,
    isConvertValid,
    submitConvert,
  } = useCryptoStore();

  return (
    <div className="w-full">
      <div className="flex xl:flex-row flex-col items-start gap-6 mt-6">
        <div className="xl:w-[calc(100%-300px)] w-full p">
          <div className="grid 4xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl gradient-new">
                  <Image src="/images/wallet-blue.svg" width={24} height={24} alt="" className="brightness-10000" />
                </span>
                <span className="text-green-1600 text-sm leading-5 font-normal flex items-center gap-1">
                  <Image src="/images/price-arrow-green.svg" width={16} height={16} alt="" />
                  +3.24%
                </span>
              </div>
              <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-1">Total Crypto Value</p>
              <h4 className="text-Black234 text-[30px] leading-9 font-bold">6.387,15 €</h4>
            </div>
            <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-lighrgrey39">
                  <Image src="/icons/sheild-dark-blue.svg" width={24} height={24} alt="" />
                </span>
                <span className="text-white text-xs leading-4 font-bold flex items-center bg-green-1600 rounded-full h-5.5 px-2.5">Wallet Active</span>
              </div>
              <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-1">Wallet Status</p>
              <h4 className="text-Black234 text-lg leading-7 font-bold">Security Level: High</h4>
              <p className="text-lighrgrey38 text-sm leading-5 font-normal mt-1">Last verified: 2 hours ago</p>
            </div>
            <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-lighrgrey39">
                  <Image src="/icons/Connecte.svg" width={24} height={24} alt="" />
                </span>
                <span className="text-lighrgrey38 text-sm leading-5 font-normal">2 Connected</span>
              </div>
              <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-3">Connected Wallets</p>
              <ul>
                <li className="flex items-center justify-between mb-2">
                  <p className="text-Black234 font-normal text-xs leading-6 flex items-center gap-2">
                    <span className="bg-violet55 rounded-full flex items-center w-2 h-2" /> StudPay Wallet
                  </p>
                  <span className="text-lighrgrey38 text-xs leading-4 font-normal inline-flex items-center rounded bg-lighrgrey39 h-5 max-w-27.5 w-full px-2">0x742d...f7e8</span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-Black234 font-normal text-xs leading-6 flex items-center gap-2">
                    <span className="bg-lighrgrey38 rounded-full flex items-center w-2 h-2" /> MetaMask
                  </p>
                  <span className="text-lighrgrey38 text-xs leading-4 font-normal inline-flex items-center rounded bg-lighrgrey39 h-5 max-w-27.5 w-full px-2">0x8ba1...9a1c</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
            <div className="flex sm:flex-row flex-col sm:items-center items-start px-6 pt-6 pb-4 border-b border-solid border-gray-1000">
              <h4 className="text-Black234 font-bold text-lg leading-7">Asset Holdings</h4>
            </div>
            <UserCryptoAssetTable />
          </div>

          <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-3 items-start justify-between px-2 sm:pt-6 pt-4 pb-4 border-b border-solid border-gray-1000">
              <h4 className="text-Black234 font-bold text-lg leading-7">Crypto Transaction Ledger</h4>
              <span className="text-lighrgrey38 text-xs leading-4 font-bold border border-solid border-lighrgrey40 rounded-full h-5.5 px-2.5 flex items-center justify-center">5 Transactions</span>
            </div>
            <UserCryptoLedgerTable />
          </div>

          <div className="bg-white mt-6 rounded-xl shadow-63xl sm:p-6 p-4">
            <h4 className="text-Black234 text-lg leading-7 font-bold">Admin Control Actions</h4>
            <p className="text-lighrgrey38 text-sm leading-5 font-normal">High-security administrative actions for wallet management</p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6">
              <button
                type="button"
                onClick={() => openModal("freezeWallet")}
                className="group cursor-pointer flex items-center gap-4 border-2 border-solid border-red-1300 rounded-[10px] hover:border-red-1300/90 bg-red-1300 hover:bg-red-1300/90 transition-all duration-500 ease-in-out 2xl:px-6 px-4 py-4 text-left"
              >
                <span className="bg-white/20 flex items-center justify-center rounded-xl w-10 h-10">
                  <Image src="/icons/freez-icon.svg" width={16} height={16} alt="" />
                </span>
                <div className="flex-1 w-full">
                  <h4 className="text-white text-sm leading-5 font-bold">Convert to Fiat</h4>
                  <p className="text-white text-xs leading-4 font-normal">Sell crypto to cover expenses</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => openModal("convertFiat")}
                className="group cursor-pointer flex items-center gap-4 border-2 border-solid border-lighrgrey40 rounded-[10px] hover:border-violet55 bg-white hover:bg-violet55/5 transition-all duration-500 ease-in-out 2xl:px-6 px-4 py-4 text-left"
              >
                <span className="bg-violet55/10 flex items-center justify-center rounded-xl w-10 h-10">
                  <Image src="/icons/convert-icon.svg" width={16} height={16} alt="" />
                </span>
                <div className="flex-1 w-full">
                  <h4 className="text-Black234 text-sm leading-5 font-bold">Freeze Crypto Wallet</h4>
                  <p className="text-lighrgrey38 text-xs leading-4 font-normal">Stop all withdrawals immediately</p>
                </div>
              </button>
            </div>
          </div>
        </div>

          <AdminActions/>
         
      </div>

      <Modal isOpen={activeModal === "freezeWallet"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </button>
        <div className="md:py-3.5 md:px-6 p-4">
          <h4 className="text-blue-1300 font-semibold text-lg leading-5 tracking-[-0.45px]">Freeze Wallet</h4>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This is a high-security action. Freezing the wallet will immediately block all crypto withdrawals. Use this only for suspicious activity.
          </p>
          <div className="bg-red2300 border border-solid border-red2200/20 mt-5.5 rounded-lg p-1.5">
            <p className="text-red2200 flex items-center justify-center gap-2 text-sm leading-5 font-bold">
              <Image src="/images/warning.svg" width={16} height={16} alt="" />
              All pending and future withdrawals will be blocked
            </p>
          </div>
          <ul className="flex items-center justify-end gap-3 mt-6">
            <li>
              <button type="button" onClick={closeModal} className="px-4 cursor-pointer hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10">
                Cancel
              </button>
            </li>
            <li>
              <button type="button" onClick={closeModal} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10">
                Confirm Terminate
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "convertFiat"} onClose={closeModal} panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </button>
        <div className="md:p-6 p-4">
          <h4 className="text-blue-1300 flex items-center gap-3 font-bold text-lg leading-5 tracking-[-0.45px]">
            <span className="bg-blue-1000/10 flex items-center justify-center rounded-xl w-10 h-10">
              <Image src="/icons/converter-blue.svg" width={20} height={20} alt="" />
            </span>
            Convert Crypto to Fiat
          </h4>
          <p className="text-lighrgrey38 font-normal text-sm leading-5 mt-4">Sell crypto to cover student expenses like rent or fees.</p>
          <div className="mt-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">Card Purpose</label>
            <CustomSelect
              className=""
              options={[
                { label: "Select Asset", value: "" },
                { label: "Bitcoin (BTC)", value: "btc" },
                { label: "Ethereum (ETH)", value: "eth" },
              ]}
              value={convertAsset}
              onChange={(value: string) => setConvertAsset(value)}
            />
          </div>
          <div className="mt-4 mb-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">Amount</label>
            <input
              type="text"
              className="border border-solid border-lighrgrey40 rounded-[10px] h-10 text-lighrgrey38 text-sm leading-4 px-3 w-full"
              placeholder="0.00"
              value={convertAmount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConvertAmount(e.target.value)}
            />
          </div>
          <button
            type="button"
            disabled={!isConvertValid()}
            onClick={submitConvert}
            className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue-1000 border-solid border-blue-1000 disabled:opacity-50 h-10"
          >
            Convert to EUR
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;