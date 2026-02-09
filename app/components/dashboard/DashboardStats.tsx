import { fetchData } from "@/app/lib/useFetch";


  
  export default async function DashboardStats() {
    const stats = await fetchData("/api/dashboard");
  
    return (
    <div className="w-full">
        <div className="flex items-center gap-2 mb-4">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Key Performance Indicators</h4>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between"
          >
            <div>
              <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">
                {item.title}
              </h6>
  
              <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">
                {item.value}
              </span>
  
              <h6 className={`text-sm font-medium leading-5 ${item.color}`}>
                {item.change}
              </h6>
            </div>
  
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
              <img src={item.icon} className="w-6 h-6" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>

    );
  }
  