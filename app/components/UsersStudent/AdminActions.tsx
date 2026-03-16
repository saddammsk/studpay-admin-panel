'use client';
import Image from 'next/image';
import { useModalStore } from '@/app/store/zustand/useModalStore';
import ImpersonateModal from './ImpersonateModal';
import FreezeAccountModal from './FreezeAccountModal';
import AdjustLimitsModal from './AdjustLimitsModal';
import EmailModal from './EmailModal';
import PushModal from './PushModal';


const AdminActions = () => {
  const { openModal, activeModal, modalData, closeModal } = useModalStore();


  return (
    <div className='flex-1 w-full bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
      <h4 className='text-black-1600 font-inter font-semibold text-base leading-6 tracking-[-0.4px] gap-2 flex items-center'>
        <Image 
          src="/images/sheild-active.svg"
          width="16"
          height="16"
          alt="Shield icon"
        />
        Administrative Actions
      </h4>
      
      <ul className='mt-3'>
        <li className='mb-2'>
          <button 
            onClick={() => openModal('impersonate', { userId: '123' })}
            className='w-full text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-blue1400 hover:bg-blue-1400 transition-all duration-500 ease-in-out rounded-md px-4 h-10'
          >
            <Image 
              src="/images/eyes-icon.svg"
              width="16"
              height="16"
              alt=""
              className='brightness-1000'
            />
            Impersonate User
          </button>
        </li>
        
        <li className='mb-2'>
          <button 
            onClick={() => openModal('freeze')}
            className='w-full text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-red1700 hover:bg-red1700/90 transition-all duration-500 ease-in-out rounded-md px-4 h-10'
          >
            <Image 
              src="/images/freeze-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            Freeze Account
          </button>
        </li>
        
        <li>
          <button 
            onClick={() => openModal('adjustLimits')}
            className='w-full text-yellow-1100 border border-solid border-yellow-1100/50 text-sm leading-5 font-inter font-medium flex items-center justify-between bg-gray-1600 hover:bg-skyblue2434 transition-all duration-500 ease-in-out rounded-md px-4 h-10'
          >
            <div className='flex items-center gap-2'>
              <Image 
                src="/images/filter-yellow.svg"
                width="16"
                height="16"
                alt=""
              />
              Adjust Limits
            </div>
            <span className='text-yellow-1100 font-inter font-medium text-[10px] leading-5 bg-yellow-1100/10 rounded px-1.5 h-6'>
              4-Eyes
            </span>
          </button>
        </li>
      </ul>
      
      <div className='border-t border-b border-solid border-gray-3100 py-3 mt-3'>
        <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>
          Send Message
        </h4>
        
        <ul className='mt-2 grid grid-cols-2 gap-3'>
          <li>
            <button 
              onClick={() => openModal('email')}
              className='w-full inline-flex items-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'
            >
              <Image 
                src="/images/email-black.svg"
                width="16"
                height="16"
                alt=""
              />
              Email
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => openModal('push')}
              className='w-full inline-flex items-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'
            >
              <Image 
                src="/images/puch-icon.svg"
                width="16"
                height="16"
                alt=""
              />
              Push
            </button>
          </li>
        </ul>
      </div>
      
      <div className='pt-3'>
        <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>
          Quick Stats
        </h4>
        
        <ul className='grid grid-cols-2 gap-3 mt-2'>
          <li>
            <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>
              Account Age
            </span>
            <p className="text-black-1600 font-medium text-sm leading-5">
              2y 4mo
            </p>
          </li>
          
          <li>
            <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>
              Total Txns
            </span>
            <p className="text-black-1600 font-medium text-sm leading-5">
              1,247
            </p>
          </li>
          
          <li>
            <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>
              Avg. Monthly
            </span>
            <p className="text-black-1600 font-medium text-sm leading-5">
              €3,450
            </p>
          </li>
          
          <li>
            <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>
              Support Tickets
            </span>
            <p className="text-black-1600 font-medium text-sm leading-5">
              12
            </p>
          </li>
        </ul>
      </div>

        <ImpersonateModal 
        isOpen={activeModal === 'impersonate'} 
        onClose={closeModal} 
        data={modalData}
      />
      <FreezeAccountModal 
        isOpen={activeModal === 'freeze'} 
        onClose={closeModal} 
        data={modalData}
      />
      <AdjustLimitsModal 
        isOpen={activeModal === 'adjustLimits'} 
        onClose={closeModal} 
        data={modalData}
      />
      <EmailModal 
        isOpen={activeModal === 'email'} 
        onClose={closeModal} 
        data={modalData}
      />
      <PushModal 
        isOpen={activeModal === 'push'} 
        onClose={closeModal} 
        data={modalData}
      />
    </div>
  );
};

export default AdminActions;