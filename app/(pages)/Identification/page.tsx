'use client'

import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/ui/Button";

export default function page() {
     return (
          <div className="">
               <h4 className="font-segoe text-2xl font-normal leading-8 text-black-1200 mb-6">Identification</h4>
               <div className="rounded-lg bg-white border border-gray-1000 shadow-4xl p-6">
                    <div className="flex items-center gap-2 text-2xl font-normal leading-6 text-black13 mb-6">
                         <img src="/images/search-icon2.svg" alt="" />User Search
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4">
                         <div>
                              <InputField
                                   label="First Name"
                                   type="text"
                                   placeholder="Enter first name"
                                   iconSrc="/images/user-icon2.svg"
                              />
                         </div>
                         <div>
                              <InputField
                                   label="Last Name"
                                   type="text"
                                   placeholder="Enter last name"
                                   iconSrc="/images/user-icon2.svg"
                              />
                         </div>
                         <div>
                              <InputField
                                   label="Email"
                                   type="text"
                                   placeholder="Enter email address"
                                   iconSrc="/images/msg-icon.svg"
                              />
                         </div>
                         <div> <div>
                              <InputField
                                   label="Phone Number"
                                   type="text"
                                   placeholder="Enter phone number"
                                   iconSrc="/images/call-icon.svg"
                              />
                         </div>
                         </div>
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">Country of Study</label>
                              <div className="relative">
                                   <select
                                        className="appearance-none bg-[url(/images/down-arrow.svg)] pl-9 bg-no-repeat bg-[20px] bg-position-[right_20px_center] text-sm font-normal leading-5 font-neulis-sans text-black13 xl:pr-11 pr-8 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0"
                                   >
                                        <option>
                                             Select country
                                        </option>
                                   </select>
                                   <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                        <img src="/images/globe-icon.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">Date of Birth</label>
                              <div className="relative calendar-input">
                                   <input
                                        type="date"
                                        className="font-segoe max-w-[173px] pr-3 text-sm font-normal leading-normal h-10 text-gray-1400 w-full border border-gray1600 rounded-md pl-10 block"
                                   />

                                   <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                        <img src="/images/calendar-icon2.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="text-end mt-4">
                         <Button
                              label="Search Users"
                              className="text-white ml-auto bg-blue-1000"
                         />
                    </div>
               </div>
          </div>
     );
}
