import TopBar from "./components/common/TopBar";
import Image from "next/image";
import { AnalyticsOverview } from "./components/dashboard/AnalyticsOverview";
import DashboardStats from "./components/dashboard/DashboardStats";
import AviPipelineFunnel from "./components/dashboard/AviPipelineFunnel";
import MonthlyLoanOverview from "./components/dashboard/MonthlyLoanOverview";
import { RecentActivity } from "./components/dashboard/RecentActivity";
import Link from "next/link";



export default function DashboardPage() {

  const today = new Date().toLocaleDateString('en-US');

  return (
    <div className="dashboard-bg">
      <TopBar />

      <DashboardStats />

      <AviPipelineFunnel />

      <MonthlyLoanOverview />

      <div className="">
        <div className="mt-8 5xl:flex grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-3">
          <div className="5xl:max-w-116.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg bg-white">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2 px-1.5">
                <p className="text-sm font-semibold leading-5 text-black-1600">
                  Live Events
                </p>
                <p className="gap-1 bg-lightgreen17/10 px-1.5 rounded-full h-4.75 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-lightgreen17 flex items-center"></span>
                  <span className="text-[10px] flex pt-[1.8px] font-medium leading-3.75 text-lightgreen17 ">
                    LIVE
                  </span>
                </p>
              </div>
              <p className="text-black-1600 text-xs font-medium leading-4">Pause</p>
            </div>
            <div className="h-87.5 overflow-x-auto">
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-lightgreen17/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/payment-icon.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/payment-check.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>Payment Processed</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      €1,200 from DE → PK (Ahmed H.)
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] leading-3.75 text-gray-1900 font-normal">
                    2s ago
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-red1600/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/card-icon3.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/failed-icon.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>Transfer Failed</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      €500 from UK → IN (Priya S.) - Insufficient funds
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-right">
                    <p className="text-[10px] mb-1 leading-3.75 text-gray-1900 font-normal">
                      15s ago
                    </p>
                    <Link href={"#"} className="py-1 px-2 flex items-center gap-3 text-red1600 font-inter font-medium text-[10px] leading-3.75">
                      <Image
                        src={"/images/retry-red.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                      Retry
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-yellow-1100/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/file-check-icon.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/clock-yellow.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>KYC Submitted</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      New document upload - Maria G.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] leading-3.75 text-gray-1900 font-normal">
                    2s ago
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-lightgreen17/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/file-check-green-.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/check-green-round.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>AVI Issued</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      Housing guarantee for John D.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] leading-3.75 text-gray-1900 font-normal">
                    1m ago
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-lightgreen17/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/user-plus.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/check-green-round.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>New Registration</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      Student account - Li W. (China)
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] leading-3.75 text-gray-1900 font-normal">
                    2m ago
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border-t border-solid border-gray-3600">
                <div className="flex items-center gap-3 ">
                  <div>
                    <span className="bg-red1600/10 flex rounded-lg items-center justify-center w-8 h-8">
                      <Image
                        src={"/images/card-icon3.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.75">
                      <span>
                        <Image
                          src={"/images/failed-icon.svg"}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </span>
                      <p>FX Timeout</p>
                    </div>
                    <p className="text-[11px] leading-4 text-gray-1900">
                      €2,100 from FR → MA - Gateway timeout
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-right">
                    <p className="text-[10px] mb-1 leading-3.75 text-gray-1900 font-normal">
                      3m ago
                    </p>
                    <Link href={"#"} className="py-1 px-2 flex items-center gap-3 text-red1600 font-inter font-medium text-[10px] leading-3.75">
                      <Image
                        src={"/images/retry-red.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                      Retry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="5xl:max-w-134.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg bg-white">
            <div className="border-b border-solid border-gray-3600 flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/shield-blue.svg"}
                  alt=""
                  width={16}
                  height={16}
                />
                <p className="text-sm font-semibold leading-5 text-black-1600">
                  4-Eyes Approval Queue
                </p>
              </div>
              <p className="text-red1600 font-inter text-xs font-medium leading-4 bg-red1600/10 inline-flex items-center justify-center rounded-full h-5 px-2">3 pending</p>
            </div>
            <div className="border-l-2 border-b border-solid border-l-red1600 border-b-gray-3600 p-3 flex items-start justify-between">
              <div className="">
                <ul className="flex items-center gap-3">
                  <li><span className="text-red1600 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-red1600/10 rounded h-4.75 px-1.5 uppercase">refund</span></li>
                  <li><span className="text-red1600 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase">refund</span></li>
                </ul>
                <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">Refund Request</h4>
                <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">Full refund for failed AVI application</p>
                <ul className="mt-1.5 flex items-center gap-3">
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">By: Sarah K.</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                  <li className="text-black-1600 font-inter font-medium text-[10px] leading-4">€450</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4 flex items-center gap-0.5">
                    <Image
                      src={"/images/timer-icon3.svg"}
                      alt=""
                      width={12}
                      height={12}
                    />
                    5m ago
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex items-center gap-1.5">
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/checkgreendark.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/cross-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                </ul>
              </div>
            </div>
            <div className="border-b border-solid border-b-gray-3600 p-3 flex items-start justify-between">
              <div className="">
                <ul className="flex items-center gap-3">
                  <li><span className="text-yellow-1100 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-yellow-1100/10 rounded h-4.75 px-1.5 uppercase">limit change</span></li>
                </ul>
                <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">Limit Increase</h4>
                <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">Monthly transfer limit → €50,000</p>
                <ul className="mt-1.5 flex items-center gap-3">
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">By: Michael B.</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4 flex items-center gap-0.5">
                    <Image
                      src={"/images/timer-icon3.svg"}
                      alt=""
                      width={12}
                      height={12}
                    />
                    12m ago
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex items-center gap-1.5">
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/checkgreendark.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/cross-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                </ul>
              </div>
            </div>
            <div className="border-l-2 border-solid border-l-gray-3600 p-3 flex items-start justify-between rounded-b-lg">
              <div className="">
                <ul className="flex items-center gap-3">
                  <li><span className="text-purple-5000 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-purple-5000/10 rounded h-4.75 px-1.5 uppercase">account unlock</span></li>
                  <li><span className="text-red1600 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase">URGENT</span></li>
                </ul>
                <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">Account Unlock</h4>
                <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">Locked due to suspicious activity</p>
                <ul className="mt-1.5 flex items-center gap-3">
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">By: Chen W.</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                  <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4 flex items-center gap-0.5">
                    <Image
                      src={"/images/timer-icon3.svg"}
                      alt=""
                      width={12}
                      height={12}
                    />
                    18m ago
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex items-center gap-1.5">
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/checkgreendark.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                    <Image
                      src={"/images/cross-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full border border-solid border-gray-3600 rounded-lg bg-white">
            <div className="border-b border-solid border-gray-3600 flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/warning.svg"}
                  alt=""
                  width={16}
                  height={16}
                />
                <p className="text-sm font-semibold leading-5 text-black-1600">
                  Risk & Fraud Alerts
                </p>
              </div>
              <p className="text-red1600 font-inter text-xs font-medium leading-4 bg-red1600/10 inline-flex items-center justify-center rounded-full h-5 px-2">1 critical</p>
            </div>
            <div className="border-l-2 border-b border-solid border-l-red1600 border-b-gray-3600 p-3">
              <div className="flex items-start gap-3">
                <span className="bg-red1600/10 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/images/warning-sheild.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full">
                  <ul className="flex items-center gap-3">
                    <li><span className="text-white font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-red1600 rounded h-4.75 px-1.5 uppercase">critical</span></li>
                    <li><span className="text-gray-1900 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase">USR-4521</span></li>
                  </ul>
                  <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">Potential Sanction Match</h4>
                  <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">Name match against OFAC SDN list - 87% confidence</p>
                  <div className="flex items-center justify-between">
                    <ul className="mt-1.5 flex items-center gap-2">
                      <li>
                        <Link href={"#"} className="bg-gray-1500 border border-solid border-gray-3600 text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-3">
                          <Image
                            src={"/images/user-plus-icon.svg"}
                            alt=""
                            width={12}
                            height={12}
                            className="brightness-0"
                          />
                          Assign Agent
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1">
                          View Details
                        </Link>
                      </li>

                    </ul>
                    <p className="text-gray-1900 font-inter font-normal text-[10px] leading-3.75">2m ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-b border-solid border-l-gray-3600 border-b-gray-3600 p-3">
              <div className="flex items-start gap-3">
                <span className="bg-yellow-1100/10 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/images/Velocity-icon.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full">
                  <ul className="flex items-center gap-3">
                    <li><span className="text-white font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-yellow-1100 rounded h-4.75 px-1.5 uppercase">high</span></li>
                    <li><span className="text-gray-1900 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase">USR-3892</span></li>
                  </ul>
                  <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">High Velocity Alert</h4>
                  <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">15 transactions in 10 minutes - €12,400 total</p>
                  <div className="flex items-center justify-between">
                    <ul className="mt-1.5 flex items-center gap-2">
                      <li>
                        <Link href={"#"} className="bg-gray-1500 border border-solid border-gray-3600 text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-3">
                          <Image
                            src={"/images/user-plus-icon.svg"}
                            alt=""
                            width={12}
                            height={12}
                            className="brightness-0"
                          />
                          Assign Agent
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1">
                          View Details
                        </Link>
                      </li>

                    </ul>
                    <p className="text-gray-1900 font-inter font-normal text-[10px] leading-3.75">8m ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-b-lg border-l-2 border-b border-solid border-l-gray-3600 border-b-gray-3600 p-3">
              <div className="flex items-start gap-3">
                <span className="bg-gray1700 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/images/warning-gray.svg"}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
                <div className="flex-1 w-full">
                  <ul className="flex items-center gap-3">
                    <li><span className="text-gray-1900 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center bg-gray1700 rounded h-4.75 px-1.5 uppercase">medium</span></li>
                    <li><span className="text-gray-1900 font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase">USR-7721</span></li>
                  </ul>
                  <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">Unusual Activity</h4>
                  <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">First-time large transfer to high-risk jurisdiction</p>
                  <div className="flex items-center justify-between">
                    <ul className="mt-1.5 flex items-center gap-2">
                      <li>
                        <Link href={"#"} className="bg-gray-1500 border border-solid border-gray-3600 text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center h-6 px-2 gap-3">
                          <Image
                            src={"/images/user-plus-icon.svg"}
                            alt=""
                            width={12}
                            height={12}
                            className="brightness-0"
                          />
                          Assign Agent
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-black-1600 font-inter font-medium text-[10px] leading-4 rounded-md inline-flex items-center justify-center px-2 py-1">
                          View Details
                        </Link>
                      </li>

                    </ul>
                    <p className="text-gray-1900 font-inter font-normal text-[10px] leading-3.75">15m ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
