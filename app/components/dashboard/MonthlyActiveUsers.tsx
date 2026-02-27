import CustomSelect from '../CustomSelect'

export const MonthlyActiveUsers = () => {
  return (
    <div>
            {/* Monthly Active Users Components with Map Chart */}
        <div className="sm:px-6 px-4 sm:pt-6 pt-4 rounded-2xl h-full bg-white shadow-48xl">
        <div className="w-full">
            <div className="flex items-start justify-between">
            <div>
                <p className="sm:text-base text-sm font-medium leading-6 text-gray-1400 pb-1">
                Monthly Active Users
                </p>
                <div className="flex items-center gap-1.75 pb-1">
                <p className="text-blue-1200 sm:text-3xl text-2xl font-semibold leading-9 -tracking-[0.75px]">
                    72.8K
                </p>
                <p className="text-sm font-medium leading-5 text-green-5000 flex items-center gap-1">
                    <span>
                    <img src="images/up-icon.svg" alt="" />
                    </span>
                    2.1%
                </p>
                </div>
                <small className="text-grey-5000 text-xs font-normal leading-4 block">
                128 Months
                </small>
            </div>
            <div>
                <CustomSelect
                className="h-9 text-gray-1400 pr-7"
                options={[{ label: "This Month", value: "This Month" }]}
                />
            </div>
            </div>
            <div>
            <img src="images/map-img.png" alt="" className="w-full" />
            </div>
        </div>
        </div>
    </div>
  )
}
