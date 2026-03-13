import React from "react";
import CardTransactionsTable from "@/app/components/UsersStudent/CardTransactionsTable";


export const RecentCardTransactions = () => {
  return (
    <div className="5xl:w-[calc(100%-526px)] 4xl:w-[calc(100%-502px)] w-full bg-white shadow-53xl p-6 rounded-lg">
      <div className="mb-4">
        <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7">
          Recent Card Transactions
        </h4>
        <p className="text-gray-1900 font-inter font-normal text-sm leading-5">
          Last 5 transactions across all cards
        </p>
      </div>
      <CardTransactionsTable />
    </div>
  );
};
