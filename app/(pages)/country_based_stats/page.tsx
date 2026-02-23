"use client";
import { useState } from "react";
import Image from "next/image";
import StudentGlobe from "@/app/components/StudentGlobe";
import CountryWalletChart from "@/app/components/CountryWalletChart";
import CountryPerformance from "@/app/components/CountryPerformance";

export default function FinanceAnalytics() {

    return (
        <div className="font-inter  md:-m-8 -m-4">
            <div className="flex items-center justify-between  md:p-6 p-4">
                <div>
                    <h6 className="text-sm font-bold leading-5 text-black-2000">Country-Based Intelligence</h6>
                    <h6 className="text-sm font-normal leading-5 text-gray-3800">Global Operations Command Center</h6>
                </div>
                <form action="" className="flex items-center gap-4">
                    <div className="relative md:flex-1 w-full">
                        <input
                            type="text"
                            className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-blue-1000 font-normal font-neulis-sans text-black-2100 placeholder:text-black-2100 px-4 pl-10 h-8 bg-blue-1700/20 border border-gray-3100 rounded-[10px] w-full outline-0"
                            placeholder="Search countries, metrics..."

                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-3">
                            <Image
                                src="../images/search-icon.svg"
                                width="16"
                                height="16"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="text-xs font-normal flex items-center text-green-2200 gap-2 py-1.5 px-3 rounded-full bg-green-2200/10 border border-green-2200/20">
                        <span className="bg-green-2200 block rounded-full w-2 h-2"></span>
                        Live Data
                    </div>
                </form>
            </div>
            <div className="bg-gradient md:p-6 p-4">
                <div className="grid xl: md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                    <div className="card-bg1 p-5 bg-[url(/images/card-bg1.png)] bg-cover bg-no-repeat rounded-xl p-5">
                        <div className="flex items-start mb-4 justify-between">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-2300/20">
                                <img src="/images/globe-green-icon.svg" alt="" />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-normal text-green-2200">
                                <img src="/images/trend-up.svg" alt="" />  12%
                            </div>
                        </div>
                        <h6 className="text-sm leading-5 font-normal text-gray-1200">Active Regions</h6>
                        <span className="block text-2xl font-bold leading-7 text-blue-1300">24</span>
                        <h6 className="text-xs leading-4 font-normal text-gray-1200"> Countries with live operations</h6>
                    </div>
                    <div className="card-bg1 p-5 bg-[url(/images/card-bg2.png)] bg-cover bg-no-repeat rounded-xl p-5">
                        <div className="flex items-start mb-4 justify-between">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-2200/20">
                                <img src="/images/trend-up.svg" className="w-5 h-5" alt="" />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-normal text-green-2200">
                                <img src="/images/trend-up.svg" alt="" />  34%
                            </div>
                        </div>
                        <h6 className="text-sm leading-5 font-normal text-gray-1200">Top Growth Market</h6>
                        <span className="block text-2xl font-bold leading-7 text-blue-1300">Germany</span>
                        <h6 className="text-xs leading-4 font-normal text-gray-1200"> +34% week-on-week users</h6>
                    </div>
                    <div className="card-bg1 p-5 bg-[url(/images/card-bg3.png)] bg-cover bg-no-repeat rounded-xl p-5">
                        <div className="flex items-start mb-4 justify-between">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-1500/20">
                                <img src="/images/caution-icon5.svg" alt="" />
                            </div>
                        </div>
                        <h6 className="text-sm leading-5 font-normal text-gray-1200">Regional Risk Index</h6>
                        <span className="block text-2xl font-bold leading-7 text-blue-1300">Medium</span>
                        <h6 className="text-xs leading-4 font-normal text-gray-1200"> 3 high-risk new regions</h6>
                    </div>
                    <div className="card-bg1 p-5 bg-[url(/images/card-bg4.png)] bg-cover bg-no-repeat rounded-xl p-5">
                        <div className="flex items-start mb-4 justify-between">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-2300/20">
                                <img src="/images/tren-line.svg" alt="" />
                            </div>
                        </div>
                        <h6 className="text-sm leading-5 font-normal text-gray-1200">Cross-Border Volume</h6>
                        <span className="block text-2xl font-bold leading-7 text-blue-1300">$2.4M</span>
                        <h6 className="text-xs leading-4 font-normal text-gray-1200"> Total money moving between countries</h6>
                    </div>
                </div>
                <div className="flex lg:flex-nowrap flex-wrap gap-7 mt-6">
                    <div className="lg:w-8/12 w-full bg-white rounded-xl ">
                        <div className=" relative bg-gradient4 border border-gray-4000/60 rounded-xl ">
                            <div className="p-4 absolute left-4 top-4">
                                <h6 className="text-lg font-bold leading-5 text-black-2000">Global Student Flow</h6>
                                <h6 className="text-sm font-normal leading-5 text-gray-3800">Real-time transaction visualization</h6>
                            </div>
                            <StudentGlobe></StudentGlobe>
                        </div>
                    </div>
                       <div className="lg:w-4/12 w-full bg-white rounded-xl ">
                        <div className=" relative bg-gradient5 border border-gray-4000/60 rounded-xl ">
                            <div className="p-4 ">
                                <h6 className="text-lg font-bold leading-5 text-black-2000">Global Student Flow</h6>
                                <h6 className="text-sm font-normal leading-5 text-gray-3800">Real-time transaction visualization</h6>
                            </div>
                            <CountryWalletChart></CountryWalletChart>
                        </div>
                    </div>
                </div>
                <CountryPerformance></CountryPerformance>
            </div>

        </div>
    );
}
