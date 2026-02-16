/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/app/components/ui/Button';
import Image from 'next/image';
import { ReportPriority, useInterviewReportStore } from '@/app/store/zustand/UseInterviewReportStore';
import { AddEditReportModal } from '@/app/components/identification/AddEditReportModal';

const priorityConfig: Record<ReportPriority, { classes: string }> = {
  'High Priority': {
    classes: 'bg-green-1200 text-green-1100',
  },
  'Medium Priority': {
    classes: 'bg-yellow1200 text-brown-1000',
  },
  'Low Priority': {
    classes: 'bg-gray-1300 text-gray-1700',
  },
};

const candidateTypeConfig: Record<string, { classes: string }> = {
  'Premium Candidate': {
    classes: 'bg-green-1200 text-blue-1000',
  },
  'Standard Candidate': {
    classes: 'bg-green-1200 text-blue-1000',
  },
  'Follow-up Required': {
    classes: 'bg-green-1200 text-blue-1000',
  },
};

export default function InterviewReportsPage() {
  const {
    filteredReports,
    openAddModal,
    openEditModal,
  } = useInterviewReportStore();

  return (
    <div className="flex-1 mt-2">
      <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-4xl md:p-6.25 p-4">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between sm:mb-6 mb-4 sm:gap-0 gap-4 pb-4">
          <h4 className="text-black13 flex items-center gap-2 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
            <Image
              src="/images/message-icon.svg"
              width="20"
              height="20"
              alt=""
              className="brightness-0"
            />
            Interview Reports & Opportunity Tags
          </h4>
          <Button
            iconSrc="/images/plus-icon.svg"
            label="Add Report"
            onClick={openAddModal}
            className="text-white text-[13.45px] gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue-1100 rounded-md"
          />
        </div>

        {filteredReports.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-1200 mb-4">No reports found.</p>
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors"
            >
              Add First Report
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReports.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col-reverse items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 hover:bg-gray-50 transition-colors"
              >
                <div className="">
                  <h4 className="text-black13 font-segoe font-normal text-base leading-5">
                    {item.title}
                  </h4>
                  <p className="text-gray-1700 my-2 font-segoe font-normal text-[13.89px] leading-5">
                    {item.description}
                  </p>
                  <ul className="flex items-center gap-2 flex-wrap">
                    <li>
                      <span
                        className={`inline-flex items-center justify-center font-segoe font-normal text-[11.81px] leading-4.5 h-6 rounded-full px-2 ${
                          priorityConfig[item.priority].classes
                        }`}
                      >
                        {item.priority}
                      </span>
                    </li>
                    <li>
                      <span
                        className={`inline-flex items-center justify-center font-segoe font-normal text-[11.81px] leading-4.5 h-6 rounded-full px-2 ${
                          candidateTypeConfig[item.candidateType].classes
                        }`}
                      >
                        {item.candidateType}
                      </span>
                    </li>
                  </ul>
                </div>

                <ul className="flex items-center sm:justify-start justify-end sm:w-auto w-full gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}>
                      <Image
                        src="/images/star-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AddEditReportModal />
    </div>
  );
}