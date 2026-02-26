"use client";
import CircularProgress from '@/app/components/CircularProgress';
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
    resetFilters,
    setCountryFilter,
    setSearch,
    setStatusFilter,
} from "@/app/store/slices/UsersStudentsSlice";
import LeadsTable from '@/app/components/LeadsTable';

export default function FinanceAnalytics() {
    const dispatch = useAppDispatch();
    const { filters } = useAppSelector((state) => state.usersStudents);

    const handleClear = () => {
        dispatch(resetFilters());
    };


    return (
        <div className="font-inter bg-gradient md:-m-8 -m-4 md:p-6 p-4">
            <div className='flex items-center gap-4 flex-wrap'>
                <div className='flex items-center gap-2'>
                    <h6 className='text-sm font-normal leading-5 text-gray-1900'>Today:</h6>
                    <div className='text-xs font-bold text-green-2000 py-0.5 px-2.5 rounded-full border border-green-2000/30 bg-green-2000/10'>+24 new leads</div>
                </div>
                <div className='flex items-center gap-2'>
                    <h6 className='text-sm font-normal leading-5 text-gray-1900'>Pending follow-ups:</h6>
                    <div className='text-xs font-bold text-yellow-1400 py-0.5 px-2.5 rounded-full border border-yellow-1400/30 bg-yellow-1400/10'>18</div>
                </div>
                <div className='flex items-center gap-2'>
                    <h6 className='text-sm font-normal leading-5 text-gray-1900'>Hot leads:</h6>
                    <div className='text-xs font-bold text-red-1600 py-0.5 px-2.5 rounded-full border border-red-1600/30 bg-red-1600/10'>12 active</div>
                </div>
            </div>
            <div className='bg-white border my-6 border-gray-3100 shadow-11xl rounded-[12px] p-5'>
                <div className="flex items-center gap-2">
                    <span className='block w-1.5 h-1.5 rounded-full bg-blue-1400'></span>
                    <h6 className='text-sm font-bold text-blue-1300'>Pipeline Performance</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-10">
                    <CircularProgress value={68} color="#D9A520" label="Conversion Rate" sublabel="Lead to Customer" />
                    <CircularProgress value={42} color="#0B64F4" label="Response Rate" sublabel="Within 1 hour" />
                    <CircularProgress value={85} color="#1EAE53" label="Follow-up Rate" sublabel="Active leads" />
                    <CircularProgress value={23} color="#FE7B02" label="Abandoned Carts" sublabel="Recovery pending" />
                </div>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-4 mb-6'>
                <div className='p-4 flex items-center gap-4 border border-golden-1000/20 rounded-xl  shadow-11xl'>
                    <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-golden-1000/10'>
                        <img src="/images/dollar-golden-icon.svg" alt="" />
                    </div>
                    <div>
                        <h6 className='text-xs font-normal text-gray-1900'>Pipeline Value</h6>
                        <h5 className='text-xl font-bold text-blue-1300'>€847,320 <span className='text-xs text-green-2000'>+12.5%</span></h5>
                    </div>
                </div>
                <div className='p-4 flex items-center gap-4 border border-blue-1400/20 rounded-xl  shadow-11xl'>
                    <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-blue-1400/10'>
                        <img src="/images/timer-icon2.svg" alt="" />
                    </div>
                    <div>
                        <h6 className='text-xs font-normal text-gray-1900'>Avg Response Time</h6>
                        <h5 className='text-xl font-bold text-blue-1300'>2.4h <span className='text-xs text-green-2000'>+12.5%</span></h5>
                    </div>
                </div>
                <div className='p-4 flex items-center gap-4 border border-gray-3100 rounded-xl  shadow-11xl'>
                    <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-gray-3700'>
                        <img src="/images/cart-icon.svg" alt="" />
                    </div>
                    <div>
                        <h6 className='text-xs font-normal text-gray-1900'>Abandoned Carts</h6>
                        <h5 className='text-xl font-bold text-blue-1300'>127 <span className='text-xs text-green-2000'>+12.5%</span></h5>
                    </div>
                </div>
                <div className='p-4 flex items-center gap-4 border border-gray-3100 rounded-xl  shadow-11xl'>
                    <div className='w-11 h-11 flex items-center justify-center rounded-xl bg-gray-3700'>
                        <img src="/images/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h6 className='text-xs font-normal text-gray-1900'>Monthly Target</h6>
                        <h5 className='text-xl font-bold text-blue-1300'>78% <span className='text-xs text-green-2000'>+12.5%</span></h5>
                    </div>
                </div>
            </div>
            <div className='bg-white border my-6 border-gray-3100 shadow-11xl rounded-[12px] p-5'>
                <div className="flex items-center gap-2">
                    <span className='block w-1.5 h-1.5 rounded-full bg-golden-1000'></span>
                    <h6 className='text-sm font-bold text-blue-1300'>Sales Funnel</h6>
                </div>
                <div className='flex items-center flex-wrap  md:gap-0 gap-4 my-4'>
                    <div className='py-3 px-[26px] bg-[url(/images/shape-1.svg)] text-center  bg-size-[100%_100%] bg-no-repeat'>
                        <h6 className='text-lg font-bold text-blue-1300'>2,847</h6>
                        <span className="block text-[10px] uppercase font-normal text-blue-1300/80">Registered</span>
                    </div>
                    <div className='py-3 px-[26px] bg-[url(/images/shape-2.png)] text-center  bg-size-[100%_100%] bg-no-repeat'>
                        <h6 className='text-lg font-bold text-blue-1300'>1,923</h6>
                        <span className="block text-[10px] uppercase font-normal text-blue-1300/80">Document Uploaded</span>
                    </div>
                    <div className='py-3 px-[26px] bg-[url(/images/shape-3.png)]  text-center bg-size-[100%_100%] bg-no-repeat'>
                        <h6 className='text-lg font-bold text-blue-1300'>847</h6>
                        <span className="block text-[10px] uppercase font-normal text-blue-1300/80">Payment Pending</span>
                    </div>
                    <div className='py-3 px-[26px] bg-[url(/images/shape-4.png)] ml-1 text-center  bg-size-[100%_100%] bg-no-repeat'>
                        <h6 className='text-lg font-bold text-blue-1300'>523</h6>
                        <span className="block text-[10px] uppercase font-normal text-blue-1300/80">Service Active</span>
                    </div>
                </div>
                <h6 className="text-xs font-normal leading-4 text-gray-1900">Conversion Rate: <span className='text-green-2000'>18.4%</span></h6>
            </div>
            <div className='bg-white border my-6  border-gray-3100 shadow-11xl rounded-[12px] p-5'>
                <div className="flex items-center flex-wrap gap-4 justify-between">
                <div className="flex items-center gap-2">
                    <img src="/images/burn-icon.svg" alt="" />
                    <h6 className='text-sm font-bold text-blue-1300'>Hot Leads Ledger</h6>
                    <div className="text-xs font-bold text-blue-1300 py-0.5 px-2.5 rounded-full  bg-gray-2000">12 leads</div>
                </div>
                <form className="flex md:flex-row flex-col items-center gap-4">
                    <div className="relative md:flex-1 w-full">
                        <input
                            type="text"
                            className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-blue-1000 font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-8 bg-gray-1800 border border-gray-3100 rounded-[10px] w-full outline-0"
                            placeholder="Search students, transactions..."
                            value={filters.search}
                            onChange={(e) => dispatch(setSearch(e.target.value))}
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
                    <div className='relative'>
                        <CustomSelect className='bg-gray-1800! h-8! border pl-9! border-gray-3100!'
                            value={filters.country}
                            onChange={(e) => dispatch(setCountryFilter(e.target.value))}
                            options={[
                                { label: "All Status", value: "All Countries" },
                                { label: "Country", value: "Country" },
                                { label: "Spain", value: "Spain" },
                                { label: "Canada", value: "Canada" },
                                { label: "UK", value: "UK" },
                                { label: "UAE", value: "UAE" },
                                { label: "Australia", value: "Australia" },
                            ]}
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-4'>
                            <img src="/images/filter.svg" alt="" />
                        </div>
                    </div>
                </form>
                </div>
                <LeadsTable></LeadsTable>
            </div>
        </div>
    );
}
