import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
function GuranteeBar() {
     return (
          <div>
               <div className="flex items-center md:flex-nowrap flex-wrap gap-2 justify-between bg-white border-b border-gray-3600 py-4 md:px-8 px-4 mb-4">
                    <div>
                         <h4 className='text-2xl font-bold leading-8 text-blue-1300 mb-1'>Guarantees</h4>
                         <p className="text-sm font-normal leading-5 text-gray-1200">Manage student guarantee applications and risk assessments</p>
                    </div>
                    <ul className='flex  items-center justify-end  gap-1'>
                         <li>
                              <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                   <Image
                                        src="/images/export-icon4.svg"
                                        width="16"
                                        height="16"
                                        alt=""
                                   />
                                   Export
                              </Link>
                         </li>
                         <li>
                              <Button onClick={() => { }}
                                   iconSrc="/images/plus-icon.svg"
                                   label="New Application"
                                   className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
                              />
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default GuranteeBar
