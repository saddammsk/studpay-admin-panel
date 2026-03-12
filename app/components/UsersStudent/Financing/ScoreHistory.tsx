import Image from "next/image";

type HistoryItem = {
  id: number
  icon: string
  title: string
  date: string
  time: string
  change: number
  type: string
  status: string
  git: string
}

type ScoreHistoryProps = {
  history: HistoryItem[]
}

const ScoreHistory = ({ history }: ScoreHistoryProps) => {
  return (
    <div className="mt-6 border-b border-solid  border-gray-1000 pb-8">
      <h2 className="text-gray-1200 text-sm leading-5 font-semibold tracking-[0.7px] uppercase mb-4">Score History</h2>
      <ul className="mt-4">
        {history.map((item) => (
          <li key={item.id} className="flex sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-0 gap-4 md:px-4 px-0 md:py-5 py-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-1600">
                <Image src={item.icon} width={16} height={16} alt="" />
              </span>
              <div className="flex flex-col">
                <span className="text-blue-1300 text-base leading-6 font-medium block">{item.title}</span>
                <span className="text-gray-1200 text-sm leading-5 font-normal block mt-0.5">{item.date} · {item.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`${item.type === 'positive' ? 'text-green-1500 bg-green-1500/10' : 'text-red2100 bg-red2100/10'} inline-flex items-center justify-center h-7.5 px-3 rounded-full text-sm leading-5 font-semibold`}>
                {item.change > 0 ? `+${item.change}` : item.change}
              </span>
              <span className="flex items-center text-gray-1200 text-sm leading-5 font-normal gap-1.5">
                <Image src={item.git} width={16} height={16} alt="" />
                {item.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScoreHistory