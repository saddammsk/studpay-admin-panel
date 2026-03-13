import ProgressBar from "@/app/components/ProgressBar"
import { ModalState } from "@/app/store/zustand/useCardInventoryStore"
import Image from "next/image"
import Link from "next/link"

type Limit = {
  used: number
  limit: number
}

type SpendingLimitsData = {
  daily: Limit
  monthly: Limit
  atm: Limit
}



type SpendingLimitsProps = {
  spendingLimits: SpendingLimitsData
  openModal: (modal: keyof ModalState, cardId?: string) => void
}

export const SpendingLimits = ({
  spendingLimits,
  openModal
}: SpendingLimitsProps) => {

  const dailyPct = (spendingLimits.daily.used / spendingLimits.daily.limit) * 100
  const monthlyPct =
    (spendingLimits.monthly.used / spendingLimits.monthly.limit) * 100
  const atmPct = (spendingLimits.atm.used / spendingLimits.atm.limit) * 100

  return (
    <div className="5xl:w-131.5 4xl:w-125.5 4xl:flex-1 bg-white shadow-53xl p-6 rounded-lg">

      <div className="flex sm:flex-nowrap flex-wrap sm:gap-0 gap-4 items-center justify-between">
        <div>
          <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7">
            Spending Limits
          </h4>
          <p className="text-gray-1900 font-inter font-normal text-sm leading-5">
            Current usage and limits
          </p>
        </div>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            openModal("adjustLimits")
          }}
          className="group text-blue-1300 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-gray-3600 font-medium text-sm leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md"
        >
          <Image
            src="/images/freeze-dark.svg"
            width={16}
            height={16}
            alt=""
            className="group-hover:brightness-[10000]"
          />
          Adjust Limits
        </Link>
      </div>

      <div className="my-6 flex items-center gap-3 border border-yellow-1100/20 bg-yellow1800/50 rounded-lg p-3">
        <Image src="/images/warning-yellow.svg" width={16} height={16} alt="" />
        <p className="text-blue-1300 font-normal text-xs leading-5">
          <strong className="font-bold">4-Eyes Approval Required:</strong> Any
          limit change will trigger a review request.
        </p>
      </div>

      <LimitRow
        title="Daily Spending"
        used={spendingLimits.daily.used}
        limit={spendingLimits.daily.limit}
        pct={dailyPct}
        color="bg-yellow-1100"
      />

      <LimitRow
        title="Monthly Spending"
        used={spendingLimits.monthly.used}
        limit={spendingLimits.monthly.limit}
        pct={monthlyPct}
        color="bg-yellow-1100"
      />

      <LimitRow
        title="ATM Withdrawal"
        used={spendingLimits.atm.used}
        limit={spendingLimits.atm.limit}
        pct={atmPct}
        color="bg-blue1400"
        textColor="text-gray-1900 font-normal"
      />
    </div>
  )
}

type LimitRowProps = {
  title: string
  used: number
  limit: number
  pct: number
  color: string
  textColor?: string
}

const LimitRow = ({
  title,
  used,
  limit,
  pct,
  color,
  textColor = "text-yellow-1100"
}: LimitRowProps) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-blue-1300 font-medium text-sm leading-5">
          {title}
        </h4>

        <span className={`${textColor} font-medium text-sm leading-5 block`}>
          €{used} / €{limit}
        </span>
      </div>

      <ProgressBar value={pct} barColor={color} bgColor="bg-gray1700" />
    </div>
  )
}