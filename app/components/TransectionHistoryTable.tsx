/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import CustomSelect from '@/app/components/CustomSelect';
import InputField from '@/app/components/InputField';
import { useTransactionStore, type PaymentStatus } from '@/app/store/zustand/Usetransactionstore';

const statusConfig: Record<PaymentStatus, { classes: string }> = {
  completed: {
    classes: 'bg-green-1200 text-green-1100',
  },
  pending: {
    classes: 'bg-yellow1200 text-brown-1000',
  },
};

export default function TransactionTable() {
  const {
    payments,
    filterType,
    filterDate,
    searchTerm,
    filteredPayments,
    totalAmount,
    stats,
    setFilterType,
    setFilterDate,
    setSearchTerm,
    updatePaymentStatus,
  } = useTransactionStore();

  const handleExport = () => {
    const csvData = [
      ['Transaction ID', 'Date', 'Type', 'Description', 'Amount', 'Status'],
      ...filteredPayments.map((p:any) => [
        p.transaction,
        p.date,
        p.type,
        p.description,
        p.amount,
        p.status,
      ]),
    ];

    const csvString = csvData.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-gray-1000 rounded-lg">
      <div className="sm:py-8.25 sm:px-6 p-4 flex sm:gap-0 gap-4 sm:flex-row flex-col sm:items-center justify-between border-b border-gray-1000">
        <h4 className="text-black13 font-segoe font-normal text-2xl leading-5">
          Transaction History
        </h4>
        <ul className="sm:flex grid grid-cols-2 items-center gap-2">
          <li>
            <button
              onClick={handleExport}
              disabled={filteredPayments.length === 0}
              className="sm:w-auto w-full text-black13 gap-2 hover:bg-gray-1600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 ease-in-out font-segoe font-normal text-sm leading-5 border border-solid border-gray1600 rounded-md px-3.25 h-9 inline-flex items-center justify-center"
            >
              <img src="/icons/export-icon-4.svg" alt="" />
              Export
            </button>
          </li>
          <li>
            <Link
              href="#"
              className="sm:w-auto w-full text-black13 gap-2 hover:bg-gray-1600 transition-all duration-500 ease-in-out font-segoe font-normal text-sm leading-5 border border-solid border-gray1600 rounded-md px-3.25 h-9 inline-flex items-center justify-center"
            >
              <img src="/icons/filter-icon-4.svg" alt="" />
              Filter
            </Link>
          </li>
        </ul>
      </div>

      {/* Filters */}
      <div className="sm:px-6 px-4 sm:py-6 py-4 border-b border-gray-1000">
        <form>
          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div className="md:max-w-47.75 sm:max-w-32.5 w-full">
              <CustomSelect
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                options={[
                  { label: 'All Types', value: 'All Types' },
                  { label: 'Recharge', value: 'Recharge' },
                  { label: 'Payment', value: 'Payment' },
                  { label: 'Withdrawal', value: 'Withdrawal' },
                  { label: 'Approved', value: 'Approved' },
                  { label: 'Rejected', value: 'Rejected' },
                ]}
              />
            </div>
            <div className="md:max-w-47.75 sm:max-w-35 max-w-full w-full">
              <CustomSelect
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                options={[
                  { label: 'Last 7 days', value: 'Last 7 days' },
                  { label: 'Last 30 days', value: 'Last 30 days' },
                  { label: 'Last 90 days', value: 'Last 90 days' },
                  { label: 'All Time', value: 'All Time' },
                ]}
              />
            </div>
            <div className="max-w-[320px] w-full">
              <InputField
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e: any) => setSearchTerm(e.target.value)}
                ClassName="pl-3! rounded-md!"
              />
            </div>
          </div>
        </form>
      </div>

  

      {/* Table */}
      <div className="sm:px-6 px-4 sm:pb-6 pb-4">
        {filteredPayments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-1200">No transactions found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="2xl:w-full w-170">
              <thead>
                <tr className="border-b border-gray1600">
                  <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Description
                  </th>
                  <th className="px-4 py-3 text-right text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray1600 hover:bg-gray1700/50 transition-colors"
                  >
                    <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">
                      {item.transaction}
                    </td>
                    <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">
                      {item.date}
                    </td>
                    <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">
                      <span className="inline-block py-1 text-black13 rounded text-xs font-medium">
                        {item.type}
                      </span>
                    </td>
                    <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">
                      {item.description}
                    </td>
                    <td
                      className={`p-4 text-right font-segoe text-[13.78px] leading-5 ${
                        item.amount.startsWith('+')
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {item.amount}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 h-5 rounded-full text-[11.63px] font-normal font-segoe leading-4 inline-flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity ${
                          statusConfig[item.status].classes
                        }`}
                        // onClick={() => {
                        //   const newStatus =
                        //     item.status === 'completed' ? 'pending' : 'completed';
                        //   updatePaymentStatus(item.id, newStatus);
                        // }}
                        title="Click to toggle status"
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          
          </div>
        )}
      </div>
    </div>
  );
}