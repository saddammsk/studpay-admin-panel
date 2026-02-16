/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AddEditAppointmentModal } from '@/app/components/identification/AddeditappointmentModal';
import Button from '@/app/components/ui/Button';
import { AppointmentStatus, useAppointmentStore } from '@/app/store/zustand/useAppointmentStore';
import Image from 'next/image';

const statusConfig: Record<AppointmentStatus, { classes: string }> = {
  completed: {
    classes: 'bg-lightgreen12 text-green12',
  },
  scheduled: {
    classes: 'bg-green-1200 text-blue-1000',
  },
  cancelled: {
    classes: 'bg-red-100 text-red-700',
  },
};

const typeIcons: Record<string, string> = {
  video: '/images/video-icon.svg',
  phone: '/images/phone-icon.svg',
  'in-person': '/images/location-icon.svg',
};

const typeLabels: Record<string, string> = {
  video: 'video',
  phone: 'phone',
  'in-person': 'in-person',
};

export default function AppointmentsPage() {
  const {
    filteredAppointments,
    openAddModal,
    openEditModal,
  } = useAppointmentStore();

  return (
    <div className="flex-1">
      <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-4xl md:p-6.25 p-4">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between sm:mb-6 mb-4 sm:gap-0 gap-4">
          <h4 className="text-black13 flex items-center gap-2 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
            <Image
              src="/images/appointment-icon.svg"
              width="20"
              height="20"
              alt=""
              className="brightness-0"
            />
            Appointment Scheduling
          </h4>
          <Button
            iconSrc="/images/plus-icon.svg"
            label="Schedule"
            onClick={openAddModal}
            className="text-white text-[13.45px] gap-2 h-9 px-4 bg-blue-1000 hover:bg-blue-1100 rounded-md"
          />
        </div>

        {filteredAppointments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-1200 mb-4">No appointments scheduled.</p>
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
            >
              Schedule First Appointment
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => openEditModal(item)}
              >
                <div className="">
                  <h4 className="text-black13 font-segoe font-normal text-base leading-5 mb-2">
                    {item.name}
                  </h4>
                  <ul className="flex items-center gap-4 flex-wrap">
                    <li>
                      <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                        <Image
                          src="/images/date-icon.svg"
                          width="12"
                          height="12"
                          alt=""
                        />
                        {item.date}
                      </span>
                    </li>
                    <li>
                      <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                        <Image
                          src="/images/clock-gray.svg"
                          width="12"
                          height="12"
                          alt=""
                        />
                        {item.time}
                      </span>
                    </li>
                    <li>
                      <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                        <Image
                          src={typeIcons[item.type] || '/images/video-icon.svg'}
                          width="12"
                          height="12"
                          alt=""
                        />
                        {typeLabels[item.type]}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-xs font-normal leading-4 ${
                      statusConfig[item.status].classes
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AddEditAppointmentModal />
    </div>
  );
}