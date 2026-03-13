/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import AdminActions from '@/app/components/UsersStudent/AdminActions';
import { Card, useCardInventoryStore } from "@/app/store/zustand/useCardInventoryStore";
import { RecentCardTransactions } from "./_components/RecentCardTransactions";
import { SpendingLimits } from "./_components/SpendingLimits";
import AdjustLimitsModal from "./_components/AdjustLimitsModal";
import OrderPhysicalCardModal from "./_components/OrderPhysicalCardModal";
import CreateVirtualCardModal from "./_components/CreateVirtualCardModal";
import FreezeCardModal from "./_components/FreezeCardModal";
import ReportStolenModal from "./_components/ReportStolenModal";
import UnblockPinModal from "./_components/UnblockPinModal";

const freezeReasons = [
  { name: 'Suspicious Activity Detected' },
  { name: 'Lost/Stolen Reported' },
  { name: 'Compliance Review Pending' },
  { name: 'User Request' },
];

const identityCheckPlans = [
  { name: "I have verified the user's identity via security questions" },
];

const Notification = () => {
  const { notification, clearNotification } = useCardInventoryStore();
  if (!notification) return null;
  const colors: Record<string, string> = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
  };
  return (
    <div className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${colors[notification.type]}`}>
      <span className="text-sm font-medium">{notification.message}</span>
      <button onClick={clearNotification} className="text-white/80 hover:text-white text-lg leading-none">×</button>
    </div>
  );
};

const StatusBadge = ({ status }: { status: Card['status'] }) => {
  if (status === 'Active') return (
    <div className='inline-flex items-center bg-green-1900 rounded-full h-5 px-2.5 gap-1.5 text-green-1600 font-inter font-medium text-xs leading-4'>
      <span className='flex items-center bg-green-1600 rounded-full w-1.5 h-1.5'></span>
      Active
    </div>
  );
  if (status === 'Frozen') return (
    <div className='inline-flex items-center bg-green-1900 rounded-full h-5 px-2.5 gap-1.5 text-yellow-1100 font-inter font-medium text-xs leading-4'>
      <span className='flex items-center bg-yellow-1100 rounded-full w-1.5 h-1.5'></span>
      Frozen
    </div>
  );
  return (
    <div className='inline-flex items-center bg-red-1300/10 rounded-full h-5 px-2.5 gap-1.5 text-red-1300 font-inter font-medium text-xs leading-4'>
      <span className='flex items-center bg-red-1300 rounded-full w-1.5 h-1.5'></span>
      Blocked
    </div>
  );
};

const CardRow = ({ card }: { card: Card }) => {
  const { openModal, toggleOnlineTransactions, unfreezeCard } = useCardInventoryStore();

  return (
    <div className='bg-white shadow-53xl 5xl:p-6 p-4 5xl:gap-6 gap-4 flex md:flex-row flex-col items-start rounded-lg mb-4'>
      <div className='4xl:max-w-[256px] md:max-w-57.5 max-w-full md:block flex items-center justify-center w-full'>
        <Image src={card.imageSrc} width="256" height="160" alt="" className='sm:w-auto w-full' />
      </div>
      <div className='flex-1 w-full'>
        <div className='flex items-center justify-between'>
          <div>
            <h4 className='text-blue-1300 font-inter font-bold text-base leading-6'>
              {card.type} {card.network} Card
            </h4>
            <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>•••• •••• •••• {card.lastFour}</p>
          </div>
          <StatusBadge status={card.status} />
        </div>

        <div className='flex items-center gap-4 mt-4.5'>
          <span className='text-gray-1900 font-normal text-sm leading-5 flex items-center gap-2'>
            <Image src="/images/mobile-dark.svg" width="16" height="16" alt="" />
            Tokenization:
          </span>
          <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
            <li>
              <span className={`font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md ${card.tokenization.applePay ? 'text-green-1600 bg-green-1900' : 'text-gray-1900 bg-gray1700'}`}>
                Apple Pay
              </span>
            </li>
            <li>
              <span className={`font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md ${card.tokenization.googlePay ? 'text-green-1600 bg-green-1900' : 'text-gray-1900 bg-gray1700'}`}>
                Google Pay
              </span>
            </li>
          </ul>
        </div>

        <div className='flex 4xl:flex-row flex-col 4xl:items-center items-start 4xl:gap-0 gap-4 justify-between mt-6'>
          <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
            {card.status === 'Frozen' ? (
              <li>
                <button
                  onClick={() => unfreezeCard(card.id)}
                  className='group text-green-1600 bg-green-1900 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'
                >
                  <Image src="/images/freeze-dark.svg" width="16" height="16" alt="" className='group-hover:brightness-10000' />
                  Unfreeze Card
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => openModal('freezeCard', card.id)}
                  disabled={card.status === 'Blocked'}
                  className='group text-blue-1300 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
                >
                  <Image src="/images/freeze-dark.svg" width="16" height="16" alt="" className='group-hover:brightness-10000' />
                  Freeze Card
                </button>
              </li>
            )}
            <li>
              <button
                onClick={() => openModal('reportStolen', card.id)}
                disabled={card.status === 'Blocked'}
                className='group text-red-1000 bg-gray-1500 hover:bg-red-50 transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
              >
                <Image src="/images/warning-sheild.svg" width="16" height="16" alt="" />
                Report Stolen
              </button>
            </li>
            <li>
              <button
                onClick={() => openModal('unblockPin', card.id)}
                className='group text-blue-1300 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'
              >
                <Image src="/images/key-icon.svg" width="16" height="16" alt="" className='group-hover:brightness-10000' />
                Unblock PIN
              </button>
            </li>
          </ul>
          <div className='flex items-center 5xl:gap-8 gap-1.5'>
            <span className='text-gray-1900 font-inter font-normal 4xl:text-sm text-xs leading-5 block'>Online Transection</span>
            <ToggleSwitch
              checked={card.onlineTransactions}
              onChange={() => toggleOnlineTransactions(card.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UsersStudentsPage = () => {
  const {
    cards,
    spendingLimits,
    modals,
    openModal,
    closeModal,

    adjustLimitsForm,
    updateAdjustLimitsForm,
    submitAdjustLimits,
    resetAdjustLimitsForm,

    orderPhysicalCardForm,
    updateOrderPhysicalCardForm,
    submitOrderPhysicalCard,

    createVirtualCardForm,
    updateCreateVirtualCardForm,
    submitCreateVirtualCard,

    freezeCardForm,
    updateFreezeCardForm,
    freezeCard,

    reportStolenForm,
    updateReportStolenForm,
    reportCardStolen,

    unblockPinForm,
    updateUnblockPinForm,
    unblockPin,
  } = useCardInventoryStore();



  const selectedFreezeReason = freezeReasons.find((p) => p.name === freezeCardForm.reason) ?? freezeReasons[0];

  return (
    <div className='font-inter'>
      <Notification />

      <div className='flex 2xl:flex-row flex-col items-start gap-4'>
        <div className='2xl:w-[calc(100%-300px)] w-full 4xl:p-6 2xl:py-6 px-0'>

          {/* ── Header ── */}
          <div className='flex md:flex-row flex-col md:items-center md:gap-0 gap-4 justify-between mb-6'>
            <div>
              <h4 className='text-blue-1300 font-inter font-bold text-2xl leading-7'>Card Inventory</h4>
              <p className='text-gray-1900 font-inter font-normal 4xl:text-sm text-xs leading-5'>Manage physical and virtual cards for this customer</p>
            </div>
            <ul className='flex sm:flex-row flex-col items-center gap-2'>
              <li className='sm:w-auto w-full'>
                <Link href={"#"} onClick={(e) => { e.preventDefault(); openModal('orderPhysicalCard'); }}
                  className='group sm:w-auto w-full inline-flex items-center justify-center text-blue-1300 font-medium text-sm leading-5 gap-2 hover:bg-blue1400 hover:border-blue1400 hover:text-white bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 px-4'>
                  <Image src="/images/card-black.svg" width="16" height="16" alt="" className='group-hover:brightness-10750' />
                  Order Physical Card
                </Link>
              </li>
              <li className='sm:w-auto w-full'>
                <Link href={"#"} onClick={(e) => { e.preventDefault(); openModal('createVirtualCard'); }}
                  className='group sm:w-auto w-full inline-flex items-center justify-center font-medium text-sm leading-5 gap-2 bg-blue1400 hover:bg-blue1400/90 border-blue1400 text-white border border-solid rounded-md h-10 px-4'>
                  <Image src="/images/mobile-icon.svg" width="16" height="16" alt="" />
                  Create Virtual Card
                </Link>
              </li>
            </ul>
          </div>

          {cards.map((card) => <CardRow key={card.id} card={card} />)}

          <div className='mt-6 flex 4xl:flex-row flex-col gap-6'>
             <SpendingLimits  
             spendingLimits={spendingLimits}
              openModal={openModal} />

            <RecentCardTransactions/>
          </div>
        </div>

        <AdminActions />
      </div>


      <AdjustLimitsModal
        isOpen={modals.adjustLimits}
        onClose={() => closeModal('adjustLimits')}
        formData={adjustLimitsForm}
        spendingLimits={spendingLimits}
        updateForm={updateAdjustLimitsForm}
        resetForm={resetAdjustLimitsForm}
        submitForm={submitAdjustLimits}
      />

 
      <OrderPhysicalCardModal
      isOpen={modals.orderPhysicalCard}
       onClose={() => closeModal('orderPhysicalCard')}
        formData={orderPhysicalCardForm}
        updateForm={updateOrderPhysicalCardForm}
        submitForm={submitOrderPhysicalCard}
      />


      <CreateVirtualCardModal
      isOpen={modals.createVirtualCard}
      onClose={() => closeModal('createVirtualCard')}
      formData={createVirtualCardForm}
      updateForm={updateCreateVirtualCardForm}
      submitForm={submitCreateVirtualCard}
      />


      <FreezeCardModal
        isOpen={modals.freezeCard}
        onClose={() => closeModal('freezeCard')}
        freezeCardForm={freezeCardForm}
        updateFreezeCardForm={updateFreezeCardForm}
        freezeCard={freezeCard}
        cards={cards}
        freezeReasons={freezeReasons}
        selectedFreezeReason={selectedFreezeReason}
      />


      <ReportStolenModal
      isOpen={modals.reportStolen}
      onClose={() => closeModal('reportStolen')}
      reportStolenForm={reportStolenForm}
      updateReportStolenForm={updateReportStolenForm}
      reportCardStolen={reportCardStolen}
      cards={cards}
      
      />


      <UnblockPinModal
        isOpen={modals.unblockPin}
        onClose={() => closeModal('unblockPin')}
        unblockPinForm={unblockPinForm}
        updateUnblockPinForm={updateUnblockPinForm}
        unblockPin={unblockPin}
        cards={cards}
        identityCheckPlans={identityCheckPlans}
        />

     
    </div>
  );
};

export default UsersStudentsPage;