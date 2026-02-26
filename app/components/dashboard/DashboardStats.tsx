import { fetchData } from "@/app/lib/useFetch"; 
export default async function DashboardStats() {
  const stats = await fetchData("/api/dashboard");

  return (
    <div className="w-full">
      <div className="grid 4xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 5xl:gap-6 gap-3 mb-8">
        {stats.map((item) => (
          <div
            key={item.id}
            className="shadow-48xl rounded-2xl bg-white 2xl:p-6 p-4 flex items-start justify-between"
          >
            <div className="w-full">
              <div className="flex items-center justify-between pb-4">
                <h6 className="text-sm font-medium leading-5 text-gray-1400">
                  {item.title}
                </h6>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgcolor}`}
                >
                  <img src={item.icon} className="w-4 h-4" alt="" />
                </div>
              </div>
              <span className="block text-3xl font-semibold leading-9 text-blue-1200 mb-2">
                {item.value}
              </span>

              <h6 className={`text-sm font-medium leading-5 ${item.color}`}>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-0.5 px-1.5 h-5 text-xs leading-4 ${item.iconbg}`}
                  >
                    <img src={item.priceicon} alt="" /> {item.change}
                  </span>
                  <p className="text-grey-5000 text-xs font-normal leading-4">
                    {item.pricetext}
                  </p>
                </div>
              </h6>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}
