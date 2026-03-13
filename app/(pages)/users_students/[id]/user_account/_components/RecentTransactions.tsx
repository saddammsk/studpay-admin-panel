import Image from "next/image"
import Link from "next/link"

type Transaction = {
  title: string
  date: string
  amount: string
  type: "credit" | "debit"
  icon: string
}

const transactions: Transaction[] = [
  {
    title: "Salary Payment",
    date: "2024-01-28",
    amount: "+€2,450.00",
    type: "credit",
    icon: "/icons/left-down-arrow.svg"
  },
  {
    title: "Rent Payment",
    date: "2024-01-27",
    amount: "€850,00",
    type: "debit",
    icon: "/images/payment-red-arrow.svg"
  },
  {
    title: "Transfer from Savings",
    date: "2024-01-26",
    amount: "+€500,00",
    type: "credit",
    icon: "/icons/left-down-arrow.svg"
  },
  {
    title: "Grocery Store",
    date: "2024-01-26",
    amount: "€67,45",
    type: "debit",
    icon: "/images/payment-red-arrow.svg"
  },
  {
    title: "Netflix Subscription",
    date: "2024-01-25",
    amount: "€15,99",
    type: "debit",
    icon: "/images/payment-red-arrow.svg"
  }
]

export const RecentTransactions = () => {
  return (
    <div className="bg-white pb-6 border border-gray-3100 shadow-4xl mt-6 rounded-lg">
      <div className="flex items-center justify-between xl:px-6 px-4 xl:pt-6 pt-4 pb-4">
        <h4 className="text-black-1600 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]">
          Recent Transactions
        </h4>

        <Link
          href="#"
          className="inline-flex items-center justify-center text-black-1600 font-inter font-medium text-sm leading-5 bg-gray-1600 border border-gray-3100 rounded-md px-3 h-9"
        >
          View All
        </Link>
      </div>

      <div className="xl:px-6 px-4">
        {transactions.map((item, index) => {
          const isCredit = item.type === "credit"

          return (
            <div
              key={index}
              className="flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out"
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  isCredit ? "bg-lightgreen17/10" : "bg-red1700/10"
                }`}
              >
                <Image src={item.icon} width={16} height={16} alt="" />
              </span>

              <div className="flex-1 w-full flex items-center justify-between">
                <div>
                  <h4 className="text-black-1600 font-inter font-medium text-sm leading-5">
                    {item.title}
                  </h4>
                  <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
                    {item.date}
                  </p>
                </div>

                <span
                  className={`font-inter font-semibold sm:text-sm text-xs leading-5 block ${
                    isCredit ? "text-lightgreen17" : "text-red1700"
                  }`}
                >
                  {item.amount}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}