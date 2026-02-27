import TopBar from "./components/common/TopBar";
import Image from "next/image";
import DashboardStats from "./components/dashboard/DashboardStats";
import AviPipelineFunnel from "./components/dashboard/AviPipelineFunnel";
import MonthlyLoanOverview from "./components/dashboard/MonthlyLoanOverview";
import Link from "next/link";
import { fetchData } from "./lib/useFetch";
import { LiveEvents } from "./components/dashboard/LiveEvents";
import { FourEyesApprovalQueue } from "./components/dashboard/FourEyesApprovalQueue";
import RiskFraudAlerts from "./components/dashboard/Riskfraudalerts";



export default async function DashboardPage() {

  const today = new Date().toLocaleDateString('en-US');
  const stats = await fetchData("/api/dashboard");

  return (
    <div className="dashboard-bg bg-blue-2800">
      <TopBar />

      <DashboardStats stats={stats} />

      <AviPipelineFunnel />

      <MonthlyLoanOverview />

      <div className="flex-1">
        <div className="mt-8 5xl:flex grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-3">
          <LiveEvents/>
          <FourEyesApprovalQueue/>
          <RiskFraudAlerts/>
        </div>
        <div className="mt-8 grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 4xl:gap-6 gap-4 items-start">
          <div className="border border-solid border-gray-3600 rounded-lg bg-white">
            <div className="pl-3.25 pr-2 pt-5.25 pb-4 flex items-center justify-between">
              <div className="">
                <p className="mb-4.5 flex items-center gap-1.5 text-blue-1100 text-[17px] font-medium font-inter tracking-[-0.34px]">
                  Recent Transections
                  <Image
                    src={"/icons/info-dark.svg"}
                    alt=""
                    width={13}
                    height={13}
                  />
                </p>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-blue1600 font-publicSans font-bold 4xl:text-[22px] text-base tracking-[-1.1px] capitalize">$24,000 </h3>
                  <span className="inline-flex rounded-full items-center justify-center bg-lightgreenNew border border-solid border-darkgreen58 h-5 text-darkgreen57 font-inter font-medium text-[11.66px] pl-1.5 pr-1 gap-0.5">
                    <Image
                      src={"/images/up-green-arrow.svg"}
                      alt=""
                      width={9}
                      height={9}
                    />
                    12%
                  </span>
                  <p className="text-grey-5300 font-normal 4xl:text-sm text-xs uppercase font-Graphik leading-6 tracking-[-0.28px]">vs last month</p>
                </div>
              </div>
              <Link href={"#"} className="text-blue-1000 font-Graphik font-normal text-sm leading-normal border border-solid border-blue-1000 rounded-[7px] h-9 4xl:w-25.25 w-20 flex items-center justify-center">View All</Link>
            </div>
            <div className="pl-3.5">
              <Image
                src={"/images/chart-img.png"}
                alt=""
                width={482}
                height={255}
                className="w-full"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white 4xl:p-5 p-2.5">
            <div className="mb-3 pr-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-full bg-white shadow-52xl w-10 h-10">
                  <Image
                    src={"/images/customer-img.jpg"}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </span>
                <div className="">
                  <h4 className="text-black-5000 font-inter text-sm font-medium leading-5">Olivia Sanchez</h4>
                  <ul className="flex items-center gap-1">
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/card-gray2.svg"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      1,200 from
                    </li>
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/🇺🇸.png"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      Unit USDm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <Link href={"#"} className="text-grey-5100 font-normal text-xs leading-4 flex items-center gap-1">
                  5m
                  <Image
                    src={"/images/arrow-gray2.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </Link>
              </div>
            </div>
            <div className="mb-3 pr-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-full bg-white shadow-52xl w-10 h-10">
                  <Image
                    src={"/images/customer-img2.jpg"}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </span>
                <div className="">
                  <h4 className="text-black-5000 font-inter text-sm font-medium leading-5">Daniel Lee</h4>
                  <ul className="flex items-center gap-1">
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/swip-arrow.svg"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      Opened an AVI •
                    </li>
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/🇰🇷.png"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      154 Korea
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <Link href={"#"} className="text-grey-5100 font-normal text-xs leading-4 flex items-center gap-1">
                  17m ago
                </Link>
              </div>
            </div>
            <div className="mb-3 pr-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-full bg-white shadow-52xl w-10 h-10">
                  <Image
                    src={"/images/customer-img3.jpg"}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </span>
                <div className="">
                  <h4 className="text-black-5000 font-inter text-sm font-medium leading-5">Marie Dubois</h4>
                  <ul className="flex items-center gap-1">
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/card-gray2.svg"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      5,500 from
                    </li>
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/🇫🇷.png"}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded-full"
                      />
                      France
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <Link href={"#"} className="text-grey-5100 font-normal text-xs leading-4 flex items-center gap-1">
                  1h
                  <Image
                    src={"/images/arrow-gray2.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </Link>
              </div>
            </div>
            <div className="mb-4 pr-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-full bg-white shadow-52xl w-10 h-10">
                  <Image
                    src={"/images/customer-img4.jpg"}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </span>
                <div className="">
                  <h4 className="text-black-5000 font-inter text-sm font-medium leading-5">Ahmed Hussain</h4>
                  <ul className="flex items-center gap-1">
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/card-gray2.svg"}
                        alt=""
                        width={12}
                        height={12}
                      />
                      7,900 from
                    </li>
                    <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
                      <Image
                        src={"/images/🇦🇪.png"}
                        alt=""
                        width={12}
                        height={12}
                      />
                      inchebrab Emirates
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <Link href={"#"} className="text-grey-5100 font-normal text-xs leading-4 flex items-center gap-1">
                  3h ago
                </Link>
              </div>
            </div>
            <Link href={"#"} className="flex gap-2 items-center justify-center border border-solid border-grey-5200 rounded-full bg-white h-10.5 text-grey-5100 font-inter font-normal text-sm leading-5">
              View Map
              <Image
                src={"/images/right-arrow-dark.svg"}
                alt=""
                width={16}
                height={16}
                className="h-2"
              />
            </Link>
          </div>
          <div className="">
            <div className="bg-white shadow-48xl mb-4.5 rounded-2xl p-5 w-full">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-black-5100 font-inter font-semibold text-sm leading-5">StudSafe Alerts</h4>
                <Link href={"#"} className="inline-flex items-center border border-solid border-grey-5200 rounded-2xl h-7.5 px-3.25 text-grey-5100 font-inter font-medium text-xs leading-5">View Details</Link>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow1400 rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={"/images/warning-orange.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="">
                  <h4 className="text-blue-1200 font-inter text-xs font-semibold leading-4 mb-0.5">Rana Shah <span className="text-grey-5000 font-normal"> Dorm Rent Guarantee </span></h4>
                  <p className="text-grey-5000 font-inter text-[10px] font-normal leading-4">Expiring soon</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white-1000 rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={"/images/location-blue.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full flex items-start justify-between">
                  <div className="">
                    <h4 className="text-blue-1200 font-inter text-xs font-semibold leading-4 mb-0.5">Marco Rossi <span className="text-grey-5000 font-normal"> Rome, Italy </span></h4>
                    <p className="text-grey-5000 font-inter text-[10px] font-normal leading-4">Locating from</p>
                  </div>
                  <span className="flex items-center text-lighrgrey34 font-normal font-inter text-[9px]">2h ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-48xl rounded-2xl p-5 w-full">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-black-5000 font-inter font-bold text-base leading-6">Tables of Opportunities</h4>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow1700 rounded-full flex items-center justify-center w-10 h-10">
                  <Image
                    src={"/images/college-cap.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full flex items-center justify-between">
                  <div className="">
                    <h4 className="text-black-5000 font-inter text-sm font-semibold leading-4">King's College London</h4>
                    <p className="text-grey-5100 font-inter text-xs font-normal leading-4">E00 application rordom. Drronth.</p>
                  </div>
                  <Link href={"#"} className="inline-flex gap-1 items-center border border-solid border-grey-5200 rounded h-6.5 px-2 text-grey-5100 font-inter font-medium text-xs leading-5">
                    Details
                    <Image
                      src={"/images/right-arrow-dark.svg"}
                      alt=""
                      width={12}
                      height={12}
                      className="h-2"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-1100 rounded-full flex items-center justify-center w-10 h-10">
                  <Image
                    src={"/images/college-cap-red.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full flex items-center justify-between">
                  <div className="">
                    <h4 className="text-black-5000 font-inter text-sm font-semibold leading-4">University of Toronto</h4>
                    <p className="text-grey-5100 font-inter text-xs font-normal leading-4">Fasets formcation month.</p>
                  </div>
                  <Link href={"#"} className="inline-flex gap-1 items-center border border-solid border-grey-5200 rounded h-6.5 px-2 text-grey-5100 font-inter font-medium text-xs leading-5">
                    Details
                    <Image
                      src={"/images/right-arrow-dark.svg"}
                      alt=""
                      width={12}
                      height={12}
                      className="h-2"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-1100 rounded-full flex items-center justify-center w-10 h-10">
                  <Image
                    src={"/images/college-cap-red.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full flex items-center justify-between">
                  <div className="">
                    <h4 className="text-black-5000 font-inter text-sm font-semibold leading-4">Kyoto University</h4>
                    <p className="text-grey-5100 font-inter text-xs font-normal leading-4">E50 Application month.</p>
                  </div>
                  <Link href={"#"} className="inline-flex gap-1 items-center border border-solid border-grey-5200 rounded h-6.5 px-2 text-grey-5100 font-inter font-medium text-xs leading-5">
                    Details
                    <Image
                      src={"/images/right-arrow-dark.svg"}
                      alt=""
                      width={12}
                      height={12}
                      className="h-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
