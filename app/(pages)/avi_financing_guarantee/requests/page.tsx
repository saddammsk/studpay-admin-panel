'use client'
import CustomSelect from "@/app/components/CustomSelect";
import FinancingTable from "@/app/components/FinancingTable";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import { useState } from "react";


export default function FinanceAnalytics() {
     const [status, setStatus] = useState<string>("all");
     const [status2, setStatus2] = useState<string>("all");
     const [status3, setStatus3] = useState<string>("all");
     return (
          <div className="font-inter">
               <ul className="flex items-center gap-2 mb-6">
                    <li>
                         <Link href="/" className="text-sm font-normal block leading-5 text-gray-2400">Dashboard</Link>
                    </li>
                    <li>
                         <span className="text-sm font-normal block leading-5 text-gray-2400">/</span>
                    </li>
                    <li>
                         <Link href="/" className="text-sm font-normal block leading-5 text-gray-2400">AVI Financing Guarantee</Link>
                    </li>
                    <li>
                         <span className="text-sm font-normal block leading-5 text-gray-2400">/</span>
                    </li>
                    <li>
                         <p className="text-sm font-medium block leading-5 text-black-1500">Request</p>
                    </li>
               </ul>
               <h2 className="text-[30px] font-bold leading-9 text-black-1500 mb-2">AVI Financing Guarantee — Overview</h2>
               <p className="text-lg font-normal leading-7 text-gray-2600">Manage and review student financing guarantee requests</p>
               <div className="flex xl:flex-nowrap flex-wrap gap-5 mt-6">
                    <div className="4xl:w-[17%] xl:w-3/12 w-full">
                         <div className="border-r border-gray-2700 bg-white">
                              <div className="flex items-center justify-between border-b border-gray-2700 px-4 py-6">
                                   <div className="flex items-center gap-2 text-sm font-medium leading-5 text-gray-2500">
                                        <img src="/images/filter-icon2.svg" alt="" />Filters & Segments
                                   </div>
                                   <Link href=""><img src="/images/left-arrow2.svg" alt="" /></Link>
                              </div>
                              <div className="p-4">
                                   <h4 className="text-sm font-medium leading-5 mb-3 text-gray-2500">Saved Filters</h4>
                                   <div className="mb-6 space-y-2">
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">Near SLA</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">12</div>
                                        </div>
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">High Amount</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">8</div>
                                        </div>
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">Country: France</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">24</div>
                                        </div>
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">AI Risk  70%</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">6</div>
                                        </div>
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">Pending Review</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">45</div>
                                        </div>
                                        <div className="flex items-center justify-between p-2">
                                             <h6 className="text-sm font-normal leading-7 text-gray-2500">New This Week</h6>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full bg-gray-2000">18</div>
                                        </div>
                                   </div>
                                   <h4 className="text-sm font-medium leading-5 mb-3 text-gray-2500">Quick Segments</h4>
                                   <div className="space-y-2 mb-6">
                                        <div className="flex items-center justify-between p-3 border border-gray-2700 rounded-md">
                                             <div>
                                                  <h6 className="text-sm font-normal leading-5 mb-1 text-gray-2500">Urgent Review</h6>
                                                  <h6 className="text-sm font-normal leading-4 text-gray-2600">
                                                       SLA &lt; 24h
                                                  </h6>
                                             </div>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full border border-gray-2000">12</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-2700 rounded-md">
                                             <div>
                                                  <h6 className="text-sm font-normal leading-5 mb-1 text-gray-2500">High Risk</h6>
                                                  <h6 className="text-sm font-normal leading-4 text-gray-2600">
                                                       AI Score &gt; 80%
                                                  </h6>
                                             </div>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full border border-gray-2000">4</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-2700 rounded-md">
                                             <div>
                                                  <h6 className="text-sm font-normal leading-5 mb-1 text-gray-2500">Large Amounts</h6>
                                                  <h6 className="text-sm font-normal leading-4 text-gray-2600">
                                                       &lt; $50K
                                                  </h6>
                                             </div>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full border border-gray-2000">12</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-2700 rounded-md">
                                             <div>
                                                  <h6 className="text-sm font-normal leading-5 mb-1 text-gray-2500">Large Amounts</h6>
                                                  <h6 className="text-sm font-normal leading-4 text-gray-2600">
                                                       European Union
                                                  </h6>
                                             </div>
                                             <div className="text-xs font-semibold leading-4 text-gray-2500 py-0.75 px-2.75 rounded-full border border-gray-2000">12</div>
                                        </div>
                                   </div>
                                   <h4 className="text-sm font-medium leading-5  text-gray-2500">  Starred Views</h4>
                                   <div className="flex items-center gap-2 p-2">
                                        <img src="/images/star-icon2.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-7 text-gray-2500">Monthly Review</h6>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="4xl:w-[83%] xl:w-9/12 w-full">
                         <div className="bg-white p-4">
                              <div className="flex items-center justify-between mb-4">
                                   <div className="max-w-[320px] w-full">
                                        <InputField
                                             type="text"
                                             placeholder="Search by student name, guarantor, or ID..."
                                             iconSrc="/images/search-icon2.svg"
                                        />
                                   </div>
                                   <Button
                                        label="Export"
                                        className="text-gray-2500 bg-transparent py-2! gap-4 border border-gray-2700 justify-center "
                                        iconSrc="/images/export-icon4.svg"
                                   />
                              </div>
                              <div className="2xl:flex grid grid-cols-3 items-center gap-3 max-w-200.5">
                                   <div className="w-full">
                                        <CustomSelect
                                             value={status}
                                             onChange={(e) => setStatus(e.target.value)}
                                             options={[
                                                  { label: "All Status", value: "all" },
                                                  { label: "Active", value: "active" },
                                                  { label: "Inactive", value: "inactive" },
                                             ]}
                                        />
                                   </div>
                                   <div className="w-full relative">
                                        <div className="absolute top-1/2 z-20 -translate-y-1/2 left-3">
                                             <img src="/images/flag-icon.svg" alt="" />
                                        </div>
                                        <CustomSelect
                                             className="text-center"
                                             value={status2}
                                             onChange={(e) => setStatus2(e.target.value)}
                                             options={[
                                                  { label: "Country", value: "all" },
                                                  { label: "Active", value: "active" },
                                                  { label: "Inactive", value: "inactive" },
                                             ]}
                                        />
                                   </div>
                                   <div className="w-full ">
                                        <InputField ClassName="bg-white font-medium placeholder:text-gray-2500!"
                                             type="text"
                                             placeholder="Amount Range"
                                             iconSrc="/images/dollar-icon2.svg"
                                        />
                                   </div>
                                   <div className="w-full calendar-input">
                                        <InputField ClassName="bg-white font-medium placeholder:text-gray-2500!"
                                             type="date"
                                             placeholder="Amount Range"
                                        />
                                   </div>
                                   <div className="w-full">
                                        <Button
                                             label="More Filters"
                                             className="text-gray-2500 bg-transparent py-2! gap-4 border border-gray-2700 justify-center "
                                             iconSrc="/images/filter.svg"
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="md:p-6">
                              <div className="mb-10">
                                   <FinancingTable></FinancingTable>
                              </div>
                              <div className="bg-white flex flex-wrap gap-5 items-center justify-between md:px-6 px-3 py-4">
                                   <div className="flex items-center flex-wrap gap-6">
                                        <h6 className="text-sm font-normal leading-5 text-gray-2600">Showing 1 to 25 of 847 results</h6>
                                        <div className="flex items-center gap-2">
                                             <h6 className="text-sm font-normal leading-5 text-gray-2600">Show</h6>
                                             <CustomSelect className="py-1.5!"
                                                  value={status3}
                                                  onChange={(e) => setStatus3(e.target.value)}
                                                  options={[
                                                       { label: "25", value: "25" },
                                                       { label: "26", value: "26" },
                                                       { label: "27", value: "27" },
                                                  ]}
                                             />
                                             <h6 className="text-sm font-normal leading-5 text-gray-2600">per page</h6>
                                        </div>
                                   </div>

                                   <ul className="flex items-center gap-1">
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md border border-gray-2700 flex items-center justify-center"><img src="/images/double-left-arrow.svg" alt="" /></Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md border border-gray-2700 flex items-center justify-center"><img src="/images/left-arrow5.svg" alt="" /></Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md text-sm font-medium leading-5 text-gray-2500 border border-gray-2700 flex items-center justify-center">1</Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md text-sm font-medium leading-5 text-gray-2500 border border-gray-2700 flex items-center justify-center">2</Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md text-sm font-medium leading-5 text-gray-2500 border border-gray-2700 flex items-center justify-center">3</Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md text-sm font-medium leading-5 text-gray-2500 flex items-center justify-center">...</Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md text-sm font-medium leading-5 text-gray-2500 border border-gray-2700 flex items-center justify-center">34</Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md border border-gray-2700 flex items-center justify-center"><img src="/images/right-arrow2.svg" alt="" /></Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 rounded-md border border-gray-2700 flex items-center justify-center"><img src="/images/right-arrow-double.svg" alt="" /></Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
