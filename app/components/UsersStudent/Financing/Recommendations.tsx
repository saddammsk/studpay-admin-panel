import Image from "next/image";

type RecommendationItem = {
  id: number
  text: string
  points: number
}

type RecommendationsProps = {
  items: RecommendationItem[]
}

const getBadgeClasses = (points: number) => {
  if (points >= 20) return 'border border-green-1500/20 bg-green-1500/10 text-green-1500'
  if (points >= 10) return 'border border-yellow-1100/20 bg-yellow-1100/10 text-yellow-1100'
  return 'border border-gray-1200/20 bg-gray-1200/10 text-gray-1200'
}

const Recommendations = ({ items }: RecommendationsProps) => {
  return (
    <div className="pt-8 mb-8">
      <h2 className="text-gray-1200 text-sm leading-5 font-semibold mb-4 uppercase flex items-center gap-2">
        <Image src="/icons/start-improve.svg" width={16} height={16} alt="" />
        Recommendations to Improve
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-4 items-start bg-gray-1600/30 border border-solid border-gray-1000/50 rounded-xl p-4.25">
            <div className="flex items-start gap-4 flex-1 w-full">
              <span className="flex items-center justify-center rounded-xl w-8 h-8 shadow-4xl">
                <Image src="/icons/idea-icon.svg" width={16} height={16} alt="" />
              </span>
              <p className="text-blue-1300 text-sm leading-[22.8px] font-medium w-full flex-1">{item.text}</p>
            </div>
            <span className={`text-xs leading-4 font-semibold flex items-center justify-center rounded-full h-5.5 px-2.5 ${getBadgeClasses(item.points)}`}>
              +{item.points} pts
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recommendations