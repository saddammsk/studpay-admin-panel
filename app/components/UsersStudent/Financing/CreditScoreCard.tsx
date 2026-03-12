import Image from "next/image";


type CreditScoreCardProps = {
  score: number
  status: string
  updated: string
}

const CreditScoreCard = ({ score, status, updated }: CreditScoreCardProps) => {
  return (
    <div className="border-b border-solid border-gray-1000 pb-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex items-center gap-5.5">
        <div className="text-[60px] leading-15 font-bold text-green61">
          {score}
          <span className="block">
            <Image src="/icons/Gradient.svg" width={108} height={4} alt="" />
          </span>
        </div>
        <div className="text-lg leading-7 text-green61 font-semibold">{status}</div>
      </div>
      <div className="mt-2 md:mt-0 text-gray-120 text-sm leading-5 font-normal flex items-center gap-2">
        <Image src="/images/clock-gray.svg" width={16} height={16} alt="" />
        Updated {updated}
      </div>
    </div>
  )
}

export default CreditScoreCard