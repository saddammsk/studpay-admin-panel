'use client'
import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store/store";
import Link from "next/link";

const statusColors = {
  completed: "bg-green-1200 text-green-1100",
  pending: "bg-yellow-1000 text-brown-1000",
  failed: "bg-red-1000 text-white-1100",
};

export const RecentActivity = () => {

  const { transactions, documents } = useAppSelector(
    (state: RootState) => state.dashboard.RecentActivityState
  );



  return (
    <div>
      <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg-3 rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">
          Recent Activity
        </h4>
      </div>
      <div className="grid md:grid-cols-2 xl:gap-8 gap-4">
        <div className="shadow-4xl border border-gray1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-6 tracking-[-0.45px] text-gray-900">
            Latest Transactions
          </h4>

          <div className="flex flex-col gap-3">
            {transactions.map((tx, idx) => (
              <div
                key={idx}
                className="border border-gray1600 rounded-lg p-3 flex items-center justify-between"
              >
                <div>
                  <h6 className="text-base font-normal leading-6 text-black-1200 mb-1">
                    {tx.name}
                  </h6>
                  <span className="block text-sm font-normal leading-5 text-gray-1100">
                    {tx.description}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-end">
                    <h6 className="text-base font-normal leading-6 text-black-1200 mb-1">
                      {tx.amount}
                    </h6>
                    <span className="block text-sm font-normal leading-5 text-gray-1200">
                      {tx.time}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-normal leading-4 py-0.75 px-2.75 rounded-full ${statusColors[tx.status]}`}
                  >
                    {tx.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-4xl border border-gray1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-6 tracking-[-0.45px] text-black-1200">
            Documents Pending Review
          </h4>
          <div className="space-y-4">
            {documents.map((item) => (
              <div
                key={item.id}
                className="border border-gray1600 rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.bgColor} rounded-lg w-8 h-8 flex items-center justify-center`}
                  >
                    <img src="/images/red-file.svg" alt="" />
                  </div>

                  <div>
                    <h6 className="text-base font-normal leading-6 text-blue-1200">
                      {item.name}
                    </h6>

                    <span className="block text-sm mb-1.5 font-normal leading-5 text-gray-1100">
                      {item.document}
                    </span>

                    <div className="flex items-center gap-1">
                      <img src="/images/timer-gray.svg" alt="" />
                      <h6 className="text-xs font-normal leading-4 text-gray-1200">
                        {item.time}
                      </h6>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  className="text-blue-1000 text-sm font-normal leading-5 py-2 px-3 inline-block border border-blue-1000 rounded-md"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
