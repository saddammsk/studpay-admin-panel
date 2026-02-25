
import CustomSelect from "@/app/components/CustomSelect";
import Link from "next/link";

export default async function MonthlyLoanOverview() {

  return (
    <div className="w-full font-inter">
      <div className="flex 2xl:flex-row flex-col items-start gap-6">
        <div className="4xl:w-[62%] 2xl:w-[60%] w-full">
          <div className="sm:px-6 px-4 sm:pt-6 pt-4 rounded-2xl h-full bg-white shadow-48xl">
            <div>
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
        <div className="4xl:w-[37%] 2xl:w-[40%] w-full 2xl:block grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="border-white/80 2xl:mb-4.5 mb-0 border border-solid rounded-3xl relative bg-white shadow-81xl p-5.25 4xl:pb-12 pb-5">
            <div className="flex items-center justify-between 4xl:pb-4 pb-1.5">
              <p className="text-base font-bold leading-6 text-black-5000">
                Loans Overview
              </p>
              <div className="flex items-center">
                <Link href="#">
                  <img src="images/arw-group.svg" alt="" />
                </Link>
                <Link href="#">
                  <img src="images/send-icon-grey.svg" alt="" />
                </Link>
              </div>
            </div>
            <h3 className="sm:text-3xl text-2xl font-bold leading-9 text-black-5000">
              €2.51M
            </h3>
            <div className="pt-6">
              <p className="text-grey-5100 text-sm leading-5 font-normal pb-1">
                Total Loans
              </p>
              <span className="flex items-center gap-2">
                <img src="images/rise-green.svg" alt="" />
                <p className="text-sm font-medium leading-5 text-sky-5100">
                  155 19%
                </p>
              </span>
            </div>
            <img
              src="images/map-img2.svg"
              alt=""
              className="absolute bottom-5.25 right-5.25 4xl:h-auto 2xl:h-22.5 sm:h-20 h-17.5"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-48xl pt-3.5 pb-1.5 p-6">
            <p className="text-base font-medium leading-6 text-black-5100 pb-2.75">
              Loan Applications
            </p>
            <div className="h-22.5 overflow-y-auto pb-1">
              <div className="flex items-start justify-between pb-1">
                <div className="flex items-center gap-3">
                  <span>
                    <img src="images/avatar.png" alt="" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-4 text-blue-1200">
                      Emily Park
                    </p>
                    <p className="text-grey-5000 text-[10px] font-normal leading-3.75">
                      Student Loan €10,000
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-green-5000 text-[10px] font-medium leading-3.75 px-2 h-5.75 rounded-full inline-flex items-center justify-center bg-sky-5000">
                    Pending
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span>
                    <img src="images/avatar2.png" alt="" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-4 text-blue-1200">
                      Andrs Slive
                    </p>
                    <p className="text-grey-5000 text-[10px] font-normal leading-3.75">
                      Blocked Account
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-green-5000 text-[10px] font-medium leading-3.75 px-2 h-5.75 rounded-full inline-flex items-center justify-center bg-sky-5000">
                    Pending
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span>
                    <img src="images/avatar3.png" alt="" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-4 text-blue-1200">
                      Kcsia Ndidi
                    </p>
                    <p className="text-grey-5000 text-[10px] font-normal leading-3.75">
                      Student Loan €1,500
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-green-5000 text-[10px] font-medium leading-3.75 px-2 h-5.75 rounded-full inline-flex items-center justify-center bg-sky-5000">
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <Link
              href="#"
              className="text-sm font-normal leading-5 text-grey-5100 border border-solid border-grey-5200 flex items-center justify-center gap-2 rounded-[20px] h-10.5"
            >
              View All
              <span>
                <img src="images/double-arw.svg" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}
