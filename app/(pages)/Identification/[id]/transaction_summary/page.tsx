
import TransectionHistoryTable from "@/app/components/TransectionHistoryTable";



export default function page() {
     return (
          <div className="flex-1 mt-2">
               <div className="bg-white mb-6.25  border border-solid border-gray-1000 rounded-lg shadow-4xl sm:p-6.25 p-4">
                    <h4 className="text-black13 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">Transaction Summary</h4>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-6">
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-blue-1000 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$2,450</span>
                              <h5 className="text-blue-1000 font-segoe text-[13.67px] font-normal leading-5 text-center">Total Balance</h5>
                         </div>
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-green14 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$1,200</span>
                              <h5 className="text-green14 font-segoe text-sm font-normal leading-5 text-center">This Month In</h5>
                         </div>
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-red1300 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$850</span>
                              <h5 className="text-red1300 font-segoe text-sm font-normal leading-5 text-center">This Month Out</h5>
                         </div>
                         <div className="bg-white-1100 rounded-lg p-4">
                              <span className="text-purpal13 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">24</span>
                              <h5 className="text-purpal14 font-segoe text-sm font-normal leading-5 text-center">Total Transactions</h5>
                         </div>
                    </div>
               </div>
                <TransectionHistoryTable />
          </div>
     );
}
